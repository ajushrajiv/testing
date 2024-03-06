const axios = require("axios");

async function fetchAllToDos(){
    const result = await axios.get("http://localhost:5030/v1/todo/todos")
    const todos =  result.data
    console.log("Todos from fetchAllTodos", todos)
    return todos;
}

async function fetchSingleTodoById(todoId){
    const result = await axios.get("http://localhost:5030/v1/todo/todoid", {params:{todoId}})
    const todo = result.data
    return todo;
}

module.exports.fetchAllToDos = fetchAllToDos;
module.exports.fetchSingleTodoById = fetchSingleTodoById;