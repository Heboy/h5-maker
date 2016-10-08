(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("Immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "Immutable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM"), require("Immutable")) : factory(root["React"], root["ReactDOM"], root["Immutable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _immutable = __webpack_require__(3);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _Page = __webpack_require__(4);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	var _ElementBar = __webpack_require__(41);
	
	var _ElementBar2 = _interopRequireDefault(_ElementBar);
	
	var _PageList = __webpack_require__(44);
	
	var _PageList2 = _interopRequireDefault(_PageList);
	
	var _ControlBar = __webpack_require__(48);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	var _Store = __webpack_require__(8);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _ElementsAction = __webpack_require__(29);
	
	var ElementsAction = _interopRequireWildcard(_ElementsAction);
	
	__webpack_require__(87);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/1/22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	console.log(_reactDom2.default);
	console.log(_react2.default);
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            pagesEntity: _immutable2.default.Map(),
	            elementsEntity: _immutable2.default.Map(),
	            control: _immutable2.default.Map(),
	            errorBarComponent: null,
	            loadingComponent: null
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (true) {
	                //创建初始化
	                _Store2.default.dispatch(ElementsAction.init());
	                this.setState(_Store2.default.getState());
	            } else {
	                //更新初始化
	            }
	        }
	
	        //初始化的时候设置对store的侦听
	
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.querySelector('#loading').classList.remove('show');
	            window.addEventListener('keydown', function (e) {
	                switch (e.keyCode) {
	                    case 46:
	                        //删除
	                        _Store2.default.dispatch(ElementsAction.doDelete());
	                        break;
	                    default:
	                        console.log(e.keyCode);
	                }
	            });
	            _Store2.default.subscribe(this.onStateChange.bind(this));
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.state.elementsEntity !== nextState.elementsEntity) {
	                return true;
	            } else if (this.state.control !== nextState.control) {
	                return true;
	            } else if (this.state.pagesEntity !== nextState.pagesEntity) {
	                return true;
	            } else if (this.state.errorBarComponent !== nextState.errorBarComponent) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _Store$getState = _Store2.default.getState();
	
	            var control = _Store$getState.control;
	            var pagesEntity = _Store$getState.pagesEntity;
	            var elementsEntity = _Store$getState.elementsEntity;
	
	            var pages = pagesEntity.get('pages');
	            var currentPage = pages.get(pagesEntity.get('activeIndex'));
	            var elements = elementsEntity.get('elements');
	            var currentElement = elements.get(elementsEntity.get('activeIndex'));
	            if (currentPage) {
	                window.elements = currentPage.get('elementsEntity').get('elements');
	            }
	            if (currentElement) {
	                window.fontColor = currentElement.get('controlProps').get('fontColor');
	            }
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_PageList2.default, { pages: pages, activeIndex: pagesEntity.get('activeIndex') }),
	                _react2.default.createElement(_ControlBar2.default, { type: currentElement ? currentElement.get('elementType') : 'PAGE',
	                    delay: control.get('delay'),
	                    duration: control.get('duration'),
	                    animation: control.get('animation'),
	                    fontSize: control.get('fontSize'),
	                    fontColor: control.get('fontColor'),
	                    backgroundColor: control.get('backgroundColor'),
	                    textAlign: control.get('textAlign'),
	                    zIndex: elements.indexOf(currentElement),
	                    maxZIndex: elements.size }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'main' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'stage' },
	                        _react2.default.createElement(_ElementBar2.default, null),
	                        _react2.default.createElement(_Page2.default, { elementsEntity: elementsEntity,
	                            backgroundColor: currentPage.get('backgroundColor') })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'onStateChange',
	        value: function onStateChange() {
	            this.setState(_Store2.default.getState());
	        }
	    }, {
	        key: 'setControlBar',
	        value: function setControlBar() {
	            var control = _Store2.default.getState().control;
	            return _react2.default.createElement(_ControlBar2.default, { open: control.open, animation: control.animation,
	                zIndex: control.zIndex,
	                maxZIndex: _Store2.default.getState().elements.size,
	                animationOptions: control.animationOptions });
	        }
	    }, {
	        key: 'setElement',
	        value: function setElement() {
	            return _Store2.default.getState().elements.map(function (element, index, thisArray) {
	                var className = ClassName(element.get('controlBarProps').animation, element.get('isActive') ? 'active' : '');
	                switch (element.get('elementType')) {
	                    case GlobalValues.Static.TYPE.IMAGE:
	                        return _react2.default.createElement(
	                            Element,
	                            { rid: element.get('rid'),
	                                key: element.get('rid'),
	                                className: className,
	                                width: element.get('width'),
	                                height: element.get('height'),
	                                left: element.get('left'),
	                                top: element.get('top'),
	                                zIndex: element.get('zIndex'),
	                                elementType: element.get('elementType'),
	                                controlBarProps: element.get('controlBarProps') },
	                            _react2.default.createElement('image', { className: 'full', draggable: 'false', src: element.get('src') })
	                        );
	                    case GlobalValues.Static.TYPE.TEXT:
	                        return _react2.default.createElement(
	                            Element,
	                            { rid: element.get('rid'),
	                                key: element.get('rid'),
	                                className: className,
	                                width: element.get('width'),
	                                height: element.get('height'),
	                                left: element.get('left'),
	                                top: element.get('top'),
	                                zIndex: element.get('zIndex'),
	                                elementType: element.get('elementType'),
	                                controlBarProps: element.get('controlBarProps') },
	                            _react2.default.createElement(Text, { rid: result.rid, width: element.get('width'), height: element.get('height'),
	                                value: element.get('value') })
	                        );
	                }
	                return undefined;
	            });
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classname = __webpack_require__(5);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	var _Store = __webpack_require__(8);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _ElementsAction = __webpack_require__(29);
	
	var ElementsAction = _interopRequireWildcard(_ElementsAction);
	
	var _Element = __webpack_require__(30);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	var _Text = __webpack_require__(36);
	
	var _Text2 = _interopRequireDefault(_Text);
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	__webpack_require__(39);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/4/18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Page = function (_React$Component) {
	    _inherits(Page, _React$Component);
	
	    function Page(props) {
	        _classCallCheck(this, Page);
	
	        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
	
	        _this.prevActiveElement = null;
	        //内部属性，用来实现移动与缩放
	        _this.currentElementDom = null;
	        _this.tmpClientX = null; //element上一次点击位置
	        _this.tmpClientY = null;
	        _this.tmpOffsetLeft = null; //element上一次相对父元素的位置
	        _this.tmpOffsetTop = null;
	        _this.tmpWidth = null; //element上一次的宽度
	        _this.tmpHeight = null;
	        _this.scale = null; //element长宽比,
	        _this.readyMove = false;
	        _this.readyResize = false;
	        _this.resizeType = false;
	        return _this;
	    }
	
	    _createClass(Page, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.props.elementsEntity !== nextProps.elementsEntity) {
	                //重新渲染会阻止move或resize
	                return true;
	            } else if (this.props.backgroundColor !== nextProps.backgroundColor) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return {
	                backgroundColor: this.props.backgroundColor
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var self = this;
	            var activeIndex = this.props.elementsEntity.get('activeIndex');
	            var elements = this.props.elementsEntity.get('elements').map(function (element, index) {
	                var className = '';
	                if (index === activeIndex) {
	                    className = 'active';
	                    //预览的条件
	                    if (self.prevActiveElement !== null && self.prevActiveElement.get('rid') === element.get('rid') && self.prevActiveElement.get('controlProps') !== element.get('controlProps') && element.get('controlProps').get('preview') === true) {
	
	                        self.prevActiveElement = element;
	                        return self.buildElementByType(element, className, true);
	                    }
	                    self.prevActiveElement = element;
	                }
	                return self.buildElementByType(element, className, false);
	            });
	            return _react2.default.createElement(
	                'div',
	                { onMouseMove: this.mouseMoveHandle.bind(this),
	                    onMouseLeave: this.mouseLeaveHandle.bind(this),
	                    onMouseUp: this.mouseUpHandle.bind(this),
	                    onMouseDown: this.mouseDownHandle.bind(this),
	                    style: this.style(),
	                    className: (0, _classname2.default)('page', this.props.className) },
	                elements
	            );
	        }
	    }, {
	        key: 'buildElementByType',
	        value: function buildElementByType(element, className, preview) {
	            var self = this;
	            var key = _AppStore2.default.uniqueId();
	            switch (element.get('elementType')) {
	                case _Values2.default.ELEMENT.TYPE.IMAGE:
	                    return _react2.default.createElement(
	                        _Element2.default,
	                        { element: element,
	                            key: key,
	                            preview: preview,
	                            className: className,
	                            onMouseDown: self.activeElement.bind(this),
	                            prepareResize: self.prepareResize.bind(self) },
	                        _react2.default.createElement('img', { className: 'full', draggable: 'false', src: element.get('src') })
	                    );
	                case _Values2.default.ELEMENT.TYPE.TEXT:
	                    return _react2.default.createElement(
	                        _Element2.default,
	                        { element: element,
	                            key: key,
	                            preview: preview,
	                            className: className,
	                            onMouseDown: self.activeElement.bind(this),
	                            prepareResize: self.prepareResize.bind(self) },
	                        _react2.default.createElement(_Text2.default, { value: element.get('value') })
	                    );
	                default:
	                    return null;
	            }
	        }
	
	        /**
	         * 点击resize btn
	         * @param type
	         * @param e
	         */
	
	    }, {
	        key: 'prepareResize',
	        value: function prepareResize(type, e) {
	            var element = _AppStore2.default.findParentByClassName(e.target, 'element', 'element');
	            if (element) {
	                this.currentElementDom = element;
	                this.readyResize = true;
	                this.resizeType = type;
	                this.readyMove = false;
	                this.tmpClientX = e.clientX;
	                this.tmpClientY = e.clientY;
	                this.tmpOffsetLeft = element.offsetLeft;
	                this.tmpOffsetTop = element.offsetTop;
	                this.tmpWidth = parseInt(element.clientWidth);
	                this.tmpHeight = parseInt(element.clientHeight);
	                this.scale = this.tmpWidth / this.tmpHeight;
	            }
	            e.stopPropagation();
	        }
	    }, {
	        key: 'mouseDownHandle',
	        value: function mouseDownHandle(e) {
	            var element = _AppStore2.default.findParentByClassName(e.target, e.currentTarget, 'element');
	            if (element) {
	                //移除非当前元素的active样式
	                var activeElements = document.querySelectorAll('.element.active');
	                for (var i = 0; i < activeElements.length; i++) {
	                    if (element !== activeElements[i]) {
	                        activeElements[i].classList.remove('active');
	                    }
	                }
	                this.currentElementDom = element;
	                this.readyMove = true;
	                this.readyResize = false;
	                this.tmpClientX = e.clientX;
	                this.tmpClientY = e.clientY;
	                this.tmpOffsetLeft = element.offsetLeft;
	                this.tmpOffsetTop = element.offsetTop;
	                this.tmpWidth = parseInt(element.clientWidth);
	                this.tmpHeight = parseInt(element.clientHeight);
	                this.scale = this.tmpWidth / this.tmpHeight;
	            }
	            e.stopPropagation();
	        }
	    }, {
	        key: 'activeElement',
	        value: function activeElement(element, e) {
	            _Store2.default.dispatch(ElementsAction.active(element));
	        }
	    }, {
	        key: 'mouseUpHandle',
	        value: function mouseUpHandle(e) {
	            //停止拖拽或移动
	            if (this.currentElementDom) {
	                _Store2.default.dispatch(ElementsAction.save(this.currentElementDom.style.width, this.currentElementDom.style.height, this.currentElementDom.style.left, this.currentElementDom.style.top));
	            }
	            //释放当前元素
	            else {
	                    _Store2.default.dispatch(ElementsAction.release());
	                }
	            this.currentElementDom = null;
	            this.readyMove = false;
	            this.readyResize = false;
	            e.stopPropagation();
	        }
	    }, {
	        key: 'mouseLeaveHandle',
	        value: function mouseLeaveHandle(e) {
	            //停止拖拽或移动
	            if (this.currentElementDom) {
	                _Store2.default.dispatch(ElementsAction.save(this.currentElementDom.style.width, this.currentElementDom.style.height, this.currentElementDom.style.left, this.currentElementDom.style.top));
	            }
	            this.readyMove = false;
	            this.readyResize = false;
	        }
	    }, {
	        key: 'mouseMoveHandle',
	        value: function mouseMoveHandle(e) {
	            if (this.currentElementDom) {
	                if (this.readyMove === true && this.readyResize === false) {
	                    var newLeft = e.clientX - this.tmpClientX + this.tmpOffsetLeft;
	                    var newTop = e.clientY - this.tmpClientY + this.tmpOffsetTop;
	                    this.currentElementDom.style.left = newLeft + 'px';
	                    this.currentElementDom.style.top = newTop + 'px';
	                }
	                if (this.readyResize === true && this.readyMove === false) {
	                    var newWidth = e.clientX - this.tmpClientX + this.tmpWidth;
	                    var newHeight = e.clientY - this.tmpClientY + this.tmpHeight;
	                    switch (this.resizeType) {
	                        case 'x':
	                            this.currentElementDom.style.width = newWidth + 'px';
	                            break;
	                        case 'y':
	                            this.currentElementDom.style.height = newHeight + 'px';
	                            break;
	                        case 'scale':
	                            this.currentElementDom.style.width = newWidth + 'px';
	                            this.currentElementDom.style.height = newWidth / this.scale + 'px';
	                            break;
	                        default:
	                            break;
	                    }
	                }
	            }
	        }
	    }]);
	
	    return Page;
	}(_react2.default.Component);
	
	Page.propTypes = {
	    className: _react2.default.PropTypes.string,
	    pagesEntity: _react2.default.PropTypes.object
	};
	
	module.exports = Page;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	function classname() {
	    var result = {},
	        objects = {},
	        resultString = "";
	
	    function add(strings) {
	        classname.each(strings.split(" "), function (string) {
	            result[string] = !!string;
	        });
	    }
	
	    classname.each([].slice.call(arguments), function (x) {
	        switch (classname.getType(x)) {
	            case "string":
	            case "number":
	                add(x);
	                break;
	
	            case "array":
	                add(classname.apply(null, x));
	                break;
	
	            case "element":
	                add(classname(x.className || ""));
	                break;
	
	            case "nodelist":
	                add(classname.apply(null, [].slice.call(x)));
	                break;
	
	            case "jquery":
	                add(classname.apply(null, x.get()));
	                break;
	
	            case "object":
	                objects = classname.extend(objects, x);
	                break;
	        }
	    });
	
	    result = classname.extend(result, objects);
	
	    classname.each(result, function (val, key) {
	        if (val) {
	            resultString += " " + key;
	        }
	    });
	
	    return resultString.substr(1);
	}
	
	classname.setTo = function (elements) {
	    var type = classname.getType(elements);
	
	    if (type === "element") {
	        elements = [elements];
	    }
	
	    if (type === "jquery") {
	        elements = elements.get();
	    }
	
	    if (type === "nodelist") {
	        elements = [].slice.call(elements);
	    }
	
	    return function () {
	        var classNames = classname.apply(null, arguments);
	
	        classname.each(elements, function (element) {
	            element.className = classNames;
	        });
	    };
	};
	
	classname.each = function (arr, fn) {
	    var type = classname.getType(arr);
	
	    if (type === "array") {
	        for (var i = 0; i < arr.length; i++) {
	            fn(arr[i], i);
	        }
	    }
	
	    if (type === "object") {
	        for (var key in arr) {
	            fn(arr[key], key);
	        }
	    }
	};
	
	classname.getType = function (x) {
	    var type = Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
	
	    if (type === "object" && x.jquery) {
	        return "jquery";
	    }
	
	    if (type.indexOf("element") > 1) {
	        return "element";
	    }
	
	    return type;
	};
	
	classname.extend = function (obj1, obj2) {
	    var result = {},
	        objs = [obj1, obj2];
	
	    classname.each(objs, function (obj) {
	        classname.each(obj, function (val, key) {
	            if (obj.hasOwnProperty(key)) {
	                result[key] = val;
	            }
	        });
	    });
	
	    return result;
	};
	
	if (typeof module !== "undefined" && module.exports) {
	    module.exports = classname;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var id = 0; /**
	             * Created by Soup Tang on 2016/4/18.
	             */
	
	module.exports = {
	    uniqueId: function uniqueId() {
	        return id++;
	    },
	
	
	    /**
	     *
	     * @param element
	     * @param rootElement
	     * @param className
	     * @returns {*}
	     */
	    findParentByClassName: function findParentByClassName(element, rootElement, className) {
	        if (element == rootElement) {
	            return undefined;
	        }
	        var result = element.classList.contains(className);
	        if (result) {
	            return element;
	        }
	        return this.findParentByClassName(element.parentElement, rootElement, className);
	    },
	
	
	    /**
	     * action生成器
	     * @param type
	     * @param argNames
	     * @returns {Function}
	     */
	    makeActionCreator: function makeActionCreator(type) {
	        for (var _len = arguments.length, argNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            argNames[_key - 1] = arguments[_key];
	        }
	
	        return function () {
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	            }
	
	            var action = { type: type };
	            argNames.forEach(function (arg, index) {
	                action[argNames[index]] = args[index];
	            });
	            return action;
	        };
	    },
	
	
	    /**
	     * 是否j将control同步到element的controlProps
	     * @param action
	     * @returns {boolean}
	     */
	    shouldUpdateElementControlPropsInMiddleware: function shouldUpdateElementControlPropsInMiddleware(action) {
	        return action.type === _Values2.default.CONTROL.SET_ANIMATION || action.type === _Values2.default.CONTROL.SET_DELAY || action.type === _Values2.default.CONTROL.SET_DURATION || action.type === _Values2.default.CONTROL.SET_TEXT_ALIGN || action.type === _Values2.default.CONTROL.SET_ZINDEX || action.type === _Values2.default.CONTROL.SET_TEXT_COLOR || action.type === _Values2.default.CONTROL.SET_FONT_SIZE;
	    },
	
	
	    /**
	     * 是否将page的controlProps同步到control上
	     * @param action
	     * @returns {boolean}
	     */
	    switchPage: function switchPage(action) {
	        return action.type === _Values2.default.PAGES.ACTIVE;
	    },
	
	
	    /**
	     *
	     * @param action
	     * @returns {boolean}
	     */
	    shouldSetElementsControlPropsToControlInMiddleware: function shouldSetElementsControlPropsToControlInMiddleware(action) {
	        return action.type === _Values2.default.PAGES.ACTIVE || action.type === _Values2.default.PAGES.DELETE || action.type === _Values2.default.ELEMENT.ACTIVE;
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by Soup Tang on 2016/4/18.
	 */
	module.exports = {
	    APP: {
	        INIT: 'INIT_APP'
	    },
	    ELEMENTS: {
	        ADD_TEXT: 'ADD_TEXT_ELEMENT',
	        ADD_IMAGE: 'ADD_IMAGE_ELEMENT',
	        DELETE: 'DELETE_ELEMENT',
	        SAVE: 'SAVE_ELEMENT',
	        UPDATE_VALUE: 'UPDATE_ELEMENT_VALUE'
	    },
	    ELEMENT: {
	        TYPE: {
	            PAGE: 'PAGE',
	            IMAGE: 'IMAGE',
	            TEXT: 'TEXT'
	        },
	        ACTIVE: 'ACTIVE_ELEMENT',
	        RELEASE: 'RELEASE_ELEMENT'
	    },
	    CONTROL: {
	        SET_ZINDEX: 'SET_ZINDEX',
	        SET_ANIMATION: 'SET_ANIMATION',
	        SET_DELAY: 'SET_DELAY',
	        SET_DURATION: 'SET_DURATION',
	        SET_TEXT_ALIGN: 'SET_TEXT_ALIGN',
	        SET_TEXT_COLOR: 'SET_TEXT_COLOR',
	        SET_BACKGROUND_COLOR: 'SET_BACKGROUND_COLOR',
	        SET_FONT_SIZE: 'SET_FONT_SIZE',
	        ANIMATION_OPTIONS: [{
	            label: '无',
	            value: ''
	        }, {
	            label: '向左',
	            value: 'moveToLeft'
	        }, {
	            label: '向左-渐显',
	            value: 'moveToLeftFade'
	        }, {
	            label: '从左到右',
	            value: 'moveFromLeft'
	        }, {
	            label: '从左到右-渐显',
	            value: 'moveFromLeftFade'
	        }, {
	            label: '向右',
	            value: 'moveToRight'
	        }, {
	            label: '向右-渐显',
	            value: 'moveToRightFade'
	        }, {
	            label: '从右向左',
	            value: 'moveFromRight'
	        }, {
	            label: '从右向左-渐显',
	            value: 'moveFromRightFade'
	        }, {
	            label: '向上',
	            value: 'moveToTop'
	        }, {
	            label: '向上-渐显',
	            value: 'moveToTopFade'
	        }, {
	            label: '从上到下',
	            value: 'moveFromTop'
	        }, {
	            label: '从上到下-渐显',
	            value: 'moveFromTopFade'
	        }, {
	            label: '向下',
	            value: 'moveToBottom'
	        }, {
	            label: '向下-渐显',
	            value: 'moveToBottomFade'
	        }, {
	            label: '从下到上',
	            value: 'moveFromBottom'
	        }, {
	            label: '从下到上-渐显',
	            value: 'moveFromBottomFade'
	        }],
	        DURATION_OPTION: [{
	            label: '0.6秒',
	            value: '0.6s'
	        }, {
	            label: '0.9秒',
	            value: '0.9s'
	        }, {
	            label: '1.2秒',
	            value: '1.2s'
	        }],
	        DELAY_OPTION: [{
	            label: '0秒',
	            value: '0s'
	        }, {
	            label: '0.5秒',
	            value: '0.5s'
	        }, {
	            label: '1秒',
	            value: '1s'
	        }],
	        TEXT_ALIGN_OPTION: [{
	            label: '左对齐',
	            value: 'left'
	        }, {
	            label: '居中',
	            value: 'center'
	        }, {
	            label: '右对齐',
	            value: 'right'
	        }],
	        FONT_SIZE_OPTION: [{
	            label: 12,
	            value: 12
	        }, {
	            label: 16,
	            value: 16
	        }, {
	            label: 20,
	            value: 20
	        }, {
	            label: 24,
	            value: 24
	        }, {
	            label: 28,
	            value: 28
	        }, {
	            label: 32,
	            value: 32
	        }]
	    },
	    PAGES: {
	        ADD: 'ADD_PAGE',
	        DELETE: 'DELETE_PAGE',
	        ACTIVE: 'ACTIVE_PAGE',
	        ACTIVE_BY_INDEX: 'ACTIVE_BY_INDEX',
	        SET_BACKGROUND_COLOR: 'SET_BACKGROUND_COLOR',
	        SAVE: 'SAVE'
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _redux = __webpack_require__(9);
	
	var _App = __webpack_require__(24);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/2/23.
	 */
	var logger = function logger(store) {
	    return function (next) {
	        return function (action) {
	            console.group(action.type);
	            console.info('dispatching', action);
	            var result = next(action);
	            console.log('next state', store.getState());
	            console.groupEnd(action.type);
	            return result;
	        };
	    };
	};
	
	var mixReducers = function mixReducers(store) {
	    return function (next) {
	        return function (action) {
	            var result = next(action);
	
	            var pagesEntity = store.getState().pagesEntity;
	            var pages = store.getState().pagesEntity.get('pages');
	            var pageActiveIndex = store.getState().pagesEntity.get('activeIndex');
	            var page = pages.get(pageActiveIndex);
	            var elementsEntity = store.getState().elementsEntity;
	            var elements = elementsEntity.get('elements');
	            var elementsActiveIndex = elementsEntity.get('activeIndex');
	            var element = elements.get(elementsActiveIndex);
	            var control = store.getState().control;
	
	            if (!_AppStore2.default.switchPage(action)) {
	                if (elementsActiveIndex !== null) {
	                    if (_AppStore2.default.shouldUpdateElementControlPropsInMiddleware(action)) {
	                        element = element.set('controlProps', control);
	                        elements = elements.set(elementsActiveIndex, element);
	                        store.getState().elementsEntity = elementsEntity = elementsEntity.set('elements', elements);
	                    } else if (_AppStore2.default.shouldSetElementsControlPropsToControlInMiddleware(action)) {
	                        store.getState().control = element.get('controlProps');
	                    }
	                } else {
	                    store.getState().control = control.set('backgroundColor', page.get('backgroundColor')).set('backgroundImage', page.get('backgroundImage'));
	                }
	                store.getState().pagesEntity = pagesEntity.set('pages', pages.set(pageActiveIndex, page.set('elementsEntity', elementsEntity)));
	            }
	            if (_AppStore2.default.switchPage(action)) {
	                elementsEntity = pagesEntity.get('pages').get(pageActiveIndex).get('elementsEntity');
	                elements = elementsEntity.get('elements');
	                elementsActiveIndex = elementsEntity.get('activeIndex');
	                element = elements.get(elementsActiveIndex);
	
	                if (elementsActiveIndex !== null) {
	                    store.getState().control = element.get('controlProps');
	                } else {
	                    store.getState().control = control.set('backgroundColor', page.get('backgroundColor')).set('backgroundImage', page.get('backgroundImage'));
	                }
	                store.getState().elementsEntity = page.get('elementsEntity');
	            }
	            return result;
	        };
	    };
	};
	
	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(logger, mixReducers)(_redux.createStore);
	module.exports = createStoreWithMiddleware(_App2.default);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(11);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(19);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(21);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(22);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(23);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(20);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(12);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(16);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getPrototype = __webpack_require__(13),
	    isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var overArg = __webpack_require__(14);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}
	
	module.exports = isObjectLike;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(17);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ponyfill = __webpack_require__(18);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var root = undefined; /* global window */
	
	if (typeof global !== 'undefined') {
		root = global;
	} else if (typeof window !== 'undefined') {
		root = window;
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(11);
	
	var _isPlainObject = __webpack_require__(12);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(20);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(23);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _redux = __webpack_require__(9);
	
	var _ElementsReducer = __webpack_require__(25);
	
	var _ElementsReducer2 = _interopRequireDefault(_ElementsReducer);
	
	var _ControlReducer = __webpack_require__(27);
	
	var _ControlReducer2 = _interopRequireDefault(_ControlReducer);
	
	var _PagesReducer = __webpack_require__(28);
	
	var _PagesReducer2 = _interopRequireDefault(_PagesReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/4/18.
	 */
	module.exports = (0, _redux.combineReducers)({
	    elementsEntity: _ElementsReducer2.default,
	    control: _ControlReducer2.default,
	    pagesEntity: _PagesReducer2.default
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Created by Soup Tang on 2016/4/18.
	 */
	
	var _immutable = __webpack_require__(3);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _Entities = __webpack_require__(26);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  var elementsEntity = _immutable2.default.Map(state);
	  var elements = elementsEntity.get('elements');
	  var activeIndex = elementsEntity.get('activeIndex');
	  var element = null;
	  var index = null;
	
	  switch (action.type) {
	
	    case _Values2.default.APP.INIT:
	      elementsEntity = elementsEntity.set('elements', _immutable2.default.List()).set('activeIndex', null);
	      return elementsEntity;
	
	    case _Values2.default.ELEMENTS.ADD_TEXT:
	      element = _immutable2.default.Map(new _Entities.TextElement()).set('rid', _AppStore2.default.uniqueId());
	      elementsEntity = elementsEntity.set('elements', elements.push(element)).set('activeIndex', elements.size);
	      return elementsEntity;
	
	    case _Values2.default.ELEMENTS.ADD_IMAGE:
	      element = _immutable2.default.Map(new _Entities.ImageElement()).set('rid', _AppStore2.default.uniqueId()).set('src', action.src);
	      elementsEntity = elementsEntity.set('elements', elements.push(element)).set('activeIndex', elements.size);
	      return elementsEntity;
	
	    case _Values2.default.ELEMENTS.DELETE:
	      if (activeIndex !== null) {
	        elements = elements.delete(activeIndex);
	        elementsEntity = elementsEntity.set('activeIndex', null).set('elements', elements);
	      }
	      return elementsEntity;
	
	    case _Values2.default.ELEMENT.ACTIVE:
	      index = elements.indexOf(action.element);
	      if (index > -1) {
	        elementsEntity = elementsEntity.set('activeIndex', index);
	      }
	      return elementsEntity;
	
	    case _Values2.default.ELEMENT.RELEASE:
	      if (activeIndex !== null) {
	        elementsEntity = elementsEntity.set('activeIndex', index);
	      }
	      return elementsEntity;
	
	    case _Values2.default.ELEMENTS.SAVE:
	      //保存元素相关信息
	      if (activeIndex !== null) {
	        element = elements.get(activeIndex);
	        element = element.set('width', action.width).set('height', action.height).set('left', action.left).set('top', action.top);
	        elements = elements.set(activeIndex, element);
	        elementsEntity = elementsEntity.set('elements', elements);
	      }
	      return elementsEntity;
	
	    case _Values2.default.ELEMENTS.UPDATE_VALUE:
	      if (activeIndex !== null) {
	        element = elements.get(activeIndex).set('value', action.content);
	        elements = elements.set(activeIndex, element);
	        elementsEntity = elementsEntity.set('elements', elements);
	      }
	      return elementsEntity;
	
	    case _Values2.default.CONTROL.SET_ZINDEX:
	      //通过修改element在elements中的位置改变zIndex
	      if (activeIndex !== null) {
	        element = elements.get(activeIndex);
	        elements = elements.delete(activeIndex).insert(action.zIndex, element);
	        elementsEntity = elementsEntity.set('activeIndex', action.zIndex).set('elements', elements);
	      }
	      return elementsEntity;
	
	    case _Values2.default.CONTROL.SET_TEXT_COLOR:
	      if (activeIndex !== null) {
	        element = elements.get(activeIndex).set('textColor', action.color);
	        elements = elements.set(activeIndex, element);
	        elementsEntity = elementsEntity.set('elements', elements);
	      }
	      return elementsEntity;
	
	    case _Values2.default.CONTROL.SET_FONT_SIZE:
	      if (activeIndex !== null) {
	        element = elements.get(activeIndex).set('fontSize', action.size);
	        elements = elements.set(activeIndex, element);
	        elementsEntity = elementsEntity.set('elements', elements);
	      }
	      return elementsEntity;
	    default:
	      return elementsEntity;
	  }
	};
	
	/**
	 * 添加元素，将添加的元素设置为currentElement
	 * @param elements
	 * @param element
	 * @returns {Number|*|List<*>|Stack<*>|Cursor}
	 */
	function addElement(elements, element) {
	  //elements = elements.set(0, element);
	  return elements.push(element);
	}
	/**
	 * 设置element.controlProp中的属性
	 * @param element
	 * @param propName
	 * @param value
	 * @returns {List<T>|Map<K, V>|__Cursor.Cursor|*}
	 */
	function setControlProp(element, propName, value) {
	  element.controlProps[propName] = value;
	  return element;
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _immutable = __webpack_require__(3);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/4/18.
	 */
	function Element() {
	    return {
	        width: '0px',
	        height: '0px',
	        left: '0px',
	        top: '0px',
	        controlProps: _immutable2.default.Map(new Control()) //对control的引用
	    };
	}
	
	function ImageElement() {
	    return Object.assign(new Element(), {
	        elementType: _Values2.default.ELEMENT.TYPE.IMAGE,
	        width: '210px',
	        height: 'auto',
	        fileName: null,
	        src: null
	    });
	}
	
	function TextElement() {
	    return Object.assign(new Element(), {
	        elementType: _Values2.default.ELEMENT.TYPE.TEXT,
	        width: 'auto',
	        height: 'auto',
	        value: '双击修改'
	    });
	}
	
	function Page() {
	    return {
	        elementsEntity: _immutable2.default.Map({
	            elements: _immutable2.default.List(),
	            activeIndex: null
	        }), //对elements的引用
	        elementType: _Values2.default.ELEMENT.TYPE.PAGE,
	        backgroundColor: '#ffffff',
	        backgroundImage: null
	    };
	}
	
	function Control() {
	    return {
	        preview: false, //控制当前元素的预览，逻辑上不应该放在这，但是elements和pages都不是不可变的
	        backgroundColor: '#ffffff',
	        backgroundImage: null,
	        fontSize: 16,
	        fontColor: '#000000',
	        animation: _Values2.default.CONTROL.ANIMATION_OPTIONS[0].value,
	        duration: _Values2.default.CONTROL.DURATION_OPTION[0].value,
	        delay: _Values2.default.CONTROL.DELAY_OPTION[0].value
	    };
	}
	
	module.exports = {
	    Page: Page,
	    Control: Control,
	    TextElement: TextElement,
	    ImageElement: ImageElement
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _immutable = __webpack_require__(3);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _Entities = __webpack_require__(26);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/4/22.
	 */
	module.exports = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	
	    var control = _immutable2.default.Map(state);
	    control = control.set('preview', false);
	    switch (action.type) {
	        case _Values2.default.APP.INIT:
	        case _Values2.default.ELEMENTS.ADD_IMAGE:
	        case _Values2.default.ELEMENTS.ADD_TEXT:
	            //创建的时候返回新Control
	            control = _immutable2.default.Map(new _Entities.Control());
	            return control;
	        case _Values2.default.CONTROL.SET_ANIMATION:
	            control = control.set('animation', action.animation).set('preview', true);
	            return control;
	        case _Values2.default.CONTROL.SET_DELAY:
	            control = control.set('delay', action.delay).set('preview', true);
	            return control;
	        case _Values2.default.CONTROL.SET_DURATION:
	            control = control.set('duration', action.duration).set('preview', true);
	            return control;
	        case _Values2.default.CONTROL.SET_ZINDEX:
	            control = control.set('zIndex', action.zIndex);
	            return control;
	        case _Values2.default.CONTROL.SET_TEXT_ALIGN:
	            control = control.set('textAlign', action.textAlign);
	            return control;
	        case _Values2.default.CONTROL.SET_TEXT_COLOR:
	            control = control.set('fontColor', action.color);
	            return control;
	        case _Values2.default.CONTROL.SET_FONT_SIZE:
	            control = control.set('fontSize', action.size);
	            return control;
	        case _Values2.default.CONTROL.SET_BACKGROUND_COLOR:
	            control = control.set('backgroundColor', action.color);
	            return control;
	        default:
	            return control;
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _immutable = __webpack_require__(3);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _Entities = __webpack_require__(26);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/4/25.
	 */
	module.exports = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    var pagesEntity = _immutable2.default.Map(state);
	    var pages = pagesEntity.get('pages');
	    var activeIndex = pagesEntity.get('activeIndex');
	    var page = null;
	    var index = null;
	
	    switch (action.type) {
	        case _Values2.default.APP.INIT:
	            pages = _immutable2.default.List();
	            page = _immutable2.default.Map(new _Entities.Page()).set('rid', _AppStore2.default.uniqueId());
	            pages = pages.push(page);
	            pagesEntity = pagesEntity.set('pages', pages).set('activeIndex', 0);
	            return pagesEntity;
	        case _Values2.default.PAGES.ADD:
	            page = _immutable2.default.Map(new _Entities.Page()).set('rid', _AppStore2.default.uniqueId());
	            pages = pages.push(page);
	            pagesEntity = pagesEntity.set('pages', pages);
	            return pagesEntity;
	        case _Values2.default.PAGES.DELETE:
	            index = pages.indexOf(action.page);
	            if (index > -1) {
	                pages = pages.delete(index);
	                //当前页码大于等于删除页码
	                if (activeIndex >= index && activeIndex > 0) {
	                    pagesEntity = pagesEntity.set('activeIndex', pagesEntity.get('activeIndex') - 1);
	                }
	                //当前页码小于删除页码,activeIndex不变
	                pagesEntity = pagesEntity.set('pages', pages);
	            }
	            return pagesEntity;
	        case _Values2.default.PAGES.ACTIVE:
	            index = pages.indexOf(action.page);
	            if (index > -1) {
	                pagesEntity = pagesEntity.set('activeIndex', index);
	            }
	            return pagesEntity;
	        case _Values2.default.PAGES.SET_BACKGROUND_COLOR:
	            page = pages.get(activeIndex);
	            if (page !== undefined) {
	                page = page.set('backgroundColor', action.color);
	                pages = pages.set(activeIndex, page);
	                pagesEntity = pagesEntity.set('pages', pages);
	            }
	            return pagesEntity;
	        default:
	            return pagesEntity;
	    }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateValue = exports.save = exports.doDelete = exports.addImage = exports.addText = exports.release = exports.active = exports.init = undefined;
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/4/18.
	 */
	var init = exports.init = _AppStore2.default.makeActionCreator(_Values2.default.APP.INIT);
	var active = exports.active = _AppStore2.default.makeActionCreator(_Values2.default.ELEMENT.ACTIVE, 'element');
	var release = exports.release = _AppStore2.default.makeActionCreator(_Values2.default.ELEMENT.RELEASE);
	var addText = exports.addText = _AppStore2.default.makeActionCreator(_Values2.default.ELEMENTS.ADD_TEXT);
	var addImage = exports.addImage = _AppStore2.default.makeActionCreator(_Values2.default.ELEMENTS.ADD_IMAGE, 'src');
	var doDelete = exports.doDelete = _AppStore2.default.makeActionCreator(_Values2.default.ELEMENTS.DELETE);
	var save = exports.save = _AppStore2.default.makeActionCreator(_Values2.default.ELEMENTS.SAVE, 'width', 'height', 'left', 'top');
	var updateValue = exports.updateValue = _AppStore2.default.makeActionCreator(_Values2.default.ELEMENTS.UPDATE_VALUE, 'content');

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classname = __webpack_require__(5);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	var _Store = __webpack_require__(8);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _RemovePoint = __webpack_require__(31);
	
	var _RemovePoint2 = _interopRequireDefault(_RemovePoint);
	
	var _ElementsAction = __webpack_require__(29);
	
	var ElementsAction = _interopRequireWildcard(_ElementsAction);
	
	__webpack_require__(32);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/3/9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * using ES6 syntax
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	//拖拽的点
	var ResizePoint = function (_React$Component) {
	    _inherits(ResizePoint, _React$Component);
	
	    function ResizePoint(props) {
	        _classCallCheck(this, ResizePoint);
	
	        return _possibleConstructorReturn(this, (ResizePoint.__proto__ || Object.getPrototypeOf(ResizePoint)).call(this, props));
	    }
	
	    _createClass(ResizePoint, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { className: (0, _classname2.default)('resize-point', this.props.type), onClick: this.props.onClick,
	                onMouseDown: this.props.onMouseDown });
	        }
	    }]);
	
	    return ResizePoint;
	}(_react2.default.Component);
	
	var Element = function (_React$Component2) {
	    _inherits(Element, _React$Component2);
	
	    function Element(props) {
	        _classCallCheck(this, Element);
	
	        return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
	    }
	
	    _createClass(Element, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classname2.default)('element', this.props.className),
	                    onMouseDown: this.props.onMouseDown.bind(null, this.props.element),
	                    style: this.setInlineStyle() },
	                this.props.children,
	                _react2.default.createElement(_RemovePoint2.default, { onMouseUp: this.deleteElement.bind(this) }),
	                _react2.default.createElement(ResizePoint, { type: 'right-bottom', onMouseDown: this.props.prepareResize.bind(null, 'scale') }),
	                _react2.default.createElement(ResizePoint, { type: 'right', onMouseDown: this.props.prepareResize.bind(null, 'x') }),
	                _react2.default.createElement(ResizePoint, { type: 'bottom', onMouseDown: this.props.prepareResize.bind(null, 'y') })
	            );
	        }
	    }, {
	        key: 'deleteElement',
	        value: function deleteElement(e) {
	            _Store2.default.dispatch(ElementsAction.doDelete());
	            e.stopPropagation();
	        }
	    }, {
	        key: 'setInlineStyle',
	        value: function setInlineStyle() {
	            var baseStyle = {
	                width: this.props.element.get('width'),
	                height: this.props.element.get('height'),
	                left: this.props.element.get('left'),
	                top: this.props.element.get('top'),
	                zIndex: this.props.element.get('zIndex'),
	                textAlign: this.props.element.get('controlProps').get('textAlign'),
	                fontSize: this.props.element.get('controlProps').get('fontSize'),
	                color: this.props.element.get('controlProps').get('fontColor')
	            };
	            if (this.props.preview === true) {
	                var previewStyle = {};
	                previewStyle.animationName = this.props.element.get('controlProps').get('animation');
	                previewStyle.animationDuration = this.props.element.get('controlProps').get('duration');
	                previewStyle.animationTimingFunction = 'ease';
	                previewStyle.animationDelay = this.props.element.get('controlProps').get('delay');
	                return Object.assign(baseStyle, previewStyle);
	            }
	            return baseStyle;
	        }
	    }]);
	
	    return Element;
	}(_react2.default.Component);
	
	Element.propTypes = {
	    element: _react2.default.PropTypes.object,
	    className: _react2.default.PropTypes.string,
	    preview: _react2.default.PropTypes.bool
	};
	
	module.exports = Element;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/4/10.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	//删除图标
	module.exports = function (_React$Component) {
	    _inherits(RemovePoint, _React$Component);
	
	    function RemovePoint(props) {
	        _classCallCheck(this, RemovePoint);
	
	        return _possibleConstructorReturn(this, (RemovePoint.__proto__ || Object.getPrototypeOf(RemovePoint)).call(this, props));
	    }
	
	    _createClass(RemovePoint, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "remove-point", onClick: this.props.onClick,
	                    onMouseDown: this.props.onMouseDown,
	                    onMouseUp: this.props.onMouseUp },
	                _react2.default.createElement("i", { className: "iconfont icon-errorsign" })
	            );
	        }
	    }]);
	
	    return RemovePoint;
	}(_react2.default.Component);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Element.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Element.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".element {\n  padding: 7px;\n  position: absolute;\n  display: inline-block;\n  text-align: left;\n  -webkit-user-select: none;\n  user-select: none; }\n  .element .remove-point {\n    display: none;\n    position: absolute;\n    line-height: 0;\n    top: 0;\n    right: -8px;\n    color: #909090;\n    cursor: pointer; }\n  .element.active {\n    border: 2px dotted #8aa7ff;\n    padding: 5px; }\n    .element.active .resize-point {\n      width: 10px;\n      height: 10px;\n      border-radius: 10px;\n      background-color: red;\n      position: absolute;\n      cursor: move; }\n      .element.active .resize-point.right-bottom {\n        bottom: -5px;\n        right: -5px;\n        cursor: se-resize; }\n      .element.active .resize-point.right {\n        top: 50%;\n        right: -5px;\n        margin-top: -5px;\n        cursor: e-resize; }\n      .element.active .resize-point.left {\n        top: 50%;\n        left: -5px;\n        margin-top: -5px; }\n      .element.active .resize-point.bottom {\n        left: 50%;\n        bottom: -5px;\n        margin-left: -6px;\n        cursor: n-resize; }\n    .element.active .remove-point {\n      display: block; }\n  .element .full {\n    width: 100%;\n    height: 100%; }\n", ""]);
	
	// exports


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classname = __webpack_require__(5);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	var _ElementsAction = __webpack_require__(29);
	
	var ElementsAction = _interopRequireWildcard(_ElementsAction);
	
	var _Store = __webpack_require__(8);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	__webpack_require__(37);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/3/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Text = function (_React$Component) {
	    _inherits(Text, _React$Component);
	
	    function Text(props) {
	        _classCallCheck(this, Text);
	
	        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));
	    }
	
	    _createClass(Text, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'p',
	                { className: 'text',
	                    onDoubleClick: this.editText.bind(this),
	                    onBlur: this.saveText.bind(this),
	                    style: this.setInlineStyle() },
	                this.props.value
	            );
	        }
	    }, {
	        key: 'setInlineStyle',
	        value: function setInlineStyle() {
	            return {
	                fontSize: this.props.fontSize,
	                height: '100%',
	                overflow: 'hidden'
	            };
	        }
	    }, {
	        key: 'editText',
	        value: function editText(e) {
	            var target = e.target;
	            target.contentEditable = true;
	            target.focus();
	        }
	    }, {
	        key: 'saveText',
	        value: function saveText(e) {
	            var content = e.target.textContent;
	            if (content.length == 0) {
	                content = '双击修改';
	            }
	            _Store2.default.dispatch(ElementsAction.updateValue(content));
	        }
	    }]);
	
	    return Text;
	}(_react2.default.Component);
	
	Text.defauleProps = {
	    fontSize: 16
	};
	
	Text.propTypes = {
	    fontSize: _react2.default.PropTypes.number
	};
	
	module.exports = Text;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Text.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Text.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".text {\n  margin: 0;\n  padding: 0;\n  border: none;\n  background-color: inherit;\n  word-wrap: break-word; }\n", ""]);
	
	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Page.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Page.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".page {\n  box-shadow: 0 0 40px 0 #CDCDCD;\n  width: 320px;\n  height: 485px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADVJREFUeNpifPHixQEGGgMWEPH161cHWlrCxEAHMGrJqCWjloxaMmrJqCWjloxaMrgtAQgwAL+YBst5kqDgAAAAAElFTkSuQmCC\"); }\n", ""]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classname = __webpack_require__(5);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	var _Store = __webpack_require__(8);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _ElementsAction = __webpack_require__(29);
	
	var ElementsAction = _interopRequireWildcard(_ElementsAction);
	
	__webpack_require__(42);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/3/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ElementBar = function (_React$Component) {
	    _inherits(ElementBar, _React$Component);
	
	    function ElementBar(props) {
	        _classCallCheck(this, ElementBar);
	
	        return _possibleConstructorReturn(this, (ElementBar.__proto__ || Object.getPrototypeOf(ElementBar)).call(this, props));
	    }
	
	    _createClass(ElementBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classname2.default)('element-bar', this.props.className) },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        { onClick: this.addElementHandle.bind(this, _Values2.default.ELEMENT.TYPE.TEXT) },
	                        _react2.default.createElement('i', { className: 'iconfont icon-text' }),
	                        '\u6587\u5B57'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { onClick: this.addElementHandle.bind(this, _Values2.default.ELEMENT.TYPE.IMAGE) },
	                        _react2.default.createElement('i', { className: 'iconfont icon-picturelarge' }),
	                        '\u56FE\u7247'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { onClick: this.saveHandle.bind(this) },
	                        _react2.default.createElement('i', { className: 'iconfont icon-ceshi' }),
	                        '\u9884\u89C8'
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'addElementHandle',
	        value: function addElementHandle(type, e) {
	            switch (type) {
	                case _Values2.default.ELEMENT.TYPE.TEXT:
	                    _Store2.default.dispatch(ElementsAction.addText());
	                    break;
	                case _Values2.default.ELEMENT.TYPE.IMAGE:
	                    var input = document.createElement('input');
	                    input.type = 'file';
	                    input.click();
	                    input.onchange = imageLoaderChange;
	            }
	        }
	    }, {
	        key: 'saveHandle',
	        value: function saveHandle(e) {
	            var pagesEntity = JSON.stringify(_Store2.default.getState().pagesEntity.toJSON());
	            localStorage.setItem('h5-by-soup-elements', pagesEntity);
	            window.open('/h5-runner/index.html');
	        }
	    }, {
	        key: 'previewHandle',
	        value: function previewHandle(e) {
	            localStorage.clear();
	        }
	    }]);
	
	    return ElementBar;
	}(_react2.default.Component);
	
	function imageLoaderChange(e) {
	    var reader = new FileReader();
	    var file = e.target.files[0];
	    var name = file.name;
	    if (file) {
	        var fileSize = (file.size / 1024 / 1024).toFixed(4); //MB
	        if (fileSize < .5) {
	            reader.onload = function (upload) {
	                _Store2.default.dispatch(ElementsAction.addImage(upload.target.result));
	            };
	        } else {
	            alert('图片不得超过0.5MB');
	        }
	    }
	    reader.readAsDataURL(file);
	}
	
	module.exports = ElementBar;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ElementBar.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ElementBar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".element-bar ul {\n  margin: 0;\n  padding: 0;\n  display: inline-block; }\n  .element-bar ul li {\n    display: inline-block;\n    list-style: none;\n    border: none;\n    padding: 5px 20px;\n    cursor: pointer;\n    font-size: 12px;\n    text-align: center; }\n    .element-bar ul li i {\n      display: block;\n      font-size: 24px;\n      margin: 5px 0; }\n", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classname = __webpack_require__(5);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	var _RemovePoint = __webpack_require__(31);
	
	var _RemovePoint2 = _interopRequireDefault(_RemovePoint);
	
	var _PagesAction = __webpack_require__(45);
	
	var PagesAction = _interopRequireWildcard(_PagesAction);
	
	var _Store = __webpack_require__(8);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	__webpack_require__(46);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/4/25.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var PageList = function (_React$Component) {
	    _inherits(PageList, _React$Component);
	
	    function PageList(props) {
	        _classCallCheck(this, PageList);
	
	        return _possibleConstructorReturn(this, (PageList.__proto__ || Object.getPrototypeOf(PageList)).call(this, props));
	    }
	
	    _createClass(PageList, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.props.pages !== nextProps.pages) {
	                return true;
	            } else if (this.props.activeIndex !== nextProps.activeIndex) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var self = this;
	            var pages = this.props.pages.map(function (page, index) {
	                var className = '';
	                if (self.props.activeIndex === index) {
	                    className = 'active';
	                }
	                return self.buildPage(index, page, className);
	            });
	            pages = pages.push(this.buildAddBtn());
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classname2.default)('page-bar', this.props.className) },
	                pages
	            );
	        }
	    }, {
	        key: 'buildPage',
	        value: function buildPage(pageIndex, page, className) {
	            return _react2.default.createElement(
	                'div',
	                { key: _AppStore2.default.uniqueId(), className: (0, _classname2.default)('m_page', className),
	                    onClick: this.activePage.bind(this, page) },
	                _react2.default.createElement(_RemovePoint2.default, { onMouseUp: this.deletePage.bind(this, page) }),
	                pageIndex
	            );
	        }
	    }, {
	        key: 'buildAddBtn',
	        value: function buildAddBtn() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'add-btn', className: 'm_page add', onClick: this.addPage },
	                '+'
	            );
	        }
	    }, {
	        key: 'addPage',
	        value: function addPage() {
	            _Store2.default.dispatch(PagesAction.add());
	        }
	    }, {
	        key: 'deletePage',
	        value: function deletePage(page, e) {
	            var pages = this.props.pages;
	            if (pages.size > 1) {
	                _Store2.default.dispatch(PagesAction.doDelete(page)); //执行删除
	            }
	        }
	    }, {
	        key: 'activePage',
	        value: function activePage(page, e) {
	            _Store2.default.dispatch(PagesAction.active(page));
	        }
	    }]);
	
	    return PageList;
	}(_react2.default.Component);
	
	PageList.propTypes = {
	    pages: _react2.default.PropTypes.object,
	    activeIndex: _react2.default.PropTypes.number,
	    className: _react2.default.PropTypes.string
	};
	
	module.exports = PageList;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setFontSize = exports.setBackgroundColor = exports.active = exports.doDelete = exports.add = undefined;
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/4/25.
	 */
	var add = exports.add = _AppStore2.default.makeActionCreator(_Values2.default.PAGES.ADD);
	var doDelete = exports.doDelete = _AppStore2.default.makeActionCreator(_Values2.default.PAGES.DELETE, 'page');
	var active = exports.active = _AppStore2.default.makeActionCreator(_Values2.default.PAGES.ACTIVE, 'page');
	var setBackgroundColor = exports.setBackgroundColor = _AppStore2.default.makeActionCreator(_Values2.default.PAGES.SET_BACKGROUND_COLOR, 'color');
	var setFontSize = exports.setFontSize = _AppStore2.default.makeActionCreator(_Values2.default.CONTROL.SET_FONT_SIZE, 'size');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./PageList.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./PageList.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-bar {\n  width: 120px;\n  padding: 4px;\n  background-color: white;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow: auto; }\n  .page-bar .m_page {\n    position: relative;\n    width: 100px;\n    height: 120px;\n    background-color: white;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n    margin: 10px auto;\n    font-size: 24px;\n    line-height: 120px;\n    vertical-align: middle;\n    text-align: center;\n    color: grey; }\n    .page-bar .m_page.active {\n      background-color: lightgray; }\n    .page-bar .m_page.add {\n      font-size: 48px;\n      cursor: pointer; }\n    .page-bar .m_page .remove-point {\n      display: none; }\n    .page-bar .m_page:hover .remove-point {\n      display: block;\n      cursor: pointer;\n      position: absolute;\n      height: 20px;\n      line-height: 20px;\n      right: 0;\n      top: 0; }\n", ""]);
	
	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classname = __webpack_require__(5);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	var _reactSelect = __webpack_require__(49);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _ColorSelector = __webpack_require__(62);
	
	var _ColorSelector2 = _interopRequireDefault(_ColorSelector);
	
	var _Store = __webpack_require__(8);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _ElementsAction = __webpack_require__(29);
	
	var ElementsAction = _interopRequireWildcard(_ElementsAction);
	
	var _ControlAction = __webpack_require__(82);
	
	var ControlAction = _interopRequireWildcard(_ControlAction);
	
	var _PagesAction = __webpack_require__(45);
	
	var PagesAction = _interopRequireWildcard(_PagesAction);
	
	__webpack_require__(83);
	
	__webpack_require__(85);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/4/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ControlBar = function (_React$Component) {
	    _inherits(ControlBar, _React$Component);
	
	    function ControlBar(props) {
	        _classCallCheck(this, ControlBar);
	
	        var _this = _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));
	
	        _this.state = {
	            index: 0
	        };
	        return _this;
	    }
	
	    _createClass(ControlBar, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.type !== nextProps.type) {
	                this.setState({
	                    index: 0
	                });
	                return true;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            switch (this.props.type) {
	                case _Values2.default.ELEMENT.TYPE.PAGE:
	                    return this.buildTab(['样式'], [this.backgroundColor()]);
	                case _Values2.default.ELEMENT.TYPE.TEXT:
	                    return this.buildTab(['样式', '动画'], [[this.fontColor(), this.fontTextAlign(), this.zIndex(), this.fontSize()], [this.animation(), this.animationDuration(), this.animationDelay()]]);
	                case _Values2.default.ELEMENT.TYPE.IMAGE:
	                    return this.buildTab(['样式', '动画'], [[this.zIndex()], [this.animation(), this.animationDuration(), this.animationDelay()]]);
	                default:
	                    return this.buildTab(['样式'], [this.props.type]);
	            }
	        }
	    }, {
	        key: 'buildTab',
	        value: function buildTab(tabHeadArr, tabBodyArr) {
	            var self = this;
	            tabHeadArr = tabHeadArr.map(function (head, index) {
	                return _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'span',
	                        { className: (0, _classname2.default)('title', { show: self.state.index == index }),
	                            key: index,
	                            'data-index': index },
	                        head
	                    )
	                );
	            });
	            tabBodyArr = tabBodyArr.map(function (body, index) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: (0, _classname2.default)('tab-main', { show: self.state.index == index }) },
	                    body
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classname2.default)('control-bar', this.props.className) },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'tab-head', onClick: this.switchTab.bind(this) },
	                    tabHeadArr
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tab-body' },
	                    tabBodyArr
	                )
	            );
	        }
	    }, {
	        key: 'switchTab',
	        value: function switchTab(e) {
	            var target = e.target;
	            if (target.dataset.index) {
	                this.setState({
	                    index: parseInt(target.dataset.index)
	                });
	            }
	        }
	
	        /**
	         * 动画选项
	         * @returns {XML}
	         */
	
	    }, {
	        key: 'animation',
	        value: function animation() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'control-bar-animation' },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u52A8\u753B\u6548\u679C\uFF1A'
	                ),
	                _react2.default.createElement(_reactSelect2.default, { name: 'animation', clearable: false, value: this.props.animation,
	                    options: _Values2.default.CONTROL.ANIMATION_OPTIONS,
	                    onChange: this.chooseAnimation })
	            );
	        }
	
	        /**
	         * zIndex选项
	         * @returns {XML}
	         */
	
	    }, {
	        key: 'zIndex',
	        value: function zIndex() {
	            var options = [];
	            if (this.props.zIndex !== -1 && this.props.maxZIndex > 0) {
	                for (var i = 0; i < this.props.maxZIndex; i++) {
	                    options.push({ value: i, label: i });
	                }
	                return _react2.default.createElement(
	                    'div',
	                    { key: 'control-bar-z-index' },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '\u5C42\u7EA7\u5173\u7CFB\uFF1A'
	                    ),
	                    _react2.default.createElement(_reactSelect2.default, { name: 'zIndex', clearable: false, value: this.props.zIndex, options: options,
	                        onChange: this.chooseZIndex })
	                );
	            }
	            return _react2.default.createElement(
	                'p',
	                null,
	                'Hello ZIndex'
	            );
	        }
	
	        /**
	         * 缓动持续时长
	         * @returns {XML}
	         */
	
	    }, {
	        key: 'animationDelay',
	        value: function animationDelay() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'control-bar-delay' },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u52A8\u753B\u5EF6\u8FDF\uFF1A'
	                ),
	                _react2.default.createElement(_reactSelect2.default, { name: 'delay', clearable: false, value: this.props.delay,
	                    options: _Values2.default.CONTROL.DELAY_OPTION,
	                    onChange: this.chooseDelay })
	            );
	        }
	    }, {
	        key: 'animationDuration',
	        value: function animationDuration() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'control-bar-duration' },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u52A8\u753B\u6301\u7EED\u65F6\u957F\uFF1A'
	                ),
	                _react2.default.createElement(_reactSelect2.default, { name: 'duration', clearable: false, value: this.props.duration,
	                    options: _Values2.default.CONTROL.DURATION_OPTION,
	                    onChange: this.chooseDuration })
	            );
	        }
	    }, {
	        key: 'fontTextAlign',
	        value: function fontTextAlign() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'control-bar-text-align' },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u5BF9\u9F50\uFF1A'
	                ),
	                _react2.default.createElement(_reactSelect2.default, { name: 'textAlign', clearable: false, value: this.props.textAlign,
	                    options: _Values2.default.CONTROL.TEXT_ALIGN_OPTION,
	                    onChange: this.chooseTextAlign })
	            );
	        }
	    }, {
	        key: 'fontSize',
	        value: function fontSize() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'control-bar-duration' },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u5B57\u4F53\u5927\u5C0F\uFF1A'
	                ),
	                _react2.default.createElement(_reactSelect2.default, { name: 'duration', clearable: false, value: this.props.fontSize,
	                    options: _Values2.default.CONTROL.FONT_SIZE_OPTION,
	                    onChange: this.chooseFontSize })
	            );
	        }
	    }, {
	        key: 'fontColor',
	        value: function fontColor() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'control-bar-text-color' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'color-area' },
	                    '\u5B57\u4F53\u989C\u8272\uFF1A'
	                ),
	                _react2.default.createElement(_ColorSelector2.default, { className: 'color-area', color: this.props.fontColor, onChange: this.chooseColor })
	            );
	        }
	    }, {
	        key: 'backgroundColor',
	        value: function backgroundColor() {
	            return _react2.default.createElement(
	                'div',
	                { key: 'control-bar-text-color' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'color-area' },
	                    '\u80CC\u666F\u989C\u8272\uFF1A'
	                ),
	                _react2.default.createElement(_ColorSelector2.default, { className: 'color-area', color: this.props.backgroundColor, onChange: this.chooseBackgroundColor })
	            );
	        }
	    }, {
	        key: 'chooseAnimation',
	        value: function chooseAnimation(target) {
	            _Store2.default.dispatch(ControlAction.setAnimation(target.value));
	        }
	    }, {
	        key: 'chooseZIndex',
	        value: function chooseZIndex(target) {
	            _Store2.default.dispatch(ControlAction.setZIndex(target.value));
	        }
	    }, {
	        key: 'chooseDelay',
	        value: function chooseDelay(target) {
	            _Store2.default.dispatch(ControlAction.setDelay(target.value));
	        }
	    }, {
	        key: 'chooseDuration',
	        value: function chooseDuration(target) {
	            _Store2.default.dispatch(ControlAction.setDuration(target.value));
	        }
	    }, {
	        key: 'chooseTextAlign',
	        value: function chooseTextAlign(target) {
	            _Store2.default.dispatch(ControlAction.setTextAlign(target.value));
	        }
	    }, {
	        key: 'chooseColor',
	        value: function chooseColor(color) {
	            _Store2.default.dispatch(ControlAction.setTextColor(color));
	        }
	    }, {
	        key: 'chooseBackgroundColor',
	        value: function chooseBackgroundColor(color) {
	            _Store2.default.dispatch(PagesAction.setBackgroundColor(color));
	        }
	    }, {
	        key: 'chooseFontSize',
	        value: function chooseFontSize(target) {
	            _Store2.default.dispatch(PagesAction.setFontSize(target.value));
	        }
	    }]);
	
	    return ControlBar;
	}(_react2.default.Component);
	
	ControlBar.propTypes = {
	    control: _react2.default.PropTypes.object,
	    type: _react2.default.PropTypes.string,
	    animation: _react2.default.PropTypes.string,
	    delay: _react2.default.PropTypes.string,
	    fontSize: _react2.default.PropTypes.number,
	    fontColor: _react2.default.PropTypes.string,
	    textAlign: _react2.default.PropTypes.string,
	    zIndex: _react2.default.PropTypes.number,
	    maxZIndex: _react2.default.PropTypes.number,
	    backgroundImage: _react2.default.PropTypes.string,
	    backgroundColor: _react2.default.PropTypes.string
	};
	
	ControlBar.defaultProps = {
	    animation: _Values2.default.CONTROL.ANIMATION_OPTIONS[0].value,
	    delay: _Values2.default.CONTROL.DELAY_OPTION[0].value,
	    duration: _Values2.default.CONTROL.DURATION_OPTION[0].value,
	    textAlign: _Values2.default.CONTROL.TEXT_ALIGN_OPTION[0].value
	};
	
	module.exports = ControlBar;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/react-select
	*/
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
		var target = {};for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
		}return target;
	}
	
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
		} else {
			obj[key] = value;
		}return obj;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactInputAutosize = __webpack_require__(50);
	
	var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);
	
	var _classnames = __webpack_require__(51);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDefaultArrowRenderer = __webpack_require__(53);
	
	var _utilsDefaultArrowRenderer2 = _interopRequireDefault(_utilsDefaultArrowRenderer);
	
	var _utilsDefaultFilterOptions = __webpack_require__(54);
	
	var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);
	
	var _utilsDefaultMenuRenderer = __webpack_require__(56);
	
	var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);
	
	var _Async = __webpack_require__(57);
	
	var _Async2 = _interopRequireDefault(_Async);
	
	var _AsyncCreatable = __webpack_require__(58);
	
	var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);
	
	var _Creatable = __webpack_require__(59);
	
	var _Creatable2 = _interopRequireDefault(_Creatable);
	
	var _Option = __webpack_require__(60);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Value = __webpack_require__(61);
	
	var _Value2 = _interopRequireDefault(_Value);
	
	function stringifyValue(value) {
		var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		if (valueType === 'string') {
			return value;
		} else if (valueType === 'object') {
			return JSON.stringify(value);
		} else if (valueType === 'number' || valueType === 'boolean') {
			return String(value);
		} else {
			return '';
		}
	}
	
	var stringOrNode = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]);
	
	var instanceId = 1;
	
	var Select = _react2['default'].createClass({
	
		displayName: 'Select',
	
		propTypes: {
			addLabelText: _react2['default'].PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
			'aria-label': _react2['default'].PropTypes.string, // Aria label (for assistive tech)
			'aria-labelledby': _react2['default'].PropTypes.string, // HTML ID of an element that should be used as the label (for assistive tech)
			arrowRenderer: _react2['default'].PropTypes.func, // Create drop-down caret element
			autoBlur: _react2['default'].PropTypes.bool, // automatically blur the component when an option is selected
			autofocus: _react2['default'].PropTypes.bool, // autofocus the component on mount
			autosize: _react2['default'].PropTypes.bool, // whether to enable autosizing or not
			backspaceRemoves: _react2['default'].PropTypes.bool, // whether backspace removes an item if there is no text input
			backspaceToRemoveMessage: _react2['default'].PropTypes.string, // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
			className: _react2['default'].PropTypes.string, // className for the outer element
			clearAllText: stringOrNode, // title for the "clear" control when multi: true
			clearValueText: stringOrNode, // title for the "clear" control
			clearable: _react2['default'].PropTypes.bool, // should it be possible to reset value
			delimiter: _react2['default'].PropTypes.string, // delimiter to use to join multiple values for the hidden field value
			disabled: _react2['default'].PropTypes.bool, // whether the Select is disabled or not
			escapeClearsValue: _react2['default'].PropTypes.bool, // whether escape clears the value when the menu is closed
			filterOption: _react2['default'].PropTypes.func, // method to filter a single option (option, filterString)
			filterOptions: _react2['default'].PropTypes.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
			ignoreAccents: _react2['default'].PropTypes.bool, // whether to strip diacritics when filtering
			ignoreCase: _react2['default'].PropTypes.bool, // whether to perform case-insensitive filtering
			inputProps: _react2['default'].PropTypes.object, // custom attributes for the Input
			inputRenderer: _react2['default'].PropTypes.func, // returns a custom input component
			instanceId: _react2['default'].PropTypes.string, // set the components instanceId
			isLoading: _react2['default'].PropTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
			joinValues: _react2['default'].PropTypes.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
			labelKey: _react2['default'].PropTypes.string, // path of the label value in option objects
			matchPos: _react2['default'].PropTypes.string, // (any|start) match the start or entire string when filtering
			matchProp: _react2['default'].PropTypes.string, // (any|label|value) which option property to filter on
			menuBuffer: _react2['default'].PropTypes.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
			menuContainerStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu container
			menuRenderer: _react2['default'].PropTypes.func, // renders a custom menu with options
			menuStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu
			multi: _react2['default'].PropTypes.bool, // multi-value input
			name: _react2['default'].PropTypes.string, // generates a hidden <input /> tag with this field name for html forms
			noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
			onBlur: _react2['default'].PropTypes.func, // onBlur handler: function (event) {}
			onBlurResetsInput: _react2['default'].PropTypes.bool, // whether input is cleared on blur
			onChange: _react2['default'].PropTypes.func, // onChange handler: function (newValue) {}
			onClose: _react2['default'].PropTypes.func, // fires when the menu is closed
			onCloseResetsInput: _react2['default'].PropTypes.bool, // whether input is cleared when menu is closed through the arrow
			onFocus: _react2['default'].PropTypes.func, // onFocus handler: function (event) {}
			onInputChange: _react2['default'].PropTypes.func, // onInputChange handler: function (inputValue) {}
			onInputKeyDown: _react2['default'].PropTypes.func, // input keyDown handler: function (event) {}
			onMenuScrollToBottom: _react2['default'].PropTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
			onOpen: _react2['default'].PropTypes.func, // fires when the menu is opened
			onValueClick: _react2['default'].PropTypes.func, // onClick handler for value labels: function (value, event) {}
			openAfterFocus: _react2['default'].PropTypes.bool, // boolean to enable opening dropdown when focused
			openOnFocus: _react2['default'].PropTypes.bool, // always open options menu on focus
			optionClassName: _react2['default'].PropTypes.string, // additional class(es) to apply to the <Option /> elements
			optionComponent: _react2['default'].PropTypes.func, // option component to render in dropdown
			optionRenderer: _react2['default'].PropTypes.func, // optionRenderer: function (option) {}
			options: _react2['default'].PropTypes.array, // array of options
			pageSize: _react2['default'].PropTypes.number, // number of entries to page when using page up/down keys
			placeholder: stringOrNode, // field placeholder, displayed when there's no value
			required: _react2['default'].PropTypes.bool, // applies HTML5 required attribute when needed
			resetValue: _react2['default'].PropTypes.any, // value to use when you clear the control
			scrollMenuIntoView: _react2['default'].PropTypes.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
			searchable: _react2['default'].PropTypes.bool, // whether to enable searching feature or not
			simpleValue: _react2['default'].PropTypes.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
			style: _react2['default'].PropTypes.object, // optional style to apply to the control
			tabIndex: _react2['default'].PropTypes.string, // optional tab index of the control
			tabSelectsValue: _react2['default'].PropTypes.bool, // whether to treat tabbing out while focused to be value selection
			value: _react2['default'].PropTypes.any, // initial field value
			valueComponent: _react2['default'].PropTypes.func, // value component to render
			valueKey: _react2['default'].PropTypes.string, // path of the label value in option objects
			valueRenderer: _react2['default'].PropTypes.func, // valueRenderer: function (option) {}
			wrapperStyle: _react2['default'].PropTypes.object },
	
		// optional style to apply to the component wrapper
		statics: { Async: _Async2['default'], AsyncCreatable: _AsyncCreatable2['default'], Creatable: _Creatable2['default'] },
	
		getDefaultProps: function getDefaultProps() {
			return {
				addLabelText: 'Add "{label}"?',
				arrowRenderer: _utilsDefaultArrowRenderer2['default'],
				autosize: true,
				backspaceRemoves: true,
				backspaceToRemoveMessage: 'Press backspace to remove {label}',
				clearable: true,
				clearAllText: 'Clear all',
				clearValueText: 'Clear value',
				delimiter: ',',
				disabled: false,
				escapeClearsValue: true,
				filterOptions: _utilsDefaultFilterOptions2['default'],
				ignoreAccents: true,
				ignoreCase: true,
				inputProps: {},
				isLoading: false,
				joinValues: false,
				labelKey: 'label',
				matchPos: 'any',
				matchProp: 'any',
				menuBuffer: 0,
				menuRenderer: _utilsDefaultMenuRenderer2['default'],
				multi: false,
				noResultsText: 'No results found',
				onBlurResetsInput: true,
				onCloseResetsInput: true,
				openAfterFocus: false,
				optionComponent: _Option2['default'],
				pageSize: 5,
				placeholder: 'Select...',
				required: false,
				scrollMenuIntoView: true,
				searchable: true,
				simpleValue: false,
				tabSelectsValue: true,
				valueComponent: _Value2['default'],
				valueKey: 'value'
			};
		},
	
		getInitialState: function getInitialState() {
			return {
				inputValue: '',
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false,
				required: false
			};
		},
	
		componentWillMount: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);
	
			if (this.props.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], this.props.multi)
				});
			}
		},
	
		componentDidMount: function componentDidMount() {
			if (this.props.autofocus) {
				this.focus();
			}
		},
	
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);
	
			if (nextProps.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], nextProps.multi)
				});
			}
		},
	
		componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
			if (nextState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(nextState.isOpen);
				var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
				handler && handler();
			}
		},
	
		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = _reactDom2['default'].findDOMNode(this.focused);
				var menuNode = _reactDom2['default'].findDOMNode(this.menu);
				menuNode.scrollTop = focusedOptionNode.offsetTop;
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}
	
			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = _reactDom2['default'].findDOMNode(this.focused);
				var menuDOM = _reactDom2['default'].findDOMNode(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
		},
	
		componentWillUnmount: function componentWillUnmount() {
			document.removeEventListener('touchstart', this.handleTouchOutside);
		},
	
		toggleTouchOutsideEvent: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				document.addEventListener('touchstart', this.handleTouchOutside);
			} else {
				document.removeEventListener('touchstart', this.handleTouchOutside);
			}
		},
	
		handleTouchOutside: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		},
	
		focus: function focus() {
			if (!this.input) return;
			this.input.focus();
	
			if (this.props.openAfterFocus) {
				this.setState({
					isOpen: true
				});
			}
		},
	
		blurInput: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		handleTouchEnd: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Fire the mouse events
			this.handleMouseDown(event);
		},
	
		handleTouchEndClearValue: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Clear the value
			this.clearValue(event);
		},
	
		handleMouseDown: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
	
			if (event.target.tagName === 'INPUT') {
				return;
			}
	
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
	
			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen
				});
			}
	
			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();
	
				var input = this.input;
				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}
	
				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';
	
				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: true,
					isPseudoFocused: false
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = true;
				this.focus();
			}
		},
	
		handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If the menu isn't open, let the event bubble to the main handleMouseDown
			if (!this.state.isOpen) {
				return;
			}
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
			// close the menu
			this.closeMenu();
		},
	
		handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
	
			this._openAfterFocus = true;
			this.focus();
		},
	
		closeMenu: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: ''
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: this.state.inputValue
				});
			}
			this.hasScrolledToOption = false;
		},
	
		handleInputFocus: function handleInputFocus(event) {
			if (this.props.disabled) return;
			var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
			this.setState({
				isFocused: true,
				isOpen: isOpen
			});
			this._openAfterFocus = false;
		},
	
		handleInputBlur: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}
	
			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = '';
			}
			this.setState(onBlurredState);
		},
	
		handleInputChange: function handleInputChange(event) {
			var newInputValue = event.target.value;
	
			if (this.state.inputValue !== event.target.value && this.props.onInputChange) {
				var nextState = this.props.onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newInputValue = '' + nextState;
				}
			}
	
			this.setState({
				isOpen: true,
				isPseudoFocused: false,
				inputValue: newInputValue
			});
		},
	
		handleKeyDown: function handleKeyDown(event) {
			if (this.props.disabled) return;
	
			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}
	
			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						return;
					}
					this.selectFocusedOption();
					return;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 33:
					// page up
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						return;
					}
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						return;
					}
					this.focusStartOption();
					break;
				default:
					return;
			}
			event.preventDefault();
		},
	
		handleValueClick: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		},
	
		handleMenuScroll: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;
	
			if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
				this.props.onMenuScrollToBottom();
			}
		},
	
		handleRequired: function handleRequired(value, multi) {
			if (!value) return true;
			return multi ? value.length === 0 : Object.keys(value).length === 0;
		},
	
		getOptionLabel: function getOptionLabel(op) {
			return op[this.props.labelKey];
		},
	
		/**
	  * Turns a value into an array from the given options
	  * @param	{String|Number|Array}	value		- the value of the select input
	  * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
	  * @returns	{Array}	the value of the select represented in an array
	  */
		getValueArray: function getValueArray(value, nextProps) {
			var _this = this;
	
			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') value = value.split(props.delimiter);
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return _this.expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = this.expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		},
	
		/**
	  * Retrieve a value from the given options and valueKey
	  * @param	{String|Number|Array}	value	- the selected value(s)
	  * @param	{Object}		props	- the Select component's props (or nextProps)
	  */
		expandValue: function expandValue(value, props) {
			var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
			if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
			var options = props.options;
			var valueKey = props.valueKey;
	
			if (!options) return;
			for (var i = 0; i < options.length; i++) {
				if (options[i][valueKey] === value) return options[i];
			}
		},
	
		setValue: function setValue(value) {
			var _this2 = this;
	
			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (!this.props.onChange) return;
			if (this.props.required) {
				var required = this.handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			this.props.onChange(value);
		},
	
		selectValue: function selectValue(value) {
			var _this3 = this;
	
			//NOTE: update value in the callback to make sure the input value is empty so that there are no styling issues (Chrome had issue otherwise)
			this.hasScrolledToOption = false;
			if (this.props.multi) {
				this.setState({
					inputValue: '',
					focusedIndex: null
				}, function () {
					_this3.addValue(value);
				});
			} else {
				this.setState({
					isOpen: false,
					inputValue: '',
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		},
	
		addValue: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.concat(value));
		},
	
		popValue: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(valueArray.slice(0, valueArray.length - 1));
		},
	
		removeValue: function removeValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i !== value;
			}));
			this.focus();
		},
	
		clearValue: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(this.getResetValue());
			this.setState({
				isOpen: false,
				inputValue: ''
			}, this.focus);
		},
	
		getResetValue: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		},
	
		focusOption: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		},
	
		focusNextOption: function focusNextOption() {
			this.focusAdjacentOption('next');
		},
	
		focusPreviousOption: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		},
	
		focusPageUpOption: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		},
	
		focusPageDownOption: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		},
	
		focusStartOption: function focusStartOption() {
			this.focusAdjacentOption('start');
		},
	
		focusEndOption: function focusEndOption() {
			this.focusAdjacentOption('end');
		},
	
		focusAdjacentOption: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this._focusedOption || options[dir === 'next' ? 0 : options.length - 1].option
				});
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var potentialIndex = focusedIndex + this.props.pageSize;
				if (potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = potentialIndex;
				}
			}
	
			if (focusedIndex === -1) {
				focusedIndex = 0;
			}
	
			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		},
	
		getFocusedOption: function getFocusedOption() {
			return this._focusedOption;
		},
	
		getInputValue: function getInputValue() {
			return this.state.inputValue;
		},
	
		selectFocusedOption: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		},
	
		renderLoading: function renderLoading() {
			if (!this.props.isLoading) return;
			return _react2['default'].createElement('span', { className: 'Select-loading-zone', 'aria-hidden': 'true' }, _react2['default'].createElement('span', { className: 'Select-loading' }));
		},
	
		renderValue: function renderValue(valueArray, isOpen) {
			var _this4 = this;
	
			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				return !this.state.inputValue ? _react2['default'].createElement('div', { className: 'Select-placeholder' }, this.props.placeholder) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return _react2['default'].createElement(ValueComponent, {
						id: _this4._instancePrefix + '-value-' + i,
						instancePrefix: _this4._instancePrefix,
						disabled: _this4.props.disabled || value.clearableValue === false,
						key: 'value-' + i + '-' + value[_this4.props.valueKey],
						onClick: onClick,
						onRemove: _this4.removeValue,
						value: value
					}, renderLabel(value, i), _react2['default'].createElement('span', { className: 'Select-aria-only' }, ' '));
				});
			} else if (!this.state.inputValue) {
				if (isOpen) onClick = null;
				return _react2['default'].createElement(ValueComponent, {
					id: this._instancePrefix + '-value-item',
					disabled: this.props.disabled,
					instancePrefix: this._instancePrefix,
					onClick: onClick,
					value: valueArray[0]
				}, renderLabel(valueArray[0]));
			}
		},
	
		renderInput: function renderInput(valueArray, focusedOptionIndex) {
			var _this5 = this;
	
			if (this.props.inputRenderer) {
				return this.props.inputRenderer();
			} else {
				var _classNames;
	
				var className = (0, _classnames2['default'])('Select-input', this.props.inputProps.className);
				var isOpen = !!this.state.isOpen;
	
				var ariaOwns = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));
	
				// TODO: Check how this project includes Object.assign()
				var inputProps = _extends({}, this.props.inputProps, {
					role: 'combobox',
					'aria-expanded': '' + isOpen,
					'aria-owns': ariaOwns,
					'aria-haspopup': '' + isOpen,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-labelledby': this.props['aria-labelledby'],
					'aria-label': this.props['aria-label'],
					className: className,
					tabIndex: this.props.tabIndex,
					onBlur: this.handleInputBlur,
					onChange: this.handleInputChange,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref) {
						return _this5.input = _ref;
					},
					required: this.state.required,
					value: this.state.inputValue
				});
	
				if (this.props.disabled || !this.props.searchable) {
					var _props$inputProps = this.props.inputProps;
					var inputClassName = _props$inputProps.inputClassName;
	
					var divProps = _objectWithoutProperties(_props$inputProps, ['inputClassName']);
	
					return _react2['default'].createElement('div', _extends({}, divProps, {
						role: 'combobox',
						'aria-expanded': isOpen,
						'aria-owns': isOpen ? this._instancePrefix + '-list' : this._instancePrefix + '-value',
						'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
						className: className,
						tabIndex: this.props.tabIndex || 0,
						onBlur: this.handleInputBlur,
						onFocus: this.handleInputFocus,
						ref: function ref(_ref2) {
							return _this5.input = _ref2;
						},
						'aria-readonly': '' + !!this.props.disabled,
						style: { border: 0, width: 1, display: 'inline-block' } }));
				}
	
				if (this.props.autosize) {
					return _react2['default'].createElement(_reactInputAutosize2['default'], _extends({}, inputProps, { minWidth: '5px' }));
				}
				return _react2['default'].createElement('div', { className: className }, _react2['default'].createElement('input', inputProps));
			}
		},
	
		renderClear: function renderClear() {
			if (!this.props.clearable || !this.props.value || this.props.value === 0 || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
			return _react2['default'].createElement('span', { className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
				'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
				onMouseDown: this.clearValue,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove,
				onTouchEnd: this.handleTouchEndClearValue
			}, _react2['default'].createElement('span', { className: 'Select-clear', dangerouslySetInnerHTML: { __html: '&times;' } }));
		},
	
		renderArrow: function renderArrow() {
			var onMouseDown = this.handleMouseDownOnArrow;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown });
	
			return _react2['default'].createElement('span', {
				className: 'Select-arrow-zone',
				onMouseDown: onMouseDown
			}, arrow);
		},
	
		filterOptions: function filterOptions(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _utilsDefaultFilterOptions2['default'];
	
				return filterOptions(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		},
	
		onOptionRef: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		},
	
		renderMenu: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey,
					onOptionRef: this.onOptionRef
				});
			} else if (this.props.noResultsText) {
				return _react2['default'].createElement('div', { className: 'Select-noresults' }, this.props.noResultsText);
			} else {
				return null;
			}
		},
	
		renderHiddenField: function renderHiddenField(valueArray) {
			var _this6 = this;
	
			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this6.props.valueKey]);
				}).join(this.props.delimiter);
				return _react2['default'].createElement('input', {
					type: 'hidden',
					ref: function ref(_ref3) {
						return _this6.value = _ref3;
					},
					name: this.props.name,
					value: value,
					disabled: this.props.disabled });
			}
			return valueArray.map(function (item, index) {
				return _react2['default'].createElement('input', { key: 'hidden.' + index,
					type: 'hidden',
					ref: 'value' + index,
					name: _this6.props.name,
					value: stringifyValue(item[_this6.props.valueKey]),
					disabled: _this6.props.disabled });
			});
		},
	
		getFocusableOptionIndex: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;
	
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = options.indexOf(focusedOption);
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}
	
			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		},
	
		renderOuter: function renderOuter(options, valueArray, focusedOption) {
			var _this7 = this;
	
			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}
	
			return _react2['default'].createElement('div', { ref: function ref(_ref4) {
					return _this7.menuContainer = _ref4;
				}, className: 'Select-menu-outer', style: this.props.menuContainerStyle }, _react2['default'].createElement('div', { ref: function ref(_ref5) {
					return _this7.menu = _ref5;
				}, role: 'listbox', className: 'Select-menu', id: this._instancePrefix + '-list',
				style: this.props.menuStyle,
				onScroll: this.handleMenuScroll,
				onMouseDown: this.handleMouseDownOnMenu }, menu));
		},
	
		render: function render() {
			var _this8 = this;
	
			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);
	
			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = (0, _classnames2['default'])('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'Select--single': !this.props.multi,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'has-value': valueArray.length
			});
	
			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = _react2['default'].createElement('span', { id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' }, this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey]));
			}
	
			return _react2['default'].createElement('div', { ref: function ref(_ref6) {
					return _this8.wrapper = _ref6;
				},
				className: className,
				style: this.props.wrapperStyle }, this.renderHiddenField(valueArray), _react2['default'].createElement('div', { ref: function ref(_ref7) {
					return _this8.control = _ref7;
				},
				className: 'Select-control',
				style: this.props.style,
				onKeyDown: this.handleKeyDown,
				onMouseDown: this.handleMouseDown,
				onTouchEnd: this.handleTouchEnd,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove
			}, _react2['default'].createElement('span', { className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' }, this.renderValue(valueArray, isOpen), this.renderInput(valueArray, focusedOptionIndex)), removeMessage, this.renderLoading(), this.renderClear(), this.renderArrow()), isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null);
		}
	
	});
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};
	
	var React = __webpack_require__(1);
	
	var sizerStyle = { position: 'absolute', top: 0, left: 0, visibility: 'hidden', height: 0, overflow: 'scroll', whiteSpace: 'pre' };
	
	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',
	
		propTypes: {
			className: React.PropTypes.string, // className for the outer element
			defaultValue: React.PropTypes.any, // default field value
			inputClassName: React.PropTypes.string, // className for the input element
			inputStyle: React.PropTypes.object, // css styles for the input element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			placeholder: React.PropTypes.string, // placeholder text
			placeholderIsMinWidth: React.PropTypes.bool, // don't collapse size to less than the placeholder
			style: React.PropTypes.object, // css styles for the outer element
			value: React.PropTypes.any },
		// field value
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.updateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(this.refs.input);
			if (!inputStyle) {
				return;
			}
			var widthNode = this.refs.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.fontWeight = inputStyle.fontWeight;
			widthNode.style.fontStyle = inputStyle.fontStyle;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			if (this.props.placeholder) {
				var placeholderNode = this.refs.placeholderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.fontWeight = inputStyle.fontWeight;
				placeholderNode.style.fontStyle = inputStyle.fontStyle;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			}
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = undefined;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.refs.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			this.refs.input.focus();
		},
		blur: function blur() {
			this.refs.input.blur();
		},
		select: function select() {
			this.refs.input.select();
		},
		render: function render() {
			var sizerValue = this.props.defaultValue || this.props.value || '';
			var wrapperStyle = this.props.style || {};
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth + 'px';
			inputStyle.boxSizing = 'content-box';
			var inputProps = _extends({}, this.props);
			inputProps.className = this.props.inputClassName;
			inputProps.style = inputStyle;
			// ensure props meant for `AutosizeInput` don't end up on the `input`
			delete inputProps.inputClassName;
			delete inputProps.inputStyle;
			delete inputProps.minWidth;
			delete inputProps.placeholderIsMinWidth;
			return React.createElement('div', { className: this.props.className, style: wrapperStyle }, React.createElement('input', _extends({}, inputProps, { ref: 'input' })), React.createElement('div', { ref: 'sizer', style: sizerStyle }, sizerValue), this.props.placeholder ? React.createElement('div', { ref: 'placeholderSizer', style: sizerStyle }, this.props.placeholder) : null);
		}
	});
	
	module.exports = AutosizeInput;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames() {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(52)) === 'object' && __webpack_require__(52)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 52 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = arrowRenderer;
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function arrowRenderer(_ref) {
		var onMouseDown = _ref.onMouseDown;
	
		return _react2["default"].createElement("span", {
			className: "Select-arrow",
			onMouseDown: onMouseDown
		});
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _stripDiacritics = __webpack_require__(55);
	
	var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);
	
	function filterOptions(options, filterValue, excludeOptions, props) {
		var _this = this;
	
		if (props.ignoreAccents) {
			filterValue = (0, _stripDiacritics2['default'])(filterValue);
		}
	
		if (props.ignoreCase) {
			filterValue = filterValue.toLowerCase();
		}
	
		if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
			return i[props.valueKey];
		});
	
		return options.filter(function (option) {
			if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
			if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
			if (!filterValue) return true;
			var valueTest = String(option[props.valueKey]);
			var labelTest = String(option[props.labelKey]);
			if (props.ignoreAccents) {
				if (props.matchProp !== 'label') valueTest = (0, _stripDiacritics2['default'])(valueTest);
				if (props.matchProp !== 'value') labelTest = (0, _stripDiacritics2['default'])(labelTest);
			}
			if (props.ignoreCase) {
				if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
				if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
			}
			return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
		});
	}
	
	module.exports = filterOptions;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];
	
	module.exports = function stripDiacritics(str) {
		for (var i = 0; i < map.length; i++) {
			str = str.replace(map[i].letters, map[i].base);
		}
		return str;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _classnames = __webpack_require__(51);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function menuRenderer(_ref) {
		var focusedOption = _ref.focusedOption;
		var instancePrefix = _ref.instancePrefix;
		var labelKey = _ref.labelKey;
		var onFocus = _ref.onFocus;
		var onSelect = _ref.onSelect;
		var optionClassName = _ref.optionClassName;
		var optionComponent = _ref.optionComponent;
		var optionRenderer = _ref.optionRenderer;
		var options = _ref.options;
		var valueArray = _ref.valueArray;
		var valueKey = _ref.valueKey;
		var onOptionRef = _ref.onOptionRef;
	
		var Option = optionComponent;
	
		return options.map(function (option, i) {
			var isSelected = valueArray && valueArray.indexOf(option) > -1;
			var isFocused = option === focusedOption;
			var optionClass = (0, _classnames2['default'])(optionClassName, {
				'Select-option': true,
				'is-selected': isSelected,
				'is-focused': isFocused,
				'is-disabled': option.disabled
			});
	
			return _react2['default'].createElement(Option, {
				className: optionClass,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				}
			}, optionRenderer(option, i));
		});
	}
	
	module.exports = menuRenderer;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};
	
	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();
	
	var _get = function get(_x, _x2, _x3) {
		var _again = true;_function: while (_again) {
			var object = _x,
			    property = _x2,
			    receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
				var parent = Object.getPrototypeOf(object);if (parent === null) {
					return undefined;
				} else {
					_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
				}
			} else if ('value' in desc) {
				return desc.value;
			} else {
				var getter = desc.get;if (getter === undefined) {
					return undefined;
				}return getter.call(receiver);
			}
		}
	};
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
		} else {
			obj[key] = value;
		}return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}
	
	function _inherits(subClass, superClass) {
		if (typeof superClass !== 'function' && superClass !== null) {
			throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(49);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _utilsStripDiacritics = __webpack_require__(55);
	
	var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);
	
	var propTypes = {
		autoload: _react2['default'].PropTypes.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
		cache: _react2['default'].PropTypes.any, // object to use to cache results; set to null/false to disable caching
		children: _react2['default'].PropTypes.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
		ignoreAccents: _react2['default'].PropTypes.bool, // strip diacritics when filtering; defaults to true
		ignoreCase: _react2['default'].PropTypes.bool, // perform case-insensitive filtering; defaults to true
		loadingPlaceholder: _react.PropTypes.string.isRequired, // replaces the placeholder while options are loading
		loadOptions: _react2['default'].PropTypes.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
		options: _react.PropTypes.array.isRequired, // array of options
		placeholder: _react2['default'].PropTypes.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		searchPromptText: _react2['default'].PropTypes.oneOfType([// label to prompt for search input
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node])
	};
	
	var defaultProps = {
		autoload: true,
		cache: {},
		children: defaultChildren,
		ignoreAccents: true,
		ignoreCase: true,
		loadingPlaceholder: 'Loading...',
		options: [],
		searchPromptText: 'Type to search'
	};
	
	var Async = function (_Component) {
		_inherits(Async, _Component);
	
		function Async(props, context) {
			_classCallCheck(this, Async);
	
			_get(Object.getPrototypeOf(Async.prototype), 'constructor', this).call(this, props, context);
	
			this.state = {
				isLoading: false,
				options: props.options
			};
	
			this._onInputChange = this._onInputChange.bind(this);
		}
	
		_createClass(Async, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var autoload = this.props.autoload;
	
				if (autoload) {
					this.loadOptions('');
				}
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				var _this = this;
	
				var propertiesToSync = ['options'];
				propertiesToSync.forEach(function (prop) {
					if (_this.props[prop] !== nextProps[prop]) {
						_this.setState(_defineProperty({}, prop, nextProps[prop]));
					}
				});
			}
		}, {
			key: 'loadOptions',
			value: function loadOptions(inputValue) {
				var _this2 = this;
	
				var _props = this.props;
				var cache = _props.cache;
				var loadOptions = _props.loadOptions;
	
				if (cache && cache.hasOwnProperty(inputValue)) {
					this.setState({
						options: cache[inputValue]
					});
	
					return;
				}
	
				var callback = function callback(error, data) {
					if (callback === _this2._callback) {
						_this2._callback = null;
	
						var options = data && data.options || [];
	
						if (cache) {
							cache[inputValue] = options;
						}
	
						_this2.setState({
							isLoading: false,
							options: options
						});
					}
				};
	
				// Ignore all but the most recent request
				this._callback = callback;
	
				var promise = loadOptions(inputValue, callback);
				if (promise) {
					promise.then(function (data) {
						return callback(null, data);
					}, function (error) {
						return callback(error);
					});
				}
	
				if (this._callback && !this.state.isLoading) {
					this.setState({
						isLoading: true
					});
				}
	
				return inputValue;
			}
		}, {
			key: '_onInputChange',
			value: function _onInputChange(inputValue) {
				var _props2 = this.props;
				var ignoreAccents = _props2.ignoreAccents;
				var ignoreCase = _props2.ignoreCase;
	
				if (ignoreAccents) {
					inputValue = (0, _utilsStripDiacritics2['default'])(inputValue);
				}
	
				if (ignoreCase) {
					inputValue = inputValue.toLowerCase();
				}
	
				return this.loadOptions(inputValue);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props3 = this.props;
				var children = _props3.children;
				var loadingPlaceholder = _props3.loadingPlaceholder;
				var placeholder = _props3.placeholder;
				var searchPromptText = _props3.searchPromptText;
				var _state = this.state;
				var isLoading = _state.isLoading;
				var options = _state.options;
	
				var props = {
					noResultsText: isLoading ? loadingPlaceholder : searchPromptText,
					placeholder: isLoading ? loadingPlaceholder : placeholder,
					options: isLoading ? [] : options
				};
	
				return children(_extends({}, this.props, props, {
					isLoading: isLoading,
					onInputChange: this._onInputChange
				}));
			}
		}]);
	
		return Async;
	}(_react.Component);
	
	exports['default'] = Async;
	
	Async.propTypes = propTypes;
	Async.defaultProps = defaultProps;
	
	function defaultChildren(props) {
		return _react2['default'].createElement(_Select2['default'], props);
	};
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(49);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var AsyncCreatable = _react2['default'].createClass({
		displayName: 'AsyncCreatableSelect',
	
		render: function render() {
			var _this = this;
	
			return _react2['default'].createElement(_Select2['default'].Async, this.props, function (asyncProps) {
				return _react2['default'].createElement(_Select2['default'].Creatable, _this.props, function (creatableProps) {
					return _react2['default'].createElement(_Select2['default'], _extends({}, asyncProps, creatableProps, {
						onInputChange: function onInputChange(input) {
							creatableProps.onInputChange(input);
							return asyncProps.onInputChange(input);
						}
					}));
				});
			});
		}
	});
	
	module.exports = AsyncCreatable;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
		var target = {};for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
		}return target;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(49);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _utilsDefaultFilterOptions = __webpack_require__(54);
	
	var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);
	
	var _utilsDefaultMenuRenderer = __webpack_require__(56);
	
	var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);
	
	var Creatable = _react2['default'].createClass({
		displayName: 'CreatableSelect',
	
		propTypes: {
			// Child function responsible for creating the inner Select component
			// This component can be used to compose HOCs (eg Creatable and Async)
			// (props: Object): PropTypes.element
			children: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.filterOptions
			filterOptions: _react2['default'].PropTypes.any,
	
			// Searches for any matching option within the set of options.
			// This function prevents duplicate options from being created.
			// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
			isOptionUnique: _react2['default'].PropTypes.func,
	
			// Determines if the current input text represents a valid option.
			// ({ label: string }): boolean
			isValidNewOption: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.menuRenderer
			menuRenderer: _react2['default'].PropTypes.any,
	
			// Factory to create new option.
			// ({ label: string, labelKey: string, valueKey: string }): Object
			newOptionCreator: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.options
			options: _react2['default'].PropTypes.array,
	
			// Creates prompt/placeholder option text.
			// (filterText: string): string
			promptTextCreator: _react2['default'].PropTypes.func,
	
			// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
			shouldKeyDownEventCreateNewOption: _react2['default'].PropTypes.func
		},
	
		// Default prop methods
		statics: {
			isOptionUnique: isOptionUnique,
			isValidNewOption: isValidNewOption,
			newOptionCreator: newOptionCreator,
			promptTextCreator: promptTextCreator,
			shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
		},
	
		getDefaultProps: function getDefaultProps() {
			return {
				filterOptions: _utilsDefaultFilterOptions2['default'],
				isOptionUnique: isOptionUnique,
				isValidNewOption: isValidNewOption,
				menuRenderer: _utilsDefaultMenuRenderer2['default'],
				newOptionCreator: newOptionCreator,
				promptTextCreator: promptTextCreator,
				shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
			};
		},
	
		createNewOption: function createNewOption() {
			var _props = this.props;
			var isValidNewOption = _props.isValidNewOption;
			var newOptionCreator = _props.newOptionCreator;
			var _props$options = _props.options;
			var options = _props$options === undefined ? [] : _props$options;
			var shouldKeyDownEventCreateNewOption = _props.shouldKeyDownEventCreateNewOption;
	
			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option });
	
				// Don't add the same option twice.
				if (_isOptionUnique) {
					options.unshift(option);
	
					this.select.selectValue(option);
				}
			}
		},
	
		filterOptions: function filterOptions() {
			var _props2 = this.props;
			var filterOptions = _props2.filterOptions;
			var isValidNewOption = _props2.isValidNewOption;
			var options = _props2.options;
			var promptTextCreator = _props2.promptTextCreator;
	
			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.
			var excludeOptions = arguments[2] || [];
	
			var filteredOptions = filterOptions.apply(undefined, arguments) || [];
	
			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;
	
				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});
	
				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});
	
				if (_isOptionUnique2) {
					var _prompt = promptTextCreator(this.inputValue);
	
					this._createPlaceholderOption = _newOptionCreator({
						label: _prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});
	
					filteredOptions.unshift(this._createPlaceholderOption);
				}
			}
	
			return filteredOptions;
		},
	
		isOptionUnique: function isOptionUnique(_ref2) {
			var option = _ref2.option;
			var options = _ref2.options;
			var isOptionUnique = this.props.isOptionUnique;
	
			options = options || this.select.filterOptions();
	
			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		},
	
		menuRenderer: function menuRenderer(params) {
			var menuRenderer = this.props.menuRenderer;
	
			return menuRenderer(_extends({}, params, {
				onSelect: this.onOptionSelect
			}));
		},
	
		onInputChange: function onInputChange(input) {
			// This value may be needed in between Select mounts (when this.select is null)
			this.inputValue = input;
		},
	
		onInputKeyDown: function onInputKeyDown(event) {
			var shouldKeyDownEventCreateNewOption = this.props.shouldKeyDownEventCreateNewOption;
	
			var focusedOption = this.select.getFocusedOption();
	
			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
				this.createNewOption();
	
				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			}
		},
	
		onOptionSelect: function onOptionSelect(option, event) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		},
	
		render: function render() {
			var _this = this;
	
			var _props3 = this.props;
			var _props3$children = _props3.children;
			var children = _props3$children === undefined ? defaultChildren : _props3$children;
			var newOptionCreator = _props3.newOptionCreator;
			var shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption;
	
			var restProps = _objectWithoutProperties(_props3, ['children', 'newOptionCreator', 'shouldKeyDownEventCreateNewOption']);
	
			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref) {
					_this.select = _ref;
	
					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref) {
						_this.labelKey = _ref.props.labelKey;
						_this.valueKey = _ref.props.valueKey;
					}
				}
			});
	
			return children(props);
		}
	});
	
	function defaultChildren(props) {
		return _react2['default'].createElement(_Select2['default'], props);
	};
	
	function isOptionUnique(_ref3) {
		var option = _ref3.option;
		var options = _ref3.options;
		var labelKey = _ref3.labelKey;
		var valueKey = _ref3.valueKey;
	
		return options.filter(function (existingOption) {
			return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
		}).length === 0;
	};
	
	function isValidNewOption(_ref4) {
		var label = _ref4.label;
	
		return !!label;
	};
	
	function newOptionCreator(_ref5) {
		var label = _ref5.label;
		var labelKey = _ref5.labelKey;
		var valueKey = _ref5.valueKey;
	
		var option = {};
		option[valueKey] = label;
		option[labelKey] = label;
		option.className = 'Select-create-option-placeholder';
		return option;
	};
	
	function promptTextCreator(label) {
		return 'Create option "' + label + '"';
	}
	
	function shouldKeyDownEventCreateNewOption(_ref6) {
		var keyCode = _ref6.keyCode;
	
		switch (keyCode) {
			case 9: // TAB
			case 13: // ENTER
			case 188:
				// COMMA
				return true;
		}
	
		return false;
	};
	
	module.exports = Creatable;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(51);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Option = _react2['default'].createClass({
		displayName: 'Option',
	
		propTypes: {
			children: _react2['default'].PropTypes.node,
			className: _react2['default'].PropTypes.string, // className (based on mouse position)
			instancePrefix: _react2['default'].PropTypes.string.isRequired, // unique prefix for the ids (used for aria)
			isDisabled: _react2['default'].PropTypes.bool, // the option is disabled
			isFocused: _react2['default'].PropTypes.bool, // the option is focused
			isSelected: _react2['default'].PropTypes.bool, // the option is selected
			onFocus: _react2['default'].PropTypes.func, // method to handle mouseEnter on option element
			onSelect: _react2['default'].PropTypes.func, // method to handle click on option element
			onUnfocus: _react2['default'].PropTypes.func, // method to handle mouseLeave on option element
			option: _react2['default'].PropTypes.object.isRequired, // object that is base for that option
			optionIndex: _react2['default'].PropTypes.number },
		// index of the option, used to generate unique ids for aria
		blockEvent: function blockEvent(event) {
			event.preventDefault();
			event.stopPropagation();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}
			if (event.target.target) {
				window.open(event.target.href, event.target.target);
			} else {
				window.location.href = event.target.href;
			}
		},
	
		handleMouseDown: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		},
	
		handleMouseEnter: function handleMouseEnter(event) {
			this.onFocus(event);
		},
	
		handleMouseMove: function handleMouseMove(event) {
			this.onFocus(event);
		},
	
		handleTouchEnd: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			this.handleMouseDown(event);
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		onFocus: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		},
		render: function render() {
			var _props = this.props;
			var option = _props.option;
			var instancePrefix = _props.instancePrefix;
			var optionIndex = _props.optionIndex;
	
			var className = (0, _classnames2['default'])(this.props.className, option.className);
	
			return option.disabled ? _react2['default'].createElement('div', { className: className,
				onMouseDown: this.blockEvent,
				onClick: this.blockEvent }, this.props.children) : _react2['default'].createElement('div', { className: className,
				style: option.style,
				role: 'option',
				onMouseDown: this.handleMouseDown,
				onMouseEnter: this.handleMouseEnter,
				onMouseMove: this.handleMouseMove,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove,
				onTouchEnd: this.handleTouchEnd,
				id: instancePrefix + '-option-' + optionIndex,
				title: option.title }, this.props.children);
		}
	});
	
	module.exports = Option;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(51);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Value = _react2['default'].createClass({
	
		displayName: 'Value',
	
		propTypes: {
			children: _react2['default'].PropTypes.node,
			disabled: _react2['default'].PropTypes.bool, // disabled prop passed to ReactSelect
			id: _react2['default'].PropTypes.string, // Unique id for the value - used for aria
			onClick: _react2['default'].PropTypes.func, // method to handle click on value label
			onRemove: _react2['default'].PropTypes.func, // method to handle removal of the value
			value: _react2['default'].PropTypes.object.isRequired },
	
		// the option object for this value
		handleMouseDown: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		},
	
		onRemove: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		},
	
		handleTouchEndRemove: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Fire the mouse events
			this.onRemove(event);
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		renderRemoveIcon: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return _react2['default'].createElement('span', { className: 'Select-value-icon',
				'aria-hidden': 'true',
				onMouseDown: this.onRemove,
				onTouchEnd: this.handleTouchEndRemove,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove }, '×');
		},
	
		renderLabel: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? _react2['default'].createElement('a', { className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown }, this.props.children) : _react2['default'].createElement('span', { className: className, role: 'option', 'aria-selected': 'true', id: this.props.id }, this.props.children);
		},
	
		render: function render() {
			return _react2['default'].createElement('div', { className: (0, _classnames2['default'])('Select-value', this.props.value.className),
				style: this.props.value.style,
				title: this.props.value.title
			}, this.renderRemoveIcon(), this.renderLabel());
		}
	
	});
	
	module.exports = Value;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactColorpicker = __webpack_require__(63);
	
	var _reactColorpicker2 = _interopRequireDefault(_reactColorpicker);
	
	var _classname = __webpack_require__(5);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	__webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Soup Tang on 2016/6/6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ColorSelector = function (_React$Component) {
	    _inherits(ColorSelector, _React$Component);
	
	    function ColorSelector(props) {
	        _classCallCheck(this, ColorSelector);
	
	        var _this = _possibleConstructorReturn(this, (ColorSelector.__proto__ || Object.getPrototypeOf(ColorSelector)).call(this, props));
	
	        _this.state = {
	            show: false,
	            color: _this.props.color
	        };
	        _this.prevColor = _this.props.color;
	        _this.currentColor = _this.props.color;
	        return _this;
	    }
	
	    _createClass(ColorSelector, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.state !== nextState) {
	                return true;
	            }
	            this.currentColor = nextProps.color;
	            return true;
	        }
	    }, {
	        key: 'setInlineStyle',
	        value: function setInlineStyle() {
	            return {
	                backgroundColor: this.currentColor,
	                width: '100%',
	                height: '100%',
	                border: '1px solid #555'
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.show === false) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: (0, _classname2.default)("color-selector", this.props.className) },
	                    _react2.default.createElement('div', { className: 'current-color',
	                        style: this.setInlineStyle(),
	                        onClick: this.clickHandle.bind(this) })
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: (0, _classname2.default)("color-selector", "active", this.props.className) },
	                    _react2.default.createElement(_reactColorpicker2.default, { color: this.currentColor, onChange: this.changeColor.bind(this) }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btn-list' },
	                        _react2.default.createElement('input', { type: 'button', value: '\u786E\u5B9A', onClick: this.selectColor.bind(this) }),
	                        _react2.default.createElement('input', { type: 'button', value: '\u53D6\u6D88', onClick: this.cancelSelect.bind(this) })
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'clickHandle',
	        value: function clickHandle() {
	            this.setState({
	                show: true
	            });
	        }
	    }, {
	        key: 'selectColor',
	        value: function selectColor() {
	            this.prevColor = this.currentColor;
	            this.setState({
	                show: false,
	                color: this.currentColor
	            });
	            if (this.props.onChange) {
	                this.props.onChange(this.state.color);
	            }
	        }
	    }, {
	        key: 'cancelSelect',
	        value: function cancelSelect() {
	            this.setState({
	                show: false,
	                color: this.prevColor
	            });
	        }
	    }, {
	        key: 'changeColor',
	        value: function changeColor(color) {
	            this.currentColor = color.toHex();
	            this.setState({
	                color: color.toHex()
	            });
	        }
	    }]);
	
	    return ColorSelector;
	}(_react2.default.Component);
	
	_reactColorpicker2.default.propTypes = {
	    onChange: _react2.default.PropTypes.func,
	    color: _react2.default.PropTypes.string,
	    className: _react2.default.PropTypes.string
	};
	
	module.exports = ColorSelector;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Colr = __webpack_require__(64);
	var classnames = __webpack_require__(66);
	
	var Details = __webpack_require__(67);
	var Map = __webpack_require__(70);
	var Sample = __webpack_require__(76);
	var Slider = __webpack_require__(77);
	var OnChangeMixin = __webpack_require__(69);
	__webpack_require__(78);
	
	var ColorPicker = React.createClass({
	    displayName: 'ColorPicker',
	
	
	    mixins: [OnChangeMixin],
	
	    propTypes: {
	        color: React.PropTypes.string
	    },
	
	    // default color
	    getDefaultProps: function getDefaultProps() {
	        return {
	            color: '#000000'
	        };
	    },
	
	    // compare props against state using hex strings
	    // only use the new props if the color is different
	    // this prevents data loss when converting between RGB and HSV
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var nextColor = nextProps.color.toLowerCase();
	        var currentColor = Colr.fromHsvObject(this.state.hsv).toHex();
	
	        if (nextColor !== currentColor) {
	            this.setState(this.getStateFrom(nextProps.color));
	        }
	    },
	
	    // create the initial state using props.color
	    getInitialState: function getInitialState() {
	        return this.getStateFrom(this.props.color);
	    },
	
	    // generate state object from a hex string
	    getStateFrom: function getStateFrom(color) {
	        color = Colr.fromHex(color);
	        return {
	            color: color,
	            origin: color.clone(),
	            hsv: color.toRawHsvObject()
	        };
	    },
	
	    render: function render() {
	        var hue = this.getBackgroundHue();
	        var luminosity = this.state.color.toGrayscale();
	
	        var classes = classnames({
	            dark: luminosity <= 128,
	            light: luminosity > 128
	        });
	
	        return React.createElement(
	            'div',
	            { className: 'colorpicker' },
	            React.createElement(
	                'div',
	                { className: 'light-slider' },
	                React.createElement(Slider, {
	                    vertical: true,
	                    value: this.state.hsv.v,
	                    max: 100,
	                    onChange: this.setValue })
	            ),
	            React.createElement(
	                'div',
	                { className: 'sat-slider' },
	                React.createElement(Slider, {
	                    vertical: false,
	                    value: this.state.hsv.s,
	                    max: 100,
	                    onChange: this.setSaturation })
	            ),
	            React.createElement(
	                'div',
	                { className: 'hue-slider' },
	                React.createElement(Slider, {
	                    vertical: true,
	                    value: this.state.hsv.h,
	                    max: 360,
	                    onChange: this.setHue })
	            ),
	            React.createElement(Map, {
	                x: this.state.hsv.s,
	                y: this.state.hsv.v,
	                max: 100,
	                backgroundColor: hue,
	                className: classes,
	                onChange: this.setSaturationAndValue }),
	            React.createElement(Details, {
	                color: this.state.color,
	                hsv: this.state.hsv,
	                onChange: this.loadColor }),
	            React.createElement(Sample, {
	                color: this.state.color.toHex(),
	                origin: this.state.origin.toHex(),
	                onChange: this.loadColor }),
	            this.props.children
	        );
	    },
	
	    // replace current color with another one
	    loadColor: function loadColor(color) {
	        this.setState(this.getStateFrom(color));
	        this.props.onChange(Colr.fromHex(color));
	    },
	
	    // update the current color using the raw hsv values
	    update: function update() {
	        var color = Colr.fromHsvObject(this.state.hsv);
	        this.setState({ color: color });
	        this.props.onChange(color);
	    },
	
	    // set the hue
	    setHue: function setHue(hue) {
	        this.state.hsv.h = hue;
	        this.update();
	    },
	
	    // set the saturation
	    setSaturation: function setSaturation(saturation) {
	        this.state.hsv.s = saturation;
	        this.update();
	    },
	
	    // set the value
	    setValue: function setValue(value) {
	        this.state.hsv.v = value;
	        this.update();
	    },
	
	    // set the saturation and the value
	    setSaturationAndValue: function setSaturationAndValue(saturation, value) {
	        this.state.hsv.s = saturation;
	        this.state.hsv.v = value;
	        this.update();
	    },
	
	    getBackgroundHue: function getBackgroundHue() {
	        return Colr.fromHsv(this.state.hsv.h, 100, 100).toHex();
	    }
	
	});
	
	module.exports = ColorPicker;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 * DEPENDENCIES
	 */
	
	var convert = __webpack_require__(65);
	
	/*
	 * CONSTRUCTOR
	 */
	
	function Colr() {
	  if (this instanceof Colr === false) {
	    return new Colr();
	  }
	  this._ = {};
	}
	
	/*
	 * STATIC METHODS
	 */
	
	Colr.fromHex = function (hex) {
	  return new Colr().fromHex(hex);
	};
	
	Colr.fromGrayscale = function (value) {
	  return new Colr().fromGrayscale(value);
	};
	
	Colr.fromRgb = function (r, g, b) {
	  return new Colr().fromRgb(r, g, b);
	};
	
	Colr.fromRgbArray = function (arr) {
	  return new Colr().fromRgb(arr[0], arr[1], arr[2]);
	};
	
	Colr.fromRgbObject = function (obj) {
	  return new Colr().fromRgb(obj.r, obj.g, obj.b);
	};
	Colr.fromHsl = function (h, s, l) {
	  return new Colr().fromHsl(h, s, l);
	};
	
	Colr.fromHslArray = function (arr) {
	  return new Colr().fromHsl(arr[0], arr[1], arr[2]);
	};
	
	Colr.fromHslObject = function (obj) {
	  return new Colr().fromHsl(obj.h, obj.s, obj.l);
	};
	
	Colr.fromHsv = function (h, s, v) {
	  return new Colr().fromHsv(h, s, v);
	};
	
	Colr.fromHsvArray = function (arr) {
	  return new Colr().fromHsv(arr[0], arr[1], arr[2]);
	};
	
	Colr.fromHsvObject = function (obj) {
	  return new Colr().fromHsv(obj.h, obj.s, obj.v);
	};
	
	/*
	 * IMPORTERS
	 */
	
	// HEX
	
	Colr.prototype.fromHex = function (input) {
	  var value = convert.hex.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};
	
	// GRAYSCALE
	
	Colr.prototype.fromGrayscale = function (input) {
	  input = clampByte(input);
	  var value = convert.grayscale.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};
	
	// RGB
	
	Colr.prototype.fromRgb = function (r, g, b) {
	  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  var value = clampRgb(r, g, b);
	  this._ = { rgb: value };
	  return this;
	};
	
	Colr.prototype.fromRgbArray = function (arr) {
	  return this.fromRgb(arr[0], arr[1], arr[2]);
	};
	
	Colr.prototype.fromRgbObject = function (obj) {
	  return this.fromRgb(obj.r, obj.g, obj.b);
	};
	
	// HSL
	
	Colr.prototype.fromHsl = function (h, s, l) {
	  if (typeof h !== 'number' || typeof s !== 'number' || typeof l !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsl: clampHsx(h, s, l) };
	  return this;
	};
	
	Colr.prototype.fromHslArray = function (arr) {
	  return this.fromHsl(arr[0], arr[1], arr[2]);
	};
	
	Colr.prototype.fromHslObject = function (obj) {
	  return this.fromHsl(obj.h, obj.s, obj.l);
	};
	
	// HSV
	
	Colr.prototype.fromHsv = function (h, s, v) {
	  if (typeof h !== 'number' || typeof s !== 'number' || typeof v !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsv: clampHsx(h, s, v) };
	  return this;
	};
	
	Colr.prototype.fromHsvArray = function (arr) {
	  return this.fromHsv(arr[0], arr[1], arr[2]);
	};
	
	Colr.prototype.fromHsvObject = function (obj) {
	  return this.fromHsv(obj.h, obj.s, obj.v);
	};
	
	/*
	 * EXPORTERS
	 */
	
	// HEX
	
	Colr.prototype.toHex = function () {
	  var cached = this._.hex;
	  if (cached !== undefined) {
	    return cached;
	  }
	
	  var input;
	  var cachedFrom = this._.rgb;
	
	  if (cachedFrom !== undefined) {
	    input = cachedFrom;
	  } else {
	    input = this.toRawRgbArray();
	  }
	
	  input[0] = Math.round(input[0]);
	  input[1] = Math.round(input[1]);
	  input[2] = Math.round(input[2]);
	
	  var value = convert.rgb.hex(input);
	  this._.hex = value;
	
	  return value;
	};
	
	// GRAYSCALE
	
	Colr.prototype.toGrayscale = function () {
	  var cached = this._.grayscale;
	  if (cached !== undefined) {
	    return cached;
	  }
	
	  var input;
	  var cachedFrom = this._.rgb;
	
	  if (cachedFrom !== undefined) {
	    input = cachedFrom;
	  } else {
	    input = this.toRawRgbArray();
	  }
	
	  var value = convert.rgb.grayscale(input);
	  this._.grayscale = value;
	  return value;
	};
	
	// RGB
	
	Colr.prototype.toRawRgbArray = function () {
	  var cached = this._.rgb;
	  if (cached !== undefined) {
	    return cached;
	  }
	
	  var value;
	
	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.rgb(value);
	  } else if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.rgb(value);
	  } else {
	    throw new Error('No data to convert');
	  }
	
	  this._.rgb = value;
	  return value;
	};
	
	Colr.prototype.toRawRgbObject = function () {
	  var arr = this.toRawRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};
	
	Colr.prototype.toRgbArray = function () {
	  var arr = this.toRawRgbArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};
	
	Colr.prototype.toRgbObject = function () {
	  var arr = this.toRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};
	
	// HSL
	
	Colr.prototype.toRawHslArray = function () {
	  var cached = this._.hsl;
	  if (cached !== undefined) {
	    return cached;
	  }
	
	  var value;
	
	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.hsl(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsl(value);
	  } else {
	    throw new Error('No data to convert');
	  }
	
	  this._.hsl = value;
	  return value;
	};
	
	Colr.prototype.toRawHslObject = function () {
	  var arr = this.toRawHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};
	
	Colr.prototype.toHslArray = function () {
	  var arr = this.toRawHslArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};
	
	Colr.prototype.toHslObject = function () {
	  var arr = this.toHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};
	
	// HSV
	
	Colr.prototype.toRawHsvArray = function () {
	  var cached = this._.hsv;
	  if (cached !== undefined) {
	    return cached;
	  }
	
	  var value;
	
	  if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.hsv(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsv(value);
	  } else {
	    throw new Error('No data to convert');
	  }
	
	  this._.hsv = value;
	  return value;
	};
	
	Colr.prototype.toRawHsvObject = function () {
	  var arr = this.toRawHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};
	
	Colr.prototype.toHsvArray = function () {
	  var arr = this.toRawHsvArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};
	
	Colr.prototype.toHsvObject = function () {
	  var arr = this.toHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};
	
	/*
	 * MODIFIERS
	 */
	
	Colr.prototype.lighten = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] + amount);
	  this._ = { hsl: hsl };
	  return this;
	};
	
	Colr.prototype.darken = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] - amount);
	  this._ = { hsl: hsl };
	  return this;
	};
	
	/*
	 * MISC
	 */
	
	Colr.prototype.clone = function () {
	  var colr = new Colr();
	  colr._.hex = this._.hex;
	  colr._.grayscale = this._.grayscale;
	
	  if (this._.rgb !== undefined) {
	    colr._.rgb = this._.rgb.slice(0);
	  }
	  if (this._.hsv !== undefined) {
	    colr._.hsv = this._.hsv.slice(0);
	  }
	  if (this._.hsl !== undefined) {
	    colr._.hsl = this._.hsl.slice(0);
	  }
	
	  return colr;
	};
	
	/*
	 * UTILS
	 */
	
	function clampPercentage(val) {
	  return Math.max(Math.min(val, 100), 0);
	}
	
	function clampByte(byte) {
	  return Math.max(Math.min(byte, 255), 0);
	}
	
	function clampRgb(r, g, b) {
	  return [Math.max(Math.min(r, 255), 0), Math.max(Math.min(g, 255), 0), Math.max(Math.min(b, 255), 0)];
	}
	
	function clampHsx(h, s, x) {
	  return [Math.max(Math.min(h, 360), 0), Math.max(Math.min(s, 100), 0), Math.max(Math.min(x, 100), 0)];
	}
	
	module.exports = Colr;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  grayscale: {
	    rgb: grayscale2rgb
	  },
	  hex: {
	    rgb: hex2rgb
	  },
	  rgb: {
	    hsl: rgb2hsl,
	    hsv: rgb2hsv,
	    hex: rgb2hex,
	    grayscale: rgb2grayscale
	  },
	  hsl: {
	    rgb: hsl2rgb,
	    hsv: hsl2hsv
	  },
	  hsv: {
	    rgb: hsv2rgb,
	    hsl: hsv2hsl
	  }
	};
	
	// convert a charcode to a hex val
	function hexVal(c) {
	  return c < 58 ? c - 48 : // 0 - 9
	  c < 71 ? c - 55 : // A - F
	  c - 87 // a - f
	  ;
	}
	
	function hex2rgb(hex) {
	  var i = hex[0] === '#' ? 1 : 0;
	  var len = hex.length;
	
	  if (len - i < 3) {
	    throw new Error('hex input must be at least three chars long');
	  }
	
	  var r, g, b;
	
	  var h1 = hexVal(hex.charCodeAt(0 + i));
	  var h2 = hexVal(hex.charCodeAt(1 + i));
	  var h3 = hexVal(hex.charCodeAt(2 + i));
	
	  if (len - i >= 6) {
	    r = (h1 << 4) + h2;
	    g = (h3 << 4) + hexVal(hex.charCodeAt(3 + i));
	    b = (hexVal(hex.charCodeAt(4 + i)) << 4) + hexVal(hex.charCodeAt(5 + i));
	  } else {
	    r = (h1 << 4) + h1;
	    g = (h2 << 4) + h2;
	    b = (h3 << 4) + h3;
	  }
	
	  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
	    throw new Error('hex input is invalid');
	  }
	
	  return [r, g, b];
	}
	
	function rgb2hex(rgb) {
	  return '#' + ('000000' + ((rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16)).slice(-6);
	}
	
	function rgb2hsl(rgb) {
	  var r = rgb[0] / 255;
	  var g = rgb[1] / 255;
	  var b = rgb[2] / 255;
	
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, l;
	
	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0) {
	    h += 360;
	  }
	
	  l = (min + max) / 2;
	
	  if (max === min) {
	    s = 0;
	  } else if (l <= 0.5) {
	    s = delta / (max + min);
	  } else {
	    s = delta / (2 - max - min);
	  }
	
	  return [h, s * 100, l * 100];
	}
	
	function rgb2hsv(rgb) {
	  var r = rgb[0];
	  var g = rgb[1];
	  var b = rgb[2];
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, v;
	
	  if (max === 0) {
	    s = 0;
	  } else {
	    s = delta / max * 100;
	  }
	
	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0) {
	    h += 360;
	  }
	
	  v = max / 255 * 100;
	
	  return [h, s, v];
	}
	
	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360;
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	
	  var r, g, b;
	
	  if (s === 0) {
	    // monochrome
	    r = g = b = l;
	  } else {
	    var q = l < 0.5 ? l * (s + 1) : l + s - l * s;
	    var p = 2 * l - q;
	    var t;
	
	    // red
	    t = h + 1 / 3;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      r = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      r = q;
	    } else if (t < 2 / 3) {
	      r = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      r = p;
	    }
	
	    // green
	    t = h;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      g = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      g = q;
	    } else if (t < 2 / 3) {
	      g = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      g = p;
	    }
	
	    // blue
	    t = h - 1 / 3;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      b = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      b = q;
	    } else if (t < 2 / 3) {
	      b = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      b = p;
	    }
	  }
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function hsl2hsv(hsl) {
	  var h = hsl[0];
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	  var sv, v;
	
	  if (s === 0) {
	    return [h, 0, l * 100];
	  }
	
	  if (l === 0) {
	    return [h, 0, 0];
	  }
	
	  l *= 2;
	  s *= l <= 1 ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = 2 * s / (l + s);
	  return [h, sv * 100, v * 100];
	}
	
	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60;
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	
	  var hi = Math.floor(h) % 6;
	
	  var f = h - Math.floor(h);
	  var p = 255 * v * (1 - s);
	  var q = 255 * v * (1 - s * f);
	  var t = 255 * v * (1 - s * (1 - f));
	  v = 255 * v;
	
	  switch (hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}
	
	function hsv2hsl(hsv) {
	  var h = hsv[0];
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	  var sl, l;
	
	  if (s === 0) {
	    return [h, 0, v * 100];
	  }
	
	  if (v === 0) {
	    return [h, 0, 0];
	  }
	
	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= l <= 1 ? l : 2 - l;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}
	
	function grayscale2rgb(value) {
	  return [value, value, value];
	}
	
	function rgb2grayscale(rgb) {
	  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames() {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(52)) === 'object' && __webpack_require__(52)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Colr = __webpack_require__(64);
	
	var Input = __webpack_require__(68);
	var OnChangeMixin = __webpack_require__(69);
	
	var Details = React.createClass({
	  displayName: 'Details',
	
	
	  mixins: [OnChangeMixin],
	
	  propTypes: {
	    color: React.PropTypes.instanceOf(Colr).isRequired,
	    hsv: React.PropTypes.object.isRequired
	  },
	
	  handleRgb: function handleRgb(id) {
	    var self = this;
	    return function (value) {
	      var number = parseInt(value, 10);
	      if (isNaN(number)) {
	        return null;
	      }
	      var rgb = self.props.color.toRgbObject();
	      rgb[id] = number;
	      return Colr.fromRgbObject(rgb);
	    };
	  },
	
	  handleHsv: function handleHsv(id) {
	    var self = this;
	    return function (value) {
	      var number = parseInt(value, 10);
	      if (isNaN(number)) {
	        return null;
	      }
	      var hsv = self.props.color.toHsvObject();
	      hsv[id] = number;
	      return Colr.fromHsvObject(hsv);
	    };
	  },
	
	  handleHex: function handleHex(value) {
	    try {
	      return Colr.fromHex(value);
	    } catch (e) {
	      return null;
	    }
	  },
	
	  render: function render() {
	    var hex = this.props.color.toHex().slice(1);
	    var rgb = this.props.color.toRgbObject();
	    var hsv = this.props.color.toHsvObject();
	
	    return (
	      /* jshint ignore: start */
	      React.createElement(
	        'div',
	        { className: 'details' },
	        React.createElement(
	          'ul',
	          { className: 'hex' },
	          React.createElement(Input, {
	            label: '#', value: hex,
	            fn: this.handleHex,
	            onChange: this.props.onChange
	          })
	        ),
	        React.createElement(
	          'ul',
	          { className: 'rgb' },
	          React.createElement(Input, {
	            label: 'R:', value: rgb.r,
	            fn: this.handleRgb('r'),
	            onChange: this.props.onChange
	          }),
	          React.createElement(Input, {
	            label: 'G:', value: rgb.g,
	            fn: this.handleRgb('g'),
	            onChange: this.props.onChange
	          }),
	          React.createElement(Input, {
	            label: 'B:', value: rgb.b,
	            fn: this.handleRgb('b'),
	            onChange: this.props.onChange
	          })
	        ),
	        React.createElement(
	          'ul',
	          { className: 'hsv' },
	          React.createElement(Input, {
	            label: 'H:', value: hsv.h,
	            fn: this.handleHsv('h'),
	            onChange: this.props.onChange
	          }),
	          React.createElement(Input, {
	            label: 'S:', value: hsv.s,
	            fn: this.handleHsv('s'),
	            onChange: this.props.onChange
	          }),
	          React.createElement(Input, {
	            label: 'B:', value: hsv.v,
	            fn: this.handleHsv('v'),
	            onChange: this.props.onChange
	          })
	        )
	      )
	      /* jshint ignore: end */
	
	    );
	  }
	
	});
	
	module.exports = Details;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Colr = __webpack_require__(64);
	
	var OnChangeMixin = __webpack_require__(69);
	
	var Input = React.createClass({
	  displayName: 'Input',
	
	
	  mixins: [OnChangeMixin],
	
	  propTypes: {
	    fn: React.PropTypes.func.isRequired,
	    label: React.PropTypes.string.isRequired,
	    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      value: '',
	      isFocused: false
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.setState({ value: this.props.value });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (!this.state.isFocused) {
	      this.setState({ value: props.value });
	    }
	  },
	
	  handleChange: function handleChange(event) {
	    var value = event.target.value;
	    var color = this.props.fn(value);
	    if (color !== null) {
	      this.props.onChange(color.toHex());
	    }
	    this.setState({ value: value });
	  },
	
	  handleFocus: function handleFocus() {
	    this.setState({ isFocused: true });
	  },
	
	  handleBlur: function handleBlur() {
	    this.setState({ isFocused: false });
	  },
	
	  render: function render() {
	    return (
	      /* jshint ignore: start */
	      React.createElement(
	        'li',
	        null,
	        React.createElement(
	          'label',
	          null,
	          this.props.label
	        ),
	        React.createElement('input', {
	          value: this.state.value,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onChange: this.handleChange
	        })
	      )
	      /* jshint ignore: end */
	
	    );
	  }
	
	});
	
	module.exports = Input;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var noop = function noop() {};
	
	var OnChangeMixin = {
	
	  propTypes: {
	    onChange: React.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onChange: noop
	    };
	  }
	};
	
	module.exports = OnChangeMixin;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(2);
	var PureRenderMixin = __webpack_require__(71);
	var classnames = __webpack_require__(66);
	
	var clamp = __webpack_require__(74);
	var DraggableMixin = __webpack_require__(75);
	var OnChangeMixin = __webpack_require__(69);
	
	var Map = React.createClass({
	  displayName: 'Map',
	
	
	  mixins: [DraggableMixin, OnChangeMixin, PureRenderMixin],
	
	  propTypes: {
	    x: React.PropTypes.number.isRequired,
	    y: React.PropTypes.number.isRequired,
	    backgroundColor: React.PropTypes.string.isRequired
	  },
	
	  updatePosition: function updatePosition(clientX, clientY) {
	    var rect = ReactDom.findDOMNode(this).getBoundingClientRect();
	    var x = (clientX - rect.left) / rect.width;
	    var y = (rect.bottom - clientY) / rect.height;
	
	    x = this.getScaledValue(x);
	    y = this.getScaledValue(y);
	
	    this.props.onChange(x, y);
	  },
	
	  render: function render() {
	    var classes = classnames({
	      map: true,
	      active: this.state.active
	    });
	
	    classes += " " + this.props.className;
	
	    return (
	      /* jshint ignore: start */
	      React.createElement(
	        'div',
	        {
	          className: classes,
	          onMouseDown: this.startUpdates,
	          onTouchStart: this.startUpdates
	        },
	        React.createElement('div', { className: 'background', style: {
	            backgroundColor: this.props.backgroundColor
	          } }),
	        React.createElement('div', { className: 'pointer', style: {
	            left: this.getPercentageValue(this.props.x),
	            bottom: this.getPercentageValue(this.props.y)
	          } })
	      )
	      /* jshint ignore: end */
	
	    );
	  }
	
	});
	
	module.exports = Map;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	'use strict';
	
	var shallowCompare = __webpack_require__(72);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 *
	 * See https://facebook.github.io/react/docs/pure-render-mixin.html
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(73);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	
	function clamp(val, min, max) {
	  return val < min ? min : val > max ? max : val;
	}
	
	module.exports = clamp;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var clamp = __webpack_require__(74);
	
	var DraggableMixin = {
	
	  propTypes: {
	    max: React.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      max: 1
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      active: false
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    document.addEventListener('mousemove', this.handleUpdate);
	    document.addEventListener('touchmove', this.handleUpdate);
	    document.addEventListener('mouseup', this.stopUpdates);
	    document.addEventListener('touchend', this.stopUpdates);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    document.removeEventListener('mousemove', this.handleUpdate);
	    document.removeEventListener('touchmove', this.handleUpdate);
	    document.removeEventListener('mouseup', this.stopUpdates);
	    document.removeEventListener('touchend', this.stopUpdates);
	  },
	
	  startUpdates: function startUpdates(e) {
	    var coords = this.getPosition(e);
	    this.setState({ active: true });
	    this.updatePosition(coords.x, coords.y);
	  },
	
	  handleUpdate: function handleUpdate(e) {
	    if (this.state.active) {
	      e.preventDefault();
	      var coords = this.getPosition(e);
	      this.updatePosition(coords.x, coords.y);
	    }
	  },
	
	  stopUpdates: function stopUpdates() {
	    if (this.state.active) {
	      this.setState({ active: false });
	    }
	  },
	
	  getPosition: function getPosition(e) {
	    if (e.touches) {
	      e = e.touches[0];
	    }
	
	    return {
	      x: e.clientX,
	      y: e.clientY
	    };
	  },
	
	  getPercentageValue: function getPercentageValue(value) {
	    return value / this.props.max * 100 + "%";
	  },
	
	  getScaledValue: function getScaledValue(value) {
	    return clamp(value, 0, 1) * this.props.max;
	  }
	
	};
	
	module.exports = DraggableMixin;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Colr = __webpack_require__(64);
	var PureRenderMixin = __webpack_require__(71);
	
	var OnChangeMixin = __webpack_require__(69);
	
	var Sample = React.createClass({
	  displayName: 'Sample',
	
	
	  mixins: [OnChangeMixin, PureRenderMixin],
	
	  propTypes: {
	    color: React.PropTypes.string.isRequired,
	    origin: React.PropTypes.string.isRequired
	  },
	
	  loadOrigin: function loadOrigin() {
	    this.props.onChange(this.props.origin);
	  },
	
	  render: function render() {
	    return (
	      /* jshint ignore: start */
	      React.createElement(
	        'div',
	        { className: 'sample' },
	        React.createElement('div', {
	          className: 'current',
	          style: { background: this.props.color }
	        }),
	        React.createElement('div', {
	          className: 'origin',
	          style: { background: this.props.origin },
	          onClick: this.loadOrigin
	        })
	      )
	      /* jshint ignore: end */
	
	    );
	  }
	
	});
	
	module.exports = Sample;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(2);
	var PureRenderMixin = __webpack_require__(71);
	var classnames = __webpack_require__(66);
	
	var clamp = __webpack_require__(74);
	var DraggableMixin = __webpack_require__(75);
	var OnChangeMixin = __webpack_require__(69);
	
	var Slider = React.createClass({
	  displayName: 'Slider',
	
	
	  mixins: [DraggableMixin, OnChangeMixin, PureRenderMixin],
	
	  propTypes: {
	    vertical: React.PropTypes.bool.isRequired,
	    value: React.PropTypes.number.isRequired
	  },
	
	  updatePosition: function updatePosition(clientX, clientY) {
	    var el = ReactDom.findDOMNode(this);
	    var rect = el.getBoundingClientRect();
	
	    var value;
	    if (this.props.vertical) {
	      value = (rect.bottom - clientY) / rect.height;
	    } else {
	      value = (clientX - rect.left) / rect.width;
	    }
	
	    value = this.getScaledValue(value);
	    this.props.onChange(value);
	  },
	
	  render: function render() {
	    var classes = classnames({
	      slider: true,
	      vertical: this.props.vertical,
	      horizontal: !this.props.vertical
	    });
	
	    var styles = {};
	    var attr = this.props.vertical ? 'bottom' : 'left';
	    styles[attr] = this.getPercentageValue(this.props.value);
	
	    return (
	      /* jshint ignore: start */
	      React.createElement(
	        'div',
	        {
	          className: classes,
	          onMouseDown: this.startUpdates,
	          onTouchStart: this.startUpdates
	        },
	        React.createElement('div', { className: 'track' }),
	        React.createElement('div', { className: 'pointer', style: styles })
	      )
	      /* jshint ignore: end */
	
	    );
	  }
	
	});
	
	module.exports = Slider;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".colorpicker {\n    color: #fff;\n    background: #333;\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n.colorpicker .map {\n    display: block;\n    position: absolute;\n    top: 25px;\n    bottom: 56px;\n    left: 56px;\n    right: 181px;\n    position: absolute;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow: hidden; }\n.colorpicker .map.active {\n    cursor: none; }\n.colorpicker .map.dark .pointer {\n    border-color: #fff; }\n.colorpicker .map.light .pointer {\n    border-color: #000; }\n.colorpicker .map .pointer {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    margin-left: -5px;\n    margin-top: -5px;\n    border-radius: 100%;\n    border: 1px solid #000; }\n.colorpicker .map .background {\n    top: 0;\n    left: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%; }\n.colorpicker .map .background:before, .colorpicker .map .background:after {\n    display: block;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n.colorpicker .map .background:after {\n    background: -webkit-linear-gradient(top, transparent 0%, #000000 100%);\n    background: linear-gradient(to bottom, transparent 0%, #000000 100%); }\n.colorpicker .map .background:before {\n    background: -webkit-linear-gradient(left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\n    background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%); }\n.colorpicker .slider {\n    position: absolute;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n.colorpicker .slider.vertical {\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    width: 10px;\n    cursor: ns-resize; }\n.colorpicker .slider.vertical .track {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    width: 6px;\n    margin-left: -3px; }\n.colorpicker .slider.horizontal {\n    left: 0;\n    right: 0;\n    top: 50%;\n    height: 10px;\n    cursor: ew-resize; }\n.colorpicker .slider.horizontal .track {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 50%;\n    height: 6px;\n    margin-top: -3px; }\n.colorpicker .slider .track {\n    border-radius: 3px;\n    background: #888; }\n.colorpicker .slider .pointer {\n    position: absolute;\n    bottom: 50%;\n    left: 50%;\n    width: 14px;\n    height: 14px;\n    background: #ddd;\n    margin-left: -7px;\n    margin-bottom: -7px;\n    border-radius: 14px; }\n.colorpicker .sat-slider {\n    display: block;\n    position: absolute;\n    top: auto;\n    bottom: 33px;\n    left: 56px;\n    right: 181px; }\n.colorpicker .light-slider {\n    display: block;\n    position: absolute;\n    top: 25px;\n    bottom: 56px;\n    left: 23px;\n    right: auto; }\n.colorpicker .hue-slider {\n    display: block;\n    position: absolute;\n    top: 25px;\n    bottom: 56px;\n    left: auto;\n    right: 158px; }\n.colorpicker .hue-slider .track {\n    background: -webkit-linear-gradient(top, #FF0000 0%, #FF0099 10%, #CD00FF 20%, #3200FF 30%, #0066FF 40%, #00FFFD 50%, #00FF66 60%, #35FF00 70%, #CDFF00 80%, #FF9900 90%, #FF0000 100%);\n    background: linear-gradient(to bottom, #FF0000 0%, #FF0099 10%, #CD00FF 20%, #3200FF 30%, #0066FF 40%, #00FFFD 50%, #00FF66 60%, #35FF00 70%, #CDFF00 80%, #FF9900 90%, #FF0000 100%); }\n.colorpicker .sample {\n    display: block;\n    position: absolute;\n    top: 25px;\n    bottom: auto;\n    left: auto;\n    right: 25px;\n    width: 100px;\n    height: 100px; }\n.colorpicker .sample .current {\n    height: 50%; }\n.colorpicker .sample .origin {\n    height: 50%; }\n.colorpicker .details {\n    display: block;\n    position: absolute;\n    top: 140px;\n    bottom: 0;\n    left: auto;\n    right: 25px;\n    width: 100px;\n    overflow: hidden; }\n.colorpicker .details ul {\n    padding: 0;\n    margin: 0 0 20px 0; }\n.colorpicker .details ul li {\n    list-style-type: none; }\n.colorpicker .details label {\n    display: inline-block;\n    color: #888;\n    width: 15px;\n    margin-right: 5px;\n    text-align: right; }\n.colorpicker .details input {\n    width: 74px;\n    text-transform: uppercase;\n    background: none;\n    border-radius: 3px;\n    border: none;\n    outline: none;\n    color: #ccc;\n    background: rgba(0, 0, 0, 0.1); }\n.colorpicker .details input:focus {\n    color: #333;\n    background: rgba(255, 255, 255, 0.9); }", ""]);
	
	// exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ColorSelector.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ColorSelector.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".color-selector {\n  width: 30px;\n  height: 15px; }\n  .color-selector.active {\n    width: 400px;\n    height: 350px;\n    position: fixed;\n    right: 0;\n    z-index: 1999; }\n    .color-selector.active .btn-list {\n      position: absolute;\n      right: 5px;\n      bottom: 5px; }\n      .color-selector.active .btn-list input {\n        margin-left: 2px; }\n", ""]);
	
	// exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setTextColor = exports.setTextAlign = exports.setDuration = exports.setDelay = exports.setAnimation = exports.setZIndex = undefined;
	
	var _Values = __webpack_require__(7);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _AppStore = __webpack_require__(6);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Soup Tang on 2016/4/26.
	 */
	var setZIndex = exports.setZIndex = _AppStore2.default.makeActionCreator(_Values2.default.CONTROL.SET_ZINDEX, 'zIndex');
	var setAnimation = exports.setAnimation = _AppStore2.default.makeActionCreator(_Values2.default.CONTROL.SET_ANIMATION, 'animation');
	var setDelay = exports.setDelay = _AppStore2.default.makeActionCreator(_Values2.default.CONTROL.SET_DELAY, 'delay');
	var setDuration = exports.setDuration = _AppStore2.default.makeActionCreator(_Values2.default.CONTROL.SET_DURATION, 'duration');
	var setTextAlign = exports.setTextAlign = _AppStore2.default.makeActionCreator(_Values2.default.CONTROL.SET_TEXT_ALIGN, 'textAlign');
	var setTextColor = exports.setTextColor = _AppStore2.default.makeActionCreator(_Values2.default.CONTROL.SET_TEXT_COLOR, 'color');

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./react-select.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./react-select.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/JedWatson/react-select\n*/\n.Select {\n  position: relative;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.35;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n}\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 14px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ControlBar.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ControlBar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".control-bar {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  right: 0;\n  text-align: left;\n  width: 260px;\n  height: 100%;\n  border: 1px solid #b0b0b0;\n  box-sizing: border-box;\n  overflow-y: hidden;\n  background-color: white;\n  vertical-align: top;\n  box-shadow: 0 0 2px 1px #E7E7E7; }\n  .control-bar .tab-head {\n    display: flex;\n    padding: 0;\n    height: 40px;\n    font-size: 0;\n    background-color: #00bcd5;\n    border-bottom: none; }\n    .control-bar .tab-head li {\n      display: flex;\n      flex: 1; }\n    .control-bar .tab-head .title {\n      display: inline-block;\n      cursor: pointer;\n      line-height: 40px;\n      height: 40px;\n      width: 100%;\n      font-size: 16px;\n      color: white;\n      box-sizing: border-box;\n      text-align: center; }\n      .control-bar .tab-head .title.show {\n        border-bottom: 2px solid #feff97; }\n  .control-bar .tab-body {\n    height: 100%;\n    padding: 0 15px;\n    border-top: none;\n    margin-top: -1px;\n    box-sizing: border-box;\n    overflow: auto; }\n    .control-bar .tab-body .tab-main {\n      display: none;\n      font-size: 14px; }\n      .control-bar .tab-body .tab-main.show {\n        display: block; }\n  .control-bar p.color-area {\n    display: inline-block;\n    vertical-align: middle; }\n  .control-bar div.color-area {\n    display: inline-block;\n    vertical-align: middle; }\n", ""]);
	
	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./App.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./App.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body {\n  min-width: 100%;\n  min-height: 100%;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, 'Microsoft YaHei UI', sans-serif;\n  -webkit-user-select: none;\n  user-select: none; }\n  html .main, body .main {\n    margin: 0 270px 0 130px;\n    padding: 10px; }\n  html .control-bar, body .control-bar {\n    border-right: none;\n    border-top: none;\n    border-bottom: none; }\n  html .stage, body .stage {\n    overflow: hidden;\n    width: 400px;\n    margin: 0 auto; }\n  html .element-bar, body .element-bar {\n    float: left;\n    width: 70px; }\n  html .page, body .page {\n    float: left; }\n  html #error-bar, body #error-bar {\n    position: fixed;\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    border: navajowhite;\n    outline: none;\n    background-color: #e60759;\n    right: 280px;\n    top: 10px;\n    cursor: pointer;\n    font-size: 14px;\n    color: white;\n    transition: background-color .3s,color .15s,box-shadow .3s,opacity 0.3s,width 0.3s,border-radius 0.3s; }\n    html #error-bar:hover, body #error-bar:hover {\n      border-radius: 0;\n      width: 100px;\n      box-shadow: 1px 1px 4px 1px #c2c2c2; }\n      html #error-bar:hover:before, body #error-bar:hover:before {\n        content: 'Error Console';\n        white-space: nowrap; }\n    html #error-bar:before, body #error-bar:before {\n      content: \"E\";\n      display: block;\n      overflow: hidden;\n      height: 40px;\n      line-height: 40px;\n      font-size: 18px;\n      vertical-align: middle;\n      text-align: center; }\n\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px; }\n\n::-webkit-scrollbar-track-piece {\n  background-color: #CCCCCC;\n  -webkit-border-radius: 6px; }\n\n::-webkit-scrollbar-thumb:vertical {\n  height: 5px;\n  background-color: #999999;\n  -webkit-border-radius: 6px; }\n\n::-webkit-scrollbar-thumb:horizontal {\n  width: 5px;\n  background-color: #CCCCCC;\n  -webkit-border-radius: 6px; }\n", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=app.js.map