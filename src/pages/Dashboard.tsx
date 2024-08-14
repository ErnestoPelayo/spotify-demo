import { useEffect, useState } from "react";
import { Artist } from "../helpers/Artist";
import { Albums } from "../helpers/Albums";
import CardArtist from "../components/CardArtist";
import { AlbumClass, ArtistClass } from "../Types";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [state, setState] = useState<ArtistClass[]>();
  const [stateAlbums, setStateAlbums] = useState<AlbumClass[]>();

  useEffect(() => {
    const artistDashboard = Artist.filter((item) => item.preset === 1);
    const albumsDashboard = Albums.filter((item) => item.preset === 1);
    setState(artistDashboard.slice(0, 5));
    setStateAlbums(albumsDashboard.slice(0, 5));
    console.log(artistDashboard)
  }, []);

  return (
    <div className=" ">
      <div className="bg-gradient-to-b from-black-1003 to-black-1000 w-full">
        <div className="flex">
          <div className="w-1/2">
            <div className="ml-6 mt-8">
              <p className="md:text-3xl font-medium text-white  sm:text-sm">
                Popular Artists
              </p>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="mt-10 mr-4 text-xs align-bottom text-right">
              <Link to={"/artist"}>
                <button className="font-bold text-neutral-400 hover:underline">
                  Show all
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
          {state?.map((item) => {
            return (
              <CardArtist
                key={item.id}
                id={item.id}
                img={item.imagen}
                name={item.nombre_artista}
                style={2}
              />
            );
          })}
        </div>

        <div className="flex">
          <div className="w-1/2">
            <div className="ml-6 mt-8">
              <p className="md:text-3xl font-medium text-white sm:text-sm">
                Popular Albums
              </p>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="mt-10 mr-4 text-xs align-bottom text-right">
              <Link to={"/albums"}>
                <button className="font-bold text-neutral-400 hover:underline">
                  Show all
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
          {stateAlbums?.map((item) => {
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
    </div>
  );
};

export default Dashboard;
