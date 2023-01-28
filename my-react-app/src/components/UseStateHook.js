import React, {useState} from "react";
import './style.css'

const UseStateHook = () => {
    const [title,setTitle]=useState("hello world")
    const changeTitle = () =>{
        setTitle("title changed")
    }
  return (
    <>
      <div className="useStateHooks">
        <h3>
          The useState hook allows us to define a state, define an initial value
          in the state, and update the value of a state.
        </h3>

        <h2>TİTLE İlk başta hello world</h2>

       <h1>{title}</h1> 

        <button onClick = {changeTitle}>bu button title ı değiştirir</button>

      </div>
    </>
  );
};

export default UseStateHook;
