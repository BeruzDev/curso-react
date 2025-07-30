import  Link  from '../components/Link.jsx'
import './About.css'

const i18n = {
  es: {
    title: 'Sobre mi',
    description:
      '¡Hola! me llamo Albert Castro y estoy creando un clon de React Router.',
    button: 'Ir a Home',
  },
  en: {
    title: 'About me',
    description:
      '¡Hello! my name is Albert Castro and I am creating a React Router clone.',
    button: 'Go to Home',
  },
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

const About = ({ routerParams }) => {
  const i18n = useI18n(routerParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://albertcastro.vercel.app/assets/profile-img-BcaAk6xp.webp"
          alt="Foto de beruzdev"
          className="profile-pic"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  )
}

export default About
