import React from 'react'
import Teammember from './Teammember'

function PropsHome() {
  return (
    <div className='flex justify-around bg-amber-200 p-13'>
        <Teammember imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFKhnKjMPN6QznEnwDoz5m5z5_OEAn5h9PA&s" name="Max" Experience={[2]} Des="HR"/>
        <Teammember imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPzg9jzfRxWbshsxDhZ6ckoLZRbwlb5vneg&s" name="John Doe" Experience={[5]} Des="Developer"/>
        <Teammember imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFKhnKjMPN6QznEnwDoz5m5z5_OEAn5h9PA&s" name="Jane Hopper" Experience={[6]} Des="Product Manager"/>
        <Teammember imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPzg9jzfRxWbshsxDhZ6ckoLZRbwlb5vneg&s" name="Jow Doe" Experience={[10]} Des="CEO"/>
  
    </div>
  )
}

export default PropsHome
