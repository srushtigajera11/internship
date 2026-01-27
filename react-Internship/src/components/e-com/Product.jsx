import React from 'react'
import { productsary } from './data'
import { useParams } from 'react-router-dom'
export default function Product() {
    let params = useParams()
    let cname = params.cname
    let obj = productsary.find((i)=>i.category == cname)
    let product = obj.items
    let ui = product.map((p)=>{
        return <div className='w-1/4 flex justify-center items-center text-center flex-col' key={p.id}>
            <img className='w-4/5 aspect-square' src={p.imgurl} alt="" />
            <div className='text-lg'>{p.name}</div>
            <div>{p.price}</div>
        </div>
    })
  return (
    <div>
           <div className='flex gap-4 flex-wrap justify-center'></div>
      {ui}
    </div>
  )
}
