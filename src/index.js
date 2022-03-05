import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> //App.js의 function App()을 불러옴
  </React.StrictMode>,
  document.getElementById('root') //pubic의 index.html 안에 있는 <body>태그 안의 <div>태그(id가 root인)를 가져옴
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
