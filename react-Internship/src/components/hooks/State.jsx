import React, { useState } from 'react'

export default function State() {
    const [i,seti] =useState(0);
    const [bgcolor,setbgcolor] = useState('white');
    const [color,setcolor] = useState('black');
    let addbtn = <div >
            <input type="button" value="Add to cart" onClick={()=>seti(i+1)} />
        </div>;
    let counter =  <div>
      <input type="button" value="+" onClick={()=>seti(i+1)} />{i}
      <input type="button" value="-" onClick={()=>seti(i-1)} />
      </div>
  return (
    <>
    <div  className='h-full' style={{backgroundColor:bgcolor , color:color}}>
        <h1>this is UseState Hooks</h1>
        {/* {i==0?addbtn:counter} */}
        <input type="text" />
        <div className='flex justify-around h-11 w-2xs'>
        <button className='p-1 bg-blue-300 border-2' onClick={()=>{setbgcolor('blue'),setcolor('white')}}>dbsdj</button>
         <button className='p-1 bg-yellow-300 border-2' onClick={()=>setbgcolor('yellow')}>dbsdj</button>
          <button className='p-1 bg-pink-300 border-2' onClick={()=>setbgcolor('pink')}>dbsdj</button>
          
          </div>
    </div>
    <div>this is a useState</div>
    </>
  )
}
