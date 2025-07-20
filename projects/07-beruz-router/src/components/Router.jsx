import { useState } from "react"
import { useEffect } from "react"
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

  const Page = routes.find(({ path }) => path === currentPath)?.Component

	
	return Page ? <Page /> : <DefaultComponent />
}

export default Router
