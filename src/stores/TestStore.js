import { decorate, observable, action } from 'mobx'
import axios from 'axios'

const UPBIT_API = 'https://api.upbit.com/v1/ticker?markets=KRW-'

class TestStore {
  isLogin = false
  loginStateObserveble
  account = {
    id: '',
    name: '',
    balance: 0
  }
  coin

  constructor() {
    this.loginStateObserveble = observable.box(false)
  }

  subscribeLoginState = subscriber => {
    return this.loginStateObserveble.observe(subscriber)
  }

  login = () => {
    Object.assign(this.account, {
      id: 'lky1001',
      name: 'kai',
      balance: 1000
    })
    this.isLogin = true
    this.loginStateObserveble.set(true)
  }

  logout = () => {
    Object.assign(this.account, {
      id: '',
      name: '',
      balance: 0
    })
    this.coin = null
    this.isLogin = false
    this.loginStateObserveble.set(false)
  }

  getCoinInfo = async code => {
    const info = await axios.get(UPBIT_API + code)

    this.coin = info.data[0]
  }
}

decorate(TestStore, {
  isLogin: observable,
  coin: observable,
  loginStateObserveble: observable,
  login: action,
  logout: action,
  getCoinInfo: action
})

export default new TestStore()
