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

eval("// This app is to create a to do list. This will be made of 3 parts, the project manager, the project and the to do objects\n// Each individual to do will only contain info about the 1 task, the project will store a list of to dos and the project \n// manager will store and maintain the projects\n\nclass ToDo {\n    constructor(title, dueDate, priority, notes) {\n        this.title = title;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n\n        this.completed = false;\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n\n    set dueDate(newDate) {\n        if (newDate === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._dueDate = newDate;\n    }\n\n    set notes(newNotes) {\n        if (newNotes === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._notes = newNotes;\n    }\n\n    set priority(newPriority) {\n        if (newPriority === '') {\n            throw 'Priority field cannot be empty';\n        }\n        this._priority = newPriority;\n    }\n\n}\n\nclass Project {\n\n    constructor(title, description) {\n        this.title = title;\n        this.description = description;\n\n        this.toDoList = [];\n    }\n\n    set title(newTitle) {\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n\n    addToDo(todo) {\n        if (!(todo instanceof ToDo)) {\n            throw 'Not a to-do!';\n        }\n        this.toDoList.push(todo);\n    }\n\n    removeToDo(todo) {\n        if (todo === undefined){\n            throw 'Must include a to-do to remove';\n        }\n        this.toDoList.splice(this.toDoList.indexOf(todo),1);\n    }\n\n    clearAllToDo() {\n        this.toDoList = [];\n    }\n\n    printList(){\n        // this.toDoList.forEach((todo) => {\n        //     console.log(todo);\n        // });\n        console.log(this.toDoList);\n    }\n}\n\n// class Manager {\n    \n//     constructor\n// }\n\n// BELOW IS JUST A TEST UNIT THAT I HAVE CREATED TO COPY/PASTE. THIS WILL BE REMOVED\n    let test1 = new ToDo('test1', '1/1/01', '1', 'test notes');\n    let test2 = new ToDo('test2', '2/1/01', '2', 'test notes');\n    let test3 = new ToDo('test3', '3/1/01', '3', 'test notes');\n\n    const testProj = new Project('testProj', 'for testing purposes');\n    testProj.addToDo(test1);\n    testProj.addToDo(test2);\n    testProj.addToDo(test3);\n\n    // console.log(test1);\n\n    // Testing all setters - last tested 6/30 - all green\n    // test1.title = 'new title'\n    // test1.dueDate = 'Today';\n    // test1.priority = 4;\n    // test1.notes = 'Updated notes';\n    // test1.completed = true;\n    \n    // Testing Project obj functions\n    // testProj.removeToDo(test2);\n    // testProj.clearAllToDo();\n    // testProj.printList();    \n\n    // testProj.title = 'New Name'\n    // testProj.description = 'new notes!'\n    \n\n\n\n    // console.log(testProj.title);\n    // console.log(testProj.description);\n\n\n    \n    \n\n\n\n//# sourceURL=webpack://tor-todo-list/./src/index.js?");

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