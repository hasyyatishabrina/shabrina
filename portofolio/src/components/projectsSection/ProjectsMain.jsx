import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const projects = [
  {
    name: 'Sistem Informasi SOP PT Okamoto Logistics Nusantara',
    year: '2025',
    align: 'right',
    image: '../../public/images/SOP.png',
    link: 'http://apps.okalog.co.id:2302/dev2/magang_sop/public/',
  },
  {
    name: 'Sistem Data Karyawan PT Okamoto Logistics Nusantara',
    year: '2025',
    align: 'left',
    image: '../../public/images/HRD.png',
    link: 'http://apps.okalog.co.id:2302/dev2/hrd_system/',
  },
  {
    name: 'SMKN 3 Sukatani Academic Portal',
    year: '2024',
    align: 'right',
    image: '../../public/images/website-img-1.jpg',
    link: 'https://smkn3sukatani.site/', // nanti diisi kalau ada demo online
  },
  {
    name: 'Personal Portfolio Website',
    year: '2025',
    align: 'left',
    image: '../../public/images/website-img-1.jpg',
    link: '#', // halaman ini sendiri
  },
];


const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
      >
        
      <ProjectsText />
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item, index) => {
          return (
            <SingleProject 
              key={index} 
              name={item.name} 
              year={item.year} 
              align={item.align} 
              image={item.image}
            />
          );
        })}
      </div>
    </div>

  )
}

export default ProjectsMain