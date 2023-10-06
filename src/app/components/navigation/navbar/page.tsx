"use client"
import React from "react";
import JournalLink from "./JournalLink";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage,
  setSelectedPage: (value:SelectedPage)=>void,
};

const Navbar = ({
  selectedPage = SelectedPage.Home,
  setSelectedPage,
} : Props) => {

  const flexBetween = "flex items-center justify-between";


  const currentLink = (pageName:string)=>{
    const lowerCasePage = pageName.toLowerCase();

    return (selectedPage === lowerCasePage ? <div>{pageName}</div> : (<JournalLink
      page={`${pageName}`}
      selectedPage={selectedPage}
      setSelectedPage = {setSelectedPage} />))
  }

  return (<nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6 gap-8`}>
         <div className={`${flexBetween} w-full gap-8`}>
           {/*Right Side*/}
           {currentLink(SelectedPage.Home)}

           {currentLink(SelectedPage.About)}

           {currentLink(SelectedPage.ContactUs)}

         </div>
         <div className={`${flexBetween} w-full gap-8`}>
           {/*Left Side*/}
           {currentLink(SelectedPage.SignUp)}

           {currentLink(SelectedPage.SignIn)}
         </div>
      </div>
    </div>
  </nav>)
}

export default Navbar;
