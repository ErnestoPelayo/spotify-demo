import {ChevronLeftIcon,ChevronRightIcon} from '@primer/octicons-react'
type PropsHeader = {
    search:boolean
}

const Header = ({search}:PropsHeader) => {
  return (
    <div className="flex items-center h-12 text-white bg-black-1001 rounded-lg">
    <div className='w-28 p-1'>
        <ChevronLeftIcon size={28} className='ml-2 bg-black-1001 rounded-full' />
        <ChevronRightIcon size={28} className='mt-4 ml-2 bg-black-1001 rounded-full' />    
    </div>
    {
        search ? 
        <div>  
            <input className=' w-full text-black-1000 ml-0 p-3 rounded-full text-xs ' type="text" placeholder='What do you want to play?' /> 
        </div>
        : ''
    }
    <div className='flex-grow flex justify-end space-x-4 mx-4'>
        <button className='text-neutral-400 hover:text-white transition transform  hover:scale-105  font-bold'>Sign up</button>
        <button className='text-black-1000 bg-white p-3 rounded-full px-8 font-bold transition transform hover:scale-105 hover:bg-neutral-400'>Log in</button>
    </div>
</div>

  )
}

export default Header
