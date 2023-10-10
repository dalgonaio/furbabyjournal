"use client"
import React, {useState} from "react";
import ButlerLink from "@/shared/ButlerLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
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

  const menuItemsSansRegister = (<>
  {currentLink(SelectedPage.Home)}
  {currentLink(SelectedPage.About)}
  {currentLink(SelectedPage.ContactUs)}
  {currentLink(SelectedPage.SignIn)}</>)

  return (<nav className= 'p-8'>
    {isAboveMediumScreens ? ( <div className={`${flexBetween} sticky fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6 gap-8`}>
         <div className={`${flexBetween} w-full gap-8`}>

         {menuItemsSansRegister}

           <ActionButton
           cta="Join Us"
           selectedPage={SelectedPage.SignUp}
           setSelectedPage={()=>setSelectedPage}
           href={`${SelectedPage.SignUp}`} />

         </div>
      </div>
    </div>) : (<button
    className="rounded-full bg-secondary-500 p-2"
    onClick={()=>setIsMenuOpen(!isMenuOpen)}
    >
      <Bars3Icon className="h-6 w-6 text-white" />
    </button>)}
    {/*Mobile Menu Modal*/}
    {!isAboveMediumScreens && isMenuOpen && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-beige-100 drop-shadow-xl">
        {/* close icon */}
          <div
          className="flex justify-end p-12 text-gray-50"
          onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
          <XMarkIcon className="h-6 w-6" />
          </div>
          {/* Other Menu Items */}
          <div className={`ml-[33%] flex flex-col gap-10 text-xl`}>

          {menuItemsSansRegister}

          </div>
      </div>
    )}
  </nav>)
}

export default Navbar;
