import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl mb-4'>Let's Connect</h2>
        <p className='text-white'>
          Got a project or just want to say hi? 
          <br />
          I’d love to hear from you!
        </p>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactMeLeft