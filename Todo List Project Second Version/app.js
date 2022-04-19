const form = document.getElementById("addTaskForm");
const input = document.getElementById("txtTaskName");
const deleteAllBtn = document.getElementById("btnDeleteAll");
const taskList = document.getElementById("task-list");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addNewTodo);
    taskList.addEventListener("click",clearTodo);
    deleteAllBtn.addEventListener("click", deleteAllTodos);
}

function addNewTodo(e){

if(input.value === ""){
    showAlert("danger","Lütfen bir todo girin!");
    e.preventDefault();
}
else {

    showAlert("success","Todo başarıyla eklendi.");
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.classList ="delete-item float-right",
    a.href ="#";

    li.appendChild(a);
    taskList.appendChild(li);

    console.log(li);

    input.value="";

    e.preventDefault();
}
}
 function clearTodo(e) {
     console.log(e.target);
     if(e.target.className === "fas fa-times"){
         e.target.parentElement.parentElement.remove();
         showAlert("success","Todo başarıyla silindi.");
     }
     e.preventDefault();

}
function deleteAllTodos(e){

    alert("Are You sure ?");
    taskList.innerHTML= ""; 
    showAlert("success","Tüm todolar başarıyla silindi.");
    e.preventDefault();
}

function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    form.appendChild(alert);

   setTimeout(function(){
       alert.remove();
    }, 1000);
}
