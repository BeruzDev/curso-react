import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

/* 
!!DEBOUNCE 
para no estar usando tokens cada vez que se escribe,
dejar 500ms antes de hacer la peticion a la API

0ms -> el usuario escribe 'h'
	useEffect ... -> linea 7
150ms -> el usuario escribe 'ho'
	clear useEffect -> linea 11
	useEffect ... -> linea 7
300ms -> el usuario escribe 'hol'
	clear useEffect -> linea 11
	useEffect ... -> linea 7
400ms -> el usuario escribe 'hola'
	clear useEffect -> linea 11
	useEffect ... -> linea 7
500ms -> setDevouncedValue('hola') -> linea 8 
al pasar los 500ms se devuelve el devouncedValue('hola') -> linea 14
*/
