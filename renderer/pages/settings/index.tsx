import Link from 'next/link'
import Button from '../../components/ui/button'

const Settings = () => {
  return (
	<Link href={'/games'}>
	  <Button>Back</Button>
	</Link>
  )
}

export default Settings
