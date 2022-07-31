import axios from "axios";
import { notesType } from "types/notes.type";

type serviceType = {
  note?: notesType;
  notesId?: any;
  noteId?: any;
  encodedToken: string;
};

export const getNotes = async ({ encodedToken }: serviceType) =>
  await axios.get(`/api/notes`, {
    headers: { authorization: encodedToken },
  });

export const addNotes = async ({ note, encodedToken }: serviceType) =>
  axios.post(
    `/api/notes`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const updateNotes = async ({
  notesId,
  note,
  encodedToken,
}: serviceType) =>
  await axios.post(
    `/api/notes/${notesId}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteNotes = async ({ notesId, encodedToken }: serviceType) =>
  await axios.delete(`/api/notes/${notesId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const getArchives = async ({ encodedToken }: serviceType) =>
  await axios.get(`/api/archives`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const addArchives = async ({
  note,
  noteId,
  encodedToken,
}: serviceType) =>
  await axios.post(
    `/api/notes/archives/${noteId}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const restoreArchives = async ({ noteId, encodedToken }: serviceType) =>
  await axios.post(
    `/api/archives/restore/${noteId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteArchives = async ({ noteId, encodedToken }: serviceType) =>
  await axios.delete(`/api/archives/delete/${noteId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
