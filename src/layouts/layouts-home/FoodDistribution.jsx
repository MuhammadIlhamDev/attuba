import image18 from "../../assets/images/18.jpg";

const FoodDistribution = () => {
  return (
    <>
      <div className="p-3">
        <p className="font-poppins text-lg text-gray-600 py-5">
          We offer security solutions and cost effective service for our client
          are safe and secure in any situation.
        </p>
        <div className="relative">
          <img src={image18} alt="image18" className="w-full" />
          <ul className="p-4 bg-white mx-4 absolute bottom-2 left-0 right-0 flex justify-between">
            <li className="flex gap-x-1">
              Raised
              <p className="font-bold text-[#8EC641]">$24,000</p>
            </li>
            <li className="flex gap-x-1">
              Gold
              <p className="font-bold text-[#8EC641]">$30,000</p>
            </li>
            <div className="absolute bottom-0 left-0 right-0">
              <li className="h-3 bg-gray-300  overflow-hidden">
                <div className="h-full bg-[#8EC641] " style={{ width: "30%" }}>
                  <p className="text-black font-arvo absolute -top-[2px] left-[50%] font-semibold text-xs">
                    30%
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="p-8 bg-white shadow">
          <p className="text-[#8EC641] font-arvo text-2xl">Food Distribution</p>
          <a href="#" className="text-xl font-arvo font-bold">
            How to Teach The kids Ramadan Isn&apos;t About...
          </a>
        </div>
      </div>
    </>
  );
};

export default FoodDistribution;