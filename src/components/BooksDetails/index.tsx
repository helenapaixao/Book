import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import useService from '../../hooks/useService'
import { MenuPageDetail } from '../MenuPageDetail'


import { GET_BOOK } from '../../services/api'

import * as S from './styles'


type BookDetailsProps = {
  id: string | undefined
}

export type BookProps = {
  id?: string
  etag?: string
  volumeInfo: {
    imageLinks: {
      thumbnail: string
    }
    title: string
    authors: string[]
    description: string
  }
  onClick: () => void
}


export function BookDetails({ id }: BookDetailsProps) {
  const [books, setBooks] = useState<BookProps>({} as BookProps)
  const router = useRouter()
  const { request } = useService()

  useEffect(() => {
    async function getBook() {
      if (id !== undefined) {
        const { url, options } = GET_BOOK(id)
        try {
          const { json } = await request(url, options)
          setBooks(json)
        } catch (e) {
          console.log(e)
        }
      }
    }

    getBook()
  }, [])

  return (
    <S.Container>
      <S.ImgWrapper>
        <button
          onClick={() => {
            router.back()
          }}
        >
          <img src="/img/arrow-left.svg" alt="Sair" />
        </button>
        <S.BigOvalDetail src="/img/big-oval.svg" alt="Circle" />
        <S.SmallCircleDetail src="/img/small-circle.svg" alt="Circle" />
        <S.CircleDetail src="/img/oval-reading-1.svg" alt="Circle" />
        <S.FullCircleDetail src="/img/fullcircle.svg" alt="Circle" />
        <S.OvalDetail src="/img/oval-reading.png" alt="Circle" />
        <S.CoverBook
          src={
            books.volumeInfo?.imageLinks
              ? books.volumeInfo?.imageLinks?.thumbnail
              : '/img/cover-404.png'
          }
          alt={books.volumeInfo?.title}
        />
      </S.ImgWrapper>
      <S.TextWrapper>
        <h1>{books.volumeInfo?.title}</h1>
        <h2>{books.volumeInfo?.authors && books.volumeInfo.authors[0]}</h2>
        <S.DescriptionWrapper
          dangerouslySetInnerHTML={{ __html: books.volumeInfo?.description }}
        ></S.DescriptionWrapper>
      </S.TextWrapper>
      <MenuPageDetail />
    </S.Container>
  )
}
