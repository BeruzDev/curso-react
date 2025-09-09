const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))

export const fetchUsers = async (page: number) => {
  await delay(300)
  throw new Error('Error fetching users')

  return await fetch(
    `https://randomuser.me/api?results=10&seed=beruzdev&page=${page}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error('Error fetching users')
      return await res.json()
    })
    .then(res => {
      const currentPage = Number(res.info.page)
      const nextCursor = currentPage + 1
      return {
        users: res.results,
        nextCursor: nextCursor > 3 ? undefined : nextCursor, // Límite de 3 páginas
      }
    })
}