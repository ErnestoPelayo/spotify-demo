import { useParams } from "react-router-dom";
import { Albums } from "../helpers/Albums";
import { AlbumClass, ArtistClass } from "../Types";
import { useEffect, useState } from "react";
import ListSongsAlbum from "../components/ListSongsAlbum";
import play from "/img/play.svg";
import { Artist } from "../helpers/Artist";
import {HeartIcon,KebabHorizontalIcon} from "@primer/octicons-react"
const DetailAlbum = () => {
  const { id } = useParams();

  const [stateAlbum, setStateAlbum] = useState<AlbumClass>();
  const [stateArtis, setStateArtist] = useState<ArtistClass>();
  useEffect(() => {
    getAlbum();
  }, [id]);

  const getAlbum = () => {
    const album = Albums.filter((item) => item.id_album === id)[0];
    setStateAlbum(album);
    const artist = Artist.filter((item) => item.id === album.id_cantante)[0];
    setStateArtist(artist);
  };

  return (
    <div className=" bg-black-1002">
      <div className="p-3 space-y-4">
        <div className="flex gap-4 mt-3">
          <img
            className="w-48 rounded-lg shadow-lg"
            src={stateAlbum?.imagen}
            alt=""
          />
          <div className="relative text-white">
            <p className="absolute font-extralight text-sm -inset-y-2">Album</p>
            <p className="font-black text-7xl  text-shadow-md w-full h-5/6 flex items-center justify-center">
              {stateAlbum?.nombre_album}
            </p>
            <div className="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full"
                src={stateArtis?.imagen}
                alt=""
              />
              <p className="text-white text-xs">
                 <span className="font-bold">
                  {stateArtis?.nombre_artista}{' · '}
                 </span>
                 {stateAlbum?.fecha_lanzamiento.slice(0,4)}{' · '}
                 {stateAlbum?.numero_canciones} Songs,{' '}
                 {stateAlbum?.duracion} {'min '}
              </p>
            </div>
          </div>
        </div>
        <div className="h-1/3"></div>
      </div>
      <div className="p-6 bg-gradient-to-b from-black-1004 to-black-1000 space-y-6">
        <div className="flex items-center space-x-6">
          <button className="p-4 hover:scale-105 rounded-full bg-green-500 text-black-1000">
            <img className="h-4" src={play} />
          </button>
          <HeartIcon size={40} className="text-white hover:scale-105 opacity-65 hover:opacity-100" />
          <KebabHorizontalIcon size={20} className="text-white hover:scale-105 font-bold opacity-65 hover:opacity-100"/>

        </div>

        <div>
          <p className="text-white text-2xl font-bold">Popular</p>
          {stateAlbum ? (
            <ListSongsAlbum
              key={stateAlbum.id_album}
              id={stateAlbum?.id_album}
            />
          ) : (
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailAlbum;
