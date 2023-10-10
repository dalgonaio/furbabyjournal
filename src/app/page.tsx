"use client"

import useMediaQuery from "@/hooks/useMediaQuery";
import Image from 'next/image';
import ActionButton from "@/shared/ActionButton";
import cats_dogs_small from "@/assets/cats_dogs_small.jpg"

export default function Home() {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const flexStyle = isAboveMediumScreens ? "flex" : "flex-column";

  return(
    //only apply full height on large screens
    <main
    id="home" >
      {/*Image and main header*/}
        <div className={`${flexStyle} items-center justify-between`} >
          <div className="flex-col justify-around">
          {/*Headings*/}
            <div className="p-10 font-montserrat font-bold text-7xl text-gray-500">CAT BUTLER</div>
            <div className="flex text-gray-500 text-lg justify-center">
            {/*copy*/}
              Managing your pet&apos;s health made simple
            </div>
            </div>
          <div>
             {/*Image*/}
          <Image className="rounded-lg blur-[1px] p-4" src={cats_dogs_small} alt="home image" />
          </div>
        </div>


    </main>
  )
}
