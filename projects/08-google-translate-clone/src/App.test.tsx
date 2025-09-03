import { test, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My App works as expected', async () => {
	//1. Simulamos un usuario
	const user = userEvent.setup()

	//2. Renderizamos App.tsx
	const app = render(<App />)

	//3. Recuperamos el elemento con un placeholder que contenga 'Enter a text'
	const textareaFrom = app.getByPlaceholderText('Enter a text')
	
	//4. Simulamos que el usuario escribe en el textarea la frase 'Hola mundo'
	await user.type(textareaFrom, 'Hola mundo')

	//5. Recuperamos el resultado buscando en la app un valor 'Hello world' que es la traduccion correcta.
	const result = await app.findByDisplayValue(/Hello world/i)

	//6. Esperamos que el resultado sea true -> correcto
	expect(result).toBeTruthy()
})