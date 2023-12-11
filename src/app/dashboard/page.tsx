'use client';

import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useUser} from '@auth0/nextjs-auth0/client';

// Components
import Header1 from '@/shared/Header1';
import Header2 from '@/shared/Header2';
import Image from 'next/image';
import ActionButton from '@/shared/ActionButton';
import cat_dog_meet from '../../assets/cat_dog_meet.jpg';

type Props = {};

const Dashboard = (props: Props) => {
  const [userData, setUserData] = useState<any | null>(null); // State to store user data
  const [petsData, setPetsData] = useState<any | null>(null); // State to store user data
  const {user} = useUser() || '';

  const getData = async (userId: string) => {
    try {
      const headersList = {
        Accept: '*/*',
      };

      const reqOptions = {
        url: `https://pet-butler-be-6b33626d70a0.herokuapp.com/users/check/${userId}`,
        method: 'GET',
        headers: headersList,
      };

      const response = await Axios.request(reqOptions);
      if (response.data) {
        setUserData(response.data.message); // Update userData state with the fetched data
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const getPets = async (userId: string) => {
    try {
      const headersList = {
        Accept: '*/*',
      };

      const reqOptions = {
        url: `https://pet-butler-be-6b33626d70a0.herokuapp.com/pets/${userId}`,
        method: 'GET',
        headers: headersList,
      };

      const response = await Axios.request(reqOptions);
      if (response.data) {
        setPetsData(response.data.message); // Update userData state with the fetched data
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    if (user) {
      const formattedAuthOId = user?.sub?.slice(6) || '';
      getData(formattedAuthOId); // Call getData when the user changes
      getPets(formattedAuthOId); //Also update pets
    }
  }, [user]);

  console.log('lupin do they have pets?', petsData);

  const activePetInfo = petsData
    ? 'Data here'
    : 'Looks like you have not added your furry overlords yet.';

  return (
    <section id="Dashboard" className="mx-auto w-5/6 pt-25 pb-32">
      <Header1>
        {userData ? (
          <p className="my-5">Welcome {userData?.first_name}!</p>
        ) : (
          <p className="my-5">The furry team is fetching your information...</p>
        )}
      </Header1>

      <div className="mt-10 justify-between gap-8 md:flex">
        {/* pet info and/or buttons */}
        <div>
          {activePetInfo}
          <div className="pt-10 pb-10">
            <ActionButton cta="Add Pet" href={'/'} />
          </div>
        </div>
        {/*Image*/}
        <div className="pt-6">
          <Image
            src={cat_dog_meet}
            alt="dashboard cat meets dog"
            className="rounded-lg"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
