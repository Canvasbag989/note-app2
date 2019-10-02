function testNoteInstantiatesWithText(text) {
  var note = new Note(text);
  assert.isTrue(note.text() === text);
};

testNoteInstantiatesWithText();
