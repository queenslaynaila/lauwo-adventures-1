import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import tours from '@/data/tours.json';

const TourDropDown = ({ setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center  ">
      <button
        className="flex flex-row items-center justify-center  "
        onClick={() => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
      >
        Tours
        {isDropdownOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-white text-black text-center w-52 h-38 flex flex-col items-center justify-center capitalize rounded-sm shadow-lg font-light ${
          isDropdownOpen ? 'block' : 'hidden'
        }`}
      >
        {tours.map((adventure) => (
          <div key={adventure.id} className="mb-2 py-1 mt-2">
            <Link
              href={`/${generateSlug(adventure.name)}`}
             
              onClick={() => {
                setIsOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              {adventure.name}
            </Link>
            <hr className="w-48 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDropDown;