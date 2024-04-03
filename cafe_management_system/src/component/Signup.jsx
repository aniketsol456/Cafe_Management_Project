import React, { useState } from 'react';
import User_icon from "../assets/images/user_icon.png"
import Mail_icon from "../assets/images/mail_icon.png"
import Pass_icon from "../assets/images/password_icon.png"
import "../component/Signup.css";

const Signup = () => {

  const[action,setAction] = useState("Login");

  return (
    <div className="containe">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={User_icon} alt=""/>
          <input type="text" placeholder='Name'/>
        </div>
        <div className="input">
          <img src={Mail_icon} alt=""/>
          <input type="text" placeholder="EMail Id"/>
        </div>
        <div className="input">
          <img src={Pass_icon} alt=""/>
          <input type="text" placeholder='Password'/>
        </div>
      </div>
      <div className="forgo-pass">Lost Password?<span>Click Here!</span> </div>
      <div className="submit">
        <div className={action==="Login"?"submit gray":"submit"}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}>Login</div>
      </div>
    </div>
  )
}

export default Signup
