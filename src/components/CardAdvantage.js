import React from 'react';

export default function CardAdvantage(props) {
    return (
        <div className="card_advantage">
          <img src={props.img} alt={props.title}/>
          <h5>{props.title}</h5>
          <div>{props.descr}</div>
        </div>
    )
}