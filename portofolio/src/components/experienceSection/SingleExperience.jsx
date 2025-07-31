import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const SingleExperience = ({ experience }) => {
  if (!experience) return null;

  return (
    <motion.div 
      variants={fadeIn('right',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className='w-full max-w-[400px] min-h-[350px] border-2 border-orange border-dashed rounded-2xl mt-12 p-6  text-white shadow-lg'
    >
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>
        {experience.responsibilities?.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
