import useSWR from 'swr'
import { ApiContext, User } from 'types'

export type UseUserProps = {
  id: number
  initial?: User
}

export type UseUser = {
  user?: User
  isLoading: boolean
  isError: boolean
}

/**
 * ユーザAPI（個別取得）のカスタムフック
 * @param context APIコンテキスト
 * @returns ユーザとAPI呼び出しの状態
 */
const useUser = (
  context: ApiContext,
  { id, initial }: UseUserProps,
): UseUser => {
  const { data, error } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
  )

  return {
    user: data ?? initial,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
