import axios from "axios";
import {
  addNotes,
  getNotes,
  updateNotes,
  deleteNotes,
  getArchives,
  addArchives,
  restoreArchives,
  deleteArchives,
} from "../../services/services";

jest.mock("axios");

describe("Api call tests", () => {
  it("Test for getNotes", async () => {
    axios.get.mockResolvedValue({
      data: {
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
      },
    });
    const data = {
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await getNotes(data);
    console.log("result", result);
    expect(result).toEqual({
      data: {
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
      },
    });
  });

  it("Test for add notes", async () => {
    axios.post.mockResolvedValue({
      data: {
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
      },
    });

    const data = {
      note: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: ["work"],
        title: "title1",
        _id: 1,
      },
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await addNotes(data);
    expect(result).toEqual({
      data: {
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
      },
    });
  });
  it("Update notes", async () => {
    axios.post.mockResolvedValue({
      data: {
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
      },
    });

    const data = {
      notesId: 1,
      note: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: ["work"],
        title: "title1",
        _id: 1,
      },
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await updateNotes(data);
    expect(result).toEqual({
      data: {
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
      },
    });
  });
  it("Delete notes", async () => {
    axios.delete.mockResolvedValue({
      data: {
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
      },
    });

    const data = {
      notesId: 2,
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await deleteNotes(data);
    expect(result).toEqual({
      data: {
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
      },
    });
  });
  it("Get archived notes", async () => {
    axios.get.mockResolvedValue({
      data: {
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
      },
    });

    const data = {
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await getArchives(data);
    expect(result).toEqual({
      data: {
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
      },
    });
  });
  it("Archiving notes", async () => {
    axios.post.mockResolvedValue({
      data: {
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
      },
    });

    const data = {
      note: {
        body: "body",
        colorIndex: 0,
        date: "6/18/2022",
        pinned: false,
        priority: "low",
        tags: ["work"],
        title: "title1",
        _id: 1,
      },
      noteId: 1,
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await addArchives(data);
    expect(result).toEqual({
      data: {
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
      },
    });
  });
  it("Restoring archived notes", async () => {
    axios.post.mockResolvedValue({
      data: {
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
      },
    });

    const data = {
      noteId: 1,
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await restoreArchives(data);
    expect(result).toEqual({
      data: {
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
      },
    });
  });

  it("Deleting archived notes", async () => {
    axios.delete.mockResolvedValue({
      data: {
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
      },
    });

    const data = {
      noteId: 2,
      encodedToken: "asdadsafdfjkdfkdlgdfggkdfg",
    };
    const result = await deleteArchives(data);
    expect(result).toEqual({
      data: {
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
      },
    });
  });
});
