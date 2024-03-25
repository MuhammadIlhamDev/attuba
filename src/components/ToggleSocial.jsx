import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const ToggleSocial = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-y-2 absolute left-0 top-[4.5rem] bg-white shadow w-full p-4">
        <p className="flex items-center gap-x-1 border-b p-2">
          <BsTelephoneFill className="mr-1" /> 08950359433
        </p>
        <p className="flex items-center gap-x-1 border-b p-2">
          <FaLocationDot className="mr-1" /> Beverley, New York 224 US
        </p>
        <div className="flex gap-x-5 items-center justify-center">
          <div className="border p-1">
            <TiSocialFacebook size={25} />
          </div>
          <div className="border p-1">
            <TiSocialInstagram size={25} />
          </div>
          <div className="border p-1">
            <TiSocialInstagram size={25} />
          </div>
          <div className="border p-1">
            <TiSocialInstagram size={25} />
          </div>
          <div className="border p-1">
            <TiSocialInstagram size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleSocial;
