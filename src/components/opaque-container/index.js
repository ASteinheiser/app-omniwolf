import React, { Component } from 'react'

import './index.css'

export default class OpaqueContainer extends Component {
  render() {
    return <div className='OpaqueContainer'>
      {this.props.children}
    </div>
  }
}