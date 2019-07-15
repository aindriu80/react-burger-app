import React, {Component} from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    Salad: 0.2,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
}

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});


    }

    removeIndredientHandler = (type) => {

    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;