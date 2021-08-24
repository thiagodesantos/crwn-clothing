import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

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
        <div className="total">
            <span>Total: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartIems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);