import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import {Route,BrowserRouter, Routes}from 'react-router-dom';
import Login from './components/Login'
import Employees from './components/EmployeesList';
import {CookiesProvider} from 'react-cookie'
import Uploadcsv from './components/Uploadcsv';

function Router(){
  return(
  <CookiesProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path = '/' element={<Login/>} component = {Login}/>
    <Route exact path = '/employee' element={<Employees/> } component = {Employees}/>
    <Route exact path = '/csv' element={<Uploadcsv/> } component = {Uploadcsv}/>

    </Routes>

    </BrowserRouter>
    </CookiesProvider>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);