import { useEffect } from "react"


const SearchPage = ({ routerParams }) => {
	useEffect(() => {
		document.title = `Has buscado ${routerParams.query}`

		
	}, []);

  return (
    <>
      <h1>Has buscado {routerParams.query}</h1>
    </>
  )
}

export default SearchPage
