import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "../Home/Header/HeaderControl/Header.css";
import reviewBg from '../../images/reviewBg.jpg'
import NavbarAgain from '../Shared/Navbar/NavbarAgain';

const AddReviews = () => {
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data => {
        const eventData = {
            quote: data.quote,
            name: data.name,
            date: data.date,
            from: data.from,
            email: data.email
        };
        const url = `https://salty-stream-67621.herokuapp.com/addReviews`;
        console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };


    return (
        <div>
            <NavbarAgain />
            <div>
                <div className="row align-items-center emailCard px-5 pb-5">
                    <div className="col-md-6 shadow p-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-sm-15">
                                <h3 htmlFor="" className="text-center">Write Your Thinking</h3>
                                <input name="Quote" type="text" placeholder="Your Valuable Opinion" class="form-control" id="inputPassword" {...register("quote")} />
                            </div>
                            <br />
                            <div id="align" className="col-sm-15">
                                <input name="Name" placeholder="Your Name" class="form-control" id="inputPassword" {...register("name")} />
                            </div>
                            <br />
                            <div className="col-sm-15">
                                <input name="Date" type="date" placeholder={new Date()} class="form-control" id="inputPassword" {...register("date")} />
                            </div>
                            <br />
                            <div className="col-sm-15">
                                <input name="From" type="text" placeholder="Address" class="form-control" id="inputPassword" {...register("from")} />
                            </div>
                            <br />
                            <div className="col-sm-15">
                                <input name="Email" type="text" placeholder="Email" class="form-control" id="inputPassword" {...register("email")} />
                            </div>
                            <br />
                            {/* <input type="submit" /> */}
                            <input class="btn btn-primary" type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src={reviewBg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;