import { useState, useEffect } from "react";

const Qiciis = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/src/components/data/QiciisData.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .then((catchError) => console.log(catchError));
  }, []);

  return (
    <>
      <div className="bg-[#F7F1E9] p-4">
        <div className="flex justify-center items-center flex-col gap-y-5  py-10">
          {data &&
            data.data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto size-20"
                />
                <div className="text-center">
                  <h5 className="text-xl font-arvo font-bold py-2">
                    {item.title}
                  </h5>
                  <p className="font-poppins text-gray-700 pb-2">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="mx-auto text-[#8EC641] font-poppins font-semibold"
                  >
                    {item.sponsor}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Qiciis;
