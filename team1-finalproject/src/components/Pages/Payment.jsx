import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPalButtons } from '@paypal/react-paypal-js';

const Payment = () => {
    return (
        <>
            <h3> Payment </h3>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>

        </>
    );
}

export default Payment;