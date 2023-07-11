// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects
// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project 
// manager will store and maintain the projects

class ToDo {
    constructor(title, priority, notes) {
        this.title = title;
        this.priority = priority;
        this.notes = notes;
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

    set notes(newNotes) {
        if (newNotes === '') {
            throw 'Date field cannot be empty';
        }
        this._notes = newNotes;
    }
    get notes() {
        return this._notes;
    }

    set priority(newPriority) {
        if (newPriority === '') {
            throw 'Priority field cannot be empty';
        }
        this._priority = newPriority;
    }
    get priority() {
        return this._priority;
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

    set description(newDescription) {
        this._description = newDescription;
    }
    get description() {
        return this._description;
    }

    set toDoList(newList) {
        this._toDoList = newList;
    }
    get toDoList() {
        return this._toDoList;
    }

    addToDo(todo) {
        if (!(todo instanceof ToDo)) {
            throw 'Not a to-do!';
        }
        this.toDoList.push(todo);
    }

    removeToDo(id) {
        for (let i = 0; i < this.toDoList.length; i++) {
            if (this.toDoList[i]._title === id) {
                this.toDoList.splice(i, 1);
            }
        }
    }

    getToDo(name) {
        for (let i = 0; i < this.toDoList.length; i++) {
            if (this.toDoList[i]._title === name) {
                return this.toDoList[i];
            }
        }
    }

    // Sorts the todo list by priority - this is not a clean method but it works    
    sortToDos() {
        let newList = [];
        let highList = [];
        let medList = [];
        let lowList = [];

        for (let i = 0; i < this.toDoList.length; i++) {
            if (this.toDoList[i]._priority === 'High') {
                highList.push(this.toDoList[i]);
            }
            if (this.toDoList[i]._priority === 'Medium') {
                medList.push(this.toDoList[i]);

            }
            if (this.toDoList[i]._priority === 'Low') {
                lowList.push(this.toDoList[i]);
            }
        }

        for (let i = 0; i < highList.length; i++) {
            newList.push(highList[i]);
        }
        for (let i = 0; i < medList.length; i++) {
            newList.push(medList[i]);
        }
        for (let i = 0; i < lowList.length; i++) {
            newList.push(lowList[i]);
        }

        this.toDoList = newList;
    }

    clearAllToDo() {
        this.toDoList = [];
    }

    printList() {
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

    get projectList() {
        return this._projectList;
    }
    set projectList(newList) {
        this._projectList = newList;
    }
}

// THIS IS THE MAIN-BRAIN MANAGER - this is the variable that's setup to be global across all functions
let managerObj;

// Turned this into a function so that I can init Manager where ever needed - currently run in bootloader
function createManager() {
    managerObj = new Manager();
}

function retrieveStorage() {
    // Checks if there is a stored manager - if so extrapolates the data and forms objects and sets them on the manager
    if (localStorage.getItem('storedManager')) {
        let deserializedManager = JSON.parse(localStorage.getItem('storedManager'));
        // makes a new list to store the fully built projects that are created while looping through json
        let newProjectList = [];
        for (let i = 0; i < deserializedManager._projectList.length; i++) {
            let projectData =deserializedManager._projectList[i];

            // creates a new to-do list for the project by looping through them in the json
            let newToDoList = []
            for (let j = 0; j < projectData._toDoList.length; j++) {
                let toDoData = projectData._toDoList[j];
                let newToDo = new ToDo(toDoData._title, toDoData._priority, toDoData._notes);
                newToDoList.push(newToDo);
            }
            // Once the to-dos are built, it assembles the project object, attaches the new todo list and pushes them to the new project list
            let newProject = new Project(projectData._title, projectData._description,);
            newProject._toDoList = newToDoList;
            newProjectList.push(newProject);
        }
        // once it finishes looping through the json, it sets the manager's project list to contain the saved data
        managerObj._projectList = newProjectList;
    } else {
        // this runs if there is no saved data to load from, it will just init it with the basic general project
        localStorage.setItem('storedManager', JSON.stringify(managerObj.projectList));
        generalCreation();
    }
}

function updateStorage() {
    if (localStorage.getItem('storedManager')) {
        localStorage.setItem('storedManager', JSON.stringify(managerObj))
    }
}

// General Creation was the old test function that has been refactored into the constructor of our General project tab
// This is used to provide the app with a project with 3 sample to-do's. Manager object is created with 'General' in the 
// array which is what is looked at to populate the tabs.
function generalCreation() {

    // BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED
    let todo1 = new ToDo('Dishes', 'Medium', 'Do dishes');
    let todo2 = new ToDo('Laundry', 'Low', 'Do laundry');
    let todo3 = new ToDo('Trash', 'High', 'Takeout trash');

    const generalProj = new Project('General', 'General tasks and chores');
    generalProj.addToDo(todo1);
    generalProj.addToDo(todo2);
    generalProj.addToDo(todo3);

    // Test proj will be removed afterwards. This is only to have a second data set instantiated
    const testProj = new Project('Test', 'and I helped!');
    let test1 = new ToDo('TEST', 'Medium', 'test Med');
    let test2 = new ToDo('Testing', 'Low', 'test Low');
    let test3 = new ToDo('test', 'High', 'test High');
    testProj.addToDo(test1);
    testProj.addToDo(test2);
    testProj.addToDo(test3);

    // TEST MANAGER IS NOT NEEDED ANY LONGER - regular manager that lives global takes care of this - WILL REMOVE WHEN DONE
    const testMng = new Manager();
    testMng.addProject(generalProj);

    managerObj.addProject(generalProj);
    managerObj.addProject(testProj);

    updateStorage();
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
    headerDiv.className = 'header-div';
    headerSpan.className = 'header-span';
    // Setting the header text values for name and description of project to go at top of panel
    const headerH1 = document.createElement('h1');
    headerH1.className = 'header1';
    headerH1.textContent = projectObj.title;
    headerSpan.appendChild(headerH1);
    const headerH3 = document.createElement('h3');
    headerH3.className = 'header3';
    headerH3.textContent = projectObj.description;
    headerSpan.appendChild(headerH3);
    headerDiv.appendChild(headerSpan);

    // Creating the 'Add ToDo' button
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'add-todo-div';
    const addToDoBtn = document.createElement('button');
    addToDoBtn.className = 'add-todo-btn';
    addToDoBtn.innerHTML = 'Add To Do';
    addToDoBtn.addEventListener('click', function () { addToDo(id) });
    buttonDiv.appendChild(addToDoBtn);

    newBody.appendChild(headerDiv);
    newBody.appendChild(buttonDiv);

    loadToDos(id);

    // This line below is essential for setting the global projectBody variable to this new value.
    // This is needed to retain the object after it is removed at the start of loadProject. It is null otherwise, this reloads it
    projectBody = newBody;
}

// The logic block for looping through the project and constructing the to-do elements on the page
function loadToDos(id) {
    const projectObj = managerObj.getProject(id);
    projectObj.getProject
    // Runs this at the start to order the list in priority of high to low
    projectObj.sortToDos();

    // This clears the div of any previous data loaded - this is needed for fresh list after editing a todo in saveToDoEdit
    let projectDiv = document.getElementById('projectDiv');
    projectDiv.textContent = '';


    // This for loop goes through the actual project's to-do list and builds that info onto the page
    for (let i = 0; i < projectObj.toDoList.length; i++) {
        // Creating a P tag to contain spans that will contain the info - this element houses border/spacing styles
        const elementLine = document.createElement('p');
        projectDiv.appendChild(elementLine);

        // Constructs the individual spans that combine together-this allows each span to have a class name for styling
        const prioritySpan = document.createElement('span');
        elementLine.appendChild(prioritySpan);

        const titleSpan = document.createElement('span');
        elementLine.appendChild(titleSpan);
        const dueDatetSpan = document.createElement('span');
        elementLine.appendChild(dueDatetSpan);
        const notesSpan = document.createElement('span');
        elementLine.appendChild(notesSpan);


        const toDoObj = projectObj.toDoList[i];
        const priority = toDoObj._priority;
        const title = toDoObj._title;
        const notes = toDoObj._notes;

        // This is used to set the class for CSS to apply the correct colored dot to indicate priority
        if (priority === 'High') {
            prioritySpan.className = 'priority-high';
        } else if (priority === 'Medium') {
            prioritySpan.className = 'priority-med';
        } else {
            prioritySpan.className = 'priority-low';
        }

        prioritySpan.textContent = '   ';
        titleSpan.textContent = title;
        if (notes.length >= 30) {
            let shortenedNotes = notes.slice(1, 29);
            shortenedNotes = `${shortenedNotes}...`;
            notesSpan.textContent = shortenedNotes;
        } else {
            notesSpan.textContent = notes;
        }

        // Creating the edit and delete buttons, adding listener functions and adding to end of span
        const editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.classList = 'edit-button todo-button';
        editButton.id = 'editButton';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.classList = 'delete-button todo-button';
        deleteButton.id = 'deleteButton';

        editButton.addEventListener('click', function () { editToDo(id, title) });
        deleteButton.addEventListener('click', function () { deleteToDo(id, title) });

        elementLine.appendChild(editButton);
        elementLine.appendChild(deleteButton);
    }
}

// Takes in a id to grab the correct project and a title for the todo that needs to be deleted, delets and refreshes the panel to reflect the updated list
function deleteToDo(id, title) {
    const projectObj = managerObj.getProject(id);
    projectObj.removeToDo(title);
    updateStorage();
    loadProject(id);
}

// Builds the editing modal and elements within it
function editToDo(id, title) {

    // WIPES THE WINDOW OF ANY PREVIOUS EDITS
    let todoContent = document.querySelector('.todo-data');
    todoContent.textContent = '';

    const h2 = document.createElement('h2');
    h2.textContent = 'Edit To-Do';
    todoContent.appendChild(h2);

    // Loading the project into memory to fetch the to do object
    const projectObj = managerObj.getProject(id);
    const toDoObj = projectObj.getToDo(title);

    // THIS IS THE MODAL LOGIC THAT WAS FOUND AT W3 SCHOOLS
    var modal = document.getElementById("editModal");
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function () {
        modal.style.display = "none";
    })
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    const nameDiv = document.createElement('div');
    let nameField = document.createElement("input");
    nameField.type = 'text';
    nameField.id = 'nameField';
    nameField.value = toDoObj.title;
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', nameField.id);
    nameLabel.innerHTML = 'Name';
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameField);
    nameDiv.className = 'edit-name';

    const priorityDiv = document.createElement('div');
    let priorityField = document.createElement("select");
    priorityField.id = 'priorityField';
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', priorityField.id);
    priorityLabel.innerHTML = 'Priority';
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityField);
    priorityDiv.className = 'edit-priority';
    // Loops through and creates the priority list then at the end sets the loaded value to the same as the object
    var priorityArray = ['High', 'Medium', 'Low'];
    for (let i = 0; i < priorityArray.length; i++) {
        var option = document.createElement('option');
        option.value = priorityArray[i];
        option.text = priorityArray[i];
        priorityField.appendChild(option);
    }
    priorityField.value = toDoObj.priority;

    const notesDiv = document.createElement('div');
    let notesField = document.createElement("textarea");
    notesField.id = 'notesField';
    notesField.rows = 5;
    notesField.className = 'notes';
    notesField.value = toDoObj.notes;
    const notesLabel = document.createElement('label');
    notesLabel.setAttribute('for', notesField.id);
    notesLabel.innerHTML = 'Notes';
    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notesField);
    notesDiv.className = 'edit-notes';

    todoContent.appendChild(nameDiv);
    todoContent.appendChild(priorityDiv);
    todoContent.appendChild(notesDiv);

    // Create the save button at the end to pass data into saveToDoEdit function
    const saveEditBtn = document.createElement('button');
    saveEditBtn.textContent = 'Save';
    saveEditBtn.className = 'save-button';
    saveEditBtn.addEventListener('click', function () { saveToDoEdit(id, title, nameField.value, priorityField.value, notesField.value) });
    todoContent.appendChild(saveEditBtn)
}

// Handles the saving of the edit for a todo that was done in editToDo
function saveToDoEdit(id, title, nameField, priorityField, notesField) {
    // Takes in the project object for rerunning sort after saving the todo
    const projectObj = managerObj.getProject(id);
    // fetches this object from the stored array
    const toDoObj = projectObj.getToDo(title);
    // saves the new values to the todo
    toDoObj.title = nameField;
    toDoObj.priority = priorityField;
    toDoObj.notes = notesField;

    // this changes the modals style to none so that it closes
    document.getElementById('editModal').style.display = 'none';
    projectObj.sortToDos();
    loadToDos(id);
    updateStorage()
}

// Builds the add modal and elements within it
function addToDo(id) {
    // WIPES THE WINDOW OF ANY PREVIOUS EDITS
    let todoContent = document.querySelector('.todo-data');
    todoContent.textContent = '';

    const h2 = document.createElement('h2');
    h2.textContent = 'Add New To-Do';
    todoContent.appendChild(h2);

    // THIS IS THE MODAL LOGIC THAT WAS FOUND AT W3 SCHOOLS
    var modal = document.getElementById("editModal");
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function () {
        modal.style.display = "none";
    })
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    const nameDiv = document.createElement('div');
    let nameField = document.createElement("input");
    nameField.type = 'text';
    nameField.id = 'nameField';
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', nameField.id);
    nameLabel.innerHTML = 'Name';
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameField);
    nameDiv.className = 'edit-name';

    const priorityDiv = document.createElement('div');
    let priorityField = document.createElement("select");
    priorityField.id = 'priorityField';
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', priorityField.id);
    priorityLabel.innerHTML = 'Priority';
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityField);
    priorityDiv.className = 'edit-priority';
    // Loops through and creates the priority list then at the end sets the loaded value to the same as the object
    var priorityArray = ['High', 'Medium', 'Low'];
    for (let i = 0; i < priorityArray.length; i++) {
        var option = document.createElement('option');
        option.value = priorityArray[i];
        option.text = priorityArray[i];
        priorityField.appendChild(option);
    }

    const notesDiv = document.createElement('div');
    let notesField = document.createElement("textarea");
    notesField.id = 'notesField';
    notesField.rows = 5;
    notesField.className = 'notes';
    const notesLabel = document.createElement('label');
    notesLabel.setAttribute('for', notesField.id);
    notesLabel.innerHTML = 'Notes';
    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notesField);
    notesDiv.className = 'edit-notes';

    todoContent.appendChild(nameDiv);
    todoContent.appendChild(priorityDiv);
    todoContent.appendChild(notesDiv);

    // Create the save button at the end to pass data into saveToDoEdit function
    const saveEditBtn = document.createElement('button');
    saveEditBtn.textContent = 'Save';
    saveEditBtn.className = 'save-button';
    saveEditBtn.addEventListener('click', function () { saveNewToDo(id, nameField.value, priorityField.value, notesField.value) });
    todoContent.appendChild(saveEditBtn)
}

// Handles saving the new To Do to its project
function saveNewToDo(id, name, priority, notes) {
    const newToDo = new ToDo(name, priority, notes);
    const projectObj = managerObj.getProject(id);
    projectObj.addToDo(newToDo);
    // this changes the modals style to none so that it closes
    document.getElementById('editModal').style.display = 'none';
    projectObj.sortToDos();
    loadToDos(id);
    updateStorage()
}

// Loads the modal and builds the body of elements for user to enter in the new project
function addProject() {
    // WIPES THE WINDOW OF ANY PREVIOUS EDITS
    let projectContent = document.querySelector('.project-data');
    projectContent.textContent = '';

    const h2 = document.createElement('h2');
    h2.textContent = 'Add New Project';
    projectContent.appendChild(h2);


    // THIS IS THE MODAL LOGIC THAT WAS FOUND AT W3 SCHOOLS
    var modal = document.getElementById("addModal");
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function () {
        modal.style.display = "none";
    })
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const nameDiv = document.createElement('div');
    let nameField = document.createElement("input");
    nameField.type = 'text';
    nameField.id = 'nameField';
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', nameField.id);
    nameLabel.innerHTML = 'Name';
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameField);
    nameDiv.className = 'edit-name';


    const descriptionDiv = document.createElement('div');
    let descriptionText = document.createElement("textarea");
    descriptionText.rows = 3;
    descriptionText.className = 'notes';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', descriptionText.id);
    descriptionLabel.innerHTML = 'Description of Project';
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionText);
    descriptionDiv.className = 'notes';

    projectContent.appendChild(nameDiv);
    projectContent.appendChild(descriptionDiv);

    // Create the save button at the end to pass data into saveToDoEdit function
    const saveEditBtn = document.createElement('button');
    saveEditBtn.textContent = 'Save';
    saveEditBtn.className = 'save-button';
    saveEditBtn.addEventListener('click', function () { saveNewProject(nameField.value, descriptionText.value) });
    projectContent.appendChild(saveEditBtn)
}
// Handles actually saving the new project and repopulating the projects list to update
function saveNewProject(name, description) {
    const newProj = new Project(name, description);
    managerObj.addProject(newProj);
    document.getElementById('addModal').style.display = 'none';
    loadButtons();
    updateStorage()
}

// Loops through manager object's project list and creates the buttons for all the projects in the manager obj's array
function loadButtons() {
    let projectList = document.getElementById('projects');
    projectList.textContent = '';
    for (let i = 0; i < managerObj.projectList.length; i++) {
        const projButton = document.createElement('button');
        let projObj = managerObj.projectList[i];
        if (projObj.title.length >= 9) {
            const shortTitle = projObj.title.slice(1, 9)
            projButton.textContent = `${shortTitle}...`;
        } else {
            projButton.textContent = projObj.title;
        }
        projButton.className = 'proj-button';
        projButton.id = projObj.title;
        projButton.addEventListener('click', function () { load(projButton.id) });
        projectList.appendChild(projButton);
    }
}

// Creating 1 function at the end to run the init functions so everything has a chance to instantiate before calling
function appBoot() {
    createManager();
    retrieveStorage();
    loadButtons();
    // Setting the app to init with the General project from the manager
    load(managerObj.getProject('General').title);
    // adds event listener for add project button to call the addProject function
    let addProjectBtn = document.getElementById('addProj');
    addProjectBtn.addEventListener('click', function () { addProject() });
}

appBoot();