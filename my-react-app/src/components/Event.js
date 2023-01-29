import React from 'react'
import './style.css'

const Event = () => {
    const clickMe=(adın)=> {
        console.log("ismin:"+adın)
    }
  return (
    <>
    <div className="eventolayı">
        <h1>burada eventi anlatmaya çalıştık </h1>
         <button onClick = {()=>{clickMe("faruk")}}>clickme</button>
    </div>
    <div className="eventolayı">
        <h1>burada eventi anlatmaya çalıştık </h1>
         <button onClick = {()=>{clickMe("faruk")}}>clickme</button>
         
    </div>
    

    </>
  )
}

export default Event