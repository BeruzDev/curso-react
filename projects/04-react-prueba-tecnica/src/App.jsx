import { useEffect, useState } from 'react'

//Guardamos la ruta de la API en una template string
const CAT_ENDPOINT_RANDOM_FACT =`https://catfact.ninja/fact`
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`

const App = () => {
  //RECUPERAMOS UN HECHO
  const [fact, setFact] = useState('something cat fact')
	
	useEffect(() => {
		fetch(CAT_ENDPOINT_RANDOM_FACT)
			.then(res => res.json())

	})

  return (
    <main>
      <h2>app de gatitos</h2>
			<p>{fact}</p>
    </main>
  )
}

export default App
