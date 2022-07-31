export const notesInitialState = {
  _id: "",
  tags: [{ _id: "", tag: "" }],
  title: "",
  body: "",
  pinned: false,
  colorIndex: 0,
  priority: "",
  date: new Date(),
};

export const tagInitialState = {
  _id: "",
  tag: "",
};

export type tagType = {
  _id: any;
  tag: string;
};

export type notesType = {
  _id?: any;
  tags?: tagType[];
  title: string;
  body: string;
  pinned?: boolean;
  colorIndex: number;
  priority?: string;
  date: Date | string;
};
