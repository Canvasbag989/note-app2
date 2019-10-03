// var note = new Note("Abi");
// var note2 = new Note("Jeses");
var noteList = new NoteList;
// noteList.addNote(note);
// noteList.addNote(note2);
var noteListView = new NoteListView(noteList);
// console.log(noteListView.displayHtml());

document.getElementById('app').innerHTML = noteListView.displayHtml();
