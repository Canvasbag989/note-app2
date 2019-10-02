// import { Note } from "../model/note-model";
(function(){


function testNotesListReturnArray(_list) {
    var noteList = new NoteList(_list);
    assert.isTrue(noteList.displayNotes().length === 0);
};

// testNotesListReturnArray();

function testAddNewNoteToArray(text) {
    // var noteList = new NoteList(_list);
    var note = new Note(text);
    var noteList2 = new NoteList();
    noteList2.addNote(text);

    assert.isTrue(noteList2.displayNotes()[0].text().includes(text));
};

// testAddNewNoteToArray();
})();