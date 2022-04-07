import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPalButtons } from '@paypal/react-paypal-js';
import OtherPaypal from './OtherPaypal';
import { useState } from 'react';
import Paypal from './Paypal';

const Payment = () => {

    const [checkout, setCheckOut] = useState(false);

    return (
        <>
            <h3> Payment </h3>
            {checkout ? (
                <Paypal />
            ) : (
                <button
                    onClick={() => {
                        setCheckOut(true);
                    }}
                >
                    Checkout
                </button>
            )}
        </>
    );
}

export default Payment;