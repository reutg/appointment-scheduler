import React, { Component } from 'react'

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/styles'
import LoginModal from './LoginModal'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '1%',
  },
  title: {
    flexGrow: 1,
  },
})

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      isLoginModalOpen: false,
    }
  }

  handleModalClose = () => {
    this.setState({ isLoginModalOpen: false })
  }

  handleModalOpen = () => {
    this.setState({ isLoginModalOpen: true })
  }
  render() {
    const { classes,toggleShowRegister } = this.props
    const { isLoginModalOpen } = this.state
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Appointment scheduler
            </Typography>
            <Button color='inherit' onClick={this.handleModalOpen}>
              Login
            </Button>
          </Toolbar>
          <LoginModal
            isLoginModalOpen={isLoginModalOpen}
            handleModalClose={this.handleModalClose}
            toggleShowRegister={toggleShowRegister}
          />
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
