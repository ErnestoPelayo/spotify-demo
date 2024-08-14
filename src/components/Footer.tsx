import instagram from "/img/instagram.svg";
import facebook from "/img/facebook.svg";
import twitter from "/img/twitter.svg";

const Footer = () => {
  return (
    <div className="container mx-auto px-8  bg-black-1000 py-10">
      <div className="justify-center flex ">
        <div className="w-1/5">
          <p className="font-bold text-white "> Company </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            About
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Jobs
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            For the Records
          </p>
        </div>
        <div className="w-1/5">
          <p className="font-bold text-white"> Communites </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            For Artist
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Developers
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Advertising
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Investors
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">

            Vendors
          </p>
        </div>
        <div className="w-1/5">
          <p className="font-bold text-white"> Useful links </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Support
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Free Mobil App
          </p>
        </div>
        <div className="w-1/5">
          <p className="font-bold text-white"> Spotify Plans </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Premium Individual
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Premium Duo
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Premium Family
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Premium Student
          </p>
          <p className=" text-neutral-400 hover:text-white hover:underline">
            Premium Free
          </p>
        </div>
        <div className="flex text-white w-1/5 justify-center space-x-4">
          <div >
            <p className="bg-black-1003 rounded-full p-2 hover:bg-neutral-400">
              <img className="h-5 " src={instagram} />
            </p>
          </div>
          <div>
            <p className="bg-black-1003 rounded-full p-2 hover:bg-neutral-400">
              <img className="h-5 " src={twitter} />
            </p>
          </div>
          <div>
            <p className="bg-black-1003 rounded-full p-2 hover:bg-neutral-400">
              <img className="h-5 " src={facebook} />
            </p>
          </div>
        </div>
      </div>
      <hr className="text-neutral-400 p-3 mt-10 mx-auto px-4 opacity-30" />
      <p className="text-neutral-400 text-xs mb-10">
        © {new Date().getFullYear()} Spotify AB
      </p>
    </div>
  );
};

export default Footer;
