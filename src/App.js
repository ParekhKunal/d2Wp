import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import React,{useState} from 'react'
import Form from './components/Form';


function App(){
  const [mode, setMode] = useState("success");
  const toggleMode = () => {
    if (mode === "success") {
      setMode("dark");
      document.body.style.backgroundColor="grey";
    } else {
      setMode("success");
      document.body.style.backgroundColor = "white";
    }
  };

  

  return (
    <>
      <div>
        <Navbar
          title="D2WP"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />    
        <Form />
        <Footer copyright="@2022 CopyRight:" info="  Kunal Parekh" />
      </div>
    </>
  );

  // This is the js for the material design
  function leaveInput(el) {
    if (el.value.length > 0) {
      if (!el.classList.contains("active")) {
        el.classList.add("active");
      }
    } else {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    }
  }
}
export default App;