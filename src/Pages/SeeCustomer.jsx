import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Components/Loading";



const SeeCustomer = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer] = useState({});
    
    useEffect(()=>{
        const seeCustomers = async () =>{
            try {
                const url =`http://localhost:4000/clientes/${id}` 
                const urlToFetch = await fetch(url);
                const response = await urlToFetch.json();
                setCustomer(response);
                
            } catch (error) {
                console.log(error)    
            }
            setLoading(!loading)
        }
    seeCustomers()
        
    },[]);
    
    const {name, company, email, number, notes} = customer;
    
    return (
        loading ? <Loading/> :
            Object.keys(customer).length > 0 ?(
                <div>
                    <p className=" mb-5 text-gray-700 font-bold text-2xl"> 
                        <span className=" uppercase font-black text-lg text-blue-800 mr-2">Customer:</span> 
                        {name}
                    </p>
                    <p className=" mb-5 text-gray-700 font-bold text-2xl"> 
                        <span className=" uppercase font-black text-lg text-blue-800 mr-2">company:</span> 
                        {company}
                    </p>
                    <p className=" mb-5 text-gray-700 font-bold text-2xl"> 
                        <span className=" uppercase font-black text-lg text-blue-800 mr-2">email:</span> 
                        {email}
                    </p>
                    <p className=" mb-5 text-gray-700 font-bold text-2xl"> 
                        <span className=" uppercase font-black text-lg text-blue-800 mr-2">tel number:</span> 
                        {number}
                    </p>

                    <p className=" mb-5 text-gray-700 font-bold text-2xl"> 
                        <span className=" uppercase font-black text-lg text-blue-800 mr-2">Customer ID:</span> 
                        #{customer.id}
                    </p>
                    {notes &&
                        <p className=" mb-5 text-gray-700 font-bold t2xt-2xl"> 
                            <span className=" uppercase font-black text-lg text-blue-800 mr-2">notes:</span> 
                            {notes}
                        </p>  
                        
                    }
                    
                </div>
            ): 
                <div className=" min-h-full">
                    <h1 className="uppercase text-red-700 text-2xl font-black">This is not a valid customer</h1>
                </div>
        
    )
}

export default SeeCustomer