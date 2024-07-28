import { Outlet } from "react-router-dom"
import SlideBar from "../components/SlideBar"

const LayoutMain = () => {
  return (
    <>
      <div className="flex bg-black-1000">
        <SlideBar /> 
        <div className="flex flex-row w-ful h-full bg-test mt-2 rounded-lg ">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutMain
