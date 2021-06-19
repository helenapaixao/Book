import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { BookDetails } from '../../components/BooksDetails'

export default function DetailPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>App Books</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BookDetails id={id?.toLocaleString()} />
    </>
  )
}
