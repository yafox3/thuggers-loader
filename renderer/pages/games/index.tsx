import Head from 'next/head'
import Layout from '../../components/layout'
import GamesList from '../../components/gamesList'

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
