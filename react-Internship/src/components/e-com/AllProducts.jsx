import React from 'react'
import { Link } from 'react-router-dom'
import { productsary } from './productData'

export default function () {
    let ui = productsary.map((p)=>{
        return <div key={p.id} className='flex text-center mb-1.5'>
            <Link to={'/productDetails/'+p.id}>
            <img src={p.thumbnail} alt="" />
            <div>{p.title}</div>
            <div>${p.price}</div>
            </Link>
        </div>

    })
  return (
    <div className='grid grid-cols-4 gap-4'>
      {ui}
    </div>
  )
}
