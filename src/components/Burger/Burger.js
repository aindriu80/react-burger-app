import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />           
            <BurgerIngredient type="Cheese" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="Meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;