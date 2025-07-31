import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text='hasyyatishabrinaacc@gmail.com' Image={HiOutlineMail}/>
      <SingleInfo text='085759424893' Image={FiPhone}/>
      <SingleInfo text='Purwakarta, Jawa Barat' Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo