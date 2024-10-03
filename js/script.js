const inputText = document.getElementById('task');
const tasklist = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

//* conectar o btnadd a ua funçao via js*/

btnAdd.addEventListener('click',function(){
   addtask();
})
function addtask(){

    if(inputText.value == ''){
        alert("voce precisa adicionar a descriçao a tarefa");
    }

   else{
    let li =document.createElement("li");
    li.innerHTML = inputText.value;
    tasklist.appendChild(li);
   }
//* limpando a caixa de texto para proxima tarefa*/
inputText.value = '';

}


