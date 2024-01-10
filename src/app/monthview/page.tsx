'use client';

import React, {useState} from 'react';
import Datepicker, {DateValueType, DateRangeType} from 'react-tailwindcss-datepicker';
import Header2 from '@/shared/Header2';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {FormatDate} from '@/shared/FormatDate';

import cat_dog_meet from '../../assets/cat_dog_meet.jpg';

const MonthView: React.FC = () => {
  const router = useRouter();

  const handleValueChange = (newValue: DateValueType | DateRangeType) => {
    if (typeof newValue?.startDate == 'string') {
      const formattedDate = newValue?.startDate?.replace(/-/g, '');
      router.push(`/addfood/${formattedDate}`);
    }
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
            value={null}
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
