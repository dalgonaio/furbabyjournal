"use client"

import React from "react";
import Link from "next/link";

type Props = {
  page: string,
};

const ButlerLink = ({
  page,
} : Props): React.JSX.Element | string => {

  //Alias path to enum type
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  const newPage = lowerCasePage === 'home' ? '/': `${lowerCasePage}`;

  return (
     <Link
      className='rounded p-4 hover:text-secondary-500'
      href= {newPage} >
      {page}
      </Link>)

}

export default ButlerLink;
