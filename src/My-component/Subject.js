import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Subject.css'
import Allcourse from './Allcourse';
import Addcart from './Addcart';


const Subject = () => {
   const First12 = fakeData.slice(0,12);
   const [subjects,setSubjects] = useState(First12);
   const [cart,setCart] = useState([])
   const handleADDcourse = (allcourse) => {
    console.log('shimul',allcourse)
    const newcart = [...cart,allcourse];
    setCart(newcart)
   }
    return (
        <div className="main-container">

            <div className="course-container">
         
                {
                    subjects.map(subject => <Allcourse handleADDcourse={handleADDcourse} allcourse={subject}></Allcourse>)
                }
         
            </div>
            
           <div className="cart-container">
            <Addcart cart={cart}></Addcart>
           </div>
           
        </div>
    );
};

export default Subject;