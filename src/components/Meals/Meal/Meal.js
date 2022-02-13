import React, {useRef,useState,useContext} from 'react';
import CartContext from '../../../store/cart-context';
import Button from '../../Button/Button';
import style from './Meal.module.scss'


const Meal = props => {

    const actualPrice = props.price.toFixed(2);
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    const context = useContext(CartContext)

    const addToCartHandler = (amount) => {
        context.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }

    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return null;
        }

        addToCartHandler(enteredAmountNumber)
        setAmountIsValid(true);
    }

  return (
      <form onSubmit={submitHandler}>
        <li className={style.li}>
            <div className={style.firstCol}>
                <h3>{props.name}</h3>
                <p className={style.description}>{props.description}</p>
                <p className={style.price}>${actualPrice}</p>
            </div>
            <div className={style.secCol}>
                <label htmlFor={props.id}>Amount
                    <input type="number" min={1} ref={amountRef} defaultValue={1} step={1} name={props.id} id={props.id} />
                </label>
                <Button type="submit">+Add</Button>
                {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
            </div>
        </li>
        </form>
  )
}

export default Meal;
