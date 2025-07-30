import React, { useState, useEffect } from 'react'
import { Children } from 'react'
import { match } from 'path-to-regexp'
import { EVENTS } from '../consts/consts.js'
import { getCurrentPath } from '../utils.js'

const Router = ({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) => {
  const [currentPath, setCurrentPath] = useState(() => getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  let routerParams = {}

  // El Children de react en clg se ve asi:
  // Object 0:
  // $$typeof: Symbol(react.transitional.element)
  // key: null
  // props: {path: '/', Component: ƒ} //!! <- Aqui vemos las props
  // type: ({ path, Component })=>{ return null; } //!! <- Aqui sacamos el name
  //   length: 1
  //   name: "Route"
  //   arguments: (...)
  //   caller: (...)
  // _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
  // _store:  {validated: 1}
  // ref: null
  // _debugInfo: null
  // _debugStack: Error: react-stack-top-frame at exports.jsxDEV (http://localhost:5173/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=13659653:249:30) at App (http://localhost:5173/src/App.jsx?t=1753113516151:40:31) at react-stack-bottom-frame (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:17678:20) at renderWithHooksAgain (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:4535:22) at renderWithHooks (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:4471:24) at updateFunctionComponent (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:6873:21) at beginWork (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:7908:20) at runWithFiberInDEV (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:1739:72) at performUnitOfWork (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:11122:98) at workLoopSync (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=13659653:10982:43)
  // _debugTask: {run: ƒ}
  // [[Prototype]]: Object

  // Add routes del Children <Route /> component
  const routesFromChildren = Children.map(children, ({props, type}) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  console.log(routesFromChildren)

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // Hemos usado path-to-regexp
    // para poder detectar ruatas dinamicas como por ejemplo
    // /search/:query <- :query es una ruta dinamica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)

    if (!matched) return false

    // Guardar los parametros de la url que eran dinamicos
    // y que hemos extraido con path-to regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routerParams = matched.params // <- {query: 'javascript'}
    return true
  })?.Component

  return Page ? (
    <Page routerParams={routerParams} />
  ) : (
    <DefaultComponent routerParams={routerParams} />
  )
}

export default Router
