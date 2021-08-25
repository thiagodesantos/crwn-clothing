import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JSMFTHoxBoQi7RTUxywdBVd95QHeTa9PS6mj4bkPb3NK88dHFzpGDB3gdOBVAcL8mXHxWAoIDIDEsN6Bhus6HNy00pM0Sw2oA';

    const onToken = token => {
        alert('Pago com Sucesso')
    }

    return (
        <StripeCheckout 
            locale="auto"
            label="Pagar Agora"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Total é $${price}`}
            amount={priceForStripe}
            panelLabel="Pagar Agora"
            token={onToken}
            stripeKey={publishableKey}            
        />
    );
};

export default StripeCheckoutButton;