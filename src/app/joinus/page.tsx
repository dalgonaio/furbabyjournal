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

const JoinUs = (props: Props) => {
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
      const response = await Axios.post('http://localhost:3001/users/', data);

      if (response.status === 201) {
        //Route user to home
        router.push('/');
      }
    } catch (error) {
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
      <Header1>Join Us</Header1>
      <p className="my-5">
        Join the community of butlers now for access to the health monitoring application.
      </p>
      {showErrorMessage}
      <div className="mt-10 justify-between gap-8 md:flex">
        {/* form for registering */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className={formInputClass}
            placeholder="FIRT NAME"
            {...register('firstName', {required: true, maxLength: 100})}
          />
          {errors.firstName && (
            <p className="mt-1 text-gray-500">
              {errors.firstName.type === 'required' && 'This field is required.'}
              {errors.firstName.type === 'maxLength' && 'Max length is 100 characters.'}
            </p>
          )}
          <input
            type="text"
            className={formInputClass}
            placeholder="LAST NAME"
            {...register('lastName', {required: true, maxLength: 100})}
          />
          {errors.lastName && (
            <p className="mt-1 text-gray-500">
              {errors.lastName.type === 'required' && 'This field is required.'}
              {errors.lastName.type === 'maxLength' && 'Max length is 100 characters.'}
            </p>
          )}
          <input
            type="text"
            className={formInputClass}
            placeholder="EMAIL"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-gray-500 pb-5">
              {errors.email.type === 'required' && 'This field is required.'}
              {errors.email.type === 'pattern' && 'Invalid email address'}
            </p>
          )}
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
            alt="join us cat and dogs"
            className="rounded-lg"
            width={600}
            height={600}
          />
        </div>
      </div>
      {/* <ProtectedLink user={user} destinationPage="/users" label="Users" /> */}
    </section>
  );
};

export default JoinUs;
