import React from 'react';

function Child(props){
    return(
        <div>
            <h1> Hello {props.name} </h1>
        </div>
    );
}

export default Child;