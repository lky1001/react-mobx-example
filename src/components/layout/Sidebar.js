import React, { Component } from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  width: 150px;
  float: left;
`

class Sidebar extends Component {
  render() {
    return <SidebarContainer>Sidebar</SidebarContainer>
  }
}

export default Sidebar
