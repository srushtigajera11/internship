import React from 'react'

export default function Login() {
    
  return (
    <div>
      username
    <input type="text" value="" />
    password
    <input type="text" value="" />
    <input type="button" value="login" onClick={()=>checkLogin()} />
    </div>
  )
}
