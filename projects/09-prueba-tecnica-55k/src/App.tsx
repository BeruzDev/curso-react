import './App.css'
import { useMemo, useState } from 'react'
import UsersList from './components/UsersList.tsx'
import { SortBy, type User } from './types.d'
import { useUsers } from './hooks/useUsers.ts'
import Results from './components/Results.tsx'
function App() {
    const {
    users,
    queryLoading,
    queryError,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useUsers()

  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = async () => {
    await refetch()
  }

  const handleDelete = (email: string) => {
    //const filteredUsers = users.filter((user) => user.email !== email)
    //setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

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

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    }

    return visibleUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [visibleUsers, sorting])

  return (
    <div className="App">
      <h1>Prueba tecnica</h1>
      
      <Results />

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

        {queryLoading && <strong>Cargando...</strong>}

        {queryError && <p>Ha ocurrido un error</p>}

        {!queryLoading && !queryError && users.length === 0 && (
          <p>No hay usuarios</p>
        )}

        {!queryLoading && !queryError && hasNextPage &&(
          <button onClick={() => {void fetchNextPage()}}>
            Cargar más
          </button>
        )}

        {!queryLoading && !queryError && hasNextPage === false && (
          <p>No hay mas resultados</p>
        )}
      </main>
    </div>
  )
}

export default App
