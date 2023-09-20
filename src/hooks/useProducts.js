import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useProducts() {

  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get('/data/Products.json').then((res)=>(
      setProducts(res.data)
    ))
  }, [])
  
  return (
    [products]
  )
}
