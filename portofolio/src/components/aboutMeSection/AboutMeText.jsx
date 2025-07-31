import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        I'm a final-year Telecommunication System student at Universitas Pendidikan Indonesia, 
        passionate about combining technology and creativity. With a strong focus on web development, 
        UI/UX design, and cloud-based innovation, I bring a blend of technical skills and creative thinking. 
        I’ve also contributed to publications, managed digital communications, and led organizational finance 
        with transparency. Beyond code, I love crafting clean designs, creating engaging presentations, 
        and solving real-world problems with thoughtful solutions.
      </p>
     <a href="#projects" className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
  My Projects
</a>

    </div>
  )
}

export default AboutMeText