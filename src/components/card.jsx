import React from 'react'
import './card.css'

import Location from './assets/imgs/location.svg'
import City from './assets/imgs/city.svg'
import State from './assets/imgs/state.svg'
import DDD from './assets/imgs/DDD.svg'
import District from './assets/imgs/district.svg'
import Street from './assets/imgs/street.svg'
import CardItem from './card-item'
import copy from './../copy/copy'

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="column">
                    <CardItem icon={Location} click={() => copy('CEP')} id="CEP" value={props.cep} class="card-item space-b" />
                    <CardItem icon={City} click={() => copy('Cidade')} id="Cidade" value={props.cidade} class="card-item space-b" />
                    <CardItem icon={State} click={() => copy('Estado')} id="Estado" value={props.estado} class="card-item" />
                </div>
                <div>
                    <CardItem icon={DDD} click={() => copy('DDD')} id="DDD" value={props.ddd} class="card-item space-b space-t" />
                    <CardItem icon={District} click={() => copy('Bairro')} id="Bairro" value={props.bairro} class="card-item space-b" />
                    <CardItem icon={Street} click={() => copy('Logradouro')} id="Logradouro" value={props.logradouro} class="card-item" />
                </div>
            </div>
            <div className="copy">
                <p className="text-copy">Clique no ícone para copiar</p>
            </div>
        </div>
    )
}