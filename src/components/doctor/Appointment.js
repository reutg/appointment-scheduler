import React, { Component } from 'react'
import { Card, CardContent, Avatar, Typography, Link, Divider, Chip } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import ArrowIcon from '@material-ui/icons/ArrowForward'

import users from '../../users.json'

const styles = theme => ({
  card: {
    marginTop: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: '3%',
    },
  },
  topSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: '0.8em',
    fontWeight: '600',
  },
  avatar: {
    marginRight: '5%',
    width: '5vh',
    height: '5vh',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  chipsContainer: {
    marginTop: '2%',
  },
  chip: {
    margin: '1% 2% 1% 0',
    borderRadius: '2px',
    fontSize: '0.7em',
  },
  bottomSection: {
    paddingTop: '3%',
  },
})

class Appointment extends Component {
  getAppointmentDuration = () => {
    const { appointment } = this.props
    const startTime = this.getTime(appointment.startsAt)
    const endTime = this.getTime(appointment.endsAt)
    const duration = (this.parseTime(endTime) - this.parseTime(startTime)) / 60000
    if (duration < 60) return duration + 'm'
    else if (duration === 60) {
      return Math.floor(duration / 60) + 'h'
    } else {
      const hours = Math.floor(duration / 60)
      const minutes = duration % 60
      return hours + 'h, ' + minutes + 'm'
    }
  }

  getUserInfo = () => {
    const { userId } = this.props.appointment
    return users.find(user => user.id === userId)
  }

  parseTime = timeStr => {
    const time = timeStr.split(':')
    return new Date(1970, 1, 1, time[0], time[1])
  }
  getTime = time => {
    return time.substring(0, time.length - 2)
  }

  getAmPm = time => {
    return time.substring(time.length - 2)
  }

  render() {
    const { classes, appointment } = this.props
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.topSection}>
            <div className={classes.userInfo}>
              <Avatar
                className={classes.avatar}
                alt={this.getUserInfo().name}
                src={this.getUserInfo().imgUrl}
              />
              <div className={classes.header}>
                <Typography variant='h6' className={classes.title}>
                  {this.getUserInfo().name}
                </Typography>
                <Link variant='caption' color='primary'>
                  View profile
                </Link>
              </div>
            </div>
            <ArrowIcon />
          </div>
          <Divider light />
          <div className={classes.bottomSection}>
            <Typography variant='caption' className={classes.time} gutterBottom>
              {`${appointment.startsAt} - ${appointment.endsAt}`}{' '}
              {`(${this.getAppointmentDuration()})`}
            </Typography>
            <div className={classes.chipsContainer}>
              {appointment.tags.map((tag, index) => (
                <Chip
                  key={index}
                  size='small'
                  label={tag.text}
                  className={classes.chip}
                  style={{ backgroundColor: tag.color }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Appointment)
