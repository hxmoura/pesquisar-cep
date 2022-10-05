import React from 'react'
import './input.css'
import Search from './assets/imgs/search.svg'

export default function Input(props) {

    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const btn = document.getElementById('enter')
            btn.click()
        }
    })

    return (
        <div className="input-search">
            <input className="input" type="number" placeholder="Informe o CEP" onChange={props.onChange} value={props.value} />
            <button className="btn-search" onClick={props.onClick} id="enter">
                <img className="icon-search" src={Search} alt="search" />
            </button>
        </div>
    )
}