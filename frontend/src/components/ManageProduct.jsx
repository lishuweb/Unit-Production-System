import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/manageproduct.css";

const ManageProduct = () => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetchData();
    }, []);

const fetchData = async() => {
    const result = await axios.get('http://localhost:3001/api/products/getOne');
    console.log(result.data, "result");
    setData(result.data);
    console.log(data, "data");
};
console.log(data)

    return(
    <div className = "container">
        <h1>Manage Products</h1>
        {data.map((item,index) => (
            <p key={index} style={{ textAlign: "left", marginTop: "50px"}}>
                Product Name: {item.productName}<br/>
                Date: {item.date}
            </p>
        ))}
        <table>
            
        </table>
        
    </div>
        
    )
};

export default ManageProduct;