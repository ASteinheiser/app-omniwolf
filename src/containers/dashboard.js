import React, { PropTypes } from 'react'

import StyledText from '../components/styled-text'
import SensorDisplay from '../components/sensor-display'
import AddAction from '../components/add-action'

import styles from './styles.css'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className={[styles.spaceTop]}>

        <SensorDisplay title="Font Door">
          <AddAction />
        </SensorDisplay>

        <SensorDisplay title="Baby's Room">
          <AddAction />
        </SensorDisplay>

      </div>
    )
  }
}