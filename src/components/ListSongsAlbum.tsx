import { useEffect, useState } from "react";
import { Songs } from "../helpers/Songs";
import { AlbumClass, SongClass } from "../Types";

type PropsListSongsAlbum = {
  id: AlbumClass["id_album"];
  artist?: boolean;
};

const ListSongsAlbum = ({ id, artist }: PropsListSongsAlbum) => {
  const [stateSongs, setStateSong] = useState<SongClass[]>();

  useEffect(() => {
    artist ? getSongs5() : getAllSongs();
  }, [id]);

  const getSongs5 = () => {
    const list = Songs.filter((item) => item.id_album === id);
    setStateSong(list[0].songs.slice(0, 5));
  };

  const getAllSongs = () => {
    const list = Songs.filter((item) => item.id_album === id);
    setStateSong(list[0].songs);
  };

  return (
    <div className="p-6">
      {stateSongs?.map((item, index) => {
        return (
            <div
              key={item.id}
              className="flex w-full rounded-md text-neutral-400 hover:bg-black-1004 p-4"
            >
              <p className="w-10 justify-center items-center "> {index + 1} </p>
              <p className="w-2/4 text-white"> {item.nombre_cancion}</p>
              <p className="w-1/4 text-sm">
                {item.numero_reproducciones.toLocaleString()}
              </p>
              <p className="w-1/4 text-sm text-right">{item.duracion}</p>
            </div>

        );
      })}
    </div>
  );
};

export default ListSongsAlbum;
