import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import setupInterceptors from "./services/setupInterceptors";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
        <App />
        

    </Provider>  
  </React.StrictMode>,
  document.getElementById("root")
);



setupInterceptors(store);
reportWebVitals();

    