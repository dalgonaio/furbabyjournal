'use client';

import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useUser} from '@auth0/nextjs-auth0/client';

//Components
import Header1 from '@/shared/Header1';

type Props = {};

const Users = (props: Props) => {
  const [userData, setUserData] = useState<any | null>(null);
  const {user} = useUser() || '';

  const getData = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/users/');
      console.log('lupin check resposne', response);
      if (response.data) {
        //Route user to home
        setUserData(response.data);
      }
    } catch (error) {
      console.log('Lupin Error:', error);
    }
  };

  useEffect(() => {
    if (!userData) {
      getData();
    }
  }, [userData]);

  console.log('lupin check', userData);

  return (
    <section id="userPage" className="mx-auto w-5/6 pt-25 pb-32">
      <Header1>User Page</Header1>
      <p className="my-5">WIP</p>
    </section>
  );
};

export default Users;
