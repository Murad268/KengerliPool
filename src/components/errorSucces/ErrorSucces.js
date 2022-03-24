import React from 'react';
import './errorSucces.css'
import error from '../../image/mail/errorr.png'
import close from '../../image/mail/close.png'
const ErrorSucces = (props) => {
   return (
      <div className='SuccesModal'>
         <div onClick={props.exitError} className="success__exit">
                  <img src={close} alt="" />
         </div>
         <div className="succesModal__block">        
               <div className="succes__img">
                  <img src={error} alt="" />
               </div>
               <div className="succes__desc">Məktubun göndərilməsində müəyyən səhvlər baş verdi. Xahiş edirik sonra yenidən cəhd edəsiniz</div>
         </div>
      </div>
   );
};

export default ErrorSucces;