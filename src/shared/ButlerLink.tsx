"use client"

import React from "react";
import Link from "next/link";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string,
  selectedPage: SelectedPage,
  setSelectedPage: (value:SelectedPage)=>void,
};

const ButlerLink = ({
  page,
  selectedPage,
  setSelectedPage,
} : Props): React.JSX.Element | string => {

  //Alias path to enum type
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    selectedPage === lowerCasePage ? `${page}` :(<Link
      className={'rounded p-2 hover:bg-primary-300 hover:text-white'}
      onClick={()=>{setSelectedPage(lowerCasePage)}}
       href= {`/${page}`} >
      {page}
      </Link>)
    )
}

export default ButlerLink;