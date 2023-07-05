/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects\n// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project \n// manager will store and maintain the projects\n\nclass ToDo {\n    constructor(title, dueDate, priority, notes) {\n        this.title = title;\n        // commenting this line out because I have no implemented dates yet\n        // if (!(dueDate instanceof Date)) {\n        //     throw new Error('Not a valid date!');\n        // }\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n\n        this.completed = false;\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n\n    set dueDate(newDate) {\n        if (newDate === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._dueDate = newDate;\n    }\n\n    set notes(newNotes) {\n        if (newNotes === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._notes = newNotes;\n    }\n\n    set priority(newPriority) {\n        if (newPriority === '') {\n            throw 'Priority field cannot be empty';\n        }\n        this._priority = newPriority;\n    }\n}\n\nclass Project {\n\n    constructor(title, description) {\n        this.title = title;\n        this.description = description;\n\n        this.toDoList = [];\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n    get title() {\n        return this._title;\n    }\n\n    addToDo(todo) {\n        if (!(todo instanceof ToDo)) {\n            throw 'Not a to-do!';\n        }\n        this.toDoList.push(todo);\n    }\n\n    removeToDo(todo) {\n        if (todo === undefined) {\n            throw 'Must include a to-do to remove';\n        }\n        this.toDoList.splice(this.toDoList.indexOf(todo), 1);\n    }\n\n    clearAllToDo() {\n        this.toDoList = [];\n    }\n\n    printList() {\n        // this.toDoList.forEach((todo) => {\n        //     console.log(todo);\n        // });\n        console.log(this.toDoList);\n    }\n}\n\nclass Manager {\n\n    constructor() {\n        this.projectList = [];\n    }\n\n    addProject(project) {\n        if (!(project instanceof Project)) {\n            throw 'Not a Project!';\n        }\n        this.projectList.push(project);\n    }\n\n    deleteProject(project) {\n        this.projectList.splice(this.projectList.indexOf(project), 1);\n    }\n\n    printProjects() {\n        // this.toDoList.forEach((todo) => {\n        //     console.log(todo);\n        // });\n        console.log(this.projectList);\n    }\n\n    getProject(name) {\n        for (let i = 0; i < this.projectList.length; i++) {\n                if(this.projectList[i].title === name){\n                    return this.projectList[i];\n                };\n        };\n    }\n}\n\n// THIS IS THE MAIN HONCHO MANAGER - this is the object that is built and loaded into on initial page load\nlet managerObj = new Manager();\n\n// General Creation was the old test function that has been refactored into the constructor of our General project tab\n// This is used to provide the app with a project with 3 sample to-do's. Manager object is created with 'General' in the \n// array which is what is looked at to populate the tabs.\nfunction generalCreation() {\n    // BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED\n    let test1 = new ToDo('Dishes', '1/1/01', '1', 'do dishes');\n    let test2 = new ToDo('Laundry', '2/1/01', '2', 'do laundry');\n    let test3 = new ToDo('Trash', '3/1/01', '3', 'takeout trash');\n\n    const generalProj = new Project('General', 'general todo list');\n    generalProj.addToDo(test1);\n    generalProj.addToDo(test2);\n    generalProj.addToDo(test3);\n\n    // Test proj will be removed afterwards. This is only to have a second data set instantiated\n    const testProj = new Project('Test', 'general todo list');\n    testProj.addToDo(test1);\n    testProj.addToDo(test2);\n    testProj.addToDo(test3);\n\n    // TEST MANAGER IS NOT NEEDED ANY LONGER - regular manager that lives global takes care of this - WILL REMOVE TOMORROW\n    const testMng = new Manager();\n    testMng.addProject(generalProj);\n    \n    managerObj.addProject(generalProj);\n    managerObj.addProject(testProj);\n\n    // This is just for testing, not apart of General's instantiation\n    managerObj.printProjects();\n    // const testObj = managerObj.getProject('Test');\n    // console.log(testObj);\n}\n\n// Selecting the project body to interact with\nconst projectBody = document.getElementById('rightContainer');\n\nfunction load(id) {\n    // First 4 lines handle the class name logic - used to set the active element's proj button to be darkened \n    let oldSelection = document.querySelector('.proj-button-active');\n    if (oldSelection) {oldSelection.className = 'proj-button';}\n    let button = document.getElementById(id);\n    if (button) {button.className = 'proj-button-active';}\n    // After the class names are examined, it will then run the loadProject function which will load the data\n    loadProject('General');\n}\n\nfunction loadProject(id) {\n    projectBody.textContent = '';\n    let projectObj = managerObj.getProject(id);\n    projectBody.textContent = projectObj.title +' ' + projectObj.description;\n}\n\n// Function grabs all the buttons and adds the event listener to each\nfunction loadButtons() {\n    let projectbuttons = document.getElementsByClassName('proj-button');\n    for (let i = 0; i < managerObj.projectList.length; i++) {\n        const button = projectbuttons[i];\n        button.addEventListener('click', function () { load(button.id) });\n        console.log('mic check');\n    }\n}\n\n// Creating 1 function at the end to run the init functions so everything has a chance to instantiate before calling\nfunction appBoot() {\n    generalCreation()\n    loadButtons();\n    // Setting the app to init with the General project from the manager\n    load(managerObj.getProject('General').title.toLowerCase());\n}\nappBoot();\n\n// COME BACK TO DATE TESTING - not worth focusing on now until I get to implementing the date selector on front\n// let testDates = [format(new Date(2014, 1, 1), 'yyyy-dd-MM'), format(new Date(2014, 10, 1), 'yyyy-dd-MM'), format(new Date(2014, 11, 1), 'yyyy-dd-MM')];\n// let parsedDates = [];\n// testDates.forEach(e => {\n//     parsedDates.push(parseISO(e));\n// })\n// console.log(parsedDates.sort(compareDesc));\n// let sortedTest = testDates.sort(compareDesc);\n\n\n\n// let test1 = new ToDo('test1', testDate, '1', 'test notes');\n// let test2 = new ToDo('test2', testDate, '2', 'test notes');\n// let test3 = new ToDo('test3', testDate, '3', 'test notes');\n\n// const testProj = new Project('testProj', 'for testing purposes');\n// testProj.addToDo(test1);\n// testProj.addToDo(test2);\n// testProj.addToDo(test3);\n\n// const testMng = new Manager();\n// testMng.addProject(testProj);\n// testMng.printProjects();\n\n// console.log(test1);\n\n\n\n\n\n\n//# sourceURL=webpack://tor-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;