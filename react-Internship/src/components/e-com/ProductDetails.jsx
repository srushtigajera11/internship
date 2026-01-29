import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { productsary } from './productData'
export default function ProductDetails() {
  let params = useParams()
  let pid = params.id
  let product = productsary.find((i)=>i.id==pid);
  if (!product) {
    return <div className="text-center mt-10">Product not found</div>
  }
  let similar_products = productsary.filter((i)=>i.category == product.category && i.id != pid)
  console.log(similar_products)
   let ui = similar_products.map((s)=>{
      return <div key= {s.id} className='flex justify-center items-center text-center flex-col mt-7'>
        <Link to={'/productDetails/'+s.id}>
        <img src={s.thumbnail} className='h-1/3 ' alt="" />
        <div className=' text-slate-900 text-base font-semibold line-clamp-2'>{s.title}</div>
        <div>{s.price}</div>
        </Link>
      </div>
    })

    return (
    <div className="bg-slate-50 min-h-screen">
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
            ${product.price}
          </p>

          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className='mx-28'>
        <p className='text-center text-3xl m-5  font-extrabold font-serif text-slate-900 '>Similar Products You may Like!</p>
        <div className='flex gap-6 overflow-x-auto'>
        {ui}
        </div>
      </div>
    </div>
  )
}