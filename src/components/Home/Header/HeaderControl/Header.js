import React, { useContext } from 'react';
import './Header.css';
import Navbar from '../../../Shared/Navbar/Navbar';

const Header = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default Header;