import React from 'react';


const validation = (props) =>{
    let validMsg = "Text too short!";

    if (props.input.length > 4){
        validMsg = "Text long enough";
    }


    return(<div>{validMsg}</div>)
}


export default validation;