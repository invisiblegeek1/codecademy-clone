let TodoDB=[];
const todosBodyEle = document.getElementById("todos-body");
var Todo={
    count:TodoDB.length,
    addTodo:function(title){
        TodoDB=[...TodoDB,{id:TodoDB.length+1,title:title ,completed:false}];
        this.viewTodos();
        console.log(TodoDB);
        
    },
    editTodo:(id, newTitle)=> {
        let newArray = [...TodoDB];
        newArray[id-1].title = newTitle;
        TodoDB=[...newArray];

    },
    completeTodo:function(id){
        let newArray = [...TodoDB];
        newArray[id-1].completed = true;
        TodoDB=[...newArray];
 

    },
    completeAll:function(){
        TodoDB.map((item)=>{
            this.completeTodo(item.id);
         
        })

    },
    deleteTodo:(id)=> {
        TodoDB=[...TodoDB.slice(0, id-1), ...TodoDB.slice(id + 1)]

    },
    clearCompleted:function(){
        let completedArray=TodoDB.filter((item)=>{return item.completed==true});
        completedArray.map((item)=>{
            item.completed?this.deleteTodo(item.id):null;
        })

    },
    viewTodos:(flag="all")=> {
        let completedArray=TodoDB.filter((item)=>{return item.completed==true});
        let activeArray=TodoDB.filter((item)=>{return item.completed==false});

        
        

        let listArray=(todos)=>{
           
           const trElements = todos.map((todo) => {
           const trEle = `
                <tr>
                    <td><input type="checkbox" ${
                      todo.completed ? "checked" : ""
                    }  data-action="complete" data-id=${
                      todo.id
                    } /></td>
                    <td>${todo.title}</td>
                    <td><button data-id=${todo.id} class="btn btn-danger" data-action="delete" data-id=${
                      todo.id
                    } >delete</button></td>
                </tr>
            `;
          return trEle;
        });

         todosBodyEle.innerHTML = trElements.join("");
         

        };
        if(TodoDB.length==0){
            console.log("nothing in todo")
        }else{
            flag=="active"?listArray(activeArray):null;
        flag=="completed"?listArray(completedArray):null;
        flag=="all"?listArray(TodoDB):null;

        }
        

        
    }

}

export default Todo;
