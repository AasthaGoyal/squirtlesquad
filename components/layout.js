import Head from 'next/head'
import Header from './header'

function Layout ({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Easy Health</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' />
      </Head>

      <Header user={user} loading={loading} />
      <main className='container'>{children}</main>
    </>
  )
}

export default Layout
