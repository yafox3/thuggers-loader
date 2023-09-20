import Link from 'next/link'
import Button from '../../components/ui/button'
import { useRouter } from 'next/router'
import userStore from '../../store/userStore'
import { observer } from 'mobx-react-lite'

const Settings = observer(() => {
	const router = useRouter()

	if (!userStore.user.isAuth) {
		router.push('/login')
	}

  return (
	<Link href={'/games'}>
	  <Button>Back</Button>
	</Link>
  )
})

export default Settings
