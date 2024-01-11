'use client';
import React, {useEffect, useState, useCallback} from 'react';
import Axios from 'axios';
import Image from 'next/image';
import cat_dog_meet from '../../../assets/cat_dog_meet.jpg';

const DynamicDayView: React.FC = ({params}: any) => {
  //Lupin fix params type

  type FoodDataType = Record<string, number>;
  type FoodNamesType = string[];
  const [foodData, setFoodData] = useState<FoodDataType>({});
  const [foodNames, setFoodNames] = useState<FoodNamesType>([]);

  const targetDate = params.todaysDate;

  const getData = async (petId: Number) => {
    try {
      const headersList = {
        Accept: '*/*',
      };
      //Lupin remove local dev
      // const reqOptions = {
      //   url: `https://pet-butler-be-6b33626d70a0.herokuapp.com/petFood/${petId}/${targetDate}`,
      //   method: 'GET',
      //   headers: headersList,
      // };
      const reqOptions = {
        url: `http://localhost:3001/petFood/${petId}/${targetDate}`,
        method: 'GET',
        headers: headersList,
      };
      const response = await Axios.request(reqOptions);
      const data = await response?.data?.message;
      if (data) {
        setFoodData(data.calorieData);
        setFoodNames(data.names);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center p-10 m-8">
        <h2 className="text-2xl font-bold mb-4">Food Consumption Details for DATE</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-beige-0 uppercase tracking-wider"
              >
                Food Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-beige-0 uppercase tracking-wider"
              >
                Total Calories
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {(foodNames || []).map((name: string, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{foodData?.[name]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image */}
      <div className="pt-6 m-20">
        <Image src={cat_dog_meet} alt="add a pet" className="rounded-lg" width={600} height={600} />
      </div>
    </div>
  );
};

export default DynamicDayView;
