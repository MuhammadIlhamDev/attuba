import { RxHamburgerMenu } from "react-icons/rx";
import { FaEllipsisH } from "react-icons/fa";
import logo from "../assets/images/01.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownEvents from "../components/dropdown/DropdownEvents";
import DropdownPrograms from "../components/dropdown/DropdownPrograms";
import DropdownPages from "../components/dropdown/DropdownPages";
import ToggleSocial from "../components/ToggleSocial";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsSocialOpen(false);
  };
  const toggleSocial = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    setIsSocialOpen(!isSocialOpen);
  };

  return (
    <>
      <div className="navbar p-4 mb-4 bg-white">
        <div className="navbar-content flex justify-center items-center">
          <div className="brand flex items-center relative">
            <button
              className="menu-toggle text-white mr-4"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu size={24} className="text-black" />
            </button>
            {isOpen && (
              <nav className="navbar-link p-4 mb-4 bg-white shadow w-full flex flex-col absolute left-0 top-[4.5rem] z-10 font-poppins font-semibold">
                <Link to="/" className="border-b py-2">
                  Home
                </Link>
                <Link to="/about" className="border-b py-2">
                  About
                </Link>
                <DropdownEvents />
                <DropdownPrograms />
                <DropdownPages />
                <Link to="/contact" className="border-b py-2">
                  Contact
                </Link>
              </nav>
            )}
            <Link to="/">
              <img src={logo} alt="logo" className="brand-logo" />
            </Link>
            <button className="menu-toggle ml-4" onClick={toggleSocial}>
              <FaEllipsisH />
            </button>
            <div>{isSocialOpen && <ToggleSocial />}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
