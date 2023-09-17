import { observer } from 'mobx-react-lite'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import authStore from '../store/authStore'
import '../styles/globals.css'

const MyApp = observer(({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		authStore.init()
	}, [])

	return <Component {...pageProps} />
})

export default MyApp
