import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='www.linkedin.com/in/hasyyatishabrina' Icon={FaLinkedinIn}/>
      <SingleContactSocial link='#' Icon={FiGithub}/>
      <SingleContactSocial link='www.instagram.com/hsyatishbrna_/' Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial