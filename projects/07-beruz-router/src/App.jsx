import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Router from './components/Router.jsx'
import Page404 from './pages/Page404.jsx'
import SearchPage from './pages/SearchPage.jsx'

const appRoutes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  
  return (
    <main>
      <Router 
        routes={appRoutes}
        defaultComponent={Page404}
      />
    </main>
  )
}

export default App
