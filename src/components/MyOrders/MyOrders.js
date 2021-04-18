import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./MyOrder.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import NavbarAgain from '../Shared/Navbar/NavbarAgain';

const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const [appointments, setAppointments] = useState([]);

    // const handleDateChange = date => {
    //     setSelectedDate(date);
    // }

    // Tried to make admin access. But failed!

    // useEffect(() => {
    //     if (success) {
    //         fetch('https://salty-stream-67621.herokuapp.com/bookings?email=' + loggedInUser.email)
    //             .then(res => res.json())
    //             .then(data => setBookings(data));
    //     }
    //     else {
    //         fetch('https://salty-stream-67621.herokuapp.com/admins')
    //             .then(res => res.json())
    //             .then(data => setBookings(data));
    //     }
    // }, [] )

    // useEffect( () => {
    // fetch('https://salty-stream-67621.herokuapp.com/bookings')
    // .then(res=>res.json())
    // .then(data => setBookings(data))
    // }, [])

    useEffect(() => {
        fetch('https://salty-stream-67621.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    const removeProduct = (id) => {
        // console.log(id)
        fetch(`https://salty-stream-67621.herokuapp.com/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted")
            })
    }
    return (
        <div>
            <NavbarAgain />
            <div className="myOrderPage">
                <h3>You ordered {bookings.length} services</h3>
                {
                    bookings.map(book =>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">Service Name: {book.productName}</li>
                            <li class="list-group-item">Price: ${book.price}</li>
                            <li class="list-group-item">Quantity: {book.quantity}</li>
                            {/* <li class="list-group-item">Ordered Date:- {(new Date(book.checkIn).toDateString('dd/MM/yyy'))}</li> */}
                            <li class="list-group-item">Ordered Date:- {(new Date(book.checkIn).toDateString('dd/MM/yyy'))}</li>
                            <button onClick={() => removeProduct(book._id)} class="btn btn-light"><FontAwesomeIcon icon={faMinusCircle} />Remove</button>
                        </ul>)
                }
            </div>
        </div>
    );
};

export default MyOrders;