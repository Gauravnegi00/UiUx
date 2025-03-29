import React from 'react'
import Hand from "../assets/hand.webp";
import eComm from '../assets/eComm.mp4'
function HandCompo() {
  return (
    <div className='relative   min-w-full min-h-[1850px]   '>
        <div className='sticky h-full w-full top-0 left-[150px]'> 

        <img src={Hand}  alt="" />
        <video 
            src={eComm} 
            autoPlay 
            loop 
            muted 
            className="w-[295px] absolute top-[38px] left-[40%] rounded-[40px] h-[600px]  object-cover "
          />
        </div>
        
    </div>
  )
}

export default HandCompo