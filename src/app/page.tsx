'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import ActionButton from '@/shared/ActionButton';
import ButlerLink from '@/shared/ButlerLink';
import butler_home from '@/assets/butler_home.png';
import About from './about/page';

export default function Home() {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const flexStyle = isAboveMediumScreens ? 'flex' : 'flex-column';

  return (
    //only apply full height on large screens
    <main id="home">
      {/*Image and main header*/}
      <div className={`${flexStyle} items-center justify-between`}>
        <div className="flex-col justify-around">
          {/*Headings*/}
          <div className="p-10 font-montserrat font-bold text-7xl text-gray-500">
            {/*Title*/}
            PET BUTLER
          </div>
          <div className="flex text-gray-500 text-lg justify-center">
            {/*copy*/}
            Managing your pet&apos;s health made simple
          </div>
          <div className="flex justify-around p-12 justify-center">
            {/*Actions*/}
            <ActionButton href="/joinus" cta="Join Now" />

            <ButlerLink label="Learn More" page="About" />
          </div>
        </div>
        <div>
          {/*Image*/}
          <Image className="rounded-lg blur-[1px] p-4" src={butler_home} alt="home image" />
        </div>
      </div>

      {/*About Product*/}
      <About />
    </main>
  );
}
