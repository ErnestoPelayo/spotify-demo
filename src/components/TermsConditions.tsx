import {GlobeIcon} from '@primer/octicons-react'

const TermsConditions = () => {
  return (
    <div className="text-neutral-400 ">
        <div className="flex space-x-6 ml-4 p-1">
            <p className="text-xs">Legal</p>
            <p className="text-xs">Safity & Privacy Center</p>
        </div>
        <div className="flex space-x-6 ml-4 p-1">
            <p className="text-xs">Privacy Policy</p>
            <p className="text-xs">Cookies</p>
            <p className="text-xs">About ads</p>
        </div>
        <div className="flex space-x-6 ml-4 p-1">
            <p className="text-xs">Accessibility</p>
        </div>
        <div className="flex space-x-6 ml-4 p-1">
            <p className="text-xs">Cookies</p>
        </div>
        <div className="flex space-x-6 ml-4 p-1">
            <button className="text-sm border px-3 font-semibold border-b-white text-white rounded-full p-1"> 
                <GlobeIcon size={16} />{' '}English 
            </button>
        </div>
    </div>
  )
}

export default TermsConditions
