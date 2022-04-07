import paypal from "paypal-checkout"

const OtherPaypal = () => {
    return (
        <>
            <div id="smart-button-container">
                <div style="text-align: center;">
                    <div id="paypal-button-container"></div>
                </div>
            </div>
            <script src="https://www.paypal.com/sdk/js?client-id=AYTBq5Q7ZSt1zCmNG_CgAG7yrrUpH3mWcufhG1IuvUG6ecjrLby_oE0PkHFLWj1SEvstv0Oh_W9wJVnj&enable-funding=venmo&currency=GBP" data-sdk-integration-source="button-factory"></script>
            <script>
                function initPayPalButton() {
                    paypal.Buttons({
                        style: {
                            shape: 'rect',
                            color: 'gold',
                            layout: 'vertical',
                            label: 'paypal',

                        },

                        createOrder: function (data, actions) {
                            return actions.order.create({
                                purchase_units: [{ "amount": { "currency_code": "GBP", "value": 6 } }]
                            });
                        },

                        onApprove: function (data, actions) {
                            return actions.order.capture().then(function (orderData) {

                                // Full available details
                                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                                // Show a success message within this page, e.g.
                                const element = document.getElementById('paypal-button-container');
                                element.innerHTML = '';
                                element.innerHTML = '<h3>Thank you for your payment!</h3>';

                                // Or go to another URL:  actions.redirect('thank_you.html');

                            });
                        },

                        onError: function (err) {
                            console.log(err);
                        }
                    }).render('#paypal-button-container')
                }
                initPayPalButton();
            </script>
        </>
    );
}

export default OtherPaypal;