import React from 'react'
import { IProduct } from '../types/product-type'

interface IProductCategory{
    productDetail: IProduct[]
}
function ProductDetail(props : IProductCategory) {
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail