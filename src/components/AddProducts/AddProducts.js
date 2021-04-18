import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "../Home/Header/HeaderControl/Header.css";
import Admin from '../Admin/Admin';
import adminService from '../../images/adminService.jpg'

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      productName: data.name,
      price: data.price,
      quantity: data.quantity,
      details: data.details,
      imageURL: imageURL
    };
    const url = `https://salty-stream-67621.herokuapp.com/addProduct`;
    console.log(eventData);

    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '9096ab08782293a3c1d93a0ab3b3dc63');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div>
      <Admin />
      <div>
        <h3 class="blockquote-footer px-5">
          WELCOMING YOU IN THE SERVICE ADDING PANEL<cite title="Source Title"></cite><br />
          --ADD SERVICES AS AN ADMIN!!<cite title="Source Title"></cite>
        </h3>

        <div className="row align-items-center emailCard  mt-0">
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={adminService} alt="" />
          </div>
          <div className="col-md-6 shadow p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="col-sm-15">
                <h3 htmlFor="" className="text-center">Add New Services</h3>
                <input name="name" type="text" placeholder="New Service Name" class="form-control" id="inputPassword" {...register("name")} />
              </div>
              <br />
              <div id="align" className="col-sm-15">
                <input name="Details" placeholder="About The Service" class="form-control" id="inputPassword" {...register("details")} />
              </div>
              <br />
              <div className="col-sm-15">
                <input name="Price" type="text" placeholder="Amount Of Money" class="form-control" id="inputPassword" {...register("price")} />
              </div>
              <br />
              <div className="col-sm-15">
                <input name="Quantity" type="text" placeholder="Default Quantity" class="form-control" id="inputPassword" {...register("quantity")} />
              </div>
              <br />
              <div className="col-sm-15">
                <input name="exampleRequired" type="file" class="btn btn-outline-light" onChange={handleImageUpload} />
              </div>
              <br />
              <input class=" btn btn-primary" type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;