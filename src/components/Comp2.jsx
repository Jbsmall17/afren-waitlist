import React, { useEffect,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile,faUserCog,faBalanceScale,faLock,faStar, faRobot,faHandshake, faLaptop,  faTasks } from '@fortawesome/free-solid-svg-icons'

export default function Comp2({features, desc,index,id}) {
    const clickHandler =() => {
        const targetElement = document.getElementById(id)
        const targetPosition = targetElement.offsetTop - 103;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        })
    }
  return (
    <div className='feature-div' style={{backgroundColor: index%2 == 0 ? "#015B7E" : "#3AC3D6" }}>
        { id == "aimatchmaking"
          ? <FontAwesomeIcon icon={faHandshake} beat  size='2x' className='icon'/> 
          : id == "virtualworkspace"
          ? <FontAwesomeIcon icon={faLaptop} fade  size='2x' className='icon'/>
          : id == "projectmangement"
          ? <FontAwesomeIcon icon={faTasks} beat  size='2x' className='icon'/>
          : id == "securepayment"
          ? <FontAwesomeIcon icon={faLock} beatFade  size='2x' className='icon'/>
          : id == "legalsupport"
          ? <FontAwesomeIcon icon={faBalanceScale} shake  size='2x' className='icon'/>
          : id == 'profiles'
          ? <FontAwesomeIcon icon={faUserCog} beat  size='2x' className='icon'/>
          : id == "reviews"
          ? <FontAwesomeIcon icon={faStar} spin  size='2x' className='icon'/>
          : <FontAwesomeIcon icon={faMobile} shake  size='2x' className='icon'/>
        }
      <p>{features}</p>
      <p>{desc.slice(0,50)+"...."}</p>
      <button onClick={clickHandler}>Read More</button>
    </div>
  )
}
