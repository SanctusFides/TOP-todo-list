import { format, compareDesc, parseISO } from 'date-fns'

// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects
// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project 
// manager will store and maintain the projects

class ToDo {
    constructor(title, dueDate, priority, notes) {
        this.title = title;
        // commenting this line out because I have no implemented dates yet
        // if (!(dueDate instanceof Date)) {
        //     throw new Error('Not a valid date!');
        // }
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
    get title() {
        return this._title;
    }

    addToDo(todo) {
        if (!(todo instanceof ToDo)) {
            throw 'Not a to-do!';
        }
        this.toDoList.push(todo);
    }

    removeToDo(todo) {
        if (todo === undefined) {
            throw 'Must include a to-do to remove';
        }
        this.toDoList.splice(this.toDoList.indexOf(todo), 1);
    }

    clearAllToDo() {
        this.toDoList = [];
    }

    printList() {
        // this.toDoList.forEach((todo) => {
        //     console.log(todo);
        // });
        console.log(this.toDoList);
    }
}

class Manager {

    constructor() {
        this.projectList = [];
    }

    addProject(project) {
        if (!(project instanceof Project)) {
            throw 'Not a Project!';
        }
        this.projectList.push(project);
    }

    deleteProject(project) {
        this.projectList.splice(this.projectList.indexOf(project), 1);
    }

    printProjects() {
        // this.toDoList.forEach((todo) => {
        //     console.log(todo);
        // });
        console.log(this.projectList);
    }

    getProject(name) {
        for (let i = 0; i < this.projectList.length; i++) {
                if(this.projectList[i].title === name){
                    return this.projectList[i];
                };
        };
    }
}

// THIS IS THE MAIN HONCHO MANAGER - this is the object that is built and loaded into on initial page load
let managerObj = new Manager();

// General Creation was the old test function that has been refactored into the constructor of our General project tab
// This is used to provide the app with a project with 3 sample to-do's. Manager object is created with 'General' in the 
// array which is what is looked at to populate the tabs.
function generalCreation() {
    // BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED
    let test1 = new ToDo('Dishes', '1/1/01', '1', 'do dishes');
    let test2 = new ToDo('Laundry', '2/1/01', '2', 'do laundry');
    let test3 = new ToDo('Trash', '3/1/01', '3', 'takeout trash');

    const generalProj = new Project('General', 'general todo list');
    generalProj.addToDo(test1);
    generalProj.addToDo(test2);
    generalProj.addToDo(test3);

    // Test proj will be removed afterwards. This is only to have a second data set instantiated
    const testProj = new Project('Test', 'general todo list');
    testProj.addToDo(test1);
    testProj.addToDo(test2);
    testProj.addToDo(test3);

    // TEST MANAGER IS NOT NEEDED ANY LONGER - regular manager that lives global takes care of this - WILL REMOVE TOMORROW
    const testMng = new Manager();
    testMng.addProject(generalProj);
    
    managerObj.addProject(generalProj);
    managerObj.addProject(testProj);

    // This is just for testing, not apart of General's instantiation
    managerObj.printProjects();
    // const testObj = managerObj.getProject('Test');
    // console.log(testObj);
}

// Selecting the project body to interact with
const projectBody = document.getElementById('rightContainer');

function load(id) {
    // First 4 lines handle the class name logic - used to set the active element's proj button to be darkened 
    let oldSelection = document.querySelector('.proj-button-active');
    if (oldSelection) {oldSelection.className = 'proj-button';}
    let button = document.getElementById(id);
    if (button) {button.className = 'proj-button-active';}
    // After the class names are examined, it will then run the loadProject function which will load the data
    loadProject('General');
}

function loadProject(id) {
    projectBody.textContent = '';
    let projectObj = managerObj.getProject(id);
    projectBody.textContent = projectObj.title +' ' + projectObj.description;
}

// Function grabs all the buttons and adds the event listener to each
function loadButtons() {
    let projectbuttons = document.getElementsByClassName('proj-button');
    for (let i = 0; i < managerObj.projectList.length; i++) {
        const button = projectbuttons[i];
        button.addEventListener('click', function () { load(button.id) });
        console.log('mic check');
    }
}

// Creating 1 function at the end to run the init functions so everything has a chance to instantiate before calling
function appBoot() {
    generalCreation()
    loadButtons();
    // Setting the app to init with the General project from the manager
    load(managerObj.getProject('General').title.toLowerCase());
}
appBoot();

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




