import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import axios from 'axios'

import App from '../App'

jest.mock('axios');

describe('App component', () => {
    it('should validate that the input and button are rendered', () => {

        render(<App />)

        const input = screen.getByPlaceholderText('Informe o CEP')
        const button = screen.getByTestId('btn-search')

        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('should validate the data returned from the API based on the value entered in the input', async () => {
        const data = {
            bairro: "Barra Funda",
            cep: "01153000",
            ddd: "11",
            localidade: "São Paulo",
            logradouro: "Rua Vitorino Carmilo",
            uf: "SP"
        }

        const inputValue = '01153000'

        axios.get.mockResolvedValue({ data });
        render(<App />)

        const input = screen.getByPlaceholderText('Informe o CEP')
        const button = screen.getByTestId('btn-search')

        userEvent.type(input, inputValue)
        userEvent.click(button)

        // Valida se as informações do CEP estão renderizadas na página
        expect(await screen.findByText(data.bairro)).toBeInTheDocument()
        expect(await screen.findByText(data.cep)).toBeInTheDocument()
        expect(await screen.findByText(data.ddd)).toBeInTheDocument()
        expect(await screen.findByText(data.localidade)).toBeInTheDocument()
        expect(await screen.findByText(data.logradouro)).toBeInTheDocument()
        expect(await screen.findByText(data.uf)).toBeInTheDocument()

        expect(await input.value).toBe(inputValue) // valida se o valor do input corresponde ao valor esperado
    })

    it('the input must contain 8 numbers, no more and no less', () => {
        render(<App />)

        const input = screen.getByPlaceholderText('Informe o CEP')

        userEvent.type(input, '12345678')
        expect(input.value).toHaveLength(8)
    })
})