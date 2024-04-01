import React from 'react'
import Skill from './Skill'

export default function Service({selector,type,id,img1,img2,img3,desc1,desc2,desc3,screenSize}) {
  return (
    <section className={selector} id={id}>
                {screenSize 
                &&
                (<p className='text-primary-color'>
                    {type}
                </p>)}
                <div>
                    <Skill
                        img={img1}
                        desc={desc1}    
                    />
                    <Skill
                        img={img2}
                        desc={desc2}                    
                    />
                    <Skill
                        img={img3}
                        desc={desc3}                    
                    />
                </div>
    </section>
  )
}
