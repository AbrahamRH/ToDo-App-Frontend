import handleAPI from "../Utils/API.js";

const todosMock = [
  {
    id: 1,
    name: "Uno",
    done: false,
    priority: "LOW",
    dueDate: null,
    doneDate: null,
    creationDate: "2023-03-27T16:18:33.4485893",
  },
  {
    id: 2,
    name: "Dos",
    done: false,
    priority: "MEDIUM",
    dueDate: null,
    doneDate: null,
    creationDate: "2023-03-27T16:18:41.1308382",
  },
  {
    id: 3,
    name: "Tres",
    done: false,
    priority: "LOW",
    dueDate: "2023-04-04",
    doneDate: null,
    creationDate: "2023-03-27T16:18:47.5861202",
  },
];

describe("handleAPI", () => {
  it("Should return the correct data", () => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(todosMock),
      });
    const response = handleAPI("GET", "/todos");
    expect(response).resolves.toEqual(todosMock);
  });

  it("should return nothing", () => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      });
    const response = handleAPI("GET", "/todos");
    expect(response).resolves.toEqual([]);
  })
});
