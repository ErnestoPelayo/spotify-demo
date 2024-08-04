
const Playlist = () => {
  return (
    <div className="p-1 border-spacing-0">
        <div className="p-5 rounded-lg bg-black-1003 w-full space-y-3">
            <p className="text-white font-semibold text-base"> Create your first playlist</p>
            <p className="text-white text-xs"> It's easy, we'll help you</p>
            <button className="bg-white font-semibold rounded-full px-4 text-xs py-2 mt-5 transition transform hover:scale-105"> Create playlist </button>
        </div>
        <div className="mt-6 p-5 rounded-lg bg-black-1003 w-full space-y-3">
        <p className="text-white font-semibold text-base"> Let's find some podcast to follow</p>
            <p className="text-white text-xs"> We'll keep you updated on new episodes</p>
            <button className="bg-white font-semibold rounded-full px-4 text-xs py-2 mt-5 transition transform hover:scale-105"> Browser podcast</button>
     </div>
    </div>
  )
}

export default Playlist
