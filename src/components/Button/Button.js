import React, { useState } from 'react';
import style from './Button.module.scss'

const Button = props => {
    const[scaleAnimation,setAnimation] = useState(0);

    function propsFnHandler(){
        setAnimation(1);
    }

    return (
        <button type={props.type ? props.type : "button"}className={props.reversed ? style.reversed : style.button} onClick={props.onClickFn}
            onAnimationEnd={() => setAnimation(0)} scaleanimation={scaleAnimation}>
            {props.icon ? <span>{props.icon}</span> : null}
            {props.children}
            {props.amount ? <div className={style.amount}>{props.amount}</div> : null}
        </button>
    )
}

export default Button;
