import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileFooter from './MobileFooter'

export default function MobileRoot() {
  return (
    <div>
      <Outlet/>
      <MobileFooter/>
    </div>
  )
}
