import React from 'react'
import './cardItem.css'
import copy from '../copy/copy'

export default function Card(props) {
    return (
        <div className="card-item">
            <img className="icon" src={props.icon} alt={props.id} onClick={() => copy(props.id)} />
            <div className="info">
                <strong className="title">{props.id.toUpperCase()}</strong>
                <textarea rows="2" type="text" className="description" id={props.id} value={props.value} placeholder="Sem informação" readOnly />
            </div>
        </div>
    )
}