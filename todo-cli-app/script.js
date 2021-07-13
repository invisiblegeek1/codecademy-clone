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
        TodoDB.map((item)=>{
            item.completed==true?this.deleteTodo(item.id):null;
        })

    },
    viewTodos:(flag)=> {
        let completedArray=TodoDB.filter((item)=>{return item.completed==true});
        let activeArray=TodoDB.filter((item)=>{return item.completed==false});
        



        let listArray=(array)=>{
            array.map((item)=>{
                console.log(`todo id ${item.id} title ${item.title} status : ${item.completed==true?"completed":"active"}`)
                
    
            })

        };
        flag=="active"?listArray(activeArray):null;
        flag=="completed"?listArray(completedArray):null;

        
    }

}