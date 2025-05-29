import { createRoot, reactRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.getElementById('app'))
root.render(
	<App />
)
