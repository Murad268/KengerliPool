import React from 'react';
import './galaryMenuItem.css'
const GalaryMenuItem = (props) => {
   let className = props.active?"galary__menu__item acviveClassMenuItemName":"galary__menu__item"
   const on = (id) => {
      props.function()
      props.changeColor(props.li.id)
   }
 
   return (
      <li className={className} onClick={on}>
        {props.name}
      </li>
   );
};

export default GalaryMenuItem;