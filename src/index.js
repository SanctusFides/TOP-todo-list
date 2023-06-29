// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects
// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project 
// manager will store and maintain the projects

class ToDo {
    constructor(title, dueDate, priority, notes) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;

        this.completed = false;
    }

    get todoTitle() {
        return this._title;
    }
    set title(newTitle) {
        if (newTitle === '') {
            throw 'Title field cannot be empty';
        }
        this._title = newTitle;
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(newDate) {
        if (newDate === '') {
            throw 'Date field cannot be empty';
        }
        this._dueDate = newDate;
    }

    get notes() {
        return this._notes;
    }
    set notes(newNotes) {
        if (newNotes === '') {
            throw 'Date field cannot be empty';
        }
        this._notes = newNotes;
    }

    // PRIORITY DATA STRUCTURE HAS YET TO BE DETERMINED - might by nums or might be handled by project manager obj
    get priority() {
        return this._priority;
    }
    set priority(newPriority) {
        if (newPriority === '') {
            throw 'Priority field cannot be empty';
        }
        this._priority = newPriority;
    }

}

class Project {

    constructor(title, description) {
        this.title = title;
        this.description = description;

        this.toDoList = [];
    }

    get title() {
        return this._title;
    }
    set title(newTitle) {
        if (newTitle === '') {
            throw 'Title field cannot be empty';
        }
        this._title = newTitle;
    }

    addToDo(todo) {
        if (!(todo instanceof ToDo)) {
            throw 'Not a to-do!';
        }
        this.toDoList.push(todo);
    }


    removeToDo(todo) {
        this.toDoList.splice(this.toDoList.indexOf(todo),1);
    }

    printList(){
        // this.toDoList.forEach((todo) => {
        //     console.log(todo);
        // });
        console.log(this.toDoList);
    }
    
}

// BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED
    let test1 = new ToDo('test1', '1/1/01', '1', 'test notes');
    let test2 = new ToDo('test2', '2/1/01', '2', 'test notes');
    let test3 = new ToDo('test3', '3/1/01', '3', 'test notes');

    const testProj = new Project('testProj', 'for testing purposes');
    testProj.addToDo(test1);
    testProj.addToDo(test2);
    testProj.addToDo(test3);
    testProj.removeToDo(test2);
    testProj.removeToDo(test1);
    testProj.printList();

    
    

