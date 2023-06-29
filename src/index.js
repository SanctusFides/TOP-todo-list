class toDo {

    constructor(title, dueDate, priority, notes) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;

        this.completed = false;
    }
    // let test = new toDo('title', '1/1/01', '1', 'test notes');

    get title() {
        return this._title;
    }
    set title(newTitle) {
        newTitle = newTitle.trim();
        if (newTitle === '') {
            throw 'Title field cannot be empty';
        }
        this._title = newTitle;
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(newDate) {
        newDate = newDate.trim();
        if (newDate === '') {
            throw 'Date field cannot be empty';
        }
        this._dueDate = newDate;
    }

    get notes(){
        return this._notes;
    }
    set notes(newNotes) {
        newNotes = newNotes.trim();
        if (newNotes === '') {
            throw 'Date field cannot be empty';
        }
        this._notes = newNotes;
    }

    // PRIORITY DATA STRUCTURE HAS YET TO BE DETERMINED - might by nums or might be handled by project manager obj
    get priority() {
        return this.priority;
    }
    set priority(newPriority) {
        newPriority = newPriority.trim();
        if (newPriority === '') {
            throw 'Priority field cannot be empty';
        }
        this._priority = newPriority;
    }

}
