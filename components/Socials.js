// Links
import Link from "next/link";

// icons
import {
RiInstagramLine,
RiFacebookLine,
RiTwitterLine,
RiGithubLine,
RiDribbleLine,
RiBehanceLine,
RiPinterestLine,
} from 'react-icons/ri'


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/mike-mutuku-0a243a1bb/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/mike-mutuku-0a243a1bb/'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/mike-mutuku-0a243a1bb/'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/mike-mutuku-0a243a1bb/'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/mike-mutuku-0a243a1bb/'} className='hover:text-accent transition-all duration-300'>
        <RiDribbleLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/mike-mutuku-0a243a1bb/'} className='hover:text-accent transition-all duration-300'>
        <RiBehanceLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/mike-mutuku-0a243a1bb/'} className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine/>
      </Link>
    </div>
  )
};

export default Socials;
