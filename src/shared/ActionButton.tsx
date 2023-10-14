"use client"

import { SelectedPage } from "./types";
import Link from "next/link";

type Props = {
  cta: string;
  href: string;
};

const ActionButton = ({cta, href}: Props) =>{
  const lowerCasePage = href.toLowerCase().replace(/ /g, "");
  return (
    <Link
     className = 'bg-primary-500 rounded p-4 hover:text-white'
      href= {lowerCasePage}
    >{cta}</Link>
  )
};

export default ActionButton;
