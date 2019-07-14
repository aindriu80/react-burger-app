import React from 'react'

import classes from './BuildControls.css';

const buildControl = (props) => (
    <div className={classes.buildControl}>
        <div className={classes.Label}>{props.lable}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;