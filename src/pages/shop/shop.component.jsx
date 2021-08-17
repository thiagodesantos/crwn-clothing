import React from 'react';

import CollectionPreview from '../../components/collection-preview.component/collection-preview.component.jsx';

import SHOP_DATE from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATE
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className="shop-page">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
        </div>)
    }
}

export default ShopPage