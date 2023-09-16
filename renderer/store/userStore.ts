import { makeAutoObservable } from 'mobx'

class UserStore {
	user = {
		authKey: ''
	}

	constructor() {
		makeAutoObservable(this)
	}

	auth(authKey: string) {
		this.user.authKey = authKey
	}
}

export default new UserStore()