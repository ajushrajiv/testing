const axios = require("axios");
const TodosQueries = require("./TodosQueries");

jest.mock("axios");

describe("",() => {

    afterEach(() => {
        jest.clearAllMocks();
    })
    test('test todoqueries', async () => { 
        const mockData = { data: [
            {
                "id": 2,
                "userId": 1,
                "task": "fertilize plants",
                "completed": false,
                "doBefore": "2024-03-12T00:00:00.000Z",
                "createdAt": "2024-02-27T08:33:57.000Z",
                "updatedAt": "2024-02-28T14:00:04.000Z"
            },
            {
                "id": 3,
                "userId": 1,
                "task": "complete HA",
                "completed": true,
                "doBefore": "2024-02-27T00:00:00.000Z",
                "createdAt": "2024-02-27T12:46:34.000Z",
                "updatedAt": "2024-02-28T13:26:11.000Z"
            }
        ] };
        axios.get.mockResolvedValue(mockData);

        const result = await TodosQueries.fetchAllToDos();

        expect(result).toEqual(mockData.data);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            "http://localhost:5030/v1/todo/todos"
        )
     })

     test("single todo by todoid", async () => {
        const mockData = {
            data: [
                {
                    "id": 3,
                    "userId": 1,
                    "task": "complete HA",
                    "completed": true,
                    "doBefore": "2024-02-27T00:00:00.000Z",
                    "createdAt": "2024-02-27T12:46:34.000Z",
                    "updatedAt": "2024-02-28T13:26:11.000Z"
                }
            ] };

        axios.get.mockResolvedValue(mockData);
        const result =  await TodosQueries.fetchSingleTodoById(3);
        expect(result).toEqual(mockData.data);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            "http://localhost:5030/v1/todo/todoid",
            { params: { todoId: 3 } }
        )
     })

     test("single todo by userid", async () => {
        const mockData = {
            data: [
                {
                    "id": 3,
                    "userId": 1,
                    "task": "complete HA",
                    "completed": true,
                    "doBefore": "2024-02-27T00:00:00.000Z",
                    "createdAt": "2024-02-27T12:46:34.000Z",
                    "updatedAt": "2024-02-28T13:26:11.000Z"
                }
            ] };

        axios.get.mockResolvedValue(mockData);
        const result =  await TodosQueries.fetchSingleTodoByUserId(1);
        expect(result).toEqual(mockData.data);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            "http://localhost:5030/v1/todo/byuserid",
            { params: { userId: 1 } }
        )
     })
})