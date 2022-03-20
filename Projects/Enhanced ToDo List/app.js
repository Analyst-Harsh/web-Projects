console.log("Welcome to magic notes..........");
showNotes();
function addNote() {
  let textBody = document.getElementById("textArea");
  let textTitle = document.getElementById("title");
  let notes = localStorage.getItem("notes");
  let notesObj;
  if (notes !== null) {
    notesObj = JSON.parse(notes);
  } else {
    notesObj = [];
  }
  notesObj.push([textTitle.value,textBody.value]);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  textBody.value = "";
  textTitle.value='';
  showNotes();
}

function showNotes() {
  let notes = localStorage.getItem("notes");
  let notesObj;
  if (notes !== null) {
    notesObj = JSON.parse(notes);
  } else {
    notesObj = [];
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="card note" id='note' style='margin:10px; width:18rem ' >
        <div class="card-body">
          <h5 class="card-title">${element[0]}</h5>
          <p class="card-text" >${element[1]}
          </p>
          <button class="btn btn-primary" onclick=deleteNote(${index})>Delete</button>
        </div>
      </div>`;
  });

  if (notesObj !== []) {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = html;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  let notesObj;
  if (notes !== null) {
    notesObj = JSON.parse(notes);
  } else {
    notesObj = [];
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("search");
search.addEventListener("input", () => {
  let searchTxt = search.value;
  let notes = document.getElementsByClassName("note");
  console.log(notes);
  Array.from(notes).forEach((element) => {
    let noteTxt = element.getElementsByTagName("p")[0].innerText;
    console.log(noteTxt);
    if (!noteTxt.includes(searchTxt)) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
});
