import React from 'react';
import wait from '../../image/mail/Spinner-3.gif'
import './waitSpinner.css'
const WaitSpinner = () => {
   return (
      <div className='WaitSpinner'>
         <div className="wait__block">
            <img className="wait__block" src={wait} alt="" />
         </div>
      </div>
   );
};

export default WaitSpinner;