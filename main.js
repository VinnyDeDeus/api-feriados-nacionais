// API que retorna uma lista com os feriados nacionais de um determinado ano

import axios from "axios"
import PromptSync from "prompt-sync"

const input = PromptSync()

async function feriado(ano) {
    try {
        const resposta = await axios.get(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
        console.log("\nCalendario de Feriados " + ano + "\n-----")
        for(let i in resposta.data) {
            console.log("Feriado: " + resposta.data[i].name + "\nData: " + resposta.data[i].date + "\n-----")
        }
    } catch (erro) {
        console.log("Ano invalido!")
    }
}

const ano = input("Digite o ano: ")
feriado(ano)