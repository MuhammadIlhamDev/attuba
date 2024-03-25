import { FaQuoteLeft } from "react-icons/fa";
import Image23 from "../../assets/images/23.jpg";

const QuFromProphat = () => {
  return (
    <>
      <div className="text-center relative mt-12">
        <img
          src={Image23}
          alt="Image23"
          className="h-[88vh] w-full object-cover"
        />
        <div className="p-6 absolute top-0 pt-20 bg-black/50 bottom-0">
          <div className="bg-[#8EC641] w-32 h-32 relative rounded-full mx-auto text-gray-600 font-semibold font-arvo text-lg">
            <FaQuoteLeft className="absolute left-20 -top-2 text-5xl bg-yellow-500 rounded-full p-3" />
            <span className="absolute right-0 top-9">Quote From Prophat</span>
          </div>
          <p className="pt-4 text-xl font-arvo font-bold text-white">
            Hazrat Mohammod (s) Said{" "}
            <span className="text-yellow-400">
              &ldquo;It is Better For Any Of You To Carry A Load Of Firewood On
              His Own Back Than To Beg From Someone Else&rdquo;
            </span>
          </p>
          <footer className="text-lg font-arvo pt-5 text-white">
            {" "}
            -- Riyadh-Us-Saleheen, Chapter 59, hadith 540
          </footer>
        </div>
      </div>
    </>
  );
};

export default QuFromProphat;
