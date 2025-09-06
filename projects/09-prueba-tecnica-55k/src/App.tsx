import './App.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import UsersList from './components/UsersList.tsx'
import { SortBy, type User } from './types.d'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  useEffect(() => {
    setLoading(true)
    setError(false)

    fetch(
      `https://randomuser.me/api?results=10&seed=beruzdev&page=${currentPage}`
    )
      .then(async (res) => {
        if (!res.ok) throw new Error('Error fetching users')
        return await res.json()
      })
      .then((res) => {
        setUsers(prevUsers => {
          const newUsers = prevUsers.concat(res.results)
          originalUsers.current = newUsers
          return newUsers
        })
        
      })
      .catch((err) => {
        setError(err)
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

  const visibleUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users
  }, [filterCountry, users])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return visibleUsers

    if (sorting === SortBy.COUNTRY) {
      return visibleUsers.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    }

    if (sorting === SortBy.NAME) {
      return visibleUsers.toSorted((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
    }

    if (sorting === SortBy.LAST) {
      return visibleUsers.toSorted((a, b) => {
        return a.name.last.localeCompare(b.name.last)
      })
    }

    return visibleUsers
  }, [visibleUsers, sorting])

  return (
    <div className="App">
      <h1>Prueba tecnica</h1>

      <header>
        <button onClick={toggleColors}>Colorear filas</button>

        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY
            ? 'Desordenar por país'
            : 'Ordenar por país'}
        </button>

        <button onClick={handleReset}>Resetear estado</button>

        <input
          type="text"
          placeholder="Filtrar por país"
          onChange={(input) => {
            setFilterCountry(input.target.value)
          }}
        />
      </header>

      <main>
        {users.length > 0 && (
          <UsersList
            changeSorting={handleChangeSort}
            deleteUser={handleDelete}
            showColors={showColors}
            users={sortedUsers}
          />
        )}

        {loading && <strong>Cargando...</strong>}

        {!loading && error && <p>Ha ocurrido un error</p>}

        {!loading && !error && users.length === 0 && <p>No hay usuarios</p>}

        {!loading && !error && users.length > 0 && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            Cargar más
          </button>
        )}
      </main>
    </div>
  )
}

export default App
