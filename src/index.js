import { format, compareDesc, parseISO } from 'date-fns'

// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects
// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project 
// manager will store and maintain the projects

class ToDo {
    constructor(title, dueDate, priority, notes) {
        this.title = title;
        if (!(dueDate instanceof Date)) {
            throw new Error('Not a valid date!');
        }
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

class Manager {
    
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        if (!(project instanceof Project)) {
            throw 'Not a Project!';
        }
        this.projects.push(project);
    }

    printProjects(){
        // this.toDoList.forEach((todo) => {
        //     console.log(todo);
        // });
        console.log(this.projects);
    }
}

// TESTING CLASS IS JUST CREATED SO I CAN COLLAPSE ALL THE LOG TESTING LINES
class Testing {
    // BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED
        // let test1 = new ToDo('test1', '1/1/01', '1', 'test notes');
        // let test2 = new ToDo('test2', '2/1/01', '2', 'test notes');
        // let test3 = new ToDo('test3', '3/1/01', '3', 'test notes');
    
        // const testProj = new Project('testProj', 'for testing purposes');
        // testProj.addToDo(test1);
        // testProj.addToDo(test2);
        // testProj.addToDo(test3);
    
        // const testMng = new Manager();
        // testMng.addProject(testProj);
        // testMng.printProjects();
    
        // console.log(test1);
    
        // test1.title = 'new title'
        // test1.dueDate = 'Today';
        // test1.priority = 4;
        // test1.notes = 'Updated notes';
        // test1.completed = true;
        
        // Testing Project obj functions
        // testProj.removeToDo(test2);
        // testProj.clearAllToDo();z
        // testProj.printList();    
    
        // testProj.title = 'New Name'
        // testProj.description = 'new notes!'
        
        // console.log(testProj.title);
        // console.log(testProj.description);
}

// COME BACK TO DATE TESTING - not worth focusing on now until I get to implementing the date selector on front
// let testDates = [format(new Date(2014, 1, 1), 'yyyy-dd-MM'), format(new Date(2014, 10, 1), 'yyyy-dd-MM'), format(new Date(2014, 11, 1), 'yyyy-dd-MM')];
// let parsedDates = [];
// testDates.forEach(e => {
//     parsedDates.push(parseISO(e));
// })
// console.log(parsedDates.sort(compareDesc));
// let sortedTest = testDates.sort(compareDesc);



// let test1 = new ToDo('test1', testDate, '1', 'test notes');
// let test2 = new ToDo('test2', testDate, '2', 'test notes');
// let test3 = new ToDo('test3', testDate, '3', 'test notes');

// const testProj = new Project('testProj', 'for testing purposes');
// testProj.addToDo(test1);
// testProj.addToDo(test2);
// testProj.addToDo(test3);

// const testMng = new Manager();
// testMng.addProject(testProj);
// testMng.printProjects();

// console.log(test1);

    


