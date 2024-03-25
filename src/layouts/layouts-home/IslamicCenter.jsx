import { useEffect, useState } from "react";

const IslamicCenter = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/src/components/data/IslamicCenter.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .then((catchError) => console.log(catchError));
  }, []);

  return (
    <>
      <div className="pt-12">
        <div className="p-4 text-center">
          <h5 className="font-arvo font-bold text-[#8EC641] text-[1.2rem] uppercase">
            islamic Center Services
          </h5>
          <h2 className="font-bold font-arvo text-[1.7rem] leading-[2rem] pt-2">
            Ethical And Moral Beliefs That Guides To The Straight Path!
          </h2>
        </div>
        {data &&
          data.data.map((item) => (
            <div className="p-4" key={item.id}>
              <img src={item.image} alt={item.title} className="w-full" />
              <div className="p-6 bg-white shadow">
                <img src={item.childImage} alt={item.title} className="pb-2" />
                <p className="uppercase font-poppins text-[#8EC641] text-lg pb-1">
                  {item.title}
                </p>
                <a href="#" className="font-bold font-arvo text-xl">
                  {item.childTitle}
                </a>
                <p className="font-poppins text-gray-600 pt-4 pb-4">
                  {item.description}
                </p>
                <a href="#" className="uppercase text-[#8EC641] font-bold">
                  {item.readMore}
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default IslamicCenter;
