import React from 'react'
import { useNavigate } from 'react-router-dom';


const CustomersTable = ({customer, handleDelete}) => {
    const navigate = useNavigate()
    const {name, company, email, number, notes, id} = customer;

   

  return (
    <tr className=' md:border-b hover:bg-gray-50'>
        <td data-label="Name" className=' p-3'>{name}</td>
        <td data-label="Company" className=' p-3'>{company}</td>
        <td data-label="Contact" className=' p-3'>
            <p><span className=' uppercase font-bold text-gray-800'>E-mail:</span> {email}</p>
            <p><span className=' uppercase font-bold text-gray-800'>Phone Number:</span> {number}</p>

        </td>
        <td data-label="Actions"className='p-3'>
           
            <button
                onClick={()=> navigate(`/edit/${id}`)}
                type='button'
                className=' bg-green-700 w-full p-2 uppercase text-white text-xs font-bold rounded-sm mb-2'
            >Edit</button>
            <button
                type='button'
                className=' bg-blue-700 w-full p-2 uppercase text-white text-xs font-bold rounded-sm mb-2'
                onClick={()=>navigate(`/${id}`)}
            >See</button>

            <button
                onClick={()=>handleDelete(id)}
                type='button'
                className=' bg-red-700 w-full p-2 uppercase text-white text-xs font-bold rounded-sm'
            >Delete</button>

        </td>

    </tr>
  )
}

export default CustomersTable