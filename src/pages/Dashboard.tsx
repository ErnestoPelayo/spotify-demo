
import { useEffect, useState } from "react"
import { Artist } from "../helpers/Artist"
import { ArtistClass } from "../Types";
import CardArtist from "../components/CardArtist";


const Dashboard = () => {

  const [state,setState] = useState<ArtistClass[]>();
   useEffect(()=>{
    setState(Artist)
   },[])
  
   console.log(state)


  return (
    <div className=" ">
      <div className="bg-black-1002  w-full">
          <div className="flex">
            <div className="w-1/2">
             <div className="ml-6 mt-8">
              <button className=" md:text-3xl font-medium  text-white hover:underline sm:text-sm">
                Popular Artists 
              </button>
             </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="mt-10 mr-4 text-xs align-bottom text-right ">
               <button className=" font-bold text-neutral-400 hover:underline">
                Show all
                </button>  
              </div>
            </div>
          </div>
          
          <div className="flex justify-center p-1">
            {state?.map((item)=>{
              return (
                  <CardArtist key={item.id} img={item.imagen} name={item.nombre_artista}/>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Dashboard
