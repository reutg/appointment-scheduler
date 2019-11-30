import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/styles'
import {
  DialogTitle,
  Dialog,
  DialogContent,
  Button,
  IconButton,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'
import EyeIcon from '@material-ui/icons/VisibilityOutlined'
import EyeOffIcon from '@material-ui/icons/VisibilityOffOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'

import Register from './Register'

const styles = theme => ({
  dialog: {
    minWidth: '90%',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'gray',
  },
  dialogContent: {
    padding: '10%',
  },
  form: {
    display: 'flex',
    margin: '10% 0',
  },
  textField: {
    paddingBottom: '1%',
  },
  icon: {
    padding: '10%',
    color: '#8B898A',
  },
  iconOn: {
    padding: '10%',
    color: theme.palette.primary.main,
  },
  registerSection: {
    display: 'flex',
    alignItems: 'end',
    padding: '5% 0',
  },
  registerText: {
    marginRight: '3%',
  },
  link: {
    color: theme.palette.primary.main,
    fontSize: '0.8em',
    textDecoration: 'none',
  },
})

class LoginModal extends Component {
  constructor() {
    super()
    this.state = {
      emailInput: '',
      passwordInput: '',
      isShowPassword: false,
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

  openRegisterForm = () => {
    this.props.handleModalClose()
    this.props.toggleShowRegister()
  }

  render() {
    const { classes, isLoginModalOpen, handleModalClose, toggleShowRegister } = this.props
    const { emailInput, passwordInput, isShowPassword } = this.state
    return (
      <Dialog className={classes.dialog} onClose={handleModalClose} open={isLoginModalOpen}>
        <DialogTitle onClose={handleModalClose}> </DialogTitle>
        <IconButton className={classes.closeButton} onClick={handleModalClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent className={classes.dialogContent}>
          <Typography variant='h6' color='secondary'>
            Login to your account
          </Typography>
          <FormControl className={classes.form} required>
            <TextField
              className={classes.textField}
              name='emailInput'
              value={emailInput}
              placeholder='Email'
              type='email'
              onChange={this.handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <EmailIcon className={classes.icon} />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className={classes.form}>
            <TextField
              className={classes.textField}
              name='passwordInput'
              value={passwordInput}
              placeholder='Password'
              type={isShowPassword ? 'text' : 'password'}
              onChange={this.handleInputChange}
              InputProps={{
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
            <Link to={`/forgotPassword`} className={classes.link}>
              Forgot password?
            </Link>
          </FormControl>

          <Button
            variant='contained'
            fullWidth
            autoFocus
            onClick={handleModalClose}
            color='secondary'
          >
            Login
          </Button>
          <div className={classes.registerSection}>
            <Typography className={classes.registerText} variant='caption'>
              Don't have an account?
            </Typography>
            <Link to={`/register`} className={classes.link} onClick={this.openRegisterForm}>
              Create account
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(LoginModal)
