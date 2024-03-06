const axios = require("axios");
const TodosQueries = require("./TodosQueries");

jest.mock("axios");

describe("",() => {
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
            },
            {
                "id": 4,
                "userId": 1,
                "task": "complete PSM",
                "completed": false,
                "doBefore": "2024-02-28T00:00:00.000Z",
                "createdAt": "2024-02-28T13:25:54.000Z",
                "updatedAt": "2024-02-28T13:25:54.000Z"
            },
            {
                "id": 5,
                "userId": 5,
                "task": "shopping",
                "completed": false,
                "doBefore": "2024-03-12T00:00:00.000Z",
                "createdAt": "2024-02-28T13:50:17.000Z",
                "updatedAt": "2024-02-28T13:50:17.000Z"
            },
            {
                "id": 6,
                "userId": 6,
                "task": "testing certification",
                "completed": false,
                "doBefore": "2024-03-31T00:00:00.000Z",
                "createdAt": "2024-02-28T17:32:26.000Z",
                "updatedAt": "2024-02-28T17:32:39.000Z"
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
})