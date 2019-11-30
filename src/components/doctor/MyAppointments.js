import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

import appointments from '../../appointments.json'
import Appointment from './Appointment.js'

const styles = theme => ({
  container: {
    display: 'flex',
  },
  myAppointments: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F2F7FA',
    width: '30%',
    minHeight: '90vh',
    padding: '1%',
  },
  appointmentInfo: {
    border: '1px solid #F2F8FA',
    width: '25%',
    height: '90vh',
  },
  calendar: {
    backgroundColor: '#C8F1F5',
    width: '45%',
    height: '90vh',
  },
})

class MyAppointments extends Component {
  constructor() {
    super()
    this.state = {
      appointments: [],
    }
  }

  componentDidMount = () => {
    this.generateTagsColors()
  }

  generateRandomColor() {
    return `hsla(${~~(360 * Math.random())},70%,70%,0.8)`
  }

  generateTagsColors = () => {
    for (let appointment of appointments) {
      appointment.tags.forEach(tag => {
        tag.color = this.generateRandomColor()
      })
    }
    this.setState({ appointments })
  }

  render() {
    const { classes } = this.props
    const { appointments } = this.state

    return (
      <div className={classes.container}>
        <div className={classes.myAppointments}>
          <Typography variant='h6'>My Appointments</Typography>
          <Typography variant='subtitle1'>Today, November 30</Typography>
          {appointments.map(appointment => (
            <Appointment key={appointment.id} appointment={appointment} />
          ))}
        </div>

        <div className={classes.appointmentInfo}></div>
        <div className={classes.calendar}></div>
      </div>
    )
  }
}

export default withStyles(styles)(MyAppointments)
