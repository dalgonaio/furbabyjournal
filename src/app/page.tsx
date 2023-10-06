"use client"

import Navbar from "./components/navigation/navbar/page";
import {useState} from 'react'
import { SelectedPage } from "@/shared/types";



export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return(
    <main className ="bg-beige-50">
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage = {setSelectedPage}  />
      <div>text</div>
    </main>
  )
}
