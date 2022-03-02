import React from 'react'
import Formm from '../Components/Formm'

const NewCustomer = () => {
  return (
    <div>
        <h1 className='text-blue-900 font-black text-4xl '>New Customer</h1>
        <p className='mt-3'>Fill in the fields to add a new customer</p>
        
        <Formm/>
    </div>
  )
}

export default NewCustomer