import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ml-[22%] py-2 ">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout