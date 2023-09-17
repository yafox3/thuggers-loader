import { observer } from 'mobx-react-lite'
import React from 'react'
import userStore from '../store/userStore'
import { useRouter } from 'next/router'
import Loader from '../components/ui/loader'

const Await = observer(() => {
	const router = useRouter()
	if (userStore.user.isAuth) {
		router.push('/games')
		console.log(userStore.user.isAuth)
	}

  return (
	<div className='relative h-[100vh] flex items-center justify-center'>
		<Loader />
	</div>
  )
})

export default Await
