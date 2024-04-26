import Image from 'next/image';
import Link from 'next/link';
import {
  MdEmail,
  MdOutlineAlternateEmail,
  MdLocalPhone,
  MdLocationPin,
} from 'react-icons/md';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiCopyrightLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-black w-full" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-5 gap-4 p-5">
        <div className="col-span-1 mt-4 mb-4 sm:border-r-2 sm:border-gray-200 flex justify-center items-center">
          <Image src="/logo.webp" width={50} height={50} alt="logo" />
        </div>
        <div className="lg:col-span-1 sm:col-span-2 col-span-1 mt-4 mb-8 sm:border-r-2 sm:border-gray-200">
          <h1 className="text-white font-poly font-bold text-xl uppercase text-center">
            contact us
          </h1>
          <div className="flex flex-col justify-center sm:items-start items-center mt-4 gap-4 text-white font-poly">
            <Link
              href="mailto:info@lauwoadventures.com"
              className="flex justify-center items-center gap-5"
            >
              <MdEmail className="cursor-pointer" />
              <p className="text-sm">lauwoadventures@gmail.com</p>
            </Link>
            <Link
              href="mailto:sales@lauwoadventures.com"
              className="flex justify-center items-center gap-5"
            >
              <MdOutlineAlternateEmail className="cursor-pointer" />
              <p className="text-sm">lauwoadventures@gmail.com</p>
            </Link>
            <div className="flex justify-center items-center gap-5">
              <MdLocationPin />
              <p className="text-white text-sm">P.O Box 29, Kilimanjaro </p>
            </div>
            <div href="" className="flex justify-center items-center gap-5">
              <MdLocalPhone />
              <p className="text-sm">+255 712002228</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-4 mb-8 sm:border-r-2 sm:border-gray-200">
          <h1 className="text-white font-poly font-bold text-xl uppercase text-center">
            quick links
          </h1>
          <div className="flex flex-col justify-center items-center mt-4 gap-4 text-white font-poly capitalize underline">
            <Link href="/about-us">about us</Link>
            <Link href="/mountain-trekking/mount-kilimanjaro">kilimanjaro</Link>
            <Link href="/our-safari-packages">safari packages</Link>
            <Link href="/blogs">blogs</Link>
          </div>
        </div>
        <div className="col-span-1 mt-4 mb-8">
          <h1 className="text-white font-poly font-bold text-xl uppercase text-center">
            useful links
          </h1>
          <div className="flex flex-col justify-center items-center mt-4 gap-4 text-white font-poly capitalize underline">
            <Link href="/kilimanjaro-group-climb">group climb bookings</Link>
            <Link href="/reviews">testimonials</Link>
            <Link href="/contact-us">contact us</Link>
            <Link href="/payments">payments</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 p-5 text-white">
        <Link
          href="https://www.facebook.com/LauwoAdventures/"
          className="border-2 border-white p-3 rounded-full"
        >
          <GrFacebookOption className="cursor-pointer text-xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/LauwoAdventures/"
          className="border-2 border-white p-3 rounded-full"
        >
          <AiFillLinkedin className="cursor-pointer text-xl" />
        </Link>
        <Link
          href="https://www.instagram.com/LauwoAdventures/"
          className="border-2 border-white p-3 rounded-full"
        >
          <AiOutlineInstagram className="cursor-pointer text-xl" />
        </Link>
      </div>
      <hr className="sm:ml-32 ml-8 w-9/12 border mb-4" />
      <div className="text-white gap-2 flex flex-col sm:flex-row justify-center items-cente text-center text-md font-poly">
        <p>
          <RiCopyrightLine className="inline-block mr-1" />
          {new Date().getFullYear()}
        </p>
        <p className="mx-2 hidden sm:block">|</p>
        <p className="mx-2">Lauwo Adventures</p>
        <p className="mx-2 hidden sm:block">|</p>
        <p className="mx-2">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
