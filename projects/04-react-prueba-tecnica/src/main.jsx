//https://www.npmjs.com/package/react-dom <-- dcumentacion!

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.getElementById('app'))
root.render(
	<App />
)
