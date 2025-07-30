import { lazy } from 'react'
import { Suspense } from 'react'
import './App.css'
import Router from './components/Router.jsx'
import Route from './components/Route.jsx'

//Lazy imports

const LazyHome = lazy(() => import('./pages/Home.jsx'))
const LazyAbout = lazy(() => import('./pages/About.jsx'))
const LazyPage404 = lazy(() => import('./pages/Page404.jsx'))
const LazySearchPage = lazy(() => import('./pages/SearchPage.jsx'))


const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAbout,
  },
  {
    path: '/search/:query',
    Component: LazySearchPage,
  },
]

function App() {
  return (
    <main>
       <Suspense fallback={null}>{/* <--Componente en suspenso para el LAZYLOAD  */}
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path="/" Component={LazyHome} />
          <Route path="/about" Component={LazyAbout} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
