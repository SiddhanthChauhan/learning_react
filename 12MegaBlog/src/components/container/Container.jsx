import React from 'react'

function Container({children}) {
  return (
    //Note : If there is just one line to return , you can remove parantheses
    <div className='w-full max-w-7xl mx-auto px-4'>
        {children}
    </div>
  )
}

export default Container