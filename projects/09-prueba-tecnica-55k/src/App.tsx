import './App.css'
import { useEffect, useState } from 'react'
import UsersList from './components/UsersList.tsx'
import { type User } from './types.d'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry((prevState) => !prevState)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const sortedUsers = sortByCountry
    ? users.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    : users

  return (
    <div className="App">
      <h1>Prueba tecnica</h1>

      <header>
        <button onClick={toggleColors}>Colorear filas</button>

        <button onClick={toggleSortByCountry}>Ordenar por país</button>
      </header>

      <main>
        <UsersList deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
      </main>
    </div>
  )
}

export default App
