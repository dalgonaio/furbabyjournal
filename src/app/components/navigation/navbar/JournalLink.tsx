import React from "react";
import Link from "next/link";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string,
  selectedPage: SelectedPage,
  setSelectedPage: (value:SelectedPage)=>void,
};

const JournalLink = ({
  page,
  selectedPage,
  setSelectedPage,
} : Props): React.JSX.Element | string => {

  //Alias path to enum type
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    selectedPage === lowerCasePage ? `${page}` :(<Link
      className={'hover:text-primary-300'}
      onClick={()=>{setSelectedPage(lowerCasePage)}}
       href= {`/${page}`} >
      <p>{page}</p>
      </Link>)
    )
}

export default JournalLink;
