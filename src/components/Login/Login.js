import React, { useContext } from 'react';
import Header from '../Home/Header/HeaderControl/Header';
import { useState } from 'react';
import { UserContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router';
import { handleGoogleSignIn, initializeLoginFramework, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager.js';
import "./Login.css"
import loginBg from '../../images/loginBg.jpg'



function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSingIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
    })

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }

    }
    const handleBlur = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value.length)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            // console.log("submitting")
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
        // e.preventDefault();  is used to stop reloading page when submitting anything.
    }



    return (
        <div>
            <Header />
            <div className="row">
                <div style={{ textAlign: 'center' }} className="col-md-6 mt-5">
                    {
                        user.isSingIn && <div>
                            <p>Welcome, {user.name}</p>
                            <p>You are signed in with this-, {user.email} email account.</p>
                            <img src={user.photo} alt=""></img>
                        </div>
                    }
                    <br />
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                    <label htmlFor="newUser">Create New Account</label>

                    <form onSubmit={handleSubmit}>
                        {/* <div class="d-flex justify-content-between"> */}
                        <div className="emailCard">
                            <div class="col-sm-4">
                                {newUser && <input type="text" class="form-control" id="inputPassword" name="name" onBlur={handleBlur} placeholder="Your Name" />}
                            </div>
                            <br />
                            <div id="align" class="col-sm-4" >
                                <input type="text" class="form-control" id="inputPassword" name="email" onBlur={handleBlur} placeholder="Your Email Address" required />
                            </div>
                            <br />
                            <div class="col-sm-4">
                                <input type="password" class="form-control" id="inputPassword" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                            </div>
                        </div>
                        <br />
                        <input class="btn btn-outline-secondary" type="submit" value={newUser ? 'New Account Sign Up' : "Loge In With Account"} />
                    </form>
                    <br />
                    <p class="text-danger">Please Use This One:-</p>
                    {
                        user.isSingIn ? <button onClick={signOut}>Sign Out</button> : <button class="btn btn-light" onClick={googleSignIn}>Sign In Using Google</button>
                    }
                    <br />
                    {/* ===>>> Avoid facebook auth for less time.  */}
                    {/* <button class="btn btn-light" onClick={fbSignIn}>SIgn In Using Facebook</button> */}
                    <p style={{ color: "red" }}>{user.error}</p>
                    {user.success && <p style={{ color: "green" }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={loginBg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
