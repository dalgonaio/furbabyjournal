import React from 'react'
import ButlerLink from '@/shared/ButlerLink';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Benefit = ({icon, title, description}: Props) => {
  return (
    <div className="mt-5  rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-beige-100">
          {icon}
          </div>
      </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <ButlerLink label="Learn More" page="About" />
    </div>
  )
}

export default Benefit;
