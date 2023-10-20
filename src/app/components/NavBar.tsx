'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import ButlerLink from '@/shared/ButlerLink';
import {useUser} from '@auth0/nextjs-auth0/client';
import {SelectedPage} from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/20/solid';
import ActionButton from '@/shared/ActionButton';
import Image from 'next/image';
import PetButlerLogo from '@/assets/PetButlerLogo.png';

type Props = {};

const Navbar = ({}: Props) => {
  const {user, isLoading} = useUser();

  //resize if above medium screen size
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  //icon menu is for smaller screens or mobile
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const flexBetween = 'flex items-center justify-between';

  const currentLink = (pageName: string) => {
    return <ButlerLink label={pageName} page={`${pageName}`} />;
  };

  const menuItemsSansLoginRegister = (
    <>
      {currentLink(SelectedPage.Home)}
      {currentLink(SelectedPage.About)}
      {currentLink(SelectedPage.ContactUs)}
    </>
  );

  const logInOrOutLink = (
    <>
      {/*Log In Link */}
      {!isLoading && !user && (
        <Link className="rounded p-4 text-gray-500 hover:text-primary-500" href="/api/auth/login">
          Log In
        </Link>
      )}
      {/*Log Out Link*/}
      {user && (
        <Link className="rounded p-4 text-gray-500 hover:text-primary-500" href="/api/auth/logout">
          Log Out
        </Link>
      )}
    </>
  );

  return (
    <nav className="p-8">
      {isAboveMediumScreens ? (
        <div className={`${flexBetween} sticky fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6 gap-8`}>
            <Image className="rounded-lg" height={80} src={PetButlerLogo} alt="contact image" />
            <div className={`${flexBetween} w-full gap-8`}>
              {menuItemsSansLoginRegister}
              {logInOrOutLink}

              <ActionButton cta="Join Us" href={`${SelectedPage.JoinUs}`} />
            </div>
          </div>
        </div>
      ) : (
        <button
          className="rounded-full bg-primary-500 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      )}
      {/*Mobile Menu Modal*/}
      {!isAboveMediumScreens && isMenuOpen && (
        <div className="fixed left-0 bottom-0 z-40 h-full w-[300px] bg-beige-50 drop-shadow-xl">
          {/* close icon */}
          <div
            className="flex justify-end p-12 text-gray-500"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <XMarkIcon className="h-6 w-6" />
          </div>
          {/* Other Menu Items */}
          <div className={`ml-[33%] flex flex-col gap-10 text-xl`}>
            {menuItemsSansLoginRegister}
            {logInOrOutLink}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
