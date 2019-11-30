import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Navbar from './components/Navbar'
import Register from './components/Register'
import ScheduleAppointment from './components/SchuduleAppointment'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8EAEBD' },
    secondary: { main: '#DF744A' },
    backColor: '#BFD8D2',
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Montserrat", sans-serif',
  },
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      isShowRegister: false,
    }
  }

  toggleShowRegister = () => {
    const { isShowRegister } = this.state
    this.setState({ isShowRegister: !isShowRegister })
  }

  render() {
    const { isShowRegister } = this.state
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Navbar toggleShowRegister={this.toggleShowRegister} />
          {isShowRegister && <Register />}
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
