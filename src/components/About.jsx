import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
<motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-secondary text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>

    </Tilt>
    )
}

const About = () => {
  return (
    <>
    {/* THIS IS THE TITTLE AND INTRO */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-8xl leading-[30px]'>
      I am a Software Engineering Technology Co-op student at Conestoga College,
      bringing a multicultural background and a BA in 3D Animation and Visual
      Effects from Lima, Peru. Proficient in C/C++, C#, Linux, and
      knowledgeable about various technologies, including Docker, React, and Node.js.
      My education focused on Object-Oriented Programming and was reinforced by using
      C# for most of the projects we did in class. I also bring leadership experience
      from roles such as Director of
      Post-Production at Softnyx LTD. Beyond coding, my creative background adds an
      innovative touch to my approach as a software developer.
      </motion.p>
      {/* THiS is for the cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");