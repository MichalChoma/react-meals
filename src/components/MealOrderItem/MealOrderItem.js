import React from 'react';
import style from './MealOrderItem.module.scss'
import Button from '../Button/Button';

function MealFormOrder({name,price,amount,onRemove,onAdd}) {
  return (
    <div className={style.item}>
        <h3 className={style.name}>{name}</h3>
            <div className={style.itemInfo}>
                <div className={style.firstCol}>
                        <p className={style.price}>${price}</p>
                        <div className={style.amount}> x{amount} </div>
                </div>
                <div className={style.secCol}>
                        <Button reversed onClickFn={onRemove}>-</Button>
                        <Button reversed onClickFn={onAdd}>+</Button>
                </div>
            </div>
    </div>
  )

}

export default MealFormOrder;
