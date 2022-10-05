import React, { useState } from 'react'
import './App.css'

import axios from 'axios'
import Logo from '../logo'
import Input from '../input'
import Card from '../card'

export default function Screen() {

    const [input, getInput] = useState('')
    const [cep, getCep] = useState('')

    function search() {
        axios.get(`https://viacep.com.br/ws/${input}/json/`)
            .then(resp => getCep(resp.data))
            .catch(() => alert('CEP Inválido!'))
    }

    return (
        <div className="screen">
            <Logo />
            <Input onChange={e => getInput(e.target.value)} value={input} onClick={() => search()} />
            <Card cep={cep.cep} cidade={cep.localidade} estado={cep.uf} ddd={cep.ddd} bairro={cep.bairro} logradouro={cep.logradouro} />
        </div>
    )
}