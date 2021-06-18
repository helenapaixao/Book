import { useState } from 'react'
import useService from '../../hooks/useService'
import { useDebounce } from 'react-use'
import { SEARCH_BOOKS } from '../../services/api'
import { Main } from '../Main'
import { Search } from '../Search'
import { Books } from '../Books'
import { Loading } from '../Loading'
import { BookProps } from '../../types/index'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

export function PrincipalHome() {
  const [books, setBooks] = useState<BookProps[]>([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [startItem, setStartItem] = useState(0)
  const [infinite, setInfinite] = useState(0)
  const [loading, setLoading] = useState(true)
  const [wait, setWait] = useState(false)

  const router = useRouter()

  const { request } = useService()

  async function getBooks(startBook: number) {
    if (query.length > 0) {
      const { url, options } = SEARCH_BOOKS(query, startBook)
      try {
        const { json } = await request(url, options)
        setInfinite(json.totalItems)
        if (json.items) {
          setBooks((books) => books.concat(json.items))
        } else {
          setError('No books found')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  // eslint-disable-next-line no-empty-pattern
  const [] = useDebounce(
    () => {
      setLoading(false)
      getBooks(startItem)
    },
    1000,
    [query, startItem]
  )

  function loadMore() {
    if (books.length <= infinite) {
      let newStartItem = 0
      if (!wait) {
        newStartItem = startItem + 12
        setStartItem(newStartItem)
        setWait(true)
        setTimeout(() => {
          setWait(false)
        }, 2000)
      }
    }
  }

  return (
    <S.Container>
      {loading && <Loading />}
      <Search
        setBooks={setBooks}
        setError={setError}
        setLoading={setLoading}
        setQuery={setQuery}
        setStartItem={setStartItem}
      />
      {query.length === 0 && loading === false ? (
        <Main />
      ) : (
        <S.BookContainer>
          {!loading &&
            books.length > 0 &&
            books.map((book) => (
              <Books
                key={`${book.etag}${book.id}`}
                volumeInfo={book.volumeInfo}
                onClick={() => {
                  router.push(`${book.id}`)
                }}
              />
            ))}
          {!loading && books.length > 0 && (
            <S.ButtonLoad onClick={loadMore}>
              {wait ? 'Loading...' : 'Load More!'}
            </S.ButtonLoad>
          )}
          {error && (
            <S.ErrorNotFound>
              <p>{error}</p>
            </S.ErrorNotFound>
          )}
        </S.BookContainer>
      )}
    </S.Container>
  )
}
