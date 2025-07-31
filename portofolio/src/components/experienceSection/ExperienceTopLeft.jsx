import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Active Since 2022</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='2+' text='Years'/>
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExperienceInfo number='4' text='Web Projects'/>
      </div>
      <p className='text-center text-white'>
        Developed 4 complete web projects, including internal SOP and HR systems during internship, 
        an academic portal for SMKN 3 Sukatani, and a personal portfolio website. 
        All projects were built with real functionality, thoughtful user flow, and clean design principles.
      </p>
      <ExperienceInfo number='Real' text='Projects'/>
    </div>
  )
}

export default ExperienceTopLeft