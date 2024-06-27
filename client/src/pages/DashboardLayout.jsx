import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import { useState } from "react"

const DashboardLayout = () => {
  const user = {name:'karolina'}
  const [showSidebar,setShowSidebar] = useState(false)
  const [isDarkTheme,setIsDarkTheme] = useState(false)


  const toggleDarkTheme = () => {
    console.log();
  }

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default DashboardLayout