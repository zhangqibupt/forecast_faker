import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import classNames from 'classnames';
import CheckIcon from 'material-ui-icons/Check';
import SaveIcon from 'material-ui-icons/Save';


const styles = theme => ({
  root: {
    textAlign: 'center',
    margin: `0 ${theme.spacing.unit * 10}px`
  },
  container: {
    textAlign: 'left',
    marginLeft: '380px'
  },
  formControl: {
    margin: theme.spacing.unit * 1,
    textAlign: 'left'
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '500px',
    marginTop: theme.spacing.unit
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: 42,
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
});

class InputForm extends React.Component {
  render() {
    const { onFieldChange, classes, formData } = this.props;
    const { loading, success, formValues } = formData;
    const { idType, id, fc_delivered_expense, fc_delivered_impression, ffdr, ffdr_trend, gross_avail, net_avail, osi, unconstrained_gross_avail } = formValues;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });


    return (
      <div className={classes.root} disabled={ loading }>
        <Grid className={classes.container}>
          <TextField type="search"
                     value={id}
                     onChange={(event) => onFieldChange('id', event.target.value)}
                     className={classes.textField}
                     label="PLC/IO MRM ID"/>
          <TextField type="search"
                     value={ffdr}
                     onChange={(event) => onFieldChange('ffdr', event.target.value)}
                     className={classes.textField}
                     label="FFDR"/>
          <TextField type="search"
                     value={osi}
                     onChange={(event) => onFieldChange('osi', event.target.value)}
                     className={classes.textField}
                     label="OSI"/>
          <TextField type="search"
                     value={fc_delivered_expense}
                     onChange={(event) => onFieldChange('fc_delivered_expense', event.target.value)}
                     className={classes.textField}
                     label="FC Delivered Expense"/>
          <TextField type="search"
                     value={fc_delivered_impression}
                     onChange={(event) => onFieldChange('fc_delivered_impression', event.target.value)}
                     className={classes.textField}
                     label="FC Delivered Impression"/>
          <TextField type="search"
                     value={ffdr_trend}
                     onChange={(event) => onFieldChange('ffdr_trend', event.target.value)}
                     className={classes.textField}
                     label="FFDR Trend"/>
          <TextField type="search"
                     value={gross_avail}
                     onChange={(event) => onFieldChange('gross_avail', event.target.value)}
                     className={classes.textField}
                     label="Gross Avail"/>
          <TextField type="search"
                     value={net_avail}
                     onChange={(event) => onFieldChange('net_avail', event.target.value)}
                     className={classes.textField}
                     label="Net Avail"/>
          <TextField type="search"
                     value={unconstrained_gross_avail}
                     onChange={(event) => onFieldChange('unconstrained_gross_avail', event.target.value)}
                     className={classes.textField}
                     error
                     label="Unconstrained Gross Avail"/>
        </Grid>
        <Grid>
          <FormControl component="fieldset" required className={classes.formControl}>
            <RadioGroup
              row
              aria-label="ID TYPE"
              className={classes.group}
              value={idType}
              onChange={(_, value) => onFieldChange('idType', value)}
            >
              <FormControlLabel value="placement" control={<Radio/>} label="placement"/>
              <FormControlLabel value="io" control={<Radio/>} label="io"/>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <div className={classes.wrapper}>
            <Button raised color="primary" className={classes.button} onClick={this.props.onRandom}>
              RANDOM
            </Button>
            <Button
              raised
              color="accent"
              className={buttonClassname}
              disabled={loading || !id}
              onClick={this.props.onSubmit}
            >
              SUBMIT
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
          {/*<Button*/}
            {/*raised*/}
            {/*disabled={!id}*/}
            {/*color="accent"*/}
            {/*className={classes.button}*/}
            {/*onClick={this.props.onSubmit}*/}
          {/*>*/}
            {/*SUBMIT*/}
          {/*</Button>*/}
        </Grid>
      </div>
    );
  }
}

InputForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputForm);
