import React from 'react';
import PropTypes from 'prop-types';

function KombunchaDetails(props) {
    const {kombuncha, onClickingDelete,onSellingKombuncha} = props;
    return (
        <React.Fragment>
            <h1>Kombuncha Details</h1>
            <h2>Kombuncha Brand:{kombuncha.brand}</h2>
            <h2>Kombuncha Flavor:{kombuncha.flavor}</h2>
            <h2>Kombuncha Price:{kombuncha.price}</h2>
            <h2>Kombuncha Stock:{kombuncha.stock}</h2>
            <button onClick={() => onClickingDelete(kombuncha.id)}>Purge Kombuncha Inventory</button>
            <button onClick={() => onSellingKombuncha(kombuncha.id)}>Sell a bottle</button>
        </React.Fragment>
    )

}

KombunchaDetails.protoType = {
    Kombuncha: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onSellingKombuncha: PropTypes.func
}


export default KombunchaDetails;