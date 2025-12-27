import React from 'react'
import teamMembers from "./memberData"

export default function MapHome() {
    let MemberUI = teamMembers.map((m,index)=>{
        return <div id={index} className="bg-blue-300 h-32 w-32">
            <img src={m.img} alt={m.name} />
            <h2>{m.name}</h2>
            <p>Experience: {m.experience}</p>
            <p>Designation: {m.designation}</p>
        </div>
    })
  return (
    <div className='flex justify-around'>
      {MemberUI}
    </div>
  )
}
