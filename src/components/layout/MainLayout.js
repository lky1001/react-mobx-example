import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const MainContainer = styled(ReactCSSTransitionGroup)`
  margin-left: 150px;
`

class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    const animationName = 'rag-fadeIn'

    return (
      <div className="layout-container">
        <Header />
        <Sidebar />

        <MainContainer component="main" transitionName={animationName} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {children}
          <Footer />
        </MainContainer>
      </div>
    )
  }
}

export default MainLayout
