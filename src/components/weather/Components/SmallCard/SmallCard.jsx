import React, { useContext } from 'react'
import './SmallCard.css'

function SmallCard({text,icon,data,parameter}) {
  return (
    <div className="card-div ">
    <span className="flex gap-1 items-center">
      {icon}
    </span>
    <span>{data} {parameter}</span>
    <span>{text}</span>
  </div>
  )
}

export default SmallCard
