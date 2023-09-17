import { makeAutoObservable } from 'mobx'

class UserStore {
	user = {
		authKey: '',
		isAuth: false
	}

	constructor() {
		makeAutoObservable(this)
	}

	auth(authKey: string) {
		this.user.authKey = authKey
		this.user.isAuth = true
	}
}

export default new UserStore()