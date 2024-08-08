import { TriangleRightIcon } from "@primer/octicons-react";
import { useParams } from "react-router-dom";
import { Albums } from "../helpers/Albums";
import { AlbumClass } from "../Types";
import { useEffect, useState } from "react";
import ListSongsAlbum from "../components/ListSongsAlbum";

const DetailAlbum = () => {
  const { id } = useParams();

  const [stateAlbum, setStateAlbum] = useState<AlbumClass>();

  useEffect(() => {
    getAlbum();
  }, [id]);

  const getAlbum = () => {
    let album = Albums.filter((item) => item.id_album === id)[0];
    setStateAlbum(album);
    console.log(album);
  };

  return (
    <div className=" bg-black-1000">
      <div
        className="h-64 p-3 space-y-4"
        style={{
          backgroundImage: `url(${stateAlbum?.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-1/3">
          <p className="  text-black-1000 text-sm">Verified Artist</p>
        </div>
        <div className="h-1/3">
          <p className="font-black text-7xl  text-shadow-md text-white">
            {stateAlbum?.nombre_album}
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
            stateAlbum ? 
            <ListSongsAlbum key={stateAlbum.id_album} id= {stateAlbum?.id_album} />
            : []
           }
        </div>
      </div>
    </div>
  );
};

export default DetailAlbum;
