/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects\n// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project \n// manager will store and maintain the projects\n\nclass ToDo {\n    constructor(title, priority, notes) {\n        this.title = title;\n        this.priority = priority;\n        this.notes = notes;\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n    get title() {\n        return this._title;\n    }\n\n    set notes(newNotes) {\n        if (newNotes === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._notes = newNotes;\n    }\n    get notes() {\n        return this._notes;\n    }\n\n    set priority(newPriority) {\n        if (newPriority === '') {\n            throw 'Priority field cannot be empty';\n        }\n        this._priority = newPriority;\n    }\n    get priority() {\n        return this._priority;\n    }\n}\n\nclass Project {\n    constructor(title, description) {\n        this.title = title;\n        this.description = description;\n\n        this.toDoList = [];\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n    get title() {\n        return this._title;\n    }\n\n    set description(newDescription) {\n        this._description = newDescription;\n    }\n    get description() {\n        return this._description;\n    }\n\n    set toDoList(newList) {\n        this._toDoList = newList;\n    }\n    get toDoList() {\n        return this._toDoList;\n    }\n\n    addToDo(todo) {\n        if (!(todo instanceof ToDo)) {\n            throw 'Not a to-do!';\n        }\n        this.toDoList.push(todo);\n    }\n\n    removeToDo(id) {\n        for (let i = 0; i < this.toDoList.length; i++) {\n            if (this.toDoList[i]._title === id) {\n                this.toDoList.splice(i, 1);\n            }\n        }\n    }\n\n    getToDo(name) {\n        for (let i = 0; i < this.toDoList.length; i++) {\n            if (this.toDoList[i]._title === name) {\n                return this.toDoList[i];\n            }\n        }\n    }\n\n    // Sorts the todo list by priority - this is not a clean method but it works    \n    sortToDos() {\n        let newList = [];\n        let highList = [];\n        let medList = [];\n        let lowList = [];\n\n        for (let i = 0; i < this.toDoList.length; i++) {\n            if (this.toDoList[i]._priority === 'High') {\n                highList.push(this.toDoList[i]);\n            }\n            if (this.toDoList[i]._priority === 'Medium') {\n                medList.push(this.toDoList[i]);\n\n            }\n            if (this.toDoList[i]._priority === 'Low') {\n                lowList.push(this.toDoList[i]);\n            }\n        }\n\n        for (let i = 0; i < highList.length; i++) {\n            newList.push(highList[i]);\n        }\n        for (let i = 0; i < medList.length; i++) {\n            newList.push(medList[i]);\n        }\n        for (let i = 0; i < lowList.length; i++) {\n            newList.push(lowList[i]);\n        }\n\n        this.toDoList = newList;\n    }\n\n    clearAllToDo() {\n        this.toDoList = [];\n    }\n\n    printList() {\n        console.log(this.toDoList);\n    }\n}\n\nclass Manager {\n    constructor() {\n        this.projectList = [];\n    }\n\n    addProject(project) {\n        if (!(project instanceof Project)) {\n            throw 'Not a Project!';\n        }\n        this.projectList.push(project);\n    }\n\n    deleteProject(project) {\n        this.projectList.splice(this.projectList.indexOf(project), 1);\n    }\n\n    printProjects() {\n        console.log(this.projectList);\n    }\n\n    getProject(name) {\n        for (let i = 0; i < this.projectList.length; i++) {\n            if (this.projectList[i].title === name) {\n                return this.projectList[i];\n            };\n        };\n    }\n\n    get projectList() {\n        return this._projectList;\n    }\n    set projectList(newList) {\n        this._projectList = newList;\n    }\n}\n\n// THIS IS THE MAIN-BRAIN MANAGER - this is the variable that's setup to be global across all functions\nlet managerObj;\n\n// Turned this into a function so that I can init Manager where ever needed - currently run in bootloader\nfunction createManager() {\n    managerObj = new Manager();\n}\n\nfunction retrieveStorage() {\n    // Checks if there is a stored manager - if so extrapolates the data and forms objects and sets them on the manager\n    if (localStorage.getItem('storedManager')) {\n        let deserializedManager = JSON.parse(localStorage.getItem('storedManager'));\n        // makes a new list to store the fully built projects that are created while looping through json\n        let newProjectList = [];\n        for (let i = 0; i < deserializedManager._projectList.length; i++) {\n            let projectData = deserializedManager._projectList[i];\n\n            // creates a new to-do list for the project by looping through them in the json\n            let newToDoList = []\n            for (let j = 0; j < projectData._toDoList.length; j++) {\n                let toDoData = projectData._toDoList[j];\n                let newToDo = new ToDo(toDoData._title, toDoData._priority, toDoData._notes);\n                newToDoList.push(newToDo);\n            }\n            // Once the to-dos are built, it assembles the project object, attaches the new todo list and pushes them to the new project list\n            let newProject = new Project(projectData._title, projectData._description,);\n            newProject._toDoList = newToDoList;\n            newProjectList.push(newProject);\n        }\n        // once it finishes looping through the json, it sets the manager's project list to contain the saved data\n        managerObj._projectList = newProjectList;\n    } else {\n        // this runs if there is no saved data to load from, it will just init it with the basic general project\n        localStorage.setItem('storedManager', JSON.stringify(managerObj.projectList));\n        generalCreation();\n    }\n}\n\nfunction updateStorage() {\n    if (localStorage.getItem('storedManager')) {\n        localStorage.setItem('storedManager', JSON.stringify(managerObj))\n    }\n}\n\n// General Creation was the old test function that has been refactored into the constructor of our General project tab\n// This is used to provide the app with a project with 3 sample to-do's. Manager object is created with 'General' in the \n// array which is what is looked at to populate the tabs.\nfunction generalCreation() {\n\n    // GENERAL PROJECT IS TO INIT THE APP WITH SOME PREPOPULATED DATA AND ELEMENTS TO USE\n    let todo1 = new ToDo('Dishes', 'Medium', 'Do dishes');\n    let todo2 = new ToDo('Laundry', 'Low', 'Do laundry');\n    let todo3 = new ToDo('Trash', 'High', 'Takeout trash');\n\n    const generalProj = new Project('General', 'General tasks and chores');\n    generalProj.addToDo(todo1);\n    generalProj.addToDo(todo2);\n    generalProj.addToDo(todo3);\n    managerObj.addProject(generalProj);\n\n    // LEAVING THIS DATA IN CASE ITS EVER USEFUL TO TEST WITH A SECOND TEST FOR ARRAY PURPOSES\n    // const testProj = new Project('Test', 'and I helped!');\n    // let test1 = new ToDo('TEST', 'Medium', 'test Med');\n    // let test2 = new ToDo('Testing', 'Low', 'test Low');\n    // let test3 = new ToDo('test', 'High', 'test High');\n    // testProj.addToDo(test1);\n    // testProj.addToDo(test2);\n    // testProj.addToDo(test3);\n    // const testMng = new Manager();\n    // testMng.addProject(generalProj);\n    // managerObj.addProject(testProj);\n\n    updateStorage();\n}\n\n// Selecting the project body to interact with\nlet projectBody = document.getElementById('rightContainer');\n\nfunction load(id) {\n    // First 4 lines handle the class name logic - used to set the active element's proj button to be darkened \n    let oldSelection = document.querySelector('.proj-button-active');\n    if (oldSelection) { oldSelection.className = 'proj-button'; }\n    let button = document.getElementById(id);\n    if (button) { button.className = 'proj-button-active'; }\n    // After the class names are examined, it will then run the loadProject function which will load the data\n    loadProject(id);\n}\n\n// LOAD PROJECT IS THE BULK OF THE LOGIC - this is where the to-do list panel is built\nfunction loadProject(id) {\n    // The remove is first run to clear the page from the general project data and then rebuild it with the new data\n    projectBody.remove();\n    // setting the new div to contain the id and class of the original\n    const newBody = document.createElement('div');\n    newBody.id = 'rightContainer';\n    newBody.className = 'right-container';\n    document.getElementById('midRight').appendChild(newBody);\n\n    // Creating a div in which project data is loaded into, this is fed into the above container - this is the one that will actually house the projects data\n    const projectDiv = document.createElement('div');\n    projectDiv.className = 'project-div';\n    projectDiv.id = 'projectDiv';\n    newBody.appendChild(projectDiv);\n\n    // Line below reaches into the manager and pulls out the object to extrapolate data\n    const projectObj = managerObj.getProject(id);\n\n    // Creating header info to display the title and description of the project\n    const headerDiv = document.createElement('div');\n    const headerSpan = document.createElement('span');\n    headerDiv.className = 'header-div';\n    headerSpan.className = 'header-span';\n    // Setting the header text values for name and description of project to go at top of panel\n    const headerH1 = document.createElement('h1');\n    headerH1.className = 'header1';\n    headerH1.textContent = projectObj.title;\n    headerSpan.appendChild(headerH1);\n    const headerH3 = document.createElement('h3');\n    headerH3.className = 'header3';\n    headerH3.textContent = projectObj.description;\n    headerSpan.appendChild(headerH3);\n    headerDiv.appendChild(headerSpan);\n\n    // Creating the 'Add ToDo' button\n    const buttonDiv = document.createElement('div');\n    buttonDiv.className = 'add-todo-div';\n    const addToDoBtn = document.createElement('button');\n    addToDoBtn.className = 'add-todo-btn';\n    addToDoBtn.innerHTML = 'Add To Do';\n    addToDoBtn.addEventListener('click', function () { addToDo(id) });\n    buttonDiv.appendChild(addToDoBtn);\n\n    newBody.appendChild(headerDiv);\n    newBody.appendChild(buttonDiv);\n\n    loadToDos(id);\n\n    // This line below is essential for setting the global projectBody variable to this new value.\n    // This is needed to retain the object after it is removed at the start of loadProject. It is null otherwise, this reloads it\n    projectBody = newBody;\n}\n\n// The logic block for looping through the project and constructing the to-do elements on the page\nfunction loadToDos(id) {\n    const projectObj = managerObj.getProject(id);\n    projectObj.getProject\n    // Runs this at the start to order the list in priority of high to low\n    projectObj.sortToDos();\n\n    // This clears the div of any previous data loaded - this is needed for fresh list after editing a todo in saveToDoEdit\n    let projectDiv = document.getElementById('projectDiv');\n    projectDiv.textContent = '';\n\n\n    // This for loop goes through the actual project's to-do list and builds that info onto the page\n    for (let i = 0; i < projectObj.toDoList.length; i++) {\n        // Creating a P tag to contain spans that will contain the info - this element houses border/spacing styles\n        const elementLine = document.createElement('p');\n        projectDiv.appendChild(elementLine);\n\n        // Constructs the individual spans that combine together-this allows each span to have a class name for styling\n        const prioritySpan = document.createElement('span');\n        elementLine.appendChild(prioritySpan);\n\n        const titleSpan = document.createElement('span');\n        elementLine.appendChild(titleSpan);\n        const dueDatetSpan = document.createElement('span');\n        elementLine.appendChild(dueDatetSpan);\n        const notesSpan = document.createElement('span');\n        elementLine.appendChild(notesSpan);\n\n\n        const toDoObj = projectObj.toDoList[i];\n        const priority = toDoObj._priority;\n        const title = toDoObj._title;\n        const notes = toDoObj._notes;\n\n        // This is used to set the class for CSS to apply the correct colored dot to indicate priority\n        if (priority === 'High') {\n            prioritySpan.className = 'priority-high';\n        } else if (priority === 'Medium') {\n            prioritySpan.className = 'priority-med';\n        } else {\n            prioritySpan.className = 'priority-low';\n        }\n\n        prioritySpan.textContent = '   ';\n        titleSpan.textContent = title;\n        if (notes.length >= 30) {\n            let shortenedNotes = notes.slice(0, 29);\n            shortenedNotes = `${shortenedNotes}...`;\n            notesSpan.textContent = shortenedNotes;\n        } else {\n            notesSpan.textContent = notes;\n        }\n\n        // Creating the edit and delete buttons, adding listener functions and adding to end of span\n        const editButton = document.createElement('button');\n        editButton.textContent = 'EDIT';\n        editButton.classList = 'edit-button todo-button';\n        editButton.id = 'editButton';\n        const deleteButton = document.createElement('button');\n        deleteButton.textContent = 'DELETE';\n        deleteButton.classList = 'delete-button todo-button';\n        deleteButton.id = 'deleteButton';\n\n        editButton.addEventListener('click', function () { editToDo(id, title) });\n        deleteButton.addEventListener('click', function () { deleteToDo(id, title) });\n\n        elementLine.appendChild(editButton);\n        elementLine.appendChild(deleteButton);\n    }\n}\n\n// Takes in a id to grab the correct project and a title for the todo that needs to be deleted, delets and refreshes the panel to reflect the updated list\nfunction deleteToDo(id, title) {\n    const projectObj = managerObj.getProject(id);\n    projectObj.removeToDo(title);\n    updateStorage();\n    loadProject(id);\n}\n\n// Builds the editing modal and elements within it\nfunction editToDo(id, title) {\n\n    // WIPES THE WINDOW OF ANY PREVIOUS EDITS\n    let todoContent = document.querySelector('.todo-data');\n    todoContent.textContent = '';\n\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Edit To-Do';\n    todoContent.appendChild(h2);\n\n    // Loading the project into memory to fetch the to do object\n    const projectObj = managerObj.getProject(id);\n    const toDoObj = projectObj.getToDo(title);\n\n    // THIS IS THE MODAL LOGIC THAT WAS FOUND AT W3 SCHOOLS\n    var modal = document.getElementById(\"editModal\");\n    modal.style.display = \"block\";\n    var span = document.getElementsByClassName(\"close\")[0];\n    // When the user clicks the button, open the modal \n    // When the user clicks on <span> (x), close the modal\n    span.addEventListener('click', function () {\n        modal.style.display = \"none\";\n    })\n    // When the user clicks anywhere outside of the modal, close it\n    window.onclick = function (event) {\n        if (event.target == modal) {\n            modal.style.display = \"none\";\n        }\n    }\n    const nameDiv = document.createElement('div');\n    let nameField = document.createElement(\"input\");\n    nameField.type = 'text';\n    nameField.id = 'nameField';\n    nameField.value = toDoObj.title;\n    const nameLabel = document.createElement('label');\n    nameLabel.setAttribute('for', nameField.id);\n    nameLabel.innerHTML = 'Name';\n    nameDiv.appendChild(nameLabel);\n    nameDiv.appendChild(nameField);\n    nameDiv.className = 'edit-name';\n\n    const priorityDiv = document.createElement('div');\n    let priorityField = document.createElement(\"select\");\n    priorityField.id = 'priorityField';\n    const priorityLabel = document.createElement('label');\n    priorityLabel.setAttribute('for', priorityField.id);\n    priorityLabel.innerHTML = 'Priority';\n    priorityDiv.appendChild(priorityLabel);\n    priorityDiv.appendChild(priorityField);\n    priorityDiv.className = 'edit-priority';\n    // Loops through and creates the priority list then at the end sets the loaded value to the same as the object\n    var priorityArray = ['High', 'Medium', 'Low'];\n    for (let i = 0; i < priorityArray.length; i++) {\n        var option = document.createElement('option');\n        option.value = priorityArray[i];\n        option.text = priorityArray[i];\n        priorityField.appendChild(option);\n    }\n    priorityField.value = toDoObj.priority;\n\n    const notesDiv = document.createElement('div');\n    let notesField = document.createElement(\"textarea\");\n    notesField.id = 'notesField';\n    notesField.rows = 5;\n    notesField.className = 'notes';\n    notesField.value = toDoObj.notes;\n    const notesLabel = document.createElement('label');\n    notesLabel.setAttribute('for', notesField.id);\n    notesLabel.innerHTML = 'Notes';\n    notesDiv.appendChild(notesLabel);\n    notesDiv.appendChild(notesField);\n    notesDiv.className = 'edit-notes';\n\n    todoContent.appendChild(nameDiv);\n    todoContent.appendChild(priorityDiv);\n    todoContent.appendChild(notesDiv);\n\n    // Create the save button at the end to pass data into saveToDoEdit function\n    const saveEditBtn = document.createElement('button');\n    saveEditBtn.textContent = 'Save';\n    saveEditBtn.className = 'save-button';\n    saveEditBtn.addEventListener('click', function () { saveToDoEdit(id, title, nameField.value, priorityField.value, notesField.value) });\n    todoContent.appendChild(saveEditBtn)\n}\n\n// Handles the saving of the edit for a todo that was done in editToDo\nfunction saveToDoEdit(id, title, nameField, priorityField, notesField) {\n    // Takes in the project object for rerunning sort after saving the todo\n    const projectObj = managerObj.getProject(id);\n    // fetches this object from the stored array\n    const toDoObj = projectObj.getToDo(title);\n    // saves the new values to the todo\n    toDoObj.title = nameField;\n    toDoObj.priority = priorityField;\n    toDoObj.notes = notesField;\n\n    // this changes the modals style to none so that it closes\n    document.getElementById('editModal').style.display = 'none';\n    projectObj.sortToDos();\n    loadToDos(id);\n    updateStorage()\n}\n\n// Builds the add modal and elements within it\nfunction addToDo(id) {\n    // WIPES THE WINDOW OF ANY PREVIOUS EDITS\n    let todoContent = document.querySelector('.todo-data');\n    todoContent.textContent = '';\n\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Add New To-Do';\n    todoContent.appendChild(h2);\n\n    // THIS IS THE MODAL LOGIC THAT WAS FOUND AT W3 SCHOOLS\n    var modal = document.getElementById(\"editModal\");\n    modal.style.display = \"block\";\n    var span = document.getElementsByClassName(\"close\")[0];\n    // When the user clicks the button, open the modal \n    // When the user clicks on <span> (x), close the modal\n    span.addEventListener('click', function () {\n        modal.style.display = \"none\";\n    })\n    // When the user clicks anywhere outside of the modal, close it\n    window.onclick = function (event) {\n        if (event.target == modal) {\n            modal.style.display = \"none\";\n        }\n    }\n    const nameDiv = document.createElement('div');\n    let nameField = document.createElement(\"input\");\n    nameField.type = 'text';\n    nameField.id = 'nameField';\n    const nameLabel = document.createElement('label');\n    nameLabel.setAttribute('for', nameField.id);\n    nameLabel.innerHTML = 'Name';\n    nameDiv.appendChild(nameLabel);\n    nameDiv.appendChild(nameField);\n    nameDiv.className = 'edit-name';\n\n    const priorityDiv = document.createElement('div');\n    let priorityField = document.createElement(\"select\");\n    priorityField.id = 'priorityField';\n    const priorityLabel = document.createElement('label');\n    priorityLabel.setAttribute('for', priorityField.id);\n    priorityLabel.innerHTML = 'Priority';\n    priorityDiv.appendChild(priorityLabel);\n    priorityDiv.appendChild(priorityField);\n    priorityDiv.className = 'edit-priority';\n    // Loops through and creates the priority list then at the end sets the loaded value to the same as the object\n    var priorityArray = ['High', 'Medium', 'Low'];\n    for (let i = 0; i < priorityArray.length; i++) {\n        var option = document.createElement('option');\n        option.value = priorityArray[i];\n        option.text = priorityArray[i];\n        priorityField.appendChild(option);\n    }\n\n    const notesDiv = document.createElement('div');\n    let notesField = document.createElement(\"textarea\");\n    notesField.id = 'notesField';\n    notesField.rows = 5;\n    notesField.className = 'notes';\n    const notesLabel = document.createElement('label');\n    notesLabel.setAttribute('for', notesField.id);\n    notesLabel.innerHTML = 'Notes';\n    notesDiv.appendChild(notesLabel);\n    notesDiv.appendChild(notesField);\n    notesDiv.className = 'edit-notes';\n\n    todoContent.appendChild(nameDiv);\n    todoContent.appendChild(priorityDiv);\n    todoContent.appendChild(notesDiv);\n\n    // Create the save button at the end to pass data into saveToDoEdit function\n    const saveEditBtn = document.createElement('button');\n    saveEditBtn.textContent = 'Save';\n    saveEditBtn.className = 'save-button';\n    saveEditBtn.addEventListener('click', function () { saveNewToDo(id, nameField.value, priorityField.value, notesField.value) });\n    todoContent.appendChild(saveEditBtn)\n}\n\n// Handles saving the new To Do to its project\nfunction saveNewToDo(id, name, priority, notes) {\n    const newToDo = new ToDo(name, priority, notes);\n    const projectObj = managerObj.getProject(id);\n    projectObj.addToDo(newToDo);\n    // this changes the modals style to none so that it closes\n    document.getElementById('editModal').style.display = 'none';\n    projectObj.sortToDos();\n    loadToDos(id);\n    updateStorage()\n}\n\n// Loads the modal and builds the body of elements for user to enter in the new project\nfunction addProject() {\n    // WIPES THE WINDOW OF ANY PREVIOUS EDITS\n    let projectContent = document.querySelector('.project-data');\n    projectContent.textContent = '';\n\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Add New Project';\n    projectContent.appendChild(h2);\n\n\n    // THIS IS THE MODAL LOGIC THAT WAS FOUND AT W3 SCHOOLS\n    var modal = document.getElementById(\"addModal\");\n    modal.style.display = \"block\";\n    var span = document.getElementsByClassName(\"close\")[0];\n    // When the user clicks the button, open the modal \n    // When the user clicks on <span> (x), close the modal\n    span.addEventListener('click', function () {\n        modal.style.display = \"none\";\n    })\n    // When the user clicks anywhere outside of the modal, close it\n    window.onclick = function (event) {\n        if (event.target == modal) {\n            modal.style.display = \"none\";\n        }\n    }\n\n    const nameDiv = document.createElement('div');\n    let nameField = document.createElement(\"input\");\n    nameField.type = 'text';\n    nameField.id = 'nameField';\n    const nameLabel = document.createElement('label');\n    nameLabel.setAttribute('for', nameField.id);\n    nameLabel.innerHTML = 'Name';\n    nameDiv.appendChild(nameLabel);\n    nameDiv.appendChild(nameField);\n    nameDiv.className = 'edit-name';\n\n\n    const descriptionDiv = document.createElement('div');\n    let descriptionText = document.createElement(\"textarea\");\n    descriptionText.rows = 3;\n    descriptionText.className = 'notes';\n    const descriptionLabel = document.createElement('label');\n    descriptionLabel.setAttribute('for', descriptionText.id);\n    descriptionLabel.innerHTML = 'Description of Project';\n    descriptionDiv.appendChild(descriptionLabel);\n    descriptionDiv.appendChild(descriptionText);\n    descriptionDiv.className = 'notes';\n\n    projectContent.appendChild(nameDiv);\n    projectContent.appendChild(descriptionDiv);\n\n    // Create the save button at the end to pass data into saveToDoEdit function\n    const saveEditBtn = document.createElement('button');\n    saveEditBtn.textContent = 'Save';\n    saveEditBtn.className = 'save-button';\n    saveEditBtn.addEventListener('click', function () { saveNewProject(nameField.value, descriptionText.value) });\n    projectContent.appendChild(saveEditBtn)\n}\n// Handles actually saving the new project and repopulating the projects list to update\nfunction saveNewProject(name, description) {\n    const newProj = new Project(name, description);\n    managerObj.addProject(newProj);\n    document.getElementById('addModal').style.display = 'none';\n    loadButtons();\n    updateStorage()\n}\n\n// Loops through manager object's project list and creates the buttons for all the projects in the manager obj's array\nfunction loadButtons() {\n    let projectList = document.getElementById('projects');\n    projectList.textContent = '';\n    for (let i = 0; i < managerObj.projectList.length; i++) {\n        const projButton = document.createElement('button');\n        let projObj = managerObj.projectList[i];\n        if (projObj.title.length >= 9) {\n            const shortTitle = projObj.title.slice(0, 9)\n            projButton.textContent = `${shortTitle}...`;\n        } else {\n            projButton.textContent = projObj.title;\n        }\n        projButton.className = 'proj-button';\n        projButton.id = projObj.title;\n        projButton.addEventListener('click', function () { load(projButton.id) });\n        projectList.appendChild(projButton);\n    }\n}\n\n// Creating 1 function at the end to run the init functions so everything has a chance to instantiate before calling\nfunction appBoot() {\n    createManager();\n    retrieveStorage();\n    loadButtons();\n    // Setting the app to init with the General project from the manager\n    load(managerObj.getProject('General').title);\n    // adds event listener for add project button to call the addProject function\n    let addProjectBtn = document.getElementById('addProj');\n    addProjectBtn.addEventListener('click', function () { addProject() });\n}\n\nappBoot();\n\n//# sourceURL=webpack://tor-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;