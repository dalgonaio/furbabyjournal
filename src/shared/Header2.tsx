import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Header2 = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-xl font-bold text-secondary-500">{children}</h1>
  );
};

export default Header2;
