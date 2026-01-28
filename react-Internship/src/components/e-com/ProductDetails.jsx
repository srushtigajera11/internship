import React from 'react'
import { useParams } from 'react-router-dom'
import { productsary } from './productData'
export default function ProductDetails() {
  let params = useParams()
  let pid = params.id
  let product = productsary.find((i)=>i.id==pid);
  if (!product) {
    return <div className="text-center mt-10">Product not found</div>
  }
  let similar_products = productsary
  // let similer_products = category_products.items.filter((i)=>i.id != pid)
  // console.log(JSON.stringify(similer_products))
  // let ui = similer_products.map((s)=>{
  //   return  <div className='bg-amber-800 text-amber-50 text-2xl '>
  //       <img src={s.imgurl} alt="" />
  //       {s.name}
  //       {s.price}
  //   </div>
  // })
  

    return (
    <div className="bg-slate-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 grid md:grid-cols-2 gap-8">
        
        {/* Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-contain"
        />

        {/* Info */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900">
            {product.title}
          </h1>

          <p className="text-slate-600 text-sm">
            {product.description}
          </p>

          <p className="text-xl font-bold text-slate-900">
            ₹{product.price}
          </p>

          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}