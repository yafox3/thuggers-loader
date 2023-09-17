import Aside from './aside'
import SectionHeader from './sectionHeader'

const Layout = ({children}) => {
	return (
		<>
			<Aside />
			<SectionHeader title='Games'/>
			<div className='ml-[90px] mt-[30px]'>
				{children}
			</div>
		</>
	)
}

export default Layout
