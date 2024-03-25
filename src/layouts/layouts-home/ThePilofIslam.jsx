import image08 from "../../assets/images/08.png";
import image19 from "../../assets/images/19.png";
import image20 from "../../assets/images/20.png";
import image21 from "../../assets/images/21.png";
import image13 from "../../assets/images/13.png";
import image22 from "../../assets/images/22.png";

export const ThePilofIslam = () => {
  return (
    <>
      <div className="p-4 pt-12 text-center">
        <h5 className="text-[#8EC641] font-arvo text-xl font-bold uppercase">
          The Pillars Of Islam
        </h5>
        <h2 className="text-2xl font-arvo font-bold">
          Ethical And Moral Beliefs That Guides To The Straight Path!
        </h2>
        <div className="bg-white p-6 mt-8 shadow">
          <img src={image08} alt="Image08" className=" mx-auto" />
          <h4 className="text-xl font-arvo font-semibold py-4">
            Shahadah <span className="font-normal text-2xl">(Faith)</span>
          </h4>
          <p className="font-poppins text-gray-600 text-lg">
            The Shahadah, is an Islamic creed, one of the Five Pillars of Islam
            and part of the Adhan. It reads: &ldquo;I bear witness that there is
            no deity but God, and I bear witness that Muhammad is the messenger
            of God.&rdquo;
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={image19}
                alt="Image19"
                className="bg-white p-8 shadow-md"
              />
              <div className="bg-[#8EC641] h-[6px] "></div>
            </div>

            <img
              src={image20}
              alt="Image20"
              className="bg-white p-8 shadow-md"
            />
            <img
              src={image21}
              alt="Image21"
              className="bg-white p-6 shadow-md"
            />
            <img
              src={image13}
              alt="Image13"
              className="bg-white p-8 shadow-md"
            />
            <img
              src={image22}
              alt="Image22"
              className="bg-white p-8 shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThePilofIslam;
