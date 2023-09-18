import { makeAutoObservable } from 'mobx'
import { KeyAuth } from '../API/keyAuth'

class AuthStore {
	keyAuth: KeyAuth

	constructor() {
		makeAutoObservable(this)
	}

	async init() {
		const KeyAuthApp = new KeyAuth(
			'qwe', // Application Name
			'pTDvCTWej0', // OwnerID
			'8000ecc5c742d8e8d597738dc3e42029579b2a6b0144f5e0d724688f7fa9d0c4', // Application Secret
			'1.0' // Application Version
		)
		await KeyAuthApp.init()
		this.keyAuth = KeyAuthApp
	}
}

export default new AuthStore()
