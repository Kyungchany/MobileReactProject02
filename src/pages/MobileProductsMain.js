import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../css/MobileHomeMain.module.css'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import regExp from '../util/regExp'
import Favorit from './Favorit'

export default function MobileProductsMain() {

  // const favoreit = useRef()
  // let selectFavoreit = null


  // const colorRed = useCallback((select)=>{

  //   if(selectFavoreit===null){
  //     selectFavoreit=select
  //     gsap.to(selectFavoreit.current, {background:'black'})
  //   }
  // })



  const productsMenu = [
    {index:0, name:"전체보기"},
    {index:1, name:"신상품"},
    {index:2, name:"추천상품"},
    {index:3, name:"그 외"},
  ]

  // const [products, setProducts] = useState([])
  // useEffect(()=>{
  //   axios.get('/data/Products.json').then((res)=>(
  //     setProducts(res.data)
  //   ))
  // }, [])
  const [products] = useProducts()
  
  const [selectCategory, setSelectCategory] = useState(productsMenu[0].name)
  const [categoryItem, setCategoryItem] = useState([])

  useEffect(()=>{
    if(selectCategory==="전체보기"){
      setCategoryItem(products)
    }else{
      setCategoryItem(products.filter((item)=>(item.category)===selectCategory))
    }
  }, [selectCategory, products])

  const navigate = useNavigate()

  

  return (
    <div className='w-f h-[auto] relative left-0 top-0 bg-mainColor'>
      
      <div className='w-f h-[55px]  bg-white'>
       <ul className='w-f h-[100%] flex flex-wrap flex-row  justify-around content-center font-NotoSansKR text-[12px] text-666666'>
              {
                productsMenu.map((item)=>(
                  <li key={item.index} onClick={()=>{setSelectCategory(item.name)}}
                  style={item.name===selectCategory ? {color:'#673ab7', fontFamily:'bold'} : {color:'#666666'}}>{item.name}</li>
                ))
              }           
       </ul>
      </div>
      
      <section className='w-[86.6vw] h-auto mx-auto mt-[30px] '>
        <p className='font-NotoSansKR text-[11px] text-666666'>
          &#91;{selectCategory}&#93; 카테고리에 총 <span className='text-673ab7 font-bold'>{categoryItem.length}</span>개의 상품이 등록되어 있습니다.
        </p>

        <div className='w-[86.6vw] h-[auto] mt-[30px]'>
          <ul className='w-[100%] h-[100%] bg-white'>
            {
              categoryItem.map((item)=>(
                <li key={item.id} className='mb-[30px] p-[8px] box-border flex flex-wrap flex-row justify-around'>
                  <img src={item.images} className='w-[50%] h-[135px]'/>
                  <div className=' relative left-0 top-0'>
                    <p className='text-[16px] font-bold font-NotoSansKR text-333333'>{item.name}</p>
                    <p className='text-[11px] font-nomral font-NotoSansKR text-666666 mb-[12px]'>{item.subName}</p>
                    <p className={`text-[10px] font-nomral font-NotoSansKR text-666666 relative pl-[5px] ${styles.madefrom}`}>{item.from}</p>
                    <p className={`text-[10px] font-nomral font-NotoSansKR text-666666 relative pl-[5px] ${styles.madefrom}`}>{item.modelNum}</p>
                    <p className={`text-[10px] font-nomral font-NotoSansKR text-666666 relative pl-[5px] ${styles.madefrom}`}>{item.code}</p>
                    <p className='text-[16px] font-bold font-NotoSansKR text-673ab7 mt-[20px] w-[139px]'>{regExp.comma(item.price)}원</p>
                    <p className='w-[60px] h-[25px] bg-673ab7 text-[10px] font-bold font-NotoSansKR
                     text-white leading-[25px] text-center absolute bottom-0 right-0'
                     onClick={()=>{navigate(`/products/${item.id}`)}}>즉시구매</p>
                     {/* <p onClick={colorRed} ref={favoreit}
                      className='w-[30px] h-[30px] bg-999999 rounded-[50%] absolute top-[-5%] right-[4%]'>
                      <img src='/images/hart.png' className='absolute w-[50%] h-[50%] top-[50%] mt-[-25%] left-[50%] ml-[-25%]'/>
                     </p> */}
                     <Favorit/>
                  </div>
                  
                </li>
              ))
            }
            


            
          </ul>
        </div>
      </section>

      

    </div>
  )
}
