import { useState } from "react"
import './App.css'

function navigate (href) {
  window.history.pushState({}, '',  href)

  // Make new custom event
  
}

function HomePage() {
  return(
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router des de cero</p>
      <a href='/about'>Ir a Sobre nosotros</a>
    </>
  )
}

function AboutPage() {
  return(
    <>
      <h1>About</h1>
        <div>
          <img src='https://albertcastro.vercel.app/assets/profile-img-BcaAk6xp.webp' alt='Foto de beruzdev'/>
          <p>Hola me llamo Albert Castro y estoy creando un clon de React Router.</p>
        </div>
      <a href='/'>Ir a Home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
