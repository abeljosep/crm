import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const actualUrl = location.pathname 
    
  return (
    <div className="md:flex">
        <div className='md:w-1/4  bg-blue-900 md:h-screen sticky top-0 px-5 py-10'>
            <h1 className='mt-10 text-center text-white font-black text-2xl'>CRM - Customers</h1>

            <nav className=' mt-10  font-bold '>
                <Link className={`${actualUrl==="/" ? "text-blue-400" : "text-white" } block hover:text-blue-300`} to="/">Customers</Link>
                <Link className={`${actualUrl==="/new" ? "text-blue-400":"text-white"} hover:text-blue-300`} to="/new">New Customers</Link>
            </nav>
        </div>
        <div className='md:w-3/4 md:mx-50 p-10 mt-10  md:h-screen md:overflow-scroll overflow-auto'>
            <Outlet />
        </div>
    
    
    </div>
  )
}

export default Layout