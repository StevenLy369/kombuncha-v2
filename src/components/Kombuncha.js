import React from 'react';
import PropTypes from 'prop-types';

function Kombuncha(props) {
    return (
        <React.Fragment>
            <hr />
            <div onClick = {() => props.whenKombunchaClicked(props.id)}>
            <h2>Kombuncha Brand:{props.brand}</h2>
            <h2>Kombuncha Flavor:{props.flavor}</h2>
            <h2>Kombuncha Price:{props.price}</h2>
            <h2>Kombuncha Stock:{props.stock}</h2>
            

            </div>
           

            
        </React.Fragment>
    )
}

Kombuncha.propTypes = {
    brand: PropTypes.string,
    flavor: PropTypes.string,
    price: PropTypes.string,
    stock:PropTypes.string,
    id: PropTypes.string,
    whenKombunchaClicked: PropTypes.func
}



export default Kombuncha;