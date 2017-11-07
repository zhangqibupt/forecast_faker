import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import createStore from './store/store';
import Application from './component/application';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    const store = createStore();
    return (
      <div className="App">
        <Provider store={store}>
          <Application />
        </Provider>
      </div>
    );
  }
}
export default App;
