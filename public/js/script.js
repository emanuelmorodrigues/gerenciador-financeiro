const registros = document.querySelectorAll('.tables tr')
const deleteBtn = document.querySelectorAll('.delete')
const editBtn = document.querySelectorAll('.edit')
const addBtn = document.querySelectorAll('.add')

// Editar

editBtn.forEach((edit)=>{
    edit.onclick = function(e){
        e.preventDefault()
        const id = edit.parentElement.parentElement.getAttribute('identificador')

        // Trocando a exibição dos botões
        const add = document.querySelector(`[identificador="${id}"] > td .add`)
        edit.style.display = "none";
        add.style.display = 'inline-block'

        // Tornando a linha editável
        const trChilds = document.querySelectorAll(`[identificador="${id}"] > .rowData`)
        trChilds.forEach((tr)=>{
            tr.setAttribute('contenteditable', 'true')
        })
        
        // Atualizando valores
        add.onclick = function(e){
            e.preventDefault()

            // Pegando os valores das linhas
            const obj = {
                descricao: trChilds[0].innerHTML,
                valor: trChilds[1].innerHTML,
                data: trChilds[2].innerHTML,
            }

            editarRegistro(id, obj)

            // Volta para o conteúdo não editável e icone de edit
            trChilds.forEach((tr)=>{
                tr.setAttribute('contenteditable', 'false')
            })
            edit.style.display = "inline-block";
            add.style.display = 'none'
            
        }

    }
})

function editarRegistro(id, obj){
    console.log(id, obj)
    fetch(`http://localhost:8081/atualizar/${id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });

    //Atualiza a tabela resumo
    somaGanhos()
    somaGastos()
    totalRestante()
}

// Deletar

deleteBtn.forEach((del)=>{
    del.onclick = function(e){
        e.preventDefault()
        // retorna o id da tag <tr>
        const id = del.parentElement.parentElement.getAttribute('identificador') 
        deletarRegistro(id)
        location.reload()
        
        // Atualiza resumo
        somaGanhos()
        somaGastos()
        totalRestante()
    }
})

function deletarRegistro(id){
    fetch(`http://localhost:8081/del/${id}`,{
        method: 'DELETE'});

}

// Buscar

const selectBusca = document.querySelector('.selectBusca')
const inputBusca = document.querySelector('.inputBusca')

selectBusca.onclick = function(e){
    if(selectBusca.value == "descricao"){
        inputBusca.setAttribute('type', 'text')
    } else if(selectBusca.value == "valor"){
        inputBusca.setAttribute('type', 'number')
    } else if(selectBusca.value == "data"){
        inputBusca.setAttribute('type', 'date')
    } 
}

// Resumo

const resultadoTotalGasto = document.querySelector('#valorTotalGasto')
const resultadoTotalGanho = document.querySelector('#valorTotalGanho')
const resultadoTotalRestante = document.querySelector('#valorTotalRestante')

function somaGanhos(){
    const totalGanho = document.querySelectorAll('.valorGanhos')
    const arrayGanhos = Array.from(totalGanho).map((ganho)=>{
        return parseFloat(ganho.innerHTML)
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    if(arrayGanhos.length > 0) return resultadoTotalGanho.innerHTML = `${arrayGanhos.reduce(reducer).toFixed(2)}`
    else return resultadoTotalGanho.innerHTML = 0
}


function somaGastos(){
    const totalGasto = document.querySelectorAll('.valorGastos')
    const arrayGastos = Array.from(totalGasto).map((gasto)=>{
        return parseFloat(gasto.innerHTML)
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    if(arrayGastos.length > 0) return resultadoTotalGasto.innerHTML = `${arrayGastos.reduce(reducer).toFixed(2)}`
    else return resultadoTotalGasto.innerHTML = 0
    
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
