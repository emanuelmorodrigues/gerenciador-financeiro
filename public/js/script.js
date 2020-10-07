const form = document.forms[0]
const valor = form.elements['valor']
const desc = form.elements['descricao']
const dataForm = form.elements['data']
const gastoGanho = form.elements['opcao-add']
const btn = document.querySelector("#add-gasto-ganho")


const gasto = document.querySelector(".gastos table tbody")
const ganho = document.querySelector(".ganhos table tbody")

function addElemento(tagName, className = ''){
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

function parseData(data){
    const arrayData = data.split('-')
    return `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`
}

function addLinha(desc, valor, data){
    const formatData = parseData(data)
    return `<td>${desc}</td><td>R$${valor}</td><td>${formatData}</td>`
} 

function addRegistro(){
    const linhaTabela = addElemento('tr')
    linhaTabela.innerHTML = addLinha(desc.value, valor.value, data.value)
    console.log(linhaTabela)
    if(gastoGanho.value == 'gastos') gasto.appendChild(linhaTabela)
    else if(gastoGanho.value == 'ganhos') ganho.appendChild(linhaTabela)  
}

btn.onclick = function(e){
    addRegistro()
}