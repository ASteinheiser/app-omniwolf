import React, { Component } from 'react'

import './index.css'

export default class OpaqueContainer extends Component {
  render() {
    return <div className='Opaque--Container'>
      {this.props.children}
    </div>
  }
}
