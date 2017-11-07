import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl, FormControlLabel, FormGroup } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import classNames from 'classnames';
import Switch from 'material-ui/Switch';
import { includes } from 'lodash';

const styles = theme => ({
  root: {
    textAlign: 'center',
    margin: `0 ${theme.spacing.unit * 10}px`
  },
  container: {
    textAlign: 'left',
    marginLeft: '290px',
    marginTop: '50px'
  },
  formControl: {
    margin: theme.spacing.unit,
    textAlign: 'left'
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    fontSize: theme.spacing.unit*1.7,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '400px',
    marginTop: theme.spacing.unit,
  },
  textFieldInput: {
    paddingLeft:'10px'
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
  forecast_type: {
    paddingLeft: theme.spacing.unit * 20
  }
});

class InputForm extends React.Component {
  render() {
    const { onFieldChange, classes, formData } = this.props;
    const { loading, success, formValues, errorFields } = formData;
    const { forecast_type, idType, id, fc_delivered_expense, fc_delivered_impression, ffdr, ffdr_trend, gross_avail, net_avail, osi, unconstrained_gross_avail } = formValues;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });

    return (
      <div className={classes.root} disabled={loading}>
        <Grid className={classes.container}>
          <TextField type="search"
                     required
                     margin="normal"
                     error={includes(errorFields, 'id')}
                     value={id}
                     onChange={(event) => onFieldChange('id', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="PLC/IO MRM ID"/>
          <TextField type="search"
                     error={includes(errorFields, 'ffdr')}
                     value={ffdr}
                     onChange={(event) => onFieldChange('ffdr', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="FFDR"/>
          <TextField type="search"
                     error={includes(errorFields, 'osi')}
                     value={osi}
                     onChange={(event) => onFieldChange('osi', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="OSI"/>
          <TextField type="search"
                     error={includes(errorFields, 'fc_delivered_expense')}
                     value={fc_delivered_expense}
                     onChange={(event) => onFieldChange('fc_delivered_expense', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="FC Delivered Expense"/>
          <TextField type="search"
                     error={includes(errorFields, 'fc_delivered_impression')}
                     value={fc_delivered_impression}
                     onChange={(event) => onFieldChange('fc_delivered_impression', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="FC Delivered Impression"/>
          <TextField type="search"
                     error={includes(errorFields, 'ffdr_trend')}
                     value={ffdr_trend}
                     onChange={(event) => onFieldChange('ffdr_trend', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="FFDR Trend"/>
          <TextField type="search"
                     error={includes(errorFields, 'gross_avail')}
                     value={gross_avail}
                     onChange={(event) => onFieldChange('gross_avail', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="Gross Avail"/>
          <TextField type="search"
                     error={includes(errorFields, 'net_avail')}
                     value={net_avail}
                     onChange={(event) => onFieldChange('net_avail', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
                     label="Net Avail"/>
          <TextField type="search"
                     error={includes(errorFields, 'unconstrained_gross_avail')}
                     value={unconstrained_gross_avail}
                     onChange={(event) => onFieldChange('unconstrained_gross_avail', event.target.value)}
                     className={classes.textField}
                     InputClassName={classes.textFieldInput}
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
              <FormControlLabel
                className={classes.forecast_type}
                control={
                  <Switch checked={forecast_type === 'od'}
                          onChange={(event, checked) => onFieldChange('forecast_type', checked ? 'od' : 'nightly')}
                  />
                }
                label="OD Forecast?"
              />
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
            {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
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
