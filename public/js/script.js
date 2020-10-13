const registros = document.querySelectorAll('.tables tr')
const deleteBtn = document.querySelectorAll('.delete')
const editBtn = document.querySelectorAll('.edit')
const addBtn = document.querySelectorAll('.add')
const searchBtn = document.querySelector('.btn-outline-success')

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
}



searchBtn.onclick = function(e){
    let nome = 'emanuel'
    e.preventDefault()
    fetch("http://localhost:8081/teste",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: nome})
    });
}

deleteBtn.forEach((del)=>{
    del.onclick = function(e){
        e.preventDefault()
        // retorna o id da tag <tr>
        const id = del.parentElement.parentElement.getAttribute('identificador') 
        deletarRegistro(id)
        location.reload()
    }
})

function deletarRegistro(id){
    fetch(`http://localhost:8081/del/${id}`,{
        method: 'DELETE'});

}
