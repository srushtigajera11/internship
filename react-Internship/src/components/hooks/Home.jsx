import React, { useState } from 'react'
import Login from './Login'

export default function Home() {
    const [isLogin,setisLogin] = useState(false)
    let homeui =<div>Welcome user <input type="button" value="logout"></input></div>
  return (
    <div className='bg-fuchsia-300 border py-40 m-48' >
        {isLogin?homeui:<Login isLogin={setisLogin} />}
    </div>
  )
}
