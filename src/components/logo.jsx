import React from 'react'
import Logo from './assets/imgs/logo.svg'
import './logo.css'

export default function aLogo() {
    return (
        <div className="logo">
            <img className="logo-icon" src={Logo} alt="logo" />
            <h1 className="logo-description">LOCALIZE</h1>
        </div>
    )
}