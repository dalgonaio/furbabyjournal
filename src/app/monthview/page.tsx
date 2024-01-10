'use client';

import React, {useState} from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Header2 from '@/shared/Header2';
import Image from 'next/image';

import cat_dog_meet from '../../assets/cat_dog_meet.jpg';

const MonthView: React.FC = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center p-10 m-8">
        <div className="p-12">
          <Header2>Choose Date</Header2>
        </div>
        <div className="w-64">
          <Datepicker
            asSingle={true}
            primaryColor={'indigo'}
            value={value}
            onChange={handleValueChange}
          />
        </div>
      </div>
      {/*Image*/}
      <div className="pt-6 m-20">
        <Image src={cat_dog_meet} alt="add a pet" className="rounded-lg" width={600} height={600} />
      </div>
    </div>
  );
};

export default MonthView;
