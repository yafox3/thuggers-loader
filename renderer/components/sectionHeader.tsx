interface SectionHeaderProps {
	title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
	return <h1 className='ml-[90px] mt-[40px] mb-[30px] text-3xl font-bold'>{title}</h1>
}

export default SectionHeader
