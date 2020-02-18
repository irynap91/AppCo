import React from 'react';

export default function CardPrice (props) {
    
    const renderDescr = () => {
       return props.descr.map(item => {
            return <li key={item}>{item}</li>
        })
    }
    return (
        <div className="cardPrice">
            <h6>{props.title}</h6>
            <img className='icon' src={props.img} alt={props.title}/>
            <div className='price'>{props.price}</div>
            <img className='line' src={require('../assets/img/line.png')} alt='Line'/>
            <div>
                <ul>{renderDescr()}</ul>
            </div>
            <input type='button' name='Purchase now' value='Purchase now'/>
        </div>
    )
}