import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Input from '../components/ui/input'
import Loader from '../components/ui/loader'
import authStore from '../store/authStore'
import userStore from '../store/userStore'

const Login = observer(() => {
	const [authKey, setAuthKey] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
 	const router = useRouter()

	const handleLogin = async(event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (authKey) {
			try {
				setLoading(true)
				await authStore.login(authKey)
        		router.push('/games')
				userStore.auth(authKey)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		setAuthKey('')
	}

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className='relative h-[100vh] flex justify-center items-center overflow-hidden'>
				<div className='w-[350px] h-[346px] px-[35px] py-[60px] bg-dark rounded-3xl shadow-lg'>
					<h1 className='text-white text-[26px] text-center mb-[30px] font-bold'>Login</h1>
					<form
						className=''
						action='submit'
						onSubmit={handleLogin}>
						<Input
							label='AuthKey'
							value={authKey}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAuthKey(event.target.value)}
							type='password'
							placeholder='Please enter your AuthKey'
							required
							style={{ marginBottom: '45px' }}
						/>
						<div className='flex justify-center'>
							<button className='focus:outline-none text-white bg-yellow hover:bg-lightyellow font-bold rounded-lg text-base px-10 py-2.5 mr-2 mb-2 transition-colors delay-75'>Login</button>
						</div>
					</form>
				</div>
				<span className='absolute z-10 top-[-80px] left-[-80px] w-[200px] h-[200px] rounded-full bg-yellow' />
				<span className='absolute z-10 bottom-[-80px] right-[-80px] w-[200px] h-[200px] rounded-full bg-dark' />
			</div>

			{/* loader */}
			{loading && <Loader />}
		</>
	)
})

export default Login
