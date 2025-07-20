import { useState } from "react"
import { useEffect } from "react"
import { match } from "path-to-regexp"
import { EVENTS } from '../consts/consts.js'

const Router = ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange) 

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    };
  }, []);

  let routerParams = {}


  const Page = routes.find(({ path }) =>{
    if (path === currentPath) return true

    // Hemos usado path-to-regexp
    // para poder detectar ruatas dinamicas como por ejemplo
    // /search/:query <- :query es una ruta dinamica
    const matcherUrl = match(path, {decode: decodeURIComponent})
    const matched = matcherUrl(currentPath)

    if(!matched) return false

    // Guardar los parametros de la url que eran dinamicos
    // y que hemos extraido con path-to regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routerParams = matched.params // <- {query: 'javascript'}
    return true

  })?.Component
	
	return Page ? <Page routerParams={routerParams}/> : <DefaultComponent routerParams={routerParams}/>
}

export default Router
