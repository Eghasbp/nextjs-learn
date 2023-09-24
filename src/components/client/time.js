import React from 'react'

const Time = ({data}) => {
  return (
    <div>
        <p className='text-base font-sans text-black'>{data.name}{data.email}</p>
    </div>
  )
}

export default Time