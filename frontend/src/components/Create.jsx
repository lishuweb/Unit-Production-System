import React from 'react';
import './css/create.css';
// import { TextField } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Create = () => {
    const [productName, setProductName] = useState("");
    const [fabric, setFabric] = useState("");
    const [weight, setWeight] = useState("");
    const [color, setColor] = useState("");
    // const [date, setDate] = useState("");
    const [meterSquare, setMeterSquare] = useState("");
    const [size, setSize] = useState([{}]);
    // const [perSize, setPerSize] = useState("");name
    console.log(productName)
    console.log(size, "size")

    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/products/pro', {
        productName, 
      fabric,
      weight,
      color,
    //   date,
      meterSquare,
      size
    }).then(res=>{
      console.log(res)
      if(res.data === "Success")
      {
        navigate('/manage')
      }
  })
  };

    return (
    <div className='container'>

        <div className='header'>
            <h1>Welcome!</h1>
            <h2>You can create your product details below</h2>
        </div>

        <div className='prodDetails'>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="prodName" className="col-sm-2 col-form-label">Product Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Name" 
                    value={productName}  onChange={(event) =>setProductName(event.target.value)}
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="fabric" className="col-sm-2 col-form-label">Fabric</label>
                    <input type="name" className="form-control" id="fabric" placeholder="Fabric" 
                    value={fabric}  onChange={(event) =>setFabric(event.target.value)}
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="weight" className="col-lg-2 col-form-label">Weight</label>
                    <input type="name" className="form-control" id="weight" placeholder="Weight" 
                    value={weight}  onChange={(event) =>setWeight(event.target.value)}
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
                    <input type="name" className="form-control" id="color" placeholder="Color" 
                    value={color}  onChange={(event) =>setColor(event.target.value)}
                    />
                </div>
                {/* <div className="form-group row">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="Date" 
                    value={date}  onChange={(event) =>setDate(event.target.value)}
                    />
                </div> */}
                <div className="form-group row">
                    <label htmlFor="meterSquare" className="col-sm-2 col-form-label">Meter Square</label>
                    <input type="text" className="form-control" id="meterSquare" placeholder="Meter Square" 
                    value={meterSquare}  onChange={(event) =>setMeterSquare(event.target.value)}
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="sizes" className="col-sm-2 col-form-label">Size</label>
                    <select name="size" id="size" multiple value={size}  onChange={(event) =>setSize(Array.from(event.target.selectedOptions).map(option => option.value))} >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                {/* <div className="form-group row">
                    <label for="perUnit" className="col-sm-2 col-form-label">Per Unit Piece</label>
                    <textarea type="name" className="form-control" id="perUnit" placeholder="Per Unit Piece" 
                    value={perSize}  onChange={(event) =>setPerSize(event.target.value)}
                    />
                </div> */}
                
                
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    </div>
    
    );
};

export default Create;