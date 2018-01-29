import React from "react";
import "./Images.css";

export const Images = (props) => {
  return (
    <div className="list-overflow-container">
    <img onClick={() =>{props.clickMe(props.id)}} src={props.url} ></img>
    </div>
  );
};