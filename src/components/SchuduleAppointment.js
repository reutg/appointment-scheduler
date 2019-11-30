import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const styles = theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: '40vh',
  },
})

class SchuduleAppoitment extends Component {
  constructor() {
    super()
    this.state = {
      treatmentCategorySelect: '',
      treatmentTypeSelect: '',
      treatmentCategories: ['type 1', 'type 2', 'type 3', 'type 4', 'type 5'],
      treatmentTypes: ['type 1', 'type 2', 'type 3', 'type 4', 'type 5'],
    }
  }

  handleSelectChange = event => {
    const selectName = event.target.name
    this.setState({ [selectName]: event.target.value })
  }
  render() {
    const { classes } = this.props
    const {
      treatmentCategorySelect,
      treatmentTypeSelect,
      treatmentCategories,
      treatmentTypes,
    } = this.state
    return (
      <div className={classes.formContainer}>
        <Typography variant='h6' color='secondary'>
          Schedule an appointment
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel>Select Category</InputLabel>
          <Select
            name='treatmentCategorySelect'
            value={treatmentCategorySelect}
            onChange={this.handleSelectChange}
          >
            {treatmentCategories.map(treatmentCat => (
              <MenuItem key={treatmentCat} value={treatmentCat}>
                {treatmentCat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Select Type</InputLabel>
          <Select
            name='treatmentTypeSelect'
            value={treatmentTypeSelect}
            onChange={this.handleSelectChange}
          >
            {treatmentTypes.map(treatmentType => (
              <MenuItem key={treatmentType} value={treatmentType}>
                {treatmentType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(SchuduleAppoitment)
