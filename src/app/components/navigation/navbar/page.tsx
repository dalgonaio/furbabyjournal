"use client"
import React, {useState} from "react";
import ButlerLink from "@/shared/ButlerLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/20/solid";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage,
  setSelectedPage: (value:SelectedPage)=>void,
};

const Navbar = ({
  selectedPage = SelectedPage.Home,
  setSelectedPage,
} : Props) => {
 //resize if above medium screen size
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  //icon menu is for smaller screens or mobile
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const flexBetween = "flex items-center justify-between";


  const currentLink = (pageName:string)=>{
    const lowerCasePage = pageName.toLowerCase();

    return (selectedPage === lowerCasePage ? <div>{pageName}</div> : (<ButlerLink
      page={`${pageName}`}
      selectedPage={selectedPage}
      setSelectedPage = {setSelectedPage} />))
  }

  return (<nav>
    {isAboveMediumScreens ? ( <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6 gap-8`}>
         <div className={`${flexBetween} w-full gap-8`}>

           {currentLink(SelectedPage.Home)}

           {currentLink(SelectedPage.About)}

           {currentLink(SelectedPage.ContactUs)}

           {currentLink(SelectedPage.SignIn)}

           <ActionButton
           cta="Join Us"
           selectedPage={selectedPage}
           setSelectedPage={()=>setSelectedPage}
           href={`${selectedPage}`} />

         </div>
      </div>
    </div>) : (<button
    className="rounded-full bg-secondary-500 p-2"
    onClick={()=>setIsMenuOpen(!isMenuOpen)}
    >
      <Bars3Icon className="h-6 w-6 text-white" />
    </button>)}
  </nav>)
}

export default Navbar;
