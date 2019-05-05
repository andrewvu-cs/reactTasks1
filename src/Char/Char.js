import React from 'react';

const character = (props) => {
    let style = {
        'display' : 'inline-block',
        'border' : '1px solid black',
        'padding' : '16px',
        'margin' : '16px',
        'textAlign': 'center'
    }

    return(
        <div style={style} onClick={props.clicked}>{props.character} </div>
        );
}


export default character;