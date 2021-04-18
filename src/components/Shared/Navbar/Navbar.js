import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Computoria</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page"><Link to="/home">Home</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/customer">Customer</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/admin">Admin</Link></a>
                        </li>
                        <a class="nav-link">Name: {loggedInUser.name}</a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;