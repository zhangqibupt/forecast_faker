import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import InputForm from './input_form';
import Snackbar from 'material-ui/Snackbar';
import { ActionCreators as actionCreators } from '../actions';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Application extends React.Component {
  render() {
    const { dispatch, formData, snackbar, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Forecast Faker
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
        <InputForm
          onRandom={() => dispatch(actionCreators.setDefault())}
          formData={formData}
          onFieldChange={(field, value) => dispatch(actionCreators.setFieldValue(field, value))}
          onSubmit={() => dispatch(actionCreators.formSubmit(formData.formValues))}
        />
        <Snackbar
          open={snackbar.open}
          message={snackbar.message}
          autoHideDuration={4000}
          onRequestClose={()=> dispatch(actionCreators.closeSnackbar())}
        />
      </div>
    )
  }
}

function select(state) {
  return state;
}

Application.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(select)(withStyles(styles)(Application))
