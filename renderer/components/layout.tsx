import Aside from './aside'
import SectionHeader from './sectionHeader'

const Layout = ({children}) => {
	return (
		<>
			<Aside />
			<SectionHeader title='Games'/>
			<div className='ml-[90px] mb-[50px]'>
				{children}
			</div>
		</>
	)
}

export default Layout
