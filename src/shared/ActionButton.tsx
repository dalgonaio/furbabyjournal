"use client"

import { SelectedPage } from "./types";
import Link from "next/link";

type Props = {
  cta: string;
  href: string;
};

const ActionButton = ({cta, href}: Props) =>{
  return (
    <Link
     className = 'bg-secondary-500 rounded p-4 hover:text-white'
      href= {href}
    >{cta}</Link>
  )
};

export default ActionButton;
