import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
`

class Header extends Component {
  onLoginClick = () => {
    const { testStore } = this.props
    testStore.login()
  }

  onLogoutClick = () => {
    const { testStore } = this.props
    testStore.logout()
  }

  render() {
    const { testStore } = this.props

    return (
      <HeaderContainer>
        {testStore.isLogin ? (
          <div>
            {'Welcome ' + testStore.account.name + '(' + testStore.account.balance + ')'}{' '}
            <button onClick={this.onLogoutClick.bind(this)}>Logout</button>
          </div>
        ) : (
          <button onClick={this.onLoginClick.bind(this)}>Login</button>
        )}
      </HeaderContainer>
    )
  }
}

export default compose(
  inject('testStore'),
  observer
)(Header)
