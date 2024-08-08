import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist } from "../helpers/Artist";
import { AlbumClass, ArtistClass } from "../Types";
import { TriangleRightIcon } from "@primer/octicons-react";
import { Albums } from "../helpers/Albums";
import ListSongsAlbum from "../components/ListSongsAlbum";
const DetailArtist = () => {
  const { id } = useParams();

  const [stateArtist, setStateArtist] = useState<ArtistClass>();
  const [stateAlbumDefault, setStateAlbumDefault] = useState<AlbumClass>();

  useEffect(() => {
    getArtist()
  }, [id]);

  const getArtist = () => {
    let artist = Artist.filter((item) => item.id === id)[0];

    setStateArtist(artist);
    const album = Albums.filter((item) => item.preset === 1 && item.id_cantante === artist.id)[0];
    setStateAlbumDefault(album)
  };

 

  return (
    <div className="h-screen">
      <div
        className="h-64 p-3 space-y-4"
        style={{
          backgroundImage: `url(${stateArtist?.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="h-1/3">
          <p className="  text-black-1000 text-sm">Verified Artist</p>
        </div>
        <div className="h-1/3">
          <p className="font-black text-7xl  text-shadow-md text-white">
            {stateArtist?.nombre_artista}
          </p>
        </div>
        <div className="h-1/3">27,357,787 monthly listeners</div>
      </div>
      <div className="p-6 bg-gradient-to-b from-black-1004 to-black-1000 space-y-6">
        <div className="flex items-center space-x-6">
          <button className="hover:scale-105  py-1.5 px-2 rounded-full bg-green-500 text-black-1000">
            <TriangleRightIcon size={40} />
          </button>
          <button className=" opacity-75 hover:scale-105 hover:opacity-100 text-white font-bold border border-white px-4 py-1 rounded-full text-sm mt-2">
            Follow
          </button>
        </div>
        <div>
          <p className="text-white text-2xl font-bold">Popular</p>
           {
            stateAlbumDefault ? 
            <ListSongsAlbum id= {stateAlbumDefault.id_album} artist={true}/>
            : []
           }
        </div>
      </div>
    </div>
  );
};

export default DetailArtist;
