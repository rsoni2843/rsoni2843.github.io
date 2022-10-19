import React from 'react';

// import skill data
import { skills } from '../data';
const style = {
  display:"grid",
  gridTemplateColumns:"repeat(6,1fr)",
  gridTemplateRows:"repeat(auto)",
  margin:"auto",
  gap:'20px'
}
const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div
        style={style} 
          
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20 sm:h-16' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
