import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';



function KombunchaForm(props){

    function handleNewKombuncha(event){
        event.preventDefault();
        props.onNewKombuncha({
            brand:event.target.brand.value,
            price:event.target.price.value,
            flavor:event.target.flavor.value,
            stock:event.target.stock.value,
            
            id:v4()})
    }

    return (
        <React.Fragment>
            <form onSubmit = {handleNewKombuncha}>
                <input
                    type="text"
                    name="brand"
                    placeholder="brand" />
                    <br/>

                <input
                    type="text"
                    name="flavor"
                    placeholder="flavor" />
                    <br/>
                <input
                    type="text"
                    name="price"
                    placeholder="price" />
                    <br/>
                <input
                    type="text"
                    name="stock"
                    placeholder="stock" />
                    <br/>
                    
                    <button type="submit">Submit</button>


            </form>
        </React.Fragment>
    )
}

KombunchaForm.protoType = {
    onNewKombuncha: PropTypes.func
}




export default KombunchaForm;