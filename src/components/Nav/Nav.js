import React from 'react';
import Cart from './Cart/Cart';
import style from './Nav.module.scss'
import heroimg from '../../assets/herojpg/heroimg.jpg'

const Nav = (props) => {
  return (
    <>
        <nav className={style.nav}>
            <h1>ReactMeals</h1>
            <Cart onModal={props.onModal}/>
        </nav>
        <div className={style.heroDiv}>
            <img src={heroimg} alt="heroImg" />
        </div>
    </>
  );
}

export default Nav;
