import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Button from '../Button/Button';
import MealOrderItem from '../MealOrderItem/MealOrderItem';
import style from './Modal.module.scss'



const Modal = (props) => {
    const orderFn = () => {
        //TODO
        console.log(`ordering...`)
    }

    const context = useContext(CartContext)

    const fixedTotalAmount = context.totalAmount.toFixed(2)
    

    const cartItemRemoveHandler = id => {
        context.removeItem(id);
    };
    const cartItemAddHandler = item => {
        context.addItem({...item, amount:1})
    };
    return (
    <>
        <div onClick={props.onModal} className={props.isActive ? `${style.modal} ${style.show}` : `${style.modal} ${style.hide}`}>
            
        </div>
        <div className={props.isActive ? `${style.info} ${style.show}` : `${style.info} ${style.hide}`}>
        <ul className={style.ul}>
            {context.items.map((item) => (
                <MealOrderItem key={item.id} name={item.name} price={item.price.toFixed(2)} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
            ))}
        </ul>

            <div className={style.result}>
                <h3>Total Amount</h3>
                <p>${fixedTotalAmount}</p>
            </div>
            <div className={style.action}>
                <Button reversed onClickFn={props.onModal}>close</Button>
                {context.items.length !==0 ? <Button reversed onClickFn={orderFn}>order</Button> : null}
            </div>
        </div>


    </>

    )
}

export default Modal;
