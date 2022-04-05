import axios from "axios";

export const getNotes = async ({ encodedToken }) =>
  await axios.get(`/api/notes`, {
    headers: { authorization: encodedToken },
  });

export const addNotes = async ({ note, encodedToken }) =>
  axios.post(
    `/api/notes`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const updateNotes = async ({ notesId, note, encodedToken }) =>
  await axios.post(
    `/api/notes/${notesId}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteNotes = async ({ notesId, encodedToken }) =>
  await axios.delete(`/api/notes/${notesId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const getArchives = async ({ encodedToken }) =>
  await axios.get(`/api/archives`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const addArchives = async ({ note, noteId, encodedToken }) =>
  await axios.post(
    `/api/notes/archives/${noteId}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const restoreArchives = async ({ noteId, encodedToken }) =>
  await axios.post(
    `/api/archives/restore/${noteId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteArchives = async ({ noteId, encodedToken }) =>
  await axios.delete(`/api/archives/delete/${noteId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
