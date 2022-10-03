import React, {useContext} from 'react';

function ItemComponent(props) {
    const out = {
        display:'inline',
        backgroundColor: 'red',
    };
    const income = {
        display:'inline',
        backgroundColor: 'green',
    };

    const colorDiv = ()=>{
        if(parseInt(Object.values(props.value)) < 0)
        {
            return(
            <div style={out} >|</div>)
            }
        else{
            return(
            <div style={income} >|</div>)
            }

    }
    return (
            <div className='Item'>
                <div>
                    <p >{Object.keys(props.value)}</p>
                </div>
                <div>
                    <p>{Object.values(props.value)}$</p>
                </div>
                {colorDiv()}
            </div>
            );
}

export default ItemComponent;