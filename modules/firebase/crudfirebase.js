import { db } from "./firebaseconfig.js";
import {
  ref,
  set,
  get,
  update,
  remove,
  push,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

async function addNote(title, content) {
  const notesRef = ref(db, "notes");
  const newNoteRef = push(notesRef);
  set(newNoteRef, {
    title: title,
    content: content,
  });
  console.log("Added note with id " + newNoteRef.key);
}

async function getNotes() {
  const notesRef = ref(db, "notes");
  const snapshot = await get(notesRef);
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("No data available");
    return {};
  }
}

async function deleteNote(noteId) {
  const noteRef = ref(db, `notes/${noteId}`);
  await remove(noteRef);
  console.log("Deleted note", noteId);
}

export { addNote, getNotes, deleteNote };
