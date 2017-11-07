import Actions from './actions.js';
import { map, compact, isEmpty, toString } from 'lodash';

const ATTRS = ['id', 'fc_delivered_expense', 'fc_delivered_impression', 'ffdr', 'ffdr_trend', 'gross_avail', 'net_avail', 'osi', 'unconstrained_gross_avail'];

const ActionCreators = {
  setDefault: () => (
    {
      type: Actions.SET_DEFAULT
    }
  ),
  setFieldValue: (field, value) => (
    {
      type: Actions.SET_FIELD_VALUE,
      field,
      value
    }
  ),
  formSubmit: (formValues = {}) => {
    return (dispatch) => {
      dispatch({
        type: Actions.FORM_SUBMIT
      });

      const reg = /^[0-9]+.?[0-9]*$/;
      const errorFields = compact(map(ATTRS, (attr) => (formValues[attr] && !reg.test(formValues[attr])) ? attr : null));

      dispatch({ type: Actions.FORM_SET_ERROR_FIELDS, errorFields });
      if(!isEmpty(errorFields)){
        dispatch({ type: Actions.FORM_SUBMIT_FAIL });
        dispatch({
          type: Actions.SNACKBAR_OPEN,
          message: `Fields# ${toString(errorFields)} must be valid number!`
        });
        return;
      }

      return (
        fetch("/forecast_faker/submit", {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(formValues)
        }).then((response) => {
          return response.body.json();
          //return { success: false }
          }
        ).then(({ success, message }) => {
          if(success) {
            dispatch({ type: Actions.FORM_SUBMIT_SUCCESS });
            dispatch({ type: Actions.SNACKBAR_OPEN, message: 'Data fake successfully!' });
          }else{
            dispatch({ type: Actions.FORM_SUBMIT_FAIL, message });
            dispatch({
              type: Actions.SNACKBAR_OPEN,
              message: `${message}`
            });
          }
        })
      );

      //setTimeout(() => {
      //    dispatch({ type: Actions.FORM_SUBMIT_FAIL });
      //    dispatch({ type: Actions.SNACKBAR_OPEN, message: 'SUBMIT FAIL' });
      //  },
      //  2000);
    };
  },
  closeSnackbar: () => ({
    type: Actions.SNACKBAR_CLOSE
  })
};


export default ActionCreators;

