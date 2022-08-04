import axios from "axios";
import { notesType } from "types/notes.type";

type serviceParameterType = {
  note?: notesType;
  notesId?: any;
  noteId?: any;
  encodedToken: string;
};

export const getNotes = async ({ encodedToken }: serviceParameterType) =>
  await axios.get(`/api/notes`, {
    headers: { authorization: encodedToken },
  });

export const addNotes = async ({ note, encodedToken }: serviceParameterType) =>
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
}: serviceParameterType) =>
  await axios.post(
    `/api/notes/${notesId}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteNotes = async ({
  notesId,
  encodedToken,
}: serviceParameterType) =>
  await axios.delete(`/api/notes/${notesId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const getArchives = async ({ encodedToken }: serviceParameterType) =>
  await axios.get(`/api/archives`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const addArchives = async ({
  note,
  noteId,
  encodedToken,
}: serviceParameterType) =>
  await axios.post(
    `/api/notes/archives/${noteId}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const restoreArchives = async ({
  noteId,
  encodedToken,
}: serviceParameterType) =>
  await axios.post(
    `/api/archives/restore/${noteId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteArchives = async ({
  noteId,
  encodedToken,
}: serviceParameterType) =>
  await axios.delete(`/api/archives/delete/${noteId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
