import React from 'react'
import { FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaBootstrap, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiCodeigniter, SiJavascript, SiFigma } from 'react-icons/si';
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const skills = [
  { skill: 'HTML', icon: FaHtml5 },
  { skill: 'CSS', icon: FaCss3Alt },
  { skill: 'JavaScript', icon: SiJavascript },
  { skill: 'PHP', icon: FaPhp },
  { skill: 'Laravel', icon: FaLaravel },
  { skill: 'CodeIgniter', icon: SiCodeigniter },
  { skill: 'Bootstrap', icon: FaBootstrap },
  { skill: 'React', icon: FaReact },
  { skill: 'Tailwind CSS', icon: SiTailwindcss },
  { skill: 'MySQL', icon: SiMysql },
  { skill: 'Figma', icon: SiFigma },
]

const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn('up', `0.${index}`)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
            >
          <SingleSkill 
            key={index} 
            text={item.skill} 
            imgSvg={<item.icon />} 
          />
          </motion.div>
          );
          })}
      </div>
    </div>
  )
}

export default AllSkills