function testNoteInstantiatesWithText(text) {
  var note = new Note(text);
  return assert.isTrue(note.text() === text);
};

console.log(testNoteInstantiatesWithText());
