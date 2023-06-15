import React from 'react';
import classes from './cat-card.module.css'

const CatCard = (cat) => {

    // TODO: get values from cat model
    const catImage = 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'
    const catName = 'Boris'

    return (
        <div className={classes.card}>
            <img src={catImage}  alt="Boris" className={classes.image}/>
            <h1>{catName}</h1>
            <p className={classes.title}>Хороший уличный кот</p>
            <p>Последний раз кормили: вчера в 21:10</p>
            <p><button>Покормить!</button></p>
        </div>
    );
};

export default CatCard;