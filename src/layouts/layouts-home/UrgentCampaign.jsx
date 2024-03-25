import image15 from "../../assets/images/15.jpg";
import { FaHeart } from "react-icons/fa";

const UrgentCampaign = () => {
  return (
    <>
      <div className="pt-12 relative">
        <img
          src={image15}
          alt="image15"
          className="h-[75vh] w-full object-cover filter"
        />
        <div className="p-4 text-center absolute top-28 left-0 right-0">
          <h5 className="text-[#8EC641] font-arvo text-[1.4rem] font-bold uppercase">
            urgent campaign
          </h5>
          <h2 className="text-[1.7rem] leading-8 font-arvo font-bold text-white ">
            Free And Complete Guide To All Muslims
          </h2>
          <div className="mt-6">
            <div className="h-[1.5rem] bg-gray-300 rounded-full">
              <div className="h-full bg-[#8EC641]" style={{ width: "40%" }}>
                <p className="text-[1.1rem] text-white font-arvo font-bold">
                  40%
                </p>
              </div>
            </div>
          </div>
          <ul className="pt-5 font-poppins grid gap-4 grid-cols-2 text-white">
            <li className="text-xl">
              Raised
              <p className="font-bold">$24,000</p>
            </li>
            <li className="text-xl">
              Gold
              <p className="font-bold">$34,900</p>
            </li>
          </ul>
          <button className="mt-5 bg-[#8EC641] text-white font-bold uppercase  px-6 py-3 flex mx-auto  rounded font-poppins  items-center gap-x-2  ">
            Donate Now <FaHeart className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default UrgentCampaign;
