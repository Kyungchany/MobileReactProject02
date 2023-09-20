import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MobileFooter() {

  const mainMenu = [
    {index:0, images:<i class="fa-solid fa-house"></i>, name:"Home", path:'/'},
    {index:1, images:<i class="fa-solid fa-store"></i>, name:"Store", path:'/products'},
    {index:2, images:<i class="fa-solid fa-cart-shopping"></i>, name:"Shopcart", path:'/products'},
    {index:3, images:<i class="fa-solid fa-credit-card"></i>, name:"Coupon", path:'/'}
  ]

  const [selectMenu, setSelctMenu] = useState(mainMenu[0].index) //내가 고른 메뉴
  

  return (

    <div className='w-[100%] h-[60px] bg-white fixed bottom-0'>
      <ul className='w-[100%] h-[100%] mx-auto flex  flex-wrap flex-row justify-between'>
        {
          mainMenu.map((item)=>(
            <li key={item.index} className='w-[20%] h-[100%]' onClick={()=>{setSelctMenu(item.index)}}>
              <Link to={item.path}>
              <p className='w-[100%] text-[25px] text-center'>
                <span className='text-[22px]' style={item.index===selectMenu ? {color:'#673ab7'} : {color:'#999999'} }>{item.images}</span>
              </p>
              <p className=' w-[100%] text-center font-NotoSansKR font-normal'
                style={item.index===selectMenu ? {color:'black'} : {color:'#b3b3b3'}}>{item.name}</p>
            </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

