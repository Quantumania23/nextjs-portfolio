// next image
import Image from "next/image";

const TopLeftImg = () => {
  return(
    <div className='absolute left-8 top-8 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
    <image src='/top-left-img.png' width={400} height={400} alt=''/>
  </div>
  ); 
};

export default TopLeftImg;
