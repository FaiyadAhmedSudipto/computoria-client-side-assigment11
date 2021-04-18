import Admin from '../Admin/Admin';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./Management.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Management = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://salty-stream-67621.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    const deleteProduct = (id) => {
        // const deleteProduct = (event, id) => {
        // console.log(event.target.parentNode)
        fetch(`https://salty-stream-67621.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log("deleted")
                // if (result) {
                //     event.target.parentNode.style.display = 'none';
                // }
            })
    }
    return (
        <div>
            <Admin />
            <div className="managementPage">
                <h3>Currently {bookings.length} service/s are available!</h3>
                {
                    bookings.map(book =>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">Product Name: {book.productName}</li>
                            <li class="list-group-item">Price: {book.price}</li>
                            <li class="list-group-item">Quantity: {book.quantity}</li>
                            <button onClick={() => deleteProduct(book._id)} class="btn btn-outline-light"><FontAwesomeIcon icon={faTrash} />Delete</button>

                            {/* ===>>>Tried to use event and hide(display:none) when remove/delete any product! */}
                            {/* <button onClick={(event) => deleteProduct(event, book._id)} class="btn btn-outline-light"><FontAwesomeIcon icon={faTrash} />Delete</button> */}
                        </ul>)

                }
            </div>
        </div>
    );
};

export default Management;



    // function deleteProduct(event, id) {
    //     console.log(event.target.parentNode);
    //     console.log(id);
    //     fetch('https://salty-stream-67621.herokuapp.com//delete/${id}', {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result) {
    //                 event.target.parentNode.style.display = 'none';
    //             }
    //             // console.log('Deleted Successfully')
    //         })
    // }