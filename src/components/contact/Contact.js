import React, {useState} from 'react';
import place from "../../image/contact/place.png" 
import tel from "../../image/contact/dial-pad.png"
import mes from "../../image/contact/email.png"
import WaitSpinner from '../waitSpinner/WaitSpinner';
import SuccesModal from '../succesModal/SuccesModal';
import Services from '../../Services/Services';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'
import './contact.css'
import * as emailjs from 'emailjs-com';
const Contact = (props) => {

   
   



   function sendEmail(e) {
   
      e.preventDefault();
            emailjs.sendForm('gmail', 'template_qn1jocy', e.target, '0ncNyOqSJZrBqMs6c')
          .then((result) => {
              props.success()
              props.exitLoad()
          }, (error) => {
              props.doError()
              props.exitLoad()
          });
          e.target.reset();
      }



   return (
      <div id='con' className='Contact'>
         <div className="container">
               <div className="contact__tittles">
                  <h2>Bizimlə əlaqə saxlayın</h2>
                  <h4>Hər hansı bir sualınız var? Bizimlə birbaşa əlaqə saxlamaqdan çəkinməyin. Komandamız sizə kömək etmək üçün bir neçə saat ərzində sizə qayıdacaq.</h4>
               </div>
               <div className="contact__column">
                  <div className="form__block">
                  {
                          props.loading?
                          <WaitSpinner/>
                          :null
                       }
                       <Formik
                       initialValues = {{
                           name: '',
                           email: '',
                           phone: '',
                           subject:'',
                           message: ''
                       }}
                       validationSchema = {Yup.object({
                           name: Yup.string().required('Sizə müraciətiət etmək üçün adınızı qeyd etməyinizi xahiş edirik'),
                           email: Yup.string().email().required('Xahiş edirik poç ünvanınızı düzgün daxil edəsiniz'),
                           phone: Yup.string().required('Xahiş edirik sizinlə  ir başa əlaqə saxlaya bilməyimiz üçün nömrənizi daxil edəsiniz'),
                           subject: Yup.string().required('Xahiş bildirişinizin nə barədə olduğunu qeyd edəsiniz'),
                           message: Yup.string().required('This field is required'),
                       })}
                        onSubmit  = { (values, {resetForm})=> {
                           console.log("a")
                        }}
                    >
                      
                        <Form onSubmit={sendEmail}>
                              <div className="top">
                                 <Field   placeholder='adınızı daxil edin' id='name' name='name' type="text" />
                                 <Field  placeholder='poçt ünvanınız' id='email'name='email' type="email" />
                              </div>
                                 <FormikErrorMessage component="div" className="char__search-error" name="name" />   
                                 <FormikErrorMessage component="div" className="char__search-error" name="email" />   
                                 <Field   placeholder='bildirişinizin mövzusu' id='subject' name="subject" type="text" />
                                 <FormikErrorMessage component="div" className="char__search-error" name="subject" />  
                                 <Field  placeholder='nömrənizi daxil edin' id='text' name="phone" type="text" />
                                 <FormikErrorMessage component="div" className="char__search-error" name="phone" />   
                                 <Field as="textarea"  placeholder='Nə isə bildirmək istəyirsiniz?' name='message' id="text" ></Field>
                                 <FormikErrorMessage component="div" className="char__search-error" name="message" />   
                                 <button className='contactSendButton' onClick={(props.load)} type='submit'>Göndər</button>
                           </Form>
                       </Formik>
                  </div>
                  <div className="icons__blocks">
                     <div className="icon__block">
                        <img src={place} alt="" />
                        <div className="icon__block__desc">San Francisco, CA 94126, USA</div>
                     </div>
                  <div className="icon__block">
                     <img src= {tel} alt="" />
                     <div className="icon__block__desc">+ 01 234 567 89</div>
                     </div>
                  <div className="icon__block">
                        <img src={mes} alt="" />
                        <div className="icon__block__desc">contact@mdbootstrap.com</div>
                  </div>
                  </div>
               </div>
         </div>
 
      </div>
   );
};

export default Contact;