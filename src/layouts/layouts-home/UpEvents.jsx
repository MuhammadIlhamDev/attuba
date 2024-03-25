import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import Image12 from "../../assets/images/12.jpg";
import { useState, useRef, useEffect } from "react";

const UpEvents = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const interval = useRef();

  const startTimer = () => {
    let countDownDate = localStorage.getItem("countDownDate");

    if (!countDownDate) {
      // Jika waktu awal belum disimpan di local storage, atur waktu awal 1 menit dari sekarang
      countDownDate = new Date(Date.now() + 24 * 60 * 60 * 1000).getTime();
      localStorage.setItem("countDownDate", countDownDate);
    }

    interval.current = setInterval(() => {
      const now = Date.now();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        // localStorage.removeItem("countDownDate");
      } else {
        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <>
      <div className="p-3">
        <div className="text-center py-12">
          <h5 className="font-arvo font-bold text-[#8EC641] text-[1.2rem] uppercase">
            Upcoming Events
          </h5>
          <h2 className="font-bold font-arvo text-[1.7rem] leading-[2rem] pt-2">
            Ethical And Moral Beliefs That Guides To The Straight Path!
          </h2>
        </div>

        <div className="pt-5">
          <img src={Image12} alt="Image12" className="w-full" />
          <div className="p-5 bg-white shadow font-poppins">
            <a href="#" className="font-bold font-arvo text-xl">
              Helping Hands For Poor People...
            </a>

            <ul className="py-3">
              <li className="flex gap-2 items-center">
                <SlCalender className="text-[#8EC641]" />
                <span>20 January 2022</span>
              </li>
              <li className="flex gap-2 items-center py-2">
                <IoLocationSharp className="text-[#8EC641]" />
                <span>New York AK United States</span>
              </li>
            </ul>

            <ul className="flex gap-2 text-center">
              <li className="bg-white shadow-lg p-2 border-2 border-[#8EC641] ">
                <span className="text-[#8EC641] font-bold font-poppins text-2xl">
                  {timerDays}
                </span>
                <p className="text-[#8EC641] font-poppins">Days</p>
              </li>
              <li className="bg-white shadow-lg p-2 border-2 border-[#8EC641]">
                <span className="text-[#8EC641] font-bold font-poppins text-2xl">
                  {timerHours}
                </span>
                <p className="text-[#8EC641] font-poppins">Hours</p>
              </li>
              <li className="bg-white shadow-lg p-2 border-2 border-[#8EC641]">
                <span className="text-[#8EC641] font-bold font-poppins text-2xl">
                  {timerMinutes}
                </span>
                <p className="text-[#8EC641] font-poppins">Minu</p>
              </li>
              <li className="bg-white shadow-lg p-2 border-2 border-[#8EC641]">
                <span className="text-[#8EC641] font-bold font-poppins text-2xl">
                  {timerSeconds}
                </span>
                <p className="text-[#8EC641] font-poppins">Seco</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpEvents;
