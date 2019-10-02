(function(exports){
   function NoteListView(noteList){
     // this._listView = noteList
   }
   NoteListView.prototype.displayHtml = function(noteList){
     return "<ul><li><div>Favourite person: water cooler guy ;-)</div></li><li><div>Favourite drink: beer</div></li></ul>."
   };
   exports.NoteListView = NoteListView;
})(this);
