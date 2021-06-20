import Head from 'next/head'
import { PrincipalHome } from '../components/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>App Books</title>
      </Head>
      <PrincipalHome />
    </>
  )
}
