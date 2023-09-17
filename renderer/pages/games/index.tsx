import Head from 'next/head'
import GamesList from '../../components/gamesList'
import Layout from '../../components/layout'

const Games = () => {
  return (
	<>
		<Head>
			<title>Games</title>
		</Head>

		<Layout>
			<GamesList />
		</Layout>
	</>
  )
}

export default Games
