import { useParams } from 'react-router-dom'
import { getLocalPage } from '../data/localPages.js'
import { getEducationPage } from '../data/educationPages.js'
import LocalPage from './LocalPage.jsx'
import EducationPage from './EducationPage.jsx'
import NotFound from './NotFound.jsx'

/**
 * Resolves a single URL segment to the right page:
 * local area page, loan-education page, else a real "not found" page (noindex).
 */
export default function SlugPage() {
  const { slug } = useParams()
  if (getLocalPage(slug)) return <LocalPage />
  if (getEducationPage(slug)) return <EducationPage />
  return <NotFound />
}
