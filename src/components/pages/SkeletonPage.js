import React from 'react';
import {Link} from 'react-router-dom';
import './skeletonPage.css'
import errorImg from  '../../gif/5IJ.gif';
import { Helmet } from 'react-helmet';
const SkeletonPage = () => {
   
   return (
      <div className='SkeletonPage'>
         <Helmet>
         <meta
               name="description"
               content="Mallar və xidmətlər olan səhifə"
            />
         
            <title>Səhifə tapılmadı</title>
         </Helmet>
         <h2>Belə bir səhifə tapılmadı</h2>
         <Link to="/" href="">Ana səhifəyə qayıdın</Link>
        <img src={errorImg} alt="" />
      </div>
   );
};

export default SkeletonPage;