import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PetButlerLogo from '@/assets/PetButlerLogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md: flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/*Logo and Copyright Info*/}
          <Image src={PetButlerLogo} alt="logo on footer" height={100} />
          <p className="my-5">Icon © by Becris from Noun Project</p>
          <p>
            © 2023 Pet Butler. All Rights Reserved. <br />
            Contact dalgona i/o for collaboration inquiries.
          </p>
        </div>
        <div className="mt-20 basis-1/4 md:mt-0">
          {/*Links*/}
          <h4 className="font-bold">Company</h4>
          <p className="my-5">
            <Link href="/aboutUs">About Us</Link>
          </p>
          <p className="my-5">
            <Link href="/contactUs">Contact Us</Link>
          </p>
        </div>
        <div>
          {/*Other Footer Info*/}
          <h4 className="font-bold">Terms</h4>
          <p className="my-5">Terms of Service</p>
          <p className="my-5">Privacy Policy</p>
          <p>All legal terms forthcoming.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
