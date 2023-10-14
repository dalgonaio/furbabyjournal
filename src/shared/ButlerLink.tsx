"use client"

import React from "react";
import Link from "next/link";

type Props = {
  label: string,
  page: string,
};

const ButlerLink = ({
  label,
  page,
} : Props): React.JSX.Element | string => {

  //Alias path to enum type
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  const newPage = lowerCasePage === 'home' ? '/': `${lowerCasePage}`;

  return (
     <Link
      className='rounded p-4 text-gray-500 hover:text-primary-500'
      href= {newPage} >
      {label}
      </Link>)

}

export default ButlerLink;
