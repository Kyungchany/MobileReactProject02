import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import styles from '../css/MobileHomeMain.module.css'
import regExp from '../util/regExp'
import { gsap } from 'gsap'


export default function MobileDetail() {

  const {productsId} = useParams()

  const [products] = useProducts()

  const [detailProduct, setDetailProduct] = useState([])

  const [subImgClickIndex, setSubImgClickIndex] = useState(0)


  // useEffect(()=>{

  
  //  const test = products.find((item)=>(item.id)===productsId) //이미지를 클릭해서 바꿔주고 싶을때는 find를 쓰자

  //  if(test){ // test가 존재한다면 setDetailProduct(test)에 넣어주기
  //   setDetailProduct(test)
  //  }

  // }, [products, productsId])

  //기존에 했던 방식에서 이미지가 안바뀌었을때 !!
  // useEffect(()=>{
  //   products.filter((item)=>(item.id)===productsId)
  //   setDetailProduct(products.filter((item)===(item.id)===productsId))
  // }, [products, productsId])
  

  //복습용
  useEffect(()=>{ 
    const detailItem = products.find((item)=>(item.id)===productsId)
    if(detailItem){
      setDetailProduct(detailItem)
    }
  }, [products, productsId])

  //수량 카운트
  const [count, setCount] = useState(1)

  const plusCount = ()=>{
    setCount(count+1)
    
  }
  const minusCount = ()=>{
    if(count>1){
      setCount(count-1)
    }
  }

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
  



 
  
  return (
    <div className='w-f h-[auto] relative left-0 top-0 bg-mainColor'>
      <div className='w-f pl-[6.7vw] pr-[6.7vw] box-border h-[55px] flex flex-wrap flex-row justify-between items-center bg-white'>
        
        <p><Link to='/products'><img src='/images/DetailImg01.png' className='w-[50%]'/></Link></p>
        <p className='text-[16px] font-NotoSansKR font-bold'>Shop Cart</p>
        <p><img src='/images/DetailImg02.png' className='w-[50%]'/></p>
        
      </div>

    <div>
      {
          <img src={detailProduct.images} className='w-[100%]'/>
      }
    </div>
    <p className='absolute top-[35%] right-[6.7vw] text-black'><i class="fa-regular fa-share-from-square"></i></p>

    <div className='w-[86.6vw] h-[auto]  mx-auto mt-[30px] font-NotoSansKR '>
      <img src='/images/star.png' className='w-[30%] float-left mt-[3px]'/>
      <span className='ml-[10px]'>&#40;9,999 +&#41;</span>
    </div>

      <div className='w-[86.6vw] h-[auto] mx-auto mt-[20px]'>
        {
            <>
              <p className='text-[16px] font-bold font-NotoSansKR text-333333'>{detailProduct.name}</p>
              <p className='font-NotoSansKR text-[12px]'>{detailProduct.subName}{detailProduct.from}{detailProduct.modelNum}{detailProduct.code}</p>
            </>
        }
      </div>

      <p className='w-[86.6vw] h-[auto] text-[16px] font-bold font-NotoSansKR text-333333 mx-auto mt-[40px]'>색상,사이즈</p>
      <div className='w-[70vw] h-[auto] ml-[6.7vw] mt-[20px]'>
        <ul className='flex flex-wrap flex-row justify-between'>

          {/* {
                  detailProduct.subImg?.map((item)=>(
                    <li>
                      <img src={item.img} className=' w-[80px] h-[54px] '
                     onClick={()=>{setDetailProduct({...detailProduct, images:item.img})}}/>
                    </li>
                  ))
          } */}

          {/* 복습용 */}
          {
            detailProduct.subImg?.map((item)=>(
              <li>
                <img src={item.img} className='w-[80px] h-[54px]'
                onClick={()=>{setDetailProduct({...detailProduct, images:item.img}) ; setSubImgClickIndex(item.index)}}
                style={item.index===subImgClickIndex ? {border:'solid 1px #673ab7'} : {border:'none'}}/>
              </li>
            ))
          }
        </ul>
      </div>

      <p className='w-[86.6vw] h-[auto] text-[16px] font-bold font-NotoSansKR text-333333 mx-auto mt-[40px]'>Total</p>
      {
       
          <p className='w-[86.6vw] h-[auto] mx-auto text-[16px] font-bold font-NotoSansKR text-673ab7 mt-[20px]'>
            {regExp.comma(detailProduct?.price*count)}원
          </p>
        
      }
      
      <div className='w-f h-[120px] border-t-[1px] pt-[20px] box-border border-dddddd mt-[20px] flex flex-wrap flex-row justify-around'>
        <p className='w-[30px] h-[30px] bg-999999 rounded-[50%] relative'
        ref={favoreit} onClick={colorRed}>
          <img src='/images/hart.png' className='absolute w-[50%] h-[50%] top-[50%] mt-[-25%] left-[50%] ml-[-25%]'/>
        </p>

        <button className='w-[30px] h-[27px] border-[1px] border-dddddd text-[15px]'
        onClick={minusCount} >
          <span><i class="fa-solid fa-minus"></i></span>
        </button>
        <p>{count}</p>
        <button className='w-[30px] h-[27px] border-[1px] border-dddddd text-[15px]'
        onClick={plusCount} >
          <span><i class="fa-solid fa-plus"></i></span>
        </button>

        <buttn className='w-[82px] h-[27px] border-[1px] border-673ab7 text-center text-673ab7 font-NotoSansKR '>선물하기</buttn>
        <buttn className='w-[82px] h-[27px] bg-673ab7 text-center text-white font-NotoSansKR '>결제하기</buttn>

      </div>


    </div>
  )
}
