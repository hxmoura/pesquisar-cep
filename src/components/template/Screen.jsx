import React from 'react'
import './Screen.css'

import Logo from '../assets/imgs/logo.svg'
import Search from '../assets/imgs/search.svg'
import Location from '../assets/imgs/location.svg'
import City from '../assets/imgs/city.svg'
import State from '../assets/imgs/state.svg'
import DDD from '../assets/imgs/DDD.svg'
import District from '../assets/imgs/district.svg'
import Street from '../assets/imgs/street.svg'

export default function Screen() {
    return (
        <div className="screen">
            <div className="logo">
                <img className="logo-icon" src={Logo} alt="logo" />
                <h1 className="logo-description">LOCALIZE</h1>
            </div>
            <div className="input-search">
                <input className="input" type="text" maxLength="8" placeholder="Informe o CEP" />
                <button className="btn-search">
                    <img className="icon-search" src={Search} alt="search" />
                </button>
            </div>
            <div className="card">
                <div className="column">
                    <div className="card-item space-b">
                        <img className="icon" src={Location} alt="img" />
                        <div className="info">
                            <strong className="title">CEP</strong>
                            <span className="description">000000-00</span>
                        </div>
                    </div>
                    <div className="card-item space-b">
                        <img className="icon" src={City} alt="img" />
                        <div className="info">
                            <strong className="title">CIDADE</strong>
                            <span className="description">São Paulo</span>
                        </div>
                    </div>
                    <div className="card-item">
                        <img className="icon" src={State} alt="img" />
                        <div className="info">
                            <strong className="title">ESTADO</strong>
                            <span className="description">SP</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-item space-b space-t">
                        <img className="icon" src={DDD} alt="img" />
                        <div className="info">
                            <strong className="title">DDD</strong>
                            <span className="description">011</span>
                        </div>
                    </div>
                    <div className="card-item space-b">
                        <img className="icon" src={District} alt="img" />
                        <div className="info">
                            <strong className="title">BAIRRO</strong>
                            <span className="description">Centro</span>
                        </div>
                    </div>
                    <div className="card-item">
                        <img className="icon" src={Street} alt="img" />
                        <div className="info">
                            <strong className="title">LOGRADOURO</strong>
                            <span className="description">Rua ABC</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p className="text-copy">Clique no ícone para copiar</p>
            </div>
        </div>
    )
}