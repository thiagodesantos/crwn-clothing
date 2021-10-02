import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JSMFTHoxBoQi7RTUxywdBVd95QHeTa9PS6mj4bkPb3NK88dHFzpGDB3gdOBVAcL8mXHxWAoIDIDEsN6Bhus6HNy00pM0Sw2oA';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
            amount: priceForStripe,
            token: token
            }
        })
        .then(response => {
            alert('Pagamento de teste realizado com sucesso');
        })
        .catch(error => {
            console.log('Payment Error: ', error);
            alert(
                'Ocorreu um erro durante o processo de pagamento de teste. Por favor verifique os dados informados.'
            );
        });
    };

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