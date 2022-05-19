import React from 'react'
import "./menu.scss"

export default function menu({open, setOpen}) {
  return (
    <div className={"menu "+(open && "active")}>
      <ul>
          <li onClick={()=>setOpen(false)}>
             <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setOpen(false)}>
             <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={()=>setOpen(false)}>
             <a href="#works">Works</a>
          </li>
          <li onClick={()=>setOpen(false)}>
             <a href="#testimonials">Testimonials</a>
          </li>
          <li onClick={()=>setOpen(false)}>
             <a href="#contact">Contact</a>
          </li>
      </ul>
    </div>
  )
}
