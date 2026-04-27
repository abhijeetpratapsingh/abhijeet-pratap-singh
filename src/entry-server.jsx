import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import {
  absoluteUrl,
  articleJsonLd,
  defaultDescription,
  defaultTitle,
  personJsonLd,
  projectJsonLd,
  projectSeoDescription,
  projectSeoTitle,
} from './components/Seo'
import {
  contact,
  featuredProjects,
  isRealProfileUrl,
  resumeSections,
} from './data/siteContent'
import { writingPosts } from './content/writing'
import './styles.css'

export function render(pathname) {
  return renderToString(
    <MemoryRouter initialEntries={[pathname]}>
      <App />
    </MemoryRouter>,
  )
}

export function getPrerenderRoutes() {
  const sameAs = [contact.linkedin, contact.github].filter(isRealProfileUrl)
  const personSchema = personJsonLd({
    email: contact.email,
    location: contact.location,
    sameAs,
  })

  return [
    {
      pathname: '/',
      title: defaultTitle,
      description: defaultDescription,
      type: 'profile',
      structuredData: personSchema,
    },
    {
      pathname: '/resume',
      title: 'Resume | Abhijeet Pratap Singh, Senior Software Engineer',
      description: resumeSections.summary,
      type: 'profile',
      structuredData: personSchema,
    },
    {
      pathname: '/projects',
      title: 'Projects | Abhijeet Pratap Singh',
      description:
        'Case studies from Abhijeet Pratap Singh across Flutter architecture, offline-first mobile systems, AI tooling, and platform engineering.',
      type: 'website',
    },
    ...featuredProjects.map((project) => ({
      pathname: `/projects/${project.slug}`,
      title: `${projectSeoTitle(project)} | Abhijeet Pratap Singh`,
      description: projectSeoDescription(project),
      type: 'article',
      structuredData: projectJsonLd(project, `/projects/${project.slug}`),
    })),
    {
      pathname: '/writing',
      title: 'Writing | Abhijeet Pratap Singh',
      description:
        'Published essays and developing notes from Abhijeet Pratap Singh on engineering systems, AI workflows, Flutter architecture, and delivery.',
      type: 'website',
    },
    ...writingPosts.map((post) => ({
      pathname: `/writing/${post.slug}`,
      title: `${post.title} | Abhijeet Pratap Singh`,
      description: post.summary,
      type: 'article',
      structuredData: articleJsonLd(post, `/writing/${post.slug}`),
    })),
  ].map((route) => ({
    ...route,
    url: absoluteUrl(route.pathname),
  }))
}
