'use client';

import React, {useState} from 'react';
import Axios from 'axios';
import {UserProfile, useUser} from '@auth0/nextjs-auth0/client';

type Props = {};

const Dashboard = (props: Props) => {
  const [userData, setUserData] = useState<UserProfile | null>(null);

  const {user} = useUser() || {};
  const auth0Id = user?.sub || '';

  //Remove "auth0|" from auth0Id
  const formattedAuth0Id = auth0Id.slice(7);
  console.log('lupin bug', formattedAuth0Id);

  const getData = async () => {
    try {
      const response = await Axios.get(
        `http://pet-butler-be-6b33626d70a0.herokuapp.com/check/${formattedAuth0Id}`
      );
      if (response.data) {
        //Set new data
        setUserData(response.data);
      }
    } catch (error) {
      console.log('Lupin error getting data:', error);
    }
  };

  //Fetch info and set data upon load
  getData();

  console.log('lupin check userdata', userData);

  return <div>Dashboard</div>;
};

export default Dashboard;
