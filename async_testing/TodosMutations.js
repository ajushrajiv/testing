const axios = require("axios");

async function createTodos(userid, task, completed, doBefore){
    try{
        const result = await axios.post('http://localhost:5030/v1/todo/addtodo', {   
        newUserId: userid,
        newTask: task,
        newCompleted: completed,
        newDoBefore: doBefore     
        })

        if(result.data){
            const todo = result.data.todo
            return todo
        }else {
            console.log("no data")
        }
    }catch(e){
        console.log("error", e)
    }
}

async function updateTodos(updatedTodo){
    try{
        const result = await axios.put('http://localhost:5030/v1/todo/updatetodo', {
            todoId: updatedTodo.todoId,
            newTask: updatedTodo.newTask,
            newDoBefore: updatedTodo.newDoBefore,
            newCompleted:updatedTodo.newCompleted
        })
      
        const todo = result.data.updatedTodo
        return todo
    }catch(e){
        console.log("Error thrown from Axios UpdateToDo", e)
    }
}

async function markTodos(todoId,completed){
    const result = await axios.put('http://localhost:5030/v1/todo/marktodo', {
        id:todoId,
        newCompleted:completed
    })
    const todos = result.data.updatedTodo
    return todos
}

async function deleteTodos(todoId){
    const result = await axios.delete('http://localhost:5030/v1/todo/deletetodo', {
        data: { id: todoId }
    });
    const todos = result.data
    return todos
}

module.exports.createTodos = createTodos;
module.exports.updateTodos = updateTodos;
module.exports.markTodos = markTodos;
module.exports.deleteTodos = deleteTodos;