import Navbar from "./Navbar";
import TextForm from "./TextForm";
import './App.css'
import React,{useState} from 'react'
import Alert from "./Alert";
import About from "./About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[alert, setAlert] = useState(null);
  const[mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(1 42 50)';
      showAlert("Dark mode enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled", "success")
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="Text-Utility" mode={mode} toggleMode={toggleMode}/>
    <Alert Alert={alert}/>
    <div className="container">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>}/>
      </Routes>
    </div>
    </Router>
    
    </>
  );
}



export default App;
