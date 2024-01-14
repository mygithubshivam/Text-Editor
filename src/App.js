import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Form from './components/Form'
import React, { useState } from 'react'

function App() {
  const[mode,setMode]=useState('light')
  const toggleMode=()=>{
    if (mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'
        showAlert("Dark mode has been Enabled", "success")
        // document.title='RoyTutils-Dark Mode'
        // setInterval(() => {
        //   document.title='Download now!'
        // }, 1500);
        // setInterval(() => {
        //   document.title='USe it now!'
        // }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been Enabled", "success")
      // document.title='RoyTutils-Light Mode'
      
    }
  }
  // const toggleRedMode=()=>{
  //   setMode('danger')
  //   document.body.style.backgroundColor='red'
  //   showAlert("Red mode has been Enabled", "success")
  // }
  // const toggleGreenMode=()=>{
  //   setMode('success')
  //   document.body.style.backgroundColor='green'
  //   showAlert("Green mode has been Enabled", "success")
  // }
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  // return (
  //   <>
  //   <Navbar title="RoyTutils" mode={mode} greenMode={toggleGreenMode} redMode={toggleRedMode} toggleMode={toggleMode}/>
  //   <Alert  alert={alert} />
  //   <div className="container my-3">
  //   <Form heading="Enter your details here" showAlert={showAlert} mode={mode}/>
  //   </div>
    
  // </>
  // );
  return (
    <>
    <Navbar title="RoyTutils" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert} />
    <div className="container my-3">
    <Form heading="Try Roy Tutils: Word Count,Character Count & Clear Text" showAlert={showAlert} mode={mode}/>
    </div>
    
  </>
  );
}

export default App;
