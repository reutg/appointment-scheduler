import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

import {
  FormControl,
  TextField,
  InputAdornment,
  Typography,
  Checkbox,
  Button,
} from '@material-ui/core'
import { Link as LinkButton } from '@material-ui/core'

import PersonIcon from '@material-ui/icons/PersonOutlined'
import LockIcon from '@material-ui/icons/LockOutlined'
import EyeIcon from '@material-ui/icons/VisibilityOutlined'
import EyeOffIcon from '@material-ui/icons/VisibilityOffOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3%',
    alignItems: 'center',
  },
  header: {
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: '2%',
  },
  input: {
    width: '50vh',
  },
  icon: {
    color: '#8B898A',
  },
  iconOn: {
    padding: '10%',
    color: theme.palette.primary.main,
  },
  termsCheckbox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1%',
    width: '53vh',
  },
  checkboxText: {
    marginRight: '1%',
  },
  button: {
    width: '50vh',
    marginTop: '2%',
  },
})

class Register extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: '',
      isShowPassword: false,
      isChecked: false,
    }
  }

  handleInputChange = event => {
    const inputName = event.target.name
    const inputValue = event.target.value

    this.setState({ [inputName]: inputValue })
  }

  togglePasswordVisibility = () => {
    const { isShowPassword } = this.state
    this.setState({ isShowPassword: !isShowPassword })
  }

  handleCheck = event => {
    this.setState({ isChecked: event.target.checked })
  }

  render() {
    const { classes } = this.props
    const {
      nameInput,
      emailInput,
      passwordInput,
      isShowPassword,
      isChecked,
      confirmPasswordInput,
    } = this.state
    return (
      <div className={classes.container}>
        <Typography variant='h6' className={classes.header}>
          Create your account
        </Typography>
        <FormControl className={classes.form}>
          <TextField
            variant='outlined'
            className={classes.textField}
            name='nameInput'
            placeholder='Full name'
            value={nameInput}
            onChange={this.handleInputChange}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <TextField
            variant='outlined'
            className={classes.textField}
            name='emailInput'
            placeholder='Email address'
            value={emailInput}
            type='email'
            onChange={this.handleInputChange}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position='start'>
                  <EmailIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <TextField
            variant='outlined'
            className={classes.textField}
            name='passwordInput'
            value={passwordInput}
            placeholder='Password'
            type={isShowPassword ? 'text' : 'password'}
            onChange={this.handleInputChange}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon className={classes.icon} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  {isShowPassword ? (
                    <EyeOffIcon
                      onClick={this.togglePasswordVisibility}
                      className={classes.iconOn}
                    />
                  ) : (
                    <EyeIcon
                      onClick={this.togglePasswordVisibility}
                      className={classes.icon}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <TextField
            variant='outlined'
            className={classes.textField}
            name='passwordInput'
            value={confirmPasswordInput}
            placeholder='Confirm password'
            type={isShowPassword ? 'text' : 'password'}
            onChange={this.handleInputChange}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon className={classes.icon} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  {isShowPassword ? (
                    <EyeOffIcon
                      onClick={this.togglePasswordVisibility}
                      className={classes.iconOn}
                    />
                  ) : (
                    <EyeIcon
                      onClick={this.togglePasswordVisibility}
                      className={classes.icon}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <div className={classes.termsCheckbox}>
          <Checkbox
            checked={isChecked}
            onChange={this.handleCheck}
            value={isChecked}
            color='primary'
          />
          <Typography className={classes.checkboxText} variant='caption'>
            I have read and agree to the{' '}
          </Typography>
          <LinkButton variant='caption'> Terms of service</LinkButton>
        </div>
        <Button
          className={classes.button}
          variant='contained'
          autoFocus
          //   onClick={handleModalClose}
          color='secondary'
        >
          Create account
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Register)
