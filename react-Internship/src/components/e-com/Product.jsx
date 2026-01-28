import React from 'react'
import { productsary } from './productData'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Products() {
    let params = useParams()
    let cname = params.cname
    let products = productsary.filter((e)=>e.category == cname)
    let ui = products.map((p)=>
    {
      return  <div key= {p.id} className='w-1/4 flex justify-center items-center text-center flex-col'>
        <Link to={'/productDetails/'+p.id}>
        <img src={p.thumbnail} alt="" />
        <div>{p.title}</div>
        <div>{p.price}</div>
        </Link>
        </div>
    })
  return (
    <div > <p className='text-center text-3xl m-5  font-extrabold font-serif text-slate-900 '>{cname}</p>
    <br />
    <div className='flex gap-4 flex-wrap justify-center'>
        {ui}
        </div></div>
  )
}