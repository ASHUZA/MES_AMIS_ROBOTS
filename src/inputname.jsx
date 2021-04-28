import React from "react";
import './input.css';

const InputPage = (props) => {
  return (
  
    <div className="md-form">

    <input onChange={props.onChange} type="search" placeholder="Rechercher par nom" className="form-control"  id="form1" />
    
    
  </div>
  
    );
}

export default InputPage;