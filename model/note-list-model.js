(function (exports) {

    function NoteList() {
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
