import React from 'react';
import './contactModal.css'



import location from "../../image/modalform/loaction.png"
import mail from "../../image/modalform/email.png"
import WaitSpinner from '../waitSpinner/WaitSpinner';
import phone from "../../image/modalform/phone.png"
import telegram from "../../image/modalform/telegram.png"
import close from "../../image/modalform/close.png"
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'
import * as emailjs from 'emailjs-com';
const ContactModal = (props) => {
  
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
         <>
            {
               props.modalActive?
   
                     <div className='ContactModal'>
                     <div onClick={props.modalClickExit} className='ContactModal__exit'><img src={close} alt="" /></div>
                     <div className="modalFormDivWrapper">
                        <div className="modalFormDiv">
                        {
                          props.loading?
                          <WaitSpinner/>
                          :null
                       }
                           <div className="modalFormDiv__tittle">Məlumatlarınızı daxil edin</div>
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
                           }}>
                              <Form onSubmit={sendEmail}>
                                 <Field id='modalName' name='name' type="text" placeholder='adınız'/>   
                                 <Field id='modalEmail' name='email' type="email" placeholder='poçt ünvanınız'/>
                                 <FormikErrorMessage component="div" className="char__search-error" name="name" />
                                 <FormikErrorMessage component="div" className="char__search-error" name="email" />  
                                 <Field id='modalohone' name='phone' type="text" placeholder='Telefon nömrəniz'/>
                                 <FormikErrorMessage component="div" className="char__search-error" name="phone" />  
                                 <Field name='subject' type="text" placeholder='məktubunuzun mövzusu'/>
                                 <FormikErrorMessage component="div" className="char__search-error" name="subject" />  
                                 <Field as="textarea" name="message" id="" placeholder='məktubunuz'></Field>
                                 <FormikErrorMessage component="div" className="char__search-error" name="message" />  
                                 <button onClick={(props.load)}>send message</button>
                              </Form>
                           </Formik>
                        </div>
                        <div className="formIconsDiv">
                           <div className="formIconsDiv__tittle">Contact us</div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={location} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Address</span>: 198 West 21th Street, Suite 721 New York NY 10016</div>
                           </div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={phone} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Phone</span>: + 1235 2355 98</div>
                           </div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={mail} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Email</span>: info@yoursite.com</div>
                           </div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={telegram} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Email</span>: agamedov94@Mail.ru</div>
                           </div>
                        </div>
                     </div>
               </div>
      
               :null
            }
         </>
   );
};

export default ContactModal;