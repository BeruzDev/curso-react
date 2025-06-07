import { useState, useEffect } from 'react'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState(null)

  //Recuperar imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    //Recuperar las tres primeras palabras -> MDN -> si no me acuerdo
    const ThreeFirstWords = fact.split(' ').slice(0, 3).join(' ') // fact.split(' ', 3).join(' ') <- se queda con las tres primeras palabras

    fetch(`https://cataas.com/cat/says/${ThreeFirstWords}?&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
