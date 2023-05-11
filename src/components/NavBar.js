import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import SafariDropDown from './SafariDropDown';
import AdventuresDropDown from './AdventuresDropDown';
import GuideDropDown from './GuideDropDown';
import { FaWhatsapp } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={
        isScrolled
          ? 'fixed w-full shadow-sm flex justify-between p-4 items-center text-white bg-black/80 z-10'
          : 'fixed w-full shadow-sm flex justify-between p-4 items-center text-white z-10'
      }
    >
      <Link href="/" className="flex items-center ml-10">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </Link>
      <div className="absolute right-6 md:hidden top-6 scale-150">
        <HiOutlineMenuAlt2 onClick={toggle} />
      </div>
      <ul className="hidden md:flex gap-8 p-6 font-poly text-base tracking-wide font-semibold">
        <li>
          <AdventuresDropDown setIsOpen={setIsOpen} />
        </li>
        <li>
          <SafariDropDown setIsOpen={setIsOpen} />
        </li>
        <li>
          <Link href="/day-trips">DayTrips</Link>
        </li>
        <li>
          <Link href="/cultural-tours">Cultural tours</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <GuideDropDown setIsOpen={setIsOpen} />
        </li>
        <li>
          <a
            href="https://wa.me/255767707055"
            target="_blank"
            rel="noopener noreferrer"
            className="flex   p-2 rounded -mt-2     text-primary  items-center bg-black"
          >
            <FaWhatsapp className="mr-2" />
            Whatsapp
          </a>
        </li>
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </nav>
  );
};

export default NavBar;
