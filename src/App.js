import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import LayoutRoute from './components/layout/LayoutRoute'
import MainLayout from './components/layout/MainLayout'

import { HomePage } from './pages'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LayoutRoute exact path="/" layout={MainLayout} component={HomePage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
