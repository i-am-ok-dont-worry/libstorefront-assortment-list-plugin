(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentsDefaultState = exports.AssortmentListService = exports.AssortmentListDao = exports.AssortmentListPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "AssortmentListPlugin", { enumerable: true, get: function () { return index_1.AssortmentListPlugin; } });
var index_2 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "AssortmentListDao", { enumerable: true, get: function () { return index_2.AssortmentListDao; } });
var index_3 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "AssortmentListService", { enumerable: true, get: function () { return index_3.AssortmentListService; } });
var assortment_default_1 = __webpack_require__(/*! ./src/store/assortment.default */ "./src/store/assortment.default.ts");
Object.defineProperty(exports, "AssortmentsDefaultState", { enumerable: true, get: function () { return assortment_default_1.AssortmentsDefaultState; } });


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentListDao = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var AssortmentListDao = /** @class */ (function () {
    function AssortmentListDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    /**
     * Returns assortment list from API
     * @param {string} customerId
     * @param {string} storeCode
     * @param {string} customerToken
     */
    AssortmentListDao.prototype.getAssortmentList = function (customerId, storeCode, customerToken) {
        var params = new URLSearchParams(__assign(__assign({}, (storeCode && { storeCode: storeCode })), (customerToken && { token: customerToken })));
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/assortments/' + customerId + '?' + params.toString()),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    /**
     * Invalidates assortment list cache
     * @param {string} customerId
     * @param {string} customerToken
     */
    AssortmentListDao.prototype.invalidateAssortmentList = function (customerId, customerToken) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/assortments/' + customerId + '?' + 'token=' + customerToken),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    AssortmentListDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], AssortmentListDao);
    return AssortmentListDao;
}());
exports.AssortmentListDao = AssortmentListDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentListPlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var assortment_reducer_1 = __webpack_require__(/*! ./store/assortment.reducer */ "./src/store/assortment.reducer.ts");
var assortment_default_1 = __webpack_require__(/*! ./store/assortment.default */ "./src/store/assortment.default.ts");
/**
 * Plugin provides support for fetching assortment list from Magento
 * and invalidating server side cache.
 * It uses internal LSF hook to listen to place order hook to invalidate cache
 * as every time order is placed, the assortment list change for the customer.
 */
exports.AssortmentListPlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.AssortmentListDao).to(dao_1.AssortmentListDao);
    libstorefront.getIOCContainer().bind(service_1.AssortmentListService).to(service_1.AssortmentListService);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        libstorefront = lsf;
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('assortmentList', assortment_reducer_1.assortmentListReducer, assortment_default_1.AssortmentsDefaultState));
    });
    libstorefront.listenTo(libstorefront_1.HookType.AfterPlaceOrder, function () {
        try {
            libstorefront.get(service_1.AssortmentListService).invalidateAssortmentList();
        }
        catch (e) {
            libstorefront_1.Logger.info('Cannot invalidate assortment list', 'assortment-list-plugin', e.message);
        }
    });
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentListService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var assortment_thunks_1 = __webpack_require__(/*! ../store/assortment.thunks */ "./src/store/assortment.thunks.ts");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var AssortmentListService = /** @class */ (function () {
    function AssortmentListService(store, dao) {
        this.store = store;
        this.dao = dao;
    }
    /**
     * Returns assortment list for selected customer
     * @param {string} customerId
     * @returns {Promise<AssertmentProduct[]>} products
     */
    AssortmentListService.prototype.getAssortmentList = function (customerId) {
        return this.store.dispatch(assortment_thunks_1.AssortmentListThunks.getAssortmentList(customerId));
    };
    /**
     * Invalidates assortment list cache for customer
     * @returns {Promise<void>}
     */
    AssortmentListService.prototype.invalidateAssortmentList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, userToken, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.store.getState().user.current.id;
                        userToken = this.store.getState().user.token;
                        if (!userToken) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        if (!userId || userId === '') {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.dao.invalidateAssortmentList(userId, userToken)];
                    case 2:
                        response = _a.sent();
                        if (response.code === libstorefront_1.HttpStatus.OK) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        else {
                            throw new Error(response.result);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        libstorefront_1.Logger.error("Cannot invalidate: ", e_1.message);
                        return [2 /*return*/, Promise.reject()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AssortmentListService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __param(1, inversify_1.inject(dao_1.AssortmentListDao)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore,
            dao_1.AssortmentListDao])
    ], AssortmentListService);
    return AssortmentListService;
}());
exports.AssortmentListService = AssortmentListService;


/***/ }),

/***/ "./src/store/assortment.actions.ts":
/*!*****************************************!*\
  !*** ./src/store/assortment.actions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentListActions = void 0;
var AssortmentListActions;
(function (AssortmentListActions) {
    AssortmentListActions.SN_ASSORTMENT_LIST = 'assortment-list';
    AssortmentListActions.SET_ASSORTMENT_LIST = AssortmentListActions.SN_ASSORTMENT_LIST + '/SET_LIST';
    AssortmentListActions.setAssortmentList = function (products) { return ({
        type: AssortmentListActions.SET_ASSORTMENT_LIST,
        payload: products
    }); };
    AssortmentListActions.SET_ASSORTMENT_IS_LOADING = AssortmentListActions.SN_ASSORTMENT_LIST + '/IS_LOADING';
    AssortmentListActions.setAssortmentIsLoading = function (isLoading) { return ({
        type: AssortmentListActions.SET_ASSORTMENT_IS_LOADING,
        payload: isLoading
    }); };
})(AssortmentListActions = exports.AssortmentListActions || (exports.AssortmentListActions = {}));


/***/ }),

/***/ "./src/store/assortment.default.ts":
/*!*****************************************!*\
  !*** ./src/store/assortment.default.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentsDefaultState = void 0;
exports.AssortmentsDefaultState = {
    items: [],
    isLoading: false
};


/***/ }),

/***/ "./src/store/assortment.reducer.ts":
/*!*****************************************!*\
  !*** ./src/store/assortment.reducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assortmentListReducer = void 0;
var assortment_default_1 = __webpack_require__(/*! ./assortment.default */ "./src/store/assortment.default.ts");
var assortment_actions_1 = __webpack_require__(/*! ./assortment.actions */ "./src/store/assortment.actions.ts");
var assortmentListReducer = function (state, action) {
    if (state === void 0) { state = assortment_default_1.AssortmentsDefaultState; }
    switch (action.type) {
        case assortment_actions_1.AssortmentListActions.SET_ASSORTMENT_LIST: {
            return __assign(__assign({}, state), { items: action.payload });
        }
        case assortment_actions_1.AssortmentListActions.SET_ASSORTMENT_IS_LOADING: {
            return __assign(__assign({}, state), { isLoading: action.payload });
        }
        default: return state || assortment_default_1.AssortmentsDefaultState;
    }
};
exports.assortmentListReducer = assortmentListReducer;


/***/ }),

/***/ "./src/store/assortment.thunks.ts":
/*!****************************************!*\
  !*** ./src/store/assortment.thunks.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssortmentListThunks = void 0;
var assortment_actions_1 = __webpack_require__(/*! ./assortment.actions */ "./src/store/assortment.actions.ts");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var AssortmentListThunks;
(function (AssortmentListThunks) {
    var _this = this;
    AssortmentListThunks.getAssortmentList = function (customerId) {
        return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
            var storeCode, userId, userToken, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 8]);
                        return [4 /*yield*/, dispatch(assortment_actions_1.AssortmentListActions.setAssortmentIsLoading(true))];
                    case 1:
                        _a.sent();
                        storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                        userId = getState().user.current.id;
                        userToken = getState().user.token;
                        if (!userId && !customerId) {
                            throw new Error('Cannot load assortment list. User is not defined');
                        }
                        return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.AssortmentListDao).getAssortmentList(customerId || userId, storeCode, userToken)];
                    case 2:
                        response = _a.sent();
                        if (!(response && response.result)) return [3 /*break*/, 4];
                        return [4 /*yield*/, dispatch(assortment_actions_1.AssortmentListActions.setAssortmentList(response.result))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, dispatch(assortment_actions_1.AssortmentListActions.setAssortmentIsLoading(false))];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, response.result];
                    case 6:
                        e_1 = _a.sent();
                        libstorefront_1.Logger.error("Cannot load assortment list: ", e_1);
                        return [4 /*yield*/, dispatch(assortment_actions_1.AssortmentListActions.setAssortmentIsLoading(false))];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
    };
})(AssortmentListThunks = exports.AssortmentListThunks || (exports.AssortmentListThunks = {}));


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map