
var list=document.getElementById("list");

function addTodo(){
var todo_item=document.getElementById("todo-item");
var li=document.createElement('li')
var liText= document.createTextNode(todo_item.value)
li.appendChild(liText)

//create delete button
var delBtn=document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.setAttribute("class", "btn")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.setAttribute("class","btn btn-primary")
delBtn.setAttribute("class","del")
delBtn.appendChild(delText)
//create edit button

var editBtn=document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.setAttribute("class", "btn")
editBtn.setAttribute("class","btn btn-primary")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")
editBtn.setAttribute("class","edt")


//button in li
li.appendChild(delBtn)

li.appendChild(editBtn)

 //show list
list.appendChild(li)

//empty input
todo_item.value =""



console.log(li)
 }

 function deleteItem(e){
     e.parentNode.remove()
 }
 function deleteAll(){
     list.innerHTML =""
 }
 function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter updated Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editValue;
  
}

