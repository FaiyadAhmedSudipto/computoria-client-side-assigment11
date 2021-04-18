import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import MyOrders from '../MyOrders/MyOrders';
import NavbarAgain from '../Shared/Navbar/NavbarAgain';
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const Book = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch(`https://salty-stream-67621.herokuapp.com/events/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handlePaymentSuccess = () => {
        const newBooking = { ...loggedInUser, ...selectedDate, ...event }
        fetch("https://salty-stream-67621.herokuapp.com/addBooking", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            {/* <Header /> */}
            <NavbarAgain />
            <div style={{ textAlign: 'center' }}>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{event.productName}</td>
                            <td>{event.quantity}</td>
                            <td>${event.price}</td>
                        </tr>
                    </tbody>
                </table>
                {/* <button onClick={handleBooking} variant="contained" class="btn btn-outline-info" color="primary">Book Now</button> */}
                <div className="mx-5">
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    <button onClick={handlePaymentSuccess} variant="contained" class="btn btn-outline-info" color="primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;