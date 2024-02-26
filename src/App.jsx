import React, { useState } from 'react'
import './App.css'

import axios from 'axios'

import Search from './assets/imgs/search.svg'
import Location from './assets/imgs/location.svg'
import City from './assets/imgs/city.svg'
import State from './assets/imgs/state.svg'
import DDD from './assets/imgs/DDD.svg'
import District from './assets/imgs/district.svg'
import Street from './assets/imgs/street.svg'
import Card from './components/cardItem'

export default function Screen() {

    const [input, setInput] = useState('')
    const [cep, setCep] = useState('')

    function search() {
        axios.get(`https://viacep.com.br/ws/${input}/json/`)
            .then(resp => {
                if (resp.data.erro) {
                    alert('CEP Inexistente ou não segue o padrão de conter apenas números!')
                }
                setCep(resp.data)
            })
            .catch(() => alert('CEP Inválido!'))
    }

    document.addEventListener('keypress', function (e) {
        const length = 7
        const btn = document.getElementById('enter')

        if (e.key === 'Enter') {
            btn.click()
        }

        if (e.target.value.length > length) {
            e.target.value = e.target.value.slice(0, length)
        }

    })

    return (
        <div className="screen">
            <section className="logo">
                <svg className="logo-icon" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 27.0833C28.4518 27.0833 31.25 24.2851 31.25 20.8333C31.25 17.3815 28.4518 14.5833 25 14.5833C21.5482 14.5833 18.75 17.3815 18.75 20.8333C18.75 24.2851 21.5482 27.0833 25 27.0833Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25 4.16666C20.5797 4.16666 16.3405 5.9226 13.2149 9.04821C10.0893 12.1738 8.33333 16.413 8.33333 20.8333C8.33333 24.775 9.17083 27.3542 11.4583 30.2083L25 45.8333L38.5417 30.2083C40.8292 27.3542 41.6667 24.775 41.6667 20.8333C41.6667 16.413 39.9107 12.1738 36.7851 9.04821C33.6595 5.9226 29.4203 4.16666 25 4.16666V4.16666Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h1 className="logo-text">LOCALIZE</h1>
            </section>
            <section className="input-search">
                <input className="input" type="number" placeholder="Informe o CEP" onChange={e => setInput(e.target.value)} value={input} />
                <button data-testId="btn-search" className="btn-search" onClick={() => search()} id="enter">
                    <img className="icon-search" src={Search} alt="search" />
                </button>
            </section>
            <section className="table">
                <div>
                    <Card value={cep.cep} id="CEP" icon={Location} />
                    <Card value={cep.localidade} id="Localidade" icon={City} />
                    <Card value={cep.uf} id="Estado" icon={State} />
                </div>
                <div>
                    <Card value={cep.ddd} id="DDD" icon={DDD} />
                    <Card value={cep.bairro} id="Bairro" icon={District} />
                    <Card value={cep.logradouro} id="Logradouro" icon={Street} />
                </div>
            </section>
            <section className="copy">
                <p className="text-copy">Clique no ícone para copiar</p>
            </section>
        </div>
    )
}