import { FaHeart } from "react-icons/fa";
import image04 from "../../assets/images/04.png";
import image03 from "../../assets/images/03.png";

const OurHistory = () => {
  return (
    <>
      <div className="p-4 pt-16">
        <h5 className="text-[#8EC641] font-arvo text-xl font-bold uppercase">
          About Our History
        </h5>
        <h2 className="text-3xl font-arvo font-bold">
          Islamic Center For Muslims To Achieve Spiritual Goals
        </h2>
        <h5 className="font-arvo text-xl font-bold pt-5">
          Our Promise To Uphold The Trust Placed.
        </h5>
        <p className="pt-5 font-poppins text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          molestias culpa reprehenderit delectus, ullam harum, voluptatum
          numquam ati nesciunt odit quis corrupti magni quam consequatur sint
          ipsum tecto exercitationem, illo quisquam. Reprehenderit ut placeat
          cum adantium nam magnam blanditiis sequi modi! Nesciunt, repudiandae
          eos eniam quod maxime corrupti eligendi ea in animi.
        </p>
        <button className="mt-5 bg-[#8DC63f] text-white font-bold uppercase px-7 py-3 rounded font-poppins flex items-center gap-x-2">
          Ask About Islam <FaHeart />
        </button>
        <div className="mt-24 relative">
          <img src={image04} alt="image04" />
          <div className="absolute -left-4 -top-16  w-full p-4">
            <img src={image03} alt="image03" />

            {/* <div className="w-72 h-64 absolute left-4 top-20 -z-10 animate-spin-slow">
              <p className="w-8 h-8 bg-[#8DC63f] rounded-full -left-4 top-28 absolute z-10 " />
              <p className="w-8 h-8 bg-[#8DC63f] rounded-full absolute left-[17rem] top-28" />
            </div> */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default OurHistory;
