const selectBusca = document.querySelector('.selectBusca')
const inputBusca = document.querySelector('.inputBusca')

// buscarBtn.onclick = function(e){
//     e.preventDefault()
//     fetch(`http://localhost:8081/atualizar/buscarTeste`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(obj)
//     });
// }

selectBusca.onclick = function(e){
    if(selectBusca.value == "descricao"){
        inputBusca.setAttribute('type', 'text')
    } else if(selectBusca.value == "valor"){
        inputBusca.setAttribute('type', 'number')
    } else if(selectBusca.value == "data"){
        inputBusca.setAttribute('type', 'date')
    } 
}

