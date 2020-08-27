import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Allcourse.css'
const Allcourse = (props) => {
    console.log(props.allcourse.name)
    const {name,img,duration,price} = props.allcourse
    return (
        <div className="course"> 
            
          <div className="course-img">
              <img src={img} alt=""/>
          </div>
          <div className="course-name">
          <h2>{name}</h2>
    <p><small>Duration: {duration}</small></p>
    <p>Price: {price}</p>
    <br/>
    <button onClick={() => props.handleADDcourse(props.allcourse)} className="main-btn"><FontAwesomeIcon icon={faPlusSquare} /> ENROLL NOW</button>
          </div>
  
        </div>
    );
};

export default Allcourse;