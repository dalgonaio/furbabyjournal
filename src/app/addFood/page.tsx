'use client';

import React, {useState, useEffect, ChangeEvent} from 'react';
import Axios from 'axios';

//Components
import {useRouter} from 'next/navigation';
import Header1 from '@/shared/Header1';
import {useForm, SubmitHandler} from 'react-hook-form';
import Image from 'next/image';
import cat_dog_meet from '../../assets/cat_dog_meet.jpg';

import {useUser} from '@auth0/nextjs-auth0/client';

type Props = {};

interface IFormInputs {
  date: Date;
  petId: number;
  foodBrand: string;
  portionSize: string;
  caloriesPerPortion: number;
  portionsConsumed: number;
}

const AddFood = (props: Props) => {
  //DO NOT USE. Use Dyamic Version instead
  const [currentErrorMessage, setCurrentErrorMessage] = useState<string | null>(null);
  const [currentPet, setCurrentPet] = useState<string | number | null>(null);
  const [availablePets, setAvailablePets] = useState<{petId: number; petName: String}[] | null>(
    null
  );

  const {user} = useUser() || {};

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormInputs>();

  const router = useRouter();

  const getData = async (userId: String) => {
    try {
      const headersList = {
        Accept: '*/*',
      };
      //Lupin remove local dev
      // const reqOptions = {
      //   url: `https://pet-butler-be-6b33626d70a0.herokuapp.com/users/check/${userId}`,
      //   method: 'GET',
      //   headers: headersList,
      // };
      const reqOptions = {
        url: `http://localhost:3001/pets/${userId}`,
        method: 'GET',
        headers: headersList,
      };
      const response = await Axios.request(reqOptions);
      if (response?.data) {
        const petsData = response?.data?.message.map((data: any) => {
          return {petId: data.pet_id, petName: data.pet_name};
        });
        setAvailablePets(petsData);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    if (user) {
      const formattedAuthOId = user?.sub?.slice(6) || '';
      getData(formattedAuthOId); // Call getData to update available pet options when the user changes
    }
  }, [user]);

  function getFormattedDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}${month}${day}`;
  }

  const onSubmit: SubmitHandler<IFormInputs> = async (data, event) => {
    event?.preventDefault();
    try {
      const todaysDate = getFormattedDate();

      const headersList = {
        Accept: '*/*',
      };
      //Lupin remove local dev
      // const reqOptions = {
      //   url: `https://pet-butler-be-6b33626d70a0.herokuapp.com/petFood/${currentPet}`,
      //   method: 'POST',
      //   headers: headersList,
      //   data: formattedData,
      // };
      const formattedData = {...data, date: todaysDate};
      const reqOptions = {
        url: `http://localhost:3001/petFood/${currentPet}`,
        method: 'POST',
        headers: headersList,
        data: formattedData,
      };

      const response = await Axios.request(reqOptions);

      if (response.status === 201) {
        //Route user to home
        router.push('/dashboard');
      }
    } catch (error) {
      console.log('Error:', error);
      setCurrentErrorMessage('Sorry, something went wrong. Please try again.');
    }
  };

  const petOptions = () => {
    return availablePets?.map((petInfo) => {
      return (
        <option key={petInfo?.petId} value={petInfo?.petId}>
          {petInfo?.petName}
        </option>
      );
    });
  };

  const handleSelectPet = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPet(event?.target?.value);
  };

  const formInputClass =
    'mt-5 w-full rounded-lg bg-primary-400 border-primary-400 px-5 py-3 placeholder-white';

  return (
    <section id="joinUs" className="mx-auto w-5/6 pt-25 pb-32">
      <Header1>Add Food Intake</Header1>
      <p className="my-5">Add what they ate today!</p>
      <div className="mt-10 justify-between gap-8 md:flex">
        {/* form for registering */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5" data-color="white">
            <select
              {...register('petId', {required: true})}
              className={formInputClass} // Apply the same class as other input fields
              style={{color: 'white'}}
              onChange={handleSelectPet}
            >
              <option value="">Pet</option>
              {petOptions()}
            </select>
          </div>

          <input
            type="text"
            className={formInputClass}
            style={{color: 'white'}}
            placeholder="Food Name or Nickname"
            {...register('foodBrand', {required: true, maxLength: 100})}
          />

          <div className="mt-5" data-color="white">
            <select
              {...register('portionSize', {required: true})}
              className={formInputClass} // Apply the same class as other input fields
              style={{color: 'white'}}
            >
              <option value="">Portion Size (based on 1 cup)</option>
              <option value="1">1 cup</option>
              <option value="0.5">0.5 cup</option>
              <option value="0.3">0.3 cup</option>
              <option value="0.25">0.25 cup</option>
            </select>
          </div>

          <input
            type="number"
            min="0"
            className={formInputClass}
            style={{color: 'white'}}
            placeholder="Calories per portion"
            {...register('caloriesPerPortion', {required: true})}
          />

          <input
            type="number"
            min="0"
            className={formInputClass}
            style={{color: 'white'}}
            placeholder="Portions Consumed"
            {...register('portionsConsumed', {required: true})}
          />

          <button
            type="submit"
            className="mt-5 rounded-lg bg-primary-500 px-20 py-3 transition duration-500 hover:text-white"
          >
            SUBMIT
          </button>
        </form>
        {/*Image*/}
        <div className="pt-6">
          <Image
            src={cat_dog_meet}
            alt="add a pet"
            className="rounded-lg"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default AddFood;
