import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import { createStore } from 'redux';
import comments from './reducers';

const initialState = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [
  {
    id: 1,
    title: 'Света', commentary: 'Изучить React', time: "10:15"},
   {id: 2, title: "Петя", commentary: 'Выполнить домашку по React', time: "10"},
   {id: 3, title: 'Юля', commentary: 'Изучить следущий модуль', time: "15"
  }
]

const store = createStore(comments, initialState);

store.subscribe(()=>{
  localStorage.setItem('comments', JSON.stringify(store.getState()))
});

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#comments')
);



