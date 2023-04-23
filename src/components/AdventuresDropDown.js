import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import adventures from '@/data/adventures.json';

const AdventuresDropDown = ({ setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="flex flex-row items-center justify-center"
        onClick={() => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
      >
        Adventures
        {isDropdownOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-white text-black text-center w-52 h-64 flex flex-col items-center justify-center capitalize rounded-sm shadow-lg font-light ${
          isDropdownOpen ? 'block' : 'hidden'
        }`}
      >
        {adventures.map((adventure) => (
          <div key={adventure.id} className="mb-2 py-1">
            <Link
              href={`/${generateSlug(adventure.name)}`}
              className="capitalize"
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

export default AdventuresDropDown;
