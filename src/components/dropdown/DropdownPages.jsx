import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownPages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span className="flex items-center gap-x-1" onClick={toggleDropdown}>
        <p className="border-b py-2">Pages</p>
        <MdArrowDropDown size={20} />
      </span>
      {isOpen && (
        <div className="flex flex-col p-2">
          <Link to="" className="border-b py-2">
            Programs
          </Link>
          <Link to="" className="border-b py-2">
            Programs Single
          </Link>
        </div>
      )}
    </>
  );
};

export default DropdownPages;
