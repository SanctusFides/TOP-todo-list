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

eval("class toDo {\n\n    constructor(title, dueDate, priority, notes) {\n        this.title = title;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n\n        this.completed = false;\n    }\n    // let test = new toDo('title', '1/1/01', '1', 'test notes');\n\n    get title() {\n        return this._title;\n    }\n    set title(newTitle) {\n        newTitle = newTitle.trim();\n        if (newTitle === '') {\n            throw 'Title field cannot be empty';\n        }\n        this._title = newTitle;\n    }\n\n    get dueDate() {\n        return this._dueDate;\n    }\n    set dueDate(newDate) {\n        newDate = newDate.trim();\n        if (newDate === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._dueDate = newDate;\n    }\n\n    get notes(){\n        return this._notes;\n    }\n    set notes(newNotes) {\n        newNotes = newNotes.trim();\n        if (newNotes === '') {\n            throw 'Date field cannot be empty';\n        }\n        this._notes = newNotes;\n    }\n\n    // PRIORITY DATA STRUCTURE HAS YET TO BE DETERMINED - might by nums or might be handled by project manager obj\n    get priority() {\n        return this.priority;\n    }\n    set priority(newPriority) {\n        newPriority = newPriority.trim();\n        if (newPriority === '') {\n            throw 'Priority field cannot be empty';\n        }\n        this._priority = newPriority;\n    }\n\n}\n\n\n//# sourceURL=webpack://tor-todo-list/./src/index.js?");

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