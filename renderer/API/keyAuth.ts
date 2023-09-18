import axios from 'axios'
import { execSync } from 'child_process'
import os from 'os'

export class KeyAuth {
	private _url: string = 'https://thuggers.fvds.ru/api/1.2/'
	private _config = {
		applicationName: '',
		ownerid: '',
		applicationSecret: '',
		applicationVersion: '',
		sessionid: '',
		initialized: false,
		hwid: ''
	}

	constructor(applicationName: string, ownerid: string, applicationSecret: string, applicationVersion: string) {
		this._config.applicationName = applicationName
		this._config.ownerid = ownerid
		this._config.applicationSecret = applicationSecret
		this._config.applicationVersion = applicationVersion
	}

	public async init() {
		const response = await this.makeRequest('GET', {
			type: 'init',
			ver: this._config.applicationVersion,
			name: this._config.applicationName,
			ownerid: this._config.ownerid
		})

		if (response.success) {
			this._config.sessionid = response.sessionid
			this._config.initialized = true
			this._config.hwid = this.getHWID() || ''
		} else {
			throw new Error(response.message)
		}
	}

	public async loginWithAuthKey(authKey: string) {
		if (!this._config.initialized) {
			throw new Error('KeyAuth is not initialized')
		}

		const response = await this.makeRequest('POST', {
			type: 'license',
			key: authKey,
			hwid: this._config.hwid,
			sessionid: this._config.sessionid,
			name: this._config.applicationName,
			ownerid: this._config.ownerid
		})

		if (response.success) {
			return response
		} else {
			throw new Error(response.message)
		}
	}

	private async makeRequest(method: 'GET' | 'POST', params: {}) {
		const options = {
			method,
			url: this._url,
			params
		}

		const response = await axios.request(options)

		return response.data
	}

	private getHWID() {
		if (os.platform() != 'win32') return false

		const cmd = execSync('wmic useraccount where name="%username%" get sid').toString('utf-8')

		const system_id = cmd.split('\n')[1].trim()
		return system_id
	}
}
