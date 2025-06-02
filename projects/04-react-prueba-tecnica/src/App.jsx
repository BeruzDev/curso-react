import './style.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleRandomFact = async () => {
    refreshFact()
  }

  return (
    <main>
      <h2>app de gatitos</h2>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted useng de fits three words for ${fact}`}
        />
      )}
      <button onClick={handleRandomFact}>Get new fact</button>
      {fact && <p>{fact}</p>}

    </main>
  )
}

export default App
