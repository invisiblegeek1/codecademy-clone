let TodoDB=[];

let Todo={
    count:TodoDB.length,
    addTodo:function(title){
        TodoDB=[...TodoDB,{id:TodoDB.length+1,title:title ,completed:false}];
        console.log(TodoDB)
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
        

        let listArray=(array)=>{
            array.map((item)=>{
                console.log(`todo id ${item.id} title ${item.title} status : ${item.completed==true?"completed":"active"}`)
                
    
            })

        };
        if(Todo.length==0){
            console.log("nothing in todo")
        }else{
            flag=="active"?listArray(activeArray):null;
        flag=="completed"?listArray(completedArray):null;
        flag=="all"?listArray(TodoDB):null;

        }
        

        
    }

}

Todo.addTodo("task1");
Todo.addTodo("task2");
Todo.addTodo("task3");
Todo.addTodo("task4");
Todo.addTodo("task5");
Todo.viewTodos();


Todo.editTodo(3,"taskthree");
Todo.viewTodos();

Todo.completeTodo(4);
Todo.viewTodos();

Todo.completeAll();
Todo.viewTodos();

Todo.deleteTodo(5);
Todo.viewTodos();

Todo.clearCompleted();
Todo.viewTodos();

// Todo.viewTodos("active");
// Todo.viewTodos("completed");





