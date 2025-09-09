import { useUsers } from '../hooks/useUsers'

const Results = () => {
  const { users } = useUsers()
  return (
		<div>
			<h3>Resultados {users.length}</h3>
		</div>
	)
}

export default Results
