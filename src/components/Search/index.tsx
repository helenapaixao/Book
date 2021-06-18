import { Dispatch, SetStateAction } from 'react'
import { BookProps } from '../../types/index'
import * as S from './styles'

type Search = {
  setError: Dispatch<SetStateAction<string>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setStartItem: Dispatch<SetStateAction<number>>
  setQuery: Dispatch<SetStateAction<string>>
  setBooks: Dispatch<SetStateAction<BookProps[]>>
}

export function Search({
  setError,
  setLoading,
  setStartItem,
  setQuery,
  setBooks
}: Search) {
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Search book"
        onChange={({ target }) => {
          if (target.value.length > 0) {
            setError('')
            setLoading(true)
          }
          setStartItem(0)
          setQuery(target.value)
          setBooks([])
        }}
      />
    </S.Container>
  )
}
