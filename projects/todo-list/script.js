var inItemText = document.getElementById('inItemText');
inItemText.focus();              

var todoArray = [];
getTodos();

btnAdd.onclick = function () {
        var itemText = inItemText.value;
        addTodo(itemText);                                
} 

inItemText.onkeyup = function (event) {
    if (event.which == 13) {
        var itemText = inItemText.value;
        addTodo(itemText);                
    } 
    inItemText.focus();            
}

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
         if (children[i]==node) return num;
    }
}

function removeTodo() {
    id_el = '' + this.parentElement.id;
    element = document.getElementById(id_el);
    var index = indexInParent(element);
    this.parentElement.remove(); 
    todoArray.splice(index, 1);
    saveTodo();          
}            
      
function addTodo(element) {
    todoArray.push(element);
    addNewTodo(element);
    saveTodo();
}        

function addNewTodo(element) {
    var date = new Date ();
    var id = '' + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    var x = '' + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);  

    var newLi = document.createElement('li');
    newLi.className = 'li-list';
    newLi.id = 'id_' + id + x; 
    var list = document.getElementById('tasks-list');
    list.appendChild(newLi);

    var newInput = document.createElement('input');
    newInput.type = 'checkbox';                
    newLi.appendChild(newInput);

    var newLabel = document.createElement('label');            
    newLabel.innerHTML = element;  
    newLi.appendChild(newLabel);

    var newButton = document.createElement('button');
    newButton.className = 'btn-dlt';              
    newButton.innerHTML = 'Delete';      
    newButton.onclick = removeTodo;  
    newLi.appendChild(newButton);                                                                   
}
           
function saveTodo() {
    var str = JSON.stringify(todoArray);  
    localStorage.setItem('todoArray', str);
}
    
function getTodos() {
    var str = localStorage.getItem('todoArray');
    todoArray = JSON.parse(str);
    if (!todoArray) {
        todoArray = [];
    }

    for(i in todoArray) {
        addNewTodo(todoArray[i]);
    }           
}