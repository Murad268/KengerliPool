import React, {useState, useEffect} from 'react';
import './galary.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Services from '../../Services/Services';
import GalaryItem from '../galaryItem/GalaryItem';
import Spinner from '../spinner/Spinner';
import GalaryMenuItem from '../galaryMenuItem/GalaryMenuItem.js';
import ph from '../../image/navbar/kəngərli.ut5kH-removebg-preview.png'
import upF from '../../image/up/up-arrow-png-27176-Windows.ico'
const Galary = () => {
   const all = new Services()
   const [states, setStates] = useState([])
   const [load, setLoad] = useState(false)
   const [up, setUp] = useState(false)
   const [lis, setLis] = useState([
      {id:1, name:"Bütün mallarımız", function: () => getResource("all"), active: true},
      {id:2, name:"Filtirasiya sistemləri", function: () => getResource("filter"), active: false},
      {id:3, name:"Mozaika", function: () => getResource("mozaik"), active: false},
      {id:4, name:"İzolasion və yapşdırıcılar", function: () => getResource("izol"), active: false},
      {id:5, name:"Hovuz dərmanları", function: () => getResource("der"), active: false},
      {id:6, name:"Hovuz aksesuarları", function: () => getResource("acc"), active: false},
      {id:7, name:"Sauna sistemləri", function: ( )=> getResource("sauna"), active: false}
    ])
   const getResource = (resors= "all") => {
      setLoad(true)
      all.getData(`http://localhost:3000/${resors}`).then(res=> {
         setStates(res)
         setLoad(false)
      })
   }
   useEffect(() => {
      getResource()
   }, [])

   const changeColor = (id) => {
      setLis(prev=>{
         return prev.map(pre => {
            pre.active = false
            if(id == pre.id) {
               return {
                  ...pre, active: !pre.active
               }
            }
            return pre
         })
      })
   }
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
   return (
      <div id='gal' className='galary'>
         <Helmet>
         <meta
               name="description"
               content="Web site created using create-react-app"
            />
         
            <title>Mallarımız və xidmətlərimiz</title>
         </Helmet>
         <div className="container">
            <div className="galary__wrapper">
               <div className="galary__menu">
                     <div className='menu__Img'>
                        <img src={ph}alt="" />
                     </div>
                     <ul className="galary__menu__items">
                           {
                              lis.map(li=> {
                                 return <GalaryMenuItem changeColor={changeColor} active={li.active} name={li.name} function = {li.function}  li={li} key={li.id}/>
                              })
                           }
                             <div className='linkDiv'>
                              <Link className='PrevLink' to="/">Ana səhifə</Link>
                            </div>
                           
                     </ul>
                   
               </div>
               <div className="galary__items">
                     {
                        load?
                          <div style={{"width": "max-content", marginLeft: "130px"}}>
                             <Spinner/>
                          </div>
                        : states.map(state=>{
                           return <GalaryItem state={state} key={state.id}/>
                        })
                     }
               </div>
            </div>
            </div>
            {
        up?
        <a style={{"display": "block", "position": "fixed", "bottom": "5px", "right": "5px", "cursor": "pointer"}} href="#gal">
          <img style={{"width": "50px", "height": "50px", "objectFit": "fill"}} src={upF} alt="" />
        </a>
        :null
      }
      </div>
   );
};

export default Galary;