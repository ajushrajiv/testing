const axios = require("axios");
const TodosMutations = require("./TodosMutations");

jest.mock("axios");

const sampleData = {
  id: 2,
  userId: 1,
  task: "fertilize plants",
  completed: false,
  doBefore: "2024-03-12T00:00:00.000Z",
  createdAt: "2024-02-27T08:33:57.000Z",
  updatedAt: "2024-02-28T14:00:04.000Z",
};

describe("test todomutations", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("create todo", async () => {
    const mockData = { data: { todo: sampleData } };

    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodos(
      1,
      "Testing certification",
      false,
      myDate
    );

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5030/v1/todo/addtodo",
      {
        newUserId: 1,
        newTask: "Testing certification",
        newCompleted: false,
        newDoBefore: myDate,
      }
    );
  });

  test("update todo", async () => {
    const mockData = { data: { updatedTodo: { sampleData } } };

    axios.put.mockResolvedValue(mockData);
    const myDate = new Date();
    const updatedTodo = {
      todoId: 7,
      newTask: "Azure certification",
      newCompleted: false,
      newDoBefore: myDate,
    };

    const result = await TodosMutations.updateTodos(updatedTodo);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5030/v1/todo/updatetodo",
      updatedTodo
    );
  });

  test("mark todo", async () => {
    const mockData = { data: { updatedTodo: { sampleData } } };

    axios.put.mockResolvedValue(mockData);
    const todoId = 7;
    const newCompleted = true;

    const result = await TodosMutations.markTodos(todoId, newCompleted);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5030/v1/todo/marktodo",
      { id: todoId, newCompleted: newCompleted }
    );
  });

  test('delete todo', async () => { 
    const mockData = { data: { deletedTodo:{ sampleData } } };
    
    axios.delete.mockResolvedValue(mockData);
    
    const result = await TodosMutations.deleteTodos(7);

    expect(result).toEqual(mockData.data);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
        "http://localhost:5030/v1/todo/deletetodo", { data: { id: 7 } }
    )
})

});
