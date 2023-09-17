interface SectionHeaderProps {
	title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
	return (
		<header className='fixed top-0 left-[0px] right-0 z-10 backdrop-blur-sm rounded-2xl pt-[40px]'>
			<h1 className='ml-[90px] mb-[30px] text-3xl font-bold'>{title}</h1>
		</header>
	)
}

export default SectionHeader
