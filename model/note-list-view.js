(function(exports){
   function NoteListView(noteList){
     this._listView = noteList
   }
   
   NoteListView.prototype.displayHtml = function(noteList){
    notesArrayIn = this._listView.displayNotes();
    notesArrayOut = [];

    if (notesArrayIn.length === 0)
    return "No notes"
    else 
    
    


    for (i = 0; i < notesArrayIn.length; i++) {

      notesArrayOut.push(notesArrayIn[i].text()) ;
    
    }

     return `<ul><li><div>${notesArrayOut.join('</div></li><li><div>')}</div></li></ul>.`
   };
   exports.NoteListView = NoteListView;
})(this);
