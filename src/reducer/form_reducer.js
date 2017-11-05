import { Actions } from '../actions';
import { random, reduce, ceil } from 'lodash';

const fieldRules = {
  fc_delivered_expense: { min: 0.0, max: 1000.1 },
  ffdr: { min: 0.0, max: 1.01 },
  osi: { min: 0.0, max: 1.01 },
  ffdr_trend: { min: 0, max: 100000 },
  gross_avail: { min: 0, max: 100000 },
  net_avail: { min: 0, max: 100000 },
  unconstrained_gross_avail: { min: 0, max: 100000 },
  fc_delivered_impression: { min: 0, max: 100000 }
};

const getRandomFormValue = (formValues = {}) => {
  return reduce(fieldRules,
    (formValues, config, field) => {
      formValues[field] = ceil(random(config.min, config.max), 4);
      return formValues;
    }, formValues);
};

const initialTimeState = {
  formValues: {
    idType: 'placement'
  },
  loading: false,
  success: false
};

export function formData(state = initialTimeState, action) {
  console.log('formReducer reducer called with state ', state, ' and action ', action);

  switch (action.type) {
    case Actions.SET_DEFAULT:
      return {
        ...state,
        formValues: getRandomFormValue(state.formValues)
      };
    case Actions.SET_FIELD_VALUE:
      state.formValues[action.field] = action.value;
      return {
        ...state,
      };
    case Actions.FORM_SUBMIT:
      return {
        ...state,
        loading: true
      };
    case Actions.FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      };
    case Actions.FORM_SUBMIT_FAIL:
      return {
        ...state,
        loading: false,
        success: false
      };
    default:
      return state
  }
}
