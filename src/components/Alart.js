import React from "react";

export default function Alart(props){
    return(
        <div style={{height:'40px' }}>
        {props.alart && <div className= {`alert alert-${props.alart.type}`} role="alert">
            <h4 className="alert-heading">{props.alart.message} <strong>{props.alart.type}fully ! </strong> </h4>
        </div>}
    </div>
)
}