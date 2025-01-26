import SideBar from "@/components/AdminComponents/SideBar"
import React, { ReactNode } from "react"
const layout = ({children}:{children:ReactNode}) => {
  return (
   <>
   <SideBar/>
    {children}
   </>
  )
}

export default layout