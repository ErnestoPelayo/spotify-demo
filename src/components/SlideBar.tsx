import { Link } from 'react-router-dom'
import spotify from '/img/spotify-white-icon.png'
import {SearchIcon,HomeFillIcon } from '@primer/octicons-react'

const SlideBar = () => {
    return (
      <div className="w-96 h-screen p-2 rounded-lg sticky top-0">
        <div className="bg-black-1001 p-6 rounded-lg space-y-5 ">
          <div className='flex '>
           <img src={spotify} className='w-6 h-6 mr-1' />  
           <p className="text-white text-xl" >
            Spotify
           </p>
          </div>
          <div className='flex text-neutral-400 hover:text-white'>
            <Link to={'/'}>
              <HomeFillIcon className=' mr-7' size={28} /> 
              <button className="mt-1 font-bold" >
                Home
              </button>
            </Link>          
          </div>
          <div className='flex text-neutral-400 hover:text-white'>
          <Link to={'/search'}>
            <SearchIcon size={28} className=' mr-7' />      
            <button className="mt-1 font-bold" >
                Search
            </button>
          </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default SlideBar
  