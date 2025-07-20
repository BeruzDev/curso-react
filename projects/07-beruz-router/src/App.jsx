import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Router from './components/Router.jsx'

const appRoutes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  }
]

function App() {
  
  return (
    <main>
      <Router routes={appRoutes}
      />
    </main>
  )
}

export default App
