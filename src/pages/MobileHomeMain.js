import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../css/MobileHomeMain.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { gsap } from 'gsap'
import useProducts from '../hooks/useProducts'
import regExp from '../util/regExp'

export default function MobileHomeMain() {

  const favoreit = useRef()
  let selectFavoreit = null

  const colorRed = useCallback((select)=>{

    if(selectFavoreit===null){
      selectFavoreit=select
      gsap.to(favoreit.current, {background:'red'})
    }
    else if(selectFavoreit!==null && selectFavoreit!==select){
      gsap.to(favoreit.current, {background:'#999999'})
      selectFavoreit=null
    }
    
  })

  

  
  // const [products, setProducts] = useState([])
  // useEffect(()=>{
  //   axios.get('/data/Products.json').then((res)=>(
  //     setProducts(res.data)
  //   ))
  // }, [])
  const [products] = useProducts()

 const [newCategory, setNewCategory] = useState([]) // NewProducts에 속한 상품
 useEffect(()=>{
  setNewCategory(products.filter((item)=>(item.category)==="신상품"))
 }, [products])
 
 const [reCommendation, setRecommendataion] = useState([])
 useEffect(()=>{
  setRecommendataion(products.filter((item)=>(item.category)==="추천상품"))
 }, [products])

  return (
    <>

    <div className={styles.visual}>
      
    </div>


    <div className=' w-f h-[auto] mt-[160px] bg-mainColor relative top-[30px] left-0 '>

      <div className='w-[80px] h-[80px] absolute rounded-[50%] left-[50%] ml-[-40px] top-[-15%] bg-673ab7'><Link to='/'>
        <img src='/images/homeimg.png' className='w-[50%] absolute left-[50%] ml-[-25%] top-[50%] mt-[-28px]'/>
      </Link>
      </div>

      <div className='w-[86.6vw] h-[30px] mx-auto  relative'>
        <p className={`text-[3.2w] font-NotoSansKR font-bold relative float-left pl-[14px] ${styles.before}`}>
          New Products
        </p>

        <p className='text-[3.2vw] font-NotoSansKR font-normal absolute right-[40px] text-999999'><Link to='/products'>
          더보기
        </Link>
        </p>
        <Link to='/products'>
        <img className='absolute right-0 top-0 w-[6%]' src='/images/plus.png'/>
        </Link>

      </div>

      <ul className='w-[86.6vw] h-[auto] mx-auto  mt-[40px] mb-[30px] flex flex-row flex-wrap justify-between'>
        {
          newCategory.map((item)=>(
            <li key={item.id} className={`w-[41.3vw] h-[43vw] p-[8px] box-border ${styles.productsLi}`}>
              <img src={item.images} className='w-[100%] h-[50%]'/>
              <p className='test-[16px] font-bold font-NotoSansKR text-333333'>{item.name}</p>
              <p className='text-[11px] font-nomral font-NotoSansKR text-666666'>{item.subName}</p>
              <p className='mt-[3px] text-[16px] font-bold font-NotoSansKR text-673ab7'>{regExp.comma(item.price)}원</p>
            </li>
          ))
        }
      </ul>

      <div className='w-[86.6vw] h-[30px] mx-auto  relative'>
        <p className={`text-[3.2w] font-NotoSansKR font-bold relative float-left pl-[14px] ${styles.before}`}>
        Recommendation
        </p>

        <p className='text-[3.2vw] font-NotoSansKR font-normal absolute right-[40px] text-999999'><Link to='/products'>
          더보기
        </Link>
        </p>
        <Link to='/products'>
        <img className='absolute right-0 top-0 w-[6%]' src='/images/plus.png'/>
        </Link>
      </div>

      <div className='w-[86.6vw] h-[auto] mx-auto mt-[40px] p-[8px] flex '>
        <img src='/images/mattress03.png' className='w-[50%] '/>
        {
          reCommendation.map((item)=>(
            <ul className='mx-2'>
              <li>
                <p className='text-[16px] font-bold font-NotoSansKR text-333333'>{item.name}</p>
                <p className='text-[11px] font-nomral font-NotoSansKR text-666666 mb-[12px]'>{item.subName}</p>
                <p className={`text-[10px] font-nomral font-NotoSansKR text-666666 relative pl-[5px] ${styles.madefrom}`}>{item.from}</p>
                <p className={`text-[10px] font-nomral font-NotoSansKR text-666666 relative pl-[5px] ${styles.madefrom}`}>{item.modelNum}</p>
                <p className={`text-[10px] font-nomral font-NotoSansKR text-666666 relative pl-[5px] ${styles.madefrom}`}>{item.code}</p>
                <p className='text-[16px] font-bold font-NotoSansKR text-673ab7 mt-[20px]'>{regExp.comma(item.price)}원</p> 
              </li>
            </ul> 
          ))
        }
        <p className='w-[60px] h-[25px] bg-673ab7 text-[10px] font-bold font-NotoSansKR text-white leading-[25px] text-center absolute bottom-[8px] right-[10.4vw]'>즉시구매</p>
        <p className='w-[30px] h-[30px] bg-999999 rounded-[50%] absolute top-[69%] right-[4%]' 
        ref={favoreit} onClick={colorRed}>
          <img src='/images/hart.png' className='absolute w-[50%] h-[50%] top-[50%] mt-[-25%] left-[50%] ml-[-25%]'/>
        </p>
      </div>


    </div>

    
    </>
  )
}

