import Link from "../components/Link"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Esta es una página de ejemplo para crear un React Router des de cero
      </p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}

export default Home
