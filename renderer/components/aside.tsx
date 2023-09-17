import Link from 'next/link'

const Aside = () => {
	return (
		<aside className='fixed z-10 top-0 left-0 h-[100vh] w-[60px] bg-dark rounded-r-2xl'>
			<div className='relative h-full flex flex-col items-center justify-end'>
				<nav className='relative pb-5'>
					<Link href={'/settings'}>
						{/* settings icon */}
						<svg
							className='cursor-pointer hover:rotate-90 transition-all'
							xmlns='http://www.w3.org/2000/svg'
							width='28'
							height='28'
							viewBox='0 0 28 28'
							fill='none'>
							<g clipPath='url(#clip0_11_82)'>
								<path
									d='M14 8.31952C13.254 8.31952 12.5153 8.46645 11.8262 8.75192C11.137 9.03739 10.5108 9.45582 9.98327 9.9833C9.45579 10.5108 9.03736 11.137 8.75189 11.8262C8.46642 12.5154 8.31949 13.254 8.31949 14C8.31949 14.746 8.46642 15.4847 8.75189 16.1739C9.03736 16.863 9.45579 17.4893 9.98327 18.0167C10.5108 18.5442 11.137 18.9626 11.8262 19.2481C12.5153 19.5336 13.254 19.6805 14 19.6805C15.5066 19.6805 16.9514 19.082 18.0167 18.0167C19.082 16.9514 19.6805 15.5066 19.6805 14C19.6805 12.4935 19.082 11.0486 18.0167 9.9833C16.9514 8.918 15.5066 8.31952 14 8.31952ZM10.0695 14C10.0695 12.9576 10.4836 11.9578 11.2207 11.2207C11.9578 10.4836 12.9576 10.0695 14 10.0695C15.0424 10.0695 16.0422 10.4836 16.7793 11.2207C17.5164 11.9578 17.9305 12.9576 17.9305 14C17.9305 15.0425 17.5164 16.0422 16.7793 16.7793C16.0422 17.5164 15.0424 17.9305 14 17.9305C12.9576 17.9305 11.9578 17.5164 11.2207 16.7793C10.4836 16.0422 10.0695 15.0425 10.0695 14Z'
									fill='#E8B146'
								/>
								<path
									d='M17.1431 2.35029C16.2208 -0.78221 11.7793 -0.78221 10.8571 2.35029L10.6926 2.90854C10.6282 3.12721 10.5156 3.32869 10.3632 3.49822C10.2109 3.66775 10.0225 3.80102 9.81187 3.88828C9.60128 3.97554 9.37383 4.01456 9.14619 4.0025C8.91856 3.99043 8.69651 3.92757 8.49632 3.81854L7.98532 3.53854C5.11532 1.97754 1.97757 5.11704 3.54032 7.98529L3.81857 8.49629C3.92761 8.69648 3.99046 8.91853 4.00253 9.14616C4.01459 9.3738 3.97557 9.60125 3.88831 9.81184C3.80105 10.0224 3.66778 10.2108 3.49825 10.3632C3.32872 10.5156 3.12724 10.6281 2.90857 10.6925L2.35032 10.857C-0.782179 11.7793 -0.782179 16.2208 2.35032 17.143L2.90857 17.3075C3.12724 17.3719 3.32872 17.4845 3.49825 17.6369C3.66778 17.7893 3.80105 17.9777 3.88831 18.1882C3.97557 18.3988 4.01459 18.6263 4.00253 18.8539C3.99046 19.0816 3.92761 19.3036 3.81857 19.5038L3.53857 20.0148C1.97757 22.8848 5.11532 26.0243 7.98532 24.4598L8.49632 24.1815C8.69651 24.0725 8.91856 24.0097 9.14619 23.9976C9.37383 23.9855 9.60128 24.0245 9.81187 24.1118C10.0225 24.1991 10.2109 24.3323 10.3632 24.5019C10.5156 24.6714 10.6282 24.8729 10.6926 25.0915L10.8571 25.6498C11.7793 28.7823 16.2208 28.7823 17.1431 25.6498L17.3076 25.0915C17.372 24.8729 17.4845 24.6714 17.6369 24.5019C17.7893 24.3323 17.9777 24.1991 18.1883 24.1118C18.3989 24.0245 18.6263 23.9855 18.854 23.9976C19.0816 24.0097 19.3036 24.0725 19.5038 24.1815L20.0148 24.4615C22.8848 26.0243 26.0243 22.883 24.4598 20.0148L24.1816 19.5038C24.0725 19.3036 24.0097 19.0816 23.9976 18.8539C23.9855 18.6263 24.0246 18.3988 24.1118 18.1882C24.1991 17.9777 24.3324 17.7893 24.5019 17.6369C24.6714 17.4845 24.8729 17.3719 25.0916 17.3075L25.6498 17.143C28.7823 16.2208 28.7823 11.7793 25.6498 10.857L25.0916 10.6925C24.8729 10.6281 24.6714 10.5156 24.5019 10.3632C24.3324 10.2108 24.1991 10.0224 24.1118 9.81184C24.0246 9.60125 23.9855 9.3738 23.9976 9.14616C24.0097 8.91853 24.0725 8.69648 24.1816 8.49629L24.4616 7.98529C26.0243 5.11529 22.8831 1.97754 20.0148 3.54029L19.5038 3.81854C19.3036 3.92757 19.0816 3.99043 18.854 4.0025C18.6263 4.01456 18.3989 3.97554 18.1883 3.88828C17.9777 3.80102 17.7893 3.66775 17.6369 3.49822C17.4845 3.32869 17.372 3.12721 17.3076 2.90854L17.1431 2.35029ZM12.5353 2.84554C12.9658 1.38429 15.0343 1.38429 15.4648 2.84554L15.6293 3.40379C15.7676 3.87294 16.0091 4.30519 16.3362 4.66886C16.6632 5.03254 17.0676 5.3184 17.5195 5.50551C17.9714 5.69261 18.4594 5.77621 18.9478 5.75017C19.4362 5.72414 19.9126 5.58913 20.3421 5.35504L20.8513 5.07504C22.1883 4.34879 23.6513 5.81004 22.9233 7.14879L22.6451 7.65979C22.4113 8.08929 22.2767 8.56564 22.2509 9.05394C22.2252 9.54224 22.309 10.0301 22.4962 10.4818C22.6835 10.9335 22.9694 11.3376 23.3331 11.6644C23.6968 11.9913 24.129 12.2326 24.5981 12.3708L25.1546 12.5353C26.6158 12.9658 26.6158 15.0343 25.1546 15.4648L24.5963 15.6293C24.1272 15.7676 23.6949 16.0091 23.3312 16.3362C22.9676 16.6632 22.6817 17.0675 22.4946 17.5194C22.3075 17.9713 22.2239 18.4594 22.2499 18.9478C22.276 19.4362 22.411 19.9126 22.6451 20.342L22.9251 20.8513C23.6513 22.1883 22.1901 23.6513 20.8513 22.9233L20.3421 22.645C19.9125 22.411 19.436 22.276 18.9475 22.2501C18.459 22.2242 17.9709 22.3079 17.5189 22.4952C17.067 22.6825 16.6627 22.9686 16.3358 23.3324C16.0088 23.6963 15.7674 24.1287 15.6293 24.598L15.4648 25.1545C15.0343 26.6158 12.9658 26.6158 12.5353 25.1545L12.3708 24.5963C12.2325 24.1274 11.991 23.6954 11.6641 23.3319C11.3371 22.9684 10.933 22.6826 10.4813 22.4956C10.0297 22.3085 9.54184 22.2248 9.05364 22.2507C8.56544 22.2765 8.0892 22.4113 7.65982 22.645L7.14882 22.925C5.81182 23.6513 4.34882 22.19 5.07682 20.8513L5.35507 20.342C5.58949 19.9125 5.72476 19.436 5.75097 18.9474C5.77717 18.4587 5.69365 17.9704 5.50652 17.5183C5.31939 17.0662 5.03341 16.6617 4.66956 16.3345C4.30571 16.0073 3.87321 15.7658 3.40382 15.6275L2.84557 15.463C1.38432 15.0325 1.38432 12.964 2.84557 12.5335L3.40382 12.369C3.87248 12.2306 4.30426 11.9892 4.66757 11.6624C5.03088 11.3356 5.31651 10.9316 5.50356 10.4802C5.69062 10.0287 5.77437 9.54117 5.74867 9.05317C5.72298 8.56518 5.5885 8.0891 5.35507 7.65979L5.07507 7.14879C4.34882 5.81179 5.81007 4.34879 7.14882 5.07679L7.65982 5.35504C8.0892 5.5888 8.56544 5.72354 9.05364 5.74941C9.54184 5.77527 10.0297 5.6916 10.4813 5.50452C10.933 5.31744 11.3371 5.03169 11.6641 4.6682C11.991 4.30471 12.2325 3.8727 12.3708 3.40379L12.5353 2.84554Z'
									fill='white'
								/>
							</g>
							<defs>
								<clipPath id='clip0_11_82'>
									<rect
										width='28'
										height='28'
										fill='white'
									/>
								</clipPath>
							</defs>
						</svg>
					</Link>
				</nav>
				<span className='absolute top-0 left-0 w-[60px] h-[60px] bg-yellow rounded-r-2xl' />
			</div>
		</aside>
	)
}

export default Aside
