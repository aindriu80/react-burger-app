import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    Salad: 0.2,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalprice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]                  
            }
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalprice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]                      
            }
            return updateObject(state, updatedSt);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    Salad: action.ingredients.Salad,
                    Bacon: action.ingredients.Bacon,
                    Cheese: action.ingredients.Cheese,
                    Meat: action.ingredients.Meat
                },
                totalPrice: 4,
                error: false
            });
             
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});
            default:
                return state;
    }
};

export default reducer;