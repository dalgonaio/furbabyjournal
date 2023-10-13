"use client"

import React from 'react'
import Header1 from '@/shared/Header1'
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import surprised_cat_med from "@/assets/surprised_cat_med.jpg"

type Props = {}

const ContactUs = (props: Props) => {

  const {register, trigger, formState: {errors}} = useForm();

  const onSubmit = async (e:any)=>{
    const isValid = await trigger();
    if(!isValid){
      //don't go to new page if invalid
      e.preventDefault();
    }
  }

  const formInputClass = "mt-5 w-full rounded-lg bg-secondary-500 border-secondary-500 px-5 py-3 placeholder-white";

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-25 pb-32">
     <Header1 >Contact Us</Header1>
     <p className="my-5">
      Have any questions or comments in service of our furry masters? Drop us a line below.
     </p>
     <div className="mt-10 justify-between gap-8 md:flex">
      {/*form and image*/}

        {/*form*/}
        <form
        target="_blank"
        onSubmit={onSubmit}
        //replace with anonymous version tbd
        //connected with third party app for responses until BE is setup
        action="https://formsubmit.co/butler@catbutler.com"
        method="POST" >

          {/*Name*/}
          <input className = {formInputClass}
          type='text'
          placeholder='NAME'
          {...register("name", {
            required: true,
            maxLength: 100,
          })} />
          {errors.name && (
            <p className="mt-1 text-gray-500">
              {errors.name.type==="required" && "This field is required."}
              {errors.name.type==="maxLength" && "Max length is 100 characters."}
            </p>
          )}

          {/*Email*/}
          <input className = {formInputClass}
          type='text'
          placeholder='EMAIL'
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })} />
          {errors.email && (
            <p className="mt-1 text-gray-500 p-6">
              {errors.email.type==="required" && "This field is required."}
              {errors.email.type==="pattern" && "Invalid email address"}
            </p>
          )}

            {/*Message*/}
          <textarea
          className = {formInputClass}
          rows={5}
          cols={30}
          placeholder='MESSAGE'
          {...register("message", {
            required: true,
            maxLength: 2000,
          })} />
          {errors.message && (
            <p className="mt-1 text-gray-500">
              {errors.message.type==="required" && "This field is required."}
              {errors.message.type==="maxLength" && "Max length is 2000 characters."}
            </p>
          )}

          <button type= "submit" className = "mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
            SUBMIT
          </button>
        </form>

        <div className="p-4" >
        {/*image*/}
        <Image className="rounded-lg" width={400} height={600} src={surprised_cat_med} alt="contact image" />
        </div>

       </div>

    </section>

  )
}

export default ContactUs
