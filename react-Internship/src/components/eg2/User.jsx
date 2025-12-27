import React from 'react'

function User(props) {
  let message;
  let bg_color ;
  if(props.age < 18){
    message = <h1>Welcome {props.username}, you are not eligible for voting!</h1>
    bg_color = 'bg-white'
  } else
  {
     message = <h1>Welcome {props.username}, you are eligible for voting!</h1>
      bg_color = "bg-green-300"
  }
  return (
    <div className={`${bg_color} h-6`}>
      {message}
    </div>  
  )
}

export default User
