import React from 'react'
import {Link} from 'react-router'
import NavBar from './navbar'

export default class App extends React.Component {
  render () {
    return (
      <div>
          <NavBar />
          <Link to="/home">Home</Link>
          {this.props.children}
      </div>
    )
  }
}
