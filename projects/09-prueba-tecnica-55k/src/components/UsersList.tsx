import {type User } from '../types.d'

interface Props {
	showColors: boolean,
	users: User[]
}

const usersList = ({ users, showColors }: Props) => {
	return (
		<table width={"100%"}>
			<thead>
				<tr>
					<th>Foto</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>País</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => {

					const backgroundColor = index % 2 === 0 ? '#333' : '#666'
					const color = showColors ? backgroundColor : 'transparent'
					return (
						<tr key={index} style={{ backgroundColor: color }}>
							<td>
								<img src={user.picture.thumbnail} />
							</td>
							<td>
								{user.name.first}
							</td>
							<td>
								{user.name.last}
							</td>
							<td>
								{user.location.country}
							</td>
							<td>
								<button>Editar</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default usersList

//table, thead, tbody --> tabla, cabecera y cuerpo
//tr --> fila de la tabla
//th --> celdas de encabezado
//td --> celdas