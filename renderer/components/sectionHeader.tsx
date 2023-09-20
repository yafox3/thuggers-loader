interface SectionHeaderProps {
	title: string
	className?: string
}

const SectionHeader = ({ title, className }: SectionHeaderProps) => {
	return <h1 className={'ml-[90px] mt-[40px] mb-[30px] text-3xl font-bold'.concat(' ', className)}>{title}</h1>
}

export default SectionHeader
