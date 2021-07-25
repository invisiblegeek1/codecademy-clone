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

/***/ "./src/Todoservice.js":
/*!****************************!*\
  !*** ./src/Todoservice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet TodoDB=[];\nlet Todo={\n    count:TodoDB.length,\n    addTodo:function(title){\n        TodoDB=[...TodoDB,{id:TodoDB.length+1,title:title ,completed:false}];\n        this.viewTodos();\n        console.log(TodoDB);\n        \n    },\n    editTodo:(id, newTitle)=> {\n        let newArray = [...TodoDB];\n        newArray[id-1].title = newTitle;\n        TodoDB=[...newArray];\n\n    },\n    completeTodo:function(id){\n        let newArray = [...TodoDB];\n        newArray[id-1].completed = true;\n        TodoDB=[...newArray];\n \n\n    },\n    completeAll:function(){\n        TodoDB.map((item)=>{\n            this.completeTodo(item.id);\n         \n        })\n\n    },\n    deleteTodo:(id)=> {\n        TodoDB=[...TodoDB.slice(0, id-1), ...TodoDB.slice(id + 1)]\n\n    },\n    clearCompleted:function(){\n        let completedArray=TodoDB.filter((item)=>{return item.completed==true});\n        completedArray.map((item)=>{\n            item.completed?this.deleteTodo(item.id):null;\n        })\n\n    },\n    viewTodos:(flag=\"all\")=> {\n        let completedArray=TodoDB.filter((item)=>{return item.completed==true});\n        let activeArray=TodoDB.filter((item)=>{return item.completed==false});\n\n        \n        \n\n        let listArray=(todos)=>{\n           \n           const trElements = todos.map((todo) => {\n           const trEle = `\n                <tr>\n                    <td><input type=\"checkbox\" ${\n                      todo.completed ? \"checked\" : \"\"\n                    }  data-action=\"complete\" data-id=${\n                      todo.id\n                    } /></td>\n                    <td>${todo.title}</td>\n                    <td><button data-id=${todo.id} class=\"btn btn-danger\" data-action=\"delete\" data-id=${\n                      todo.id\n                    } >delete</button></td>\n                </tr>\n            `;\n          return trEle;\n        });\n\n         todosBodyEle.innerHTML = trElements.join(\"\");\n         \n\n        };\n        if(TodoDB.length==0){\n            console.log(\"nothing in todo\")\n        }else{\n            flag==\"active\"?listArray(activeArray):null;\n        flag==\"completed\"?listArray(completedArray):null;\n        flag==\"all\"?listArray(TodoDB):null;\n\n        }\n        \n\n        \n    }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://web-todo/./src/Todoservice.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Todoservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todoservice */ \"./src/Todoservice.js\");\n//const Todo=require('./Todoservice')\n\nconst newInpEle = document.getElementById(\"new-input\");\nconst todosBodyEle = document.getElementById(\"todos-body\");\nconst goBtn = document.getElementById(\"btn-go\")\n\nvar inputValue=\"item-1\";\n\n//------------------------------------------------------------\n// todo service\n//------------------------------------------------------------\nfunction setValue(){\n  inputValue=newInpEle.value;\n  console.log(inputValue)\n  return inputValue\n\n}\ntodosBodyEle.addEventListener(\"click\", (e) => {\n  const todoId = Number.parseInt(e.target.dataset[\"id\"]);\n  const action = e.target.dataset[\"action\"];\n  if (action === \"complete\") {\n    _Todoservice__WEBPACK_IMPORTED_MODULE_0__.default.completeTodo(todoId);\n  }\n  if (action === \"delete\") {\n    _Todoservice__WEBPACK_IMPORTED_MODULE_0__.default.deleteTodo(todoId);\n  }\n  _Todoservice__WEBPACK_IMPORTED_MODULE_0__.default.viewTodos();\n});\n\n\n\n\n\n\n\n\n\n_Todoservice__WEBPACK_IMPORTED_MODULE_0__.default.viewTodos();\n\n//# sourceURL=webpack://web-todo/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;