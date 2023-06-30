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

    set title(newTitle) {
        if (newTitle === '') {
            throw 'Title field cannot be empty';
        }
        this._title = newTitle;
    }

    set dueDate(newDate) {
        if (newDate === '') {
            throw 'Date field cannot be empty';
        }
        this._dueDate = newDate;
    }

    set notes(newNotes) {
        if (newNotes === '') {
            throw 'Date field cannot be empty';
        }
        this._notes = newNotes;
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
        if (todo === undefined){
            throw 'Must include a to-do to remove';
        }
        this.toDoList.splice(this.toDoList.indexOf(todo),1);
    }

    clearAllToDo() {
        this.toDoList = [];
    }

    printList(){
        // this.toDoList.forEach((todo) => {
        //     console.log(todo);
        // });
        console.log(this.toDoList);
    }
}

// class Manager {
    
//     constructor
// }

// BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED
    let test1 = new ToDo('test1', '1/1/01', '1', 'test notes');
    let test2 = new ToDo('test2', '2/1/01', '2', 'test notes');
    let test3 = new ToDo('test3', '3/1/01', '3', 'test notes');

    const testProj = new Project('testProj', 'for testing purposes');
    testProj.addToDo(test1);
    testProj.addToDo(test2);
    testProj.addToDo(test3);

    // console.log(test1);

    // Testing all setters - last tested 6/30 - all green
    // test1.title = 'new title'
    // test1.dueDate = 'Today';
    // test1.priority = 4;
    // test1.notes = 'Updated notes';
    // test1.completed = true;
    
    // Testing Project obj functions
    // testProj.removeToDo(test2);
    // testProj.clearAllToDo();
    // testProj.printList();    

    // testProj.title = 'New Name'
    // testProj.description = 'new notes!'
    



    // console.log(testProj.title);
    // console.log(testProj.description);


    
    

