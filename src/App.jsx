import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Inicio from "./Pages/Inicio";
import NewCustomer from "./Pages/NewCustomer";
import EditCustomer from "./Pages/EditCustomer"
import SeeCustomer from "./Pages/SeeCustomer";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="new" element={<NewCustomer/>}/>
          <Route path="edit/:id" element={<EditCustomer/>}/>
          <Route path=":id" element={<SeeCustomer/>}/>
        </Route>

       
      </Routes>
    </BrowserRouter>
  )
}

export default App
