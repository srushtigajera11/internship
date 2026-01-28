import React from 'react'
import { useParams } from 'react-router-dom'
import { productsary } from './data';

export default function ProductDetails() {
    let params = useParams()
    let pid = params.id;
    let product = productsary.find((p)=>id);
    console.log(product);
  return (
    <div>
      
    </div>
  )
}
