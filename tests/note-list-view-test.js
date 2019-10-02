// (function(){


function testReturnHtmlString() {
    var noteList = new NoteList;
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.displayHtml() === "<ul><li><div>Favourite person: water cooler guy ;-)</div></li><li><div>Favourite drink: beer</div></li></ul>." );
};


// function testAddNewNoteToArray(text) {
//     var note = new Note(text);
//     var noteList2 = new NoteList();
//     noteList2.addNote(text);
//     assert.isTrue(noteList2.displayNotes()[0].text().includes(text));
// };
testReturnHtmlString()

// })();
