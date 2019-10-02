(function (exports) {

    function NoteList(_list) {
        this._list = [];
    }
    NoteList.prototype.displayNotes = function () {
        return this._list;
    };

    NoteList.prototype.addNote = function (text) {
        this._list.push(text);
        
    }
    exports.NoteList = NoteList;
})(this);

