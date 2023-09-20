import Head from 'next/head'
import Aside from '../../components/aside'
import SectionHeader from '../../components/sectionHeader'

const Settings = () => {

  return (
	<>
		<Head>
			<title>Settings</title>	
		</Head>	  
		
		<section className='relative'>
			<Aside />
			<SectionHeader title='Settings' className='' />
		</section>
	</>
	)
}

export default Settings
