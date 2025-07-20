import Link from '../components/Link.jsx'
import './About.css'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://albertcastro.vercel.app/assets/profile-img-BcaAk6xp.webp"
          alt="Foto de beruzdev"
          className='profile-pic'
        />
        <p>
          Hola me llamo Albert Castro y estoy creando un clon de React Router.
        </p>
      </div>
      <Link to='/'>Ir a Home</Link>
    </>
  )
}

export default About
