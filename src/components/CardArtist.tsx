import {TriangleRightIcon} from '@primer/octicons-react'
import { Link } from 'react-router-dom'
import { ArtistClass } from '../Types'
import { useEffect, useState } from 'react'
import { Artist } from '../helpers/Artist'

type propsCartArtist = {
  id:ArtistClass['id'],
  name:ArtistClass['nombre_artista'],
  img:ArtistClass['imagen'],
  artist?:ArtistClass['id'],
  style : number
}

const CardArtist = ({id,name,img,style,artist}:propsCartArtist) => {

  const [state,setState]= useState<ArtistClass[]>([])

  useEffect(()=>{
    artist ? setState(Artist.filter(item=>item.id === artist)): []
  },[])

  return (
    <Link to={`/artist/${id}`}>
        <div className=" rounded-lg relative text-white w-48 p-2 hover:bg-black-1003 group">
          <img  className={`shadow-sm shadow-black-1001 ${style === 1 ? 'rounded-full' : 'rounded-lg'} items-center justify-center justify-items-center`}
             src={img} 
            alt={name}/>  
            <button
            className=" px-2 py-1.5 absolute top-2/3 right-4 transform -translate-y-2/3 rounded-full bg-green-500 text-black-1000  opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <TriangleRightIcon size={40}  />
          </button>
          <p className="mt-2 text-md">{name}</p>
          {
            style ===1 ?
              <p className="mt-1 text-sm text-neutral-400">Artist</p> :
              <p className="mt-1 text-sm text-neutral-400">{state[0].nombre_artista}</p>
          }
        </div>
    </Link>
  )
}

export default CardArtist
