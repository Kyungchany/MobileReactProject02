import { gsap } from 'gsap'
import React, { useCallback, useRef } from 'react'

export default function() {

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
 

        <p onClick={colorRed} ref={favoreit}
           className='w-[30px] h-[30px] bg-999999 rounded-[50%] absolute top-[-5%] right-[4%]'>
          <img src='/images/hart.png' className='absolute w-[50%] h-[50%] top-[50%] mt-[-25%] left-[50%] ml-[-25%]'/>
        </p>
       
    

  )
}


