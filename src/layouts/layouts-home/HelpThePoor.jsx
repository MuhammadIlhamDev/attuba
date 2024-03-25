import image17 from "../../assets/images/17.jpg";
import { FaHeart } from "react-icons/fa";

const HelpThePoor = () => {
  return (
    <>
      <div className="relative">
        <img src={image17} alt="image17" />
        <div className="p-8 absolute top-0 left-0">
          <h5 className="font-arvo font-bold uppercase text-xl">
            Help The Poor
          </h5>
          <h2 className="font-arvo font-bold text-3xl pt-1">
            Donations For The Nobel Causes
          </h2>
          <p className="font-poppins text-gray-600 pt-8 pb-8">
            Give The Best quality of security system and facility of letest
            tecnology for the people get awesome.
          </p>
          <button className="bg-[#8EC641] text-white font-bold uppercase px-7 py-3 font-poppins flex items-center gap-x-2">
            See All Causes
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default HelpThePoor;
