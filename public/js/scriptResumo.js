const resultadoTotalGasto = document.querySelector('#valorTotalGasto')
const resultadoTotalGanho = document.querySelector('#valorTotalGanho')
const resultadoTotalRestante = document.querySelector('#valorTotalRestante')

function somaGanhos(){
    const totalGanho = document.querySelectorAll('.valorGanhos')
    const arrayGanhos = Array.from(totalGanho).map((ganho)=>{
        return parseFloat(ganho.innerHTML)
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return resultadoTotalGanho.innerHTML = `${arrayGanhos.reduce(reducer).toFixed(2)}`
}


function somaGastos(){
    const totalGasto = document.querySelectorAll('.valorGastos')
    const arrayGastos = Array.from(totalGasto).map((gasto)=>{
        return parseFloat(gasto.innerHTML)
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return resultadoTotalGasto.innerHTML = `${arrayGastos.reduce(reducer).toFixed(2)}`
    
}

function totalRestante(){
    const resultado =
    resultadoTotalGanho.innerHTML - 
    resultadoTotalGasto.innerHTML

    resultadoTotalRestante.innerHTML = resultado.toFixed(2)

}

somaGanhos()
somaGastos()
totalRestante()