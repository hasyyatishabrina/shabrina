import React from 'react'
import { FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaBootstrap, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiCodeigniter, SiJavascript } from 'react-icons/si';
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const skills = [
  { skill: 'HTML', icon: FaHtml5 },
  { skill: 'CSS', icon: FaCss3Alt },
  { skill: 'PHP', icon: FaPhp },
  { skill: 'Laravel', icon: FaLaravel },
  { skill: 'CodeIgniter', icon: SiCodeigniter },
  { skill: 'Bootstrap', icon: FaBootstrap },
  { skill: 'React', icon: FaReact },
  { skill: 'Tailwind CSS', icon: SiTailwindcss },
  { skill: 'JavaScript', icon: SiJavascript },
  { skill: 'MySQL', icon: SiMysql },
  { skill: 'Database', icon: FaDatabase },
]

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item,index)=>{
        return ( 
        <motion.div 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          key={index} 
          className='flex flex-col items-center'
        >
          <item.icon className='text-7xl text-orange'/>
          <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      )
      })}
    </div>
  )
}

export default AllSkillsSM