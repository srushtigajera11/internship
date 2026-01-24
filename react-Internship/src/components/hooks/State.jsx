import React, { useState } from 'react'

export default function State() {
    const [i,seti] =useState(0);
  return (
    <div>
      <input type="button" value="+" onClick={()=>{seti(i+1)}} />{i}
      <input type="button" value="-" onClick={()=>{seti(i-1)}} />
    </div>
  )
}
