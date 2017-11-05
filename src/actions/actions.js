const FormActions = {
  SET_DEFAULT: 'SET_DEFAULT',
  SET_FIELD_VALUE: 'SET_FIELD_VALUE',
  FORM_SUBMIT: 'FORM_SUBMIT',
  FORM_SUBMIT_FAIL: 'FORM_SUBMIT_FAIL',
  FORM_SUBMIT_SUCCESS: 'FORM_SUBMIT_SUCCESS',
};
const SnackbarActions = {
  SNACKBAR_OPEN: 'SNACKBAR_OPEN',
  SNACKBAR_CLOSE: 'SNACKBAR_CLOSE'
};
const Actions = {
  ...FormActions,
  ...SnackbarActions
};

export default Actions;
