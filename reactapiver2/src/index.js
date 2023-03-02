import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
//import UseStateApp1 from './components/1.useState/UseAtateApp1';
import UseEffectApp1 from "./components/2.useEffect/UseEffectApp1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateApp1/> */}
    <UseEffectApp1/>
  </React.StrictMode>
);
