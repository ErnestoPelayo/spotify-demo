import { useState } from "react"
import { Albums } from "../helpers/Albums"
import { AlbumClass } from "../Types"
import CardArtist from "../components/CardArtist"

const AllAlbums = () => {

    const [stateAlbum] = useState<AlbumClass[]>(Albums)

    return (
    <div>
      <div className="bg-gradient-to-b from-black-1003 to-black-1000 w-full">
        <div className="flex">
          <div className="w-1/2">
            <div className="ml-6 mt-8">
              <p className="md:text-3xl font-medium text-white sm:text-sm">
                Popular Albums
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
          {stateAlbum?.map((item) => {
            return (
              <CardArtist
                key={item.id_album}
                id={item.id_album}
                img={item.imagen}
                name={item.nombre_album}
                style={1}
                artist={item.id_cantante}
              />
            );
          })}
        </div>
    </div>
  )
}

export default AllAlbums
