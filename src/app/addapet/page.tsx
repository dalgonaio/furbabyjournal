'use client';

import React, {useState} from 'react';
import Axios from 'axios';

//Components
import {useRouter} from 'next/navigation';
import Header1 from '@/shared/Header1';
import {useForm, SubmitHandler} from 'react-hook-form';
import Image from 'next/image';
import cat_dog_meet from '../../assets/cat_dog_meet.jpg';

import ProtectedLink from '@/shared/ProtectedLink';
import {useUser} from '@auth0/nextjs-auth0/client';

type Props = {};

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
}

const AddAPet = (props: Props) => {
  const [currentErrorMessage, setCurrentErrorMessage] = useState<string | null>(null);

  const {user} = useUser() || {};

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormInputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInputs> = async (data, event) => {
    event?.preventDefault();
    try {
      const formattedAuthOId = user?.sub?.slice(6) || '';

      const headersList = {
        Accept: '*/*',
      };
      const reqOptions = {
        url: `https://pet-butler-be-6b33626d70a0.herokuapp.com/pets/${formattedAuthOId}`,
        method: 'POST',
        headers: headersList,
        data: data,
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

  const showErrorMessage = currentErrorMessage ? (
    <p className="text-red-700">{currentErrorMessage}</p>
  ) : null;

  const formInputClass =
    'mt-5 w-full rounded-lg bg-primary-400 border-primary-400 px-5 py-3 placeholder-white';

  return (
    <section id="joinUs" className="mx-auto w-5/6 pt-25 pb-32">
      <Header1>Add a Pet</Header1>
      <p className="my-5">Add the furry overlord so you can begin tracking their health!</p>
      {showErrorMessage}
      <div className="mt-10 justify-between gap-8 md:flex">
        {/* form for registering */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className={formInputClass}
            style={{color: 'white'}}
            placeholder="PET NAME"
            {...register('petName', {required: true, maxLength: 100})}
          />
          {errors.petName && (
            <p className="mt-1 text-gray-500">
              {errors.petName.type === 'required' && 'This field is required.'}
              {errors.petName.type === 'maxLength' && 'Max length is 100 characters.'}
            </p>
          )}
          <input
            type="text"
            className={formInputClass}
            style={{color: 'white'}}
            placeholder="RFID Chip Number"
            {...register('rfid', {required: false, maxLength: 100})}
          />
          <div className="mt-5" text="white">
            <select
              {...register('petType')}
              className={formInputClass} // Apply the same class as other input fields
              style={{color: 'white'}}
            >
              <option value="">Cat or Dog</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
          </div>
          {errors.petType && (
            <p className="mt-1 text-gray-500">
              {errors.petType.type === 'required' && 'This field is required.'}
            </p>
          )}
          <input
            type="text"
            className={formInputClass}
            style={{color: 'white'}}
            placeholder="Breed"
            {...register('breed', {required: false, maxLength: 100})}
          />
          <input
            type="date"
            className={formInputClass}
            style={{color: 'white'}}
            placeholder="Date of Birth"
            {...register('dob', {required: false, maxLength: 100})}
          />
          <div className="mt-5" text="white">
            <select
              {...register('gender')}
              className={formInputClass} // Apply the same class as other input fields
              style={{color: 'white'}}
            >
              <option value="">Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>

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

export default AddAPet;
