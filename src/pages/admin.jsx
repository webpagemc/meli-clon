//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx";
import AddProductForm from "../components/forms/addProductForm.jsx";

import { useEffect, useState } from "react";

//api
import Products from "../api/products.api.js"

const AdminPage = () => {

    const [productsState, setProductsState] = useState([]);

    const getProducts = async() => {

        const products = await Products.getProducts();
        setProductsState(products);

    };

    useEffect(()=>{ getProducts() },[])

    return(

        <div className="admin-container-products">

            <DashboardHeader></DashboardHeader>
            <AddProductForm></AddProductForm>
                {
                    productsState.length == 0
                    ? <h1>Cargando Productos...</h1>
                    : productsState.map((element, index)=>{
                        return <div key={index}> 
                        <img style={{"width":"50px", "height":"50px", "margin":"10px"}} src={element.image} alt="" />
                        {element.title} - {element.price} 
                        <button style={{"margin":"20px"}}> Eliminar </button> </div>
                    })
                }
            
        </div>
    )

};

export default AdminPage;