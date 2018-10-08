import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import NumberFormat from 'react-number-format'
import logo from '../images/logo.svg'
import '../styles/App.css'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      intervalId: -1
    }
  }

  componentDidMount = async () => {
    const { testStore } = this.props

    this.disposer = testStore.subscribeLoginState(changed => {
      if (changed.oldValue !== changed.newValue) {
        if (changed.newValue) {
          const id = setInterval(async () => {
            await testStore.getCoinInfo('BTC')
          }, 2000)

          this.setState({
            intervalId: id
          })
        }
      }
    })
  }

  componentWillUnmount = async () => {
    if (this.state.intervalId > 0) {
      clearInterval(this.state.intervalId)
    }

    if (this.disposer) {
      this.disposer()
    }
  }

  render() {
    const { testStore } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {testStore.isLogin && testStore.coin ? (
              <Fragment>
                {testStore.coin.market} :<NumberFormat displayType={'text'} prefix="₩ " value={testStore.coin.trade_price} thousandSeparator={true} />
              </Fragment>
            ) : (
              <Fragment>
                Edit <code>src/App.js</code> and save to reload.
              </Fragment>
            )}
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default compose(
  inject('testStore'),
  observer
)(HomePage)
