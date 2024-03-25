import { FaHeart } from "react-icons/fa";
import image02 from "../../assets/images/02.png";

const AllahInvitation = () => {
  return (
    <>
      <div className="p-4 pt-28 bg-gradient-to-t from-[#8EC641] from-5% to-[#fffbf9] ">
        <h1 className="text-4xl font-arvo">
          <p>And Allah Inivtes To The</p>
          <span className="font-bold">Home Of Peace </span>
        </h1>
        <p className="mt-4 text-xl font-poppins text-gray-700">
          The most beloved actions to Allah are those performed consistently,
          even if they are few
        </p>
        <button className="mt-5 bg-[#63BD78] text-white font-bold uppercase px-7 py-3 rounded font-poppins flex items-center gap-x-2">
          Donate Now <FaHeart className="text-white" />
        </button>
        <div className="mt-5 animate-bounce-slow">
          <img src={image02} alt="image02" />
        </div>
      </div>
    </>
  );
};

export default AllahInvitation;
