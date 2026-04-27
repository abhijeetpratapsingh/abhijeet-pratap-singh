import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const distPath = path.join(root, 'dist')
const serverPath = path.join(distPath, 'server')
const templatePath = path.join(distPath, 'index.html')

async function findFileRecursively(directory, matcher) {
  const entries = await fs.readdir(directory, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      const nestedMatch = await findFileRecursively(fullPath, matcher)

      if (nestedMatch) {
        return nestedMatch
      }
    } else if (matcher(entry.name, fullPath)) {
      return fullPath
    }
  }

  return null
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function escapeJson(value) {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}

function setTag(html, pattern, replacement) {
  return html.replace(pattern, replacement)
}

function withHead(html, route) {
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)
  const canonicalUrl = route.url
  const robots = route.noindex ? 'noindex, nofollow' : 'index, follow'

  let nextHtml = html

  nextHtml = setTag(nextHtml, /<title>.*?<\/title>/s, `<title>${title}</title>`)
  nextHtml = setTag(
    nextHtml,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/>/,
    `<meta name="robots" content="${robots}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${route.type}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  )
  nextHtml = setTag(
    nextHtml,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  )
  nextHtml = nextHtml.replace(
    /\n\s*<script type="application\/ld\+json" data-prerender-json-ld>[\s\S]*?<\/script>/g,
    '',
  )

  if (route.structuredData) {
    nextHtml = nextHtml.replace(
      '</head>',
      `    <script type="application/ld+json" data-prerender-json-ld>${escapeJson(
        route.structuredData,
      )}</script>\n  </head>`,
    )
  }

  return nextHtml
}

function outputPathForRoute(pathname) {
  if (pathname === '/') {
    return path.join(distPath, 'index.html')
  }

  return path.join(distPath, pathname, 'index.html')
}

function htmlOutputPathForRoute(pathname) {
  if (pathname === '/') {
    return null
  }

  return path.join(distPath, `${pathname}.html`)
}

const template = await fs.readFile(templatePath, 'utf8')
const serverEntryPath = await findFileRecursively(
  serverPath,
  (fileName) => fileName.startsWith('entry-server') && fileName.endsWith('.js'),
)

if (!serverEntryPath) {
  throw new Error('Could not find the built SSR entry in dist/server.')
}

const { getPrerenderRoutes, render } = await import(serverEntryPath)
const routes = getPrerenderRoutes()

await Promise.all(
  routes.map(async (route) => {
    const appHtml = render(route.pathname)
    const html = withHead(
      template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
      route,
    )
    const outputPath = outputPathForRoute(route.pathname)
    const htmlOutputPath = htmlOutputPathForRoute(route.pathname)

    await fs.mkdir(path.dirname(outputPath), { recursive: true })
    await fs.writeFile(outputPath, html)

    if (htmlOutputPath) {
      await fs.mkdir(path.dirname(htmlOutputPath), { recursive: true })
      await fs.writeFile(htmlOutputPath, html)
    }
  }),
)

await fs.rm(serverPath, { recursive: true, force: true })
