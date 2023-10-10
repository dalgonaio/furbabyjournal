"use client"

import Navbar from "./components/navigation/navbar/page";
import {useState, useEffect} from 'react'
import { SelectedPage } from "@/shared/types";



export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isNavTopOfPage, setIsNavTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = ()=>{
      //window.scrollY is when you are at top of page
      if(window.scrollY === 0){
        setIsNavTopOfPage(true);
      }else{
        setIsNavTopOfPage(false);
      }
       //Watch for scrolling through event listener
      window.addEventListener("scroll", handleScroll);
      //Clean up event listener
      return () => window.removeEventListener("scroll", handleScroll)
    }
  })
  return(
    <main className ="bg-beige-50 p-10">
      <Navbar
      isNavTopOfPage={isNavTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage = {setSelectedPage}  />
      <div>text</div>
    </main>
  )
}
