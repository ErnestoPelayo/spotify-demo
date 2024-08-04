import {BoldIcon} from '@primer/octicons-react'
const Footer = () => {
  return (
    <div className='container mx-auto px-8 mt-10'>    
        <div className="justify-center flex ">
            <div className='w-1/5'>
                <p className="font-bold text-white "> Company </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> About </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Jobs </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> For the Records </p>
            </div>
            <div className='w-1/5'>
                <p className="font-bold text-white"> Communites </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> For Artist </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Developers </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Advertising </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Investors</p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Vendors</p>
            </div>
            <div className='w-1/5'>
                <p className="font-bold text-white"> Useful links </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Support </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Free Mobil App </p>
            </div>
            <div className='w-1/5'>
                <p className="font-bold text-white"> Spoify Plans </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Premium Individual </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Premium Duo </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Premium Family </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Premium Student </p>
                <p className=" text-neutral-400 hover:text-white hover:underline"> Premium Free </p>

            </div>
            <div className="flex text-white w-1/5 justify-center space-x-2">
                <BoldIcon size={30} className='rounded-full bg-green-500'  />
                <BoldIcon size={30} className='rounded-full bg-green-500' />
                <BoldIcon size={30} className='rounded-full bg-green-500 ' />
            </div>
        </div>
        <hr className='text-neutral-400 p-3 mt-10 mx-auto px-4 opacity-30'/>
        <p className='text-neutral-400 text-xs mb-10'>© {new Date().getFullYear()} Spotify AB</p>
    </div>
  )
}

export default Footer
