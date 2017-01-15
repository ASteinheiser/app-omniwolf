import React, { PropTypes } from 'react'
import 'whatwg-fetch'
import Gauge from 'react-svg-gauge'

import StyledText from '../components/styled-text'
import SensorDisplay from '../components/sensor-display'
import AddAction from '../components/add-action'
import Button from '../components/button'
import Search from '../components/search'

import styles from './styles.css'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = { fire: false }
    this.state = { motion: false }
    this.state = { temp: 0 }
  }

  componentDidMount() {
    let self = this
    setInterval(function() {
      fetch("http://api.omniwolf.io/device/pull", {"mode": "cors"}).then(function(response) {
        return response.json()
      }).then(function(json) {
        self.setState({ temp: Math.round(json.Items[0].Data * 10) / 10 })
        self.setState({ motion: 1 - json.Items[1].Data })
        self.setState({ fire: 1 - json.Items[2].Data })
      })
    }, 1500)
  }

  render() {
    return (
      <div className={[styles.spaceTop]}>

        <div className={[styles.topBar]}>

          <Search
            type="text"
            name="search"
            placeholder="Search APIs, sensors, etc"
          />

          <div className={[styles.floatRight]}>
            <Button type="button" name="add-group">
              <i className="fa fa-plus" />
            </Button>

            <span className={[styles.space]} />

            <Button type="button" name="add-group">
              <i className="fa fa-trash" />
            </Button>
          </div>

        </div>

        <SensorDisplay title="Master Bedroom">
          <span>

            <Gauge value={this.state.temp} width={250} height={150} color={'rgb(72, 124, 236)'} backgroundColor={'rgb(215,215,215)'} label="Temp(F)" />

            <Gauge value={this.state.fire} width={250} height={150} max={1} color={'rgb(72, 124, 236)'} backgroundColor={'rgb(215,215,215)'} label="Fire" />

            <AddAction />

          </span>
        </SensorDisplay>

        <SensorDisplay title="Front Door">
          <span>

            <Gauge value={this.state.motion} width={250} height={150} max={1} color={'rgb(72, 124, 236)'} backgroundColor={'rgb(215,215,215)'} label="Motion" />

            <AddAction />

          </span>
        </SensorDisplay>

        <div className={[styles.bottomSpace]} />

      </div>
    )
  }
}
