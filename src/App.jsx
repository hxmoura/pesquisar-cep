import React, { useState } from 'react'
import './App.css'

import axios from 'axios'
import Logo from './components/logo'
import Input from './components/input'
import Card from './components/card'

export default function Screen() {

    const [input, setInput] = useState('')
    const [cep, setCep] = useState('')

    function search() {
        axios.get(`https://viacep.com.br/ws/${input}/json/`)
            .then(resp => setCep(resp.data))
            .catch(() => alert('CEP Inválido!'))
    }

    return (
        <div className="screen">
            <Logo />
            <Input onClick={() => search()} value={input} onChange={e => setInput(e.target.value)} />
            <Card cep={cep.cep} cidade={cep.localidade} estado={cep.uf} ddd={cep.ddd} bairro={cep.bairro} logradouro={cep.logradouro} />
        </div>
    )
}