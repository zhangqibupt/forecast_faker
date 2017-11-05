import { Actions } from '../actions';

const initialTimeState = {
  open: false,
  message: 'I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate.'
};

export function snackbar(state = initialTimeState, action) {
  switch (action.type) {
    case Actions.SNACKBAR_OPEN:
      return {
        open: true,
        message: action.message
      };
    case Actions.SNACKBAR_CLOSE:
      return {
        open: false
      };
    default:
      return state
  }
}
