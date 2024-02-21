import { deleteNote } from "./firebase/crudfirebase.js";
import { displayNotes } from "./display.js";

function createPostItNote(noteId, title, content,color) {
  const postItTitle = document.createElement("h2");
  postItTitle.textContent = title;
  const postItContent = document.createElement("p");
  postItContent.textContent = content;
  const note = document.createElement("div");
  note.classList.add("post-it");
  note.appendChild(postItTitle);
  note.appendChild(postItContent);
  note.style.backgroundColor=color;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("post-it__delete");
  deleteBtn.onclick = () => {
    deleteNote(noteId)
      .then(() => {
        displayNotes();
        console.log("Note deleted:", noteId);
      })
      .catch((error) => {
        console.error("Error removing note: ", error);
      });
  };
  note.appendChild(deleteBtn);

  const container = document.querySelector(".post-it__list");
  container.appendChild(note);
}

export { createPostItNote };
