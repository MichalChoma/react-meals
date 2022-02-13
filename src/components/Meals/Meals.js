import React from 'react';
import style from './Meals.module.scss'
import {DUMMY_MEALS} from '../../assets/data/dummyMeals'
import Meal from './Meal/Meal';

function Meals() {

  return <section className={style.mealsWrapper}>

      <ul className={style.meals}>
        {DUMMY_MEALS.map(({id,name,description,price}) => (
            <Meal key={id} id={id} name={name} description={description} price={price}/>
        ))}
      </ul>

  </section>;
}

export default Meals;
