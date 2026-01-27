import React from 'react'
import { productsary } from './data'
import { Link } from 'react-router-dom'
export default function Categories() {
    let categories = productsary.map((p)=>{
        return {cname : p.category ,imgsrc : p.items[0].imgurl}
    })
    let ui = categories.map((c)=>{
        return <div className='w-1/4 text-center flex justify-center items-center flex-col'>
            <Link to={'/product/'+c.cname}>
                <img src={c.imgsrc}className='w-4/5 aspect-square' alt="" />
                <div>{c.cname}</div>
            </Link>
        </div>
    })
  return (
    <div>
      Categories
    <div className='flex flex-wrap gap-4 justify-center'>
        {ui}
      </div>
    </div>
  )
}
