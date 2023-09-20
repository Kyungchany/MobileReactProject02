import React from 'react'
import { isMobile } from 'react-device-detect'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MobileRoot from './pages/MobileRoot'
import MobileNotFound from './pages/MobileNotFound'
import MobileHome from './pages/MobileHome'
import MobilePrducts from './pages/MobilePrducts'
import MobileDetail from './pages/MobileDetail'

export default function MobileStacore01() {

  let router = null

  if(isMobile===true){
    router = createBrowserRouter ([
      {
        path:'/',
        element:<MobileRoot/>,
        errorElement:<MobileNotFound/>,
        children:[
          {index:true, element:<MobileHome/>},
          {path:'/products', element:<MobilePrducts/>},
          {path:'/products/:productsId', element:<MobileDetail/>}
        ]
      }
    ])
  } else
    
    router = createBrowserRouter ([
      {
        path:'/',
        element:<MobileRoot/>,
        errorElement:<MobileNotFound/>,
        children:[
          {index:true, element:<MobileHome/>},
          {path:'/products', element:<MobilePrducts/>},
          {path:'/products/:productsId', element:<MobileDetail/>}
        ]
      }
    ])



  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
