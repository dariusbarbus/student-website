import {styles} from '../styles';
import { PlanetCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Circle and LINE div */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#D2B48C]'/>
          <div className='w-1 sm:h-80 h-40 beige-dark-gradient'/>
        </div>
        {/* MAIN TITTLE  */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#D2B48C]'>Dario</span></h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I'm a Software Engineering Student 
          </p>
        </div>
      </div>
      <PlanetCanvas/>
    </section>  
  )
}

export default Hero