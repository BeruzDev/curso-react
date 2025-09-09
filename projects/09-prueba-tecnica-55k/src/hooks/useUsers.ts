import { fetchUsers } from '../services/users'
import { useInfiniteQuery } from '@tanstack/react-query'
import { type User } from '../types.d'

export const useUsers = () => {
  const {
    data,
    isLoading: queryLoading,
    error: queryError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>({
    queryKey: ['users'],
    queryFn: ({ pageParam }) => fetchUsers(pageParam as number), // ← Cast a number
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor
    },
    initialPageParam: 1,
  })

  return {
    data,
    queryLoading,
    queryError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    users: data?.pages?.flatMap(page => page.users) ?? []
  }
}
