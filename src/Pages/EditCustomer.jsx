import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formm from "../Components/Formm";
import Loading from "../Components/Loading";

const EditCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const urlToFetch = await fetch(url);
        const response = await urlToFetch.json();
        setCustomer(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(!loading);
    };
    getCustomer();
  }, []);

  return (
    loading ? <Loading /> :
      Object.keys(customer).length > 0 ? (
        <div>
          <h1 className="text-blue-900 font-black text-4xl ">Edit Customer</h1>
          <p className="mt-3">Fill in the fields to update an existing customer</p>
          <Formm customer={customer} />
        </div>
      ) : (
        <div className=" min-h-full">
          <h1 className="uppercase text-red-700 text-2xl font-black">
            This is not a valid customer
          </h1>
        </div>
      )
  )
};

export default EditCustomer;
