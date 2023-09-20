import Head from 'next/head'
import GamesList from '../../components/gamesList'
import Layout from '../../components/layout'
import userStore from '../../store/userStore'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'

const Games = observer(() => {
	const router = useRouter()

	if (!userStore.user.isAuth) {
		router.push('/login')
	}

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
})

export default Games
