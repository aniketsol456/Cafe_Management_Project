import React, { useState } from 'react';
import User_icon from "../assets/images/user_icon.png"
import Phone_icon from "../assets/images/phone_icon.png"
import Pass_icon from "../assets/images/password_icon.png"
import "../component/Signup.css";

const Signup = () => {

  const[action,setAction] = useState("Sign Up");
  const[visible,setVisible] = useState("Password");

  return (
    <div className="containe">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={User_icon} alt=""/>
          <input type="text" placeholder='Name'/>
        </div>}
        <div className="input">
          <img src={Phone_icon} alt=""/>
          <input type="text" placeholder="Phone no."/>
        </div>
        <div className="input">
          <img src={Pass_icon} alt=""/>
          <input type="text" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgo-pass">Lost Password?<span>Click Here!</span> </div>}
      <div className="submit">
        <div className={action==="Login"?"sub gray":"sub"}  onClick={()=>setAction("Sign Up")}>Sign Up</div>
        <div className={action==="Sign Up"?"sub gray":"sub"} onClick={()=>setAction("Login")}>Login</div>
      </div>
    </div>
  )
}

export default Signup
