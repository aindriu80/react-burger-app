import React, { Component } from 'react';

import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component { 
    // This could be a functional component, it doesn't have to be a class.
    componentWillUpdate() {
        console.log('[OrderSummary] willUpdate');
    }   
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                {igKey}: {this.props.ingredients[igKey]}
            </li>);
    });        
        return (
            <Auxillary>
            <h3>Your Order</h3>
            <p>a delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Auxillary>
        );
    }
} 

export default OrderSummary;