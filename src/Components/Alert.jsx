import React from 'react'

const Alert = ({children}) => {
  return (
    <div className=' bg-red-700 p-5 text-center text-white uppercase font-bold mt-3' >{children}</div>
  )
}

export default Alert