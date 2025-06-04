import { useState, useEffect } from 'react'
import { getRandomFact } from '../Services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  //Recuperar cita
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
