import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const siteUrl = 'https://abhijeetpratapsingh.in'
export const siteName = 'Abhijeet Pratap Singh'
export const defaultTitle = 'Abhijeet Pratap Singh | Senior Flutter & AI Engineer in Bengaluru'
export const defaultDescription =
  'Abhijeet Pratap Singh is a Senior Software Engineer in Bengaluru, India building Flutter apps, Dart mobile architecture, offline-first systems, and practical AI tooling.'

export const personKeywords = [
  'Senior Software Engineer',
  'Senior Flutter Engineer',
  'Flutter developer',
  'Dart mobile architecture',
  'offline-first mobile apps',
  'mobile application architecture',
  'AI developer tooling',
  'Generative AI workflows',
  'construction technology',
  'performance optimization',
  'Bengaluru',
  'India',
]

export function absoluteUrl(pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`

  return `${siteUrl}${normalizedPath}`
}

export function projectSeoTitle(project) {
  const titles = {
    'aurigo-build-mobile':
      'Aurigo Build Mobile Case Study | Offline-First Flutter Construction App',
    dartly: 'Dartly Case Study | AI Tooling for JavaScript to Dart Workflows',
    sitevision: 'SiteVision Case Study | AI Construction Tech Reporting',
    'botmywork-chatbot-builder':
      'BotMyWork Case Study | Scalable Chatbot Platform Engineering',
  }

  return titles[project.slug] ?? `${project.title} Case Study | Abhijeet Pratap Singh`
}

export function projectSeoDescription(project) {
  return `${project.summary} Case study by Abhijeet Pratap Singh covering ${project.stack.join(', ')}.`
}

export function projectSeoAnchor(project) {
  const anchors = {
    'aurigo-build-mobile': 'Read the offline-first Flutter construction app case study',
    dartly: 'Read the AI JavaScript-to-Dart tooling case study',
    sitevision: 'Read the AI construction site reporting case study',
    'botmywork-chatbot-builder': 'Read the scalable chatbot platform engineering case study',
  }

  return anchors[project.slug] ?? `Read the ${project.title} case study`
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

export function Seo({
  title = defaultTitle,
  description = defaultDescription,
  pathname,
  type = 'website',
  noindex = false,
  structuredData,
}) {
  const location = useLocation()
  const canonicalPath = pathname ?? location.pathname
  const canonicalUrl = absoluteUrl(canonicalPath)

  useEffect(() => {
    document.title = title

    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow',
    })
    setLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })

    document.head
      .querySelectorAll('script[data-route-json-ld="true"], script[data-prerender-json-ld]')
      .forEach((element) => {
        element.remove()
      })

    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.routeJsonLd = 'true'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [canonicalUrl, description, noindex, structuredData, title, type])

  return null
}

export function personJsonLd({ email, location, sameAs = [] }) {
  const personId = `${siteUrl}/#person`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: siteName,
        url: siteUrl,
        email,
        jobTitle: ['Senior Software Engineer', 'Senior Flutter Engineer', 'Flutter + AI Engineer'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressCountry: 'India',
          addressRegion: location,
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Aurigo Software Private Limited',
        },
        knowsAbout: personKeywords,
        sameAs,
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: siteUrl,
        name: `${siteName} - Senior Flutter and AI Engineer`,
        description: defaultDescription,
        mainEntity: {
          '@id': personId,
        },
      },
    ],
  }
}

export function projectJsonLd(project, pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: absoluteUrl(pathname),
    creator: {
      '@type': 'Person',
      name: siteName,
      url: siteUrl,
    },
    keywords: [...project.stack, project.category, project.roleLabel, 'Abhijeet Pratap Singh'].join(
      ', ',
    ),
  }
}

function toIsoDate(date) {
  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return date
  }

  return parsedDate.toISOString().slice(0, 10)
}

export function articleJsonLd(post, pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: toIsoDate(post.date),
    author: {
      '@type': 'Person',
      name: siteName,
      url: siteUrl,
    },
    keywords: ['AI workflows', 'multi-agent systems', 'engineering productivity'].join(', '),
    url: absoluteUrl(pathname),
    mainEntityOfPage: absoluteUrl(pathname),
  }
}
