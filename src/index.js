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
        console.log(this.projectList);
    }

    getProject(name) {
        for (let i = 0; i < this.projectList.length; i++) {
            if (this.projectList[i].title === name) {
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
    let todo1 = new ToDo('Dishes', '1/1/01', '1', 'do dishes');
    let todo2 = new ToDo('Laundry', '2/1/01', '2', 'do laundry');
    let todo3 = new ToDo('Trash', '3/1/01', '3', 'takeout trash');

    const generalProj = new Project('General', 'general todo list');
    generalProj.addToDo(todo1);
    generalProj.addToDo(todo2);
    generalProj.addToDo(todo3);

    // Test proj will be removed afterwards. This is only to have a second data set instantiated
    const testProj = new Project('Test', 'and I helped!');
    let test1 = new ToDo('TEST', '1/1/01', '1', 'do dishes');
    let test2 = new ToDo('Testing', '2/1/01', '2', 'do laundry');
    let test3 = new ToDo('test', '3/1/01', '3', 'takeout trash');
    testProj.addToDo(test1);
    testProj.addToDo(test2);
    testProj.addToDo(test3);

    // TEST MANAGER IS NOT NEEDED ANY LONGER - regular manager that lives global takes care of this - WILL REMOVE WHEN DONE
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
let projectBody = document.getElementById('rightContainer');

function load(id) {
    // First 4 lines handle the class name logic - used to set the active element's proj button to be darkened 
    let oldSelection = document.querySelector('.proj-button-active');
    if (oldSelection) { oldSelection.className = 'proj-button'; }
    let button = document.getElementById(id);
    if (button) { button.className = 'proj-button-active'; }
    // After the class names are examined, it will then run the loadProject function which will load the data
    loadProject(id);
}

// LOAD PROJECT IS THE BULK OF THE LOGIC - this is where the to-do list panel is built
function loadProject(id) {
    // The remove is first run to clear the page from the general project data and then rebuild it with the new data
    projectBody.remove();
    // setting the new div to contain the id and class of the original
    const newBody = document.createElement('div');
    newBody.id = 'rightContainer';
    newBody.className = 'right-container';
    document.getElementById('midRight').appendChild(newBody);
    
    // Creating a div in which project data is loaded into, this is fed into the above container - this is the one that will actually house the projects data
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-div';
    projectDiv.id = 'projectDiv';
    newBody.appendChild(projectDiv);

    // Line below reaches into the manager and pulls out the object to extrapolate data
    const projectObj = managerObj.getProject(id);

    // Creating header info to display the title and description of the project
    const headerDiv = document.createElement('div');
    const headerSpan = document.createElement('span');
    headerDiv.className='header-div';
    headerSpan.className='header-span';
    // Setting the header text values for name and description of project to go at top of panel
    const headerH1 = document.createElement('h1');
    headerH1.className='header1';
    headerH1.textContent = projectObj.title;
    headerSpan.appendChild(headerH1);
    const headerH3 = document.createElement('h3');
    headerH3.className='header3';
    headerH3.textContent = projectObj.description;
    headerSpan.appendChild(headerH3);

    headerDiv.appendChild(headerSpan);
    newBody.appendChild(headerDiv);

    // This for loop goes through the actual project's to-do list and builds that info onto the page
    for (let i = 0; i < projectObj.toDoList.length; i++) {
        // Creating a P tag to insert a span that will contain the info - span for formatting inline
        const elementLine = document.createElement('p');
        const elementSpan = document.createElement('span');
        projectDiv.appendChild(elementLine);
        elementLine.appendChild(elementSpan);

        // console.log(projectObj.toDoList[i]);
        const toDoObj = projectObj.toDoList[i];
        const title = toDoObj._title;
        const priority = toDoObj._priority;
        const dueDate = toDoObj._dueDate;
        const notes = toDoObj._notes;

        elementSpan.textContent = `${priority} ${title} ${dueDate} ${notes}`;
    }

    // This line below is essential for setting the global projectBody variable to this new value.
    // This is needed to retain the object after it is removed at the start of loadProject. It is null otherwise, this reloads it
    projectBody = newBody;
}

// Loops through manager object's project list and creates the buttons for all the projects in the manager obj's array
// This change is much better, as now we can run this again when a new project is added
function loadButtons() {
    let projectList = document.getElementById('projects');
    for (let i = 0; i < managerObj.projectList.length; i++) {
        // console.log('mic check');
        const projButton = document.createElement('button');
        let projObj = managerObj.projectList[i];
        projButton.textContent = projObj.title;
        projButton.className = 'proj-button';
        projButton.id = projObj.title;
        projButton.addEventListener('click', function () { load(projButton.id) });
        projectList.appendChild(projButton);
    }
}

// Creating 1 function at the end to run the init functions so everything has a chance to instantiate before calling
function appBoot() {
    generalCreation()
    loadButtons();
    // Setting the app to init with the General project from the manager
    load(managerObj.getProject('General').title);
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




