import spotify from '/img/spotify-white-icon.png'
import home from '/img/Icon-test-House-white.webp'

const SlideBar = () => {
    return (
      <div className="w-96 h-screen p-2 rounded-lg sticky top-0">
        <div className=" bg-neutral-900 p-6">
          <div className='flex mb-3'>
           <img src={spotify} className='w-6 h-6 mr-2' />  
           <p className="text-white text-xl" >
            Spotify
           </p>
          </div>
          <div className='flex mb-3'>
           <img src={home} className='w-5 h-6 mr-2' />  
           <p className="text-white text-lg mt-1" >
            Home
           </p>
          </div>
          <div className='flex mb-3'>
            <svg className=" mr-1 w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M20 20l-4.05-4.05m0 0a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>           
            <p className="text-white text-lg mt-1" >
                Search
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default SlideBar
  