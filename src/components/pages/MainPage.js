import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Headers from '../header/Headers';
import Contact from '../contact/Contact';
import Advantages from '../advantages/Advantages';
import ContactModal from '../contactModal/ContactModal';
import OurWorks from '../ourWorks/OurWorks';
import SuccesModal from '../succesModal/SuccesModal';
import ErrorSucces from '../errorSucces/ErrorSucces.js';
import Footer from '../footer/Footer'; 
import {Helmet} from "react-helmet";
import upF from '../../image/up/up-arrow-png-27176-Windows.ico'
function MainPage() {
  const [modalActive, setModalActive] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [up, setUp] = useState(false)


  const scrolling = () => {
   

    window.addEventListener("scroll", () => {
       if(document.documentElement.scrollTop > 650) {
          setUp(true)
       } else {
          setUp(false)
       }
    });
    
 };
 scrolling()
  
  const modalClick = () => {
      setModalActive(true)
      document.body.style.overflow="hidden"
  }
  const modalClickExit = () => {
      setModalActive(false)
      document.body.style.overflow=""
  }
  const success = () => {
    setSuccessModal(true)
  }
  const exodSucces = () => {
    setSuccessModal(false)
  }

  const doError = () => {
    setError(true)
  }
  const exitError = () => {
    setError(false)
  } 
  const load = () => {
    setLoading(true)
    
  }
  const exitLoad = () => {
    setLoading(false)
  }
  return (
    <div className="App">
        <Helmet>
        <meta
          name="description"
          content="Ana səhifə"
        />
      
        <title>Kəngərli Hovuz</title>
        </Helmet>
        <Navbar  modalClick={modalClick}/>
        <Headers/>
        <Advantages/>
        <ContactModal loading={loading} load={load} exitLoad={exitLoad} doError={doError} success={success} modalClickExit={modalClickExit} modalActive={modalActive}/>
        <Contact loading={loading} load={load} exitLoad={exitLoad} doError={doError} success={success}/> 
   
         <OurWorks/>
     
        {
        error  ?
        <ErrorSucces exitError={exitError}/>
        :null
        }
        {
          successModal  ?
          <SuccesModal exitError={exitError} exodSucces={exodSucces}/>
          :null
        }
      <Footer/>
      {
        up?
        <a style={{"display": "block", "position": "fixed", "bottom": "5px", "right": "5px", "cursor": "pointer"}} href="#hed">
          <img style={{"width": "50px", "height": "50px", "objectFit": "fill"}} src={upF} alt="" />
        </a>
        :null
      }
    </div>
  );
}

export default MainPage;
