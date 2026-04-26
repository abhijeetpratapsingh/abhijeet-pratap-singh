import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/ResumePage'
import { WritingPostPage } from './pages/WritingPostPage'
import { WritingPage } from './pages/WritingPage'

function NotFoundPage() {
  return (
    <div className="page inner-page not-found-page">
      <p className="eyebrow">404</p>
      <h1 className="page-title">Page not found.</h1>
      <p className="lead">
        The page you requested does not exist. Use the main navigation to return to the
        portfolio, case studies, or resume.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/:slug" element={<WritingPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
