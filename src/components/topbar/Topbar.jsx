// import React from 'react'
import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({open,setOpen}) {
  return (
    <div className={"topbar " + (open && "active")}>
        <div className="wrapper">
            <div className="left">
              <a href="#intro" className="logo">link</a>
              <div className="itemContainer">
                <Person className="icon"/>
                <span>+1 (469) 943 5629</span>
              </div>
              <div className="itemContainer">
                <Mail className="icon"/>
                <span>saisruthi1231@gmail.com</span>
              </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setOpen(!open)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
