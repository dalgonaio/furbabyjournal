"use client"

import { SelectedPage } from "./types";
import Link from "next/link";

type Props = {
  cta: string;
  setSelectedPage: (value:SelectedPage)=>void;
  selectedPage: SelectedPage
  href: string;
};

const ActionButton = ({cta, setSelectedPage, selectedPage, href}: Props) =>{
  return (
    <Link
     className = 'bg-secondary-500 rounded p-4 hover:text-white'
      href= {href}
    //lupin update set page
    onClick={()=>{setSelectedPage(selectedPage)}}
    >{cta}</Link>
  )
};

export default ActionButton;
