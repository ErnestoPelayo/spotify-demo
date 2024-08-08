import { Link } from "react-router-dom";
import { ArtistClass } from "../Types";
import { useEffect, useState } from "react";
import { Artist } from "../helpers/Artist";

import play from "/img/play.svg"

type propsCartArtist = {
  id: ArtistClass["id"];
  name: ArtistClass["nombre_artista"];
  img: ArtistClass["imagen"];
  artist?: ArtistClass["id"];
  style: number;
};

const CardArtist = ({ id, name, img, style, artist }: propsCartArtist) => {
  const [state, setState] = useState<ArtistClass>();

  const updateName = () => {
    let artistName = Artist.filter((item) => item.id === artist)[0];
    setState(artistName);
  };

  useEffect(() => {
    artist ? updateName() : [];
  }, []);

  return (
    <Link to={style === 1 ? `/artist/${id}` : `/album/${id}`}>
      <div className=" rounded-lg relative text-white w-48 p-2 hover:bg-black-1003 group">
        <img
          className={`shadow-sm shadow-black-1001 ${
            style === 1 ? "rounded-full" : "rounded-lg"
          } items-center justify-center justify-items-center`}
          src={img}
          alt={name}
        />
        <button className=" p-4 absolute top-2/3 right-4 transform -translate-y-2/3 rounded-full bg-green-500 text-black-1000  opacity-0 transition-opacity   group-hover:opacity-100">
            <img className="h-4 " src={play} />
        </button>
        <p className="mt-2 text-md">{name}</p>
        {style === 1 ? (
          <p className="mt-1 text-sm text-neutral-400">Artist</p>
        ) : (
          <p className="mt-1 text-sm text-neutral-400">
            {state?.nombre_artista}
          </p>
        )}
      </div>
    </Link>
  );
};

export default CardArtist;
