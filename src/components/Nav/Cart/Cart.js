import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from '../../Button/Button';
import style from './Cart.module.scss'
import cartContext from '../../../store/cart-context';

const Cart = (props) => {
    const context = useContext(cartContext);

    const btnClasses = ``

    const numberOfCartItem = context.items.reduce((currNumber,item) => {
      return currNumber + item.amount;
    },0)
    return (
      <div onClick={props.onModal} className={style.wrapper}>
      <Button icon={<FontAwesomeIcon icon={faShoppingCart} />} amount={numberOfCartItem===0 ? "0" : numberOfCartItem}>Your Cart</Button>
      </div>
    );
}

export default Cart;
