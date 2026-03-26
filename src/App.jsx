import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import HomePage    from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import StackPage   from './pages/StackPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const PAGES = {
  Home:     HomePage,
  Projects: ProjectsPage,
  Stack:    StackPage,
  Contact:  ContactPage,
}

export default function App() {
  const [page, setPage] = useState('Home')
  const Page = PAGES[page]

  return (
    <>
      <NavBar page={page} setPage={setPage} />
      <Page key={page} setPage={setPage} />
    </>
  )
}
