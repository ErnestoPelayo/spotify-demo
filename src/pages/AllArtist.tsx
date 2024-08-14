import { useState } from "react";
import { Artist } from "../helpers/Artist";
import CardArtist from "../components/CardArtist";
import { ArtistClass } from "../Types";

const AllArtist = () => {
  const [artistList] = useState<ArtistClass[]>(Artist);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-black-1003 to-black-1000 w-full">
        <div className="flex">
          <div className="w-1/2">
            <div className="ml-6 mt-8">
              <p className="md:text-3xl font-medium text-white sm:text-sm">
                Popular Artists
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {artistList?.map((item) => {
          return (
            <CardArtist
              key={item.id}
              id={item.id}
              img={item.imagen}
              name={item.nombre_artista}
              artist={item.id}
              style={2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllArtist;
