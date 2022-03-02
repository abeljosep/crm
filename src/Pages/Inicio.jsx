import React, { useEffect, useState } from "react";
import CustomersTable from "../Components/CustomersTable";
import Loading from "../Components/Loading";

import "../Styles/tableQuerie.css";

const Inicio = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const showCustomers = async () => {
      try {
        const url = `http://localhost:4000/clientes`;
        const fetchUrl = await fetch(url);
        const response = await fetchUrl.json();
        setCustomers(response);
        setLoading(!loading);
      } catch (error) {
        console.log(error);
      }
    };
    showCustomers();
  }, []);

  const handleDelete = (id) =>{
    const deleteCustomer = async() =>{
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const fetchUrl = await fetch(url, {
          method: "delete"
        })    
        const updatedCustomer = customers.filter(customer => customer.id !== id)
        setCustomers(updatedCustomer)
      } catch (error) {
        console.log(error)
      }
    }
    deleteCustomer()
  }
  return  (
    loading ?
      (<div>
        <h1 className=" text-blue-900 font-black text-4xl">Customers</h1>
        <p className=" mt-3">Manage your customers</p>

        <table className=" w-full mt-5 table-auto shadow bg-white">
          <thead className="mt-5">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Company</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <CustomersTable key={customer.id} customer={customer} handleDelete={handleDelete}/>
            ))}
          </tbody>
        </table>
      </div>)
    : 
      (<Loading />)
  )
};

export default Inicio;
