(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-gpickr"] = factory();
	else
		root["vue-gpickr"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aCallable(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "04d1":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "10d1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var redefineAll = __webpack_require__("e2cc");
var InternalMetadataModule = __webpack_require__("f183");
var collection = __webpack_require__("6d61");
var collectionWeak = __webpack_require__("acac");
var isObject = __webpack_require__("861d");
var enforceIternalState = __webpack_require__("69f3").enforce;
var NATIVE_WEAK_MAP = __webpack_require__("7f9a");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (it instanceof Constructor) return it;
  throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var lengthOfArrayLike = __webpack_require__("07fa");
var bind = __webpack_require__("0366");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(String(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("5e77").PROPER;
var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var $toString = __webpack_require__("577e");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var getMethod = __webpack_require__("dc4a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var getMethod = __webpack_require__("dc4a");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var toString = __webpack_require__("577e");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "408a":
/***/ (function(module, exports) {

var valueOf = 1.0.valueOf;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  return valueOf.call(value);
};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4e82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var toString = __webpack_require__("577e");
var fails = __webpack_require__("d039");
var internalSort = __webpack_require__("addb");
var arrayMethodIsStrict = __webpack_require__("a640");
var FF = __webpack_require__("04d1");
var IE_OR_EDGE = __webpack_require__("d998");
var V8 = __webpack_require__("2d00");
var WEBKIT = __webpack_require__("512c");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) items.push(array[index]);
    }

    items = internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "512c":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "582d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7922");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("12b7c4ef", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "66cb":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7037":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7922":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-79ffeed8] .vc-sketch{box-shadow:none;padding:10px}[data-v-79ffeed8] .vc-sketch .vc-sketch-presets{display:none}[data-v-79ffeed8] .vc-sketch .vc-sketch-saturation-wrap{overflow:visible}[data-v-79ffeed8] .vc-sketch .vc-saturation-pointer{margin-top:-2px}[data-v-79ffeed8] .vc-sketch .vc-sketch-field input{text-align:center;padding:4px 0 3px}.vue-gpickr[data-v-79ffeed8]{position:relative;display:inline-flex;flex-direction:row;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vue-gpickr .vue-gpickr-inner-container[data-v-79ffeed8]{padding:10px;padding-left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-preview-container[data-v-79ffeed8]{width:200px;height:150px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC);background-size:10px;position:relative}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-preview-container .vue-gpickr-preview[data-v-79ffeed8]{position:absolute;top:0;bottom:0;left:0;right:0}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-stops-container[data-v-79ffeed8]{position:relative}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-stops-container .vue-gpickr-stops-preview-container[data-v-79ffeed8]{width:200px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC);background-size:10px;position:relative;margin-top:4px;border-radius:2px}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-stops-container .vue-gpickr-stops-preview-container .vue-gpickr-stops-preview[data-v-79ffeed8]{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25)}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-stops-container .vue-gpickr-stop[data-v-79ffeed8]{position:absolute;bottom:0;width:12px;height:12px;transform:translate(-6px,6px);display:flex;justify-content:center;align-items:center;cursor:pointer}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-stops-container .vue-gpickr-stop[data-v-79ffeed8]:before{content:\"\";width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;background:currentColor}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-stops-container .vue-gpickr-stop.active[data-v-79ffeed8]{z-index:3}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-stops-container .vue-gpickr-stop.active[data-v-79ffeed8]:before{content:\"\";box-shadow:0 0 0 2.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 3px rgba(0,0,0,.4);width:6px;height:6px}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container[data-v-79ffeed8]{margin-top:8px;display:flex;font-size:0}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container[data-v-79ffeed8]{flex-grow:1}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]{box-sizing:border-box;width:100%;height:19px;margin:0 2px;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-webkit-slider-thumb{-webkit-appearance:none;cursor:pointer;width:5px;border-radius:1px;height:10px;border:0;box-shadow:0 0 2px rgba(0,0,0,.6),inset 0 0 0 .5px rgba(0,0,0,.4);background:#fff;z-index:2}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-moz-range-thumb{cursor:pointer;width:5px;border-radius:1px;height:10px;border:0;box-shadow:0 0 2px rgba(0,0,0,.6),inset 0 0 0 .5px rgba(0,0,0,.4);background:#fff}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-ms-thumb{cursor:pointer;width:5px;border-radius:1px;height:10px;border:0;box-shadow:0 0 2px rgba(0,0,0,.6),inset 0 0 0 .5px rgba(0,0,0,.4);background:#fff}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-webkit-slider-runnable-track{width:100%;height:10px;cursor:pointer;background:rgba(0,0,0,.05);border:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);z-index:1}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-moz-range-track{width:100%;height:10px;cursor:pointer;background:rgba(0,0,0,.05);border:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-ms-track{width:100%;height:10px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-ms-fill-lower,.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-slider-container input[data-v-79ffeed8]::-ms-fill-upper{border:0;background:rgba(0,0,0,.05);border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-input-container[data-v-79ffeed8]{width:30px;margin-left:8px}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .vue-gpickr-input-container input[data-v-79ffeed8]{text-align:center;box-sizing:border-box;width:100%;padding:4px 0 3px;border:none;outline:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px}.vue-gpickr .vue-gpickr-inner-container .vue-gpickr-controls-container .label[data-v-79ffeed8]{text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}@media (max-width:430px){.vue-gpickr[data-v-79ffeed8]{flex-direction:column}.vue-gpickr .vue-gpickr-inner-container[data-v-79ffeed8]{padding-left:10px;padding-top:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var FunctionName = __webpack_require__("5e77");
var isCallable = __webpack_require__("1626");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("a04b");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorMethod = __webpack_require__("35a1");

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument));
  throw TypeError(String(argument) + ' is not iterable');
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toIntegerOrInfinity = __webpack_require__("5926");
var lengthOfArrayLike = __webpack_require__("07fa");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var hasOwn = __webpack_require__("1a2d");
var inheritIfRequired = __webpack_require__("7156");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var thisNumberValue = __webpack_require__("408a");
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue === 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "acac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__("e2cc");
var getWeakData = __webpack_require__("f183").getWeakData;
var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var ArrayIterationModule = __webpack_require__("b727");
var hasOwn = __webpack_require__("1a2d");
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "addb":
/***/ (function(module, exports) {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    mergeSort(array.slice(0, middle), comparefn),
    mergeSort(array.slice(middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  } return result;
};

module.exports = mergeSort;


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var FUNCTION_NAME_EXISTS = __webpack_require__("5e77").EXISTS;
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toIntegerOrInfinity = __webpack_require__("5926");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=60)}([function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(x){var o=h++;r=d||(d=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(b,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(64),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,h=0,p=!1,v=function(){},g=null,b="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){p=n,g=i||{};var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:s,options:l}}},function(e,t,n){"use strict";function r(e,t){var n,r=e&&e.a;!(n=e&&e.hsl?(0,o.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,o.default)(e.hex):e&&e.hsv?(0,o.default)(e.hsv):e&&e.rgba?(0,o.default)(e.rgba):e&&e.rgb?(0,o.default)(e.rgb):(0,o.default)(e))||void 0!==n._a&&null!==n._a||n.setAlpha(r||1);var i=n.toHsl(),a=n.toHsv();return 0===i.s&&(a.h=i.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:i,hex:n.toHexString().toUpperCase(),hex8:n.toHex8String().toUpperCase(),rgba:n.toRgb(),hsv:a,oldHue:e.h||t||i.h,source:e.source,a:e.a||n.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(65),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={props:["value"],data:function(){return{val:r(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=r(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=r(e,t||this.oldHue)},isValidHex:function(e){return(0,o.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],n=0,r=0,i=0;i<t.length;i++){var o=t[i];e[o]&&(n++,isNaN(e[o])||r++)}if(n===r)return e},paletteUpperCase:function(e){return e.map(function(e){return e.toUpperCase()})},isTransparent:function(e){return 0===(0,o.default)(e).getAlpha()}}}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){"use strict";function r(e){c||n(66)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(68),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/EditableInput.vue",t.default=f.exports},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(8),i=n(18);e.exports=n(9)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(16),i=n(42),o=n(25),a=Object.defineProperty;t.f=n(9)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(90),i=n(24);e.exports=function(e){return r(i(e))}},function(e,t,n){var r=n(29)("wks"),i=n(19),o=n(4).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";function r(e){c||n(111)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(51),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(113),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Hue.vue",t.default=f.exports},function(e,t){e.exports=!0},function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(12);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){"use strict";function r(e){c||n(123)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(54),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(127),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Saturation.vue",t.default=f.exports},function(e,t,n){"use strict";function r(e){c||n(128)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(55),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(133),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Alpha.vue",t.default=f.exports},function(e,t,n){"use strict";function r(e){c||n(130)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(56),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(132),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Checkboard.vue",t.default=f.exports},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(12);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports={}},function(e,t,n){var r=n(46),i=n(30);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){var r=n(29)("keys"),i=n(19);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){var r=n(15),i=n(4),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(8).f,i=n(6),o=n(11)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){t.f=n(11)},function(e,t,n){var r=n(4),i=n(15),o=n(14),a=n(32),s=n(8).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];t.default={name:"Compact",mixins:[o.default],props:{palette:{type:Array,default:function(){return c}}},components:{"ed-in":s.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var t={};t[this.label]=e,void 0===t.hex&&void 0===t["#"]?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown:function(e){var t=this.val,n=Number(t);if(n){var r=this.arrowOffset||1;38===e.keyCode&&(t=n+r,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=n-r,this.handleChange(t),e.preventDefault())}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];t.default={name:"Grayscale",mixins:[i.default],props:{palette:{type:Array,default:function(){return o}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(3),s=r(a);t.default={name:"Material",mixins:[s.default],components:{"ed-in":o.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(81),o=r(i),a=n(3),s=r(a),c=n(13),l=r(c);t.default={name:"Slider",mixins:[s.default],props:{swatches:{type:Array,default:function(){return[{s:.5,l:.8},{s:.5,l:.65},{s:.5,l:.5},{s:.5,l:.35},{s:.5,l:.2}]}}},components:{hue:l.default},computed:{normalizedSwatches:function(){return this.swatches.map(function(e){return"object"!==(void 0===e?"undefined":(0,o.default)(e))?{s:.5,l:e}:e})}},methods:{isActive:function(e,t){var n=this.colors.hsl;return 1===n.l&&1===e.l||(0===n.l&&0===e.l||Math.abs(n.l-e.l)<.01&&Math.abs(n.s-e.s)<.01)},hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,t){this.colorChange({h:this.colors.hsl.h,s:t.s,l:t.l,source:"hsl"})}}}},function(e,t,n){"use strict";var r=n(14),i=n(41),o=n(44),a=n(7),s=n(26),c=n(88),l=n(31),u=n(95),f=n(11)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,n,p,v,g,b){c(n,t,p);var x,m,_,w=function(e){if(!d&&e in F)return F[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},y=t+" Iterator",C="values"==v,k=!1,F=e.prototype,S=F[f]||F["@@iterator"]||v&&F[v],A=S||w(v),O=v?C?w("entries"):A:void 0,E="Array"==t?F.entries||S:S;if(E&&(_=u(E.call(new e)))!==Object.prototype&&_.next&&(l(_,y,!0),r||"function"==typeof _[f]||a(_,f,h)),C&&S&&"values"!==S.name&&(k=!0,A=function(){return S.call(this)}),r&&!b||!d&&!k&&F[f]||a(F,f,A),s[t]=A,s[y]=h,v)if(x={values:C?A:w("values"),keys:g?A:w("keys"),entries:O},b)for(m in x)m in F||o(F,m,x[m]);else i(i.P+i.F*(d||k),t,x);return x}},function(e,t,n){var r=n(4),i=n(15),o=n(86),a=n(7),s=n(6),c=function(e,t,n){var l,u,f,d=e&c.F,h=e&c.G,p=e&c.S,v=e&c.P,g=e&c.B,b=e&c.W,x=h?i:i[t]||(i[t]={}),m=x.prototype,_=h?r:p?r[t]:(r[t]||{}).prototype;h&&(n=t);for(l in n)(u=!d&&_&&void 0!==_[l])&&s(x,l)||(f=u?_[l]:n[l],x[l]=h&&"function"!=typeof _[l]?n[l]:g&&u?o(f,r):b&&_[l]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[l]=f,e&c.R&&m&&!m[l]&&a(m,l,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){e.exports=!n(9)&&!n(17)(function(){return 7!=Object.defineProperty(n(43)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(12),i=n(4).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){e.exports=n(7)},function(e,t,n){var r=n(16),i=n(89),o=n(30),a=n(28)("IE_PROTO"),s=function(){},c=function(){var e,t=n(43)("iframe"),r=o.length;for(t.style.display="none",n(94).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[o[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=c(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(6),i=n(10),o=n(91)(!1),a=n(28)("IE_PROTO");e.exports=function(e,t){var n,s=i(e),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;t.length>c;)r(s,n=t[c++])&&(~o(l,n)||l.push(n));return l}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(24);e.exports=function(e){return Object(r(e))}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(46),i=n(30).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r,i,o=n.clientWidth,a=n.clientHeight,s=n.getBoundingClientRect().left+window.pageXOffset,c=n.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),f=l-s,d=u-c;"vertical"===this.direction?(d<0?r=360:d>a?r=0:(i=-100*d/a+100,r=360*i/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(f<0?r=0:f>o?r=360:(i=100*f/o,r=360*i/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(118),o=r(i),a=n(3),s=r(a),c=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],l=["900","700","500","300","100"],u=function(){var e=[];return c.forEach(function(t){var n=[];"black"===t.toLowerCase()||"white"===t.toLowerCase()?n=n.concat(["#000000","#FFFFFF"]):l.forEach(function(e){var r=o.default[t][e];n.push(r.toUpperCase())}),e.push(n)}),e}();t.default={name:"Swatches",mixins:[s.default],props:{palette:{type:Array,default:function(){return u}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d);t.default={name:"Photoshop",mixins:[o.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(125),o=r(i),a=n(126),s=r(a);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,s.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r=n.clientWidth,i=n.clientHeight,a=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),l=e.pageY||(e.touches?e.touches[0].pageY:0),u=(0,o.default)(c-a,0,r),f=(0,o.default)(l-s,0,i),d=u/r,h=(0,o.default)(-f/i+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:d,v:h,a:this.colors.hsv.a,source:"hsva"})}},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:i.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,t=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r,i=n.clientWidth,o=n.getBoundingClientRect().left+window.pageXOffset,a=e.pageX||(e.touches?e.touches[0].pageX:0),s=a-o;r=s<0?0:s>i?1:Math.round(100*s/i)/100,this.colors.a!==r&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:r,source:"rgba"})}},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e,t,n){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*n;var i=r.getContext("2d");return i?(i.fillStyle=e,i.fillRect(0,0,r.width,r.height),i.fillStyle=t,i.fillRect(0,0,n,n),i.translate(n,n),i.fillRect(0,0,n,n),r.toDataURL()):null}function i(e,t,n){var i=e+","+t+","+n;if(o[i])return o[i];var a=r(e,t,n);return o[i]=a,a}Object.defineProperty(t,"__esModule",{value:!0});var o={};t.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+i(this.white,this.grey,this.size)+")"}}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d),p=n(22),v=r(p),g=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];t.default={name:"Sketch",mixins:[o.default],components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default,checkboard:v.default},props:{presetColors:{type:Array,default:function(){return g}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var e=void 0;return e=this.colors.a<1?this.colors.hex8:this.colors.hex,e.replace("#","")},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d),p=n(22),v=r(p);t.default={name:"Chrome",mixins:[o.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default,checkboard:v.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,n=e.s,r=e.l;return{h:t.toFixed(),s:(100*n).toFixed()+"%",l:(100*r).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){var t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,n=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:n,source:"hsl"})}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(3),s=r(a),c=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];t.default={name:"Twitter",mixins:[s.default],components:{editableInput:o.default},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default:function(){return c}},triangle:{default:"top-left",validator:function(e){return["hide","top-left","top-right"].includes(e)}}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(61),o=r(i),a=n(70),s=r(a),c=n(74),l=r(c),u=n(78),f=r(u),d=n(115),h=r(d),p=n(120),v=r(p),g=n(135),b=r(g),x=n(139),m=r(x),_=n(143),w=r(_),y=n(21),C=r(y),k=n(22),F=r(k),S=n(5),A=r(S),O=n(13),E=r(O),M=n(20),j=r(M),L=n(3),P=r(L),R={version:"2.8.1",Compact:o.default,Grayscale:s.default,Twitter:w.default,Material:l.default,Slider:f.default,Swatches:h.default,Photoshop:v.default,Sketch:b.default,Chrome:m.default,Alpha:C.default,Checkboard:F.default,EditableInput:A.default,Hue:E.default,Saturation:j.default,ColorMixin:P.default};e.exports=R},function(e,t,n){"use strict";function r(e){c||n(62)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(35),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(69),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Compact.vue",t.default=f.exports},function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("6ce8a5a8",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-compact {\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 245px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-compact-colors {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-compact-color-item {\n  list-style: none;\n  width: 15px;\n  height: 15px;\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.vc-compact-color-item--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-compact-color-item--white .vc-compact-dot {\n  background: #000;\n}\n.vc-compact-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],c=o[2],l=o[3],u={id:e+":"+i,css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(e,t,n){var r;!function(i){function o(e,t){if(e=e||"",t=t||{},e instanceof o)return e;if(!(this instanceof o))return new o(e,t);var n=a(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=G(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=G(this._r)),this._g<1&&(this._g=G(this._g)),this._b<1&&(this._b=G(this._b)),this._ok=n.ok,this._tc_id=U++}function a(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,c=!1;return"string"==typeof e&&(e=N(e)),"object"==typeof e&&(H(e.r)&&H(e.g)&&H(e.b)?(t=s(e.r,e.g,e.b),a=!0,c="%"===String(e.r).substr(-1)?"prgb":"rgb"):H(e.h)&&H(e.s)&&H(e.v)?(r=D(e.s),i=D(e.v),t=f(e.h,r,i),a=!0,c="hsv"):H(e.h)&&H(e.s)&&H(e.l)&&(r=D(e.s),o=D(e.l),t=l(e.h,r,o),a=!0,c="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=O(n),{ok:a,format:e.format||c,r:V(255,q(t.r,0)),g:V(255,q(t.g,0)),b:V(255,q(t.b,0)),a:n}}function s(e,t,n){return{r:255*E(e,255),g:255*E(t,255),b:255*E(n,255)}}function c(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,i,o=q(e,t,n),a=V(e,t,n),s=(o+a)/2;if(o==a)r=i=0;else{var c=o-a;switch(i=s>.5?c/(2-o-a):c/(o+a),o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,l:s}}function l(e,t,n){function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var i,o,a;if(e=E(e,360),t=E(t,100),n=E(n,100),0===t)i=o=a=n;else{var s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;i=r(c,s,e+1/3),o=r(c,s,e),a=r(c,s,e-1/3)}return{r:255*i,g:255*o,b:255*a}}function u(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,i,o=q(e,t,n),a=V(e,t,n),s=o,c=o-a;if(i=0===o?0:c/o,o==a)r=0;else{switch(o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,v:s}}function f(e,t,n){e=6*E(e,360),t=E(t,100),n=E(n,100);var r=i.floor(e),o=e-r,a=n*(1-t),s=n*(1-o*t),c=n*(1-(1-o)*t),l=r%6;return{r:255*[n,s,a,a,c,n][l],g:255*[c,n,n,s,a,a][l],b:255*[a,a,c,n,n,s][l]}}function d(e,t,n,r){var i=[R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function h(e,t,n,r,i){var o=[R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16)),R(B(r))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function p(e,t,n,r){return[R(B(r)),R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.s-=t/100,n.s=M(n.s),o(n)}function g(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.s+=t/100,n.s=M(n.s),o(n)}function b(e){return o(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.l+=t/100,n.l=M(n.l),o(n)}function m(e,t){t=0===t?0:t||10;var n=o(e).toRgb();return n.r=q(0,V(255,n.r-G(-t/100*255))),n.g=q(0,V(255,n.g-G(-t/100*255))),n.b=q(0,V(255,n.b-G(-t/100*255))),o(n)}function _(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.l-=t/100,n.l=M(n.l),o(n)}function w(e,t){var n=o(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,o(n)}function y(e){var t=o(e).toHsl();return t.h=(t.h+180)%360,o(t)}function C(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+120)%360,s:t.s,l:t.l}),o({h:(n+240)%360,s:t.s,l:t.l})]}function k(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+90)%360,s:t.s,l:t.l}),o({h:(n+180)%360,s:t.s,l:t.l}),o({h:(n+270)%360,s:t.s,l:t.l})]}function F(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+72)%360,s:t.s,l:t.l}),o({h:(n+216)%360,s:t.s,l:t.l})]}function S(e,t,n){t=t||6,n=n||30;var r=o(e).toHsl(),i=360/n,a=[o(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(o(r));return a}function A(e,t){t=t||6;for(var n=o(e).toHsv(),r=n.h,i=n.s,a=n.v,s=[],c=1/t;t--;)s.push(o({h:r,s:i,v:a})),a=(a+c)%1;return s}function O(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function E(e,t){L(e)&&(e="100%");var n=P(e);return e=V(t,q(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),i.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function M(e){return V(1,q(0,e))}function j(e){return parseInt(e,16)}function L(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function P(e){return"string"==typeof e&&-1!=e.indexOf("%")}function R(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function B(e){return i.round(255*parseFloat(e)).toString(16)}function T(e){return j(e)/255}function H(e){return!!J.CSS_UNIT.exec(e)}function N(e){e=e.replace(I,"").replace($,"").toLowerCase();var t=!1;if(W[e])e=W[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=J.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=J.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=J.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=J.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=J.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=J.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=J.hex8.exec(e))?{r:j(n[1]),g:j(n[2]),b:j(n[3]),a:T(n[4]),format:t?"name":"hex8"}:(n=J.hex6.exec(e))?{r:j(n[1]),g:j(n[2]),b:j(n[3]),format:t?"name":"hex"}:(n=J.hex4.exec(e))?{r:j(n[1]+""+n[1]),g:j(n[2]+""+n[2]),b:j(n[3]+""+n[3]),a:T(n[4]+""+n[4]),format:t?"name":"hex8"}:!!(n=J.hex3.exec(e))&&{r:j(n[1]+""+n[1]),g:j(n[2]+""+n[2]),b:j(n[3]+""+n[3]),format:t?"name":"hex"}}function z(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA"),"small"!==n&&"large"!==n&&(n="small"),{level:t,size:n}}var I=/^\s+/,$=/\s+$/,U=0,G=i.round,V=i.min,q=i.max,X=i.random;o.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r,o,a,s=this.toRgb();return e=s.r/255,t=s.g/255,n=s.b/255,r=e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4),o=t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4),a=n<=.03928?n/12.92:i.pow((n+.055)/1.055,2.4),.2126*r+.7152*o+.0722*a},setAlpha:function(e){return this._a=O(e),this._roundA=G(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),t=G(360*e.h),n=G(100*e.s),r=G(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b),t=G(360*e.h),n=G(100*e.s),r=G(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return d(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return h(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:G(this._r),g:G(this._g),b:G(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+G(this._r)+", "+G(this._g)+", "+G(this._b)+")":"rgba("+G(this._r)+", "+G(this._g)+", "+G(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:G(100*E(this._r,255))+"%",g:G(100*E(this._g,255))+"%",b:G(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+G(100*E(this._r,255))+"%, "+G(100*E(this._g,255))+"%, "+G(100*E(this._b,255))+"%)":"rgba("+G(100*E(this._r,255))+"%, "+G(100*E(this._g,255))+"%, "+G(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(Y[d(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=o(e);n="#"+p(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return o(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(y,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(C,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},o.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:D(e[r]));e=n}return o(e,t)},o.equals=function(e,t){return!(!e||!t)&&o(e).toRgbString()==o(t).toRgbString()},o.random=function(){return o.fromRatio({r:X(),g:X(),b:X()})},o.mix=function(e,t,n){n=0===n?0:n||50;var r=o(e).toRgb(),i=o(t).toRgb(),a=n/100;return o({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},o.readability=function(e,t){var n=o(e),r=o(t);return(i.max(n.getLuminance(),r.getLuminance())+.05)/(i.min(n.getLuminance(),r.getLuminance())+.05)},o.isReadable=function(e,t,n){var r,i,a=o.readability(e,t);switch(i=!1,r=z(n),r.level+r.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7}return i},o.mostReadable=function(e,t,n){var r,i,a,s,c=null,l=0;n=n||{},i=n.includeFallbackColors,a=n.level,s=n.size;for(var u=0;u<t.length;u++)(r=o.readability(e,t[u]))>l&&(l=r,c=o(t[u]));return o.isReadable(e,c,{level:a,size:s})||!i?c:(n.includeFallbackColors=!1,o.mostReadable(e,["#fff","#000"],n))};var W=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Y=o.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(W),J=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",n="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();void 0!==e&&e.exports?e.exports=o:void 0!==(r=function(){return o}.call(t,n,t,e))&&(e.exports=r)}(Math)},function(e,t,n){var r=n(67);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("0f73e73c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-editable-input {\n  position: relative;\n}\n.vc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.vc-input__label {\n  text-transform: capitalize;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-editable-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":e.labelId},domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(t){t.target.composing||(e.val=t.target.value)},e.update]}}),e._v(" "),n("span",{staticClass:"vc-input__label",attrs:{for:e.label,id:e.labelId}},[e._v(e._s(e.labelSpanText))]),e._v(" "),n("span",{staticClass:"vc-input__desc"},[e._v(e._s(e.desc))])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[n("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":"#FFFFFF"===t},style:{background:t},attrs:{role:"option","aria-label":"color:"+t,"aria-selected":t===e.pick},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(71)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(37),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(73),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Grayscale.vue",t.default=f.exports},function(e,t,n){var r=n(72);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("21ddbb74",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-grayscale {\n  width: 125px;\n  border-radius: 2px;\n  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-grayscale-colors {\n  border-radius: 2px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-grayscale-color-item {\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n.vc-grayscale-color-item--white .vc-grayscale-dot {\n  background: #000;\n}\n.vc-grayscale-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin: -3px 0 0 -2px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[n("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":"#FFFFFF"==t},style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":t===e.pick},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(75)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(77),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Material.vue",t.default=f.exports},function(e,t,n){var r=n(76);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1ff3af73",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-material {\n  width: 98px;\n  height: 98px;\n  padding: 16px;\n  font-family: "Roboto";\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-material .vc-input__input {\n  width: 100%;\n  margin-top: 12px;\n  font-size: 15px;\n  color: #333;\n  height: 30px;\n}\n.vc-material .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  color: #999;\n  text-transform: capitalize;\n}\n.vc-material-hex {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n}\n.vc-material-split {\n  display: flex;\n  margin-right: -10px;\n  padding-top: 11px;\n}\n.vc-material-third {\n  flex: 1;\n  padding-right: 10px;\n}\n',""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[n("ed-in",{staticClass:"vc-material-hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{change:e.onChange},model:{value:e.colors.hex,callback:function(t){e.$set(e.colors,"hex",t)},expression:"colors.hex"}}),e._v(" "),n("div",{staticClass:"vc-material-split"},[n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"r"},on:{change:e.onChange},model:{value:e.colors.rgba.r,callback:function(t){e.$set(e.colors.rgba,"r",t)},expression:"colors.rgba.r"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"g"},on:{change:e.onChange},model:{value:e.colors.rgba.g,callback:function(t){e.$set(e.colors.rgba,"g",t)},expression:"colors.rgba.g"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"b"},on:{change:e.onChange},model:{value:e.colors.rgba.b,callback:function(t){e.$set(e.colors.rgba,"b",t)},expression:"colors.rgba.b"}})],1)])],1)},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(79)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(39),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(114),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Slider.vue",t.default=f.exports},function(e,t,n){var r=n(80);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7982aa43",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-slider {\n  position: relative;\n  width: 410px;\n}\n.vc-slider-hue-warp {\n  height: 12px;\n  position: relative;\n}\n.vc-slider-hue-warp .vc-hue-picker {\n  width: 14px;\n  height: 14px;\n  border-radius: 6px;\n  transform: translate(-7px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-slider-swatches {\n  display: flex;\n  margin-top: 20px;\n}\n.vc-slider-swatch {\n  margin-right: 1px;\n  flex: 1;\n  width: 20%;\n}\n.vc-slider-swatch:first-child {\n  margin-right: 1px;\n}\n.vc-slider-swatch:first-child .vc-slider-swatch-picker {\n  border-radius: 2px 0px 0px 2px;\n}\n.vc-slider-swatch:last-child {\n  margin-right: 0;\n}\n.vc-slider-swatch:last-child .vc-slider-swatch-picker {\n  border-radius: 0px 2px 2px 0px;\n}\n.vc-slider-swatch-picker {\n  cursor: pointer;\n  height: 12px;\n}\n.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {\n  transform: scaleY(1.8);\n  border-radius: 3.6px/2px;\n}\n.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 0.6px #ddd;\n}\n",""])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(82),o=r(i),a=n(100),s=r(a),c="function"==typeof s.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===c(o.default)?function(e){return void 0===e?"undefined":c(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":c(e)}},function(e,t,n){e.exports={default:n(83),__esModule:!0}},function(e,t,n){n(84),n(96),e.exports=n(32).f("iterator")},function(e,t,n){"use strict";var r=n(85)(!0);n(40)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var r=n(23),i=n(24);e.exports=function(e){return function(t,n){var o,a,s=String(i(t)),c=r(n),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},function(e,t,n){var r=n(87);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var r=n(45),i=n(18),o=n(31),a={};n(7)(a,n(11)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(8),i=n(16),o=n(27);e.exports=n(9)?Object.defineProperties:function(e,t){i(e);for(var n,a=o(t),s=a.length,c=0;s>c;)r.f(e,n=a[c++],t[n]);return e}},function(e,t,n){var r=n(47);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){var r=n(10),i=n(92),o=n(93);e.exports=function(e){return function(t,n,a){var s,c=r(t),l=i(c.length),u=o(a,l);if(e&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}}},function(e,t,n){var r=n(23),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(23),i=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(4).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(6),i=n(48),o=n(28)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){n(97);for(var r=n(4),i=n(7),o=n(26),a=n(11)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var l=s[c],u=r[l],f=u&&u.prototype;f&&!f[a]&&i(f,a,l),o[l]=o.Array}},function(e,t,n){"use strict";var r=n(98),i=n(99),o=n(26),a=n(10);e.exports=n(40)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,n):"values"==t?i(0,e[n]):i(0,[n,e[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(101),__esModule:!0}},function(e,t,n){n(102),n(108),n(109),n(110),e.exports=n(15).Symbol},function(e,t,n){"use strict";var r=n(4),i=n(6),o=n(9),a=n(41),s=n(44),c=n(103).KEY,l=n(17),u=n(29),f=n(31),d=n(19),h=n(11),p=n(32),v=n(33),g=n(104),b=n(105),x=n(16),m=n(12),_=n(48),w=n(10),y=n(25),C=n(18),k=n(45),F=n(106),S=n(107),A=n(49),O=n(8),E=n(27),M=S.f,j=O.f,L=F.f,P=r.Symbol,R=r.JSON,D=R&&R.stringify,B=h("_hidden"),T=h("toPrimitive"),H={}.propertyIsEnumerable,N=u("symbol-registry"),z=u("symbols"),I=u("op-symbols"),$=Object.prototype,U="function"==typeof P&&!!A.f,G=r.QObject,V=!G||!G.prototype||!G.prototype.findChild,q=o&&l(function(){return 7!=k(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=M($,t);r&&delete $[t],j(e,t,n),r&&e!==$&&j($,t,r)}:j,X=function(e){var t=z[e]=k(P.prototype);return t._k=e,t},W=U&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},Y=function(e,t,n){return e===$&&Y(I,t,n),x(e),t=y(t,!0),x(n),i(z,t)?(n.enumerable?(i(e,B)&&e[B][t]&&(e[B][t]=!1),n=k(n,{enumerable:C(0,!1)})):(i(e,B)||j(e,B,C(1,{})),e[B][t]=!0),q(e,t,n)):j(e,t,n)},J=function(e,t){x(e);for(var n,r=g(t=w(t)),i=0,o=r.length;o>i;)Y(e,n=r[i++],t[n]);return e},K=function(e,t){return void 0===t?k(e):J(k(e),t)},Z=function(e){var t=H.call(this,e=y(e,!0));return!(this===$&&i(z,e)&&!i(I,e))&&(!(t||!i(this,e)||!i(z,e)||i(this,B)&&this[B][e])||t)},Q=function(e,t){if(e=w(e),t=y(t,!0),e!==$||!i(z,t)||i(I,t)){var n=M(e,t);return!n||!i(z,t)||i(e,B)&&e[B][t]||(n.enumerable=!0),n}},ee=function(e){for(var t,n=L(w(e)),r=[],o=0;n.length>o;)i(z,t=n[o++])||t==B||t==c||r.push(t);return r},te=function(e){for(var t,n=e===$,r=L(n?I:w(e)),o=[],a=0;r.length>a;)!i(z,t=r[a++])||n&&!i($,t)||o.push(z[t]);return o};U||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===$&&t.call(I,n),i(this,B)&&i(this[B],e)&&(this[B][e]=!1),q(this,e,C(1,n))};return o&&V&&q($,e,{configurable:!0,set:t}),X(e)},s(P.prototype,"toString",function(){return this._k}),S.f=Q,O.f=Y,n(50).f=F.f=ee,n(34).f=Z,A.f=te,o&&!n(14)&&s($,"propertyIsEnumerable",Z,!0),p.f=function(e){return X(h(e))}),a(a.G+a.W+a.F*!U,{Symbol:P});for(var ne="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ne.length>re;)h(ne[re++]);for(var ie=E(h.store),oe=0;ie.length>oe;)v(ie[oe++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return i(N,e+="")?N[e]:N[e]=P(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!U,"Object",{create:K,defineProperty:Y,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:ee,getOwnPropertySymbols:te});var ae=l(function(){A.f(1)});a(a.S+a.F*ae,"Object",{getOwnPropertySymbols:function(e){return A.f(_(e))}}),R&&a(a.S+a.F*(!U||l(function(){var e=P();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=t=r[1],(m(t)||void 0!==e)&&!W(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!W(t))return t}),r[1]=t,D.apply(R,r)}}),P.prototype[T]||n(7)(P.prototype,T,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(e,t,n){var r=n(19)("meta"),i=n(12),o=n(6),a=n(8).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(17)(function(){return c(Object.preventExtensions({}))}),u=function(e){a(e,r,{value:{i:"O"+ ++s,w:{}}})},f=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[r].i},d=function(e,t){if(!o(e,r)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[r].w},h=function(e){return l&&p.NEED&&c(e)&&!o(e,r)&&u(e),e},p=e.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},function(e,t,n){var r=n(27),i=n(49),o=n(34);e.exports=function(e){var t=r(e),n=i.f;if(n)for(var a,s=n(e),c=o.f,l=0;s.length>l;)c.call(e,a=s[l++])&&t.push(a);return t}},function(e,t,n){var r=n(47);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(10),i=n(50).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(r(e))}},function(e,t,n){var r=n(34),i=n(18),o=n(10),a=n(25),s=n(6),c=n(42),l=Object.getOwnPropertyDescriptor;t.f=n(9)?l:function(e,t){if(e=o(e),t=a(t,!0),c)try{return l(e,t)}catch(e){}if(s(e,t))return i(!r.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(33)("asyncIterator")},function(e,t,n){n(33)("observable")},function(e,t,n){var r=n(112);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7c5f1a1c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 2px;\n}\n.vc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue-container {\n  cursor: pointer;\n  margin: 0 2px;\n  position: relative;\n  height: 100%;\n}\n.vc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-hue-picker {\n  cursor: pointer;\n  margin-top: 1px;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  transform: translateX(-2px) ;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-hue",e.directionClass]},[n("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":e.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft},attrs:{role:"presentation"}},[n("div",{staticClass:"vc-hue-picker"})])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[n("div",{staticClass:"vc-slider-hue-warp"},[n("hue",{on:{change:e.hueChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},e._l(e.normalizedSwatches,function(t,r){return n("div",{key:r,staticClass:"vc-slider-swatch",attrs:{"data-index":r,"aria-label":"color:"+e.colors.hex,role:"button"},on:{click:function(n){return e.handleSwClick(r,t)}}},[n("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":e.isActive(t,r),"vc-slider-swatch-picker--white":1===t.l},style:{background:"hsl("+e.colors.hsl.h+", "+100*t.s+"%, "+100*t.l+"%)"}})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(116)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(52),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(119),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Swatches.vue",t.default=f.exports},function(e,t,n){var r=n(117);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("10f839a2",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-swatches {\n  width: 320px;\n  height: 240px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n}\n.vc-swatches-box {\n  padding: 16px 0 6px 16px;\n  overflow: hidden;\n}\n.vc-swatches-color-group {\n  padding-bottom: 10px;\n  width: 40px;\n  float: left;\n  margin-right: 10px;\n}\n.vc-swatches-color-it {\n  box-sizing: border-box;\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  background: #880e4f;\n  margin-bottom: 1px;\n  overflow: hidden;\n  -ms-border-radius: 2px 2px 0 0;\n  -moz-border-radius: 2px 2px 0 0;\n  -o-border-radius: 2px 2px 0 0;\n  -webkit-border-radius: 2px 2px 0 0;\n  border-radius: 2px 2px 0 0;\n}\n.vc-swatches-color--white {\n  border: 1px solid #DDD;\n}\n.vc-swatches-pick {\n  fill: rgb(255, 255, 255);\n  margin-left: 8px;\n  display: block;\n}\n.vc-swatches-color--white .vc-swatches-pick {\n  fill: rgb(51, 51, 51);\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"red",function(){return r}),n.d(t,"pink",function(){return i}),n.d(t,"purple",function(){return o}),n.d(t,"deepPurple",function(){return a}),n.d(t,"indigo",function(){return s}),n.d(t,"blue",function(){return c}),n.d(t,"lightBlue",function(){return l}),n.d(t,"cyan",function(){return u}),n.d(t,"teal",function(){return f}),n.d(t,"green",function(){return d}),n.d(t,"lightGreen",function(){return h}),n.d(t,"lime",function(){return p}),n.d(t,"yellow",function(){return v}),n.d(t,"amber",function(){return g}),n.d(t,"orange",function(){return b}),n.d(t,"deepOrange",function(){return x}),n.d(t,"brown",function(){return m}),n.d(t,"grey",function(){return _}),n.d(t,"blueGrey",function(){return w}),n.d(t,"darkText",function(){return y}),n.d(t,"lightText",function(){return C}),n.d(t,"darkIcons",function(){return k}),n.d(t,"lightIcons",function(){return F}),n.d(t,"white",function(){return S}),n.d(t,"black",function(){return A});var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},i={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},o={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},a={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},s={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},c={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},l={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},u={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},f={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},d={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},h={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},p={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},v={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},g={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},b={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},x={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},m={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},_={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},w={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},y={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},C={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},k={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},F={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},S="#ffffff",A="#000000";t.default={red:r,pink:i,purple:o,deepPurple:a,indigo:s,blue:c,lightBlue:l,cyan:u,teal:f,green:d,lightGreen:h,lime:p,yellow:v,amber:g,orange:b,deepOrange:x,brown:m,grey:_,blueGrey:w,darkText:y,lightText:C,darkIcons:k,lightIcons:F,white:S,black:A}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":e.pick}},[n("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},e._l(e.palette,function(t,r){return n("div",{key:r,staticClass:"vc-swatches-color-group"},e._l(t,function(t){return n("div",{key:t,class:["vc-swatches-color-it",{"vc-swatches-color--white":"#FFFFFF"===t}],style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":e.equal(t),"data-color":t},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.equal(t),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}),0)}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(121)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(53),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(134),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Photoshop.vue",t.default=f.exports},function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("080365d4",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-photoshop {\n  background: #DCDCDC;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);\n  box-sizing: initial;\n  width: 513px;\n  font-family: Roboto;\n}\n.vc-photoshop__disable-fields {\n  width: 390px;\n}\n.vc-ps-head {\n  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);\n  border-bottom: 1px solid #B1B1B1;\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);\n  height: 23px;\n  line-height: 24px;\n  border-radius: 4px 4px 0 0;\n  font-size: 13px;\n  color: #4D4D4D;\n  text-align: center;\n}\n.vc-ps-body {\n  padding: 15px;\n  display: flex;\n}\n.vc-ps-saturation-wrap {\n  width: 256px;\n  height: 256px;\n  position: relative;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n  overflow: hidden;\n}\n.vc-ps-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-ps-hue-wrap {\n  position: relative;\n  height: 256px;\n  width: 19px;\n  margin-left: 10px;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n}\n.vc-ps-hue-pointer {\n  position: relative;\n}\n.vc-ps-hue-pointer--left,\n.vc-ps-hue-pointer--right {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 8px;\n  border-color: transparent transparent transparent #555;\n}\n.vc-ps-hue-pointer--left:after,\n.vc-ps-hue-pointer--right:after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transform: translate(-8px, -5px);\n}\n.vc-ps-hue-pointer--left {\n  transform: translate(-13px, -4px);\n}\n.vc-ps-hue-pointer--right {\n  transform: translate(20px, -4px) rotate(180deg);\n}\n.vc-ps-controls {\n  width: 180px;\n  margin-left: 10px;\n  display: flex;\n}\n.vc-ps-controls__disable-fields {\n  width: auto;\n}\n.vc-ps-actions {\n  margin-left: 20px;\n  flex: 1;\n}\n.vc-ps-ac-btn {\n  cursor: pointer;\n  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);\n  border: 1px solid #878787;\n  border-radius: 2px;\n  height: 20px;\n  box-shadow: 0 1px 0 0 #EAEAEA;\n  font-size: 14px;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.vc-ps-previews {\n  width: 60px;\n}\n.vc-ps-previews__swatches {\n  border: 1px solid #B3B3B3;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 2px;\n  margin-top: 1px;\n}\n.vc-ps-previews__pr-color {\n  height: 34px;\n  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;\n}\n.vc-ps-previews__label {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n.vc-ps-fields {\n  padding-top: 5px;\n  padding-bottom: 9px;\n  width: 80px;\n  position: relative;\n}\n.vc-ps-fields .vc-input__input {\n  margin-left: 40%;\n  width: 40%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 5px;\n  font-size: 13px;\n  padding-left: 3px;\n  margin-right: 10px;\n}\n.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {\n  top: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n  position: absolute;\n}\n.vc-ps-fields .vc-input__label {\n  left: 0;\n  width: 34px;\n}\n.vc-ps-fields .vc-input__desc {\n  right: 0;\n  width: 0;\n}\n.vc-ps-fields__divider {\n  height: 5px;\n}\n.vc-ps-fields__hex .vc-input__input {\n  margin-left: 20%;\n  width: 80%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 6px;\n  font-size: 13px;\n  padding-left: 3px;\n}\n.vc-ps-fields__hex .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n}\n',""])},function(e,t,n){var r=n(124);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("b5380e52",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-saturation,\n.vc-saturation--white,\n.vc-saturation--black {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.vc-saturation--white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.vc-saturation--black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.vc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n}\n.vc-saturation-circle {\n  cursor: head;\n  width: 4px;\n  height: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n}\n",""])},function(e,t){function n(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}e.exports=n},function(e,t){function n(e,t,n){function r(t){var n=v,r=g;return v=g=void 0,k=t,x=e.apply(r,n)}function o(e){return k=e,m=setTimeout(u,t),F?r(e):x}function a(e){var n=e-_,r=e-k,i=t-n;return S?y(i,b-r):i}function l(e){var n=e-_,r=e-k;return void 0===_||n>=t||n<0||S&&r>=b}function u(){var e=C();if(l(e))return f(e);m=setTimeout(u,a(e))}function f(e){return m=void 0,A&&v?r(e):(v=g=void 0,x)}function d(){void 0!==m&&clearTimeout(m),k=0,v=_=g=m=void 0}function h(){return void 0===m?x:f(C())}function p(){var e=C(),n=l(e);if(v=arguments,g=this,_=e,n){if(void 0===m)return o(_);if(S)return m=setTimeout(u,t),r(_)}return void 0===m&&(m=setTimeout(u,t)),x}var v,g,b,x,m,_,k=0,F=!1,S=!1,A=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,i(n)&&(F=!!n.leading,S="maxWait"in n,b=S?w(s(n.maxWait)||0,t):b,A="trailing"in n?!!n.trailing:A),p.cancel=d,p.flush=h,p}function r(e,t,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:o,maxWait:t,trailing:a})}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||o(e)&&_.call(e)==u}function s(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=h.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):d.test(e)?l:+e}var c="Expected a function",l=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof global&&global&&global.Object===Object&&global,b="object"==typeof self&&self&&self.Object===Object&&self,x=g||b||Function("return this")(),m=Object.prototype,_=m.toString,w=Math.max,y=Math.min,C=function(){return x.Date.now()};e.exports=r},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-saturation--white"}),e._v(" "),n("div",{staticClass:"vc-saturation--black"}),e._v(" "),n("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[n("div",{staticClass:"vc-saturation-circle"})])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){var r=n(129);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("4dc1b086",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n.vc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 3px;\n}\n.vc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-alpha-picker {\n  cursor: pointer;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  margin-top: 1px;\n  transform: translateX(-2px);\n}\n",""])},function(e,t,n){var r=n(131);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7e15c05b",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-checkerboard {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-size: contain;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vc-checkerboard",style:e.bgStyle})},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-alpha"},[n("div",{staticClass:"vc-alpha-checkboard-wrap"},[n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-alpha-gradient",style:{background:e.gradientColor}}),e._v(" "),n("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-alpha-pointer",style:{left:100*e.colors.a+"%"}},[n("div",{staticClass:"vc-alpha-picker"})])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-photoshop",e.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[n("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[e._v(e._s(e.head))]),e._v(" "),n("div",{staticClass:"vc-ps-body"},[n("div",{staticClass:"vc-ps-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-ps-hue-wrap"},[n("hue",{attrs:{direction:"vertical"},on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}},[n("div",{staticClass:"vc-ps-hue-pointer"},[n("i",{staticClass:"vc-ps-hue-pointer--left"}),n("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),e._v(" "),n("div",{class:["vc-ps-controls",e.disableFields?"vc-ps-controls__disable-fields":""]},[n("div",{staticClass:"vc-ps-previews"},[n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.newLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-previews__swatches"},[n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.colors.hex},attrs:{"aria-label":"New color is "+e.colors.hex}}),e._v(" "),n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.currentColor},attrs:{"aria-label":"Current color is "+e.currentColor},on:{click:e.clickCurrentColor}})]),e._v(" "),n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.currentLabel))])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-ps-actions"},[n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.acceptLabel},on:{click:e.handleAccept}},[e._v(e._s(e.acceptLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.cancelLabel},on:{click:e.handleCancel}},[e._v(e._s(e.cancelLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-fields"},[n("ed-in",{attrs:{label:"h",desc:"°",value:e.hsv.h},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"s",desc:"%",value:e.hsv.s,max:100},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"v",desc:"%",value:e.hsv.v,max:100},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),e.hasResetButton?n("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:e.handleReset}},[e._v(e._s(e.resetLabel))]):e._e()])])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(136)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(57),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(138),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Sketch.vue",t.default=f.exports},function(e,t,n){var r=n(137);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("612c6604",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-sketch {\n  position: relative;\n  width: 200px;\n  padding: 10px 10px 0;\n  box-sizing: initial;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);\n}\n.vc-sketch-saturation-wrap {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.vc-sketch-controls {\n  display: flex;\n}\n.vc-sketch-sliders {\n  padding: 4px 0;\n  flex: 1;\n}\n.vc-sketch-sliders .vc-hue,\n.vc-sketch-sliders .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-sketch-hue-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-sketch-alpha-wrap {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.vc-sketch-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);\n  z-index: 2;\n}\n.vc-sketch-color-wrap .vc-checkerboard {\n  background-size: auto;\n}\n.vc-sketch-field {\n  display: flex;\n  padding-top: 4px;\n}\n.vc-sketch-field .vc-input__input {\n  width: 90%;\n  padding: 4px 0 3px 10%;\n  border: none;\n  box-shadow: inset 0 0 0 1px #ccc;\n  font-size: 10px;\n}\n.vc-sketch-field .vc-input__label {\n  display: block;\n  text-align: center;\n  font-size: 11px;\n  color: #222;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.vc-sketch-field--single {\n  flex: 1;\n  padding-left: 6px;\n}\n.vc-sketch-field--double {\n  flex: 2;\n}\n.vc-sketch-presets {\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.vc-sketch-presets-color {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.vc-sketch-presets-color .vc-checkerboard {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n  border-radius: 3px;\n}\n.vc-sketch__disable-alpha .vc-sketch-color-wrap {\n  height: 10px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-sketch",e.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[n("div",{staticClass:"vc-sketch-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-controls"},[n("div",{staticClass:"vc-sketch-sliders"},[n("div",{staticClass:"vc-sketch-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-color-wrap"},[n("div",{staticClass:"vc-sketch-active-color",style:{background:e.activeColor},attrs:{"aria-label":"Current color is "+e.activeColor}}),e._v(" "),n("checkboard")],1)]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-sketch-field"},[n("div",{staticClass:"vc-sketch-field--double"},[n("ed-in",{attrs:{label:"hex",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[e._l(e.presetColors,function(t){return[e.isTransparent(t)?n("div",{key:t,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+t},on:{click:function(n){return e.handlePreset(t)}}},[n("checkboard")],1):n("div",{key:t,staticClass:"vc-sketch-presets-color",style:{background:t},attrs:{"aria-label":"Color:"+t},on:{click:function(n){return e.handlePreset(t)}}})]})],2)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(140)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(58),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(142),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Chrome.vue",t.default=f.exports},function(e,t,n){var r=n(141);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1cd16048",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-chrome {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);\n  box-sizing: initial;\n  width: 225px;\n  font-family: Menlo;\n  background-color: #fff;\n}\n.vc-chrome-controls {\n  display: flex;\n}\n.vc-chrome-color-wrap {\n  position: relative;\n  width: 36px;\n}\n.vc-chrome-active-color {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  overflow: hidden;\n  z-index: 1;\n}\n.vc-chrome-color-wrap .vc-checkerboard {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-size: auto;\n}\n.vc-chrome-sliders {\n  flex: 1;\n}\n.vc-chrome-fields-wrap {\n  display: flex;\n  padding-top: 16px;\n}\n.vc-chrome-fields {\n  display: flex;\n  margin-left: -6px;\n  flex: 1;\n}\n.vc-chrome-field {\n  padding-left: 6px;\n  width: 100%;\n}\n.vc-chrome-toggle-btn {\n  width: 32px;\n  text-align: right;\n  position: relative;\n}\n.vc-chrome-toggle-icon {\n  margin-right: -4px;\n  margin-top: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n}\n.vc-chrome-toggle-icon-highlight {\n  position: absolute;\n  width: 24px;\n  height: 28px;\n  background: #eee;\n  border-radius: 4px;\n  top: 10px;\n  left: 12px;\n}\n.vc-chrome-hue-wrap {\n  position: relative;\n  height: 10px;\n  margin-bottom: 8px;\n}\n.vc-chrome-alpha-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-chrome-hue-wrap .vc-hue {\n  border-radius: 2px;\n}\n.vc-chrome-alpha-wrap .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  transform: translate(-6px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-chrome-body {\n  padding: 16px 16px 12px;\n  background-color: #fff;\n}\n.vc-chrome-saturation-wrap {\n  width: 100%;\n  padding-bottom: 55%;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.vc-chrome-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-chrome-fields .vc-input__input {\n  font-size: 11px;\n  color: #333;\n  width: 100%;\n  border-radius: 2px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #dadada;\n  height: 21px;\n  text-align: center;\n}\n.vc-chrome-fields .vc-input__label {\n  text-transform: uppercase;\n  font-size: 11px;\n  line-height: 11px;\n  color: #969696;\n  text-align: center;\n  display: block;\n  margin-top: 12px;\n}\n.vc-chrome__disable-alpha .vc-chrome-active-color {\n  width: 18px;\n  height: 18px;\n}\n.vc-chrome__disable-alpha .vc-chrome-color-wrap {\n  width: 30px;\n}\n.vc-chrome__disable-alpha .vc-chrome-hue-wrap {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[n("div",{staticClass:"vc-chrome-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-body"},[n("div",{staticClass:"vc-chrome-controls"},[n("div",{staticClass:"vc-chrome-color-wrap"},[n("div",{staticClass:"vc-chrome-active-color",style:{background:e.activeColor},attrs:{"aria-label":"current color is "+e.colors.hex}}),e._v(" "),e.disableAlpha?e._e():n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-chrome-sliders"},[n("div",{staticClass:"vc-chrome-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-chrome-fields-wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[e.hasAlpha?e._e():n("ed-in",{attrs:{label:"hex",value:e.colors.hex},on:{change:e.inputChange}}),e._v(" "),e.hasAlpha?n("ed-in",{attrs:{label:"hex",value:e.colors.hex8},on:{change:e.inputChange}}):e._e()],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"h",value:e.hsl.h},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"s",value:e.hsl.s},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"l",value:e.hsl.l},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:e.toggleViews}},[n("div",{staticClass:"vc-chrome-toggle-icon"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[n("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(144)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(59),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(146),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Twitter.vue",t.default=f.exports},function(e,t,n){var r=n(145);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("669a48a5",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-twitter {\n  background: #fff;\n  border: 0 solid rgba(0,0,0,0.25);\n  box-shadow: 0 1px 4px rgba(0,0,0,0.25);\n  border-radius: 4px;\n  position: relative;\n}\n.vc-twitter-triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent #fff transparent;\n  position: absolute;\n}\n.vc-twitter-triangle-shadow {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;\n  position: absolute;\n}\n.vc-twitter-body {\n  padding: 15px 9px 9px 15px;\n}\n.vc-twitter .vc-editable-input {\n  position: relative;\n}\n.vc-twitter .vc-editable-input input {\n  width: 100px;\n  font-size: 14px;\n  color: #666;\n  border: 0px;\n  outline: none;\n  height: 28px;\n  box-shadow: inset 0 0 0 1px #F0F0F0;\n  box-sizing: content-box;\n  border-radius: 0 4px 4px 0;\n  float: left;\n  padding: 1px;\n  padding-left: 8px;\n}\n.vc-twitter .vc-editable-input span {\n  display: none;\n}\n.vc-twitter-hash {\n  background: #F0F0F0;\n  height: 30px;\n  width: 30px;\n  border-radius: 4px 0 0 4px;\n  float: left;\n  color: #98A1A4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vc-twitter-swatch {\n  width: 30px;\n  height: 30px;\n  float: left;\n  border-radius: 4px;\n  margin: 0 6px 6px 0;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n}\n.vc-twitter-clear {\n  clear: both;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle {\n  display: none;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {\n  display: none;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle{\n  top: -10px;\n  left: 12px;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  left: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle{\n  top: -10px;\n  right: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  right: 12px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-twitter",class:{"vc-twitter-hide-triangle ":"hide"===e.triangle,"vc-twitter-top-left-triangle ":"top-left"===e.triangle,"vc-twitter-top-right-triangle ":"top-right"===e.triangle},style:{width:"number"==typeof e.width?e.width+"px":e.width}},[n("div",{staticClass:"vc-twitter-triangle-shadow"}),e._v(" "),n("div",{staticClass:"vc-twitter-triangle"}),e._v(" "),n("div",{staticClass:"vc-twitter-body"},[e._l(e.defaultColors,function(t,r){return n("span",{key:r,staticClass:"vc-twitter-swatch",style:{background:t,boxShadow:"0 0 4px "+(e.equal(t)?t:"transparent")},on:{click:function(n){return e.handlerClick(t)}}})}),e._v(" "),n("div",{staticClass:"vc-twitter-hash"},[e._v("#")]),e._v(" "),n("editable-input",{attrs:{label:"#",value:e.hex},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-twitter-clear"})],2)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o}])});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d998":
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__("342f");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var getBuiltIn = __webpack_require__("d066");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e80a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGpickr_vue_vue_type_style_index_0_id_79ffeed8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("582d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGpickr_vue_vue_type_style_index_0_id_79ffeed8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGpickr_vue_vue_type_style_index_0_id_79ffeed8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGpickr_vue_vue_type_style_index_0_id_79ffeed8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var hasOwn = __webpack_require__("1a2d");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternalModule = __webpack_require__("057f");
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = [].splice;
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice.call(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueGpickr", function() { return /* reexport */ VueGpickr; });
__webpack_require__.d(__webpack_exports__, "LinearGradient", function() { return /* reexport */ src_LinearGradient; });
__webpack_require__.d(__webpack_exports__, "vueColor", function() { return /* reexport */ vue_color_min; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"555ee135-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueGpickr.vue?vue&type=template&id=79ffeed8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-gpickr"},[_c('color-picker',{attrs:{"preset-colors":null},model:{value:(_vm.currentColor),callback:function ($$v) {_vm.currentColor=$$v},expression:"currentColor"}}),_c('div',{staticClass:"vue-gpickr-inner-container"},[_c('div',{staticClass:"vue-gpickr-preview-container"},[_c('div',{staticClass:"vue-gpickr-preview",style:(_vm.previewStyle)})]),_c('div',{ref:"stopsContainer",staticClass:"vue-gpickr-stops-container"},[_c('div',{staticClass:"vue-gpickr-stops-preview-container"},[_c('div',{staticClass:"vue-gpickr-stops-preview",style:(_vm.stopsPreviewStyle),on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.addStop($event)}}})]),_vm._l((_vm.stops),function(stop,index){return _c('div',{key:index,staticClass:"vue-gpickr-stop",class:{ active: index == _vm.currentStopIdx },style:(_vm.stopStyle(index)),on:{"mousedown":function($event){$event.stopPropagation();return _vm.handleMouseDown(index, $event)},"touchstart":function($event){$event.stopPropagation();return _vm.handleTouchstart(index, $event)}}})})],2),_c('div',{staticClass:"vue-gpickr-controls-container"},[_c('div',{staticClass:"vue-gpickr-slider-container"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.angle),expression:"angle"}],attrs:{"type":"range","min":"0","max":"360","step":"1"},domProps:{"value":(_vm.angle)},on:{"__r":function($event){_vm.angle=$event.target.value}}}),_c('div',{staticClass:"label"},[_vm._v("Angle")])]),_c('div',{staticClass:"vue-gpickr-input-container"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.angle),expression:"angle"}],attrs:{"type":"text"},domProps:{"value":(_vm.angle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.angle=$event.target.value}}}),_c('div',{staticClass:"label"},[_vm._v("Deg°")])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueGpickr.vue?vue&type=template&id=79ffeed8&scoped=true&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/vue-color/dist/vue-color.min.js
var vue_color_min = __webpack_require__("c345");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("7037");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/checkPrivateRedeclaration.js
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.weak-map.js
var es_weak_map = __webpack_require__("10d1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__("66cb");
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function construct_construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    construct_construct = Reflect.construct;
  } else {
    construct_construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return construct_construct.apply(null, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./src/Gradient.js


















var Gradient_GradientError = /*#__PURE__*/function (_Error) {
  _inherits(GradientError, _Error);

  var _super = _createSuper(GradientError);

  function GradientError(message) {
    var _this;

    _classCallCheck(this, GradientError);

    _this = _super.call(this, message);
    _this.name = "GradientError";
    return _this;
  }

  return GradientError;
}( /*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));

var defaultStops = [['#0359b5', 0], ['#f6ce01', 1]];
var COLOR = 0;
var POSITION = 1;

var _stops = /*#__PURE__*/new WeakMap();

var _limit = /*#__PURE__*/new WeakMap();

var Gradient_Gradient = /*#__PURE__*/function () {
  function Gradient() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$stops = _ref.stops,
        stops = _ref$stops === void 0 ? defaultStops : _ref$stops,
        _ref$limit = _ref.limit,
        limit = _ref$limit === void 0 ? null : _ref$limit;

    _classCallCheck(this, Gradient);

    _classPrivateFieldInitSpec(this, _stops, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _limit, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _stops, stops);

    _classPrivateFieldSet(this, _limit, limit);
  }

  _createClass(Gradient, [{
    key: "stops",
    get: function get() {
      return _classPrivateFieldGet(this, _stops);
    },
    set: function set(value) {
      var error = Gradient._stopArrayValidator(value);

      if (error) {
        throw new Gradient_GradientError("Wrong stops format, ".concat(error));
      }

      _classPrivateFieldSet(this, _stops, value);
    }
  }, {
    key: "limit",
    get: function get() {
      return _classPrivateFieldGet(this, _limit);
    }
  }, {
    key: "addStop",
    value: function addStop(value) {
      if (_classPrivateFieldGet(this, _limit) && _classPrivateFieldGet(this, _stops).length >= _classPrivateFieldGet(this, _limit)) {
        throw new Gradient_GradientError('Too many stop points');
      }

      var error = Gradient._stopPointValidator(value);

      if (error) {
        throw new Gradient_GradientError("Wrong stop format, ".concat(error));
      }

      _classPrivateFieldGet(this, _stops).push(value);
    }
  }, {
    key: "removeStopByIndex",
    value: function removeStopByIndex(index) {
      if (_classPrivateFieldGet(this, _stops).length < 3) {
        throw new Gradient_GradientError('Can\'t remove stop point');
      }

      if (_classPrivateFieldGet(this, _stops).length <= index) {
        throw new Gradient_GradientError('Can\'t remove stop point');
      }

      _classPrivateFieldGet(this, _stops).splice(index, 1);
    }
  }], [{
    key: "_stopPointValidator",
    value: function _stopPointValidator(value) {
      if (!Array.isArray(value)) {
        return 'point must be an array';
      }

      if (value.length !== 2) {
        return 'wrong point format';
      }

      var position = value[POSITION];

      if (typeof position !== 'number') {
        return 'position must be a number';
      }

      if (position !== Number(position)) {
        return 'position must be a number';
      }

      if (position < 0) {
        return 'position must be between 0 and 1';
      }

      if (position > 1) {
        return 'position must be between 0 and 1';
      }

      var color = tinycolor_default()(value[COLOR]);

      if (!color.isValid()) {
        return 'color is invalid';
      }

      return null;
    }
  }, {
    key: "_stopArrayValidator",
    value: function _stopArrayValidator(value) {
      if (!Array.isArray(value)) {
        return 'must be an array';
      }

      if (value.length < 2) {
        return 'wrong array format';
      }

      return null;
    }
  }]);

  return Gradient;
}();


// CONCATENATED MODULE: ./src/LinearGradient.js























var LinearGradient_COLOR = 0;
var LinearGradient_POSITION = 1;

var _type = /*#__PURE__*/new WeakMap();

var _angle = /*#__PURE__*/new WeakMap();

var LinearGradient_LinearGradient = /*#__PURE__*/function (_Gradient) {
  _inherits(LinearGradient, _Gradient);

  var _super = _createSuper(LinearGradient);

  function LinearGradient() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$angle = _ref.angle,
        angle = _ref$angle === void 0 ? 0 : _ref$angle,
        _ref$stops = _ref.stops,
        stops = _ref$stops === void 0 ? undefined : _ref$stops,
        _ref$limit = _ref.limit,
        limit = _ref$limit === void 0 ? undefined : _ref$limit;

    _classCallCheck(this, LinearGradient);

    _this = _super.call(this, {
      stops: stops,
      limit: limit
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _type, {
      writable: true,
      value: 'linear'
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _angle, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _type, 'linear');

    _classPrivateFieldSet(_assertThisInitialized(_this), _angle, angle);

    return _this;
  }

  _createClass(LinearGradient, [{
    key: "angle",
    get: function get() {
      return _classPrivateFieldGet(this, _angle);
    },
    set: function set(value) {
      var error = LinearGradient._angleValidator(value);

      if (error) {
        throw new Gradient_GradientError("Wrong angle value, ".concat(error));
      }

      _classPrivateFieldSet(this, _angle, value);
    }
  }, {
    key: "type",
    get: function get() {
      return _classPrivateFieldGet(this, _type);
    }
  }, {
    key: "toString",
    value: function toString() {
      var colorFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hex8';
      var stops = this.stops.slice().sort(function (a, b) {
        return a[LinearGradient_POSITION] - b[LinearGradient_POSITION];
      }).map(function (stop) {
        return "".concat(tinycolor_default()(stop[LinearGradient_COLOR]).toString(colorFormat), " ").concat((stop[LinearGradient_POSITION] * 100).toFixed(), "%");
      }).join(', ');
      return "linear-gradient(".concat(this.angle, "deg, ").concat(stops, ")");
    }
  }, {
    key: "toRaw",
    value: function toRaw() {
      var colorFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hex8';
      var stops = this.stops.slice().sort(function (a, b) {
        return a[LinearGradient_POSITION] - b[LinearGradient_POSITION];
      }).map(function (stop) {
        stop[LinearGradient_COLOR] = tinycolor_default()(stop[LinearGradient_COLOR]).toString(colorFormat);
        return stop;
      });
      return {
        type: this.type,
        angle: this.angle,
        stops: stops,
        limit: this.limit
      };
    }
  }], [{
    key: "_angleValidator",
    value: function _angleValidator(value) {
      if (typeof value !== 'number') {
        return 'must be a number';
      }

      if (value !== Number(value)) {
        return 'must be a number';
      }

      if (value < 0) {
        return 'must be between 0 and 360';
      }

      if (value > 360) {
        return 'must be between 0 and 360';
      }

      return null;
    }
  }]);

  return LinearGradient;
}(Gradient_Gradient);

/* harmony default export */ var src_LinearGradient = (LinearGradient_LinearGradient);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueGpickr.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var VueGpickrvue_type_script_lang_js_COLOR = 0;
var VueGpickrvue_type_script_lang_js_POSITION = 1;
var REMOVE_TRESHOLD = 50;
/* harmony default export */ var VueGpickrvue_type_script_lang_js_ = ({
  components: {
    colorPicker: vue_color_min["Sketch"]
  },
  props: {
    value: {
      type: src_LinearGradient,
      default: function _default() {
        return new src_LinearGradient();
      }
    }
  },
  data: function data() {
    this.containerBoundingClientRectangle = {};
    return {
      currentStopIdx: 0
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindEventListeners();
  },
  computed: {
    angle: {
      get: function get() {
        return this.value.angle;
      },
      set: function set(val) {
        var degrees = parseInt(val, 10) || 0;

        if (degrees < 0) {
          degrees = 0;
        }

        while (degrees > 360) {
          degrees = 360;
        }

        this.emitInput(degrees, this.stops, this.limit);
      }
    },
    stops: function stops() {
      return this.value.stops.slice().map(function (stop) {
        return _toConsumableArray(stop);
      });
    },
    previewStyle: function previewStyle() {
      return {
        background: this.getGradientString(this.angle)
      };
    },
    stopsPreviewStyle: function stopsPreviewStyle() {
      return {
        background: this.getGradientString(90)
      };
    },
    currentColor: {
      get: function get() {
        return this.stops[this.currentStopIdx][VueGpickrvue_type_script_lang_js_COLOR];
      },
      set: function set(val) {
        this.stops[this.currentStopIdx][VueGpickrvue_type_script_lang_js_COLOR] = val.hex8;
        this.emitInput(this.angle, this.stops, this.limit);
      }
    },
    orderedStops: function orderedStops() {
      return this.stops.slice().sort(function (a, b) {
        return a[VueGpickrvue_type_script_lang_js_POSITION] - b[VueGpickrvue_type_script_lang_js_POSITION];
      });
    },
    limit: function limit() {
      return this.value.limit;
    }
  },
  methods: {
    emitInput: function emitInput(angle, stops, limit) {
      this.$emit('input', new src_LinearGradient({
        angle: angle,
        stops: stops,
        limit: limit
      }));
    },
    getGradientString: function getGradientString(angle) {
      var stops = this.orderedStops.map(function (stop) {
        return "".concat(stop[VueGpickrvue_type_script_lang_js_COLOR].toString(), " ").concat(stop[VueGpickrvue_type_script_lang_js_POSITION] * 100, "%");
      }).join(',');
      return "linear-gradient(".concat(angle, "deg, ").concat(stops, ")");
    },
    setCurrentStopIdx: function setCurrentStopIdx(index) {
      this.currentStopIdx = index;
    },
    stopStyle: function stopStyle(index) {
      var stop = this.stops[index];
      return {
        left: "".concat(stop[VueGpickrvue_type_script_lang_js_POSITION] * 100, "%"),
        color: stop[VueGpickrvue_type_script_lang_js_COLOR].toString()
      };
    },
    addStop: function addStop(event) {
      if (this.limit && this.stops.length >= this.limit) {
        return;
      }

      var position = Math.round(event.offsetX * 100 / event.target.offsetWidth) / 100;
      var index = this.stops.length;
      this.stops.push([this.currentColor, position]);
      this.setCurrentStopIdx(index);
      this.emitInput(this.angle, this.stops, this.limit);
    },
    removeCurrentStop: function removeCurrentStop() {
      this.stops.splice(this.currentStopIdx, 1);

      if (this.currentStopIdx > 0) {
        this.setCurrentStopIdx(this.currentStopIdx - 1);
      }

      this.unbindEventListeners();
      this.emitInput(this.angle, this.stops, this.limit);
    },
    setContainerBoundingClientRectangle: function setContainerBoundingClientRectangle() {
      this.containerBoundingClientRectangle = this.$refs.stopsContainer.getBoundingClientRect();
    },
    handleChange: function handleChange(event) {
      event.preventDefault();
      event.stopPropagation();

      if (this.stops.length > 2) {
        // Gradient must have at least 2 stops
        var y = (event.touches ? event.touches[0].clientY : event.clientY) || 0;
        var verticalDistance = Math.abs(y - this.containerBoundingClientRectangle.bottom);

        if (verticalDistance > REMOVE_TRESHOLD) {
          this.removeCurrentStop();
          return;
        }
      }

      var x = (event.touches ? event.touches[0].clientX : event.clientX) || 0;
      var left = x - this.containerBoundingClientRectangle.left;
      var containerWidth = this.containerBoundingClientRectangle.width;
      var position;

      if (left < 0) {
        position = 0;
      } else if (left > containerWidth) {
        position = 1;
      } else {
        position = Math.round(left * 100 / containerWidth) / 100;
      }

      var previousPosition = this.stops[this.currentStopIdx][VueGpickrvue_type_script_lang_js_POSITION];
      this.stops[this.currentStopIdx][VueGpickrvue_type_script_lang_js_POSITION] = position;

      if (previousPosition != position) {
        this.emitInput(this.angle, this.stops, this.limit);
      }
    },
    handleMouseDown: function handleMouseDown(index) {
      this.setCurrentStopIdx(index);
      this.setContainerBoundingClientRectangle();
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp: function handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
      window.removeEventListener('touchmove', this.handleChange, {
        passive: false
      });
      window.removeEventListener('touchend', this.handleTouchend);
      window.removeEventListener('touchcancel', this.handleTouchend);
    },
    handleTouchstart: function handleTouchstart(index) {
      this.setCurrentStopIdx(index);
      this.setContainerBoundingClientRectangle();
      window.addEventListener('touchmove', this.handleChange, {
        passive: false
      });
      window.addEventListener('touchend', this.handleTouchend);
      window.addEventListener('touchcancel', this.handleTouchend);
    },
    handleTouchend: function handleTouchend() {
      this.unbindEventListeners();
    }
  }
});
// CONCATENATED MODULE: ./src/VueGpickr.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueGpickrvue_type_script_lang_js_ = (VueGpickrvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VueGpickr.vue?vue&type=style&index=0&id=79ffeed8&lang=scss&scoped=true&
var VueGpickrvue_type_style_index_0_id_79ffeed8_lang_scss_scoped_true_ = __webpack_require__("e80a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/VueGpickr.vue






/* normalize component */

var component = normalizeComponent(
  src_VueGpickrvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "79ffeed8",
  null
  
)

/* harmony default export */ var VueGpickr = (component.exports);
// CONCATENATED MODULE: ./src/index.js



/* harmony default export */ var src_0 = (VueGpickr);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=vue-gpickr.umd.js.map