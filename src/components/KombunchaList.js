import React from 'react';
import Kombuncha from './Kombuncha'
import PropTypes from "prop-types"

function KombunchaList(props) {
    return (
        <React.Fragment>
            {props.kombunchaList.map((kombuncha) =>
            <Kombuncha 
                whenKombunchaClicked = {props.onKombunchaSelection}
                brand = {kombuncha.brand}
                price = {kombuncha.price}
                flavor = {kombuncha.flavor}
                stock = {kombuncha.stock}
                id = {kombuncha.id}
                key ={kombuncha.id} />
                
                
                
                )} 


        </React.Fragment>
    )


}
KombunchaList.propTypes = {
    kombunchaList: PropTypes.array,
    onKombunchaSelection: PropTypes.func
}


export default KombunchaList;