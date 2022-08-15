import { DataReducer } from "../../contexts/Reducer/DataReducer";
import { reducerType } from "../../contexts/Reducer/Datareducer.type";
import { initialStateType } from "../../contexts/DataContext/DataContext.type";

describe("Testing Notes", () => {
  it("Add notes", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
      pinned: [],
      trash: [],
      others: [],
    };
    const actions: reducerType = {
      type: "LOAD_NOTES",
      payload: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });

  it("Pin note", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
      trash: [],
      others: [],
    };
    const actions: reducerType = {
      type: "PINNOTE",
      payload: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: [{ _id: "2", tag: "work" }],
        title: "title1",
        _id: 1,
      },
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Remove pin", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    const actions: reducerType = {
      type: "REMOVEPIN",
      payload: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: [{ _id: "2", tag: "work" }],
        title: "title1",
        _id: 1,
      },
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Add Archives", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };

    let finalState = {
      archives: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };

    const actions: reducerType = {
      type: "LOAD_ARCHIVES",
      payload: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
    };

    const state = DataReducer(initialState, actions);
    expect(state).toEqual(finalState);
  });
  it("Add to trash", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
      others: [],
    };
    const actions: reducerType = {
      type: "ADD_TRASH",
      payload: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: [{ _id: "2", tag: "work" }],
        title: "title1",
        _id: 1,
      },
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Delete from trash", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
      others: [],
    };
    let finalState = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    const actions: reducerType = {
      type: "DELETE_TRASH",
      payload: 1,
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
  it("Add label", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: "2",
          tag: "work",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };

    const action: reducerType = {
      type: "ADD_LABEL",
      payload: { _id: "3", tag: "reminder" },
    };
    const finalState = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: "2",
          tag: "work",
        },
        {
          _id: "3",
          tag: "reminder",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    const state = DataReducer(initialState, action);
    expect(state).toEqual(finalState);
  });
  it("Delete labels", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: "1",
          tag: "work",
        },
        {
          _id: "2",
          tag: "reminder",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };

    const action: reducerType = {
      type: "DELETE_LABEL",
      payload: "2",
    };
    const finalState = {
      archives: [],
      filtered: [],
      labels: [
        {
          _id: "1",
          tag: "work",
        },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
    };
    const state = DataReducer(initialState, action);
    expect(state).toEqual(finalState);
  });
  it("Filter", () => {
    let initialState: initialStateType = {
      archives: [],
      filtered: [],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others: [],
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
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
      labels: [
        { _id: "1", tag: "college" },
        { _id: "2", tag: "work" },
        { _id: "3", tag: "reminder" },
      ],
      notes: [],
      pinned: [],
      trash: [],
      others:[]
    };
    const actions: reducerType = {
      type: "FILTER",
      payload: [
        {
          body: "body",
          colorIndex: 0,
          date: "6/18/2022",
          pinned: false,
          priority: "low",
          tags: [{ _id: "2", tag: "work" }],
          title: "title1",
          _id: 1,
        },
      ],
    };
    const state = DataReducer(initialState, actions);
    expect(finalState).toEqual(state);
  });
});
