const registros = document.querySelectorAll('.tables tr')
const deleteBtn = document.querySelectorAll('.delete')
const editBtn = document.querySelectorAll('.edit')

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
