import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const SingleProject = ({ name, year, align, image, link }) => {
  const isLeft = align === 'left';

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full flex-col md:flex-row items-center gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* TEXT */}
      <div
        className={`flex flex-col gap-2 w-full md:w-1/2 ${
          isLeft ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
        }`}
      >
        <h2 className='text-2xl md:text-3xl text-orange font-bold'>{name}</h2>
        <p className='text-xl text-white font-special'>{year}</p>
        <a
  href={link}
  target='_blank'
  rel='noopener noreferrer'
  className='text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer'
>
  View <BiSolidRightTopArrowCircle />
</a>

      </div>

      {/* IMAGE */}
      <div className='w-full md:w-1/2 max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
        <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 pointer-events-none z-0'></div>
        <img src={image} alt='Project Image' className='w-full h-full object-cover relative z-0' />
      </div>
    </motion.div>
  );
};

export default SingleProject;
