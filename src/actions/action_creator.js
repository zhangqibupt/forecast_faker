import Actions from './actions.js';

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
      setTimeout(() => {
          dispatch({ type: Actions.FORM_SUBMIT_FAIL });
          dispatch({ type: Actions.SNACKBAR_OPEN, message: 'SUBMIT FAIL' });
        },
        2000);
    };
  },
  closeSnackbar: () => ({
    type: Actions.SNACKBAR_CLOSE
  })
};
//return (
//  fetch("http://localhost:3000/forecast_faker/submit", {
//    method: "POST",
//    mode: "no-cors",
//    headers: {
//      "Content-Type": "text/plain"
//    },
//    body: JSON.stringify(formValues)
//  }).then((response) => {
//      return response.body.json();
//    }
//  ).then(({ success, message }) => {
//    success ?
//      dispatch({
//        type: Actions.FORM_SUBMIT_SUCCESS,
//        message: 'Data fake successfully!'
//      }) :
//      dispatch({
//        type: Actions.FORM_SUBMIT_FAIL,
//        message
//      });
//  })
//);

export default ActionCreators;

