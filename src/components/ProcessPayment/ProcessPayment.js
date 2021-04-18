import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeIUVFw4qIEkQok5qNiQ9TaTrtcRV11RbSArRJuK3nxCaZeVASSH4aXQApWtymGJ7OLvU23Cp9y9RiD6pR0lBXl00tO5nuc6f');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            {/* <MyCheckoutForm /> */}
            <SimpleCardForm handlePayment = {handlePayment}></SimpleCardForm>
            {/* <SplitCardForm></SplitCardForm> */}
        </Elements>
    );
};

export default ProcessPayment;