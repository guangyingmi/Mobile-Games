import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style/reset.scss'
import './style/style.scss'
// import ajax from './ajax'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, 
document.getElementById('root'));

serviceWorker.unregister();

// ajax.get('/test.json',{
//   params:{
//     a:1,
//     b:2
//   }
// })
// .then(response=>{
//   console.log(response);
// })
// .catch(error=>{
//   console.log(error);
// })