import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type)=>{
      setAlert ({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode Enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }
  

  return (
     <>
        {/* <Navbar title="TextUtills" aboutText="About TextUtills"/> */}
        {/* <Router> */}

        <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3 ">
          {/* <Switch> */}
            {/* <Route path="/about"> */}
             {/* <About heading="About Us" mode ={mode}/> */}
            {/* </Route> */}
            {/* <Route path ="/"> */}
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
        {/* </Router> */}

        
    </>
    
   
  );
}

export default App;
