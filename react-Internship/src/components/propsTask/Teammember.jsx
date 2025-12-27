import React from 'react'

function Teammember(props) {
  let bg_color = 'bg-white'

  if (props.Experience > 5) {
    bg_color = 'bg-green-300'
  }

  return (
    <div className={`${bg_color} p-5 m-5 text-center rounded-lg w-60`}>
      <img src={props.imgSrc} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Experience: {props.Experience}</p>
      <p>Designation: {props.Des}</p>
    </div>
  )
}

export default Teammember
