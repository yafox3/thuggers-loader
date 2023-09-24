import Head from 'next/head'
import React from 'react'
import Aside from '../../../components/aside'
import SectionHeader from '../../../components/sectionHeader'
import Link from 'next/link'

const Account = () => {
	return (
		<>
			<Head>
				<title>Account</title>
			</Head>

			<section className='relative'>
				<Aside />
				<SectionHeader title='Account' />

				<div className='flex flex-col gap-3 ml-[90px] mr-[30px]'>
					<Link href='/login'>
						<div className='flex items-center justify-between w-12/12 p-5 bg-dark hover:bg-opacity-60 transition-all active:scale-[0.97] group rounded-2xl cursor-pointer'>
							<div className='flex items-center gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='currentColor'
									className='group-hover:hidden fill-yellow transition-all'
									viewBox='0 0 16 16'>
									<path d='M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z' />
									<path d='M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='currentColor'
									className='group-hover:block hidden transition-all fill-red'
									viewBox='0 0 16 16'>
									<path d='M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z' />
									<path d='M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z' />
								</svg>
								<h6 className='text-sm'>Logout</h6>
							</div>
						</div>
					</Link>

					<Link href='/settings'>
						<div className='flex items-center justify-between w-12/12 p-5 bg-dark hover:bg-opacity-60 transition-all active:scale-[0.97] group rounded-2xl cursor-pointer'>
							<div className='flex items-center gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='currentColor'
									className='rotate-180 fill-yellow'
									viewBox='0 0 16 16'>
									<path
										fill-rule='evenodd'
										d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
									/>
								</svg>
								<h6 className='text-sm'>Back</h6>
							</div>
						</div>
					</Link>
				</div>
			</section>
		</>
	)
}

export default Account
