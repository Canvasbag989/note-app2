(function(exports){
   function NoteListView(noteList){
     this._listView = noteList
   }
   NoteListView.prototype.displayHtml = function(noteList){
     return `<ul><li><div>${this._listView.displayNotes()}</div></li><li><div>Favourite drink: beer</div></li></ul>.`
   };
   exports.NoteListView = NoteListView;
})(this);
