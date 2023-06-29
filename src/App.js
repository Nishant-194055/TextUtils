import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
function App() {
  const[alert,setAlert] = useState(null);
  const[mode,setMode] = useState('light');
  const[modename,setmodename] = useState('Enable Dark Mode')
  const showAlert = (type,message)=>{
    setAlert({
      msg:message,
      type:type
    })
    setInterval(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = ()=>{
if(mode === 'light'){
  setMode('dark');
  setmodename('Enable Light Mode')
  document.body.style.backgroundColor = '#042743';
  showAlert('success','Dark Mode is ONN');
  document.title ="Dark-Mode Enabled"
  setInterval(() => {
    document.title ="Very Good App";
  }, 2000);
  setInterval(() => {
    document.title ="Install App";
  }, 1500);
}
else{
  setMode('light');
  setmodename('Enable Dark Mode')
  document.body.style.backgroundColor = 'white';
  showAlert('success','Light Mode is ONN');
  document.title = "Light-Mode Enabled";
}
  }
  return (
    <div>
      <Navbar title ="TextUtils" about ="About" mode = {mode} togglemode ={togglemode} modename = {modename}/>
       <Alert alert={alert}/>
          <Textform title ="Enter the text here anaize below" mode ={mode} showAlert ={showAlert}/>
    </div>
  );
}

export default App;
