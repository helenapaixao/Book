import Head from 'next/head'
import { PrincipalHome } from '../components/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>App Books</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PrincipalHome />
    </>
  )
}
