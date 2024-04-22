import React, { useState , useEffect , useContext} from "react";
import { Routes , Route , NavLink , useNavigate} from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import "./style.css";
import RichText from "./components/RichText";




const App = () => {



  return (
    <div
      style={{
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        border : '2px solid',
        height : '100vh',
        width : '100vw',
        alignItems : 'center',
      }}
    >
      <Counter/>
      <UserForm/>
      <RichText/>
    </div>
  )

}







export default App;




