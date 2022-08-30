import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './E-commerce/App';
import reportWebVitals from './reportWebVitals';
import './index.css'
//import AppCard from './MyJs2/AppCard'
//import '../src/MyCSS/index.css';
//import App from './App';
//import Header from '../src/MyJS/Header';
//import MainContent from './MyJS/MainContent';
//import Footer from './MyJS/Footer';
// import Page from './MyJs2/Page';
// import '../src/MyCSS/categories.style.css'
//import App2 from './MyJS/App2';
//import AppCard from './MyCard/AppCard';
//import App3 from './MyJs3/App3';
//import App4 from './MyJs4/App4';

// const root = ReactDOM.createRoot(document.getElementById('root2'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root2'));
root.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
);


//ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
