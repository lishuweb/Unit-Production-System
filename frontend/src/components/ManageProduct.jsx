import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/manageProduct.css";

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
    console.log(data);

    const [rate, setRate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [cost, setCost] = useState(0);


    const handleCost = (event) => {
        event.preventDefault();
        data.map((item) => {
            const newCost = item.perSize*rate;
            setCost(newCost);
        });
    }
    console.log(cost, "cost")

return(
    <div className = "container">
        <h1>Manage Products</h1>
        {data.map((item,index) => (
            <p key={index} style={{ textAlign: "left", marginTop: "50px"}}>
                Product Name: {item.productName}<br/>
                Date: {item.date}
            </p>
        ))}
        <div className="tableDetails">
            <table className="insideTable">
                    <tr>
                        <th >S.N.</th>
                        <th >Fabric</th>
                        <th >Per Size</th>
                        <th >Rate</th>
                        <th >Quantity</th>
                        <th >Cost</th>
                        <th style={{marginLeft: "40px"}}>Assigned To</th>
                    </tr>
                    {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.fabric}</td>
                        <td>{item.perSize?.toFixed(4)}</td>
                        <td>
                            <input type="number" value={rate} onChange={(event) => setRate(event.target.value)} />
                        </td>
                        <td>
                            <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                        </td>
                        <td>
                            {/* <input value={item.perSize*rate} onChange={handleCost} /> */}
                            {/* <input value={cost} onChange={() => {
                                // const newCost = {item.perSize}*rate
                                setCost(item.perSize*rate)
                            }} /> */}
                            <input value={cost} onChange={handleCost} />
                        </td>
                        <td>
                            <select>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </table>
        </div>

        <div className="btn">
            <button>Manage</button>
        </div>
        
        
    </div>
        
    )
};

export default ManageProduct;