import React from 'react'
import brackets from '../../public/assets/svg/Brackets'

const Tagline = ({className, children}) => {
  return (
    <div className={`tagline flex items-center 
    ${className} || ""`}>
      {brackets("left")}
      <div className='mx-3 text-n-3 rotate-'>{children}</div>
      {brackets("right")}
      
    </div>
  )
}

export default Tagline
