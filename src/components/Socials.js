import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <a className='flex gap-5 items-center text-base' href={item.href} target={"blank"}>
              {item.icon}{item.description?item.description:null}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
