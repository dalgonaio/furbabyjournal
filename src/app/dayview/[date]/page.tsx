'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import cat_dog_meet from '../../../assets/cat_dog_meet.jpg';

const DynamicDayView: React.FC = () => {
  // Sample data for the table
  const foodData = [
    {foodName: 'Apple', portionSize: '1 medium', portionsConsumed: 2, totalCalories: 200},
    {foodName: 'Chicken', portionSize: '100g', portionsConsumed: 1, totalCalories: 250},
    // Add more rows as needed
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center p-10 m-8">
        <h2 className="text-2xl font-bold mb-4">Food Consumption Details for DATE</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Food Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Portion Size
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Portions Consumed
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total Calories
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {foodData.map((food, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{food.foodName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{food.portionSize}</td>
                <td className="px-6 py-4 whitespace-nowrap">{food.portionsConsumed}</td>
                <td className="px-6 py-4 whitespace-nowrap">{food.totalCalories}</td>
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
