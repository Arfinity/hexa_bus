import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import introStore from './redux/reducer'; 

import Intro from './app';

let store = createStore(introStore);

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Intro/>    

      </Provider>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
