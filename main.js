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

eval("__webpack_require__.r(__webpack_exports__);\n\n\n// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects\n// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project \n// manager will store and maintain the projects\n\nclass ToDo {\n    constructor(title, dueDate, priority, notes) {\n        this.title = title;\n        if (!(dueDate instanceof Date)) {\n            throw new Error('Not a valid date!');\n        }\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n\n        this.completed = false;\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n\n    set dueDate(newDate) {\n        if (newDate === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._dueDate = newDate;\n    }\n\n    set notes(newNotes) {\n        if (newNotes === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._notes = newNotes;\n    }\n\n    set priority(newPriority) {\n        if (newPriority === '') {\n            throw 'Priority field cannot be empty';\n        }\n        this._priority = newPriority;\n    }\n\n}\n\nclass Project {\n\n    constructor(title, description) {\n        this.title = title;\n        this.description = description;\n\n        this.toDoList = [];\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n\n    addToDo(todo) {\n        if (!(todo instanceof ToDo)) {\n            throw 'Not a to-do!';\n        }\n        this.toDoList.push(todo);\n    }\n\n    removeToDo(todo) {\n        if (todo === undefined){\n            throw 'Must include a to-do to remove';\n        }\n        this.toDoList.splice(this.toDoList.indexOf(todo),1);\n    }\n\n    clearAllToDo() {\n        this.toDoList = [];\n    }\n\n    printList(){\n        // this.toDoList.forEach((todo) => {\n        //     console.log(todo);\n        // });\n        console.log(this.toDoList);\n    }\n}\n\nclass Manager {\n    \n    constructor() {\n        this.projects = [];\n    }\n\n    addProject(project) {\n        if (!(project instanceof Project)) {\n            throw 'Not a Project!';\n        }\n        this.projects.push(project);\n    }\n\n    printProjects(){\n        // this.toDoList.forEach((todo) => {\n        //     console.log(todo);\n        // });\n        console.log(this.projects);\n    }\n}\n\n// Function grabs all the buttons and adds the event listener to each\nfunction loadButtons() {\n    let projectbuttons = document.getElementsByClassName('proj-button');\n    for (let i=0; i < projectbuttons.length; i++) {\n        const button = projectbuttons[i];\n        button.addEventListener('click', function(){load(button.id)});\n    }\n}\nloadButtons();\n\n// Grabbing the General button in projects and setting it to the initial loaded project\nlet preselectedGeneral = document.getElementById('general');\nload(preselectedGeneral.id);\n\n// Function is used to load the info based on the id for the button\nfunction load(id) {\n    let oldSelection = document.querySelector('.proj-button-active');\n    if (oldSelection) {\n        oldSelection.className = 'proj-button';\n    }\n    console.log(id);\n    let button = document.getElementById(id);\n    if (button) {\n        button.className = 'proj-button-active';\n    }\n}\n\n// TESTING CLASS IS JUST CREATED SO I CAN COLLAPSE ALL THE LOG TESTING LINES\nclass Testing {\n    // BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED\n        // let test1 = new ToDo('test1', '1/1/01', '1', 'test notes');\n        // let test2 = new ToDo('test2', '2/1/01', '2', 'test notes');\n        // let test3 = new ToDo('test3', '3/1/01', '3', 'test notes');\n    \n        // const testProj = new Project('testProj', 'for testing purposes');\n        // testProj.addToDo(test1);\n        // testProj.addToDo(test2);\n        // testProj.addToDo(test3);\n    \n        // const testMng = new Manager();\n        // testMng.addProject(testProj);\n        // testMng.printProjects();\n    \n        // console.log(test1);\n    \n        // test1.title = 'new title'\n        // test1.dueDate = 'Today';\n        // test1.priority = 4;\n        // test1.notes = 'Updated notes';\n        // test1.completed = true;\n        \n        // Testing Project obj functions\n        // testProj.removeToDo(test2);\n        // testProj.clearAllToDo();z\n        // testProj.printList();    \n    \n        // testProj.title = 'New Name'\n        // testProj.description = 'new notes!'\n        \n        // console.log(testProj.title);\n        // console.log(testProj.description);\n}\n\n// COME BACK TO DATE TESTING - not worth focusing on now until I get to implementing the date selector on front\n// let testDates = [format(new Date(2014, 1, 1), 'yyyy-dd-MM'), format(new Date(2014, 10, 1), 'yyyy-dd-MM'), format(new Date(2014, 11, 1), 'yyyy-dd-MM')];\n// let parsedDates = [];\n// testDates.forEach(e => {\n//     parsedDates.push(parseISO(e));\n// })\n// console.log(parsedDates.sort(compareDesc));\n// let sortedTest = testDates.sort(compareDesc);\n\n\n\n// let test1 = new ToDo('test1', testDate, '1', 'test notes');\n// let test2 = new ToDo('test2', testDate, '2', 'test notes');\n// let test3 = new ToDo('test3', testDate, '3', 'test notes');\n\n// const testProj = new Project('testProj', 'for testing purposes');\n// testProj.addToDo(test1);\n// testProj.addToDo(test2);\n// testProj.addToDo(test3);\n\n// const testMng = new Manager();\n// testMng.addProject(testProj);\n// testMng.printProjects();\n\n// console.log(test1);\n\n    \n\n\n\n\n//# sourceURL=webpack://tor-todo-list/./src/index.js?");

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