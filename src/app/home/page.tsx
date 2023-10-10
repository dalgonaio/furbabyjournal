"use client"

import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';


type Props = {}

const Home = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <div
    id= "home"
    className="gap-16 py-10 md:h-full md:pb-0"
    >Home</div>
  )
}

export default Home;
