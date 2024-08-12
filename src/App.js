import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/textForm';
import Alart from './components/Alart';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState('light');
  const [textColor, settextColor] = useState('dark');
  const [alart, setAlart] = useState(null)
  // const [page, setpage] = useState(['']);

  const showAlart = (message, type) =>{
    setAlart({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlart(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if (darkmode === 'light'){
      setDarkmode('dark');
      settextColor('light');
      document.body.style.backgroundColor = 'rgba(32,30,32,1)';
    }else{
      setDarkmode('light')
      settextColor('dark');
      document.body.style.backgroundColor = '#ffffff'
    }
  }

  return (
   <>
    {/* <BrowserRouter> */}
      <Navbar title ="TextFlex" mode={darkmode} toggle={toggleMode} txtColor = {textColor} />
      <Alart alart={alart}/>
      <div className="container my-3">
      <Textarea heading ="Enter Your text here to Analyse" txtColor = {textColor} showAlart={showAlart} />
      {/* <Routes>
        <Route path="/" element={<Textarea heading ="Enter Your text here to Analyse" txtColor = {textColor} showAlart={showAlart} />} />
          <Route path="/about" element={<About />}/>
      </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}
export default App;
