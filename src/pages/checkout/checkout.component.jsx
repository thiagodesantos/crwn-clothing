import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartIems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Produto</span>
            </div>
            <div className="header-block">
                <span>Descrição</span>
            </div>
            <div className="header-block">
                <span>Quantidade</span>
            </div>
            <div className="header-block">
                <span>Preço</span>
            </div>
            <div className="header-block">
                <span>Remover</span>
            </div>
        </div>
        {
            cartIems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className="total">Total: ${total}</div>
        <div className="test-warning">
            *Por favor use os seguintes dados de teste para o cartão de credito no pagamento*
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartIems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);