import { Navigate, useParams } from 'react-router-dom'
import { getLocalPage } from '../data/localPages.js'
import { getEducationPage } from '../data/educationPages.js'
import LocalPage from './LocalPage.jsx'
import EducationPage from './EducationPage.jsx'

/**
 * Resolves a single URL segment to the right page:
 * local area page, loan-education page, else redirect home.
 */
export default function SlugPage() {
  const { slug } = useParams()
  if (getLocalPage(slug)) return <LocalPage />
  if (getEducationPage(slug)) return <EducationPage />
  return <Navigate to="/" replace />
}
