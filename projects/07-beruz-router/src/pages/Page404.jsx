import React from 'react'
import Link from '../components/Link'

const Page404 = () => {
	return (
		<>
			<div>
				<h1>This is not fine</h1>
				<img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro This is fine'/>
			</div>
			<Link to='/'>Volver a home</Link>
		</>
	)
}

export default Page404
