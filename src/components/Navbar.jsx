import React, {useEffect, useState} from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {styles} from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#F7F7F7]`}
    >
          <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-secondary text-[18px] font-bold cursor-pointer '>
            Dario Simpson &nbsp; 
            <span className='sm:block hidden'>Software Engineering Student</span>
          </p>
        </Link>
      </div>  
    </nav>   
  )
}

export default Navbar