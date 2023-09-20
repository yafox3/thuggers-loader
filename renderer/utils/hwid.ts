import { execSync } from 'child_process'
import os from 'os'

export const getHWID = () => {
	if (os.platform() != 'win32') return false

	const cmd = execSync('wmic useraccount where name="%username%" get sid').toString('utf-8')

	const system_id = cmd.split('\n')[1].trim()
	return system_id
}