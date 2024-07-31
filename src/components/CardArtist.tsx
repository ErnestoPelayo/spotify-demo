
type propsCartArtist = {
  name:string,
  img:string
}

const CardArtist = ({name,img}:propsCartArtist) => {
  console.log(img)
  return (
    <div className=" rounded-lg relative text-white w-48 p-2 hover:bg-black-1003 group">
      <img className="shadow-sm shadow-black-1001  rounded-full items-center justify-center justify-items-center" src={img} alt={name}/>
        <button
        className=" text-2xl justify-center items-center justify-items-center px-3 py-1.5 absolute top-2/3 right-4 transform -translate-y-2/3 rounded-full bg-green-500 text-black-1000  opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        ►
      </button>
      <p className="mt-2 text-md">{name}</p>
      <p className="mt-1 text-sm text-neutral-400">Artist</p>
    </div>
  )
}

export default CardArtist
