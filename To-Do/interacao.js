const localStorageKey = 'To-Do-Lista'

function validarIfnovaTarefa(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let existe = values.find(x => x.name == inputValue) 
    return !existe ? false:true

}



function novaTarefa(){
    
    let input = document.getElementById('input-new-task')
     
    

    if(!input.value){
        alert('digite algo antes de adicionar')
        input.style.border = '1px solid red'
    }else if(validarIfnovaTarefa()){
        alert('A tarefa ja foi adicionada')
         input.style.border = '1px solid purple'
            }else {


           
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
         input.style.border = '1px solid green'
         
        mostrarValores()

        if(values.length >= 10){
            alert('Você já possui 10 tarefas acumuladas')
        }

        
    }
    input.value =''
    
}

function mostrarValores(){
    
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('lista-To-Do')
    list.innerHTML= ''
    for(let i = 0; i < values.length;i++){
        list.innerHTML += `<li>${values[i]['name'] } <button id='btn-ok' onclick="removeItem('${values[i]['name'] }')" ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg></button></li>`;
    }
}


function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name.toLowerCase().trim() === data.toLowerCase().trim());
    
    if (index === -1) {
        console.warn(`Item com o nome "${data}" não encontrado.`);
        return;
    }
    values.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    mostrarValores();
}

function quantidadeDeTarefas10(){
    console.log("Função chamada");
    
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  //  console.log(values); // Verifique o conteúdo do array
    
    if(values.length >= 10){
        alert('Você já possui 10 tarefas acumuladas');
    }
}


mostrarValores()


/**/