import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from '../middleware/promise_middleware';
import * as reducers from '../reducer'

export default function(data) {
  const reducer = combineReducers(reducers);
  const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
  return finalCreateStore(reducer, data);
}
