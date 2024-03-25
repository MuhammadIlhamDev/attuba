import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownEvents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span className="flex items-center gap-x-1" onClick={toggleDropdown}>
        <p className="border-b py-2">Events</p>
        <MdArrowDropDown size={20} />
      </span>
      {isOpen && (
        <div className="flex flex-col p-2">
          <Link to="/events" className="border-b py-2">
            Events
          </Link>
          <Link to="/events/single" className="border-b py-2">
            Events Single
          </Link>
        </div>
      )}
    </>
  );
};

export default DropdownEvents;
