// components
import ServiceSlider from '../../Components/ServiceSlider.js';
import Bulb from '../../Components/Bulb.js';
import Circles from '../../Components/Circles.js';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants.js';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-8'
            >
              Some of the services offered <span className='text-accents'>.</span>
            </motion.h2>
            <motion.p 
               variants={fadeIn('up', 0.6)}
               initial='hidden'
               animate='show'
               exit='hidden'
               className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              bsiasbiubvfhahvblruvbaivba jvalrbvaruvbfjv rlaufblvjh fvlrfbvjh fbvjharbvfvjh sjhvb aryvbfsvjh fvbsrykuvbfjh vsyufvrfyukbsdvjhbsvryvukbsjhv skyrfbvsjhvbs djhkkbsyvbsdhjbvskyvbsyvBJHvkbhjk
            </motion.p>
          </div>

           {/* Slider */}
          <motion.div 
          variants={fadeIn('down', 0.9)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%]'>
          <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  );
};

export default Services;
