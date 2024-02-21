import { getNotes } from "./firebase/crudfirebase.js";
import { createPostItNote } from "./utils.js";

async function displayNotes() {
  const notes = await getNotes();
  const notesContainer = document.querySelector(".post-it__list");
  notesContainer.innerHTML = "";

  Object.entries(notes).forEach(([noteId, noteData]) => {
    createPostItNote(noteId, noteData.title, noteData.content, noteData.color);
  });
}

export { displayNotes };
