import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('Light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'Light') {
      setMode('Dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      ShowAlert('Dark Mode has been enabled.', 'success');
    } else {
      setMode('Light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      ShowAlert('Light Mode has been enabled.', 'success');
    }
  }

  return (
    <div>  
      <Alert alert = {alert}/>
      <Navbar title={"TextUtils"} about={"About Us"} mode={mode} toggleMode={toggleMode} />
      <TextForm heading={"Enter your text here..."} ShowAlert={ShowAlert} mode={mode} />
      <About mode= {mode}/>
    </div>
  );
}

export default App;
