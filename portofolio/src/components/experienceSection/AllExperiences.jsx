import React from 'react'
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const experiences = [
  {
    job: 'Web Developer Intern',
    company: 'PT Okamoto Logistics Nusantara',
    date: 'Jan 2025 – Jul 2025',
    responsibilities: [
      'Developed internal web systems including SOP and HR platforms using Laravel and CodeIgniter.',
      'Built CRUD functionalities, role-based login, and printable A4 document views.',
      'Collaborated with teams to analyze requirements, design databases, and present solutions to stakeholders.',
    ],
  },
  {
    job: 'Head of Communication & Information',
    company: 'Himpunan Mahasiswa Sistem Telekomunikasi',
    date: 'Jan 2024 – Nov 2024',
    responsibilities: [
      'Led communication strategy for internal and external organizational activities.',
      'Managed social media, designed graphics, and published event documentation.',
      'Ensured clear and engaging information flow to members and the public.',
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between gap-6'>
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn('right',0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
            >
            <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperiences;
