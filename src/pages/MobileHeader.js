import React from 'react'
import styles from '../css/MobileHeader.module.css'

export default function MobileHeader() {
  return (
    
      
    <header className='w-[86.6vw] h-[60px] mt-[30px] relative top-0 left-0 mx-auto z-30' >
          
          <input type='text' className='w-[73.3vw] h-[40px] bg-mainColor font-NotoSansKR  text-[11px] absolute top-[50%] mt-[-20px] left-0  pl-[10.6vw]'
          placeholder='검색어를 입력하세요' />
           <img src='/images/headerimg02.png' className={`w-[5vw] h-[5vw] absolute z-33 top-[50%] mt-[-2.5vw] left-[4vw] ${styles.glass}`}/>
          <img src='/images/headerimg01.png' className={`w-[6vw] h-[6vw] absolute top-[50%] mt-[-3vw] right-[3.5vw] ${styles.chatimg}`}/>
          <p className={`w-[6vw] h-[6vw] bg-673ab7 text-white leading-[6vw] text-center rounded-[3vw] absolute right-0 top-[1vw] font-NotoSansKR text-[11px] ${styles.chatNum}`} >5</p>
    </header> 

  )
}


