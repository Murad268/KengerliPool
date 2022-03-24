import React, {useState} from 'react';
import logo from "../../image/navbar/kəngərli.ut5kH-removebg-preview.png"
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = (props) => {
   const [nav, setNav] = useState(false)
   const [toggle, setToggle] = useState(true)
   const openMenu = () => {
      setNav(true)
      setToggle(false)
   }
   const closeMenu = () => {
      setNav(false)
      setToggle(true)
   }

   let className = nav?"navbar__menu navbar__menu_active":"navbar__menu"
  
   return (
         <>  
        {
           toggle?
           <div onClick={openMenu} className="tooggle__btn">
              <span></span>
              <span></span>
              <span></span>
           </div>
           :null
        }
         <div id='nav' className='Navbar'>
            <div className="container">
               <nav className="navbar">
                  <div className="navbar__image">
                     <img src={logo} alt="" />
                  </div>
                  <div className="navbar__center">
                     <ul>
                        <li><a href="#ad">Üstünlüklərimiz</a></li>
                        <li><a href="#con">Bizimlə əlaqə</a></li>
                        <li><Link to ="/galary" href="">Xidmətlərimiz və mallarımız</Link></li>
                        <li><a href="#ow">Bizim işlərimiz</a></li>
                     </ul>
                  </div>
                  <div  className="navbar__button">
                     <button onClick={() => props.modalClick()}>Sizinlə əlaqə saxlayaq</button>
                  </div>
               </nav>
            </div>
      </div>
 
         <div id='nav' className={className}>
            <div onClick={closeMenu} className="menu__close">X</div>
         <ul>
            <li><a href="#ad">Üstünlüklərimiz</a></li>
            <li><a href="#con">Bizimlə əlaqə</a></li>
            <li><Link to ="/galary" href="">Xidmətlərimiz və mallarımız</Link></li>
            <li><a href="#ow">Bizim işlərimiz</a></li>
         </ul>
      </div>
     
         </>
   );
};

export default Navbar;