import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Header from "./components/Header";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/client/about/About";
import Form from "./pages/client/form/Form";
import Catalog from "./pages/client/catalog/Catalog";
import Products from "./pages/client/products/Products";
import AddProducts from "./pages/admin/addProducts/AddProducts";
import ChangeProducts from "./pages/admin/changeProducts/ChangeProducts";
import UpdateProducts from "./pages/admin/updateProducts/UpdateProducts";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {/* Клиентская часть */}
                <Route path="/about" element={<About/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="catalog/:catalog_name" element={<Products/>}/>

                {/* Админ */}
                <Route path="/addProducts" element={<AddProducts/>}/>
                <Route path="/changeProducts/:catalog_name" element={<ChangeProducts/>}/>
                <Route path="/updateProducts/:catalog_name/:id" element={<UpdateProducts/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
    )
}

export default App;
