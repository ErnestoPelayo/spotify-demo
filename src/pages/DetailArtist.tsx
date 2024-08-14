import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist } from "../helpers/Artist";
import { AlbumClass, ArtistClass, SongClass } from "../Types";
import { Albums } from "../helpers/Albums";
import ListSongsAlbum from "../components/ListSongsAlbum";
import { Songs } from "../helpers/Songs";
import play from "/img/play.svg";
import verify from "/img/verify.png"

const DetailArtist = () => {
  const { id } = useParams();

  const [stateArtist, setStateArtist] = useState<ArtistClass>();
  const [stateAlbumDefault, setStateAlbumDefault] = useState<AlbumClass>();
  const [stateSongs,setStateSongs] = useState<SongClass[]>()

  const listeners = stateSongs?.reduce((acumulador,currerntValue)=>{
    return acumulador + currerntValue.numero_reproducciones
  },0)

  useEffect(() => {
    getArtist()
  }, [id]);

  const getArtist = () => {
    let artist = Artist.filter((item) => item.id === id)[0];
    setStateArtist(artist);
    const album = Albums?.filter((item) => item.preset === 1 && item.id_cantante === artist.id)[0];
    setStateAlbumDefault(album)
    const songs = Songs?.filter(item=>item.id_cantante === id)[0];
    setStateSongs(songs.songs)

  };

 

  return (
    <div className="h-screen">
      <div
        className="h-64 p-3 space-y-4"
        style={{
          backgroundImage: `url(${stateArtist?.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-1/3 w-full flex items-center">
          <img className="h-6" src={verify} />
          <p className="text-white text-sm">Verified Artist</p>
        </div>
        <div className="h-1/3">
          <p className="font-black text-7xl  text-shadow-md text-white">
            {stateArtist?.nombre_artista}
          </p>
        </div>
        <div className="text-white h-1/3">{listeners?.toLocaleString()} monthly listeners</div>
      </div>
      <div className="p-6 bg-gradient-to-b from-black-1004 to-black-1000 space-y-6">
        <div className="flex items-center space-x-6">
          <button className="hover:scale-105 p-4  rounded-full bg-green-500 text-black-1000">
            <img className="h-4" src={play} />
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
