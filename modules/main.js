import { displayNotes } from "./display.js";
import { addNote, getNotes, deleteNote } from "./firebase/crudfirebase.js";
import { createPostItNote } from "./utils.js";

document.querySelector(".post-it__add").addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector(".post-it__input-title").value;
  const content = document.querySelector(".post-it__input-content").value;
  console.log(title, content);
  addNote(title, content);
  displayNotes();
});

displayNotes();
