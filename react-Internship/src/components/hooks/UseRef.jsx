import React, { useState } from 'react'
import { useRef } from 'react'
export default function Refeg() {
    let nameref = useRef()
    let resultref = useRef()
    let ageRef = useRef()
    const [age,setage] = useState(0);
    const [color,setcolor] = useState('blue');
    let showmsg=()=>
    {
        
        if(ageRef.current.value >= 18){
            let msg = "eligibel to vote "+ nameref.current.value
            resultref.current.innerHTML = msg
            setcolor('green');
              nameref.current.value=""
              ageRef.current.value=''
            return;
        }else{
            let msg = "not eligible to vote "+ nameref.current.value
            resultref.current.innerHTML = msg
            setcolor('red');
              nameref.current.value=""
              ageRef.current.value=''
        }
     
        

    }
  return (
    <div className=' pt-5 bg-blue-400 '>Refeg:
        <p className='h-10 '>
            Enter name : <input type="text"className='p-1 border' ref={nameref} />
            
        </p>
        <p  className='h-20'>
            age:
            <input type="text"  className='p-1 border' ref={ageRef} />
        </p>
        <input type="button"  className=" border bg-amber-300 rounded text-center m-9 p-2"value="click here" onClick={()=>showmsg()} />
        <h1 ref={resultref} style={{background:color}}>

        </h1>
    </div>
  )
}