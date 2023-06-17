import React from 'react';
import classes from './cat-card.module.css'

const CatCard = ({cat}) => {

    // TODO: get values from cat model
    const catImage = 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'

    return (
        <div className={classes.card}>
            <img src={catImage} alt={cat.name} className={classes.image} placeholder={cat.name}/>
            <h1>{cat.name}</h1>
            <p className={classes.title}>{cat.description}</p>
            <p>Последний раз кормили: {cat.lastTimeFed}</p>
            <p>
                <button className={classes.button}>Покормить!</button>
            </p>
        </div>
    );
};

export default CatCard;