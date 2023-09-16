import Aside from './aside'
import SectionHeader from './sectionHeader'

const Layout = ({children}) => {
	return (
		<>
			<Aside />
			<SectionHeader title='Games'/>
			<div>
				{children}
			</div>
		</>
	)
}

export default Layout
