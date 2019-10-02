// import { Note } from "../model/note-model";
(function(){


function testNotesListReturnArray() {
    var noteList = new NoteList();
    assert.isTrue(noteList.displayNotes().length === 0);
};
// testNotesListReturnArray()

function testAddNewNoteToArray() {
    var note = new Note("Abi");
    var noteList2 = new NoteList();
    noteList2.addNote(note);
    assert.isTrue(noteList2.displayNotes()[0].text().includes("Abi"));
};
// testAddNewNoteToArray();

})();
