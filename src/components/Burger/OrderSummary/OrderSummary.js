import React from 'react'

import Auxillary from '../../../hoc/Auxillary';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            {igKey}: {props.ingredients[igKey]}
        </li>);
    });        
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>a delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>Cancel</button>
            <button>Continue</button>
        </Auxillary>
    )

};

export default orderSummary;