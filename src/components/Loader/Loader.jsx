import React from 'react';
import classes from './Loader.module.css';
import loader from "../../img/loader.svg";


const Loader = () => <div className={classes.loader}><img src={loader} alt='Loading...'/></div>;

export default Loader;