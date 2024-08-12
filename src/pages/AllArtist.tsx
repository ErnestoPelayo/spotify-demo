import { useEffect, useState } from "react"
import { Artist } from "../helpers/Artist"
import CardArtist from "../components/CardArtist"
import { ArtistClass } from "../Types"

const AllArtist = () => {

    const [artistList,setArtistList] = useState<ArtistClass[]>(Artist)


  return (
    <div className="w-full bg-green-500">
       <div className="flex flex-wrap p-1">
            {artistList?.map((item)=>{
              return (
                  <CardArtist 
                    key={item.id} 
                    id={item.id} 
                    img={item.imagen} 
                    name={item.nombre_artista}
                    style={1}
                  />
                )
              })
            }
          </div>
    </div>
  )
}

export default AllArtist
