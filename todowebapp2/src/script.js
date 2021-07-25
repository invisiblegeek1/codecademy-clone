//const Todo=require('./Todoservice')
import Todo from './Todoservice';
import 'bootstrap/dist/css/bootstrap.css';
const newInpEle = document.getElementById("new-input");
const todosBodyEle = document.getElementById("todos-body");
const goBtn = document.getElementById("btn-go")
const btnAll = document.getElementById("btn-todo-all")
const btnActive = document.getElementById("btn-todo-active")
const btnCompleted = document.getElementById("btn-todo-completed")
const btnClearCompleted = document.getElementById("btn-todo-clearCompleted")

var inputValue="item-1";

//------------------------------------------------------------
// todo service
//------------------------------------------------------------

todosBodyEle.addEventListener("click", (e) => {
  const todoId = Number.parseInt(e.target.dataset["id"]);
  const action = e.target.dataset["action"];
  if (action === "complete") {
    Todo.completeTodo(todoId);
  }
  if (action === "delete") {
    Todo.deleteTodo(todoId);
  }
  Todo.viewTodos();
});

goBtn.addEventListener("click",()=>{
Todo.addTodo(setValue());
});
newInpEle.addEventListener("input",()=>{
setValue()
});

function setValue(){
  inputValue=newInpEle.value;
  console.log(inputValue)
  return inputValue

}

btnAll.addEventListener("click",()=>{
Todo.viewTodos('all');
});
btnActive.addEventListener("click",()=>{
Todo.viewTodos('active');
});
btnCompleted.addEventListener("click",()=>{
Todo.viewTodos('completed');
});
btnClearCompleted.addEventListener("click",()=>{
Todo.clearCompleted();
});









Todo.viewTodos();