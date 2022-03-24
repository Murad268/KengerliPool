import React from 'react';
import './succesModal.css'
import succes from '../../image/mail/succes.png'
import close from '../../image/mail/close.png'
const SuccesModal = (props) => {
   return (
      <div className='SuccesModal'>
         <div onClick={props.exodSucces} className="success__exit">
                  <img src={close} alt="" />
         </div>
         <div className="succesModal__block">        
               <div className="succes__img">
                  <img src={succes} alt="" />
               </div>
               <div className="succes__desc">Sizin bildirişiniz uğurla yerinə çatdırılmışdır. Sizinlə tezliklə əlaqə saxlanılacaq</div>
         </div>
      </div>
   );
};

export default SuccesModal;