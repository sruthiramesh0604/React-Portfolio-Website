import "./portfolioList.scss"

import React from 'react'

export default function PortfolioList({id,title,active,setSelected}) {
  return <li className={active ? "porfolioList active" : "portfolioList"} 
  onClick={()=> setSelected(id)}>
      {title}</li>;

} 