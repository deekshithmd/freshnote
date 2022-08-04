import { DataReducer } from "../../contexts/Reducer/DataReducer";

describe("Testing Notes", () => {
  it("Add notes", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [],
      pinned: [],
      trash: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
      pinned: [],
      trash: [],
    };
    const actions = {
      type: "LOAD_NOTES",
      payload: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });

  it("Pin note", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [],
      pinned: [],
      trash: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [],
      pinned: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
      trash: [],
    };
    const actions = {
      type: "PINNOTE",
      payload: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: ["work"],
        title: "title1",
        _id: 1,
      },
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Remove pin", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [],
      pinned: [],
      trash: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [],
      pinned: [],
      trash: [],
    };
    const actions = {
      type: "REMOVEPIN",
      payload: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: ["work"],
        title: "title1",
        _id: 1,
      },
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Add Archives", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [],
      pinned: [],
      trash: [],
    };

    let finalState = {
      archives: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
      filtered: [],
      labels: ["college", "work", "reminder"],
      notes: [],
      pinned: [],
      trash: [],
    };

    const actions = {
      type: "LOAD_ARCHIVES",
      payload: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
    };

    const state = DataReducer(initialState, actions);
    expect(state).toEqual(finalState);
  });
  it("Add to trash", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: [],
      notes: [],
      pinned: [],
      trash: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: [],
      notes: [],
      pinned: [],
      trash: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
    };
    const actions = {
      type: "ADD_TRASH",
      payload: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: ["work"],
        title: "title1",
        _id: 1,
      },
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Delete from trash", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: [],
      notes: [],
      pinned: [],
      trash: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: [],
      notes: [],
      pinned: [],
      trash: [],
    };
    const actions = {
      type: "DELETE_TRASH",
      payload: 1,
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Add label", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: 1,
          tag: "work",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
    };

    const action = {
      type: "ADD_LABEL",
      payload: { _id: 2, tag: "reminder" },
    };
    const finalState = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: 1,
          tag: "work",
        },
        {
          _id: 2,
          tag: "reminder",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
    };
    const state = DataReducer(initialState, action);
    expect(state).toEqual(finalState);
  });
  it("Delete labels", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: 1,
          tag: "work",
        },
        {
          _id: 2,
          tag: "reminder",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
    };

    const action = {
      type: "DELETE_LABEL",
      payload: 2,
    };
    const finalState = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: 1,
          tag: "work",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
    };
    const state = DataReducer(initialState, action);
    expect(state).toEqual(finalState);
  });
  it("Filter", () => {
    let initialState = {
      archives: [],
      filtered: [],
      labels: [],
      notes: [],
      pinned: [],
      trash: [],
    };
    let finalState = {
      archives: [],
      filtered: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
      labels: [],
      notes: [],
      pinned: [],
      trash: [],
    };
    const actions = {
      type: "FILTER",
      payload: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: ["work"],
          title: "title1",
          _id: 1,
        },
      ],
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
});
