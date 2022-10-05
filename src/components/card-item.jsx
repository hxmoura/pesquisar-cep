import React from 'react'

export default function CardItem(props) {
    return (
        <div className={props.class}>
            <img className="icon" src={props.icon} alt={props.id} onClick={props.click} />
            <div className="info">
                <strong className="title">{props.id.toUpperCase()}</strong>
                <input type="text" className="description" id={props.id} value={props.value} placeholder="Sem informação" readOnly />
            </div>
        </div>
    )
}