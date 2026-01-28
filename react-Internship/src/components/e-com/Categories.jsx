import React from 'react'
import { productsary } from './productData'
import { Link } from 'react-router-dom'
export default function Categories() {
      let categories= [];
  productsary.map((p)=>
  {
    if(categories.findIndex((e)=>e.cname==p.category)==-1)
    {
    categories.push({cname:p.category, image:p.thumbnail})
    }
  })
   
    let ui = categories.map((c)=>{
      return <div className='flex flex-col justify-center text-center' >
        <Link to={'product/'+c.cname}>
        <img src={c.image} alt="" />
        <div className=' text-slate-900 text-base font-semibold line-clamp-2'>{c.cname}</div>
        </Link>
      </div>

    })
  return (
    <div>
      <p className='text-center text-3xl m-5  font-extrabold font-serif text-slate-900 '>Categories</p>
    <div className='flex flex-wrap gap-4 justify-center'>
        {ui}
      </div>
    </div>
  )
}
