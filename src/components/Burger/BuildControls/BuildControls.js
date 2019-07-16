import React from 'react'

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'Salad'},
    { label: 'Bacon', type: 'Bacon'},
    { label: 'Cheese', type: 'Cheese'},
    { label: 'Meat', type: 'Meat'},
];

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}             
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable}>Order Now</button>
    </div>
);

export default buildControls;