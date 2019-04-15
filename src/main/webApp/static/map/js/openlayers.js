/*!
 *
 *     iclient9-openlayers.(http://iclient.supermapol.com)
 *     Copyright漏 2000-2017 SuperMap Software Co. Ltd
 *     license: Apache-2.0
 *     version: v9.0.0
 *
 */
/******/ (function(modules) { // webpackBootstrap
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
  /******/ 	// identity function for calling harmony imports with the correct context
  /******/ 	__webpack_require__.i = function(value) { return value; };
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
    /******/ 		if(!__webpack_require__.o(exports, name)) {
      /******/ 			Object.defineProperty(exports, name, {
        /******/ 				configurable: false,
        /******/ 				enumerable: true,
        /******/ 				get: getter
        /******/ 			});
      /******/ 		}
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
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 48);
  /******/ })
/************************************************************************/
/******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var SuperMap = window.SuperMap = window.SuperMap || {};
    module.exports = SuperMap;

    /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Util = undefined;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    __webpack_require__(10);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var Util = exports.Util = _SuperMap2.default.Util = _SuperMap2.default.Util || {};
    /**
     * @name Util
     * @memberOf SuperMap
     * @namespace
     * @description common宸ュ叿绫汇€�
     */

    /**
     * @description 澶嶅埗婧愬璞＄殑鎵€鏈夊睘鎬у埌鐩爣瀵硅薄涓婏紝婧愬璞′笂鐨勬病鏈夊畾涔夌殑灞炴€у湪鐩爣瀵硅薄涓婁篃涓嶄細琚缃€�
     * @example
     * 瑕佸鍒禨uperMap.Size瀵硅薄鐨勬墍鏈夊睘鎬у埌鑷畾涔夊璞′笂锛屼娇鐢ㄦ柟娉曞涓�:
     *     var size = new SuperMap.Size(100, 100);
     *     var obj = {}锛�
     *     SuperMap.Util.extend(obj, size);
     * @param destination - {Object} 鐩爣瀵硅薄銆�
     * @param source - {Object} 婧愬璞★紝鍏跺睘鎬у皢琚缃埌鐩爣瀵硅薄涓娿€�
     * @return {Object} 鐩爣瀵硅薄銆�
     */

    _SuperMap2.default.Util.extend = function (destination, source) {
      destination = destination || {};
      if (source) {
        for (var property in source) {
          var value = source[property];
          if (value !== undefined) {
            destination[property] = value;
          }
        }

        /**
         * IE doesn't include the toString property when iterating over an object's
         * properties with the for(property in object) syntax.  Explicitly check if
         * the source has its own toString property.
         */

        /*
         * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
         * prototype object" when calling hawOwnProperty if the source object
         * is an instance of window.Event.
         */

        var sourceIsEvt = typeof window.Event === "function" && source instanceof window.Event;

        if (!sourceIsEvt && source.hasOwnProperty && source.hasOwnProperty("toString")) {
          destination.toString = source.toString;
        }
      }
      return destination;
    };
    /**
     * @description 瀵硅薄鎷疯礉銆�
     * @param des - {Object} 鐩爣瀵硅薄銆�
     * @param soc - {Object} 婧愬璞�
     */
    _SuperMap2.default.Util.copy = function (des, soc) {
      des = des || {};
      var v;
      if (soc) {
        for (var p in des) {
          v = soc[p];
          if (typeof v !== 'undefined') {
            des[p] = v;
          }
        }
      }
    };
    /**
     * @description 閿€姣佸璞★紝灏嗗叾灞炴€х疆绌�
     * @param obj - {Object} 鐩爣瀵硅薄銆�
     */
    _SuperMap2.default.Util.reset = function (obj) {
      obj = obj || {};
      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          if (_typeof(obj[p]) === "object" && obj[p] instanceof Array) {
            for (var i in obj[p]) {
              if (obj[p][i].destroy) {
                obj[p][i].destroy();
              }
            }
            obj[p].length = 0;
          } else if (_typeof(obj[p]) === "object" && obj[p] instanceof Object) {
            if (obj[p].destroy) {
              obj[p].destroy();
            }
          }
          obj[p] = null;
        }
      }
    };

    /**
     * @description 鑾峰彇HTML鍏冪礌鏁扮粍銆�
     * @param argument - {String | HTMLElement | Window}
     * @return {Array<HTMLElement>} HTML鍏冪礌鏁扮粍銆�
     */
    _SuperMap2.default.Util.getElement = function () {
      var elements = [];

      for (var i = 0, len = arguments.length; i < len; i++) {
        var element = arguments[i];
        if (typeof element === 'string') {
          element = document.getElementById(element);
        }
        if (arguments.length === 1) {
          return element;
        }
        elements.push(element);
      }
      return elements;
    };

    /**
     * @description instance of鐨勮法娴忚鍣ㄥ疄鐜般€�
     * @param o - {Object} 瀵硅薄銆�
     * @return {boolean}
     */
    _SuperMap2.default.Util.isElement = function (o) {
      return !!(o && o.nodeType === 1);
    };

    /**
     * @description 鍒ゆ柇涓€涓璞℃槸鍚︽槸鏁扮粍銆�
     * @param a - {Object} 瀵硅薄銆�
     * @return {boolean} 鏄惁鏄暟缁勩€�
     */
    _SuperMap2.default.Util.isArray = function (a) {
      return Object.prototype.toString.call(a) === '[object Array]';
    };

    /**
     * @description 浠庢暟缁勪腑鍒犻櫎鏌愪竴椤广€�
     * @param array - {Array} 鏁扮粍銆�
     * @param item - {Object} 鏁扮粍涓鍒犻櫎鐨勪竴椤广€�
     * @return {Array} 鎵ц鍒犻櫎鎿嶄綔鍚庣殑鏁扮粍銆�
     */
    _SuperMap2.default.Util.removeItem = function (array, item) {
      for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
          array.splice(i, 1);
          //break;more than once??
        }
      }
      return array;
    };

    /**
     * @description 鑾峰彇鏌愬璞″啀鏁扮粍涓殑绱㈠紩鍊笺€�
     * @param array - {Array} 鏁扮粍銆�
     * @param obj - {Object} 瀵硅薄銆�
     * @return {number} 鏌愬璞″啀鏁扮粍涓殑绱㈠紩鍊笺€�
     */
    _SuperMap2.default.Util.indexOf = function (array, obj) {
      if (array == null) {
        return -1;
      } else {
        // use the build-in function if available.
        if (typeof array.indexOf === "function") {
          return array.indexOf(obj);
        } else {
          for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === obj) {
              return i;
            }
          }
          return -1;
        }
      }
    };

    /**
     * @description 淇敼鏌怐OM鍏冪礌鐨勮澶氬睘鎬с€�
     * @param element - {HTMLElement} 寰呬慨鏀圭殑DOM鍏冪礌銆�
     * @param id - {string} DOM鍏冪礌鐨刬d銆�
     * @param px - {SuperMap.Pixel} 鍖呭惈DOM鍏冪礌鐨剆tyle灞炴€х殑left鍜宼op灞炴€с€�
     * @param sz - {SuperMap.Size} 鍖呭惈DOM鍏冪礌鐨剋idth鍜宧eight灞炴€с€�
     * @param position - {string} DOM鍏冪礌鐨刾osition灞炴€с€�
     * @param border - {string} DOM鍏冪礌鐨剆tyle灞炴€х殑border灞炴€с€�
     * @param overflow - {string} DOM鍏冪礌鐨剆tyle灞炴€х殑overflow灞炴€с€�
     * @param opacity - {number} 涓嶉€忔槑搴﹀€笺€傚彇鍊艰寖鍥翠负 (0.0 - 1.0)銆�
     */
    _SuperMap2.default.Util.modifyDOMElement = function (element, id, px, sz, position, border, overflow, opacity) {

      if (id) {
        element.id = id;
      }
      if (px) {
        element.style.left = px.x + "px";
        element.style.top = px.y + "px";
      }
      if (sz) {
        element.style.width = sz.w + "px";
        element.style.height = sz.h + "px";
      }
      if (position) {
        element.style.position = position;
      }
      if (border) {
        element.style.border = border;
      }
      if (overflow) {
        element.style.overflow = overflow;
      }
      if (parseFloat(opacity) >= 0.0 && parseFloat(opacity) < 1.0) {
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
        element.style.opacity = opacity;
      } else if (parseFloat(opacity) === 1.0) {
        element.style.filter = '';
        element.style.opacity = '';
      }
    };

    /**
     * @param params - {Object} 鍙傛暟瀵硅薄銆�
     * @return {string} HTTP鐨凣EI璇锋眰涓殑鍙傛暟瀛楃涓层€�
     * @description 灏嗗弬鏁板璞¤浆鎹负HTTP鐨凣EI璇锋眰涓殑鍙傛暟瀛楃涓层€備緥濡傦細"key1=value1&key2=value2&key3=value3"銆�
     */
    _SuperMap2.default.Util.getParameterString = function (params) {
      var paramsArray = [];

      for (var key in params) {
        var value = params[key];
        if (value != null && typeof value !== 'function') {
          var encodedValue;
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Array) {
            /* value is an array; encode items and separate with "," */
            var encodedItemArray = [];
            var item;
            for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
              item = value[itemIndex];
              encodedItemArray.push(encodeURIComponent(item === null || item === undefined ? "" : item));
            }
            encodedValue = encodedItemArray.join(",");
          } else {
            /* value is a string; simply encode */
            encodedValue = encodeURIComponent(value);
          }
          paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
        }
      }

      return paramsArray.join("&");
    };

    /**
     * @description 缁檜rl杩藉姞鍙傛暟銆�
     * @param url - {string} 寰呰拷鍔犲弬鏁扮殑url瀛楃涓层€�
     * @param paramStr - {string} 寰呰拷鍔犵殑鍙傛暟銆�
     * @return {string} The new url
     */
    _SuperMap2.default.Util.urlAppend = function (url, paramStr) {
      var newUrl = url;
      if (paramStr) {
        var parts = (url + " ").split(/[?&]/);
        newUrl += parts.pop() === " " ? paramStr : parts.length ? "&" + paramStr : "?" + paramStr;
      }
      return newUrl;
    };

    /**
     * @description 涓轰簡閬垮厤娴偣绮惧害閿欒鑰屼繚鐣欑殑鏈夋晥浣嶆暟銆�
     * @type {number}
     * @default 14
     */
    _SuperMap2.default.Util.DEFAULT_PRECISION = 14;

    /**
     * @description 灏嗗瓧绗︿覆浠ユ帴杩戠殑绮惧害杞崲涓烘暟瀛椼€�
     * @param number - {string} 瀛楃涓层€�
     * @param precision - {number} 绮惧害銆�
     * @return {number} 鏁板瓧銆�
     */
    _SuperMap2.default.Util.toFloat = function (number, precision) {
      if (precision == null) {
        precision = _SuperMap2.default.Util.DEFAULT_PRECISION;
      }
      if (typeof number !== "number") {
        number = parseFloat(number);
      }
      return precision === 0 ? number : parseFloat(number.toPrecision(precision));
    };

    /**
     * @description 瑙掑害杞姬搴︺€�
     * @param x - {number} 瑙掑害銆�
     * @return {number} 寮у害銆�
     */
    _SuperMap2.default.Util.rad = function (x) {
      return x * Math.PI / 180;
    };

    /**
     * @description 浠嶶RL瀛楃涓蹭腑瑙ｆ瀽鍑哄弬鏁板璞°€�
     * @param url - {string} url銆�
     * @return {Object} 瑙ｆ瀽鍑虹殑鍙傛暟瀵硅薄銆�
     */
    _SuperMap2.default.Util.getParameters = function (url) {
      // if no url specified, take it from the location bar
      url = url === null || url === undefined ? window.location.href : url;

      //parse out parameters portion of url string
      var paramsString = "";
      if (_SuperMap2.default.String.contains(url, '?')) {
        var start = url.indexOf('?') + 1;
        var end = _SuperMap2.default.String.contains(url, "#") ? url.indexOf('#') : url.length;
        paramsString = url.substring(start, end);
      }

      var parameters = {};
      var pairs = paramsString.split(/[&;]/);
      for (var i = 0, len = pairs.length; i < len; ++i) {
        var keyValue = pairs[i].split('=');
        if (keyValue[0]) {

          var key = keyValue[0];
          try {
            key = decodeURIComponent(key);
          } catch (err) {
            key = unescape(key);
          }

          // being liberal by replacing "+" with " "
          var value = (keyValue[1] || '').replace(/\+/g, " ");

          try {
            value = decodeURIComponent(value);
          } catch (err) {
            value = unescape(value);
          }

          // follow OGC convention of comma delimited values
          value = value.split(",");

          //if there's only one value, do not return as array
          if (value.length == 1) {
            value = value[0];
          }

          parameters[key] = value;
        }
      }
      return parameters;
    };

    /**
     * @description 涓嶆柇閫掑璁℃暟鍙橀噺锛岀敤浜庣敓鎴愬敮涓€ID銆�
     * @type {number}
     * @default 0
     */
    _SuperMap2.default.Util.lastSeqID = 0;

    /**
     * @description 鍒涘缓鍞竴ID鍊笺€�
     * @param prefix {string} 鍓嶇紑銆�
     * @return {string} 鍞竴鐨処D鍊笺€�
     */
    _SuperMap2.default.Util.createUniqueID = function (prefix) {
      if (prefix == null) {
        prefix = "id_";
      }
      _SuperMap2.default.Util.lastSeqID += 1;
      return prefix + _SuperMap2.default.Util.lastSeqID;
    };

    /**
     * @memberOf SuperMap
     * @description 姣忓崟浣嶇殑鑻卞昂鏁般€�
     * @type {Object}
     * @constant
     */
    _SuperMap2.default.INCHES_PER_UNIT = {
      'inches': 1.0,
      'ft': 12.0,
      'mi': 63360.0,
      'm': 39.3701,
      'km': 39370.1,
      'dd': 4374754,
      'yd': 36
    };
    _SuperMap2.default.INCHES_PER_UNIT["in"] = _SuperMap2.default.INCHES_PER_UNIT.inches;
    _SuperMap2.default.INCHES_PER_UNIT["degrees"] = _SuperMap2.default.INCHES_PER_UNIT.dd;
    _SuperMap2.default.INCHES_PER_UNIT["nmi"] = 1852 * _SuperMap2.default.INCHES_PER_UNIT.m;

// Units from CS-Map
    _SuperMap2.default.METERS_PER_INCH = 0.02540005080010160020;
    _SuperMap2.default.Util.extend(_SuperMap2.default.INCHES_PER_UNIT, {
      "Inch": _SuperMap2.default.INCHES_PER_UNIT.inches,
      "Meter": 1.0 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9001
      "Foot": 0.30480060960121920243 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9003
      "IFoot": 0.30480000000000000000 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9002
      "ClarkeFoot": 0.3047972651151 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9005
      "SearsFoot": 0.30479947153867624624 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9041
      "GoldCoastFoot": 0.30479971018150881758 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9094
      "IInch": 0.02540000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "MicroInch": 0.00002540000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "Mil": 0.00000002540000000000 / _SuperMap2.default.METERS_PER_INCH,
      "Centimeter": 0.01000000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "Kilometer": 1000.00000000000000000000 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9036
      "Yard": 0.91440182880365760731 / _SuperMap2.default.METERS_PER_INCH,
      "SearsYard": 0.914398414616029 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9040
      "IndianYard": 0.91439853074444079983 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9084
      "IndianYd37": 0.91439523 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9085
      "IndianYd62": 0.9143988 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9086
      "IndianYd75": 0.9143985 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9087
      "IndianFoot": 0.30479951 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9080
      "IndianFt37": 0.30479841 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9081
      "IndianFt62": 0.3047996 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9082
      "IndianFt75": 0.3047995 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9083
      "Mile": 1609.34721869443738887477 / _SuperMap2.default.METERS_PER_INCH,
      "IYard": 0.91440000000000000000 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9096
      "IMile": 1609.34400000000000000000 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9093
      "NautM": 1852.00000000000000000000 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9030
      "Lat-66": 110943.316488932731 / _SuperMap2.default.METERS_PER_INCH,
      "Lat-83": 110946.25736872234125 / _SuperMap2.default.METERS_PER_INCH,
      "Decimeter": 0.10000000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "Millimeter": 0.00100000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "Dekameter": 10.00000000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "Decameter": 10.00000000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "Hectometer": 100.00000000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "GermanMeter": 1.0000135965 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9031
      "CaGrid": 0.999738 / _SuperMap2.default.METERS_PER_INCH,
      "ClarkeChain": 20.1166194976 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9038
      "GunterChain": 20.11684023368047 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9033
      "BenoitChain": 20.116782494375872 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9062
      "SearsChain": 20.11676512155 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9042
      "ClarkeLink": 0.201166194976 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9039
      "GunterLink": 0.2011684023368047 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9034
      "BenoitLink": 0.20116782494375872 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9063
      "SearsLink": 0.2011676512155 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9043
      "Rod": 5.02921005842012 / _SuperMap2.default.METERS_PER_INCH,
      "IntnlChain": 20.1168 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9097
      "IntnlLink": 0.201168 / _SuperMap2.default.METERS_PER_INCH, //EPSG:9098
      "Perch": 5.02921005842012 / _SuperMap2.default.METERS_PER_INCH,
      "Pole": 5.02921005842012 / _SuperMap2.default.METERS_PER_INCH,
      "Furlong": 201.1684023368046 / _SuperMap2.default.METERS_PER_INCH,
      "Rood": 3.778266898 / _SuperMap2.default.METERS_PER_INCH,
      "CapeFoot": 0.3047972615 / _SuperMap2.default.METERS_PER_INCH,
      "Brealey": 375.00000000000000000000 / _SuperMap2.default.METERS_PER_INCH,
      "ModAmFt": 0.304812252984505969011938 / _SuperMap2.default.METERS_PER_INCH,
      "Fathom": 1.8288 / _SuperMap2.default.METERS_PER_INCH,
      "NautM-UK": 1853.184 / _SuperMap2.default.METERS_PER_INCH,
      "50kilometers": 50000.0 / _SuperMap2.default.METERS_PER_INCH,
      "150kilometers": 150000.0 / _SuperMap2.default.METERS_PER_INCH
    });

//unit abbreviations supported by PROJ.4
    _SuperMap2.default.Util.extend(_SuperMap2.default.INCHES_PER_UNIT, {
      "mm": _SuperMap2.default.INCHES_PER_UNIT["Meter"] / 1000.0,
      "cm": _SuperMap2.default.INCHES_PER_UNIT["Meter"] / 100.0,
      "dm": _SuperMap2.default.INCHES_PER_UNIT["Meter"] * 100.0,
      "km": _SuperMap2.default.INCHES_PER_UNIT["Meter"] * 1000.0,
      "kmi": _SuperMap2.default.INCHES_PER_UNIT["nmi"], //International Nautical Mile
      "fath": _SuperMap2.default.INCHES_PER_UNIT["Fathom"], //International Fathom
      "ch": _SuperMap2.default.INCHES_PER_UNIT["IntnlChain"], //International Chain
      "link": _SuperMap2.default.INCHES_PER_UNIT["IntnlLink"], //International Link
      "us-in": _SuperMap2.default.INCHES_PER_UNIT["inches"], //U.S. Surveyor's Inch
      "us-ft": _SuperMap2.default.INCHES_PER_UNIT["Foot"], //U.S. Surveyor's Foot
      "us-yd": _SuperMap2.default.INCHES_PER_UNIT["Yard"], //U.S. Surveyor's Yard
      "us-ch": _SuperMap2.default.INCHES_PER_UNIT["GunterChain"], //U.S. Surveyor's Chain
      "us-mi": _SuperMap2.default.INCHES_PER_UNIT["Mile"], //U.S. Surveyor's Statute Mile
      "ind-yd": _SuperMap2.default.INCHES_PER_UNIT["IndianYd37"], //Indian Yard
      "ind-ft": _SuperMap2.default.INCHES_PER_UNIT["IndianFt37"], //Indian Foot
      "ind-ch": 20.11669506 / _SuperMap2.default.METERS_PER_INCH //Indian Chain
    });

    /**
     * @memberOf SuperMap
     * @description 鍒嗚鲸鐜囦笌姣斾緥灏轰箣闂磋浆鎹㈢殑甯搁噺锛岄粯璁ゅ€�96銆�
     * @type {Object}
     * @default 96
     */
    _SuperMap2.default.DOTS_PER_INCH = 96;

    /**
     * @param scale - {number}
     * @return {number}
     */
    _SuperMap2.default.Util.normalizeScale = function (scale) {
      var normScale = scale > 1.0 ? 1.0 / scale : scale;
      return normScale;
    };

    /**
     * @param scale - {number} 姣斾緥灏恒€�
     * @param units - {string} 姣斾緥灏哄崟浣嶃€�
     * @return {number} 鍒嗚鲸鐜囥€�
     */
    _SuperMap2.default.Util.getResolutionFromScale = function (scale, units) {
      var resolution;
      if (scale) {
        if (units == null) {
          units = "degrees";
        }
        var normScale = _SuperMap2.default.Util.normalizeScale(scale);
        resolution = 1 / (normScale * _SuperMap2.default.INCHES_PER_UNIT[units] * _SuperMap2.default.DOTS_PER_INCH);
      }
      return resolution;
    };

    /**
     * @description 鍒嗚鲸鐜囪浆姣斾緥灏恒€�
     * @param resolution - {number} 鍒嗚鲸鐜囥€�
     * @param units - {string} 鍒嗚鲸鐜囧崟浣嶃€�
     * @return {number} 姣斾緥灏恒€�
     */
    _SuperMap2.default.Util.getScaleFromResolution = function (resolution, units) {

      if (units == null) {
        units = "degrees";
      }

      var scale = resolution * _SuperMap2.default.INCHES_PER_UNIT[units] * _SuperMap2.default.DOTS_PER_INCH;
      return scale;
    };

    /**
     * @memberOf SuperMap
     * @description 濡傛灉userAgent鎹曡幏鍒版祻瑙堝櫒浣跨敤鐨勬槸Gecko寮曟搸鍒欒繑鍥瀟rue銆�
     * @constant
     */
    _SuperMap2.default.IS_GECKO = function () {
      var ua = navigator.userAgent.toLowerCase();
      return ua.indexOf("webkit") === -1 && ua.indexOf("gecko") !== -1;
    }();

    /**
     * @memberOf SuperMap
     * @description 娴忚鍣ㄥ悕绉帮紝渚濊禆浜巙serAgent灞炴€э紝BROWSER_NAME鍙互鏄┖锛屾垨鑰呬互涓嬫祻瑙堝櫒锛�
     *     * "opera" -- Opera
     *     * "msie"  -- Internet Explorer
     *     * "safari" -- Safari
     *     * "firefox" -- Firefox
     *     * "mozilla" -- Mozilla
     * @constant
     */
    _SuperMap2.default.Browser = function () {
      var name = '',
          version = '',
          device = 'pc',
          uaMatch;
      //浠ヤ笅杩涜娴嬭瘯
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("msie") > -1 || ua.indexOf("trident") > -1 && ua.indexOf("rv") > -1) {
        name = 'msie';
        uaMatch = ua.match(/msie ([\d.]+)/) || ua.match(/rv:([\d.]+)/);
      } else if (ua.indexOf("chrome") > -1) {
        name = 'chrome';
        uaMatch = ua.match(/chrome\/([\d.]+)/);
      } else if (ua.indexOf("firefox") > -1) {
        name = 'firefox';
        uaMatch = ua.match(/firefox\/([\d.]+)/);
      } else if (ua.indexOf("opera") > -1) {
        name = 'opera';
        uaMatch = ua.match(/version\/([\d.]+)/);
      } else if (ua.indexOf("safari") > -1) {
        name = 'safari';
        uaMatch = ua.match(/version\/([\d.]+)/);
      }
      version = uaMatch ? uaMatch[1] : '';

      if (ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1 || ua.indexOf("iphone") > -1) {
        device = 'apple';
      } else if (ua.indexOf("android") > -1) {
        uaMatch = ua.match(/version\/([\d.]+)/);
        version = uaMatch ? uaMatch[1] : '';
        device = 'android';
      }
      return { name: name, version: version, device: device };
    }();

    /**
     * @description 鑾峰彇娴忚鍣ㄧ浉鍏充俊鎭€傛敮鎸佺殑娴忚鍣ㄥ寘鎷細Opera锛孖nternet Explorer锛孲afari锛孎irefox銆�
     * @return {Object} 鑾峰彇娴忚鍣ㄥ悕绉般€佺増鏈€佽澶囧悕绉般€傚搴旂殑灞炴€у垎鍒负 name, version, device銆�
     */
    _SuperMap2.default.Util.getBrowser = function () {
      return _SuperMap2.default.Browser;
    };

    /**
     * @description 娴忚鍣ㄦ槸鍚︽敮鎸丆anvas銆�
     * @return {boolean} 鑾峰彇褰撳墠娴忚鍣ㄦ槸鍚︽敮鎸� HTML5 Canvas 銆�
     */
    _SuperMap2.default.Util.isSupportCanvas = function () {
      var checkRes = true,
          broz = _SuperMap2.default.Util.getBrowser();
      if (document.createElement("canvas").getContext) {
        if (broz.name === 'firefox' && parseFloat(broz.version) < 5) {
          checkRes = false;
        }
        if (broz.name === 'safari' && parseFloat(broz.version) < 4) {
          checkRes = false;
        }
        if (broz.name === 'opera' && parseFloat(broz.version) < 10) {
          checkRes = false;
        }
        if (broz.name === 'msie' && parseFloat(broz.version) < 9) {
          checkRes = false;
        }
      } else {
        checkRes = false;
      }
      return checkRes;
    }();

    /**
     * @description 鍒ゆ柇锛涙祻瑙堝櫒鏄惁鏀寔Canvas銆�
     * @return {boolean} 鑾峰彇褰撳墠娴忚鍣ㄦ槸鍚︽敮鎸� HTML5 Canvas 銆�
     */
    _SuperMap2.default.Util.supportCanvas = function () {
      return _SuperMap2.default.Util.isSupportCanvas;
    };

//灏嗘湇鍔＄鐨勫湴鍥惧崟浣嶈浆鎴怱uperMap鐨勫湴鍥惧崟浣�
    _SuperMap2.default.INCHES_PER_UNIT["degree"] = _SuperMap2.default.INCHES_PER_UNIT.dd;
    _SuperMap2.default.INCHES_PER_UNIT["meter"] = _SuperMap2.default.INCHES_PER_UNIT.m;
    _SuperMap2.default.INCHES_PER_UNIT["foot"] = _SuperMap2.default.INCHES_PER_UNIT.ft;
    _SuperMap2.default.INCHES_PER_UNIT["inch"] = _SuperMap2.default.INCHES_PER_UNIT.inches;
    _SuperMap2.default.INCHES_PER_UNIT["mile"] = _SuperMap2.default.INCHES_PER_UNIT.mi;
    _SuperMap2.default.INCHES_PER_UNIT["kilometer"] = _SuperMap2.default.INCHES_PER_UNIT.km;
    _SuperMap2.default.INCHES_PER_UNIT["yard"] = _SuperMap2.default.INCHES_PER_UNIT.yd;

    /**
     * @description 鍒ゆ柇涓€涓� URL 璇锋眰鏄惁鍦ㄥ綋鍓嶅煙涓€�
     * @param url - {string}  URL 璇锋眰瀛楃涓层€�
     * @return {boolean} URL璇锋眰鏄惁鍦ㄥ綋鍓嶅煙涓€�
     */
    _SuperMap2.default.Util.isInTheSameDomain = function (url) {
      if (!url) {
        return true;
      }
      var index = url.indexOf("//");
      var documentUrl = document.location.toString();
      var documentIndex = documentUrl.indexOf("//");
      if (index === -1) {
        return true;
      } else {
        var protocol;
        var substring = protocol = url.substring(0, index);
        var documentSubString = documentUrl.substring(documentIndex + 2);
        documentIndex = documentSubString.indexOf("/");
        var documentPortIndex = documentSubString.indexOf(":");
        var documentDomainWithPort = documentSubString.substring(0, documentIndex);
        var documentPort;

        var documentprotocol = document.location.protocol;
        if (documentPortIndex !== -1) {
          documentPort = +documentSubString.substring(documentPortIndex, documentIndex);
        } else {
          documentDomainWithPort += ':' + (documentprotocol.toLowerCase() === 'http:' ? 80 : 443);
        }
        if (documentprotocol.toLowerCase() !== substring.toLowerCase()) {
          return false;
        }
        substring = url.substring(index + 2);
        var portIndex = substring.indexOf(":");
        index = substring.indexOf("/");
        var domainWithPort = substring.substring(0, index);
        var domain;
        if (portIndex !== -1) {
          domain = substring.substring(0, portIndex);
        } else {
          domain = substring.substring(0, index);
          domainWithPort += ':' + (protocol.toLowerCase() === 'http:' ? 80 : 443);
        }
        var documentDomain = document.domain;
        if (domain === documentDomain && domainWithPort === documentDomainWithPort) {
          return true;
        }
      }
      return false;
    };

    /**
     * @description 璁＄畻iServer鏈嶅姟鐨凴EST鍥惧眰鐨勬樉绀哄垎杈ㄧ巼锛岄渶瑕佷粠iServer鐨凴EST鍥惧眰琛ㄨ堪涓幏鍙杤iewBounds銆乿iewer銆乻cale銆乧oordUnit銆乨atumAxis 浜斾釜鍙傛暟锛屾潵杩涜璁＄畻銆�
     * @param viewBounds - {SuperMap.Bounds} 鍦板浘鐨勫弬鐓у彲瑙嗚寖鍥达紝鍗冲湴鍥惧垵濮嬪寲鏃堕粯璁ょ殑鍦板浘鏄剧ず鑼冨洿銆�
     * @param viewer - {SuperMap.Size} 鍦板浘鍒濆鍖栨椂榛樿鐨勫湴鍥惧浘鐗囩殑灏哄銆�
     * @param scale - {number} 鍦板浘鍒濆鍖栨椂榛樿鐨勬樉绀烘瘮渚嬪昂銆�
     * @param coordUnit - {string} 鎶曞奖鍧愭爣绯荤粺鐨勫湴鍥惧崟浣嶃€�
     * @param datumAxis - {number} 鍦扮悊鍧愭爣绯荤粺妞悆浣撻暱鍗婅酱銆傜敤鎴疯嚜瀹氫箟鍦板浘鐨凮ptions鏃讹紝鑻ユ湭鎸囧畾璇ュ弬鏁扮殑鍊硷紝鍒欑郴缁熼粯璁や负WGS84鍙傝€冪郴鐨勬き鐞冧綋闀垮崐杞�6378137銆�
     * @return {number} 杩斿洖鍥惧眰鏄剧ず鍒嗚鲸鐜囥€�
     */
    _SuperMap2.default.Util.calculateDpi = function (viewBounds, viewer, scale, coordUnit, datumAxis) {
      //10000 鏄� 0.1姣背涓庣背鐨勮浆鎹€侱PI鐨勮绠楀叕寮忥細Viewer / DPI *  0.0254 * 10000 = ViewBounds * scale 锛屽叕寮忎腑鐨�10000鏄负浜嗘彁楂樿绠楃粨鏋滅殑绮惧害锛屼互涓嬪嚭鐜扮殑ratio鐨嗕负濡傛銆�
      if (!viewBounds || !viewer || !scale) {
        return;
      }
      var ratio = 10000,
          rvbWidth = viewBounds.getWidth(),
          rvbHeight = viewBounds.getHeight(),
          rvWidth = viewer.w,
          rvHeight = viewer.h;
      //鐢ㄦ埛鑷畾涔夊湴鍥剧殑Options鏃讹紝鑻ユ湭鎸囧畾璇ュ弬鏁扮殑鍊硷紝鍒欑郴缁熼粯璁や负6378137绫筹紝鍗砏GS84鍙傝€冪郴鐨勬き鐞冧綋闀垮崐杞淬€�
      datumAxis = datumAxis || 6378137;
      coordUnit = coordUnit || "degrees";
      if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
        var num1 = rvbWidth / rvWidth,
            num2 = rvbHeight / rvHeight,
            resolution = num1 > num2 ? num1 : num2,
            dpi = 0.0254 * ratio / resolution / scale / (Math.PI * 2 * datumAxis / 360) / ratio;
        return dpi;
      } else {
        var resolution = rvbWidth / rvWidth,
            dpi = 0.0254 * ratio / resolution / scale / ratio;
        return dpi;
      }
    };

    /**
     * @description 灏嗗璞¤浆鎹㈡垚 JSON 瀛楃涓层€�
     * @param obj - {Object} 瑕佽浆鎹㈡垚 JSON 鐨� Object 瀵硅薄銆�
     * @return {string} 杩斿洖杞崲鍚庣殑 JSON 瀵硅薄銆�
     */
    _SuperMap2.default.Util.toJSON = function (obj) {
      var objInn = obj;
      if (objInn == null) {
        return null;
      }
      switch (objInn.constructor) {
        case String:
          //s = "'" + str.replace(/(["\\])/g, "\\$1") + "'";   string鍚湁鍗曞紩鍙峰嚭閿�
          objInn = '"' + objInn.replace(/(["\\])/g, '\\$1') + '"';
          objInn = objInn.replace(/\n/g, "\\n");
          objInn = objInn.replace(/\r/g, "\\r");
          objInn = objInn.replace("<", "&lt;");
          objInn = objInn.replace(">", "&gt;");
          objInn = objInn.replace(/%/g, "%25");
          objInn = objInn.replace(/&/g, "%26");
          return objInn;
        case Array:
          var arr = [];
          for (var i = 0, len = objInn.length; i < len; i++) {
            arr.push(_SuperMap2.default.Util.toJSON(objInn[i]));
          }
          return "[" + arr.join(",") + "]";
        case Number:
          return isFinite(objInn) ? String(objInn) : null;
        case Boolean:
          return String(objInn);
        case Date:
          var dateStr = "{" + "'__type':\"System.DateTime\"," + "'Year':" + objInn.getFullYear() + "," + "'Month':" + (objInn.getMonth() + 1) + "," + "'Day':" + objInn.getDate() + "," + "'Hour':" + objInn.getHours() + "," + "'Minute':" + objInn.getMinutes() + "," + "'Second':" + objInn.getSeconds() + "," + "'Millisecond':" + objInn.getMilliseconds() + "," + "'TimezoneOffset':" + objInn.getTimezoneOffset() + "}";
          return dateStr;
        default:
          if (objInn["toJSON"] != null && typeof objInn["toJSON"] === "function") {
            return objInn.toJSON();
          }
          if ((typeof objInn === 'undefined' ? 'undefined' : _typeof(objInn)) === "object") {
            if (objInn.length) {
              var arr = [];
              for (var i = 0, len = objInn.length; i < len; i++) {
                arr.push(_SuperMap2.default.Util.toJSON(objInn[i]));
              }return "[" + arr.join(",") + "]";
            }
            var arr = [];
            for (var attr in objInn) {
              //涓鸿В鍐砈uperMap.Geometry绫诲瀷澶磈son鏃跺爢鏍堟孩鍑虹殑闂锛宎ttr == "parent"鏃朵笉杩涜json杞崲
              if (typeof objInn[attr] !== "function" && attr !== "CLASS_NAME" && attr !== "parent") {
                arr.push("'" + attr + "':" + _SuperMap2.default.Util.toJSON(objInn[attr]));
              }
            }

            if (arr.length > 0) {
              return "{" + arr.join(",") + "}";
            } else {
              return "{}";
            }
          }
          return objInn.toString();
      }
    };

    /**
     * @description 鏍规嵁姣斾緥灏哄拰dpi璁＄畻灞忓箷鍒嗚鲸鐜囥€�
     * @param scale - {number} 姣斾緥灏恒€�
     * @param dpi - {number} 鍥惧儚鍒嗚鲸鐜囷紝琛ㄧず姣忚嫳瀵稿唴鐨勫儚绱犱釜鏁般€�
     * @param coordUnit - {string} 鎶曞奖鍧愭爣绯荤粺鐨勫湴鍥惧崟浣嶃€�
     * @param datumAxis - {number} 鍦扮悊鍧愭爣绯荤粺妞悆浣撻暱鍗婅酱銆傜敤鎴疯嚜瀹氫箟鍦板浘鐨凮ptions鏃讹紝鑻ユ湭鎸囧畾璇ュ弬鏁扮殑鍊硷紝鍒橠PI榛樿鎸夌収WGS84鍙傝€冪郴鐨勬き鐞冧綋闀垮崐杞�6378137鏉ヨ绠椼€�
     * @return {number} 杩斿洖褰撳墠姣斾緥灏轰笅鐨勫睆骞曞垎杈ㄧ巼銆�
     */
    _SuperMap2.default.Util.getResolutionFromScaleDpi = function (scale, dpi, coordUnit, datumAxis) {
      var resolution = null,
          ratio = 10000;
      //鐢ㄦ埛鑷畾涔夊湴鍥剧殑Options鏃讹紝鑻ユ湭鎸囧畾璇ュ弬鏁扮殑鍊硷紝鍒欑郴缁熼粯璁や负6378137绫筹紝鍗砏GS84鍙傝€冪郴鐨勬き鐞冧綋闀垮崐杞淬€�
      datumAxis = datumAxis || 6378137;
      coordUnit = coordUnit || "";
      if (scale > 0 && dpi > 0) {
        scale = _SuperMap2.default.Util.normalizeScale(scale);
        if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
          //scale = SuperMap.Util.normalizeScale(scale);
          resolution = 0.0254 * ratio / dpi / scale / (Math.PI * 2 * datumAxis / 360) / ratio;
          return resolution;
        } else {
          resolution = 0.0254 * ratio / dpi / scale / ratio;
          return resolution;
        }
      }
      return -1;
    };

    /**
     * @description 鏍规嵁resolution銆乨pi銆乧oordUnit鍜宒atumAxis璁＄畻姣斾緥灏恒€�
     * @param resolution - {number} 鐢ㄤ簬璁＄畻姣斾緥灏虹殑鍦板浘鍒嗚鲸鐜囥€�
     * @param dpi - {number} 鍥惧儚鍒嗚鲸鐜囷紝琛ㄧず姣忚嫳瀵稿唴鐨勫儚绱犱釜鏁般€�
     * @param coordUnit - {string} 鎶曞奖鍧愭爣绯荤粺鐨勫湴鍥惧崟浣嶃€�
     * @param datumAxis - {number} 鍦扮悊鍧愭爣绯荤粺妞悆浣撻暱鍗婅酱銆傜敤鎴疯嚜瀹氫箟鍦板浘鐨凮ptions鏃讹紝鑻ユ湭鎸囧畾璇ュ弬鏁扮殑鍊硷紝鍒橠PI榛樿鎸夌収WGS84鍙傝€冪郴鐨勬き鐞冧綋闀垮崐杞�6378137鏉ヨ绠椼€�
     * @return {number} 杩斿洖褰撳墠灞忓箷鍒嗚鲸鐜囦笅鐨勬瘮渚嬪昂銆�
     */
    _SuperMap2.default.Util.getScaleFromResolutionDpi = function (resolution, dpi, coordUnit, datumAxis) {
      var scale = null,
          ratio = 10000;
      //鐢ㄦ埛鑷畾涔夊湴鍥剧殑Options鏃讹紝鑻ユ湭鎸囧畾璇ュ弬鏁扮殑鍊硷紝鍒欑郴缁熼粯璁や负6378137绫筹紝鍗砏GS84鍙傝€冪郴鐨勬き鐞冧綋闀垮崐杞淬€�
      datumAxis = datumAxis || 6378137;
      coordUnit = coordUnit || "";
      if (resolution > 0 && dpi > 0) {
        if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
          scale = 0.0254 * ratio / dpi / resolution / (Math.PI * 2 * datumAxis / 360) / ratio;
          return scale;
        } else {
          scale = 0.0254 * ratio / dpi / resolution / ratio;
          return scale;
        }
      }
      return -1;
    };

    /**
     * @description 杞崲鏌ヨ缁撴灉銆�
     * @param result - {Object} 鏌ヨ缁撴灉銆�
     * @return {Object} 杞崲鍚庣殑鏌ヨ缁撴灉銆�
     */
    _SuperMap2.default.Util.transformResult = function (result) {
      if (result.responseText && typeof result.responseText === "string") {
        //鏀寔JSON瀵硅薄鐨勬祻瑙堝櫒Firefox 3.1 + 锛孖E 8 RC1 +
        if (typeof JSON != 'undefined' && JSON.parse) {
          result = JSON.parse(result.responseText);
        } else {
          result = eval("(" + result.responseText + ")");
        }
      }
      return result;
    };

    /**
     * @description 灞炴€ф嫹璐濓紝涓嶆嫹璐濇柟娉曠被鍚�(CLASS_NAME)绛夈€�
     * @param destination - {Object} 鎷疯礉鐩爣銆�
     * @param source - {Object} 婧愬璞°€�
     *
     */
    _SuperMap2.default.Util.copyAttributes = function (destination, source) {
      destination = destination || {};
      if (source) {
        for (var property in source) {
          var value = source[property];
          if (value !== undefined && property !== "CLASS_NAME" && typeof value !== "function") {
            destination[property] = value;
          }
        }
      }
      return destination;
    };

    /**
     * @description 灏嗘簮瀵硅薄涓婄殑灞炴€ф嫹璐濆埌鐩爣瀵硅薄涓娿€傦紙涓嶆嫹璐� CLASS_NAME 鍜屾柟娉曪級
     * @param destination - {Object} 鐩爣瀵硅薄銆�
     * @param source - {Object} 婧愬璞°€�
     * @param clip - {Array<string>} 婧愬璞′腑绂佹鎷疯礉鍒扮洰鏍囧璞＄殑灞炴€э紝鐩殑鏄槻姝㈢洰鏍囧璞′笂涓嶅彲淇敼鐨勫睘鎬ц绡℃敼銆�
     *
     */
    _SuperMap2.default.Util.copyAttributesWithClip = function (destination, source, clip) {
      destination = destination || {};
      if (source) {
        for (var property in source) {
          //鍘绘帀绂佹鎷疯礉鐨勫睘鎬�
          var isInClip = false;
          if (clip && clip.length) {
            for (var i = 0, len = clip.length; i < len; i++) {
              if (property === clip[i]) {
                isInClip = true;
                break;
              }
            }
          }
          if (isInClip === true) {
            continue;
          }

          var value = source[property];
          if (value !== undefined && property !== "CLASS_NAME" && typeof value !== "function") {
            destination[property] = value;
          }
        }
      }
      return destination;
    };

    /**
     * @description 鍏嬮殕涓€浠絆bject瀵硅薄
     * @param obj - {Object}  闇€瑕佸厠闅嗙殑瀵硅薄銆�
     * @return {Object} 杩斿洖瀵硅薄鐨勬嫹璐濆璞★紝娉ㄦ剰鏄柊鐨勫璞★紝涓嶆槸鎸囧悜銆�
     */
    _SuperMap2.default.Util.cloneObject = function (obj) {
      // Handle the 3 simple types, and null or undefined
      if (null === obj || "object" !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;

      // Handle Date
      if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
      }

      // Handle Array
      if (obj instanceof Array) {
        var copy = obj.slice(0);
        return copy;
      }

      // Handle Object
      if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = _SuperMap2.default.Util.cloneObject(obj[attr]);
          }
        }
        return copy;
      }

      throw new Error("Unable to copy obj! Its type isn't supported.");
    };

    /**
     * @description 鍒ゆ柇涓ゆ潯绾挎鏄笉鏄湁浜ょ偣銆�
     * @param a1 - {SuperMap.Geometry.Point}  绗竴鏉＄嚎娈电殑璧峰鑺傜偣銆�
     * @param a2 - {SuperMap.Geometry.Point}  绗竴鏉＄嚎娈电殑缁撴潫鑺傜偣銆�
     * @param b1 - {SuperMap.Geometry.Point}  绗簩鏉＄嚎娈电殑璧峰鑺傜偣銆�
     * @param b2 - {SuperMap.Geometry.Point}  绗簩鏉＄嚎娈电殑缁撴潫鑺傜偣銆�
     * @return {Object} 濡傛灉鐩镐氦杩斿洖浜ょ偣锛屽鏋滀笉鐩镐氦杩斿洖涓ゆ潯绾挎鐨勪綅缃叧绯汇€�
     */
    _SuperMap2.default.Util.lineIntersection = function (a1, a2, b1, b2) {
      var intersectValue = null;
      var k1;
      var k2;
      var b = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
      var a = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
      var ab = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
      //ab==0浠ｈ〃涓ゆ潯绾挎柇鐨勬枩鐜囦竴鏍�
      if (ab != 0) {
        k1 = b / ab;
        k2 = a / ab;

        if (k1 >= 0 && k2 <= 1 && k1 <= 1 && k2 >= 0) {
          intersectValue = new _SuperMap2.default.Geometry.Point(a1.x + k1 * (a2.x - a1.x), a1.y + k1 * (a2.y - a1.y));
        } else {
          intersectValue = "No Intersection";
        }
      } else {

        if (b == 0 && a == 0) {
          var maxy = Math.max(a1.y, a2.y);
          var miny = Math.min(a1.y, a2.y);
          var maxx = Math.max(a1.x, a2.x);
          var minx = Math.min(a1.x, a2.x);
          if ((b1.y >= miny && b1.y <= maxy || b2.y >= miny && b2.y <= maxy) && b1.x >= minx && b1.x <= maxx || b2.x >= minx && b2.x <= maxx) {
            intersectValue = "Coincident"; //閲嶅悎
          } else {
            intersectValue = "Parallel"; //骞宠
          }
        } else {
          intersectValue = "Parallel"; //骞宠
        }
      }
      return intersectValue;
    };

    /**
     * @description 鑾峰彇鏂囨湰澶栨帴鐭╁舰瀹藉害涓庨珮搴︺€�
     * @param style - {SuperMap.Style} 鏂囨湰鏍峰紡銆�
     * @param text - {string} 鏂囨湰鍐呭銆�
     * @param element - {Object} DOM鍏冪礌銆�
     * @return {Object} 杩斿洖瑁佸壀鍚庣殑瀹藉害锛岄珮搴︿俊鎭€�
     */
    _SuperMap2.default.Util.getTextBounds = function (style, text, element) {
      document.body.appendChild(element);
      element.style.width = 'auto';
      element.style.height = 'auto';
      if (style.fontSize) element.style.fontSize = style.fontSize;
      if (style.fontFamily) element.style.fontFamily = style.fontFamily;
      if (style.fontWeight) element.style.fontWeight = style.fontWeight;
      element.style.position = 'relative';
      element.style.visibility = 'hidden';
      //fix 鍦ㄦ煇浜涙儏鍐典笅锛宔lement鍐呯殑鏂囨湰鍙樻垚绔栬捣鎺掑垪锛屽鑷村搴﹁绠椾笉姝ｇ‘鐨刡ug
      element.style.display = 'inline-block';
      element.innerHTML = text;
      var textWidth = element.clientWidth;
      var textHeight = element.clientHeight;
      document.body.removeChild(element);
      return {
        textWidth: textWidth,
        textHeight: textHeight
      };
    };

    /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Geometry2 = __webpack_require__(12);

    var _Geometry3 = _interopRequireDefault(_Geometry2);

    var _Bounds = __webpack_require__(11);

    var _Bounds2 = _interopRequireDefault(_Bounds);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.Point
     * @classdesc 鐐瑰嚑浣曞璞＄被銆�
     * @extends {SuperMap.Geometry}
     * @param  x - {float} x-鍧愭爣
     * @param y - {float} y-鍧愭爣
     * @param type - {string} 鐢ㄦ潵瀛樺偍鐐圭殑绫诲瀷
     * @param tag -  {float} 鐢ㄦ潵瀛樺偍棰濆鐨勫睘鎬э紝姣斿宸€煎垎鏋愪腑鐨刏鍊笺€�
     * @example
     * var point = new SuperMap.Geometry.Point(-111.04, 45.68);
     */
    var Point = function (_Geometry) {
      _inherits(Point, _Geometry);

      /**
       * @member SuperMap.Geometry.Point.prototype.tag - {string}
       * @description  鐢ㄦ潵瀛樺偍棰濆鐨勫睘鎬э紝姣斿宸€煎垎鏋愪腑鐨刏鍊笺€�
       */


      /**
       * @member SuperMap.Geometry.Point.prototype.x - {float}
       * @description 妯潗鏍囥€�
       */
      function Point(x, y, type, tag) {
        _classCallCheck(this, Point);

        var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, x, y, type, tag));

        _this.x = null;
        _this.y = null;
        _this.tag = null;
        _this.type = null;
        _this.CLASS_NAME = "SuperMap.Geometry.Point";


        _this.x = parseFloat(x);
        _this.y = parseFloat(y);
        if (tag || tag == 0) {
          _this.tag = parseFloat(tag);
        }
        _this.type = type || "NONE";
        return _this;
      }

      /**
       * @function SuperMap.Geometry.Point.prototype.clone
       * @description 鍏嬮殕鐐瑰璞°€�
       * @returns {SuperMap.Geometry.Point} 鍏嬮殕鍚庣殑鐐瑰璞°€�
       */


      /**
       * @member SuperMap.Geometry.Point.prototype.tag - {string}
       * @description  鐢ㄦ潵瀛樺偍鐐圭殑绫诲瀷
       */


      /**
       * @member SuperMap.Geometry.Point.prototype.y - {float}
       * @description 绾靛潗鏍囥€�
       */


      _createClass(Point, [{
        key: 'clone',
        value: function clone(obj) {
          if (obj == null) {
            obj = new Point(this.x, this.y);
          }

          // catch any randomly tagged-on properties
          _Util.Util.applyDefaults(obj, this);

          return obj;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.calculateBounds
         * @description 璁＄畻鐐瑰璞＄殑鑼冨洿銆�
         */

      }, {
        key: 'calculateBounds',
        value: function calculateBounds() {
          this.bounds = new _Bounds2.default(this.x, this.y, this.x, this.y);
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.distanceTo
         * @description 璁＄畻涓や釜鐐瑰璞￠棿鐨勬渶灏忚窛绂伙紙x-y骞抽潰鍧愭爣绯讳笅锛夈€�
         * @param geometry - {SuperMap.Geometry} 鐩爣鐐瑰璞°€�
         * @param options - {Object} 璁＄畻璺濈鏃堕渶瑕佽缃殑鍙€夊睘鎬с€傛湁鏁堢殑閫夐」鍙栧喅浜庣壒瀹氱殑鍑犱綍绫诲瀷銆�<br>
         *         details - {boolean} 杩斿洖璺濈璁＄畻鐨勭粏鑺傘€傞粯璁や负false銆�<br>
         *         edge - {boolean} 璁＄畻涓€涓嚑浣曞璞″埌鐩爣鍑犱綍瀵硅薄杈圭紭鐨勬渶杩戣窛绂汇€傞粯璁や负true銆� 濡傛灉璁句负true锛�
         *                          涓€涓嚑浣曞璞″畬鍏ㄥ寘鍚湪鐩爣鍑犱綍瀵硅薄涓椂锛岃皟鐢╠istanceTo杩斿洖闈為浂缁撴灉锛屽鏋�
         *                          false锛屼袱涓嚑浣曞璞＄浉浜ゆ儏鍐典笅璋冪敤distanceTo缁撴灉杩斿洖0锛岃€屼笖濡傛灉false锛屽皢涓嶈繑璺濈銆�
         * @returns {number | Object} 杩斿洖涓€涓嚑浣曞璞″埌鐩爣鍑犱綍瀵硅薄鐨勮窛绂汇€�
         */

      }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
          var edge = !(options && options.edge === false);
          var details = edge && options && options.details;
          var distance, x0, y0, x1, y1, result;
          if (geometry instanceof Point) {
            x0 = this.x;
            y0 = this.y;
            x1 = geometry.x;
            y1 = geometry.y;
            distance = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
            result = !details ? distance : { x0: x0, y0: y0, x1: x1, y1: y1, distance: distance };
          } else {
            result = geometry.distanceTo(this, options);
            if (details) {
              // switch coord order since this geom is target
              result = {
                x0: result.x1, y0: result.y1,
                x1: result.x0, y1: result.y0,
                distance: result.distance
              };
            }
          }
          return result;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.equals
         * @description 鍒ゆ柇涓や釜鐐瑰璞℃槸鍚︾浉绛夈€傚鏋滀袱涓偣瀵硅薄鍏锋湁鐩稿悓鐨勫潗鏍囷紝鍒欒涓烘槸鐩哥瓑鐨勩€�
         * @example
         * var point= new SuperMap.Geometry.Point(0,0);
         * var point1={x:0,y:0};
         * var result= point.equals(point1);
         * @param geom - {SuperMap.Geometry.Point} 闇€瑕佸垽鏂殑鐐瑰璞°€�
         * @returns {boolean} 涓や釜鐐瑰璞℃槸鍚︾浉绛夛紙true涓虹浉绛夛紝false涓轰笉绛夛級銆�
         */

      }, {
        key: 'equals',
        value: function equals(geom) {
          var equals = false;
          if (geom != null) {
            equals = this.x === geom.x && this.y === geom.y || isNaN(this.x) && isNaN(this.y) && isNaN(geom.x) && isNaN(geom.y);
          }
          return equals;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.toShortString
         * @returns {string} 瀛楃涓蹭唬琛ㄧ偣瀵硅薄銆�(ex. <i>"5, 42"</i>)
         */

      }, {
        key: 'toShortString',
        value: function toShortString() {
          return this.x + ", " + this.y;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.move
         * @description 娌跨潃x銆亂杞寸殑姝ｆ柟鍚戜笂鎸夌収缁欏畾鐨勪綅绉荤Щ鍔ㄧ偣瀵硅薄锛宮ove 涓嶄粎鏀瑰彉浜嗗嚑浣曞璞＄殑浣嶇疆骞朵笖娓呯悊浜嗚竟鐣岀紦瀛樸€�
         * @param x - {float} x杞存鏂瑰悜涓婄殑鍋忕Щ閲忋€�
         * @param  y - {float} y杞存鏂瑰悜涓婂亸绉婚噺銆�
         * @example
         * var point = new SuperMap.Geometry.Point(10,20);
         * var dx = 10*Math.random();
         * var dy = 10*Math.random();
         * point.move(dx,dy);
         */

      }, {
        key: 'move',
        value: function move(x, y) {
          this.x = this.x + x;
          this.y = this.y + y;
          this.clearBounds();
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.rotate
         * @description 鍥寸粫涓績鐐规棆杞偣瀵硅薄銆�
         * @param angle - {float} 鏃嬭浆瑙掔殑搴︽暟锛堟部鐫€x杞存鏂瑰悜鐨勯€嗘椂閽堟柟鍚戯級銆�
         * @param origin - {SuperMap.Geometry.Point} 鏃嬭浆鐨勪腑蹇冪偣 銆�
         * @example
         * var point = new SuperMap.Geometry.Point(10,20);
         * var rotateOrigin = new SuperMap.Geometry.Point(5,10);
         * point.rotate(360,rotateOrigin);
         */

      }, {
        key: 'rotate',
        value: function rotate(angle, origin) {
          angle *= Math.PI / 180;
          var radius = this.distanceTo(origin);
          var theta = angle + Math.atan2(this.y - origin.y, this.x - origin.x);
          this.x = origin.x + radius * Math.cos(theta);
          this.y = origin.y + radius * Math.sin(theta);
          this.clearBounds();
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.getCentroid
         * @description 鑾峰彇鐐瑰璞＄殑璐ㄥ績銆�
         * @returns {SuperMap.Geometry.Point} 鐐瑰璞＄殑璐ㄥ績銆�
         */

      }, {
        key: 'getCentroid',
        value: function getCentroid() {
          return new Point(this.x, this.y);
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.resize
         * @description 璋冩暣鍑犱綍瀵硅薄鐩稿浜庡師鐐圭殑澶у皬銆�
         * @param scale - {float} resize涔嬪悗鍒板師鐐圭殑璺濈涓巖esize涔嬪墠鍒板師鐐圭殑璺濈姣斻€�
         * @param origin - {SuperMap.Geometry.Point} 璋冩暣鐨勮捣濮嬬偣銆�
         * @param ratio - {float} 鐐瑰璞¤嚜韬玿涓巠鐨勬瘮鍊硷細ratio=x/y锛岄粯璁ょ殑姣斾緥涓�1锛屼笉鎺ㄨ崘璁剧疆銆�
         * @returns {SuperMap.Geometry} - 褰撳墠鍑犱綍瀵硅薄銆�
         * @example
         * var point = new SuperMap.Geometry.Point(10,10);
         * var origin = new SuperMap.Geometry.Point(0,0);
         * point.resize(2,origin,4);
         */

      }, {
        key: 'resize',
        value: function resize(scale, origin, ratio) {
          ratio = ratio == undefined ? 1 : ratio;
          //鎵€鏈夌殑绾垮拰闈㈡渶缁堥兘鏄帶鍒剁偣
          this.x = origin.x + scale * ratio * (this.x - origin.x);

          this.y = origin.y + scale * (this.y - origin.y);
          this.clearBounds();
          return this;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.intersects
         * @description 鍒ゆ柇涓や釜鍑犱綍瀵硅薄鏄惁鐩镐氦銆�
         * @param geometry - {SuperMap.Geometry} 浠绘剰绫诲瀷鐨勫嚑浣曞璞°€�
         * @returns {boolean} 浼犲叆鐨勫嚑浣曞璞′笌褰撳墠鍑犱綍瀵硅薄鐩镐氦銆�
         */

      }, {
        key: 'intersects',
        value: function intersects(geometry) {
          var intersect = false;
          if (geometry.CLASS_NAME === "SuperMap.Geometry.Point") {
            intersect = this.equals(geometry);
          } else {
            intersect = geometry.intersects(this);
          }
          return intersect;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.destroy
         * @description 閲婃斁鐐瑰璞＄殑璧勬簮
         */

      }, {
        key: 'destroy',
        value: function destroy() {
          this.x = null;
          this.y = null;
          this.tag = null;
          _get(Point.prototype.__proto__ || Object.getPrototypeOf(Point.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.getVertices
         * @description 杩斿洖鐐瑰璞＄殑鎵€鏈夐《鐐圭殑鍒楄〃銆�
         * @param nodes - {boolean} 瀵逛簬鐐瑰璞℃鍙傛暟涓嶈捣浣滅敤锛岀洿鎺ヨ繑鍥炵偣銆�
         * @returns {Array} 鍑犱綍鍥惧舰鐨勯《鐐瑰垪琛ㄣ€�
         */

      }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
          return [this];
        }
      }]);

      return Point;
    }(_Geometry3.default);

    exports.default = Point;

    _SuperMap2.default.Geometry.Point = Point;

    /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Point = __webpack_require__(2);

    var _Point2 = _interopRequireDefault(_Point);

    var _Geometry2 = __webpack_require__(12);

    var _Geometry3 = _interopRequireDefault(_Geometry2);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.Collection
     * @classdesc 鍑犱綍瀵硅薄闆嗗悎绫伙紝瀛樺偍鍦ㄦ湰鍦扮殑 components 灞炴€т腑锛堝彲浣滀负鍙傛暟浼犻€掔粰鏋勯€犲嚱鏁帮級銆�
     *            闅忕潃鏂扮殑鍑犱綍鍥惧舰娣诲姞鍒伴泦鍚堜腑锛屽皢涓嶈兘琚厠闅嗭紝褰撶Щ鍔ㄥ嚑浣曞浘褰㈡椂锛岄渶瑕佹寚瀹氬弬鐓х墿銆�
     *            getArea鍜実etLength鍑芥暟鍙兘閫氳繃閬嶅巻瀛樺偍鍑犱綍瀵硅薄鐨� components 鏁扮粍锛屾€昏鎵€鏈夊嚑浣曞浘褰㈢殑闈㈢Н鍜岄暱搴︺€�
     *
     * @extends SuperMap.Geometry
     * @param components - {Array<SuperMap.Geometry>} 鍑犱綍瀵硅薄鏁扮粍銆�
     * @example
     * var point1 = new SuperMap.Geometry.Point(10,20);
     * var point2 = new SuperMap.Geometry.Point(30,40);
     * var col = new SuperMap.Geometry.Collection([point1,point2]);
     */
    var Collection = function (_Geometry) {
      _inherits(Collection, _Geometry);

      /**
       * @description 瀛樺偍鍑犱綍瀵硅薄鐨勬暟缁勩€�
       * @member SuperMap.Geometry.Collection.prototype.components - {Array<SuperMap.Geometry>}
       */
      function Collection(components) {
        _classCallCheck(this, Collection);

        var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this));

        _this.components = null;
        _this.componentTypes = null;
        _this.CLASS_NAME = "SuperMap.Geometry.Collection";

        _this.components = [];
        if (components != null) {
          _this.addComponents(components);
        }
        return _this;
      }

      /**
       * @function SuperMap.Geometry.Collection.prototype.destroy
       * @description 閿€姣佸嚑浣曞浘褰€�
       */


      /**
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @member SuperMap.Geometry.Collection.prototype.componentTypes - {Array<string>}
       */


      _createClass(Collection, [{
        key: 'destroy',
        value: function destroy() {
          this.components.length = 0;
          this.components = null;
          _get(Collection.prototype.__proto__ || Object.getPrototypeOf(Collection.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.clone
         * @description 鍏嬮殕褰撳墠鍑犱綍瀵硅薄銆�
         * @returns {SuperMap.Geometry.Collection} 鍏嬮殕鐨勫嚑浣曞璞￠泦鍚堛€�
         */

      }, {
        key: 'clone',
        value: function clone() {
          var geometry = eval("new " + this.CLASS_NAME + "()");
          for (var i = 0, len = this.components.length; i < len; i++) {
            geometry.addComponent(this.components[i].clone());
          }

          // catch any randomly tagged-on properties
          _Util.Util.applyDefaults(geometry, this);

          return geometry;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getComponentsString
         * @description 鑾峰彇components瀛楃涓层€�
         * @returns {string} components瀛楃涓层€�
         */

      }, {
        key: 'getComponentsString',
        value: function getComponentsString() {
          var strings = [];
          for (var i = 0, len = this.components.length; i < len; i++) {
            strings.push(this.components[i].toShortString());
          }
          return strings.join(",");
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.calculateBounds
         * @description 閫氳繃閬嶅巻鏁扮粍閲嶆柊璁＄畻杈圭晫锛屽湪閬嶅巻姣忎竴瀛愰」涓椂璋冪敤 extend 鏂规硶銆�
         */

      }, {
        key: 'calculateBounds',
        value: function calculateBounds() {
          this.bounds = null;
          var bounds = new _SuperMap2.default.Bounds();
          var components = this.components;
          if (components) {
            for (var i = 0, len = components.length; i < len; i++) {
              bounds.extend(components[i].getBounds());
            }
          }
          // to preserve old behavior, we only set bounds if non-null
          // in the future, we could add bounds.isEmpty()
          if (bounds.left != null && bounds.bottom != null && bounds.right != null && bounds.top != null) {
            this.setBounds(bounds);
          }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.addComponents
         * @description 缁欏嚑浣曞浘褰㈠璞℃坊鍔犲厓绱犮€�
         * @param components - {Array<SuperMap.Geometry>} 鍑犱綍瀵硅薄缁勪欢銆�
         * @example
         * var collection = new SuperMap.Geometry.Collection();
         * collection.addComponents(new SuerpMap.Geometry.Point(10,10));
         */

      }, {
        key: 'addComponents',
        value: function addComponents(components) {
          if (!_Util.Util.isArray(components)) {
            components = [components];
          }
          for (var i = 0, len = components.length; i < len; i++) {
            this.addComponent(components[i]);
          }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.addComponent
         * @description 娣诲姞涓€涓嚑浣曞璞″埌闆嗗悎涓€傚鏋滆缃簡componentTypes绫诲瀷锛屽垯娣诲姞鐨勫嚑浣曞璞″繀椤绘槸componentTypes涓殑绫诲瀷銆�
         * @param component - {SuperMap.Geometry} 寰呮坊鍔犵殑鍑犱綍瀵硅薄銆�
         * @param index - {int} 鍑犱綍瀵硅薄鎻掑叆鐨勪綅缃€�
         * @returns {boolean} 鏄惁娣诲姞鎴愬姛銆�
         */

      }, {
        key: 'addComponent',
        value: function addComponent(component, index) {
          var added = false;
          if (component) {
            if (this.componentTypes == null || _Util.Util.indexOf(this.componentTypes, component.CLASS_NAME) > -1) {

              if (index != null && index < this.components.length) {
                var components1 = this.components.slice(0, index);
                var components2 = this.components.slice(index, this.components.length);
                components1.push(component);
                this.components = components1.concat(components2);
              } else {
                this.components.push(component);
              }
              component.parent = this;
              this.clearBounds();
              added = true;
            }
          }
          return added;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.removeComponents
         * @description 娓呴櫎鍑犱綍瀵硅薄銆�
         * @param components - {Array<SuperMap.Geometry>} 闇€瑕佹竻闄ょ殑鍑犱綍瀵硅薄銆�
         * @returns {boolean} 鍏冪礌鏄惁琚垹闄ゃ€�
         */

      }, {
        key: 'removeComponents',
        value: function removeComponents(components) {
          var removed = false;

          if (!_Util.Util.isArray(components)) {
            components = [components];
          }
          for (var i = components.length - 1; i >= 0; --i) {
            removed = this.removeComponent(components[i]) || removed;
          }
          return removed;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.removeComponent
         * @description 浠庨泦鍚堜腑绉婚櫎涓€涓嚑浣曞璞�
         * @param component - {SuperMap.Geometry} 瑕佺Щ闄ょ殑鍑犱綍瀵硅薄
         * @returns {boolean} 鍑犱綍瀵硅薄鏄惁绉婚櫎鎴愬姛
         */

      }, {
        key: 'removeComponent',
        value: function removeComponent(component) {
          _Util.Util.removeItem(this.components, component);

          // clearBounds() so that it gets recalculated on the next call
          // to this.getBounds();
          this.clearBounds();
          return true;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getLength
         * @description 璁＄畻鍑犱綍瀵硅薄闀垮害銆�
         * @returns {number} 鍑犱綍瀵硅薄闀垮害锛堟墍鏈夊嚑浣曞璞￠暱搴︽€诲拰锛夈€�
         */

      }, {
        key: 'getLength',
        value: function getLength() {
          var length = 0.0;
          for (var i = 0, len = this.components.length; i < len; i++) {
            length += this.components[i].getLength();
          }
          return length;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getArea
         * @description 璁＄畻鍑犱綍瀵硅薄鐨勯潰绉€傛敞鎰忥紝杩欎釜鏂规硶鍦� <SuperMap.Geometry.Polygon> 绫讳腑闇€瑕侀噸鍐欍€�
         * @returns {number} 鍑犱綍鍥惧舰鐨勯潰绉紝鏄嚑浣曞璞′腑鎵€鏈夌粍鎴愰儴鍒嗙殑闈㈢Н涔嬪拰銆�
         */

      }, {
        key: 'getArea',
        value: function getArea() {
          var area = 0.0;
          for (var i = 0, len = this.components.length; i < len; i++) {
            area += this.components[i].getArea();
          }
          return area;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getCentroid
         * @description 璁＄畻鍑犱綍鍥惧舰闆嗗悎鐨勮川蹇冦€�
         * @param weighted - {boolean} 鎵цgetCentroid鏂规硶杩涜閫掑綊璁＄畻锛岃繑鍥炴鍑犱綍鍥惧舰闆嗗悎涓殑闈㈢Н鍔犳潈骞冲潎鍊笺€�
         * @returns {SuperMap.Geometry.Point} 璐ㄥ績銆�
         */

      }, {
        key: 'getCentroid',
        value: function getCentroid(weighted) {
          if (!weighted) {
            return this.components.length && this.components[0].getCentroid();
          }
          var len = this.components.length;
          if (!len) {
            return false;
          }

          var areas = [];
          var centroids = [];
          var areaSum = 0;
          var minArea = Number.MAX_VALUE;
          var component;
          for (var i = 0; i < len; ++i) {
            component = this.components[i];
            var area = component.getArea();
            var centroid = component.getCentroid(true);
            if (isNaN(area) || isNaN(centroid.x) || isNaN(centroid.y)) {
              continue;
            }
            areas.push(area);
            areaSum += area;
            minArea = area < minArea && area > 0 ? area : minArea;
            centroids.push(centroid);
          }
          len = areas.length;
          if (areaSum === 0) {
            // all the components in this collection have 0 area
            // probably a collection of points -- weight all the points the same
            for (var i = 0; i < len; ++i) {
              areas[i] = 1;
            }
            areaSum = areas.length;
          } else {
            // normalize all the areas where the smallest area will get
            // a value of 1
            for (var i = 0; i < len; ++i) {
              areas[i] /= minArea;
            }
            areaSum /= minArea;
          }

          var xSum = 0,
              ySum = 0,
              centroid,
              area;
          for (var i = 0; i < len; ++i) {
            centroid = centroids[i];
            area = areas[i];
            xSum += centroid.x * area;
            ySum += centroid.y * area;
          }

          return new _Point2.default(xSum / areaSum, ySum / areaSum);
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.move
         * @description  娌跨潃x銆亂杞寸殑姝ｆ柟鍚戜笂鎸夌収缁欏畾鐨勪綅绉荤Щ鍔ㄥ嚑浣曞浘褰紝move 涓嶄粎鏀瑰彉浜嗗嚑浣曞浘褰㈢殑浣嶇疆骞朵笖娓呯悊浜嗚竟鐣岀紦瀛樸€�
         * @param x -{number} x杞存鏂瑰悜涓婄Щ鍔ㄧ殑璺濈銆�
         * @param y - {number} y杞存鏂瑰悜涓婄Щ鍔ㄧ殑璺濈銆�
         */

      }, {
        key: 'move',
        value: function move(x, y) {
          for (var i = 0, len = this.components.length; i < len; i++) {
            this.components[i].move(x, y);
          }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.rotate
         * @description 鍥寸粫涓績鐐规棆杞嚑浣曞浘褰€�
         * @param angle -{number} 鏃嬭浆瑙掔殑搴︽暟锛堟部鐫€x杞存鏂瑰悜閫嗘椂閽堟祴閲忥級銆�
         * @param origin - {SuperMap.Geometry.Point} 鏃嬭浆涓績鐐广€�
         */

      }, {
        key: 'rotate',
        value: function rotate(angle, origin) {
          for (var i = 0, len = this.components.length; i < len; ++i) {
            this.components[i].rotate(angle, origin);
          }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.resize
         * @description  璋冩暣鍑犱綍瀵硅薄澶у皬銆�
         * @param scale - {number} 鍑犱綍鍥惧舰缂╂斁鐨勬瘮渚嬬郴鏁帮紝鏄嚑浣曞浘褰㈢淮鏁扮殑涓ゅ€嶃€傦紙濡傦紝瀵逛簬绾挎潵璇村皢浠ョ嚎2鍊嶇殑闀垮害鎷夐暱锛屽浜庡杈瑰舰鏉ヨ锛屽皢浠ラ潰绉殑4鍊嶅彉鍖栵級銆�
         * @param origin - {SuperMap.Geometry.Point} 璋冩暣澶у皬閫夊畾鐨勮捣濮嬪師鐐广€�
         * @param ratio - {number} 鍙€夌殑x,y鐨勬瘮渚嬶紝榛樿鐨勬瘮渚嬩负1銆�
         * @returns {SuperMap.Geometry} 鍑犱綍鍥惧舰銆�
         */

      }, {
        key: 'resize',
        value: function resize(scale, origin, ratio) {
          for (var i = 0; i < this.components.length; ++i) {
            this.components[i].resize(scale, origin, ratio);
          }
          return this;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.distanceTo
         * @description 璁＄畻涓や釜鍑犱釜鍥惧舰闂寸殑鏈€灏忚窛绂伙紙x-y骞抽潰鍧愭爣绯讳笅锛夈€�
         * @param geometry - {SuperMap.Geometry} 鐩爣鍑犱綍鍥惧舰銆�
         * @param options - {Object} 璺濈璁＄畻闇€瑕佽缃殑鍙€夊睘鎬с€傛湁鏁堢殑閫夐」鍙栧喅浜庣壒瀹氱殑鍑犱綍绫诲瀷銆�<br>
         *        details - {boolean} 杩斿洖璺濈璁＄畻鐨勭粏鑺傘€傞粯璁や负false銆�<br>
         *        edge - {boolean} 璁＄畻涓€涓嚑浣曞浘褰㈠埌鐩爣鍑犱綍鍥惧舰杈圭紭鐨勬渶杩戣窛绂汇€傞粯璁や负true銆�
         *                         濡傛灉璁句负true锛屼竴涓嚑浣曞浘褰㈠畬鍏ㄥ寘鍚湪鐩爣鍑犱綍鍥惧舰涓椂锛岃皟鐢╠istanceTo杩斿洖闈為浂缁撴灉锛�
         *                         濡傛灉false锛屼袱涓嚑浣曞浘褰㈢浉浜ゆ儏鍐典笅璋冪敤distanceTo缁撴灉杩斿洖0锛岃€屼笖濡傛灉false锛屽皢涓嶈繑璺濈鍊笺€�
         * @returns {(number | Object)} 杩斿洖涓€涓嚑浣曞浘褰㈠埌鐩爣鍑犱綍鍥惧舰鐨勮窛绂汇€�
         */

      }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
          var edge = !(options && options.edge === false);
          var details = edge && options && options.details;
          var result, best, distance;
          var min = Number.POSITIVE_INFINITY;
          for (var i = 0, len = this.components.length; i < len; ++i) {
            result = this.components[i].distanceTo(geometry, options);
            distance = details ? result.distance : result;
            if (distance < min) {
              min = distance;
              best = result;
              if (min == 0) {
                break;
              }
            }
          }
          return best;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.equals
         * @description 鍒ゆ柇涓や釜鍑犱綍鍥惧舰鏄惁鐩哥瓑銆傚鏋滄墍鏈夌殑 components 鍏锋湁鐩稿悓鐨勫潗鏍囷紝鍒欒涓烘槸鐩哥瓑鐨勩€�
         * @param geometry - {SuperMap.Geometry} 闇€瑕佸垽鏂殑鍑犱綍鍥惧舰銆�
         * @returns {boolean} 杈撳叆鐨勫嚑浣曞浘褰笌褰撳墠鍑犱綍鍥惧舰鏄惁鐩哥瓑銆�
         */

      }, {
        key: 'equals',
        value: function equals(geometry) {
          var equivalent = true;
          if (!geometry || !geometry.CLASS_NAME || this.CLASS_NAME !== geometry.CLASS_NAME) {
            equivalent = false;
          } else if (!_Util.Util.isArray(geometry.components) || geometry.components.length !== this.components.length) {
            equivalent = false;
          } else {
            for (var i = 0, len = this.components.length; i < len; ++i) {
              if (!this.components[i].equals(geometry.components[i])) {
                equivalent = false;
                break;
              }
            }
          }
          return equivalent;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.intersects
         * @description 鍒ゆ柇杈撳叆鐨勫嚑浣曞璞℃槸鍚︿笌褰撳墠鍑犱綍瀵硅薄鐩镐氦銆�
         * @param geometry - {SuperMap.Geometry} 浠绘剰鐨勫嚑浣曠被鍨嬨€�
         * @returns {boolean} 杈撳叆鍑犱綍瀵硅薄涓庡綋鍓嶅嚑浣曞璞＄浉浜ゃ€�
         */

      }, {
        key: 'intersects',
        value: function intersects(geometry) {
          var intersect = false;
          for (var i = 0, len = this.components.length; i < len; ++i) {
            intersect = geometry.intersects(this.components[i]);
            if (intersect) {
              break;
            }
          }
          return intersect;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getVertices
         * @description 杩斿洖鍑犱綍瀵硅薄鐨勬墍鏈夌粨鐐圭殑鍒楄〃銆�
         * @param nodes - {boolean} 瀵逛簬绾挎潵璇达紝浠呬粎杩斿洖浣滀负绔偣鐨勯《鐐癸紝濡傛灉璁句负false锛屽垯杩斿洖闈炵鐐圭殑椤剁偣濡傛灉娌℃湁璁剧疆姝ゅ弬鏁帮紝鍒欒繑鍥炴墍鏈夐《鐐广€�
         * @returns {Array} 鍑犱綍瀵硅薄鐨勯《鐐瑰垪琛ㄣ€�
         */

      }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
          var vertices = [];
          for (var i = 0, len = this.components.length; i < len; ++i) {
            Array.prototype.push.apply(vertices, this.components[i].getVertices(nodes));
          }
          return vertices;
        }
      }]);

      return Collection;
    }(_Geometry3.default);

    exports.default = Collection;

    _SuperMap2.default.Geometry.Collection = Collection;

    /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SummaryType = exports.StatisticAnalystMode = exports.AnalystSizeUnit = exports.AnalystAreaUnit = exports.ClipAnalystMode = exports.ChartType = exports.ClientType = exports.Exponent = exports.VariogramMode = exports.InterpolationAlgorithmType = exports.SearchMode = exports.PixelFormat = exports.StatisticMode = exports.UGCLayerType = exports.LayerType = exports.ColorSpaceType = exports.GridType = exports.TransferPreference = exports.TransferTactic = exports.EditType = exports.DataReturnMode = exports.SurfaceAnalystMethod = exports.SmoothMethod = exports.OverlayOperationType = exports.BufferEndType = exports.TurnType = exports.SupplyCenterType = exports.SideType = exports.DirectionType = exports.LabelOverLengthMode = exports.LabelBackShape = exports.AlongLineDirection = exports.FillGradientMode = exports.TextAlignment = exports.ColorGradientType = exports.ThemeType = exports.RangeMode = exports.GraduatedMode = exports.GraphAxesTextDisplayMode = exports.ThemeGraphType = exports.ThemeGraphTextFormat = exports.EngineType = exports.Unit = exports.MeasureMode = exports.SpatialRelationType = exports.SpatialQueryMode = exports.JoinType = exports.QueryOption = exports.GeometryType = exports.ServerType = exports.DataFormat = undefined;

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * @name DataFormat
     * @memberOf SuperMap
     * @description 鏈嶅姟璇锋眰杩斿洖缁撴灉鏁版嵁绫诲瀷
     *
     * @property {string} GEOJSON  GEOJSON
     * @property {string} ISERVER  ISERVER
     */
    var DataFormat = exports.DataFormat = _SuperMap2.default.DataFormat = {
      GEOJSON: "GEOJSON",
      ISERVER: "ISERVER"
    };

    /**
     * @name ServerType
     * @memberOf SuperMap
     * @description 鏈嶅姟鍣ㄧ被鍨�
     *
     * @property {string} ISERVER  ISERVER
     * @property {string} IPORTAL  IPORTAL
     * @property {string} ONLINE  ONLINE
     */
    var ServerType = exports.ServerType = _SuperMap2.default.ServerType = {
      ISERVER: "ISERVER",
      IPORTAL: "IPORTAL",
      ONLINE: "ONLINE"
    };

    /**
     * @name GeometryType
     * @memberOf SuperMap
     * @description 鍑犱綍瀵硅薄鏋氫妇,瀹氫箟浜嗕竴绯诲垪鍑犱綍瀵硅薄绫诲瀷銆�
     *
     * @property {string} LINE  LINE
     * @property {string} LINEM  LINEM
     * @property {string} POINT  POINT
     * @property {string} REGION  REGION
     * @property {string} ELLIPSE  ELLIPSE
     * @property {string} CIRCLE  CIRCLE
     * @property {string} TEXT  TEXT
     * @property {string} UNKNOWN  UNKNOWN
     */
    var GeometryType = exports.GeometryType = _SuperMap2.default.GeometryType = {
      LINE: "LINE",
      LINEM: "LINEM",
      POINT: "POINT",
      REGION: "REGION",
      ELLIPSE: "ELLIPSE",
      CIRCLE: "CIRCLE",
      TEXT: "TEXT",
      UNKNOWN: "UNKNOWN"
    };

    /**
     * @name QueryOption
     * @memberOf SuperMap
     * @description 鏌ヨ缁撴灉绫诲瀷鏋氫妇,鎻忚堪鏌ヨ缁撴灉杩斿洖绫诲瀷锛屽寘鎷彧杩斿洖灞炴€с€佸彧杩斿洖鍑犱綍瀹炰綋浠ュ強杩斿洖灞炴€у拰鍑犱綍瀹炰綋銆�
     *
     * @property {string} ATTRIBUTE  ATTRIBUTE
     * @property {string} ATTRIBUTEANDGEOMETRY  ATTRIBUTEANDGEOMETRY
     * @property {string} GEOMETRY  GEOMETRY
     */
    var QueryOption = exports.QueryOption = _SuperMap2.default.QueryOption = {
      ATTRIBUTE: "ATTRIBUTE",
      ATTRIBUTEANDGEOMETRY: "ATTRIBUTEANDGEOMETRY",
      GEOMETRY: "GEOMETRY"
    };

    /**
     * @name JoinType
     * @memberOf SuperMap
     * @description 鍏宠仈鏌ヨ鏃剁殑鍏宠仈绫诲瀷甯搁噺銆�
     * 璇ョ被瀹氫箟浜嗕袱涓〃涔嬮棿鐨勮繛鎺ョ被鍨嬪父閲忥紝鍐冲畾浜嗗涓や釜琛ㄤ箣闂磋繘琛岃繛鎺ユ煡璇㈡椂锛屾煡璇㈢粨鏋滀腑寰楀埌鐨勮褰曠殑鎯呭喌銆�
     *
     * @property {string} INNERJOIN  INNERJOIN
     * @property {string} LEFTJOIN  LEFTJOIN
     */
    var JoinType = exports.JoinType = _SuperMap2.default.JoinType = {
      INNERJOIN: "INNERJOIN",
      LEFTJOIN: "LEFTJOIN"
    };

    /**
     * @name SpatialQueryMode
     * @memberOf SuperMap
     * @description  绌洪棿鏌ヨ妯″紡鏋氫妇銆傝绫诲畾涔変簡绌洪棿鏌ヨ鎿嶄綔妯″紡甯搁噺銆�
     *
     * @property {string} CONTAIN  CONTAIN
     * @property {string} CROSS  CROSS
     * @property {string} DISJOINT  DISJOINT
     * @property {string} IDENTITY  IDENTITY
     * @property {string} INTERSECT  INTERSECT
     * @property {string} NONE  NONE
     * @property {string} OVERLAP  OVERLAP
     * @property {string} TOUCH  TOUCH
     * @property {string} WITHIN  WITHIN
     */
    var SpatialQueryMode = exports.SpatialQueryMode = _SuperMap2.default.SpatialQueryMode = {
      CONTAIN: "CONTAIN",
      CROSS: "CROSS",
      DISJOINT: "DISJOINT",
      IDENTITY: "IDENTITY",
      INTERSECT: "INTERSECT",
      NONE: "NONE",
      OVERLAP: "OVERLAP",
      TOUCH: "TOUCH",
      WITHIN: "WITHIN"
    };

    /**
     * @name SpatialRelationType
     * @memberOf SuperMap
     * @description  鏁版嵁闆嗗璞￠棿鐨勭┖闂村叧绯绘灇涓俱€�
     * 璇ョ被瀹氫箟浜嗘暟鎹泦瀵硅薄闂寸殑绌洪棿鍏崇郴绫诲瀷甯搁噺銆�
     *
     * @property {string} CONTAIN 鍖呭惈鍏崇郴 CONTAIN  CONTAIN
     * @property {string} INTERSECT 鐩镐氦鍏崇郴 INTERSECT  INTERSECT
     * @property {string} INTERSECT 琚寘鍚叧绯� WITHIN  WITHIN
     */
    var SpatialRelationType = exports.SpatialRelationType = _SuperMap2.default.SpatialRelationType = {
      CONTAIN: "CONTAIN",
      INTERSECT: "INTERSECT",
      WITHIN: "WITHIN"
    };

    /**
     * @name MeasureMode
     * @memberOf SuperMap
     * @property {string} DISTANCE DISTANCE
     * @property {string} AREA AREA
     * @description  閲忕畻妯″紡鏋氫妇銆�
     * 璇ョ被瀹氫箟浜嗕袱绉嶆祴閲忔ā寮忥細璺濈娴嬮噺鍜岄潰绉祴閲忋€�
     */
    var MeasureMode = exports.MeasureMode = _SuperMap2.default.MeasureMode = {
      DISTANCE: "DISTANCE",
      AREA: "AREA"
    };

    /**
     * @name Unit
     * @memberOf SuperMap
     * @description  璺濈鍗曚綅鏋氫妇銆�
     * 璇ョ被瀹氫箟浜嗕竴绯诲垪璺濈鍗曚綅绫诲瀷銆�
     *
     * @property {string} METER  METER
     * @property {string} KILOMETER  KILOMETER
     * @property {string} MILE  MILE
     * @property {string} YARD  YARD
     * @property {string} DEGREE  DEGREE
     * @property {string} MILLIMETER  MILLIMETER
     * @property {string} CENTIMETER  CENTIMETER
     * @property {string} INCH  INCH
     * @property {string} DECIMETER  DECIMETER
     * @property {string} FOOT  FOOT
     * @property {string} SECOND  SECOND
     * @property {string} MINUTE  MINUTE
     * @property {string} RADIAN  RADIAN
     */
    var Unit = exports.Unit = _SuperMap2.default.Unit = {
      METER: "METER",
      KILOMETER: "KILOMETER",
      MILE: "MILE",
      YARD: "YARD",
      DEGREE: "DEGREE",
      MILLIMETER: "MILLIMETER",
      CENTIMETER: "CENTIMETER",
      INCH: "INCH",
      DECIMETER: "DECIMETER",
      FOOT: "FOOT",
      SECOND: "SECOND",
      MINUTE: "MINUTE",
      RADIAN: "RADIAN"
    };

    /**
     * @name EngineType
     * @memberOf SuperMap
     * @description  鏁版嵁婧愬紩鎿庣被鍨嬫灇涓俱€�
     *
     * @property {string} IMAGEPLUGINS  IMAGEPLUGINS
     * @property {string} OGC  OGC
     * @property {string} ORACLEPLUS  ORACLEPLUS
     * @property {string} SDBPLUS  SDBPLUS
     * @property {string} SQLPLUS  SQLPLUS
     * @property {string} UDB  UDB
     */
    var EngineType = exports.EngineType = _SuperMap2.default.EngineType = {
      IMAGEPLUGINS: "IMAGEPLUGINS",
      OGC: "OGC",
      ORACLEPLUS: "ORACLEPLUS",
      SDBPLUS: "SDBPLUS",
      SQLPLUS: "SQLPLUS",
      UDB: "UDB"
    };

    /**
     * @name ThemeGraphTextFormat
     * @memberOf SuperMap
     * @description  缁熻涓撻鍥炬枃鏈樉绀烘牸寮忔灇涓俱€�
     *
     * @property {string} CAPTION  CAPTION
     * @property {string} CAPTION_PERCENT  CAPTION_PERCENT
     * @property {string} CAPTION_VALUE  CAPTION_VALUE
     * @property {string} PERCENT  PERCENT
     * @property {string} VALUE  VALUE
     */
    var ThemeGraphTextFormat = exports.ThemeGraphTextFormat = _SuperMap2.default.ThemeGraphTextFormat = {
      CAPTION: "CAPTION",
      CAPTION_PERCENT: "CAPTION_PERCENT",
      CAPTION_VALUE: "CAPTION_VALUE",
      PERCENT: "PERCENT",
      VALUE: "VALUE"
    };

    /**
     * @name ThemeGraphType
     * @memberOf SuperMap
     * @description  缁熻涓撻鍥剧被鍨嬫灇涓俱€�
     *
     * @property {string} AREA  AREA
     * @property {string} BAR  BAR
     * @property {string} BAR3D  BAR3D
     * @property {string} LINE  LINE
     * @property {string} PIE  PIE
     * @property {string} PIE3D  PIE3D
     * @property {string} POINT  POINT
     * @property {string} RING  RING
     * @property {string} ROSE  ROSE
     * @property {string} ROSE3D  ROSE3D
     * @property {string} STACK_BAR  STACK_BAR
     * @property {string} STACK_BAR3D  STACK_BAR3D
     * @property {string} STEP  STEP
     */
    var ThemeGraphType = exports.ThemeGraphType = _SuperMap2.default.ThemeGraphType = {
      AREA: "AREA",
      BAR: "BAR",
      BAR3D: "BAR3D",
      LINE: "LINE",
      PIE: "PIE",
      PIE3D: "PIE3D",
      POINT: "POINT",
      RING: "RING",
      ROSE: "ROSE",
      ROSE3D: "ROSE3D",
      STACK_BAR: "STACK_BAR",
      STACK_BAR3D: "STACK_BAR3D",
      STEP: "STEP"
    };

    /**
     * @name GraphAxesTextDisplayMode
     * @memberOf SuperMap
     * @description  缁熻涓撻鍥惧潗鏍囪酱鏂囨湰鏄剧ず妯″紡銆�
     *
     * @property {string} ALL  ALL, 鏄剧ず鍏ㄩ儴鏂囨湰
     * @property {string} NONE  NONE, 娌℃湁鏄剧ず
     * @property {string} YAXES  YAXES. 鏄剧ずY杞寸殑鏂囨湰
     */
    var GraphAxesTextDisplayMode = exports.GraphAxesTextDisplayMode = _SuperMap2.default.GraphAxesTextDisplayMode = {
      ALL: "ALL",
      NONE: "NONE",
      YAXES: "YAXES"
    };

    /**
     * @name GraduatedMode
     * @memberOf SuperMap
     * @description  涓撻鍥惧垎绾фā寮忔灇涓俱€�
     *
     * @property {string} CONSTANT  CONSTANT
     * @property {string} LOGARITHM  LOGARITHM
     * @property {string} SQUAREROOT  SQUAREROOT
     */
    var GraduatedMode = exports.GraduatedMode = _SuperMap2.default.GraduatedMode = {
      CONSTANT: "CONSTANT",
      LOGARITHM: "LOGARITHM",
      SQUAREROOT: "SQUAREROOT"
    };

    /**
     * @name RangeMode
     * @memberOf SuperMap
     * @description  鑼冨洿鍒嗘涓撻鍥惧垎娈垫柟寮忔灇涓俱€�
     *
     * @property {string} CUSTOMINTERVAL  CUSTOMINTERVAL
     * @property {string} EQUALINTERVAL  EQUALINTERVAL
     * @property {string} LOGARITHM  LOGARITHM
     * @property {string} QUANTILE  QUANTILE
     * @property {string} SQUAREROOT  SQUAREROOT
     * @property {string} STDDEVIATION  STDDEVIATION
     */
    var RangeMode = exports.RangeMode = _SuperMap2.default.RangeMode = {
      CUSTOMINTERVAL: "CUSTOMINTERVAL",
      EQUALINTERVAL: "EQUALINTERVAL",
      LOGARITHM: "LOGARITHM",
      QUANTILE: "QUANTILE",
      SQUAREROOT: "SQUAREROOT",
      STDDEVIATION: "STDDEVIATION"
    };

    /**
     * @name ThemeType
     * @memberOf SuperMap
     * @description  涓撻鍥剧被鍨嬫灇涓俱€�
     *
     * @property {string} DOTDENSITY  DOTDENSITY
     * @property {string} GRADUATEDSYMBOL  GRADUATEDSYMBOL
     * @property {string} GRAPH  GRAPH
     * @property {string} LABEL  LABEL
     * @property {string} RANGE  RANGE
     * @property {string} UNIQUE  UNIQUE
     */
    var ThemeType = exports.ThemeType = _SuperMap2.default.ThemeType = {
      DOTDENSITY: "DOTDENSITY",
      GRADUATEDSYMBOL: "GRADUATEDSYMBOL",
      GRAPH: "GRAPH",
      LABEL: "LABEL",
      RANGE: "RANGE",
      UNIQUE: "UNIQUE"
    };

    /**
     * @name ColorGradientType
     * @memberOf SuperMap
     * @description  娓愬彉棰滆壊鏋氫妇銆�
     *
     * @property {string} BLACK_WHITE  BLACKWHITE
     * @property {string} BLUE_BLACK  BLUEBLACK
     * @property {string} BLUE_RED   BLUERED
     * @property {string} BLUE_WHITE  BLUEWHITE
     * @property {string} CYAN_BLACK  CYANBLACK
     * @property {string} CYAN_BLUE  CYANBLUE
     * @property {string} CYAN_GREEN  CYANGREEN
     * @property {string} CYAN_WHITE  CYANWHITE
     * @property {string} GREEN_BLACK  GREENBLACK
     * @property {string} GREEN_BLUE  GREENBLUE
     * @property {string} GREEN_ORANGE_VIOLET  GREENORANGEVIOLET
     * @property {string} GREEN_RED  GREENRED
     * @property {string} GREEN_WHITE  GREENWHITE
     * @property {string} PINK_BLACK  PINKBLACK
     * @property {string} PINK_BLUE  PINKBLUE
     * @property {string} PINK_RED  PINKRED
     * @property {string} PINK_WHITE  PINKWHITE
     * @property {string} RAIN_BOW  RAINBOW
     * @property {string} RED_BLACK  REDBLACK
     * @property {string} RED_WHITE  REDWHITE
     * @property {string} SPECTRUM  SPECTRUM
     * @property {string} TERRAIN  TERRAIN
     * @property {string} YELLOW_BLACK  YELLOWBLACK
     * @property {string} YELLOW_BLUE  YELLOWBLUE
     * @property {string} YELLOW_GREEN  YELLOWGREEN
     * @property {string} YELLOW_RED  YELLOWRED
     * @property {string} YELLOW_WHITE  YELLOWWHITE
     */
    var ColorGradientType = exports.ColorGradientType = _SuperMap2.default.ColorGradientType = {
      BLACK_WHITE: "BLACKWHITE",
      BLUE_BLACK: "BLUEBLACK",
      BLUE_RED: "BLUERED",
      BLUE_WHITE: "BLUEWHITE",
      CYAN_BLACK: "CYANBLACK",
      CYAN_BLUE: "CYANBLUE",
      CYAN_GREEN: "CYANGREEN",
      CYAN_WHITE: "CYANWHITE",
      GREEN_BLACK: "GREENBLACK",
      GREEN_BLUE: "GREENBLUE",
      GREEN_ORANGE_VIOLET: "GREENORANGEVIOLET",
      GREEN_RED: "GREENRED",
      GREEN_WHITE: "GREENWHITE",
      PINK_BLACK: "PINKBLACK",
      PINK_BLUE: "PINKBLUE",
      PINK_RED: "PINKRED",
      PINK_WHITE: "PINKWHITE",
      RAIN_BOW: "RAINBOW",
      RED_BLACK: "REDBLACK",
      RED_WHITE: "REDWHITE",
      SPECTRUM: "SPECTRUM",
      TERRAIN: "TERRAIN",
      YELLOW_BLACK: "YELLOWBLACK",
      YELLOW_BLUE: "YELLOWBLUE",
      YELLOW_GREEN: "YELLOWGREEN",
      YELLOW_RED: "YELLOWRED",
      YELLOW_WHITE: "YELLOWWHITE"
    };

    /**
     * @name TextAlignment
     * @memberOf SuperMap
     * @description  鏂囨湰瀵归綈鏋氫妇銆�
     *
     * @property {string} TOPLEFT  TOPLEFT
     * @property {string} TOPCENTER  TOPCENTER
     * @property {string} TOPRIGHT  TOPRIGHT
     * @property {string} BASELINELEFT  BASELINELEFT
     * @property {string} BASELINECENTER  BASELINECENTER
     * @property {string} BASELINERIGHT  BASELINERIGHT
     * @property {string} BOTTOMLEFT  BOTTOMLEFT
     * @property {string} BOTTOMCENTER  BOTTOMCENTER
     * @property {string} BOTTOMRIGHT  BOTTOMRIGHT
     * @property {string} MIDDLELEFT  MIDDLELEFT
     * @property {string} MIDDLECENTER  MIDDLECENTER
     * @property {string} MIDDLERIGHT  MIDDLERIGHT
     */
    var TextAlignment = exports.TextAlignment = _SuperMap2.default.TextAlignment = {
      TOPLEFT: "TOPLEFT",
      TOPCENTER: "TOPCENTER",
      TOPRIGHT: "TOPRIGHT",
      BASELINELEFT: "BASELINELEFT",
      BASELINECENTER: "BASELINECENTER",
      BASELINERIGHT: "BASELINERIGHT",
      BOTTOMLEFT: "BOTTOMLEFT",
      BOTTOMCENTER: "BOTTOMCENTER",
      BOTTOMRIGHT: "BOTTOMRIGHT",
      MIDDLELEFT: "MIDDLELEFT",
      MIDDLECENTER: "MIDDLECENTER",
      MIDDLERIGHT: "MIDDLERIGHT"
    };

    /**
     * @name FillGradientMode
     * @memberOf SuperMap
     * @description  娓愬彉濉厖椋庢牸鐨勬笎鍙樼被鍨嬫灇涓俱€�
     *
     * @property {string} NONE  NONE
     * @property {string} LINEAR  LINEAR
     * @property {string} RADIAL  RADIAL
     * @property {string} CONICAL  CONICAL
     * @property {string} SQUARE  SQUARE
     */
    var FillGradientMode = exports.FillGradientMode = _SuperMap2.default.FillGradientMode = {
      NONE: "NONE",
      LINEAR: "LINEAR",
      RADIAL: "RADIAL",
      CONICAL: "CONICAL",
      SQUARE: "SQUARE"
    };

    /**
     * @name AlongLineDirection
     * @memberOf SuperMap
     * @name AlongLineDirection
     * @memberOf SuperMap
     * @description  鏍囩娌跨嚎鏍囨敞鏂瑰悜鏋氫妇銆�
     *
     * @property {string} NORMAL  ALONG_LINE_NORMAL
     * @property {string} LB_TO_RT  LEFT_BOTTOM_TO_RIGHT_TOP
     * @property {string} LT_TO_RB  LEFT_TOP_TO_RIGHT_BOTTOM
     * @property {string} RB_TO_LT  RIGHT_BOTTOM_TO_LEFT_TOP
     * @property {string} RT_TO_LB  RIGHT_TOP_TO_LEFT_BOTTOM
     */
    var AlongLineDirection = exports.AlongLineDirection = _SuperMap2.default.AlongLineDirection = {
      NORMAL: "ALONG_LINE_NORMAL",
      LB_TO_RT: "LEFT_BOTTOM_TO_RIGHT_TOP",
      LT_TO_RB: "LEFT_TOP_TO_RIGHT_BOTTOM",
      RB_TO_LT: "RIGHT_BOTTOM_TO_LEFT_TOP",
      RT_TO_LB: "RIGHT_TOP_TO_LEFT_BOTTOM"
    };

    /**
     * @name LabelBackShape
     * @memberOf SuperMap
     * @description  鏍囩涓撻鍥句腑鏍囩鑳屾櫙鐨勫舰鐘舵灇涓俱€�
     *
     * @property {string} DIAMOND  DIAMOND
     * @property {string} ELLIPSE  ELLIPSE
     * @property {string} MARKER  MARKER
     * @property {string} NONE  NONE
     * @property {string} RECT  RECT
     * @property {string} ROUNDRECT  ROUNDRECT
     * @property {string} TRIANGLE  TRIANGLE
     */
    var LabelBackShape = exports.LabelBackShape = _SuperMap2.default.LabelBackShape = {
      DIAMOND: "DIAMOND",
      ELLIPSE: "ELLIPSE",
      MARKER: "MARKER",
      NONE: "NONE",
      RECT: "RECT",
      ROUNDRECT: "ROUNDRECT",
      TRIANGLE: "TRIANGLE"
    };

    /**
     * @name LabelOverLengthMode
     * @memberOf SuperMap
     * @description  鏍囩涓撻鍥句腑瓒呴暱鏍囩鐨勫鐞嗘ā寮忔灇涓俱€�
     *
     * @property {string} NEWLINE  NEWLINE
     * @property {string} NONE  NONE
     * @property {string} OMIT  OMIT
     */
    var LabelOverLengthMode = exports.LabelOverLengthMode = _SuperMap2.default.LabelOverLengthMode = {
      NEWLINE: "NEWLINE",
      NONE: "NONE",
      OMIT: "OMIT"
    };

    /**
     * @name DirectionType
     * @memberOf SuperMap
     * @description  缃戠粶鍒嗘瀽涓柟鍚戞灇涓俱€�
     * 鍦ㄨ椹跺紩瀵煎瓙椤逛腑浣跨敤銆�
     *
     * @property {string} EAST  EAST
     * @property {string} NONE  NONE
     * @property {string} NORTH  NORTH
     * @property {string} SOURTH  SOURTH
     * @property {string} WEST  WEST
     */
    var DirectionType = exports.DirectionType = _SuperMap2.default.DirectionType = {
      EAST: "EAST",
      NONE: "NONE",
      NORTH: "NORTH",
      SOURTH: "SOURTH",
      WEST: "WEST"
    };

    /**
     * @name SideType
     * @memberOf SuperMap
     * @description  琛岄┒浣嶇疆鏋氫妇銆�
     * 琛ㄧず鍦ㄨ椹跺湪璺殑宸﹁竟銆佸彸杈规垨鑰呰矾涓婄殑鏋氫妇,璇ョ被鐢ㄥ湪琛岄┒瀵煎紩瀛愰」绫讳腑銆�
     *
     * @property {string} LEFT  LEFT
     * @property {string} MIDDLE  MIDDLE
     * @property {string} NONE  NONE
     * @property {string} RIGHT  RIGHT
     */
    var SideType = exports.SideType = _SuperMap2.default.SideType = {
      LEFT: "LEFT",
      MIDDLE: "MIDDLE",
      NONE: "NONE",
      RIGHT: "RIGHT"
    };

    /**
     * @name SupplyCenterType
     * @memberOf SuperMap
     * @description  璧勬簮渚涚粰涓績绫诲瀷鏋氫妇銆�
     * 璇ユ灇涓惧畾涔変簡缃戠粶鍒嗘瀽涓祫婧愪腑蹇冪偣鐨勭被鍨嬶紝涓昏鐢ㄤ簬璧勬簮鍒嗛厤鍜岄€夊潃鍒嗗尯銆�
     * 璧勬簮渚涚粰涓績鐐圭殑绫诲瀷鍖呮嫭闈炰腑蹇冿紝鍥哄畾涓績鍜屽彲閫変腑蹇冦€傚浐瀹氫腑蹇冪敤浜庤祫婧愬垎閰嶅垎鏋愶紱 鍥哄畾涓績鍜屽彲閫変腑蹇冪敤浜庨€夊潃鍒嗘瀽锛涢潪涓績鍦ㄤ袱绉嶇綉缁滃垎鏋愭椂閮戒笉浜堣€冭檻銆�
     *
     * @property {string} FIXEDCENTER  FIXEDCENTER
     * @property {string} NULL  NULL
     * @property {string} OPTIONALCENTER  OPTIONALCENTER
     */
    var SupplyCenterType = exports.SupplyCenterType = _SuperMap2.default.SupplyCenterType = {
      FIXEDCENTER: "FIXEDCENTER",
      NULL: "NULL",
      OPTIONALCENTER: "OPTIONALCENTER"
    };

    /**
     * @name TurnType
     * @memberOf SuperMap
     * @description  杞集鏂瑰悜鏋氫妇銆�
     * 鐢ㄥ湪琛岄┒寮曞瀛愰」绫讳腑锛岃〃绀鸿浆寮殑鏂瑰悜銆�
     *
     * @property {string} AHEAD  AHEAD
     * @property {string} BACK  BACK
     * @property {string} END  END
     * @property {string} LEFT  LEFT
     * @property {string} NONE  NONE
     * @property {string} RIGHT  RIGHT
     */
    var TurnType = exports.TurnType = _SuperMap2.default.TurnType = {
      AHEAD: "AHEAD",
      BACK: "BACK",
      END: "END",
      LEFT: "LEFT",
      NONE: "NONE",
      RIGHT: "RIGHT"
    };

    /**
     * @name BufferEndType
     * @memberOf SuperMap
     * @description  缂撳啿鍖哄垎鏋怋ufferEnd绫诲瀷銆�
     *
     * @property {string} FLAT  FLAT
     * @property {string} ROUND  ROUND
     */
    var BufferEndType = exports.BufferEndType = _SuperMap2.default.BufferEndType = {
      FLAT: "FLAT",
      ROUND: "ROUND"
    };

    /**
     * @name OverlayOperationType
     * @memberOf SuperMap
     * @description  鍙犲姞鍒嗘瀽绫诲瀷鏋氫妇銆�
     *
     * @property {string} CLIP  CLIP
     * @property {string} ERASE  ERASE
     * @property {string} IDENTITY  IDENTITY
     * @property {string} INTERSECT  INTERSECT
     * @property {string} UNION  UNION
     * @property {string} UPDATE  UPDATE
     * @property {string} XOR  XOR
     */
    var OverlayOperationType = exports.OverlayOperationType = _SuperMap2.default.OverlayOperationType = {
      CLIP: "CLIP",
      ERASE: "ERASE",
      IDENTITY: "IDENTITY",
      INTERSECT: "INTERSECT",
      UNION: "UNION",
      UPDATE: "UPDATE",
      XOR: "XOR"
    };

    /**
     * @name SmoothMethod
     * @memberOf SuperMap
     * @description  鍏夋粦鏂规硶鏋氫妇銆�
     * 鐢ㄤ簬浠嶨rid 鎴朌EM鏁版嵁鐢熸垚绛夊€肩嚎鎴栫瓑鍊奸潰鏃跺绛夊€肩嚎鎴栬€呯瓑鍊奸潰鐨勮竟鐣岀嚎杩涜骞虫粦澶勭悊鐨勬柟娉曘€�
     *
     * @property {string} BSPLINE  BSPLINE
     * @property {string} POLISH  POLISH
     */
    var SmoothMethod = exports.SmoothMethod = _SuperMap2.default.SmoothMethod = {
      BSPLINE: "BSPLINE",
      POLISH: "POLISH"
    };

    /**
     * @name SurfaceAnalystMethod
     * @memberOf SuperMap
     * @description  琛ㄩ潰鍒嗘瀽鏂规硶鏋氫妇銆�
     * 閫氳繃瀵规暟鎹繘琛岃〃闈㈠垎鏋愶紝鑳藉鎸栨帢鍘熷鏁版嵁鎵€鍖呭惈鐨勪俊鎭紝浣挎煇浜涚粏鑺傛槑鏄惧寲锛屾槗浜庡垎鏋愩€�
     *
     * @property {string} ISOLINE  ISOLINE
     * @property {string} ISOREGION  ISOREGION
     */
    var SurfaceAnalystMethod = exports.SurfaceAnalystMethod = _SuperMap2.default.SurfaceAnalystMethod = {
      ISOLINE: "ISOLINE",
      ISOREGION: "ISOREGION"
    };
    /**
     * @name DataReturnMode
     * @memberOf SuperMap
     * @description  鏁版嵁杩斿洖妯″紡鏋氫妇銆�
     * 璇ユ灇涓剧敤浜庢寚瀹氱┖闂村垎鏋愯繑鍥炵粨鏋滄ā寮�,鍖呭惈杩斿洖鏁版嵁闆嗘爣璇嗗拰璁板綍闆嗐€佸彧杩斿洖鏁版嵁闆嗘爣璇�(鏁版嵁闆嗗悕绉癅鏁版嵁婧愬悕绉�)鍙婂彧杩斿洖璁板綍闆嗕笁绉嶆ā寮忋€�
     *
     * @property {string} DATASET_AND_RECORDSET  DATASET_AND_RECORDSET
     * @property {string} DATASET_ONLY  DATASET_ONLY
     * @property {string} RECORDSET_ONLY  RECORDSET_ONLY
     */
    var DataReturnMode = exports.DataReturnMode = _SuperMap2.default.DataReturnMode = {
      DATASET_AND_RECORDSET: "DATASET_AND_RECORDSET",
      DATASET_ONLY: "DATASET_ONLY",
      RECORDSET_ONLY: "RECORDSET_ONLY"
    };

    /**
     * @name EditType
     * @memberOf SuperMap
     * @description  瑕佺礌闆嗘洿鏂版ā寮忔灇涓俱€�
     * 璇ユ灇涓剧敤浜庢寚瀹氭暟鎹湇鍔′腑瑕佺礌闆嗘洿鏂版ā寮�,鍖呭惈娣诲姞瑕佺礌闆嗐€佹洿鏂拌绱犻泦鍜屽垹闄よ绱犻泦銆�
     *
     * @property {string} ADD  add
     * @property {string} UPDATE  update
     * @property {string} DELETE  delete
     */
    var EditType = exports.EditType = _SuperMap2.default.EditType = {
      ADD: "add",
      UPDATE: "update",
      DELETE: "delete"
    };

    /**
     * @name TransferTactic
     * @memberOf SuperMap
     * @description  鍏氦鎹箻绛栫暐鏋氫妇銆�
     * 璇ユ灇涓剧敤浜庢寚瀹氬叕浜ゆ湇鍔′腑瑕佺礌闆嗘洿鏂版ā寮�,鍖呭惈娣诲姞瑕佺礌闆嗐€佹洿鏂拌绱犻泦鍜屽垹闄よ绱犻泦銆�
     *
     * @property {string} LESS_TIME  LESS_TIME
     * @property {string} LESS_TRANSFER  LESS_TRANSFER
     * @property {string} LESS_WALK  LESS_WALK
     * @property {string} MIN_DISTANCE  MIN_DISTANCE
     */
    var TransferTactic = exports.TransferTactic = _SuperMap2.default.TransferTactic = {
      LESS_TIME: "LESS_TIME",
      LESS_TRANSFER: "LESS_TRANSFER",
      LESS_WALK: "LESS_WALK",
      MIN_DISTANCE: "MIN_DISTANCE"
    };

    /**
     * @name TransferPreference
     * @memberOf SuperMap
     * @description  鍏氦鎹箻绛栫暐鏋氫妇銆�
     * 璇ユ灇涓剧敤浜庢寚瀹氫氦閫氭崲涔樻湇鍔′腑璁剧疆鍦伴搧浼樺厛銆佸叕浜や紭鍏堛€佷笉涔樺湴閾併€佹棤鍋忓ソ绛夊亸濂借缃€�
     *
     * @property {string} BUS  BUS
     * @property {string} SUBWAY  SUBWAY
     * @property {string} NO_SUBWAY  NO_SUBWAY
     * @property {string} NONE  NONE
     */
    var TransferPreference = exports.TransferPreference = _SuperMap2.default.TransferPreference = {
      BUS: "BUS",
      SUBWAY: "SUBWAY",
      NO_SUBWAY: "NO_SUBWAY",
      NONE: "NONE"
    };

    /**
     * @name GridType
     * @memberOf SuperMap
     * @description  鍦板浘鑳屾櫙鏍肩綉绫诲瀷鏋氫妇銆�
     *
     * @property {string} CROSS  CROSS
     * @property {string} GRID  GRID
     * @property {string} POINT  POINT
     */
    var GridType = exports.GridType = _SuperMap2.default.GridType = {
      CROSS: "CROSS",
      GRID: "GRID",
      POINT: "POINT"
    };

    /**
     * @name ColorSpaceType
     * @memberOf SuperMap
     * @description  鑹插僵绌洪棿鏋氫妇銆�
     * 鐢变簬鎴愯壊鍘熺悊鐨勪笉鍚岋紝鍐冲畾浜嗘樉绀哄櫒銆佹姇褰变华杩欑被闈犺壊鍏夌洿鎺ュ悎鎴愰鑹茬殑棰滆壊璁惧鍜屾墦鍗版満銆�
     * 鍗板埛鏈鸿繖绫婚潬浣跨敤棰滄枡鐨勫嵃鍒疯澶囧湪鐢熸垚棰滆壊鏂瑰紡涓婄殑鍖哄埆銆�
     * 閽堝涓婅堪涓嶅悓鎴愯壊鏂瑰紡锛孲uperMap 鎻愪緵涓ょ鑹插僵绌洪棿锛�
     * 鍒嗗埆涓� RGB 鍜� CMYK銆俁GB 涓昏鐢ㄤ簬鏄剧ず绯荤粺涓紝CMYK 涓昏鐢ㄤ簬鍗板埛绯荤粺涓€�
     *
     * @property {string} CMYK  CMYK
     * @property {string} RGB  RGB
     */
    var ColorSpaceType = exports.ColorSpaceType = _SuperMap2.default.ColorSpaceType = {
      CMYK: "CMYK",
      RGB: "RGB"
    };

    /**
     * @name LayerType
     * @memberOf SuperMap
     * @description  鍥惧眰绫诲瀷銆�
     *
     * @property {string} UGC  UGC
     * @property {string} WMS  WMS
     * @property {string} WFS  WFS
     * @property {string} CUSTOM  CUSTOM
     */
    var LayerType = exports.LayerType = _SuperMap2.default.LayerType = {
      UGC: "UGC",
      WMS: "WMS",
      WFS: "WFS",
      CUSTOM: "CUSTOM"

    };

    /**
     * @name UGCLayerType
     * @memberOf SuperMap
     * @description  UGC鍥惧眰绫诲瀷銆�
     *
     * @property {string} THEME  THEME
     * @property {string} VECTOR  VECTOR
     * @property {string} GRID  GRID
     * @property {string} IMAGE  IMAGE
     */
    var UGCLayerType = exports.UGCLayerType = _SuperMap2.default.UGCLayerType = {
      THEME: "THEME",
      VECTOR: "VECTOR",
      GRID: "GRID",
      IMAGE: "IMAGE"

    };

    /**
     * @name StatisticMode
     * @memberOf SuperMap
     * @description  瀛楁缁熻鏂规硶绫诲瀷銆�
     *
     * @property {string} AVERAGE  AVERAGE, 缁熻鎵€閫夊瓧娈电殑骞冲潎鍊�
     * @property {string} MAX  MAX, 缁熻鎵€閫夊瓧娈电殑鏈€澶у€�
     * @property {string} MIN  MIN, 缁熻鎵€閫夊瓧娈电殑鏈€灏忓€�
     * @property {string} STDDEVIATION  STDDEVIATION, 缁熻鎵€閫夊瓧娈电殑鏍囧噯宸�
     * @property {string} SUM  SUM, 缁熻鎵€閫夊瓧娈电殑鎬诲拰
     * @property {string} VARIANCE  VARIANCE, 缁熻鎵€閫夊瓧娈电殑鏂瑰樊
     */
    var StatisticMode = exports.StatisticMode = _SuperMap2.default.StatisticMode = {
      AVERAGE: "AVERAGE",
      MAX: "MAX",
      MIN: "MIN",
      STDDEVIATION: "STDDEVIATION",
      SUM: "SUM",
      VARIANCE: "VARIANCE"
    };

    /**
     * @name PixelFormat
     * @memberOf SuperMap
     * @description  鏍呮牸涓庡奖鍍忔暟鎹瓨鍌ㄧ殑鍍忕礌鏍煎紡鏋氫妇銆�
     *
     * @property {string} BIT16  BIT16, 姣忎釜鍍忓厓鐢�16涓瘮鐗�(鍗�2涓瓧鑺�)琛ㄧず
     * @property {string} BIT32  BIT32, 姣忎釜鍍忓厓鐢�32涓瘮鐗�(鍗�4涓瓧鑺�)琛ㄧず
     * @property {string} BIT64  BIT64, 姣忎釜鍍忓厓鐢�64涓瘮鐗�(鍗�8涓瓧鑺�)琛ㄧず锛屽彧鎻愪緵缁欐爡鏍兼暟鎹泦浣跨敤
     * @property {string} SINGLE  SINGLE, 姣忎釜鍍忓厓鐢�4涓瓧鑺傛潵琛ㄧず锛屽彧鎻愪緵缁欐爡鏍兼暟鎹泦浣跨敤
     * @property {string} DOUBLE  DOUBLE, 姣忎釜鍍忓厓鐢�8涓瓧鑺傛潵琛ㄧず锛屽彧鎻愪緵缁欐爡鏍兼暟鎹泦浣跨敤
     * @property {string} UBIT1  UBIT1, 姣忎釜鍍忓厓鐢�1涓瘮鐗硅〃绀�
     * @property {string} UBIT4  UBIT4, 姣忎釜鍍忓厓鐢�4涓瘮鐗规潵琛ㄧず
     * @property {string} UBIT8  UBIT8, 姣忎釜鍍忓厓鐢�8涓瘮鐗�(鍗�1涓瓧鑺�)鏉ヨ〃绀�
     * @property {string} UBIT24  UBIT24, 姣忎釜鍍忓厓鐢�24涓瘮鐗�(鍗�3涓瓧鑺�)鏉ヨ〃绀�
     * @property {string} UBIT32  UBIT32, 姣忎釜鍍忓厓鐢�32涓瘮鐗�(鍗�4涓瓧鑺�)鏉ヨ〃绀�
     */
    var PixelFormat = exports.PixelFormat = _SuperMap2.default.PixelFormat = {
      BIT16: "BIT16",
      BIT32: "BIT32",
      BIT64: "BIT64",
      SINGLE: "SINGLE",
      DOUBLE: "DOUBLE",
      UBIT1: "UBIT1",
      UBIT4: "UBIT4",
      UBIT8: "UBIT8",
      UBIT24: "UBIT24",
      UBIT32: "UBIT32"
    };

    /**
     * @name SearchMode
     * @memberOf SuperMap
     * @description  鍐呮彃鏃朵娇鐢ㄧ殑鏍锋湰鐐圭殑鏌ユ壘鏂瑰紡鏋氫妇
     *
     * @property {string} KDTREE_FIXED_COUNT  KDTREE_FIXED_COUNT, 浣跨敤 KDTREE 鐨勫浐瀹氱偣鏁版柟寮忔煡鎵惧弬涓庡唴鎻掑垎鏋愮殑鐐�
     * @property {string} KDTREE_FIXED_RADIUS  KDTREE_FIXED_RADIUS, 浣跨敤 KDTREE 鐨勫畾闀挎柟寮忔煡鎵惧弬涓庡唴鎻掑垎鏋愮殑鐐�
     * @property {string} NONE  NONE, 涓嶈繘琛屾煡鎵撅紝浣跨敤鎵€鏈夌殑杈撳叆鐐硅繘琛屽唴鎻掑垎鏋�
     * @property {string} QUADTREE  QUADTREE, 浣跨敤 QUADTREE 鏂瑰紡鏌ユ壘鍙備笌鍐呮彃鍒嗘瀽鐨勭偣锛屼粎瀵规牱鏉★紙RBF锛夋彃鍊煎拰鏅€氬厠鍚曢噾锛圞riging锛夋湁鐢�
     */
    var SearchMode = exports.SearchMode = _SuperMap2.default.SearchMode = {
      KDTREE_FIXED_COUNT: "KDTREE_FIXED_COUNT",
      KDTREE_FIXED_RADIUS: "KDTREE_FIXED_RADIUS",
      NONE: "NONE",
      QUADTREE: "QUADTREE"
    };

    /**
     * @name InterpolationAlgorithmType
     * @memberOf SuperMap
     * @description  鎻掑€煎垎鏋愮殑绠楁硶鐨勭被鍨�
     *
     * @property {string} KRIGING  KRIGING, 鏅€氬厠鍚曢噾鎻掑€兼硶
     * @property {string} SimpleKriging  SimpleKriging, 绠€鍗曞厠鍚曢噾鎻掑€兼硶
     * @property {string} UniversalKriging  UniversalKriging, 娉涘厠鍚曢噾鎻掑€兼硶
     */
    var InterpolationAlgorithmType = exports.InterpolationAlgorithmType = _SuperMap2.default.InterpolationAlgorithmType = {
      KRIGING: "KRIGING",
      SimpleKriging: "SimpleKriging",
      UniversalKriging: "UniversalKriging"
    };

    /**
     * @name VariogramMode
     * @memberOf SuperMap
     * @description  鍏嬪悤閲戯紙Kriging锛夋彃鍊兼椂鐨勫崐鍙樺嚱鏁扮被鍨嬫灇涓�
     *
     * @property {string} EXPONENTIAL  EXPONENTIAL, 鎸囨暟鍑芥暟锛圗xponential Variogram Mode锛�
     * @property {string} GAUSSIAN  GAUSSIAN,  楂樻柉鍑芥暟锛圙aussian Variogram Mode锛�
     * @property {string} SPHERICAL  SPHERICAL, 鐞冨瀷鍑芥暟锛圫pherical Variogram Mode锛�
     */
    var VariogramMode = exports.VariogramMode = _SuperMap2.default.VariogramMode = {
      EXPONENTIAL: "EXPONENTIAL",
      GAUSSIAN: "GAUSSIAN",
      SPHERICAL: "SPHERICAL"
    };

    /**
     * @name Exponent
     * @memberOf SuperMap
     * @description  瀹氫箟浜嗘硾鍏嬪悤閲戯紙UniversalKriging锛夋彃鍊兼椂鏍风偣鏁版嵁涓秼鍔块潰鏂圭▼鐨勯樁鏁�
     *
     * @property {string} EXP1  EXP1, 闃舵暟涓�1
     * @property {string} EXP2  EXP2, 闃舵暟涓�2
     */
    var Exponent = exports.Exponent = _SuperMap2.default.Exponent = {
      EXP1: "EXP1",
      EXP2: "EXP2"
    };

    /**
     * @name ClientType
     * @memberOf SuperMap
     * @description token鐢宠鐨勫鎴风鏍囪瘑绫诲瀷
     *
     * @property {string} IP  IP
     * @property {string} REFERER  Referer
     * @property {string} REQUESTIP  RequestIP
     * @property {string} NONE  NONE
     * @property {string} SERVER  SERVER
     * @property {string} WEB  WEB
     */
    var ClientType = exports.ClientType = _SuperMap2.default.ClientType = {
      IP: "IP",
      REFERER: "Referer",
      REQUESTIP: "RequestIP",
      NONE: "NONE",
      SERVER: "SERVER",
      WEB: "WEB"
    };

    /**
     * @name ChartType
     * @memberOf SuperMap
     * @description 瀹㈡埛绔笓棰樺浘鍥捐〃绫诲瀷
     *
     * @property {string} BAR  Bar
     * @property {string} BAR3D  Bar3D
     * @property {string} CIRCLE  Circle
     * @property {string} PIE  Pie
     * @property {string} POINT  Point
     * @property {string} LINE  Line
     * @property {string} RING  Ring
     */
    var ChartType = exports.ChartType = _SuperMap2.default.ChartType = {
      BAR: "Bar",
      BAR3D: "Bar3D",
      CIRCLE: "Circle",
      PIE: "Pie",
      POINT: "Point",
      LINE: "Line",
      RING: "Ring"
    };

    /**
     * @name ClipAnalystMode
     * @memberOf SuperMap
     * @description  瑁佸壀鍒嗘瀽妯″紡
     *
     * @property {string} CLIP  clip
     * @property {string} INTERSECT  intersect
     */
    var ClipAnalystMode = exports.ClipAnalystMode = _SuperMap2.default.ClipAnalystMode = {
      CLIP: "clip",
      INTERSECT: "intersect"
    };
    /**
     * @name AnalystAreaUnit
     * @memberOf SuperMap
     * @description 鍒嗗竷寮忓垎鏋愰潰绉崟浣�
     *
     * @property {string} SQUAREMETER  SquareMeter
     * @property {string} SQUAREKILOMETER   SquareKiloMeter
     * @property {string} HECTARE  Hectare
     * @property {string} ARE   Are
     * @property {string} ACRE   Acre
     * @property {string} SQUAREFOOT   SquareFoot
     * @property {string} SQUAREYARD   SquareYard
     * @property {string} SQUAREMILE   SquareMile
     */
    var AnalystAreaUnit = exports.AnalystAreaUnit = _SuperMap2.default.AnalystAreaUnit = {
      "SQUAREMETER": "SquareMeter",
      "SQUAREKILOMETER": "SquareKiloMeter",
      "HECTARE": "Hectare",
      "ARE": "Are",
      "ACRE": "Acre",
      "SQUAREFOOT": "SquareFoot",
      "SQUAREYARD": "SquareYard",
      "SQUAREMILE": "SquareMile"
    };
    /**
     * @name AnalystSizeUnit
     * @memberOf SuperMap
     * @description 鍒嗗竷寮忓垎鏋愬崟浣�
     *
     * @property {string} METER   Meter
     * @property {string} KILOMETER   Kilometer
     * @property {string} YARD   Yard
     * @property {string} FOOT   Foot
     * @property {string} MILE   Mile
     */
    var AnalystSizeUnit = exports.AnalystSizeUnit = _SuperMap2.default.AnalystSizeUnit = {
      "METER": "Meter",
      "KILOMETER": "Kilometer",
      "YARD": "Yard",
      "FOOT": "Foot",
      "MILE": "Mile"
    };
    /**
     * @name StatisticAnalystMode
     * @memberOf SuperMap
     * @description 鍒嗗竷寮忓垎鏋愮粺璁℃ā寮�
     *
     * @property {string} MAX   max
     * @property {string} MIN   min
     * @property {string} AVERAGE   average
     * @property {string} SUM   sum
     * @property {string} VARIANCE   variance
     * @property {string} STDDEVIATION   stdDeviation
     */
    var StatisticAnalystMode = exports.StatisticAnalystMode = _SuperMap2.default.StatisticAnalystMode = {
      "MAX": "max",
      "MIN": "min",
      "AVERAGE": "average",
      "SUM": "sum",
      "VARIANCE": "variance",
      "STDDEVIATION": "stdDeviation"
    };
    /**
     * @name SummaryType
     * @memberOf SuperMap
     * @description 鍒嗗竷寮忓垎鏋愯仛鍚堢被鍨�
     *
     * @property {string} SUMMARYMESH   SUMMARYMESH
     * @property {string} SUMMARYREGION SUMMARYREGION
     */
    var SummaryType = exports.SummaryType = _SuperMap2.default.SummaryType = {
      "SUMMARYMESH": "SUMMARYMESH",
      "SUMMARYREGION": "SUMMARYREGION"

    };

    /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Point = __webpack_require__(2);

    var _Point2 = _interopRequireDefault(_Point);

    var _Collection = __webpack_require__(3);

    var _Collection2 = _interopRequireDefault(_Collection);

    var _Curve2 = __webpack_require__(34);

    var _Curve3 = _interopRequireDefault(_Curve2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.LineString
     * @classdesc 鍑犱綍瀵硅薄绾夸覆绫汇€�
     * @param points - {Array<SuperMap.Geometry.Point>} 鐢ㄦ潵鐢熸垚绾夸覆鐨勭偣鏁扮粍銆�
     * @extends {SuperMap.Geometry.Curve}
     * @example
     * var points = [new SuperMap.Geometry.Point(4933.319287022352, -3337.3849141502124),
     *     new SuperMap.Geometry.Point(4960.9674060199022, -3349.3316322355736),
     *     new SuperMap.Geometry.Point(5006.0235999418364, -3358.8890067038628),
     *     new SuperMap.Geometry.Point(5075.3145648369318, -3378.0037556404409),
     *     new SuperMap.Geometry.Point(5305.19551436013, -3376.9669111768926)],
     * var roadLine = new SuperMap.Geometry.LineString(points)锛�
     */
    var LineString = function (_Curve) {
      _inherits(LineString, _Curve);

      function LineString(points) {
        _classCallCheck(this, LineString);

        var _this = _possibleConstructorReturn(this, (LineString.__proto__ || Object.getPrototypeOf(LineString)).call(this, points));

        _this.CLASS_NAME = "SuperMap.Geometry.LineString";
        return _this;
      }

      /**
       * @function SuperMap.Geometry.LineString.prototype.removeComponent
       * @description 鍙湁鍦ㄧ嚎涓蹭笂鏈変笁涓垨鏇村鐨勭偣鐨勬椂鍊欙紝鎵嶄細鍏佽绉婚櫎鐐癸紙鍚﹀垯缁撴灉灏嗕細鏄崟涓€鐨勭偣锛夈€�
       * @param point - {SuperMap.Geometry.Point} 灏嗚鍒犻櫎鐨勭偣銆�
       * @returns {boolean} 鍒犻櫎鐨勭偣銆�
       */


      _createClass(LineString, [{
        key: 'removeComponent',
        value: function removeComponent(point) {
          var removed = this.components && this.components.length > 2;
          if (removed) {
            _Collection2.default.prototype.removeComponent.apply(this, arguments);
          }
          return removed;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.intersects
         * @description 鍒ゆ柇涓や釜鍑犱綍鍥惧舰鏄惁鐩镐氦銆�
         * @param geometry - {SuperMap.Geometry} 浠绘剰鐨勫嚑浣曠被鍨嬨€�
         * @returns {boolean} 杈撳叆鍑犱綍鍥惧舰涓庡綋鍓嶅嚑浣曞浘褰㈡槸鍚︾浉浜ゃ€�
         */

      }, {
        key: 'intersects',
        value: function intersects(geometry) {
          var intersect = false;
          var type = geometry.CLASS_NAME;
          if (type === "SuperMap.Geometry.LineString" || type === "SuperMap.Geometry.LinearRing" || type === "SuperMap.Geometry.Point") {
            var segs1 = this.getSortedSegments();
            var segs2;
            if (type === "SuperMap.Geometry.Point") {
              segs2 = [{
                x1: geometry.x, y1: geometry.y,
                x2: geometry.x, y2: geometry.y
              }];
            } else {
              segs2 = geometry.getSortedSegments();
            }
            var seg1, seg1x1, seg1x2, seg1y1, seg1y2, seg2, seg2y1, seg2y2;
            // sweep right
            outer: for (var i = 0, len = segs1.length; i < len; ++i) {
              seg1 = segs1[i];
              seg1x1 = seg1.x1;
              seg1x2 = seg1.x2;
              seg1y1 = seg1.y1;
              seg1y2 = seg1.y2;
              inner: for (var j = 0, jlen = segs2.length; j < jlen; ++j) {
                seg2 = segs2[j];
                if (seg2.x1 > seg1x2) {
                  // seg1 still left of seg2
                  break;
                }
                if (seg2.x2 < seg1x1) {
                  // seg2 still left of seg1
                  continue;
                }
                seg2y1 = seg2.y1;
                seg2y2 = seg2.y2;
                if (Math.min(seg2y1, seg2y2) > Math.max(seg1y1, seg1y2)) {
                  // seg2 above seg1
                  continue;
                }
                if (Math.max(seg2y1, seg2y2) < Math.min(seg1y1, seg1y2)) {
                  // seg2 below seg1
                  continue;
                }
                if (_SuperMap2.default.Geometry.segmentsIntersect(seg1, seg2)) {
                  intersect = true;
                  break outer;
                }
              }
            }
          } else {
            intersect = geometry.intersects(this);
          }
          return intersect;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.getSortedSegments
         * @returns {Array} 鍒嗗壊瀵硅薄鐨勬暟缁勩€傚垎鍓插璞℃湁x1,y1,x2,y2灞炴€с€傝捣濮嬬偣涓簒1,y1锛岀粓鐐逛负x2,y2銆傝捣濮嬬偣涓庣粓鐐逛互澧炲簭鎺掑簭銆�
         */

      }, {
        key: 'getSortedSegments',
        value: function getSortedSegments() {
          var numSeg = this.components.length - 1;
          var segments = new Array(numSeg),
              point1,
              point2;
          for (var i = 0; i < numSeg; ++i) {
            point1 = this.components[i];
            point2 = this.components[i + 1];
            if (point1.x < point2.x) {
              segments[i] = {
                x1: point1.x,
                y1: point1.y,
                x2: point2.x,
                y2: point2.y
              };
            } else {
              segments[i] = {
                x1: point2.x,
                y1: point2.y,
                x2: point1.x,
                y2: point1.y
              };
            }
          }

          // more efficient to define this somewhere static
          function byX1(seg1, seg2) {
            return seg1.x1 - seg2.x1;
          }

          return segments.sort(byX1);
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.splitWithSegment
         * @description 浠ョ粰瀹氱殑鍒嗗壊瀵硅薄鏉ュ垎鍓插嚑浣曞璞°€�
         * @param seg - {Object} 鍒嗗壊瀵硅薄銆�
         * @param options - {Object} 鍙€夊弬鏁般€�<br>
         *         edge - {boolean} 褰撲笌杈圭晫鐩镐氦鐨勬椂鍊欐槸鍚﹀垎鍓层€傞粯璁や负true銆�
         *         tolerance - {number} 瀹瑰樊銆�
         * @returns {Object} 涓€涓甫鏈塴ines鍜宲oints灞炴€х殑瀵硅薄銆�
         */

      }, {
        key: 'splitWithSegment',
        value: function splitWithSegment(seg, options) {
          var edge = !(options && options.edge === false);
          var tolerance = options && options.tolerance;
          var lines = [];
          var verts = this.getVertices();
          var points = [];
          var intersections = [];
          var split = false;
          var vert1, vert2, point;
          var node, vertex, target;
          var interOptions = { point: true, tolerance: tolerance };
          var result = null;
          for (var i = 0, stop = verts.length - 2; i <= stop; ++i) {
            vert1 = verts[i];
            points.push(vert1.clone());
            vert2 = verts[i + 1];
            target = { x1: vert1.x, y1: vert1.y, x2: vert2.x, y2: vert2.y };
            point = _SuperMap2.default.Geometry.segmentsIntersect(seg, target, interOptions);
            if (point instanceof _Point2.default) {
              if (point.x === seg.x1 && point.y === seg.y1 || point.x === seg.x2 && point.y === seg.y2 || point.equals(vert1) || point.equals(vert2)) {
                vertex = true;
              } else {
                vertex = false;
              }
              if (vertex || edge) {
                // push intersections different than the previous
                if (!point.equals(intersections[intersections.length - 1])) {
                  intersections.push(point.clone());
                }
                if (i === 0) {
                  if (point.equals(vert1)) {
                    continue;
                  }
                }
                if (point.equals(vert2)) {
                  continue;
                }
                split = true;
                if (!point.equals(vert1)) {
                  points.push(point);
                }
                lines.push(new LineString(points));
                points = [point.clone()];
              }
            }
          }
          if (split) {
            points.push(vert2.clone());
            lines.push(new LineString(points));
          }
          if (intersections.length > 0) {
            // sort intersections along segment
            var xDir = seg.x1 < seg.x2 ? 1 : -1;
            var yDir = seg.y1 < seg.y2 ? 1 : -1;
            result = {
              lines: lines,
              points: intersections.sort(function (p1, p2) {
                return xDir * p1.x - xDir * p2.x || yDir * p1.y - yDir * p2.y;
              })
            };
          }
          return result;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.split
         * @description 鐢ㄤ竴涓嚑浣曞璞″幓鍒嗗壊鍙﹀涓€涓嚑浣曞璞°€�
         * @param target - {SuperMap.Geometry} 鐩爣鍑犱綍瀵硅薄.
         * @param options - {Object} 鍙€夊弬鏁般€�<br>
         *         mutual - {boolean} 鍒嗗壊婧愬嚑浣曞璞★紝闄や簡鐩爣瀵硅薄銆傞粯璁ゆ槸false銆�
         *         edge - {boolean} 褰撲笌杈圭晫鐩镐氦鐨勬椂鍊欐墠鍏佽鍒嗗壊锛岄粯璁ゆ槸true銆�
         *         tolerance - {number} 瀹瑰樊銆�
         * @returns {Array} 鍑犱綍瀵硅薄鍒楄〃銆�
         */

      }, {
        key: 'split',
        value: function split(target, options) {
          var results = null;
          var mutual = options && options.mutual;
          var sourceSplit, targetSplit, sourceParts, targetParts;
          if (target instanceof LineString) {
            var verts = this.getVertices();
            var vert1, vert2, seg, splits, lines, point;
            var points = [];
            sourceParts = [];
            for (var i = 0, stop = verts.length - 2; i <= stop; ++i) {
              vert1 = verts[i];
              vert2 = verts[i + 1];
              seg = {
                x1: vert1.x, y1: vert1.y,
                x2: vert2.x, y2: vert2.y
              };
              targetParts = targetParts || [target];
              if (mutual) {
                points.push(vert1.clone());
              }
              for (var j = 0; j < targetParts.length; ++j) {
                splits = targetParts[j].splitWithSegment(seg, options);
                if (splits) {
                  // splice in new features
                  lines = splits.lines;
                  if (lines.length > 0) {
                    lines.unshift(j, 1);
                    Array.prototype.splice.apply(targetParts, lines);
                    j += lines.length - 2;
                  }
                  if (mutual) {
                    for (var k = 0, len = splits.points.length; k < len; ++k) {
                      point = splits.points[k];
                      if (!point.equals(vert1)) {
                        points.push(point);
                        sourceParts.push(new LineString(points));
                        if (point.equals(vert2)) {
                          points = [];
                        } else {
                          points = [point.clone()];
                        }
                      }
                    }
                  }
                }
              }
            }
            if (mutual && sourceParts.length > 0 && points.length > 0) {
              points.push(vert2.clone());
              sourceParts.push(new LineString(points));
            }
          } else {
            results = target.splitWith(this, options);
          }
          if (targetParts && targetParts.length > 1) {
            targetSplit = true;
          } else {
            targetParts = [];
          }
          if (sourceParts && sourceParts.length > 1) {
            sourceSplit = true;
          } else {
            sourceParts = [];
          }
          if (targetSplit || sourceSplit) {
            if (mutual) {
              results = [sourceParts, targetParts];
            } else {
              results = targetParts;
            }
          }
          return results;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.splitWith
         * @description 鐢ㄥ嚑浣曞璞″垎鍓插彟涓€涓嚑浣曞璞°€�
         * @param geometry - {SuperMap.Geometry} A geometry used to split this geometry (the source).
         * @param options - {Object} 鍙€夊弬鏁般€�<br>
         *         mutual - {boolean} 鍒嗗壊婧愬嚑浣曞璞★紝闄や簡鐩爣瀵硅薄銆傞粯璁ゆ槸false銆�
         *         edge - {boolean} 褰撲笌杈圭晫鐩镐氦鐨勬椂鍊欐墠鍏佽鍒嗗壊锛岄粯璁ゆ槸true銆�
         *         tolerance - {number} 瀹瑰樊銆�
         * @returns {Array} 鍑犱綍瀵硅薄鏁扮粍銆�
         */

      }, {
        key: 'splitWith',
        value: function splitWith(geometry, options) {
          return geometry.split(this, options);
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.getVertices
         * @description 杩斿洖鍑犱綍鍥惧舰鐨勬墍鏈夐《鐐圭殑鍒楄〃銆�
         * @param nodes - {boolean} 瀵逛簬绾挎潵璇达紝浠呬粎杩斿洖浣滀负绔偣鐨勯《鐐癸紝濡傛灉璁句负false锛屽垯杩斿洖闈炵鐐圭殑椤剁偣
         * 濡傛灉娌℃湁璁剧疆姝ゅ弬鏁帮紝鍒欒繑鍥炴墍鏈夐《鐐广€�
         * @returns {Array} 鍑犱綍鍥惧舰鐨勯《鐐瑰垪琛ㄣ€�
         */

      }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
          var vertices;
          if (nodes === true) {
            vertices = [this.components[0], this.components[this.components.length - 1]];
          } else if (nodes === false) {
            vertices = this.components.slice(1, this.components.length - 1);
          } else {
            vertices = this.components.slice();
          }
          return vertices;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.distanceTo
         * @description 璁＄畻涓や釜鍑犱釜鍥惧舰闂寸殑鏈€灏忚窛绂伙紙x-y骞抽潰鍧愭爣绯讳笅锛夈€�
         * @param geometry {SuperMap.Geometry} 鐩爣鍑犱綍鍥惧舰銆�
         * @param options {Object}璺濈璁＄畻闇€瑕佽缃殑鍙€夊睘鎬с€傛湁鏁堢殑閫夐」鍙栧喅浜庣壒瀹氱殑鍑犱綍绫诲瀷銆�
         *         details - {boolean} 杩斿洖璺濈璁＄畻鐨勭粏鑺傦紝榛樿涓篺alse銆�
         *         edge - {boolean} 璁＄畻涓€涓嚑浣曞浘褰㈠埌鐩爣鍑犱綍鍥惧舰杈圭紭鐨勬渶杩戣窛绂伙紝榛樿涓簍rue銆� 濡傛灉璁句负true锛�
         *                          涓€涓嚑浣曞浘褰㈠畬鍏ㄥ寘鍚湪鐩爣鍑犱綍鍥惧舰涓椂锛岃皟鐢╠istanceTo杩斿洖闈為浂缁撴灉锛屽鏋渇alse锛屼袱涓嚑浣曞浘褰㈢浉浜ゆ儏鍐典笅
         *                          璋冪敤distanceTo缁撴灉杩斿洖0锛岃€屼笖濡傛灉false锛屽皢涓嶈繑璺濈銆�
         * @returns {number | Object} 杩斿洖涓€涓嚑浣曞浘褰㈠埌鐩爣鍑犱綍鍥惧舰鐨勮窛绂汇€�
         */

      }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
          var edge = !(options && options.edge === false);
          var details = edge && options && options.details;
          var result,
              best = {};
          var min = Number.POSITIVE_INFINITY;
          if (geometry instanceof _Point2.default) {
            var segs = this.getSortedSegments();
            var x = geometry.x;
            var y = geometry.y;
            var seg;
            for (var i = 0, len = segs.length; i < len; ++i) {
              seg = segs[i];
              result = Supermap.Geometry.distanceToSegment(geometry, seg);
              if (result.distance < min) {
                min = result.distance;
                best = result;
                if (min === 0) {
                  break;
                }
              } else {
                // if distance increases and we cross y0 to the right of x0, no need to keep looking.
                if (seg.x2 > x && (y > seg.y1 && y < seg.y2 || y < seg.y1 && y > seg.y2)) {
                  break;
                }
              }
            }
            if (details) {
              best = {
                distance: best.distance,
                x0: best.x, y0: best.y,
                x1: x, y1: y
              };
            } else {
              best = best.distance;
            }
          } else if (geometry instanceof LineString) {
            var segs0 = this.getSortedSegments();
            var segs1 = geometry.getSortedSegments();
            var seg0, seg1, intersection, x0, y0;
            var len1 = segs1.length;
            var interOptions = { point: true };
            outer: for (var i = 0, len = segs0.length; i < len; ++i) {
              seg0 = segs0[i];
              x0 = seg0.x1;
              y0 = seg0.y1;
              for (var j = 0; j < len1; ++j) {
                seg1 = segs1[j];
                intersection = Supermap.Geometry.segmentsIntersect(seg0, seg1, interOptions);
                if (intersection) {
                  min = 0;
                  best = {
                    distance: 0,
                    x0: intersection.x, y0: intersection.y,
                    x1: intersection.x, y1: intersection.y
                  };
                  break outer;
                } else {
                  result = Supermap.Geometry.distanceToSegment({ x: x0, y: y0 }, seg1);
                  if (result.distance < min) {
                    min = result.distance;
                    best = {
                      distance: min,
                      x0: x0, y0: y0,
                      x1: result.x, y1: result.y
                    };
                  }
                }
              }
            }
            if (!details) {
              best = best.distance;
            }
            if (min !== 0) {
              // check the final vertex in this line's sorted segments
              if (seg0) {
                result = geometry.distanceTo(new _Point2.default(seg0.x2, seg0.y2), options);
                var dist = details ? result.distance : result;
                if (dist < min) {
                  if (details) {
                    best = {
                      distance: min,
                      x0: result.x1, y0: result.y1,
                      x1: result.x0, y1: result.y0
                    };
                  } else {
                    best = dist;
                  }
                }
              }
            }
          } else {
            best = geometry.distanceTo(this, options);
            // swap since target comes from this line
            if (details) {
              best = {
                distance: best.distance,
                x0: best.x1, y0: best.y1,
                x1: best.x0, y1: best.y0
              };
            }
          }
          return best;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.simplify
         * @description 杩欎釜鍑芥暟杩斿洖涓€涓畝鍖栫殑绾夸覆锛屽熀浜庨亾鏍兼媺鏂� - 鏅厠绠€鍖栫畻娉曡繘琛岀畝鍖栥€�
         * @param tolerance {number} 鍦板浘鍗曚綅涓婄殑绠€鍖栫殑闃堝€笺€�
         * @returns {SuperMap.Geometry.LineString} 琚畝鍖栫殑绾夸覆銆�
         */

      }, {
        key: 'simplify',
        value: function simplify(tolerance) {
          if (this && this !== null) {
            var points = this.getVertices();
            if (points.length < 3) {
              return this;
            }

            var compareNumbers;
            a, b;
            {
              return a - b;
            }
            ;

            var firstPoint = 0;
            var lastPoint = points.length - 1;
            var pointIndexsToKeep = [];

            /**
             * Private function calculating the perpendicular distance
             * TODO: check whether SuperMap.Geometry.LineString::distanceTo() is faster or slower
             */
            var perpendicularDistance;
            point1, point2, point;
            {
              //Area = |(1/2)(x1y2 + x2y3 + x3y1 - x2y1 - x3y2 - x1y3)|   *Area of triangle
              //Base = v((x1-x2)虏+(x1-x2)虏)                               *Base of Triangle*
              //Area = .5*Base*H                                          *Solve for height
              //Height = Area/.5/Base

              var area = Math.abs(0.5 * (point1.x * point2.y + point2.x * point.y + point.x * point1.y - point2.x * point1.y - point.x * point2.y - point1.x * point.y));
              var bottom = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
              var height = area / bottom * 2;

              return height;
            }
            ;

            /**
             * Private function doing the Douglas-Peucker reduction
             */
            var douglasPeuckerReduction;
            points, firstPoint, lastPoint, tolerance;
            {
              var maxDistance = 0;
              var indexFarthest = 0;

              for (var index = firstPoint, distance; index < lastPoint; index++) {
                distance = perpendicularDistance(points[firstPoint], points[lastPoint], points[index]);
                if (distance > maxDistance) {
                  maxDistance = distance;
                  indexFarthest = index;
                }
              }

              if (maxDistance > tolerance && indexFarthest !== firstPoint) {
                //Add the largest point that exceeds the tolerance
                pointIndexsToKeep.push(indexFarthest);
                douglasPeuckerReduction(points, firstPoint, indexFarthest, tolerance);
                douglasPeuckerReduction(points, indexFarthest, lastPoint, tolerance);
              }
            }
            ;

            //Add the first and last index to the keepers
            pointIndexsToKeep.push(firstPoint);
            pointIndexsToKeep.push(lastPoint);

            //The first and the last point cannot be the same
            while (points[firstPoint].equals(points[lastPoint])) {
              lastPoint--;
              //Addition: the first point not equal to first point in the LineString is kept as well
              pointIndexsToKeep.push(lastPoint);
            }

            douglasPeuckerReduction(points, firstPoint, lastPoint, tolerance);
            var returnPoints = [];
            pointIndexsToKeep.sort(compareNumbers);
            for (var index = 0; index < pointIndexsToKeep.length; index++) {
              returnPoints.push(points[pointIndexsToKeep[index]]);
            }
            return new LineString(returnPoints);
          } else {
            return this;
          }
        }

        /**
         * @function SuperMap.Geometry.LineString.createCurve
         * @description 鍒涘缓鎵囧舰瀵硅薄銆傦紙澶囨敞锛氶渶瑕佷緷璧朣mooth.js锛�
         * @param points - {Array<SuperMap.Geometry.Point>} 鏇茬嚎缁忚繃鐨勭偣涓层€�
         * @param method - {String} 鏇茬嚎绫诲瀷锛岀洰鍓嶆敮鎸佺殑鏈夛細"lanczos","cubic","linear",榛樿涓�"lanczos"銆�
         * @param filterSize - {number} 鏇茬嚎骞虫粦鏇插害锛屽湪2~10涔嬮棿鐨勬暟鍊硷紝榛樿涓�10锛屼笉鏀寔method涓�"linear"鐨勭被鍨嬨€�
         * @param lineLength - {number} 鏇茬嚎鎷熷悎鐨勭嚎鏁扮洰锛岄粯璁ゆ槸80銆�
         * @returns {SuperMap.Geometry.LineString} 鍑犱綍绾垮璞°€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(11983722.7315,3942864.5449));
         * points.push(new SuperMap.Geometry.Point(11986722.7315, 3946864.5449));
         * points.push(new SuperMap.Geometry.Point(11989722.7315, 3949864.5449));
         * var curve = SuperMap.Geometry.LineString.createCurve(points);
         */

      }], [{
        key: 'createCurve',
        value: function createCurve(points, method, filterSize, lineLength) {
          var methodCurve = "lanczos";
          if (method != undefined) methodCurve = method;

          var filterSizeCurve = 10;
          if (filterSize != undefined) filterSizeCurve = filterSize;

          var smoothConfig = {
            method: methodCurve,
            clip: 'mirror',
            lanczosFilterSize: filterSizeCurve,
            cubicTension: 0
          };

          var pp = [];
          for (var i = 0; i < points.length; i++) {
            pp.push([points[i].x, points[i].y]);
          }

          var distance;
          a, b;
          {
            return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
          }

          var averageLineLengthCurve = 80;
          if (lineLength != undefined) averageLineLengthCurve = lineLength;

          var pointList = [];
          var averageLineLength, du, end, pieceCount, pieceLength, s, start, t, u, _ref, _ref2, _ref3;
          averageLineLength = distance(pp[0], pp[pp.length - 1]) / averageLineLengthCurve;
          pieceCount = 2;
          s = Smooth(pp, smoothConfig);
          for (t = 0, _ref = 1 / pieceCount; t < 1; t += _ref) {
            _ref2 = [s(i + t), s(i + t + 1 / pieceCount)], start = _ref2[0], end = _ref2[1];
            pieceLength = distance(start, end);
            du = averageLineLength / pieceLength;
            for (u = 0, _ref3 = 1 / pieceCount; 0 <= _ref3 ? u < _ref3 : u > _ref3; u += du) {
              var p = s(i + t + u);
              pointList.push(new _Point2.default(p[0], p[1]));
            }
          }

          var p = s(i + 1);
          pointList.push(new _Point2.default(p[0], p[1]));

          return new LineString(pointList);
        }
      }, {
        key: 'createBspline',


        /**
         * @function SuperMap.Geometry.LineString.createBspline
         * @description 鍒涘缓B鏍锋潯鏇茬嚎銆傛鏇茬嚎浼氱┛杩囨墍鏈夌殑鐐广€�
         * @param points - {Array<SuperMap.Geometry.Point>} 鏇茬嚎缁忚繃鐨勭偣涓层€�
         * @param filterSize - {number} 鏇茬嚎骞虫粦鏇插害锛岄粯璁や负10銆�
         * @returns {SuperMap.Geometry.LineString} 鍑犱綍绾垮璞°€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(116, 39.4));
         * points.push(new SuperMap.Geometry.Point(118, 39.8));
         * points.push(new SuperMap.Geometry.Point(119, 39));
         *
         * var curve = SuperMap.Geometry.LineString.createBspline(points,5);
         */
        value: function createBspline(points, filterSize) {
          //涓€涓偣鏃犳晥锛岃嚦灏戦渶瑕佷袱涓偣
          if (points.length < 2) {
            return null;
          }
          //鏇茬嚎鍐呴儴鐨勬墍鏈夌偣鏁扮粍
          var pointListDraw = [];
          //璁剧疆鏇茬嚎骞虫粦鏇插害
          var k = 10;
          if (filterSize != undefined) {
            k = filterSize;
          }
          var i, j, a0, a1, a2, dt, t1, t2;
          var t_x, t_y;
          dt = 1.0 / k;
          //璁＄畻璧峰鐐癸紝
          var value = Math.sqrt((Math.pow(points[1].x - points[0].x, 2) + Math.pow(points[1].y - points[0].y, 2)) / 2); //鍙栫殑鐐规暟缁勪腑鍓嶄袱涓偣绮楃暐璁＄畻鍑虹殑涓€涓€�
          //姝や负绗竴涓帶鍒剁偣锛屾鐐逛互鍚庡彲鑳戒細寮€鏀惧嚭鏉�
          var pointFirst = new _Point2.default(points[0].x - value, points[0].y - value);
          //鍒濆鍖栦竴涓偣鏁扮粍锛屽瓨鏀炬墍鏈夌殑鎺у埗鐐�
          var pointListControl = [];
          //绗竴涓帶鍒剁偣涔熷氨鏄捣濮嬬偣pointFirst
          pointListControl[0] = pointFirst;
          //寰幆鐢ㄦ埛浼犺繘鐨勭偣鏁扮粍
          for (i = 0; i < points.length - 1; i++) {
            //瀹氫箟涓€涓浂鏃舵暟缁勶紝鍙渶瑕佷笁涓厓绱狅紝鍚庢湡鐢ㄤ簬璋冪敤璐濊尐鏇茬嚎鍒掔嚎锛堢敱棣栧熬涓や釜鎸ゅ嚭鐐瑰拰涓棿鐨勬帶鍒剁偣缁勬垚鐨勶級
            var pointList = [];
            //
            pointList[0] = points[i];
            //鐢卞墠涓€涓帶鍒剁偣鍜屽綋鍓嶇殑鐐圭敓鎴愮殑鍚庝竴涓帶鍒剁偣
            var point = new _Point2.default(points[i].x * 2 - pointListControl[i].x, points[i].y * 2 - pointListControl[i].y);
            pointList[1] = point;
            pointListControl[i + 1] = point;
            pointList[2] = points[i + 1];
            //灏嗘鎺у埗鐐瑰瓨璧锋潵
            pointListDraw.push(pointList[0]);
            //鐢熸垚褰撳墠鏇茬嚎涓殑鎵€鏈夌偣
            for (j = 0; j <= k; j++) {
              t1 = j * dt;
              t2 = t1 * t1;

              a0 = (t2 - 2 * t1 + 1) / 2.0;
              a1 = (2 * t1 - 2 * t2 + 1) / 2.0;
              a2 = t2 / 2.0;

              t_x = a0 * pointList[0].x + a1 * pointList[1].x + a2 * pointList[2].x;
              t_y = a0 * pointList[0].y + a1 * pointList[1].y + a2 * pointList[2].y;
              pointListDraw.push(new _Point2.default(t_x, t_y));
            }
          }
          //灏嗘渶鍚庝竴涓敤鎴风殑鐐瑰瓨杩涘幓鎵嶈兘杈惧埌鏇茬嚎閫氳繃鎵€鏈夌殑鐐�
          pointListDraw.push(points[points.length - 1]);
          return new LineString(pointListDraw);
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier1
         * @description 鍒涘缓1娆¤礉濉炲皵鏇茬嚎銆�
         * @param points -{Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @param precision - {number} 鎷嗗垎绮惧害锛岃〃绀鸿礉濉炲皵鏇茬嚎涓婁换鎰忎袱鐐归棿妯悜鎴栫旱鍚戠殑鏈€澶ц窛绂汇€�
         *                     鍐冲畾璐濆灏旀洸绾跨殑骞虫粦绋嬪害銆傚彇鍊艰秺灏忔洸绾胯秺骞虫粦銆傚彇鍊间负澶т簬1鐨勬暣鏁般€�
         * @param part - {number} 骞虫粦搴︺€傚彇鍊艰秺澶э紝鏇茬嚎瓒婂钩婊戙€傚彇鍊间负澶т簬1鐨勬暣鏁般€�
         * @returns {SuperMap.Geometry.LineString} 鍑犱綍绾垮璞�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier1(points, 20);
         */

      }, {
        key: 'createBezier1',
        value: function createBezier1(points, precision, part) {
          if (part) {
            return LineString.createBezier3(points, part);
          }
          //鑾峰彇寰呮媶鍒嗙殑鐐�
          var bezierPts = [];
          for (var m = 0; m < points.length; m++) {
            bezierPts[m] = points[m];
          }
          //鑾峰彇杈撳叆鐐圭殑鏁伴噺
          var i;
          var k;
          var j = 0;
          var bExit;
          var count = bezierPts.length;
          var ptBuffer = [];
          var ok = true;
          while (ok) {
            bExit = true;
            //璐濆灏斿垎瑙ｆ槸鎸�4涓偣涓轰竴缁勮繘琛岀殑锛屾墍浠ュ皬浜�4涓偣灏卞啀涓嶈繘琛屽垎瑙�
            for (i = 0; i < count - 3; i += 3) {
              //瀵硅緭鍏ョ偣鏁扮粍杩涜鍒嗚В
              //鍒ゆ柇bezierPts[i]鍒癰ezierPts[i+4]鏄惁杈惧埌绮惧害
              if (GetBezierGap(bezierPts, i) > precision) {
                bExit = false;
                //瀵规湭杈惧埌绮惧害鐨刡ezierPts[i]鍒癰ezierPts[i+4]杩涜璁＄畻锛屽緱鍒版柊鐨刾tBuffer鐐规暟缁�
                InciseBezier(bezierPts, i, ptBuffer);
                //鍘婚櫎宸蹭娇鐢ㄨ繃鐨�2涓帶鍒剁偣
                bezierPts.splice(i + 1, 2);
                //灏嗘湰娆¤绠楀緱鍒扮殑5涓柊鐨勭偣鎻掑叆鍒癰ezierPts[i]浣嶇疆涔嬪悗锛屽緱鍒版柊鐨刡ezierPts鐐规暟缁�
                for (k = 0; k < 5; k++) {
                  bezierPts.splice(i + 1 + k, 0, ptBuffer[k + 1]);
                }
                //bezierPts[i]鍒癰ezierPts[i+4]娌℃湁杈惧埌绮惧害锛屾墍浠ヤ笉鑳借烦杩囷紝i闇€鍥炲綊鍒濆
                i -= 3;
                count = bezierPts.length;
              }
              if (bExit) break;
            }
            //瀵瑰垎瑙ｅ緱鍑虹殑鏂癰ezierPts鐐规暟缁勮繘琛屼紭鍖栵紝闄ゅ幓鐩稿悓鐨勭偣
            while (j < count - 1) {
              if (bezierPts[j] === bezierPts[j + 1]) {
                bezierPts.splice(j + 1, 1);
                count--;
              }
              j++;
            }
            ok = false;
          }

          return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.calculatePointsFBZ2
         * @description 璁＄畻2娆¤礉濉炲皵鏇茬嚎鐨勭偣銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓诧紙蹇呴』涓轰笁涓偣锛夈€�
         * @param part - {number} 骞虫粦搴︺€傚彇鍊艰秺澶э紝鏇茬嚎瓒婂钩婊戙€傚彇鍊间负澶т簬1鐨勬暣鏁般€�
         * @returns {Array<SuperMap.Geometry.Point>} 2娆¤礉濉炲皵鏇茬嚎鐨勬墍鏈夌偣銆�
         */

      }, {
        key: 'calculatePointsFBZ2',
        value: function calculatePointsFBZ2(points, part) {
          if (!part) part = 20;

          //鑾峰彇寰呮媶鍒嗙殑鐐�
          var bezierPts = [];
          var scale = 0.05;
          if (part > 0) {
            scale = 1 / part;
          }

          for (var i = 0; i < points.length - 2;) {
            //璧峰鐐�
            var pointS = points[i];
            //鎺у埗鐐�
            var pointC = points[i + 1];
            //缁撴潫鐐�
            var pointE = points[i + 2];

            bezierPts.push(pointS);
            for (var t = 0; t < 1;) {
              //浜屾璐濆灏旀洸绾垮叕寮�
              var x = (1 - t) * (1 - t) * pointS.x + 2 * t * (1 - t) * pointC.x + t * t * pointE.x;
              var y = (1 - t) * (1 - t) * pointS.y + 2 * t * (1 - t) * pointC.y + t * t * pointE.y;
              var point = new _Point2.default(x, y);
              bezierPts.push(point);
              t += scale;
            }

            i += 2;
            if (i >= points.length) {
              bezierPts.push(pointS);
            }
          }

          //闇€瑕佸垽瀹氫竴涓嬫渶鍚庝竴涓偣鏄惁瀛樺湪
          var poRE = bezierPts[bezierPts.length - 1];
          var popE = points[points.length - 1];
          if (!poRE.equals(popE)) {
            bezierPts.push(popE.clone());
          }

          return bezierPts;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculatePointsFBZ3
         * @description 璁＄畻3娆¤礉濉炲皵鏇茬嚎鐨勭偣銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓�(鍥涗釜)銆�
         * @param part - {number} 骞虫粦搴︺€傚彇鍊艰秺澶э紝鏇茬嚎瓒婂钩婊戙€傚彇鍊间负澶т簬1鐨勬暣鏁般€�
         * @returns {Array<SuperMap.Geometry.Point>} 3娆¤礉濉炲皵鏇茬嚎鐨勬墍鏈夌偣
         */

      }, {
        key: 'calculatePointsFBZ3',
        value: function calculatePointsFBZ3(points, part) {
          if (!part) part = 20;
          //鑾峰彇寰呮媶鍒嗙殑鐐�
          var bezierPts = [];
          var scale = 0.05;

          if (part > 0) {
            scale = 1 / part;
          }

          for (var i = 0; i < points.length - 3;) {
            //璧峰鐐�
            var pointS = points[i];
            //绗竴涓帶鍒剁偣
            var pointC1 = points[i + 1];
            //绗簩涓帶鍒剁偣
            var pointC2 = points[i + 2];
            //缁撴潫鐐�
            var pointE = points[i + 3];

            bezierPts.push(pointS);
            for (var t = 0; t < 1;) {
              //涓夋璐濆灏旀洸绾垮叕寮�
              var x = (1 - t) * (1 - t) * (1 - t) * pointS.x + 3 * t * (1 - t) * (1 - t) * pointC1.x + 3 * t * t * (1 - t) * pointC2.x + t * t * t * pointE.x;
              var y = (1 - t) * (1 - t) * (1 - t) * pointS.y + 3 * t * (1 - t) * (1 - t) * pointC1.y + 3 * t * t * (1 - t) * pointC2.y + t * t * t * pointE.y;
              var point = new _Point2.default(x, y);
              bezierPts.push(point);
              t += scale;
            }

            i += 3;
            if (i >= points.length) {
              bezierPts.push(pointS);
            }
          }

          //闇€瑕佸垽瀹氫竴涓嬫渶鍚庝竴涓偣鏄惁瀛樺湪
          var poRE = bezierPts[bezierPts.length - 1];
          var popE = points[points.length - 1];
          if (!poRE.equals(popE)) {
            bezierPts.push(popE.clone());
          }
          return bezierPts;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculatePointsFBZN
         * @description 璁＄畻N娆¤礉濉炲皵鏇茬嚎鐨勬彃鍊肩偣銆傝绠桸娆¤礉濉炲皵鏇茬嚎闇€瑕丯+1涓偣,涔熷氨鏄紶鍏� points 锛屽緱鍒扮殑鏄痯oints.length-1娆¤礉濉炲皵鏇茬嚎銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @param part - {number} 骞虫粦搴︺€傚彇鍊艰秺澶э紝鏇茬嚎瓒婂钩婊戙€傚彇鍊间负澶т簬1鐨勬暣鏁般€�
         * @returns {Array<SuperMap.Geometry.Point>} N娆¤礉濉炲皵鏇茬嚎鐨勬墍鏈夌偣銆�
         */

      }, {
        key: 'calculatePointsFBZN',
        value: function calculatePointsFBZN(points, part) {
          if (!part) part = points.length * 8;

          //鑾峰彇寰呮媶鍒嗙殑鐐�
          var bezierPts = [];
          var scale = 0.05;
          if (part > 0) {
            scale = 1 / part;
          }
          for (var t = 0; t <= 1;) {
            var x = 0;
            var y = 0;
            var n = points.length;
            for (var i = 0; i < points.length; i++) {
              var b = LineString.BEZ(n - 1, i, t);
              x += points[i].x * b;
              y += points[i].y * b;
            }
            var point = new _Point2.default(x, y);
            bezierPts.push(point);
            t += scale;
          }
          //闇€瑕佸垽瀹氫竴涓嬫渶鍚庝竴涓偣鏄惁瀛樺湪
          var poRE = bezierPts[bezierPts.length - 1];
          var popE = points[points.length - 1];
          if (!poRE.equals(popE)) {
            bezierPts.push(popE.clone());
          }
          return bezierPts;
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier2
         * @description 鍒涘缓2娆¤礉濉炲皵鏇茬嚎銆�
         * @param points -{Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓诧紙蹇呴』涓轰笁涓偣锛夈€�
         * @param part -{number} 骞虫粦搴︺€傚彇鍊艰秺澶э紝鏇茬嚎瓒婂钩婊戙€傚彇鍊间负澶т簬1鐨勬暣鏁般€�
         * @returns {SuperMap.Geometry.LineString} 鍑犱綍绾垮璞�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier2(points, 20);
         */

      }, {
        key: 'createBezier2',
        value: function createBezier2(points, part) {

          var bezierPts = LineString.calculatePointsFBZ2(points, part);
          return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier3
         * @description 鍒涘缓3娆¤礉濉炲皵鏇茬嚎銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�(蹇呴』涓哄洓涓偣)銆�
         * @param precision - {number} 鎷嗗垎绮惧害锛岃〃绀鸿礉濉炲皵鏇茬嚎涓婁换鎰忎袱鐐归棿妯悜鎴栫旱鍚戠殑鏈€澶ц窛绂汇€�
         * @returns {SuperMap.Geometry.LineString} 鍑犱綍绾垮璞°€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier3(points, 20);
         */

      }, {
        key: 'createBezier3',
        value: function createBezier3(points, part) {

          var bezierPts = LineString.calculatePointsFBZ3(points, part);
          return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier
         * @description 鍒涘缓3娆¤礉濉炲皵鏇茬嚎銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @param precision - {number} 鎷嗗垎绮惧害锛岃〃绀鸿礉濉炲皵鏇茬嚎涓婁换鎰忎袱鐐归棿妯悜鎴栫旱鍚戠殑鏈€澶ц窛绂汇€�
         *                     鍐冲畾璐濆灏旀洸绾跨殑骞虫粦绋嬪害銆傚彇鍊艰秺灏忔洸绾胯秺骞虫粦銆傚彇鍊间负澶т簬1鐨勬暣鏁般€�
         * @returns {SuperMap.Geometry.LineString} 鍑犱綍绾垮璞°€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier(points,1);
         */

      }, {
        key: 'createBezier',
        value: function createBezier(points, precision) {
          //鑾峰彇寰呮媶鍒嗙殑鐐�
          var bezierPts = [];
          for (var m = 0; m < points.length; m++) {
            bezierPts[m] = points[m];
          }
          //鑾峰彇杈撳叆鐐圭殑鏁伴噺
          var i,
              k,
              j = 0,
              bExit,
              count = bezierPts.length;
          var ptBuffer = [];
          while (true) {
            bExit = true;
            //璐濆灏斿垎瑙ｆ槸鎸�4涓偣涓轰竴缁勮繘琛岀殑锛屾墍浠ュ皬浜�4涓偣灏卞啀涓嶈繘琛屽垎瑙�
            for (i = 0; i < count - 3; i += 3) {
              //瀵硅緭鍏ョ偣鏁扮粍杩涜鍒嗚В
              //鍒ゆ柇bezierPts[i]鍒癰ezierPts[i+4]鏄惁杈惧埌绮惧害
              if (GetBezierGap(bezierPts, i) > precision) {
                bExit = false;
                //瀵规湭杈惧埌绮惧害鐨刡ezierPts[i]鍒癰ezierPts[i+4]杩涜璁＄畻锛屽緱鍒版柊鐨刾tBuffer鐐规暟缁�
                InciseBezier(bezierPts, i, ptBuffer);
                //鍘婚櫎宸蹭娇鐢ㄨ繃鐨�2涓帶鍒剁偣
                bezierPts.splice(i + 1, 2);
                //灏嗘湰娆¤绠楀緱鍒扮殑5涓柊鐨勭偣鎻掑叆鍒癰ezierPts[i]浣嶇疆涔嬪悗锛屽緱鍒版柊鐨刡ezierPts鐐规暟缁�
                for (k = 0; k < 5; k++) {
                  bezierPts.splice(i + 1 + k, 0, ptBuffer[k + 1]);
                }
                //bezierPts[i]鍒癰ezierPts[i+4]娌℃湁杈惧埌绮惧害锛屾墍浠ヤ笉鑳借烦杩囷紝i闇€鍥炲綊鍒濆
                i -= 3;
                count = bezierPts.length;
              }
              if (bExit) break;
            }
            //瀵瑰垎瑙ｅ緱鍑虹殑鏂癰ezierPts鐐规暟缁勮繘琛屼紭鍖栵紝闄ゅ幓鐩稿悓鐨勭偣
            while (j < count - 1) {
              if (bezierPts[j] === bezierPts[j + 1]) {
                bezierPts.splice(j + 1, 1);
                count--;
              }
              j++;
            }
            //杩斿洖鍒嗚В瀹屾垚鐨勬柊鐨刡ezierPts鐐规暟缁�
            return new LineString(bezierPts);
          }
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezierN
         * @description 鍒涘缓N娆¤礉濉炲皵鏇茬嚎銆傚垱寤篘娆¤礉濉炲皵鏇茬嚎闇€瑕丯+1涓偣,涔熷氨鏄紶鍏� points 锛屽緱鍒扮殑鏄痯oints.length-1娆¤礉濉炲皵鏇茬嚎銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @param part - {number} 骞虫粦搴︺€傚彇鍊艰秺澶э紝鏇茬嚎瓒婂钩婊戙€傚彇鍊间负澶т簬1鐨勬暣鏁帮紝榛樿涓�20銆�
         * @returns {SuperMap.Geometry.LineString} 鍑犱綍绾垮璞°€�
         * @example
         * //鍒涘缓3娆¤礉濉炲皵鏇茬嚎
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezierN(points, 20);
         * //鍒涘缓4娆¤礉濉炲皵鏇茬嚎
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         * points.push(new SuperMap.Geometry.Point(50,20));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezierN(points, 30);
         * ......
         */

      }, {
        key: 'createBezierN',
        value: function createBezierN(points, part) {
          var bezierPts = LineString.calculatePointsFBZN(points, part);
          return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.BEZ
         * @description 鍩哄嚱鏁般€�
         * @param n -{number}
         * @param k -{number}
         * @param t -{number} 0-1涔嬮棿鐨勪竴涓暟銆�
         * @returns {number} 鍩哄嚱鏁扮殑鍊笺€�
         *
         */

      }, {
        key: 'BEZ',
        value: function BEZ(n, k, t) {
          return LineString.combSort(n, k) * Math.pow(t, k) * Math.pow(1 - t, n - k);
        }

        /**
         * @function SuperMap.Geometry.LineString.combSort
         * @description 缁勫悎鎺掑簭,璁＄畻浠�1*2*...*n/(1*2*...*k*1*2*...*(n-k))鐨勫€笺€�
         * @param n -{number} 璐濆灏旀洸绾跨殑娆℃暟n銆�
         * @param k -{number} 灏忎簬N鐨勪竴涓暟k銆�
         * @returns {number} 缁勫悎鎺掑簭鐨勫€笺€�
         *
         */

      }, {
        key: 'combSort',
        value: function combSort(n, k) {
          var son = LineString.factorial(n);
          var mother = LineString.factorial(k) * LineString.factorial(n - k);
          return son / mother;
        }

        /**
         * @function SuperMap.Geometry.LineString.factorial
         * @description 闃朵箻,璁＄畻浠�1*2*3*4*...*n鐨勫€笺€�
         * @param n - {number}
         * @returns {number} 闃朵箻鐨勫€笺€�
         *
         */

      }, {
        key: 'factorial',
        value: function factorial(n) {
          var result = 1;
          for (var i = 1; i <= n; i++) {
            result *= i;
          }
          return result;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculateCardinalPoints
         * @description 鍒涘缓Cardinal鎺у埗鐐广€�
         * 鍒╃敤杈撳叆鐨勭偣鏁扮粍璁＄畻鍑虹浉搴旂殑Cardinal鎺у埗鐐癸紝鍐嶄娇鐢ㄨ礉濉炲皵鏇茬嚎3鍒涘缓缁忚繃鎵€鏈塁ardinal鎺у埗鐐圭殑鍦嗘粦鏇茬嚎銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @returns {Array<SuperMap.Geometry.Point>} 璁＄畻鍑虹浉搴旂殑Cardinal鎺у埗鐐广€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         *
         * var cardinal = SuperMap.Geometry.LineString.createCloseCardinal(points);
         */

      }, {
        key: 'calculateCardinalPoints',
        value: function calculateCardinalPoints(points) {
          if (points == null || points.length < 3) {
            return points;
          }
          //瀹氫箟浼犲叆鐨勭偣鏁扮粍锛屽皢鍦ㄧ偣鏁扮粍涓ぎ锛堟瘡涓や釜鐐癸級鎻掑叆涓や釜鎺у埗鐐�
          var cPoints = points;
          //鍖呭惈杈撳叆鐐瑰拰鎺у埗鐐圭殑鏁扮粍
          var cardinalPoints = [];

          //杩欎簺閮芥槸鐩稿叧璧勬枡娴嬪嚭鐨勭粡楠屾暟鍊�
          //瀹氫箟寮犲姏绯绘暟锛屽彇鍊煎湪0<t<0.5
          var t = 0.4;
          //涓虹鐐瑰紶鍔涚郴鏁板洜瀛愶紝鍙栧€煎湪0<b<1
          var b = 0.5;
          //璇樊鎺у埗锛屾槸涓€涓ぇ浜庣瓑浜�0鐨勬暟锛岀敤浜庝笁鐐归潪甯歌秼杩戜笌涓€鏉＄洿绾挎椂锛屽噺灏戣绠楅噺
          var e = 0.005;

          //浼犲叆鐨勭偣鏁伴噺锛岃嚦灏戞湁涓変釜锛宯鑷冲皯涓�2
          var n = cPoints.length - 1;
          //浠庡紑濮嬮亶鍘嗗埌鍊掓暟绗簩涓紝鍏朵腑鍊掓暟绗簩涓敤浜庤绠楄捣鐐癸紙缁堢偣锛夌殑鎻掑€兼帶鍒剁偣

          for (var k = 0; k <= n + 1 - 3; k++) {
            //涓変釜鍩虹杈撳叆鐐�
            var p0 = cPoints[k];
            var p1 = cPoints[k + 1];
            var p2 = cPoints[k + 2];
            //瀹氫箟p1鐨勫乏鎺у埗鐐瑰拰鍙虫帶鍒剁偣
            var p1l = new _Point2.default();
            var p1r = new _Point2.default();
            //閫氳繃p0銆乸1銆乸2璁＄畻p1鐐圭殑鍋氭帶鍒剁偣p1l鍜屽張鎺у埗鐐筽1r
            //璁＄畻鍚戦噺p0_p1鍜宲1_p2
            var p0_p1 = new _Point2.default(p1.x - p0.x, p1.y - p0.y);
            var p1_p2 = new _Point2.default(p2.x - p1.x, p2.y - p1.y);
            //骞惰绠楁ā
            var d01 = Math.sqrt(p0_p1.x * p0_p1.x + p0_p1.y * p0_p1.y);
            var d12 = Math.sqrt(p1_p2.x * p1_p2.x + p1_p2.y * p1_p2.y);
            //鍚戦噺鍗曚綅鍖�
            var p0_p1_1 = new _Point2.default(p0_p1.x / d01, p0_p1.y / d01);
            var p1_p2_1 = new _Point2.default(p1_p2.x / d12, p1_p2.y / d12);
            //璁＄畻鍚戦噺p0_p1鍜宲1_p2鐨勫す瑙掑钩鍒嗙嚎鍚戦噺
            var p0_p1_p2 = new _Point2.default(p0_p1_1.x + p1_p2_1.x, p0_p1_1.y + p1_p2_1.y);
            //璁＄畻鍚戦噺 p0_p1_p2 鐨勬ā
            var d012 = Math.sqrt(p0_p1_p2.x * p0_p1_p2.x + p0_p1_p2.y * p0_p1_p2.y);
            //鍗曚綅鍖栧悜閲弍0_p1_p2
            var p0_p1_p2_1 = new _Point2.default(p0_p1_p2.x / d012, p0_p1_p2.y / d012);
            //鍒ゆ柇p0銆乸1銆乸2鏄惁鍏辩嚎锛岃繖閲屽垽瀹氬悜閲弍0_p1鍜宲1_p2鐨勫す瑙掔殑浣欏鸡鍜�1鐨勫樊鍊煎皬浜巈灏辫涓轰笁鐐瑰叡绾�
            var cosE_p0p1p2 = (p0_p1_1.x * p1_p2_1.x + p0_p1_1.y * p1_p2_1.y) / 1;
            //鍏辩嚎
            if (Math.abs(1 - cosE_p0p1p2) < e) {
              //璁＄畻p1l鐨勫潗鏍�
              p1l.x = p1.x - p1_p2_1.x * d01 * t;
              p1l.y = p1.y - p1_p2_1.y * d01 * t;
              //璁＄畻p1r鐨勫潗鏍�
              p1r.x = p1.x + p0_p1_1.x * d12 * t;
              p1r.y = p1.y + p0_p1_1.y * d12 * t;
            }
            //闈炲叡绾�
            else {
              //璁＄畻p1l鐨勫潗鏍�
              p1l.x = p1.x - p0_p1_p2_1.x * d01 * t;
              p1l.y = p1.y - p0_p1_p2_1.y * d01 * t;
              //璁＄畻p1r鐨勫潗鏍�
              p1r.x = p1.x + p0_p1_p2_1.x * d12 * t;
              p1r.y = p1.y + p0_p1_p2_1.y * d12 * t;
            }
            //璁板綍涓嬭繖涓変釜鎺у埗鐐�
            cardinalPoints[k * 3 + 2 + 0] = p1l;
            cardinalPoints[k * 3 + 2 + 1] = p1;
            cardinalPoints[k * 3 + 2 + 2] = p1r;

            //褰撲负璧峰鐐规椂闇€瑕佽绠楃涓€涓偣鐨勫彸鎺у埗鐐�
            if (k == 0) {
              //瀹氫箟p0鐨勫彸鎺у埗鐐�
              var p0r = new _Point2.default();

              //璁＄畻鍚戦噺p0_p1l
              var po_p1l = new _Point2.default(p1l.x - p0.x, p1l.y - p0.y);
              //璁＄畻妯�
              var d01l = Math.sqrt(po_p1l.x * po_p1l.x + po_p1l.y * po_p1l.y);
              //鍗曚綅鍖�
              var po_p1l_1 = new _Point2.default(po_p1l.x / d01l, po_p1l.y / d01l);
              //璁＄畻p0r
              p0r.x = p0.x + po_p1l_1.x * d01 * t * b;
              p0r.y = p0.y + po_p1l_1.y * d01 * t * b;

              cardinalPoints[k * 3 + 0] = p0;
              cardinalPoints[k * 3 + 1] = p0r;
            }
            //褰撲负鍊掓暟绗笁涓偣鏃堕渶瑕佽绠楁渶鍚庣偣鐨勫乏鎺у埗鐐�
            if (k == n + 1 - 3) {
              //瀹氫箟 p2鐨勫仛鎺у埗鐐筽2l
              var p2l = new _Point2.default();

              //璁＄畻鍚戦噺p2_p1r
              var p2_p1r = new _Point2.default(p1r.x - p2.x, p1r.y - p2.y);
              //骞跺彇妯�
              var d21r = Math.sqrt(p2_p1r.x * p2_p1r.x + p2_p1r.y * p2_p1r.y);
              //鍗曚綅鍖�
              var p2_p1r_1 = new _Point2.default(p2_p1r.x / d21r, p2_p1r.y / d21r);
              //璁＄畻p2l
              p2l.x = p2.x + p2_p1r_1.x * d12 * t * b;
              p2l.y = p2.y + p2_p1r_1.y * d12 * t * b;

              cardinalPoints[k * 3 + 2 + 3] = p2l;
              cardinalPoints[k * 3 + 2 + 4] = p2;
            }
          }
          return cardinalPoints;
        }

        /**
         * @function SuperMap.Geometry.LineString.createCloseCardinal
         * @description 鍒涘缓闂悎Cardinal鐨勬帶鍒剁偣銆傚埄鐢ㄨ緭鍏ョ殑鐐规暟缁勮绠楀嚭鐩稿簲鐨凜ardinal鎺у埗鐐癸紝鍐嶄娇鐢ㄨ礉濉炲皵鏇茬嚎3鍒涘缓缁忚繃鎵€鏈塁ardinal鎺у埗鐐圭殑鍦嗘粦闂悎鏇茬嚎銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @returns {Array<SuperMap.Geometry.Point>} 璁＄畻鍑虹浉搴旂殑Cardinal鎺у埗鐐广€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         *
         * var cardinal = SuperMap.Geometry.LineString.createCloseCardinal(points);
         */

      }, {
        key: 'createCloseCardinal',
        value: function createCloseCardinal(points) {
          if (points == null || points.length < 3) {
            return points;
          }
          //鑾峰彇璧风偣锛屼綔涓虹粓鐐癸紝浠ラ棴鍚堟洸绾裤€�
          var lastP = points[0];
          points.push(lastP);

          //瀹氫箟浼犲叆鐨勭偣鏁扮粍锛屽皢鍦ㄧ偣鏁扮粍涓ぎ锛堟瘡涓や釜鐐癸級鎻掑叆涓や釜鎺у埗鐐�
          var cPoints = points;
          //鍖呭惈杈撳叆鐐瑰拰鎺у埗鐐圭殑鏁扮粍
          var cardinalPoints = [];

          //鑷冲皯涓変釜鐐逛互涓�
          //杩欎簺閮芥槸鐩稿叧璧勬枡娴嬪嚭鐨勭粡楠屾暟鍊�
          //瀹氫箟寮犲姏绯绘暟锛屽彇鍊煎湪0<t<0.5
          var t = 0.4;
          //涓虹鐐瑰紶鍔涚郴鏁板洜瀛愶紝鍙栧€煎湪0<b<1
          var b = 0.5;
          //璇樊鎺у埗锛屾槸涓€涓ぇ浜庣瓑浜�0鐨勬暟锛岀敤浜庝笁鐐归潪甯歌秼杩戜笌涓€鏉＄洿绾挎椂锛屽噺灏戣绠楅噺
          var e = 0.005;

          //浼犲叆鐨勭偣鏁伴噺锛岃嚦灏戞湁涓変釜锛宯鑷冲皯涓�2
          var n = cPoints.length - 1;
          //浠庡紑濮嬮亶鍘嗗埌鍊掓暟绗簩涓紝鍏朵腑鍊掓暟绗簩涓敤浜庤绠楄捣鐐癸紙缁堢偣锛夌殑鎻掑€兼帶鍒剁偣
          for (var k = 0; k <= n - 1; k++) {
            //璁＄畻璧风偣锛堢粓鐐癸級鐨勫乏鍙虫帶鍒剁偣
            if (k == n - 1) {
              //涓変釜鍩虹杈撳叆鐐�
              var p0 = cPoints[n - 1];
              var p1 = cPoints[0];
              var p2 = cPoints[1];
            } else {
              var p0 = cPoints[k];
              var p1 = cPoints[k + 1];
              var p2 = cPoints[k + 2];
            }

            //瀹氫箟p1鐨勫乏鎺у埗鐐瑰拰鍙虫帶鍒剁偣
            var p1l = new _Point2.default();
            var p1r = new _Point2.default();
            //閫氳繃p0銆乸1銆乸2璁＄畻p1鐐圭殑鍋氭帶鍒剁偣p1l鍜屽張鎺у埗鐐筽1r
            //璁＄畻鍚戦噺p0_p1鍜宲1_p2
            var p0_p1 = new _Point2.default(p1.x - p0.x, p1.y - p0.y);
            var p1_p2 = new _Point2.default(p2.x - p1.x, p2.y - p1.y);
            //骞惰绠楁ā
            var d01 = Math.sqrt(p0_p1.x * p0_p1.x + p0_p1.y * p0_p1.y);
            var d12 = Math.sqrt(p1_p2.x * p1_p2.x + p1_p2.y * p1_p2.y);
            //鍚戦噺鍗曚綅鍖�
            var p0_p1_1 = new _Point2.default(p0_p1.x / d01, p0_p1.y / d01);
            var p1_p2_1 = new _Point2.default(p1_p2.x / d12, p1_p2.y / d12);
            //璁＄畻鍚戦噺p0_p1鍜宲1_p2鐨勫す瑙掑钩鍒嗙嚎鍚戦噺
            var p0_p1_p2 = new _Point2.default(p0_p1_1.x + p1_p2_1.x, p0_p1_1.y + p1_p2_1.y);
            //璁＄畻鍚戦噺 p0_p1_p2 鐨勬ā
            var d012 = Math.sqrt(p0_p1_p2.x * p0_p1_p2.x + p0_p1_p2.y * p0_p1_p2.y);
            //鍗曚綅鍖栧悜閲弍0_p1_p2
            var p0_p1_p2_1 = new _Point2.default(p0_p1_p2.x / d012, p0_p1_p2.y / d012);
            //鍒ゆ柇p0銆乸1銆乸2鏄惁鍏辩嚎锛岃繖閲屽垽瀹氬悜閲弍0_p1鍜宲1_p2鐨勫す瑙掔殑浣欏鸡鍜�1鐨勫樊鍊煎皬浜巈灏辫涓轰笁鐐瑰叡绾�
            var cosE_p0p1p2 = (p0_p1_1.x * p1_p2_1.x + p0_p1_1.y * p1_p2_1.y) / 1;
            //鍏辩嚎
            if (Math.abs(1 - cosE_p0p1p2) < e) {
              //璁＄畻p1l鐨勫潗鏍�
              p1l.x = p1.x - p1_p2_1.x * d01 * t;
              p1l.y = p1.y - p1_p2_1.y * d01 * t;
              //璁＄畻p1r鐨勫潗鏍�
              p1r.x = p1.x + p0_p1_1.x * d12 * t;
              p1r.y = p1.y + p0_p1_1.y * d12 * t;
            }
            //闈炲叡绾�
            else {
              //璁＄畻p1l鐨勫潗鏍�
              p1l.x = p1.x - p0_p1_p2_1.x * d01 * t;
              p1l.y = p1.y - p0_p1_p2_1.y * d01 * t;
              //璁＄畻p1r鐨勫潗鏍�
              p1r.x = p1.x + p0_p1_p2_1.x * d12 * t;
              p1r.y = p1.y + p0_p1_p2_1.y * d12 * t;
            }

            //璁板綍璧风偣锛堢粓鐐癸級鐨勫乏鍙虫彃鍊兼帶鍒剁偣鍙婂€掓暟绗簩涓帶鍒剁偣
            if (k == n - 1) {
              cardinalPoints[0] = p1;
              cardinalPoints[1] = p1r;
              cardinalPoints[(n - 2) * 3 + 2 + 3] = p1l;
              cardinalPoints[(n - 2) * 3 + 2 + 4] = cPoints[n];
            } else {
              //璁板綍涓嬭繖涓変釜鎺у埗鐐�
              cardinalPoints[k * 3 + 2 + 0] = p1l;
              cardinalPoints[k * 3 + 2 + 1] = p1;
              cardinalPoints[k * 3 + 2 + 2] = p1r;
            }
          }
          return cardinalPoints;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculateCircle
         * @description 涓夌偣鐢诲渾寮с€�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @returns {Array<SuperMap.Geometry.Point>} 璁＄畻鍑虹浉搴旂殑鍦嗗姬鎺у埗鐐广€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50));
         * points.push(new SuperMap.Geometry.Point(2,60));
         *
         * var circle = SuperMap.Geometry.LineString.calculateCircle(points);
         */

      }, {
        key: 'calculateCircle',
        value: function calculateCircle(points) {
          if (points.length < 3) {
            return points;
          }
          var len = points.length,
              centerPoint = {},
              p1 = points[0],
              p2 = points[1],
              p3 = points[2];
          var R = 0,
              dStep = 0,
              direc = true,
              dRotation = 0,
              dRotationBegin = 0,
              dRotationAngle = 0,
              nSegmentCount = 72,
              centerPoint = {},
              circlePoints = [];

          var KTan13 = (p3.y - p1.y) / (p3.x - p1.x);
          var B13 = p3.y - KTan13 * p3.x;
          if (p3.x != p1.x && p3.y != p1.y && p2.y == KTan13 * p2.x + B13 || p3.x == p1.x && p2.x == p1.x || p3.y == p1.y && p2.y == p1.y || p3.x == p1.x && p3.y == p1.y || p3.x == p2.x && p3.y == p2.y || p1.x == p2.x && p1.y == p2.y) {
            circlePoints.push(p1);
            circlePoints.push(p2);
            circlePoints.push(p3);
          } else {
            var D = (p2.x * p2.x + p2.y * p2.y - (p1.x * p1.x + p1.y * p1.y)) * (2 * (p3.y - p1.y)) - (p3.x * p3.x + p3.y * p3.y - (p1.x * p1.x + p1.y * p1.y)) * (2 * (p2.y - p1.y));
            var E = 2 * (p2.x - p1.x) * (p3.x * p3.x + p3.y * p3.y - (p1.x * p1.x + p1.y * p1.y)) - 2 * (p3.x - p1.x) * (p2.x * p2.x + p2.y * p2.y - (p1.x * p1.x + p1.y * p1.y));
            var F = 4 * ((p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y));
            centerPoint.x = D / F;
            centerPoint.y = E / F;
            R = Math.sqrt((p1.x - centerPoint.x) * (p1.x - centerPoint.x) + (p1.y - centerPoint.y) * (p1.y - centerPoint.y));

            var dis = (p1.x - p3.x) * (p1.x - p3.x) + (p1.y - p3.y) * (p1.y - p3.y);
            var cons = (2 * R * R - dis) / (2 * R * R);
            cons = cons >= 1 ? 1 : cons;
            cons = cons <= -1 ? -1 : cons;
            dRotationAngle = Math.acos(cons) * 180 / Math.PI;

            if (p3.x == p1.x) {
              dRotationAngle = centerPoint.x > p1.x && p2.x > p1.x || centerPoint.x < p1.x && p2.x < p1.x ? 360 - dRotationAngle : dRotationAngle;
            } else {
              dRotationAngle = centerPoint.y > KTan13 * centerPoint.x + B13 && p2.y > KTan13 * p2.x + B13 || centerPoint.y < KTan13 * centerPoint.x + B13 && p2.y < KTan13 * p2.x + B13 ? 360 - dRotationAngle : dRotationAngle;
            }
            dStep = dRotationAngle / 72;

            if (p3.y != p1.y) {
              if (p3.x == p1.x) {
                if (p3.y > p1.y) {
                  if (p2.x < p1.x) {
                    direc = false;
                  }
                } else {
                  if (p2.x > p1.x) {
                    direc = false;
                  }
                }
              } else if (p3.x < p1.x) {
                if (p2.y < KTan13 * p2.x + B13) {
                  direc = false;
                }
              } else {
                if (p2.y > KTan13 * p2.x + B13) {
                  direc = false;
                }
              }
            } else {
              if (p3.x > p1.x) {
                if (p2.y > p1.y) {
                  direc = false;
                }
              } else {
                if (p2.y < p1.y) {
                  direc = false;
                }
              }
            }

            var K10 = (p1.y - centerPoint.y) / (p1.x - centerPoint.x);
            var atan10 = K10 >= 0 ? Math.atan(K10) * 180 / Math.PI : Math.abs(Math.atan(K10) * 180 / Math.PI) + 90;

            var CY = Math.abs(centerPoint.y);
            if (p1.y == CY && CY == p3.y) {
              if (p1.x < p3.x) {
                atan10 = atan10 + 180;
              }
            }

            var newPY = p1.y - centerPoint.y;
            circlePoints.push(p1);
            for (var i = 1; i < nSegmentCount; i++) {
              dRotation = dStep * i;
              dRotationBegin = atan10;

              if (direc) {
                if (newPY >= 0) {
                  if (K10 >= 0) {
                    dRotationBegin = dRotationBegin + dRotation;
                  } else {
                    dRotationBegin = 180 - (dRotationBegin - 90) + dRotation;
                  }
                } else {
                  if (K10 > 0) {
                    dRotationBegin = dRotationBegin - 180 + dRotation;
                  } else {
                    dRotationBegin = 90 - dRotationBegin + dRotation;
                  }
                }
              } else {
                if (newPY >= 0) {
                  if (K10 >= 0) {
                    dRotationBegin = dRotationBegin - dRotation;
                  } else {
                    dRotationBegin = 180 - (dRotationBegin - 90) - dRotation;
                  }
                } else {
                  if (K10 >= 0) {
                    dRotationBegin = dRotationBegin - 180 - dRotation;
                  } else {
                    dRotationBegin = 90 - dRotationBegin - dRotation;
                  }
                }
              }

              dRotationBegin = dRotationBegin * Math.PI / 180;
              var x = centerPoint.x + R * Math.cos(dRotationBegin);
              var y = centerPoint.y + R * Math.sin(dRotationBegin);
              circlePoints.push(new _Point2.default(x, y));
            }
            circlePoints.push(p3);
          }
          return circlePoints;
        }

        /**
         * @function SuperMap.Geometry.LineString.createLineEPS
         * @description 鏍规嵁鐐圭殑绫诲瀷鐢诲嚭涓嶅悓绫诲瀷鐨勬洸绾裤€傜偣鐨勭被鍨嬫湁涓夌, LTypeArc, LTypeCurve, NONE銆�
         * @param points - {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟璁＄畻鐨勫垵濮嬬偣涓层€�
         * @returns {Array<SuperMap.Geometry.Point>} 璁＄畻鍑虹浉搴旂殑lineEPS鎺у埗鐐广€�
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-50,30));
         * points.push(new SuperMap.Geometry.Point(-30,50,"LTypeArc"));
         * points.push(new SuperMap.Geometry.Point(2,60));
         * points.push(new SuperMap.Geometry.Point(8,20));
         *
         * var lineEPS = SuperMap.Geometry.LineString.createLineEPS(points);
         */

      }, {
        key: 'createLineEPS',
        value: function createLineEPS(points) {
          var list = [],
              part = 0,
              len = points.length;
          if (points == null || len < 2) {
            return points;
          }
          for (var i = 0; i < len;) {
            var type = points[i].type;
            if (type == 'LTypeArc') {
              var listObj = LineString.createLineArc(list, i, len, points);
              list = listObj[0];
              i = listObj[1];
            } else {
              list.push(points[i]);
              i++;
            }
          }
          return list;
        }
      }, {
        key: 'createLineArc',
        value: function createLineArc(list, i, len, points) {
          if (i == 0) {
            var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeArc');
            Array.prototype.push.apply(list, bezierPtsObj[0]);
            i = bezierPtsObj[1] + 1;
          } else if (i == len - 1) {
            var bezierP = [points[i - 1], points[i]],
                bezierPts = LineString.calculateCircle(bezierP);
            Array.prototype.push.apply(list, bezierPts);
            i++;
          } else {
            var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeArc');
            list.pop();
            Array.prototype.push.apply(list, bezierPtsObj[0]);
            i = bezierPtsObj[1] + 1;
          }
          return [list, i];
        }
      }, {
        key: 'createLineCurve',
        value: function createLineCurve(list, i, len, points) {
          if (i == 0) {
            var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeCurve');
            Array.prototype.push.apply(list, bezierPtsObj[0]);
            i = bezierPtsObj[1] + 1;
          } else if (i == len - 1) {
            var bezierP = [points[i - 1], points[i]],
                bezierPts = LineString.calculatePointsFBZN(bezierP);
            Array.prototype.push.apply(list, bezierPts);
            i++;
          } else {
            var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeCurve');
            list.pop();
            Array.prototype.push.apply(list, bezierPtsObj[0]);
            i = bezierPtsObj[1] + 1;
          }
          return [list, i];
        }
      }, {
        key: 'addPointEPS',
        value: function addPointEPS(points, i, len, type) {
          var bezierP = [],
              j = i + 1;
          if (i == 0) {
            Array.prototype.push.apply(bezierP, [points[i], points[i + 1]]);
          } else if (i == len - 1) {
            Array.prototype.push.apply(bezierP, [points[i - 1], points[i]]);
          } else {
            Array.prototype.push.apply(bezierP, [points[i - 1], points[i], points[i + 1]]);
          }
          if (type == 'LTypeCurve') {
            var bezierPts = LineString.calculatePointsFBZN(bezierP);
          } else if (type == 'LTypeArc') {
            var bezierPts = LineString.calculateCircle(bezierP);
          }
          return [bezierPts, j];
        }
      }]);

      return LineString;
    }(_Curve3.default);

    exports.default = LineString;


    _SuperMap2.default.Geometry.LineString = LineString;

    /**
     * @private
     * @function InciseBezier
     * 鎷嗗垎璐濊禌灏旀洸绾垮崟鍏�
     *
     * pSrcPt -{Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟鎷嗗垎鐐规暟缁勩€�
     * j - {number} 鏈鎷嗗垎鐨勯鐐逛綅缃紝浠巔SrcPt[j]锛堝寘鎷鐐癸級鐐瑰悜鍚庡彇4涓偣杩涜鏈鎷嗗垎銆�
     * pDstPt -{Array<SuperMap.Geometry.Point>} 灏�4涓偣鎷嗗垎鎴�7涓偣锛宲DstPt鏄寘鍚7涓偣鐨勭粨鏋滅偣鏁扮粍銆�
     */
    function InciseBezier(pSrcPt, j, pDstPt) {
      var buffer = [];
      buffer[0] = [];
      buffer[1] = [];
      buffer[2] = [];
      var i;
      for (i = 0; i < 3; i++) {
        buffer[0][i] = new _Point2.default();
        buffer[0][i].x = (pSrcPt[j + i].x + pSrcPt[j + i + 1].x) / 2;
        buffer[0][i].y = (pSrcPt[j + i].y + pSrcPt[j + i + 1].y) / 2;
      }
      for (i = 0; i < 2; i++) {
        buffer[1][i] = new _Point2.default();
        buffer[1][i].x = (buffer[0][i].x + buffer[0][i + 1].x) / 2;
        buffer[1][i].y = (buffer[0][i].y + buffer[0][i + 1].y) / 2;
      }

      buffer[2][0] = new _Point2.default();
      buffer[2][0].x = (buffer[1][0].x + buffer[1][1].x) / 2;
      buffer[2][0].y = (buffer[1][0].y + buffer[1][1].y) / 2;
      //灏嗚緭鍏ョ殑鍥涗釜鐐规媶鍒嗘垚7涓偣
      pDstPt[0] = pSrcPt[j];
      pDstPt[1] = buffer[0][0];
      pDstPt[2] = buffer[1][0];
      pDstPt[3] = buffer[2][0];
      pDstPt[4] = buffer[1][1];
      pDstPt[5] = buffer[0][2];
      pDstPt[6] = pSrcPt[j + 3];
      return true;
    }

    /**
     * @private
     * @function SuperMap.Geometry.LineString.GetBezierGap
     * @description 璁＄畻璐濊禌灏旀洸绾夸袱涓《鐐圭殑绾靛悜鍜屾í鍚戠殑鏈€澶ц窛绂伙紝缁撴灉鐢ㄦ潵鍒ゆ柇鏄惁杈惧埌鎷嗗垎绮惧害銆�
     * @param pSrcPt {Array<SuperMap.Geometry.Point>} 浼犲叆鐨勫緟鎷嗗垎鐐规暟缁勩€�
     * @param j {number} 鏈鎷嗗垎鐨勯鐐逛綅缃紝浠巔SrcPt[j]锛堝寘鎷鐐癸級鐐瑰悜鍚庡彇4涓偣杩涜璺濈璁＄畻銆�
     */
    function GetBezierGap(pSrcPt, j) {
      var gap = 0;
      for (var i = 1; i < 4; i++) {
        if (Math.abs(pSrcPt[j + i].x - pSrcPt[j + i - 1].x) > gap) gap = Math.abs(pSrcPt[j + i].x - pSrcPt[j + i - 1].x);
        if (Math.abs(pSrcPt[j + i].y - pSrcPt[j + i - 1].y) > gap) gap = Math.abs(pSrcPt[j + i].y - pSrcPt[j + i - 1].y);
      }
      return gap;
    }

    /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Collection = __webpack_require__(3);

    var _Collection2 = _interopRequireDefault(_Collection);

    var _LineString2 = __webpack_require__(5);

    var _LineString3 = _interopRequireDefault(_LineString2);

    var _Point = __webpack_require__(2);

    var _Point2 = _interopRequireDefault(_Point);

    var _BaseTypes = __webpack_require__(10);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class  SuperMap.Geometry.LinearRing
     * @classdesc 鍑犱綍瀵硅薄绾跨幆绫伙紝鏄竴涓壒娈婄殑灏侀棴鐨勭嚎涓诧紝鍦ㄦ瘡娆ddPoint/removePoint涔嬪悗浼氶€氳繃娣诲姞涓€涓偣锛堟鐐规槸澶嶅埗鐨勭涓€涓偣寰楀埌鐨勶級
     *             浣滀负鏈€鍚庣殑涓€涓偣鏉ヨ嚜鍔ㄥ叧闂嚎鐜€�
     * @extends {SuperMap.Geometry.LineString}
     * @param points {Array<SuperMap.Geometry.Point>} 缁勬垚绾挎€х幆鐨勭偣銆�
     * @example
     * var points = [new SuperMap.Geometry.Point(4933.319287022352, -3337.3849141502124),
     *      new SuperMap.Geometry.Point(4960.9674060199022, -3349.3316322355736),
     *      new SuperMap.Geometry.Point(5006.0235999418364, -3358.8890067038628),
     *      new SuperMap.Geometry.Point(5075.3145648369318, -3378.0037556404409),
     *      new SuperMap.Geometry.Point(5305.19551436013, -3376.9669111768926)],
     * var linearRing = new SuperMap.Geometry.LinearRing(points);
     */
    var LinearRing = function (_LineString) {
      _inherits(LinearRing, _LineString);

      function LinearRing(points) {
        _classCallCheck(this, LinearRing);

        var _this = _possibleConstructorReturn(this, (LinearRing.__proto__ || Object.getPrototypeOf(LinearRing)).call(this, points));

        _this.componentTypes = ["SuperMap.Geometry.Point"];
        _this.CLASS_NAME = "SuperMap.Geometry.LinearRing";
        return _this;
      }

      /**
       * @function SuperMap.Geometry.LinearRing.prototype.addComponent
       * @description 娣诲姞涓€涓偣鍒板嚑浣曞浘褰㈡暟缁勪腑锛屽鏋滆繖涓偣灏嗚琚坊鍔犲埌缁勪欢鏁扮粍鐨勬湯绔紝骞朵笖涓庢暟缁勪腑宸茬粡瀛樺湪鐨勬渶鍚庝竴涓偣鐩稿悓锛�
       *                閲嶅鐨勭偣鏄笉鑳借娣诲姞鐨勩€傝繖灏嗗奖鍝嶆湭鍏抽棴鐜殑鍏抽棴銆傝繖涓柟娉曞彲浠ラ€氳繃灏嗛潪绌虹储寮曪紙缁勪欢鏁扮粍鐨勪笅鏍囷級浣滀负绗簩涓弬鏁伴噸鍐欍€�
       * @param point {SuperMap.Geometry.Point} 鐐瑰璞°€�
       * @param index {integer} 鎻掑叆缁勪欢鏁扮粍鐨勪笅鏍囥€�
       * @returns {boolean} 鐐瑰璞℃槸鍚︽坊鍔犳垚鍔熴€�
       */


      /**
       * @member SuperMap.Geometry.LinearRing.prototype.componentTypes - {Array<string>}
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @readonly
       * @default ["{@link SuperMap.Geometry.Point}"]
       */


      _createClass(LinearRing, [{
        key: 'addComponent',
        value: function addComponent(point, index) {
          var added = false;

          //remove last point
          var lastPoint = this.components.pop();

          // given an index, add the point
          // without an index only add non-duplicate points
          if (index != null || !point.equals(lastPoint)) {
            added = _Collection2.default.prototype.addComponent.apply(this, arguments);
          }

          //append copy of first point
          var firstPoint = this.components[0];
          _Collection2.default.prototype.addComponent.apply(this, [firstPoint]);

          return added;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.removeComponent
         * @description 浠庡嚑浣曠粍浠朵腑鍒犻櫎涓€涓偣銆�
         * @param point {SuperMap.Geometry.Point} 鐐瑰璞°€�
         * @returns {boolean} 鐐瑰璞℃槸鍚﹀垹闄ゃ€�
         */

      }, {
        key: 'removeComponent',
        value: function removeComponent(point) {
          var removed = this.components && this.components.length > 3;
          if (removed) {
            //remove last point
            this.components.pop();

            //remove our point
            _Collection2.default.prototype.removeComponent.apply(this, arguments);
            //append copy of first point
            var firstPoint = this.components[0];
            _Collection2.default.prototype.addComponent.apply(this, [firstPoint]);
          }
          return removed;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.move
         * @description 娌跨潃缁欏畾鐨剎銆亂杞存鏂瑰悜鎸夌収缁欏畾鐨勪綅绉荤Щ鍔ㄤ竴涓嚑浣曞浘褰紝move 涓嶄粎鏀瑰彉浜嗗嚑浣曞浘褰㈢殑浣嶇疆骞朵笖娓呯悊浜嗚竟鐣岀紦瀛樸€�
         * @param x {float} x杞存鏂瑰悜涓婄殑鍋忕Щ閲忋€�
         * @param y {float} y杞存鏂瑰悜涓婄殑鍋忕Щ閲忋€�
         */

      }, {
        key: 'move',
        value: function move(x, y) {
          for (var i = 0, len = this.components.length; i < len - 1; i++) {
            this.components[i].move(x, y);
          }
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.rotate
         * @description 鍥寸粫涓績鐐规棆杞嚑浣曞浘褰€�
         * @param angle {float} 鏃嬭浆瑙掔殑搴︽暟锛堟部鐫€x杞存鏂瑰悜鐨勯€嗘椂閽堟柟鍚戯級銆�
         * @param origin {SuperMap.Geometry.Point} 鏃嬭浆涓績鐐广€�
         */

      }, {
        key: 'rotate',
        value: function rotate(angle, origin) {
          for (var i = 0, len = this.components.length; i < len - 1; ++i) {
            this.components[i].rotate(angle, origin);
          }
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.resize
         * @description 璋冩暣鍑犱綍瀵硅薄鐨勫ぇ灏忋€�
         * @param scale - {float} 鍑犱綍鍥惧舰缂╂斁鐨勬瘮渚嬬郴鏁帮紝鏄嚑浣曞浘褰㈢淮鏁扮殑涓ゅ€嶃€傦紙濡傦細瀵逛簬绾挎潵璇村皢浠ョ嚎2鍊嶇殑闀垮害鎷夐暱锛屽浜庡杈瑰舰鏉ヨ锛屽皢浠ラ潰绉殑4鍊嶅彉鍖栵級銆�
         * @param origin {SuperMap.Geometry.Point} 璋冩暣澶у皬閫夊畾鐨勮捣濮嬪師鐐广€�
         * @param ratio {float} 鍙€夌殑x,y鐨勬瘮渚嬶紝榛樿鐨勬瘮渚嬩负1銆�
         * @returns {SuperMap.Geometry} 褰撳墠鐨勫嚑浣曞璞°€�
         */

      }, {
        key: 'resize',
        value: function resize(scale, origin, ratio) {
          for (var i = 0, len = this.components.length; i < len - 1; ++i) {
            this.components[i].resize(scale, origin, ratio);
          }
          return this;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.getCentroid
         * @description 鑾峰彇鍑犱綍瀵硅薄鐨勮川蹇冦€�
         * @returns {SuperMap.Geometry.Point} 鍑犱綍鍥惧舰鐨勮川蹇冦€�
         */

      }, {
        key: 'getCentroid',
        value: function getCentroid() {
          if (this.components) {
            var len = this.components.length;
            if (len > 0 && len <= 2) {
              return this.components.clone();
            } else if (len > 2) {
              var sumX = 0.0;
              var sumY = 0.0;
              var x0 = this.components[0].x;
              var y0 = this.components[0].y;
              var area = -1 * this.getArea();
              if (area != 0) {
                for (var i = 0; i < len - 1; i++) {
                  var b = this.components[i];
                  var c = this.components[i + 1];
                  sumX += (b.x + c.x - 2 * x0) * ((b.x - x0) * (c.y - y0) - (c.x - x0) * (b.y - y0));
                  sumY += (b.y + c.y - 2 * y0) * ((b.x - x0) * (c.y - y0) - (c.x - x0) * (b.y - y0));
                }
                var x = x0 + sumX / (6 * area);
                var y = y0 + sumY / (6 * area);
              } else {
                for (var i = 0; i < len - 1; i++) {
                  sumX += this.components[i].x;
                  sumY += this.components[i].y;
                }
                var x = sumX / (len - 1);
                var y = sumY / (len - 1);
              }
              return new _Point2.default(x, y);
            } else {
              return null;
            }
          }
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.getArea
         * @description 鑾峰緱褰撳墠鍑犱綍瀵硅薄鍖哄煙澶у皬锛屽鏋滄槸娌块『鏃堕拡鏂瑰悜鐨勭幆鍒欐槸姝ｅ€硷紝鍚﹀垯涓鸿礋鍊笺€�
         * @returns {float} 鐜殑闈㈢Н銆�
         */

      }, {
        key: 'getArea',
        value: function getArea() {
          var area = 0.0;
          if (this.components && this.components.length > 2) {
            var sum = 0.0;
            for (var i = 0, len = this.components.length; i < len - 1; i++) {
              var b = this.components[i];
              var c = this.components[i + 1];
              sum += (b.x + c.x) * (c.y - b.y);
            }
            area = -sum / 2.0;
          }
          return area;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.containsPoint
         * @description 鍒ゆ柇鐐规槸鍚﹀湪绾跨幆涓婏紝鏄繑鍥�1锛屼笉鏄繑鍥�0銆�
         * @param point {SuperMap.Geometry.Point}
         * @returns {boolean | number} 鐐规槸鍚﹀湪绾跨幆涓娿€�
         */

      }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
          var approx = _BaseTypes.NumberExt.limitSigDigs;
          var digs = 14;
          var px = approx(point.x, digs);
          var py = approx(point.y, digs);

          function getX(y, x1, y1, x2, y2) {
            return (y - y2) * ((x2 - x1) / (y2 - y1)) + x2;
          }

          var numSeg = this.components.length - 1;
          var start, end, x1, y1, x2, y2, cx, cy;
          var crosses = 0;
          for (var i = 0; i < numSeg; ++i) {
            start = this.components[i];
            x1 = approx(start.x, digs);
            y1 = approx(start.y, digs);
            end = this.components[i + 1];
            x2 = approx(end.x, digs);
            y2 = approx(end.y, digs);

            /**
             * The following conditions enforce five edge-crossing rules:
             *    1. points coincident with edges are considered contained;
             *    2. an upward edge includes its starting endpoint, and
             *    excludes its final endpoint;
             *    3. a downward edge excludes its starting endpoint, and
             *    includes its final endpoint;
             *    4. horizontal edges are excluded; and
             *    5. the edge-ray intersection point must be strictly right
             *    of the point P.
             */
            if (y1 === y2) {
              // horizontal edge
              if (py === y1) {
                // point on horizontal line
                if (x1 <= x2 && px >= x1 && px <= x2 || // right or vert
                    x1 >= x2 && px <= x1 && px >= x2) {
                  // left or vert
                  // point on edge
                  crosses = -1;
                  break;
                }
              }
              // ignore other horizontal edges
              continue;
            }
            cx = approx(getX(py, x1, y1, x2, y2), digs);
            if (cx === px) {
              // point on line
              if (y1 < y2 && py >= y1 && py <= y2 || // upward
                  y1 > y2 && py <= y1 && py >= y2) {
                // downward
                // point on edge
                crosses = -1;
                break;
              }
            }
            if (cx <= px) {
              // no crossing to the right
              continue;
            }
            if (x1 !== x2 && (cx < Math.min(x1, x2) || cx > Math.max(x1, x2))) {
              // no crossing
              continue;
            }
            if (y1 < y2 && py >= y1 && py < y2 || // upward
                y1 > y2 && py < y1 && py >= y2) {
              // downward
              ++crosses;
            }
          }
          var contained = crosses === -1 ?
              // on edge
              1 :
              // even (out) or odd (in)
              !!(crosses & 1);

          return contained;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.intersects
         * @description 鍒ゆ柇杈撳叆鐨勫嚑浣曞浘褰㈡槸鍚︿笌褰撳墠鍑犱綍鍥惧舰鐩镐氦銆�
         * @param geometry {SuperMap.Geometry} 浠绘剰鐨勫嚑浣曞璞°€�
         * @returns {boolean} 杈撳叆鍑犱綍鍥惧舰涓庡綋鍓嶇殑鐩爣鍑犱綍鍥惧舰鐩镐氦銆�
         */

      }, {
        key: 'intersects',
        value: function intersects(geometry) {
          var intersect = false;
          if (geometry.CLASS_NAME === "SuperMap.Geometry.Point") {
            intersect = this.containsPoint(geometry);
          } else if (geometry.CLASS_NAME === "SuperMap.Geometry.LineString") {
            intersect = geometry.intersects(this);
          } else if (geometry.CLASS_NAME === "SuperMap.Geometry.LinearRing") {
            intersect = _LineString3.default.prototype.intersects.apply(this, [geometry]);
          } else {
            // check for component intersections
            for (var i = 0, len = geometry.components.length; i < len; ++i) {
              intersect = geometry.components[i].intersects(this);
              if (intersect) {
                break;
              }
            }
          }
          return intersect;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.getVertices
         * @description 杩斿洖鍑犱綍鍥惧舰鐨勬墍鏈夌偣鐨勫垪琛ㄣ€�
         * @param nodes {boolean} 瀵逛簬绾挎潵璇达紝浠呬粎杩斿洖浣滀负绔偣鐨勯《鐐癸紝濡傛灉璁句负false锛屽垯杩斿洖闈炵鐐圭殑椤剁偣銆傚鏋滄病鏈夎缃鍙傛暟锛屽垯杩斿洖鎵€鏈夐《鐐广€�
         * @returns {Array} 鍑犱綍瀵硅薄鎵€鏈夌偣鐨勫垪琛ㄣ€�
         */

      }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
          return nodes === true ? [] : this.components.slice(0, this.components.length - 1);
        }
      }]);

      return LinearRing;
    }(_LineString3.default);

    exports.default = LinearRing;

    _SuperMap2.default.Geometry.LinearRing = LinearRing;

    /***/ }),
  /* 7 */
  /***/ (function(module, exports) {

    module.exports = ol;

    /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Collection2 = __webpack_require__(3);

    var _Collection3 = _interopRequireDefault(_Collection2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.MultiPoint
     * @classdesc 鍑犱綍瀵硅薄澶氱偣绫汇€�
     * @extends {SuperMap.Geometry.Collection}
     * @param components - {Array<SuperMap.Geometry.Point>} 鐐瑰璞℃暟缁勩€�
     * @example
     * var point1 = new SuperMap.Geometry.Point(5,6);
     * var poine2 = new SuperMap.Geometry.Point(7,8);
     * var multiPoint = new SuperMap.Geometry.MultiPoint([point1,point2]);
     */
    var MultiPoint = function (_Collection) {
      _inherits(MultiPoint, _Collection);

      function MultiPoint(components) {
        _classCallCheck(this, MultiPoint);

        var _this = _possibleConstructorReturn(this, (MultiPoint.__proto__ || Object.getPrototypeOf(MultiPoint)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.Point"];
        _this.CLASS_NAME = "SuperMap.Geometry.MultiPoint";
        return _this;
      }

      /**
       * @function SuperMap.Geometry.MultiPoint.prototype.addPoint
       * @description 娣诲姞鐐癸紝灏佽浜� {@link SuperMap.Geometry.Collection|SuperMap.Geometry.Collection.addComponent}鏂规硶銆�
       * @param point - {SuperMap.Geometry.Point} 娣诲姞鐨勭偣銆�
       * @param index - {integer} 鍙€夌殑涓嬫爣銆�
       */


      /**
       * @member SuperMap.Geometry.MultiPoint.prototype.componentTypes -{Array<string>}
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @readonly
       * @default ["{@link SuperMap.Geometry.Point}"]
       */


      _createClass(MultiPoint, [{
        key: 'addPoint',
        value: function addPoint(point, index) {
          this.addComponent(point, index);
        }

        /**
         * @function SuperMap.Geometry.MultiPoint.prototype.removePoint
         * @description 绉婚櫎鐐�,灏佽浜� {@link SuperMap.Geometry.Collection|SuperMap.Geometry.Collection.removeComponent} 鏂规硶銆�
         * @param point - {SuperMap.Geometry.Point} 绉婚櫎鐨勭偣瀵硅薄銆�
         */

      }, {
        key: 'removePoint',
        value: function removePoint(point) {
          this.removeComponent(point);
        }
      }]);

      return MultiPoint;
    }(_Collection3.default);

    exports.default = MultiPoint;

    _SuperMap2.default.Geometry.MultiPoint = MultiPoint;

    /***/ }),
  /* 9 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Collection2 = __webpack_require__(3);

    var _Collection3 = _interopRequireDefault(_Collection2);

    var _Point = __webpack_require__(2);

    var _Point2 = _interopRequireDefault(_Point);

    var _LineString = __webpack_require__(5);

    var _LineString2 = _interopRequireDefault(_LineString);

    var _LinearRing = __webpack_require__(6);

    var _LinearRing2 = _interopRequireDefault(_LinearRing);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.Polygon
     * @classdesc  澶氳竟褰㈠嚑浣曞璞＄被銆�
     * @extends {SuperMap.Geometry.Collection}
     * @param components - {Array<SuperMap.Geometry.LinearRing>} 鐢ㄦ潵鐢熸垚澶氳竟褰㈢殑绾跨幆鏁扮粍銆�
     * @example
     * var points =[new SuperMap.Geometry.Point(0,4010338),
     *      new SuperMap.Geometry.Point(1063524,4010338),
     *      new SuperMap.Geometry.Point(1063524,3150322),
     *      new SuperMap.Geometry.Point(0,3150322)
     *  ],
     *  var linearRings = new SuperMap.Geometry.LinearRing(points),
     *  var  region = new SuperMap.Geometry.Polygon([linearRings]);
     */
    var Polygon = function (_Collection) {
      _inherits(Polygon, _Collection);

      function Polygon(components) {
        _classCallCheck(this, Polygon);

        var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.LinearRing"];
        _this.CLASS_NAME = "SuperMap.Geometry.Polygon";
        return _this;
      }

      /**
       * @function SuperMap.Geometry.Polygon.prototype.getArea
       * @description 鑾峰緱鍖哄煙闈㈢Н锛屼粠鍖哄煙鐨勫閮ㄥ彛寰勫噺鍘昏姝ゅ尯鍩熷唴閮ㄥ彛寰勭畻鎵€寰楃殑闈㈢Н銆�
       * @returns {float} 鍑犱綍瀵硅薄鐨勯潰绉€�
       */


      /**
       * @member SuperMap.Geometry.Polygon.prototype.componentTypes -{Array<string>}
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @readonly
       * @default ["{@link SuperMap.Geometry.LinearRing}"]
       */


      _createClass(Polygon, [{
        key: 'getArea',
        value: function getArea() {
          var area = 0.0;
          if (this.components && this.components.length > 0) {
            area += Math.abs(this.components[0].getArea());
            for (var i = 1, len = this.components.length; i < len; i++) {
              area -= Math.abs(this.components[i].getArea());
            }
          }
          return area;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.getGeodesicArea
         * @description 璁＄畻鎶曞奖鍒扮悆闈笂鐨勫杈瑰舰杩戜技闈㈢Н銆�
         * @param projection - {SuperMap.Projection} 绌洪棿鍙傝€冪郴缁熺殑鍑犱綍鍧愭爣銆傚鏋滄病鏈夎缃紝榛樿 WGS84銆�
         * @returns {float} 澶氳竟褰㈣繎浼兼祴鍦伴潰绉€�
         */

      }, {
        key: 'getGeodesicArea',
        value: function getGeodesicArea(projection) {
          var area = 0.0;
          if (this.components && this.components.length > 0) {
            area += Math.abs(this.components[0].getGeodesicArea(projection));
            for (var i = 1, len = this.components.length; i < len; i++) {
              area -= Math.abs(this.components[i].getGeodesicArea(projection));
            }
          }
          return area;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.containsPoint
         * @description 鍒ゆ柇鐐规槸鍚﹀湪澶氳竟褰㈤噷銆�
         * @param point - {SuperMap.Geometry.Point} 鐐瑰璞°€�
         * @returns {boolean | number} 鏄惁鍦ㄥ杈瑰舰閲屻€�
         */

      }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
          var numRings = this.components.length;
          var contained = false;
          if (numRings > 0) {
            // check exterior ring - 1 means on edge, boolean otherwise
            contained = this.components[0].containsPoint(point);
            if (contained !== 1) {
              if (contained && numRings > 1) {
                // check interior rings
                var hole;
                for (var i = 1; i < numRings; ++i) {
                  hole = this.components[i].containsPoint(point);
                  if (hole) {
                    if (hole === 1) {
                      // on edge
                      contained = 1;
                    } else {
                      // in hole
                      contained = false;
                    }
                    break;
                  }
                }
              }
            }
          }
          return contained;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.intersects
         * @description 鍒ゆ柇涓や釜鍑犱綍瀵硅薄鏄惁鐩镐氦銆�
         * @param geometry - {SuperMap.Geometry} 浠讳綍绫诲瀷鐨勫嚑浣曞璞°€�
         * @returns {boolean} 涓や釜鍑犱綍瀵硅薄鏄惁鐩镐氦銆�
         */

      }, {
        key: 'intersects',
        value: function intersects(geometry) {
          var intersect = false;
          var i, len;
          if (geometry.CLASS_NAME === "SuperMap.Geometry.Point") {
            intersect = this.containsPoint(geometry);
          } else if (geometry.CLASS_NAME === "SuperMap.Geometry.LineString" || geometry.CLASS_NAME === "SuperMap.Geometry.LinearRing") {
            // check if rings/linestrings intersect
            for (i = 0, len = this.components.length; i < len; ++i) {
              intersect = geometry.intersects(this.components[i]);
              if (intersect) {
                break;
              }
            }
            if (!intersect) {
              // check if this poly contains points of the ring/linestring
              for (i = 0, len = geometry.components.length; i < len; ++i) {
                intersect = this.containsPoint(geometry.components[i]);
                if (intersect) {
                  break;
                }
              }
            }
          } else {
            for (i = 0, len = geometry.components.length; i < len; ++i) {
              intersect = this.intersects(geometry.components[i]);
              if (intersect) {
                break;
              }
            }
          }
          // check case where this poly is wholly contained by another
          if (!intersect && geometry.CLASS_NAME === "SuperMap.Geometry.Polygon") {
            // exterior ring points will be contained in the other geometry
            var ring = this.components[0];
            for (i = 0, len = ring.components.length; i < len; ++i) {
              intersect = geometry.containsPoint(ring.components[i]);
              if (intersect) {
                break;
              }
            }
          }
          return intersect;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.distanceTo
         * @description 璁＄畻涓や釜鍑犱綍瀵硅薄闂寸殑鏈€灏忚窛绂伙紙x-y骞抽潰鍧愭爣绯讳笅锛夈€�
         * @param geometry - {SuperMap.Geometry} 鐩爣鍑犱綍瀵硅薄銆�
         * @param options - {Object}鍙€夊弬鏁般€�<br>
         *         details - {boolean} 杩斿洖璺濈璁＄畻鐨勭粏鑺傘€傞粯璁や负false銆�<br>
         *         edge - {boolean} 璁＄畻涓€涓嚑浣曞璞″埌鐩爣鍑犱綍瀵硅薄杈圭紭鐨勬渶杩戣窛绂汇€傞粯璁や负true銆� 濡傛灉璁句负true锛�
         *                          涓€涓嚑浣曞浘褰㈠畬鍏ㄥ寘鍚湪鐩爣鍑犱綍瀵硅薄涓椂锛岃皟鐢╠istanceTo杩斿洖闈為浂缁撴灉锛屽鏋渇alse锛�
         *                          涓や釜鍑犱綍瀵硅薄鐩镐氦鎯呭喌涓嬭皟鐢╠istanceTo缁撴灉杩斿洖0锛岃€屼笖濡傛灉false锛屽皢涓嶈繑璺濈銆�
         * @returns {number | Object} 杩斿洖涓€涓嚑浣曞璞″埌鐩爣鍑犱綍瀵硅薄鐨勮窛绂汇€�
         */

      }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
          var edge = !(options && options.edge === false);
          var result;
          // this is the case where we might not be looking for distance to edge
          if (!edge && this.intersects(geometry)) {
            result = 0;
          } else {
            result = _get(Polygon.prototype.__proto__ || Object.getPrototypeOf(Polygon.prototype), 'distanceTo', this).call(this, geometry, options);
          }
          return result;
        }

        /**
         * @function SuperMap.Geometry.Polygon.createRegularPolygon
         * @description 鍒涘缓 RegularPolygon 瀵硅薄銆�
         * @param origin - {SuperMap.Geometry.Point} 澶氳竟褰㈢殑涓績 銆�
         * @param radius - {float} 鍗婂緞銆�
         * @param sides - {integer} 杈规暟锛�20涓繎浼间竴涓渾銆�
         * @param rotation - {float} 鏃嬭浆瑙掑害锛屽崟浣嶄负degrees銆�
         * @example
         * var sides = 50;
         * var origin = new SuperMap.Geometry.Point(5,0);
         * var polygon = SuperMap.Geometry.Polygon.createRegularPolygon(origin,6,sides,270);
         */

      }], [{
        key: 'createRegularPolygon',
        value: function createRegularPolygon(origin, radius, sides, rotation) {
          var angle = Math.PI * (1 / sides - 1 / 2);
          if (rotation) {
            angle += rotation / 180 * Math.PI;
          }
          var rotatedAngle, x, y;
          var points = [];
          for (var i = 0; i < sides; ++i) {
            rotatedAngle = angle + i * 2 * Math.PI / sides;
            x = origin.x + radius * Math.cos(rotatedAngle);
            y = origin.y + radius * Math.sin(rotatedAngle);
            points.push(new _Point2.default(x, y));
          }
          var ring = new _LinearRing2.default(points);
          return new Polygon([ring]);
        }
      }, {
        key: 'createRegularPolygonCurve',


        /**
         * @function SuperMap.Geometry.Polygon.createRegularPolygonCurve
         * @description 鍒涘缓鎵囧舰瀵硅薄銆�
         * @param origin - {SuperMap.Geometry.Point} 澶氳竟褰㈢殑涓績 銆�
         * @param radius - {float} 鍗婂緞銆�
         * @param sides - {integer} 杈规暟锛�50涓繎浼间竴涓墖褰€�
         * @param r - {integer}
         * @param angel - {float} 鏃嬭浆瑙掑害锛屽崟浣嶄负degrees銆傛部鐫€x杞存鏂瑰悜鐨勯€嗘椂閽堟柟鍚戙€�
         * @param resolution - {float} 褰撳墠鍦板浘鐨勫垎杈ㄧ巼.,鍥哄畾澶у皬涓嬭緭鍏ワ紝鍏朵粬鎯呭喌涓嶉渶瑕佹鍙傛暟
         * 澶囨敞锛欸eometry鍐呴儴鍗曚綅鍧囦负鍦扮悊鍗曚綅锛岄粯璁ょ敤鎴疯緭鍏ョ殑鍙傛暟涔熶负鍦扮悊鍗曚綅锛屽鏋滀紶鍏esolution锛屽垯鍗婂緞鍒欎负
         * 涓哄儚绱犲崟浣嶏紝鍐呴儴浼氭牴鎹儚绱犲€煎拰鍒嗚鲸鐜囪幏鍙栧湴鐞嗗ぇ灏忓悗鍦ㄨ繘琛屾瀯閫燝eometry锛屼絾鏈€缁堢殑Geometry鍧囦负鍦扮悊鍗曚綅銆�
         * @returns {SuperMap.Geometry.Polygon} 鍑犱綍闈㈠璞°€�
         * @example
         * var sides = 50;
         * var origin = new SuperMap.Geometry.Point(5,0);
         * var polygon = SuperMap.Geometry.Polygon.createRegularPolygonCurve(origin,6,sides,270);
         */
        value: function createRegularPolygonCurve(origin, radius, sides, r, angel, resolution) {
          if (resolution == undefined) resolution = 1;

          var rR = r * Math.PI / (180 * sides);

          var rotatedAngle, x, y;
          var points = [];
          for (var i = 0; i < sides; ++i) {
            rotatedAngle = rR * i;
            x = origin.x + radius * resolution * Math.cos(rotatedAngle);
            y = origin.y + radius * resolution * Math.sin(rotatedAngle);
            points.push(new _Point2.default(x, y));
          }
          rotatedAngle = r * Math.PI / 180;
          x = origin.x + radius * resolution * Math.cos(rotatedAngle);
          y = origin.y + radius * resolution * Math.sin(rotatedAngle);
          points.push(new _Point2.default(x, y));

          points.push(origin);

          var ring = new _LinearRing2.default(points);
          ring.rotate(parseFloat(angel), origin);
          var geo = new Polygon([ring]);
          geo.origin = origin;
          geo.radius = radius;
          geo.r = r;
          geo.angel = angel;
          geo.sides = sides;
          geo.polygonType = "Curve";
          return geo;
        }
      }, {
        key: 'createRegularPolygonTriangle',


        /**
         * @function SuperMap.Geometry.Polygon.createRegularPolygonTriangle
         * @description 鍒涘缓4G涓夎褰�,鐢典俊琛屼笟4G涓撲笟绗﹀彿褰㈠绫讳技涓猴細-鈻枫€�
         * @param origin - {SuperMap.Geometry.Point} 涓夎褰㈢殑鍘熺偣 銆�
         * @param height - {float} 澶栨帴鐭╁舰鐨勯珮搴︺€�
         * @param width - {float} 澶栨帴鐭╁舰鐨勫搴︺€�
         * @param lineLength - {float} 绾块暱搴︺€�
         * @param angel - {float} 鏃嬭浆瑙掑害锛屽崟浣嶄负degrees,娌跨潃x杞存鏂瑰悜鐨勯€嗘椂閽堟柟鍚�.銆�
         * @param resolution - {float} 褰撳墠鍦板浘鐨勫垎杈ㄧ巼.,鍥哄畾澶у皬涓嬭緭鍏ワ紝鍏朵粬鎯呭喌涓嶉渶瑕佹鍙傛暟銆傚娉細Geometry鍐呴儴鍗曚綅鍧囦负鍦扮悊鍗曚綅锛�
         *                              榛樿鐢ㄦ埛杈撳叆鐨勫弬鏁颁篃涓哄湴鐞嗗崟浣嶏紝濡傛灉浼犲叆resolution锛屽垯height銆亀idth銆乴ineLength鍒欎负鍍忕礌鍗�
         *                              浣嶏紝鍐呴儴浼氭牴鎹儚绱犲€煎拰鍒嗚鲸鐜囪幏鍙栧湴鐞嗗ぇ灏忓悗鍦ㄨ繘琛屾瀯閫燝eometry锛屼絾鏈€缁堢殑Geometry鍧囦负鍦扮悊鍗曚綅銆�
         * @returns {SuperMap.Geometry.Collection} 鍑犱綍瀵硅薄闆嗗悎锛岄潰瀵硅薄&绾垮璞°€�
         */
        value: function createRegularPolygonTriangle(origin, height, width, lineLength, angel, resolution) {
          if (resolution == undefined) resolution = 1;

          var lineList = [];
          lineList.push(origin);
          lineList.push(new _Point2.default(origin.x + lineLength * resolution, origin.y));
          var geoline = new _LineString2.default(lineList);
          geoline.rotate(parseFloat(angel), origin);

          var triangleList = [];
          triangleList.push(new _Point2.default(origin.x + height * resolution, origin.y));
          triangleList.push(new _Point2.default(origin.x + lineLength * resolution, origin.y + width * resolution / 2));
          triangleList.push(new _Point2.default(origin.x + lineLength * resolution, origin.y - width * resolution / 2));
          var geoTriangle = new _LinearRing2.default(triangleList);
          geoTriangle.rotate(parseFloat(angel), origin);
          var geo = new _Collection3.default([geoline, geoTriangle]);
          geo.origin = origin;
          geo.height = height;
          geo.width = width;
          geo.lineLength = lineLength;
          geo.angel = angel;
          geo.polygonType = "Triangle";
          return geo;
        }
      }, {
        key: 'createBsplinesurface',


        /**
         * @function SuperMap.Geometry.Polygon.createBsplinesurface
         * @description 鍒涘缓3G B鏍锋潯鏇查潰锛岀數淇�3G涓撲笟绗﹀彿锛岀敱B鏍锋潯鏇茬嚎妯℃嫙鐢熸垚銆�
         * @param origin - {SuperMap.Geometry.Point} 鏇查潰鐨勫師鐐� 銆�
         * @param height - {float} 澶栨帴鐭╁舰鐨勯珮搴︺€�
         * @param width - {float} 澶栨帴鐭╁舰鐨勫搴︺€�
         * @param angel - {float} 鏃嬭浆瑙掑害锛屽崟浣嶄负degrees锛屾部鐫€x杞存鏂瑰悜鐨勯€嗘椂閽堟柟鍚戙€�
         * @param resolution - {float} 褰撳墠鍦板浘鐨勫垎杈ㄧ巼锛屽浐瀹氬ぇ灏忎笅杈撳叆锛屽叾浠栨儏鍐典笉闇€瑕佹鍙傛暟銆傚娉細Geometry鍐呴儴鍗曚綅鍧囦负鍦扮悊鍗曚綅锛�
         *                              榛樿鐢ㄦ埛杈撳叆鐨勫弬鏁颁篃涓哄湴鐞嗗崟浣嶏紝濡傛灉浼犲叆resolution锛屽垯height銆亀idth涓哄儚绱犲崟浣嶏紝鍐呴儴浼氭牴鎹�
         *                              鍍忕礌鍊煎拰鍒嗚鲸鐜囪幏鍙栧湴鐞嗗ぇ灏忓悗鍦ㄨ繘琛屾瀯閫燝eometry锛屼絾鏈€缁堢殑Geometry鍧囦负鍦扮悊鍗曚綅銆�
         * @param k - {number} 閫掓帹娆℃暟锛屽彲浠ユ帶鍒舵洸绾跨殑鍏夋粦搴︺€�
         * @returns {SuperMap.Geometry.Polygon} 鍑犱綍闈㈠璞°€�
         */
        value: function createBsplinesurface(origin, height, width, angel, resolution, k) {
          if (resolution == undefined) resolution = 1;

          if (k == undefined) k = 10;

          var pointList = [];
          pointList.push(origin);
          pointList.push(origin);

          pointList.push(new _Point2.default(origin.x + height * resolution * 2 / 3, origin.y + width * resolution / 2));
          pointList.push(new _Point2.default(origin.x + height * resolution, origin.y + width * resolution / 2));
          pointList.push(new _Point2.default(origin.x + height * resolution, origin.y - width * resolution / 2));
          pointList.push(new _Point2.default(origin.x + height * resolution * 2 / 3, origin.y - width * resolution / 2));

          pointList.push(origin);
          pointList.push(origin);

          var pointList2 = [];
          var i, j, a0, a1, a2, dt, t1, t2;
          var t_x, t_y;
          var n = pointList.length;
          dt = 1.0 / k;

          pointList2.push(new _Point2.default((pointList[0].x + pointList[1].x) / 2, (pointList[0].y + pointList[1].y) / 2));

          for (i = 1; i < n - 1; i++) {
            for (j = 0; j <= k; j++) {
              t1 = j * dt;
              t2 = t1 * t1;

              a0 = (t2 - 2 * t1 + 1) / 2.0;
              a1 = (2 * t1 - 2 * t2 + 1) / 2.0;
              a2 = t2 / 2.0;

              t_x = a0 * pointList[i - 1].x + a1 * pointList[i].x + a2 * pointList[i + 1].x;
              t_y = a0 * pointList[i - 1].y + a1 * pointList[i].y + a2 * pointList[i + 1].y;
              pointList2.push(new _Point2.default(t_x, t_y));
            }
          }

          var ring = new _LinearRing2.default(pointList2);
          ring.rotate(parseFloat(angel), origin);
          var geo = new _Collection3.default([ring]);
          geo.origin = origin;
          geo.height = height;
          geo.width = width;
          geo.angel = angel;
          geo.polygonType = "Bspline";
          return geo;
        }
      }]);

      return Polygon;
    }(_Collection3.default);

    exports.default = Polygon;


    _SuperMap2.default.Geometry.Polygon = Polygon;

    /***/ }),
  /* 10 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ArrayExt = exports.FunctionExt = exports.NumberExt = exports.StringExt = undefined;

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     *@namespace SuperMap
     */

    /**
     * @description In addition to the mandatory C and P parameters, an arbitrary number of
     * objects can be passed, which will extend C.
     * @memberOf SuperMap
     * @param C - {Object} the class that inherits
     * @param P - {Object} the superclass to inherit from
     */
    _SuperMap2.default.inherit = function (C, P) {
      var F = function F() {};
      F.prototype = P.prototype;
      C.prototype = new F();
      var i, l, o;
      for (i = 2, l = arguments.length; i < l; i++) {
        o = arguments[i];
        if (typeof o === "function") {
          o = o.prototype;
        }
        _SuperMap2.default.Util.extend(C.prototype, o);
      }
    };

    /**
     * @description 瀹炵幇澶氶噸缁ф壙
     * @memberOf SuperMap
     * @param ...mixins {Class|Object}缁ф壙鐨勭被
     */
    _SuperMap2.default.mixin = function () {
      for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
        mixins[_key] = arguments[_key];
      }

      var Mix = function Mix(options) {
        _classCallCheck(this, Mix);

        for (var index = 0; index < mixins.length; index++) {
          copyProperties(this, new mixins[index](options));
        }
      };

      for (var index = 0; index < mixins.length; index++) {
        var mixin = mixins[index];
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
        copyProperties(Mix.prototype, new mixin());
      }
      return Mix;

      function copyProperties(target, source) {
        var ownKeys = Object.getOwnPropertyNames(source);
        if (Object.getOwnPropertySymbols) {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source));
        }
        for (var index = 0; index < ownKeys.length; index++) {
          var key = ownKeys[index];
          if (key !== "constructor" && key !== "prototype" && key !== "name" && key !== "length") {
            var desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
          }
        }
      }
    };

    /**
     * @name String
     * @memberOf SuperMap
     * @namespace
     * @description 瀛楃涓叉搷浣滅殑涓€绯诲垪甯哥敤鎵╁睍鍑芥暟.
     */
    var StringExt = exports.StringExt = _SuperMap2.default.String = {

      /**
       * @description 鍒ゆ柇鐩爣瀛楃涓叉槸鍚︿互鎸囧畾鐨勫瓙瀛楃涓插紑澶�.
       * @param str - {string} 鐩爣瀛楃涓�.
       * @param sub - {string} 鏌ユ壘鐨勫瓙瀛楃涓�.
       * @returns {Boolean} 鐩爣瀛楃涓蹭互鎸囧畾鐨勫瓙瀛楃涓插紑澶�,鍒欒繑鍥瀟rue;鍚﹀垯杩斿洖false.
       */
      startsWith: function startsWith(str, sub) {
        return str.indexOf(sub) == 0;
      },

      /**
       * @description 鍒ゆ柇鐩爣瀛楃涓叉槸鍚﹀寘鍚寚瀹氱殑瀛愬瓧绗︿覆.
       * @param str - {string} 鐩爣瀛楃涓�.
       * @param sub - {string} 鏌ユ壘鐨勫瓙瀛楃涓�.
       * @returns {Boolean} 鐩爣瀛楃涓蹭腑鍖呭惈鎸囧畾鐨勫瓙瀛楃涓�,鍒欒繑鍥瀟rue;鍚﹀垯杩斿洖false.
       */
      contains: function contains(str, sub) {
        return str.indexOf(sub) != -1;
      },

      /**
       * @description 鍒犻櫎涓€涓瓧绗︿覆鐨勫紑澶村拰缁撳熬澶勭殑鎵€鏈夌┖鐧藉瓧绗�.
       * @param str - {string} (鍙兘)瀛樺湪绌虹櫧瀛楃濉鐨勫瓧绗︿覆.
       * @returns {string} 鍒犻櫎寮€澶村拰缁撳熬澶勭┖鐧藉瓧绗﹀悗鐨勫瓧绗︿覆.
       */
      trim: function trim(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      },

      /**
       * @description 楠嗛┘寮�("-")杩炲瓧绗︾殑瀛楃涓插鐞�.
       * 渚嬪: "chicken-head" becomes "chickenHead",
       *       "-chicken-head" becomes "ChickenHead".
       * @param str - {string} 瑕佸鐞嗙殑瀛楃涓�,鍘熷鍐呭涓嶅簲琚慨鏀�.
       * @returns {string}
       */
      camelize: function camelize(str) {
        var oStringList = str.split('-');
        var camelizedString = oStringList[0];
        for (var i = 1, len = oStringList.length; i < len; i++) {
          var s = oStringList[i];
          camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
        }
        return camelizedString;
      },

      /**
       * @description 鎻愪緵甯� ${token} 鏍囪鐨勫瓧绗︿覆, 杩斿洖context瀵硅薄灞炴€т腑鎸囧畾鏍囪鐨勫睘鎬у€�.
       * @example
       * 绀轰緥:
       * (code)
       * 1銆乼emplate = "${value,getValue}";
       *         context = {value: {getValue:function(){return Math.max.apply(null,argument);}}};
       *         args = [2,23,12,36,21];
       *       杩斿洖鍊�:36
       * (end)
       * 绀轰緥:
       * (code)
       * 2銆乼emplate = "$${{value,getValue}}";
       *         context = {value: {getValue:function(){return Math.max.apply(null,argument);}}};
       *         args = [2,23,12,36,21];
       *       杩斿洖鍊�:"${36}"
       * (end)
       * 绀轰緥:
       * (code)
       * 3銆乼emplate = "${a,b}";
       *         context = {a: {b:"format"}};
       *         args = null;
       *       杩斿洖鍊�:"format"
       * (end)
       * 绀轰緥:
       * (code)
       * 3銆乼emplate = "${a,b}";
       *         context = null;
       *         args = null;
       *       杩斿洖鍊�:"${a.b}"
       * (end)
       * @param template - {string} 甯︽爣璁扮殑瀛楃涓插皢瑕佽鏇挎崲.鍙傛暟 template 鏍煎紡涓�"${token}",姝ゅ鐨� token 鏍囪浼氭浛鎹负 context["token"] 灞炴€х殑鍊�
       * @param context - {Object} 甯︽湁灞炴€х殑鍙€夊璞＄殑灞炴€х敤浜庡尮閰嶆牸寮忓寲瀛楃涓蹭腑鐨勬爣璁�.濡傛灉璇ュ弬鏁颁负绌�,灏嗕娇鐢� window 瀵硅薄.
       * @param args - {Array} 鍙€夊弬鏁颁紶閫掔粰鍦╟ontext瀵硅薄涓婃壘鍒扮殑鍑芥暟.
       * @returns {string} 浠� context 瀵硅薄灞炴€т腑鏇挎崲瀛楃涓叉爣璁颁綅鐨勫瓧绗︿覆.
       */
      format: function format(template, context, args) {
        if (!context) {
          context = window;
        }

        // Example matching:
        // str   = ${foo.bar}
        // match = foo.bar
        var replacer = function replacer(str, match) {
          var replacement;

          // Loop through all subs. Example: ${a.b.c}
          // 0 -> replacement = context[a];
          // 1 -> replacement = context[a][b];
          // 2 -> replacement = context[a][b][c];
          var subs = match.split(/\.+/);
          for (var i = 0; i < subs.length; i++) {
            if (i == 0) {
              replacement = context;
            }

            replacement = replacement[subs[i]];
          }

          if (typeof replacement === "function") {
            replacement = args ? replacement.apply(null, args) : replacement();
          }

          // If replacement is undefined, return the string 'undefined'.
          // This is a workaround for a bugs in browsers not properly
          // dealing with non-participating groups in regular expressions:
          // http://blog.stevenlevithan.com/archives/npcg-javascript
          if (typeof replacement == 'undefined') {
            return 'undefined';
          } else {
            return replacement;
          }
        };

        return template.replace(_SuperMap2.default.String.tokenRegEx, replacer);
      },

      /**
       * @description Used to find tokens in a string.
       * @default  /\$\{([\w.]+?)\}/g
       * @example
       * Examples: ${a}, ${a.b.c}, ${a-b}, ${5}
       */
      tokenRegEx: /\$\{([\w.]+?)\}/g,

      /**
       * @description Used to test strings as numbers.
       * @default  /^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/
       */
      numberRegEx: /^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,

      /**
       * @description 鍒ゆ柇涓€涓瓧绗︿覆鏄惁鍙寘鍚竴涓暟鍊�.
       * @example
       * (code)
       * SuperMap.String.isNumeric("6.02e23") // true
       * SuperMap.String.isNumeric("12 dozen") // false
       * SuperMap.String.isNumeric("4") // true
       * SuperMap.String.isNumeric(" 4 ") // false
       * (end)
       * @returns {Boolean} 瀛楃涓插寘鍚敮涓€鐨勬暟鍊�,杩斿洖true;鍚﹀垯杩斿洖false.
       */
      isNumeric: function isNumeric(value) {
        return _SuperMap2.default.String.numberRegEx.test(value);
      },

      /**
       * @description 鎶婁竴涓湅浼兼暟鍊煎瀷鐨勫瓧绗︿覆杞寲涓轰竴涓暟鍊�.
       *
       * @returns {number|string} 濡傛灉鑳借浆鎹负鏁板€煎垯杩斿洖鏁板€�,鍚﹀垯杩斿洖瀛楃涓叉湰韬�.
       */
      numericIf: function numericIf(value) {
        return _SuperMap2.default.String.isNumeric(value) ? parseFloat(value) : value;
      }

    };

    /**
     * @name Number
     * @memberOf SuperMap
     * @namespace
     * @description 鏁板€兼搷浣滅殑涓€绯诲垪甯哥敤鎵╁睍鍑芥暟.
     */
    var NumberExt = exports.NumberExt = _SuperMap2.default.Number = {

      /**
       *  @description 鏍煎紡鍖栨暟瀛楁椂榛樿鐨勫皬鏁扮偣鍒嗛殧绗�.
       *  @constant
       *  @default "."
       */
      decimalSeparator: ".",

      /**
       *  @description 鏍煎紡鍖栨暟瀛楁椂榛樿鐨勫崈浣嶅垎闅旂.
       *  @constant
       *  @default ","
       */
      thousandsSeparator: ",",

      /**
       * @description 闄愬埗娴偣鏁扮殑鏈夋晥鏁板瓧浣嶆暟.
       * @param num - {number}
       * @param sig - {integer}
       * @returns {number} 灏嗘暟瀛楀洓鑸嶄簲鍏ュ埌鎸囧畾鏁伴噺鐨勬湁鏁堜綅鏁�.
       */
      limitSigDigs: function limitSigDigs(num, sig) {
        var fig = 0;
        if (sig > 0) {
          fig = parseFloat(num.toPrecision(sig));
        }
        return fig;
      },

      /**
       * @description 鏁板瓧鏍煎紡鍖栬緭鍑�.
       * @param num  - {number}
       * @param dec  - {integer} 鏁板瓧鐨勫皬鏁伴儴鍒嗗洓鑸嶄簲鍏ュ埌鎸囧畾鐨勪綅鏁�.榛樿涓� 0. 璁剧疆涓簄ull鍊兼椂灏忔暟閮ㄥ垎涓嶅彉.
       * @param tsep - {string} 鍗冧綅鍒嗛殧绗�. 榛樿涓�",".
       * @param dsep - {string} 灏忔暟鐐瑰垎闅旂. 榛樿涓�".".
       * @returns {string} 鏁板瓧鏍煎紡鍖栧悗鐨勫瓧绗︿覆.
       */
      format: function format(num, dec, tsep, dsep) {
        dec = typeof dec != "undefined" ? dec : 0;
        tsep = typeof tsep != "undefined" ? tsep : _SuperMap2.default.Number.thousandsSeparator;
        dsep = typeof dsep != "undefined" ? dsep : _SuperMap2.default.Number.decimalSeparator;

        if (dec != null) {
          num = parseFloat(num.toFixed(dec));
        }

        var parts = num.toString().split(".");
        if (parts.length === 1 && dec == null) {
          // integer where we do not want to touch the decimals
          dec = 0;
        }

        var integer = parts[0];
        if (tsep) {
          var thousands = /(-?[0-9]+)([0-9]{3})/;
          while (thousands.test(integer)) {
            integer = integer.replace(thousands, "$1" + tsep + "$2");
          }
        }

        var str;
        if (dec == 0) {
          str = integer;
        } else {
          var rem = parts.length > 1 ? parts[1] : "0";
          if (dec != null) {
            rem = rem + new Array(dec - rem.length + 1).join("0");
          }
          str = integer + dsep + rem;
        }
        return str;
      }
    };

    if (!Number.prototype.limitSigDigs) {
      /**
       * APIMethod: Number.limitSigDigs
       * 闄愬埗娴偣鏁扮殑鏈夋晥鏁板瓧浣嶆暟.
       * @param sig - {integer}
       * @returns {integer} 灏嗘暟瀛楀洓鑸嶄簲鍏ュ埌鎸囧畾鏁伴噺鐨勬湁鏁堜綅鏁�.
       *           濡傛灉浼犲叆鍊间负 null銆�0銆佹垨鑰呮槸璐熸暟, 杩斿洖鍊� 0
       */
      Number.prototype.limitSigDigs = function (sig) {
        return NumberExt.limitSigDigs(this, sig);
      };
    }

    /**
     * @name Function
     * @memberOf SuperMap
     * @namespace
     * @description 鍑芥暟鎿嶄綔鐨勪竴绯诲垪甯哥敤鎵╁睍鍑芥暟.
     */
    var FunctionExt = exports.FunctionExt = _SuperMap2.default.Function = {
      /**
       * @description 缁戝畾鍑芥暟鍒板璞�.鏂逛究鍒涘缓this鐨勪綔鐢ㄥ煙.
       * @param func - {function} 杈撳叆鍑芥暟.
       * @param object - {Object} 瀵硅薄缁戝畾鍒拌緭鍏ュ嚱鏁�(浣滀负杈撳叆鍑芥暟鐨則his瀵硅薄).
       * @returns {function} object鍙傛暟浣滀负func鍑芥暟鐨則his瀵硅薄.
       */
      bind: function bind(func, object) {
        // create a reference to all arguments past the second one
        var args = Array.prototype.slice.apply(arguments, [2]);
        return function () {
          // Push on any additional arguments from the actual function call.
          // These will come after those sent to the bind call.
          var newArgs = args.concat(Array.prototype.slice.apply(arguments, [0]));
          return func.apply(object, newArgs);
        };
      },

      /**
       * @description 缁戝畾鍑芥暟鍒板璞�,鍦ㄨ皟鐢ㄨ鍑芥暟鏃堕厤缃苟浣跨敤浜嬩欢瀵硅薄浣滀负绗竴涓弬鏁�.
       * @param func - {function} 鐢ㄤ簬鐩戝惉浜嬩欢鐨勫嚱鏁�.
       * @param object - {Object} this 瀵硅薄鐨勫紩鐢�.
       * @returns {function}
       */
      bindAsEventListener: function bindAsEventListener(func, object) {
        return function (event) {
          return func.call(object, event || window.event);
        };
      },

      /**
       * @description 璇ュ嚱鏁颁粎浠呰繑鍥瀎alse.璇ュ嚱鏁颁富瑕佹槸閬垮厤鍦↖E8浠ヤ笅娴忚涓璂OM浜嬩欢鍙ユ焺鐨勫尶鍚嶅嚱鏁伴棶棰�.
       * @example
       * document.onclick = SuperMap.Function.False;
       * @returns {Boolean}
       */
      False: function False() {
        return false;
      },

      /**
       * @description 璇ュ嚱鏁颁粎浠呰繑鍥瀟rue.璇ュ嚱鏁颁富瑕佹槸閬垮厤鍦↖E8浠ヤ笅娴忚涓璂OM浜嬩欢鍙ユ焺鐨勫尶鍚嶅嚱鏁伴棶棰�.
       * @example
       * document.onclick = SuperMap.Function.True;
       * @returns {Boolean}
       */
      True: function True() {
        return true;
      },

      /**
       * @description 鍙噸鐢ㄥ嚱鏁�,浠呬粎杩斿洖"undefined".
       * @returns {undefined}
       */
      Void: function Void() {}

    };

    /**
     * @name Array
     * @memberOf SuperMap
     * @namespace
     * @description 鏁扮粍鎿嶄綔鐨勪竴绯诲垪甯哥敤鎵╁睍鍑芥暟.
     */
    var ArrayExt = exports.ArrayExt = _SuperMap2.default.Array = {

      /**
       * @description 杩囨护鏁扮粍.鎻愪緵浜咵CMA-262鏍囧噯涓瑼rray.prototype.filter鍑芥暟鐨勬墿灞�.
       * @see {@link http://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/filter}
       * @param array - {Array} 瑕佽繃婊ょ殑鏁扮粍..
       * @param callback - {function} 鏁扮粍涓殑姣忎竴涓厓绱犺皟鐢ㄨ鍑芥暟.<br>
       *     濡傛灉鍑芥暟鐨勮繑鍥炲€间负true,璇ュ厓绱犲皢鍖呭惈鍦ㄨ繑鍥炵殑鏁扮粍涓�.璇ュ嚱鏁版湁涓変釜鍙傛暟: 鏁扮粍涓殑鍏冪礌,鍏冪礌鐨勭储寮�,鏁扮粍鑷韩.<br>
       *     濡傛灉璁剧疆浜嗗彲閫夊弬鏁癱aller,鍦ㄨ皟鐢╟allback鏃�,浣跨敤鍙€夊弬鏁癱aller璁剧疆涓篶allback鐨勫弬鏁�.<br>
       * @param caller - {Object} 鍦ㄨ皟鐢╟allback鏃�,浣跨敤鍙€夊弬鏁癱aller璁剧疆涓篶allback鐨勫弬鏁�.
       * @returns {Array} callback鍑芥暟杩斿洖true鏃剁殑鍏冪礌灏嗕綔涓鸿繑鍥炴暟缁勪腑鐨勫厓绱�.
       */
      filter: function filter(array, callback, caller) {
        var selected = [];
        if (Array.prototype.filter) {
          selected = array.filter(callback, caller);
        } else {
          var len = array.length;
          if (typeof callback != "function") {
            throw new TypeError();
          }
          for (var i = 0; i < len; i++) {
            if (i in array) {
              var val = array[i];
              if (callback.call(caller, val, i, array)) {
                selected.push(val);
              }
            }
          }
        }
        return selected;
      }

    };

    /***/ }),
  /* 11 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Size = __webpack_require__(32);

    var _Size2 = _interopRequireDefault(_Size);

    var _Pixel = __webpack_require__(31);

    var _Pixel2 = _interopRequireDefault(_Pixel);

    var _LonLat = __webpack_require__(30);

    var _LonLat2 = _interopRequireDefault(_LonLat);

    var _Point = __webpack_require__(2);

    var _Point2 = _interopRequireDefault(_Point);

    var _LinearRing = __webpack_require__(6);

    var _LinearRing2 = _interopRequireDefault(_LinearRing);

    var _Polygon = __webpack_require__(9);

    var _Polygon2 = _interopRequireDefault(_Polygon);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.Bounds
     * @classdesc 琛ㄧず杈圭晫绫诲疄渚嬨€備娇鐢╞ounds涔嬪墠闇€瑕佽缃甽eft,bottom, right, top鍥涗釜灞炴€э紝杩欎簺灞炴€х殑鍒濆鍊间负null銆�
     * @param  left - {number} 宸﹁竟鐣岋紝娉ㄦ剰鑰冭檻瀹藉害锛岀悊璁轰笂灏忎簬right鍊笺€�
     * @param  bottom - {number} 涓嬭竟鐣屻€傝€冭檻楂樺害锛岀悊璁轰笂灏忎簬top鍊笺€�
     * @param  right - {number} 鍙宠竟鐣屻€�
     * @param  top - {number} 涓婅竟鐣屻€�
     * @param  array - {Array<number>} [left, bottom, right, top]  濡傛灉鍚屾椂浼犲涓弬鏁帮紝鍒欎娇鐢ㄥ乏涓嬪彸涓婄粍鎴愮殑鏁扮粍銆�
     * @example
     * var bounds = new SuperMap.Bounds();
     * bounds.extend(new SuperMap.LonLat(4,5));
     * bounds.extend(new SuperMap.LonLat(5,6));
     * bounds.toBBOX(); // returns 4,5,5,6
     */
    var Bounds = function () {

      /**
       * @member SuperMap.Bounds.prototype.top - {number}
       * @description 鏈€澶х殑鍨傜洿鍧愭爣绯汇€�
       */


      /**
       * @member SuperMap.Bounds.prototype.bottom - {number}
       * @description 鏈€灏忕殑鍨傜洿鍧愭爣绯汇€�
       */
      function Bounds(left, bottom, right, top) {
        _classCallCheck(this, Bounds);

        this.left = null;
        this.bottom = null;
        this.right = null;
        this.top = null;
        this.centerLonLat = null;
        this.CLASS_NAME = "SuperMap.Bounds";

        if (_Util.Util.isArray(left)) {
          top = left[3];
          right = left[2];
          bottom = left[1];
          left = left[0];
        }
        this.left = left != null ? _Util.Util.toFloat(left) : this.left;
        this.bottom = bottom != null ? _Util.Util.toFloat(bottom) : this.bottom;
        this.right = right != null ? _Util.Util.toFloat(right) : this.right;
        this.top = top != null ? _Util.Util.toFloat(top) : this.top;
      }

      /**
       * @function SuperMap.Bounds.prototype.clone
       * @description 澶嶅埗褰撳墠 bounds 瀵硅薄銆�
       * @example
       * var bounds1 = new SuperMap.Bounds(-180,-90,180,90);
       * var bounds2 = bounds1.clone();
       * @returns {SuperMap.Bounds} 杩斿洖涓€涓厠闅嗙殑bounds銆�
       */


      /**
       * @member SuperMap.Bounds.prototype.centerLonLat - {SuperMap.LonLat}
       * @description bounds鐨勫湴鍥剧┖闂寸殑涓績鐐广€傜敤 getCenterLonLat() 鑾峰緱銆�
       */


      /**
       * @member SuperMap.Bounds.prototype.right - {number}
       * @description 鏈€澶х殑姘村钩鍧愭爣绯汇€�
       */


      /**
       * @member SuperMap.Bounds.prototype.left - {number}
       * @description 鏈€灏忕殑姘村钩鍧愭爣绯汇€�
       */


      _createClass(Bounds, [{
        key: 'clone',
        value: function clone() {
          return new Bounds(this.left, this.bottom, this.right, this.top);
        }

        /**
         * @function SuperMap.Bounds.prototype.equals
         * @description 鍒ゆ柇涓や釜 bounds 瀵硅薄鏄惁鐩哥瓑銆�
         * @example
         * var bounds1 = new SuperMap.Bounds(-180,-90,180,90);
         * var bounds2 = new SuperMap.Bounds(-180,-90,180,90);
         * var isEquals = bounds1.equals(bounds2);
         * @param bounds - {SuperMap.Bounds} 闇€瑕佽繘琛岃杈冪殑 bounds銆�
         * @returns {boolean} 濡傛灉 bounds 瀵硅薄鐨勮竟鍜屼紶鍏ョ殑 bounds 涓€鑷村垯杩斿洖true,涓嶄竴鑷存垨浼犲叆鐨� bounds 鍙傛暟涓篘ULL鍒欒繑鍥瀎alse銆�
         */

      }, {
        key: 'equals',
        value: function equals(bounds) {
          var equals = false;
          if (bounds != null) {
            equals = this.left === bounds.left && this.right === bounds.right && this.top === bounds.top && this.bottom === bounds.bottom;
          }
          return equals;
        }

        /**
         * @function SuperMap.Bounds.prototype.toString
         * @description 杩斿洖姝ゅ璞＄殑瀛楃涓插舰寮�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,180,90);
         * var str = bounds.toString();
         * @returns {string} 杈圭晫瀵硅薄鐨勫瓧绗︿覆琛ㄧず褰㈠紡锛坙eft,bottom,right,top锛夛紝渚嬪: "-180,-90,180,90"
         */

      }, {
        key: 'toString',
        value: function toString() {
          return [this.left, this.bottom, this.right, this.top].join(",");
        }

        /**
         * @function SuperMap.Bounds.prototype.toArray
         * @description 杈圭晫瀵硅薄鐨勬暟缁勮〃绀哄舰寮� 銆�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * //array1 = [-180,-90,100,80];
         * var array1 = bounds.toArray();
         * //array1 = [-90,-180,80,100];
         * var array2 = bounds.toArray(true);
         * @param reverseAxisOrder - {boolean} 鏄惁鍙嶈浆杞撮『搴忥紝
         * 濡傛灉璁句负true锛屽垯鍊掕浆椤哄簭锛坆ottom,left,top,right锛�,鍚﹀垯鎸夋甯歌酱椤哄簭锛坙eft,bottom,right,top锛夈€�
         * @returns {Array} left, bottom, right, top鏁扮粍銆�
         */

      }, {
        key: 'toArray',
        value: function toArray(reverseAxisOrder) {
          if (reverseAxisOrder === true) {
            return [this.bottom, this.left, this.top, this.right];
          } else {
            return [this.left, this.bottom, this.right, this.top];
          }
        }

        /**
         * @function SuperMap.Bounds.prototype.toBBOX
         * @description 鍙栧皬鏁扮偣鍚巇ecimal浣嶆暟瀛楄繘琛屽洓鑸嶄簲鍏ュ啀杞崲涓築BOX瀛楃涓层€�
         * @example
         * var bounds = new SuperMap.Bounds(-1.1234567,-1.7654321,1.4444444,1.5555555);
         * //str1 = "-1.123457,-1.765432,1.444444,1.555556";
         * var str1 = bounds.toBBOX();
         * //str2 = "-1.1,-1.8,1.4,1.6";
         * var str2 = bounds.toBBOX(1);
         * //str2 = "-1.8,-1.1,1.6,1.4";
         * var str2 = bounds.toBBOX(1,true);
         * @param decimal - {integer} 杈圭晫鏂逛綅鍧愭爣鐨勬湁鏁堟暟瀛椾釜鏁帮紝榛樿涓�6銆�
         * @param  reverseAxisOrder - {boolean} 鏄惁鏄弽杞酱椤哄簭銆�
         * 濡傛灉璁句负true锛屽垯鍊掕浆椤哄簭锛坆ottom,left,top,right锛�,鍚﹀垯鎸夋甯歌酱椤哄簭锛坙eft,bottom,right,top锛夈€�
         * @returns {string} 杈圭晫瀵硅薄鐨勫瓧绗︿覆琛ㄧず褰㈠紡锛屽锛�"5,42,10,45"銆�
         */

      }, {
        key: 'toBBOX',
        value: function toBBOX(decimal, reverseAxisOrder) {
          if (decimal == null) {
            decimal = 6;
          }
          var mult = Math.pow(10, decimal);
          var xmin = Math.round(this.left * mult) / mult;
          var ymin = Math.round(this.bottom * mult) / mult;
          var xmax = Math.round(this.right * mult) / mult;
          var ymax = Math.round(this.top * mult) / mult;
          if (reverseAxisOrder === true) {
            return ymin + "," + xmin + "," + ymax + "," + xmax;
          } else {
            return xmin + "," + ymin + "," + xmax + "," + ymax;
          }
        }

        /**
         * @function SuperMap.Bounds.prototype.toGeometry
         * @description 鍩轰簬褰撳墠杈圭晫鑼冨洿鍒涘缓涓€涓柊鐨勫杈瑰舰瀵硅薄銆�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * //SuperMap.Geometry.Polygon瀵硅薄
         * var geo = bounds.toGeometry();
         * @returns {SuperMap.Geometry.Polygon} 鍩轰簬褰撳墠bounds鍧愭爣鍒涘缓鐨勬柊鐨勫杈瑰舰銆�
         */

      }, {
        key: 'toGeometry',
        value: function toGeometry() {
          return new _Polygon2.default([new _LinearRing2.default([new _Point2.default(this.left, this.bottom), new _Point2.default(this.right, this.bottom), new _Point2.default(this.right, this.top), new _Point2.default(this.left, this.top)])]);
        }

        /**
         * @function SuperMap.Bounds.prototype.getWidth
         * @description 鑾峰彇bounds鐨勫搴︺€�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * //width = 280;
         * var width = bounds.getWidth();
         * @returns {float} 鑾峰彇褰撳墠bounds鐨勫搴︼紙right鍑忓幓left锛夈€�
         */

      }, {
        key: 'getWidth',
        value: function getWidth() {
          return this.right - this.left;
        }

        /**
         * @function SuperMap.Bounds.prototype.getHeight
         * @description 鑾峰彇bounds鐨勯珮搴︺€�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * //height = 170;
         * var height = bounds.getHeight();
         * @returns {float} 杩斿洖杈圭晫楂樺害锛坱op鍑忓幓bottom锛夈€�
         */

      }, {
        key: 'getHeight',
        value: function getHeight() {
          return this.top - this.bottom;
        }

        /**
         * @function SuperMap.Bounds.prototype.getSize
         * @description 鑾峰彇杈规澶у皬銆�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * var size = bounds.getSize();
         * @returns {SuperMap.Size} 杩斿洖杈规澶у皬銆�
         */

      }, {
        key: 'getSize',
        value: function getSize() {
          return new _Size2.default(this.getWidth(), this.getHeight());
        }

        /**
         * @function SuperMap.Bounds.prototype.getCenterPixel
         * @description 鑾峰彇鍍忕礌鏍煎紡鐨勮寖鍥翠腑蹇冪偣銆�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * var pixel = bounds.getCenterPixel();
         * @returns {SuperMap.Pixel} 杩斿洖鍍忕礌鏍煎紡鐨勫綋鍓嶈寖鍥寸殑涓績鐐广€�
         */

      }, {
        key: 'getCenterPixel',
        value: function getCenterPixel() {
          return new _Pixel2.default((this.left + this.right) / 2, (this.bottom + this.top) / 2);
        }

        /**
         * @function SuperMap.Bounds.prototype.getCenterLonLat
         * @description 鑾峰彇鍦扮悊鏍煎紡鐨勮寖鍥翠腑蹇冪偣銆�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * var lonlat = bounds.getCenterLonLat();
         * @returns {SuperMap.LonLat} 杩斿洖褰撳墠鍦扮悊鑼冨洿鐨勪腑蹇冪偣銆�
         */

      }, {
        key: 'getCenterLonLat',
        value: function getCenterLonLat() {
          if (!this.centerLonLat) {
            this.centerLonLat = new _LonLat2.default((this.left + this.right) / 2, (this.bottom + this.top) / 2);
          }
          return this.centerLonLat;
        }

        /**
         * @function SuperMap.Bounds.prototype.scale
         * @description 鎸夌収姣斾緥鎵╁ぇ/缂╁皬鍑轰竴涓柊鐨刡ounds銆�
         * @example
         * var bounds = new SuperMap.Bounds(-50,-50,40,40);
         * var bounds2 = bounds.scale(2);
         * @param ratio - {float} 闇€瑕佹墿澶х殑姣斾緥锛岄粯璁や负1銆�
         * @param origin - {SuperMap.Pixel|SuperMap.LonLat} 鎵╁ぇ鏃剁殑鍩哄噯鐐癸紝榛樿涓哄綋鍓峛ounds鐨勪腑蹇冪偣銆�
         * @returns {SuperMap.Bounds} 杩斿洖閫氳繃ratio銆乷rigin璁＄畻寰楀埌鐨勬柊鐨勮竟鐣岃寖鍥淬€�
         */

      }, {
        key: 'scale',
        value: function scale(ratio, origin) {
          ratio = ratio ? ratio : 1;
          if (origin == null) {
            origin = this.getCenterLonLat();
          }

          var origx, origy;

          // get origin coordinates
          if (origin.CLASS_NAME === "SuperMap.LonLat") {
            origx = origin.lon;
            origy = origin.lat;
          } else {
            origx = origin.x;
            origy = origin.y;
          }

          var left = (this.left - origx) * ratio + origx;
          var bottom = (this.bottom - origy) * ratio + origy;
          var right = (this.right - origx) * ratio + origx;
          var top = (this.top - origy) * ratio + origy;

          return new Bounds(left, bottom, right, top);
        }

        /**
         * @function SuperMap.Bounds.prototype.add
         * @description 鍦ㄥ綋鍓嶇殑dounds涓婃寜鐓т紶鍏ョ殑鍧愭爣鐐硅繘琛屽钩绉伙紝杩斿洖鏂扮殑鑼冨洿銆�
         * @example
         * var bounds1 = new SuperMap.Bounds(-50,-50,40,40);
         * //bounds2 鏄柊鐨� bounds
         * var bounds2 = bounds.add(20,10);
         * @param x - {float} 浼犲叆鍧愭爣鐐圭殑x鍧愭爣銆�
         * @param y - {float} 浼犲叆鍧愭爣鐐圭殑y鍧愭爣銆�
         * @returns {SuperMap.Bounds} 杩斿洖涓€涓柊鐨刡ounds锛屾bounds鐨勫潗鏍囨槸鐢变紶鍏ョ殑x锛寉鍙傛暟涓庡綋鍓峛ounds鍧愭爣璁＄畻鎵€寰椼€�
         */

      }, {
        key: 'add',
        value: function add(x, y) {
          if (x == null || y == null) {
            throw new TypeError('Bounds.add cannot receive null values');
          }
          return new Bounds(this.left + x, this.bottom + y, this.right + x, this.top + y);
        }

        /**
         * @function SuperMap.Bounds.prototype.extend
         * @description 鍦ㄥ綋鍓峛ounds涓婃墿灞昩ounds锛屾敮鎸乸oint锛宭anlat鍜宐ounds銆傛墿灞曞悗鐨刡ounds鐨勮寖鍥存槸涓よ€呯殑缁撳悎銆�
         * @example
         * var bounds1 = new SuperMap.Bounds(-50,-50,40,40);
         * //bounds鏀瑰彉
         * bounds.extend(new SuperMap.LonLat(50,60));
         * @param object - {SuperMap.Geometry.Point|SuperMap.LonLat | SuperMap.Bounds} 鍙互鏄痯oint锛宭anlat鍜宐ounds銆�
         */

      }, {
        key: 'extend',
        value: function extend(object) {
          var bounds = null;
          if (object) {
            // clear cached center location
            switch (object.CLASS_NAME) {
              case "SuperMap.LonLat":
                bounds = new Bounds(object.lon, object.lat, object.lon, object.lat);
                break;
              case "SuperMap.Geometry.Point":
                bounds = new Bounds(object.x, object.y, object.x, object.y);
                break;

              case "SuperMap.Bounds":
                bounds = object;
                break;
            }

            if (bounds) {
              this.centerLonLat = null;
              if (this.left == null || bounds.left < this.left) {
                this.left = bounds.left;
              }
              if (this.bottom == null || bounds.bottom < this.bottom) {
                this.bottom = bounds.bottom;
              }
              if (this.right == null || bounds.right > this.right) {
                this.right = bounds.right;
              }
              if (this.top == null || bounds.top > this.top) {
                this.top = bounds.top;
              }
            }
          }
        }

        /**
         * @function SuperMap.Bounds.prototype.containsLonLat
         * @description 鍒ゆ柇浼犲叆鐨勫潗鏍囨槸鍚﹀湪鑼冨洿鍐呫€�
         * @example
         * var bounds1 = new SuperMap.Bounds(-50,-50,40,40);
         * //isContains1 = true
         * //杩欓噷鐨勭浜屼釜鍙傛暟鍙互鐩存帴涓� boolean 绫诲瀷锛屼篃灏辨槸inclusive
         * var isContains1 = bounds.containsLonLat(new SuperMap.LonLat(40,40),true);
         *
         * //(40,40)鍦ㄨ寖鍥村唴锛屽悓鏍�(40+360,40)涔熷湪鑼冨洿鍐�
         * var bounds2 = new SuperMap.Bounds(-50,-50,40,40);
         * //isContains2 = true;
         * var isContains2 = bounds2.containsLonLat(
         *      new SuperMap.LonLat(400,40),
         *      {
         *           inclusive:true,
         *           //鍏ㄧ悆鐨勮寖鍥�
         *           worldBounds: new SuperMap.Bounds(-180,-90,180,90)
         *      }
         *      );
         * @param ll - {SuperMap.LonLat|Object}  <SuperMap.LonLat> 瀵硅薄鎴栬€呮槸涓€涓�
         *     鍖呭惈 'lon' 涓� 'lat' 灞炴€х殑瀵硅薄銆�
         * @param options - {Object} 鍙€夊弬鏁�<br>
         *         inclusive - {boolean} 鏄惁鍖呭惈杈圭晫锛岄粯璁や负 true 銆�<br>
         *         worldBounds - {@link SuperMap.Bounds} 濡傛灉鎻愪緵 worldBounds 鍙傛暟, 濡傛灉 ll 鍙傛暟鎻愪緵鐨勫潗鏍囪秴鍑轰簡涓栫晫杈圭晫锛坵orldBounds锛�,
         *         浣嗘槸閫氳繃鏃ョ晫绾跨殑杞寲鍙互琚寘鍚�, 瀹冨皢琚涓烘槸鍖呭惈鍦ㄨ鑼冨洿鍐呯殑銆�
         * @returns {boolean} 浼犲叆鍧愭爣鏄惁鍖呭惈鍦ㄨ寖鍥村唴.
         */

      }, {
        key: 'containsLonLat',
        value: function containsLonLat(ll, options) {
          if (typeof options === "boolean") {
            options = { inclusive: options };
          }
          options = options || {};
          var contains = this.contains(ll.lon, ll.lat, options.inclusive),
              worldBounds = options.worldBounds;
          //鏃ョ晫绾夸互澶栫殑涔熸湁鍙兘绠楀寘鍚紝
          if (worldBounds && !contains) {
            var worldWidth = worldBounds.getWidth();
            var worldCenterX = (worldBounds.left + worldBounds.right) / 2;
            //杩欎竴姝ュ緢鍏抽敭
            var worldsAway = Math.round((ll.lon - worldCenterX) / worldWidth);
            contains = this.containsLonLat({
              lon: ll.lon - worldsAway * worldWidth,
              lat: ll.lat
            }, { inclusive: options.inclusive });
          }
          return contains;
        }

        /**
         * @function SuperMap.Bounds.prototype.containsPixel
         * @description 鍒ゆ柇浼犲叆鐨勫儚绱犳槸鍚﹀湪鑼冨洿鍐呫€傜洿鎺ュ尮閰嶅ぇ灏忥紝涓嶆秹鍙婂儚绱犲拰鍦扮悊杞崲銆�
         * @example
         * var bounds = new SuperMap.Bounds(-50,-50,40,40);
         * //isContains = true
         * var isContains = bounds.containsPixel(new SuperMap.Pixel(40,40),true);
         * @param px - {SuperMap.Pixel} 鎻愪緵鐨勫儚绱犲弬鏁般€�
         * @param inclusive - {boolean} 鏄惁鍖呭惈杈圭晫锛岄粯璁や负true銆�
         * @returns {boolean} 浼犲叆鐨刾ixel鍦ㄥ綋鍓嶈竟鐣岃寖鍥翠箣鍐呫€�
         */

      }, {
        key: 'containsPixel',
        value: function containsPixel(px, inclusive) {
          return this.contains(px.x, px.y, inclusive);
        }

        /**
         * @function SuperMap.Bounds.prototype.contains
         * @description 鍒ゆ柇浼犲叆鐨剎锛寉鍧愭爣鍊兼槸鍚﹀湪鑼冨洿鍐呫€�
         * @example
         * var bounds = new SuperMap.Bounds(-50,-50,40,40);
         * //isContains = true
         * var isContains = bounds.contains(40,40,true);
         * @param x - {float} 浼犲叆鐨剎鍧愭爣鍊笺€�
         * @param y - {float} 浼犲叆鐨剏鍧愭爣鍊笺€�
         * @param inclusive - {boolean} 鏄惁鍖呭惈杈圭晫锛岄粯璁や负true銆�
         * @returns {boolean} 浼犲叆鐨剎,y鍧愭爣鍦ㄥ綋鍓嶈寖鍥村唴銆�
         */

      }, {
        key: 'contains',
        value: function contains(x, y, inclusive) {
          //set default
          if (inclusive == null) {
            inclusive = true;
          }

          if (x == null || y == null) {
            return false;
          }

          x = _Util.Util.toFloat(x);
          y = _Util.Util.toFloat(y);

          var contains = false;
          if (inclusive) {
            contains = x >= this.left && x <= this.right && y >= this.bottom && y <= this.top;
          } else {
            contains = x > this.left && x < this.right && y > this.bottom && y < this.top;
          }
          return contains;
        }

        /**
         * @function SuperMap.Bounds.prototype.intersectsBounds
         * @description 鍒ゆ柇鐩爣杈圭晫鑼冨洿鏄惁涓庡綋鍓嶈竟鐣岃寖鍥寸浉浜ゃ€傚鏋滀袱涓竟鐣岃寖鍥翠腑鐨勪换鎰�
         *                杈圭紭鐩镐氦鎴栬€呬竴涓竟鐣屽寘鍚簡鍙﹀涓€涓氨璁や负杩欎袱涓竟鐣岀浉浜ゃ€�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * var isIntersects = bounds.intersectsBounds(
         *      new SuperMap.Bounds(-170,-90,120,80)
         *  );
         * @param bounds - {SuperMap.Bounds} 鐩爣杈圭晫銆�
         * @param options - {Object} 鍙€夊弬鏁般€�<br>
         *         inclusive - {boolean} 杈圭紭閲嶅悎涔熺湅鎴愮浉浜わ紝榛樿涓簍rue銆傚鏋滄槸false锛�
         *                               涓や釜杈圭晫鑼冨洿娌℃湁閲嶅彔閮ㄥ垎浠呬粎鏄湪杈圭紭鐩告帴锛堥噸鍚堬級锛�
         *                               杩欑鎯呭喌琚涓烘病鏈夌浉浜ゃ€�<br>
         *         worldBounds - {@link SuperMap.Bounds} 鎻愪緵浜� worldBounds 鍙傛暟, 濡傛灉浠栦滑鐩镐氦鏃�
         *                               鏄湪鍏ㄧ悆鑼冨洿鍐�, 涓や釜杈圭晫灏嗚瑙嗕负鐩镐氦銆傝繖浠呴€傜敤浜庝氦鍙�
         *                               鎴栧畬鍏ㄤ笉鍦ㄤ笘鐣岃寖鍥寸殑杈圭晫銆�
         * @returns {boolean} 浼犲叆鐨刡ounds瀵硅薄涓庡綋鍓峛ounds鐩镐氦銆�
         */

      }, {
        key: 'intersectsBounds',
        value: function intersectsBounds(bounds, options) {
          if (typeof options === "boolean") {
            options = { inclusive: options };
          }
          options = options || {};
          if (options.worldBounds) {
            var self = this.wrapDateLine(options.worldBounds);
            bounds = bounds.wrapDateLine(options.worldBounds);
          } else {
            self = this;
          }
          if (options.inclusive == null) {
            options.inclusive = true;
          }
          var intersects = false;
          var mightTouch = self.left === bounds.right || self.right === bounds.left || self.top === bounds.bottom || self.bottom === bounds.top;

          // if the two bounds only touch at an edge, and inclusive is false,
          // then the bounds don't *really* intersect.
          if (options.inclusive || !mightTouch) {
            // otherwise, if one of the boundaries even partially contains another,
            // inclusive of the edges, then they do intersect.
            var inBottom = bounds.bottom >= self.bottom && bounds.bottom <= self.top || self.bottom >= bounds.bottom && self.bottom <= bounds.top;
            var inTop = bounds.top >= self.bottom && bounds.top <= self.top || self.top > bounds.bottom && self.top < bounds.top;
            var inLeft = bounds.left >= self.left && bounds.left <= self.right || self.left >= bounds.left && self.left <= bounds.right;
            var inRight = bounds.right >= self.left && bounds.right <= self.right || self.right >= bounds.left && self.right <= bounds.right;
            intersects = (inBottom || inTop) && (inLeft || inRight);
          }
          // document me
          if (options.worldBounds && !intersects) {
            var world = options.worldBounds;
            var width = world.getWidth();
            var selfCrosses = !world.containsBounds(self);
            var boundsCrosses = !world.containsBounds(bounds);
            if (selfCrosses && !boundsCrosses) {
              bounds = bounds.add(-width, 0);
              intersects = self.intersectsBounds(bounds, { inclusive: options.inclusive });
            } else if (boundsCrosses && !selfCrosses) {
              self = self.add(-width, 0);
              intersects = bounds.intersectsBounds(self, { inclusive: options.inclusive });
            }
          }
          return intersects;
        }

        /**
         * @function SuperMap.Bounds.prototype.containsBounds
         * @description 鍒ゆ柇鐩爣杈圭晫鏄惁琚綋鍓嶈竟鐣屽寘鍚湪鍐呫€�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * var isContains = bounds.containsBounds(
         *      new SuperMap.Bounds(-170,-90,100,80),true,true
         *  );
         * @param bounds - {SuperMap.Bounds} 鐩爣杈圭晫銆�
         * @param partial - {boolean} 鐩爣杈圭晫鐨勪换鎰忛儴鍒嗛兘鍖呭惈鍦ㄥ綋鍓嶈竟鐣屼腑鍒欒璁や负鏄寘鍚叧绯汇€傞粯璁や负false锛�
         *                             濡傛灉璁句负false锛屾暣涓洰鏍囪竟鐣屽叏閮ㄨ鍖呭惈鍦ㄥ綋鍓嶈竟鐣岃寖鍥村唴銆�
         * @param inclusive - {boolean} 杈圭紭鍏变韩琚涓哄寘鍚€傞粯璁や负true銆�
         * @returns {boolean} 浼犲叆鐨勮竟鐣岃褰撳墠杈圭晫鍖呭惈銆�
         */

      }, {
        key: 'containsBounds',
        value: function containsBounds(bounds, partial, inclusive) {
          if (partial == null) {
            partial = false;
          }
          if (inclusive == null) {
            inclusive = true;
          }
          var bottomLeft = this.contains(bounds.left, bounds.bottom, inclusive);
          var bottomRight = this.contains(bounds.right, bounds.bottom, inclusive);
          var topLeft = this.contains(bounds.left, bounds.top, inclusive);
          var topRight = this.contains(bounds.right, bounds.top, inclusive);

          return partial ? bottomLeft || bottomRight || topLeft || topRight : bottomLeft && bottomRight && topLeft && topRight;
        }

        /**
         * @function SuperMap.Bounds.prototype.determineQuadrant
         * @description 鍒ゆ柇浼犲叆鍧愭爣鍦╞ounds鑼冨洿鍐呯殑璞￠檺銆備互bounds涓績鐐逛负鍧愭爣鍘熺偣銆�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * //str = "tr";
         * var str = bounds.determineQuadrant(
         *      new SuperMap.LonLat(20,20)
         *  );
         * @param lonlat - {SuperMap.LonLat} 浼犲叆鐨勫潗鏍囧璞°€�
         * @returns {string} 浼犲叆鍧愭爣鎵€鍦ㄧ殑璞￠檺("br" "tr" "tl" "bl" 鍒嗗埆瀵瑰簲"鍙充笅"锛�"鍙充笂"锛�"宸︿笂" "宸︿笅")銆�
         */

      }, {
        key: 'determineQuadrant',
        value: function determineQuadrant(lonlat) {

          var quadrant = "";
          var center = this.getCenterLonLat();

          quadrant += lonlat.lat < center.lat ? "b" : "t";
          quadrant += lonlat.lon < center.lon ? "l" : "r";

          return quadrant;
        }

        /**
         * @function SuperMap.Bounds.prototype.wrapDateLine
         * @description 灏嗗綋鍓峛ounds绉诲姩鍒版渶澶ц竟鐣岃寖鍥村唴閮紙鎵€璋撶殑鍐呴儴鏄浉浜ゆ垨鑰呭唴閮級銆�
         * @example
         * var bounds = new SuperMap.Bounds(380,-40,400,-20);
         * var maxExtent = new SuperMap.Bounds(-180,-90,100,80);
         * //鏂扮殑bounds
         * var newBounds = bounds.wrapDateLine(maxExtent);
         * @param maxExtent - {SuperMap.Bounds} 鏈€澶х殑杈圭晫鑼冨洿锛堜竴鑸槸鍏ㄧ悆鑼冨洿锛夈€�
         * @param options - {Object} 鍙€夐€夐」鍙傛暟銆�<br>
         *         leftTolerance - {float} left鍏佽鐨勮宸€傞粯璁や负0銆�<br>
         *         rightTolerance - {float} right鍏佽鐨勮宸€傞粯璁や负0銆�
         * @returns {SuperMap.Bounds} 鍏嬮殕褰撳墠杈圭晫銆傚鏋滃綋鍓嶈竟鐣屽畬鍏ㄥ湪鏈€澶ц寖鍥翠箣澶栨鍑芥暟鍒欒繑鍥炰竴涓笉鍚屽€肩殑杈圭晫锛�
         *                             鑻ヨ惤鍦ㄦ渶澶ц竟鐣岀殑宸﹁竟锛屽垯缁欏綋鍓嶇殑bounds鍊煎姞涓婃渶澶ц寖鍥寸殑瀹藉害锛屽嵆鍚戝彸绉诲姩锛�
         *                             鑻ヨ惤鍦ㄥ彸杈癸紝鍒欏悜宸︾Щ鍔紝鍗崇粰褰撳墠鐨刡ounds鍊煎姞涓婅礋鐨勬渶澶ц寖鍥寸殑瀹藉害銆�
         */

      }, {
        key: 'wrapDateLine',
        value: function wrapDateLine(maxExtent, options) {
          options = options || {};

          var leftTolerance = options.leftTolerance || 0;
          var rightTolerance = options.rightTolerance || 0;

          var newBounds = this.clone();

          if (maxExtent) {
            var width = maxExtent.getWidth();
            //濡傛灉 newBounds 鍦� maxExtent 鐨勫乏杈癸紝閭ｄ箞涓€鐩村悜鍙崇Щ鍔紝鐩村埌鐩镐氦鎴栬€呭寘鍚负姝紝姣忔绉诲姩width
            //shift right?
            while (newBounds.left < maxExtent.left && newBounds.right - rightTolerance <= maxExtent.left) {
              newBounds = newBounds.add(width, 0);
            }
            //濡傛灉 newBounds 鍦� maxExtent 鐨勫彸杈癸紝閭ｄ箞涓€鐩村悜宸︾Щ鍔紝鐩村埌鐩镐氦鎴栬€呭寘鍚负姝紝姣忔绉诲姩width
            //shift left?
            while (newBounds.left + leftTolerance >= maxExtent.right && newBounds.right > maxExtent.right) {
              newBounds = newBounds.add(-width, 0);
            }
            //濡傛灉鍜屽彸杈圭浉浜わ紝宸﹁竟鍙堝湪鍐呴儴锛岄偅涔堝啀娆″悜宸﹁竟绉诲姩涓€娆�
            // crosses right only? force left
            var newLeft = newBounds.left + leftTolerance;
            if (newLeft < maxExtent.right && newLeft > maxExtent.left && newBounds.right - rightTolerance > maxExtent.right) {
              newBounds = newBounds.add(-width, 0);
            }
          }

          return newBounds;
        }

        /**
         * @function SuperMap.Bounds.prototype.toServerJSONObject
         * @description 杞崲鎴愬搴旂殑 JSON 鏍煎紡瀵硅薄銆�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * var obj = bounds.toServerJSONObject();
         * @returns {Object} 杩斿洖json 鏍煎紡鐨凮bject瀵硅薄銆�
         */

      }, {
        key: 'toServerJSONObject',
        value: function toServerJSONObject() {
          var jsonObject = {
            rightTop: { x: this.right, y: this.top },
            leftBottom: { x: this.left, y: this.bottom },
            left: this.left,
            right: this.right,
            top: this.top,
            bottom: this.bottom
          };
          return jsonObject;
        }

        /**
         *
         * @function SuperMap.Bounds.prototype.destroy
         * @description 閿€姣佹瀵硅薄銆�
         * 閿€姣佸悗姝ゅ璞＄殑鎵€鏈夊睘鎬т负null锛岃€屼笉鏄垵濮嬪€笺€�
         * @example
         * var bounds = new SuperMap.Bounds(-180,-90,100,80);
         * bounds.destroy();
         */

      }, {
        key: 'destroy',
        value: function destroy() {
          this.left = null;
          this.right = null;
          this.top = null;
          this.bottom = null;
          this.centerLonLat = null;
        }

        /**
         * @function SuperMap.Bounds.fromString
         * @description 閫氳繃瀛楃涓插弬鏁板垱寤烘柊鐨刡ounds鐨勬瀯閫犲嚱鏁般€�
         * @example
         * var bounds = SuperMap.Bounds.fromString("-180,-90,100,80");
         * @param str - {string} 杈圭晫瀛楃涓诧紝鐢ㄩ€楀彿闅斿紑 (e.g. <i>"5,42,10,45"</i>)
         * @param reverseAxisOrder - {boolean} 鏄惁鍙嶈浆杞撮『搴�.
         * 濡傛灉璁句负true锛屽垯鍊掕浆椤哄簭锛坆ottom,left,top,right锛�,鍚﹀垯鎸夋甯歌酱椤哄簭锛坙eft,bottom,right,top锛夈€�
         * @returns {SuperMap.Bounds} 杩斿洖缁欏畾鐨勫瓧绗︿覆鍒涘缓鐨勬柊鐨勮竟鐣屽璞�
         */

      }], [{
        key: 'fromString',
        value: function fromString(str, reverseAxisOrder) {
          var bounds = str.split(",");
          return Bounds.fromArray(bounds, reverseAxisOrder);
        }
      }, {
        key: 'fromArray',


        /**
         * @function SuperMap.Bounds.fromArray
         * @description 閫氳繃杈圭晫妗嗘暟缁勫垱寤築ounds銆�
         * @example
         * var bounds = SuperMap.Bounds.fromArray([-180,-90,100,80]);
         * @param bbox - {Array(float)} 杈圭晫鍊兼暟缁勩€� (e.g. <i>[5,42,10,45]</i>)
         * @param reverseAxisOrder - {boolean} 鏄惁鏄弽杞酱椤哄簭銆傚鏋滆涓簍rue锛屽垯鍊掕浆椤哄簭锛坆ottom,left,top,right锛�,鍚﹀垯鎸夋甯歌酱椤哄簭锛坙eft,bottom,right,top锛夈€�
         * @returns {SuperMap.Bounds} 杩斿洖鏍规嵁浼犲叆鐨勬暟缁勫垱寤虹殑鏂扮殑杈圭晫瀵硅薄銆�
         */
        value: function fromArray(bbox, reverseAxisOrder) {
          return reverseAxisOrder === true ? new Bounds(bbox[1], bbox[0], bbox[3], bbox[2]) : new Bounds(bbox[0], bbox[1], bbox[2], bbox[3]);
        }
      }, {
        key: 'fromSize',


        /**
         * @function SuperMap.Bounds.fromSize
         * @description 閫氳繃浼犲叆鐨勮竟鐣屽ぇ灏忔潵鍒涘缓鏂扮殑杈圭晫銆�
         * @example
         * var bounds = SuperMap.Bounds.fromSize(new SuperMap.Size(20,10));
         * @param size - {SuperMap.Size} 浼犲叆鐨勮竟鐣屽ぇ灏忋€�
         * @returns {SuperMap.Bounds} 杩斿洖鏍规嵁浼犲叆鐨勮竟鐣屽ぇ灏忕殑鍒涘缓鏂扮殑杈圭晫銆�
         */
        value: function fromSize(size) {
          return new Bounds(0, size.h, size.w, 0);
        }
      }, {
        key: 'oppositeQuadrant',


        /**
         * @function SuperMap.Bounds.oppositeQuadrant
         * @description 鍙嶈浆璞￠檺銆�"t"鍜�"b" 浜ゆ崲锛�"r"鍜�"l"浜ゆ崲, 濡傦細"tl"鍙樹负"br"銆�
         * @param quadrant - {string} 浠ｈ〃璞￠檺鐨勫瓧绗︿覆锛屽锛�"tl"銆�
         * @returns {string} 鍙嶈浆鍚庣殑璞￠檺銆�
         */
        value: function oppositeQuadrant(quadrant) {
          var opp = "";

          opp += quadrant.charAt(0) === 't' ? 'b' : 't';
          opp += quadrant.charAt(1) === 'l' ? 'r' : 'l';

          return opp;
        }
      }]);

      return Bounds;
    }();

    exports.default = Bounds;

    _SuperMap2.default.Bounds = Bounds;

    /***/ }),
  /* 12 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _WKT = __webpack_require__(37);

    var _WKT2 = _interopRequireDefault(_WKT);

    var _Vector = __webpack_require__(33);

    var _Vector2 = _interopRequireDefault(_Vector);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.Geometry
     * @classdesc 鍑犱綍瀵硅薄绫伙紝鎻忚堪鍦扮悊瀵硅薄鐨勫嚑浣曞浘褰€�
     */
    var Geometry = function () {

      /**
       * @member SuperMap.Geometry.prototype.bounds - {SuperMap.Bounds}
       * @description 鍑犱綍瀵硅薄鐨勮寖鍥淬€�
       */


      /**
       * @member SuperMap.Geometry.prototype.id - {string}
       * @description  姝ゅ嚑浣曞璞＄殑鍞竴鏍囩ず绗︺€�
       */
      function Geometry() {
        _classCallCheck(this, Geometry);

        this.id = null;
        this.parent = null;
        this.bounds = null;
        this.SRID = null;
        this.CLASS_NAME = "SuperMap.Geometry";

        this.id = _Util.Util.createUniqueID(this.CLASS_NAME + "_");
      }

      /**
       * @function SuperMap.Geometry.prototype.destroy
       * @description 瑙ｆ瀯Geometry绫伙紝閲婃斁璧勬簮銆�
       */


      /**
       * @member SuperMap.Geometry.prototype.SRID - {interger}
       * @description 鎶曞奖鍧愭爣鍙傛暟銆傞€氳繃璇ュ弬鏁帮紝鏈嶅姟鍣ㄥ垽鏂璆eometry瀵硅薄鐨勫潗鏍囧弬鑰冪郴鏄惁涓庢暟鎹泦鐩稿悓锛屽鏋滀笉鍚岋紝鍒欏湪鏁版嵁鍏ュ簱鍓嶈繘琛屾姇褰卞彉鎹€�
       * @example
       *   var geometry= new SuperMap.Geometry();
       *   geometry. SRID=4326;
       */


      /**
       * @member SuperMap.Geometry.prototype.parent - {SuperMap.Geometry}
       * @description 褰撳嚑浣曞璞℃坊鍔犲埌缁勪欢涓婄殑鏃跺€欒璁剧疆銆�
       */


      _createClass(Geometry, [{
        key: 'destroy',
        value: function destroy() {
          this.id = null;
          this.bounds = null;
          this.SRID = null;
        }

        /**
         * @function SuperMap.Geometry.prototype.clone
         * @description 鍒涘缓鍏嬮殕鐨勫嚑浣曞浘褰€傚厠闅嗙殑鍑犱綍鍥惧舰涓嶈缃潪鏍囧噯鐨勫睘鎬с€�
         * @returns {SuperMap.Geometry} 鍏嬮殕鐨勫嚑浣曞浘褰€�
         */

      }, {
        key: 'clone',
        value: function clone() {
          return new Geometry();
        }

        /**
         * @function SuperMap.Geometry.prototype.setBounds
         * @description 璁剧疆姝ゅ嚑浣曞璞＄殑bounds銆�
         * @param bounds - {SuperMap.Bounds}
         */

      }, {
        key: 'setBounds',
        value: function setBounds(bounds) {
          if (bounds) {
            this.bounds = bounds.clone();
          }
        }

        /**
         * @function SuperMap.Geometry.prototype.clearBounds
         * @description 娓呴櫎鍑犱綍瀵硅薄鐨刡ounds銆�
         * 濡傛灉璇ュ璞℃湁鐖剁被锛屼篃浼氭竻闄ょ埗绫诲嚑浣曞璞＄殑bounds銆�
         */

      }, {
        key: 'clearBounds',
        value: function clearBounds() {
          this.bounds = null;
          if (this.parent) {
            this.parent.clearBounds();
          }
        }

        /**
         * @function SuperMap.Geometry.prototype.extendBounds
         * @description 鎵╁睍鏂扮殑Bounds銆�
         * @param newBounds - {SuperMap.Bounds}
         */

      }, {
        key: 'extendBounds',
        value: function extendBounds(newBounds) {
          var bounds = this.getBounds();
          if (!bounds) {
            this.setBounds(newBounds);
          } else {
            this.bounds.extend(newBounds);
          }
        }

        /**
         * @function SuperMap.Geometry.prototype.getBounds
         * @description 鑾峰緱鍑犱綍鍥惧舰鐨勮竟鐣屻€傚鏋滄病鏈夎缃竟鐣岋紝鍙€氳繃璁＄畻鑾峰緱銆�
         * @returns {SuperMap.Bounds}杩斿洖鐨勫嚑浣曞璞＄殑杈圭晫銆�
         */

      }, {
        key: 'getBounds',
        value: function getBounds() {
          if (this.bounds == null) {
            this.calculateBounds();
          }
          return this.bounds;
        }

        /**
         * @function SuperMap.Geometry.prototype.calculateBounds
         * @description 閲嶆柊璁＄畻鍑犱綍鍥惧舰鐨勮竟鐣屻€傦紙闇€瑕佸湪瀛愮被涓疄鐜版鏂规硶锛�
         */

      }, {
        key: 'calculateBounds',
        value: function calculateBounds() {}
        //
        // This should be overridden by subclasses.
        //


        /**
         * @function SuperMap.Geometry.prototype.distanceTo
         * @description 璁＄畻涓や釜鍑犱釜鍥惧舰闂寸殑鏈€灏忚窛绂伙紙x-y骞抽潰鍧愭爣绯讳笅锛夈€傦紙闇€瑕佸湪瀛愮被涓疄鐜版鏂规硶锛�
         * @param geometry - {SuperMap.Geometry} 鐩爣鍑犱綍鍥惧舰.
         * @param options - {Object} 璺濈璁＄畻闇€瑕佽璁＄殑鍙€夊睘鎬с€傛湁鏁堢殑閫夐」鍙栧喅浜庣壒瀹氱殑鍑犱綍绫诲瀷銆�
         * @returns {number | Object} 涓や釜鍑犱釜鍥惧舰闂寸殑璺濈銆�
         */

      }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {}

        /**
         * @function SuperMap.Geometry.prototype.getVertices
         * @description 杩斿洖鍑犱綍鍥惧舰鐨勬墍鏈夐《鐐圭殑鍒楄〃銆傦紙闇€瑕佸湪瀛愮被涓疄鐜版鏂规硶锛�
         * @param nodes - {boolean} 濡傛灉鏄痶rue锛岀嚎鍒欏彧杩斿洖绾跨殑鏈鐐癸紝濡傛灉false锛屼粎浠呰繑鍥為《鐐癸紝濡傛灉娌℃湁璁剧疆锛屽垯杩斿洖椤剁偣銆�
         * @returns {Array} 鍑犱綍鍥惧舰鐨勯《鐐瑰垪琛ㄣ€�
         */

      }, {
        key: 'getVertices',
        value: function getVertices(nodes) {}

        /**
         * @function SuperMap.Geometry.prototype.atPoint
         * @description 纭畾鍧愭爣鏄惁鍦ㄥ嚑浣曞璞＄殑鑼冨洿鍐呫€�
         * @param lonlat -{SuperMap.LonLat}
         * @param toleranceLon - {float} 鍙€夊弬鏁帮紝缁忓害鐨勫亸绉汇€�
         * @param toleranceLat - {float}  鍙€夊弬鏁帮紝绾害鐨勫亸绉汇€�
         * @returns {boolean} 鍒ゆ柇浼犲叆鐨勫潗鏍囨槸鍚﹀湪鎸囧畾鐨勮寖鍥村唴 銆�
         *
         */

      }, {
        key: 'atPoint',
        value: function atPoint(lonlat, toleranceLon, toleranceLat) {
          var atPoint = false;
          var bounds = this.getBounds();
          if (bounds != null && lonlat != null) {

            var dX = toleranceLon != null ? toleranceLon : 0;
            var dY = toleranceLat != null ? toleranceLat : 0;

            var toleranceBounds = new _SuperMap2.default.Bounds(this.bounds.left - dX, this.bounds.bottom - dY, this.bounds.right + dX, this.bounds.top + dY);

            atPoint = toleranceBounds.containsLonLat(lonlat);
          }
          return atPoint;
        }

        /**
         * @function SuperMap.Geometry.prototype.getLength
         * @description 璁＄畻鍑犱綍瀵硅薄鐨勯暱搴� 锛屾鏂规硶闇€瑕佸湪瀛愮被涓畾涔� 銆�
         * @returns {float} 闆嗗悎闀垮害銆�
         */

      }, {
        key: 'getLength',
        value: function getLength() {
          //to be overridden by geometries that actually have a length
          //
          return 0.0;
        }

        /**
         * @function SuperMap.Geometry.prototype.getArea
         * @description 璁＄畻鍑犱綍瀵硅薄鐨勯潰绉� 锛屾鏂规硶闇€瑕佸湪瀛愮被涓畾涔�  銆�
         * @returns {float} 闆嗗悎琛ㄧず鐨勯潰绉€�
         */

      }, {
        key: 'getArea',
        value: function getArea() {
          //to be overridden by geometries that actually have an area
          //
          return 0.0;
        }

        /**
         * @function SuperMap.Geometry.prototype.getCentroid
         * @description 璁＄畻鍑犱綍鍥惧舰鐨勮川蹇冦€傦紙闇€瑕佸湪瀛愮被涓疄鐜版鏂规硶锛�
         * @returns {SuperMap.Geometry.Point} 閲囬泦鐨勮川蹇冦€�
         */

      }, {
        key: 'getCentroid',
        value: function getCentroid() {
          return null;
        }

        /**
         * @function SuperMap.Geometry.prototype.toString
         * @description 杩斿洖geometry瀵硅薄鐨勫瓧绗︿覆琛ㄨ堪锛岄渶瑕佸紩鍏@link SuperMap.Format.WKT}銆傛鏂规硶鍙兘鍦ㄥ瓙绫诲疄鐜帮紝鍦ㄧ埗绫讳娇鐢ㄤ細鎶ラ敊銆�
         * @returns {string} geometry瀵硅薄鐨勫瓧绗︿覆琛ㄨ堪(Well-Known Text)銆�
         */

      }, {
        key: 'toString',
        value: function toString() {
          var string;
          if (_WKT2.default) {
            var wkt = new _WKT2.default();
            string = wkt.write(new _Vector2.default(this));
          } else {
            string = Object.prototype.toString.call(this);
          }
          return string;
        }

        /**
         * @function SuperMap.Geometry.fromWKT
         * @description 浠庝竴涓粰瀹氱殑瀛楃涓茬敓鎴愪竴涓猤eometry瀵硅薄锛岄渶瑕佸紩鍏uperMap.Format.WKT锛岃鏂规硶鏂瑰彲鐢熸晥銆�
         * @example
         * var geometry= new SuperMap.Geometry.fromWKT("POINT(0 0)");
         * geometry.x=0;
         * @param wkt - {string} 鎻忚堪geometry淇℃伅鐨勫瓧绗︿覆(A string representing the geometry in Well-Known Text.)
         * @returns {SuperMap.Geometry} 閫傚綋绫诲瀷鐨刧eometry瀵硅薄(A geometry of the appropriate class).
         */

      }], [{
        key: 'fromWKT',
        value: function fromWKT(wkt) {
          var geom;
          if (_WKT2.default) {
            var format = Geometry.fromWKT.format;
            if (!format) {
              format = new _WKT2.default();
              Geometry.fromWKT.format = format;
            }
            var result = format.read(wkt);
            if (result instanceof _Vector2.default) {
              geom = result.geometry;
            } else if (_Util.Util.isArray(result)) {
              var len = result.length;
              var components = new Array(len);
              for (var i = 0; i < len; ++i) {
                components[i] = result[i].geometry;
              }
              geom = new Geometry.Collection(components);
            }
          }
          return geom;
        }

        /**
         * @function SuperMap.Geometry.prototype.SuperMap.Geometry.segmentsIntersect
         * @description 绾挎鐩镐氦銆傝鏂规硶鏄垽鏂袱鏉＄嚎娈垫槸鍚︾浉浜ゃ€傝绠楀苟杩斿洖鐩镐氦鐨刾oint銆傚鏋渟eg1.x2 >= seg2.x1 || seg2.x2 >= seg1.x1 锛岃鏂规硶鏄庢樉涓嶄細琚皟鐢ㄣ€�
         * @param seg1 - {Object} 璇ュ璞″寘鍚殑灞炴€ф槸 x1, y1, x2,鍜寉2銆傝捣濮嬬偣鏄� 鐢眡1 and y1鏋勬垚锛岀粓鐐规槸鏈墄2 and y2缁勬垚锛屽繀椤绘弧瓒崇殑鏄痻1 < x2銆�
         * @param seg2 - {Object} 璇ュ璞″寘鍚殑灞炴€ф槸 x1, y1, x2,鍜寉2銆傝捣濮嬬偣鏄� 鐢眡1 and y1鏋勬垚锛岀粓鐐规槸鏈墄2 and y2缁勬垚锛屽繀椤绘弧瓒崇殑鏄痻1 < x2銆�
         * @param options - {Object} Optional properties for calculating the intersection.璇ュ璞℃槸鍒ゆ柇鏄惁璁＄畻鐩镐氦鐨勭偣銆�<br>
         *         point - {boolean} 杩斿洖鐩镐氦鐐广€傚鏋滆缃负false锛岃鏄庡疄闄呯殑鐩镐氦鐐逛笉闇€瑕佽绠楀嚭鏉ャ€傚鏋滆缃负true,骞朵笖杩欎袱鏉＄嚎娈电浉浜わ紝杩斿洖鐩镐氦鐨勭偣 銆�
         *                           濡傛灉璁剧疆涓簍rue锛屼絾鏄袱鏉＄嚎娈典笉鐩镐氦锛岃繑鍥瀎alse銆傚鏋滆缃负true锛屼絾鏄袱鏉＄嚎娈靛钩琛岋紝鍒欒繑鍥瀟rue銆�<br>
         *         tolerance - {number} 濡傛灉璁剧疆璇ュ€间笉涓虹┖锛屼袱鏉＄嚎娈靛湪瀹圭嚎鐨勮寖鍥村唴锛屽垯浼氳褰撲綔鐩镐氦銆傛澶栵紝濡傛灉point杩欎釜灞炴€т负true锛岃绠楃浉浜ょ殑瀹圭嚎璺濈缁堢偣,绔偣灏嗚繑鍥炶€屼笉鏄绠楃浉浜ゃ€�
         * @returns {boolean | SuperMap.Geometry.Point} 杩斿洖绾夸箣闂存槸鍚︾浉浜わ紝濡傛灉璁剧疆鐐瑰睘鎬т负true鐨勮瘽锛屼細杩斿洖鐩镐氦鐨勭偣鍧愭爣銆傚鏋滅偣涓簍rue锛岀嚎閲嶅悎锛屽皢浼氳繑鍥瀟rue锛堢浉浜ょ殑绛変簬鏈€鐭殑绾匡級銆�
         */

      }, {
        key: 'segmentsIntersect',
        value: function segmentsIntersect(seg1, seg2, options) {
          var point = options && options.point;
          var tolerance = options && options.tolerance;
          var intersection = false;
          var x11_21 = seg1.x1 - seg2.x1;
          var y11_21 = seg1.y1 - seg2.y1;
          var x12_11 = seg1.x2 - seg1.x1;
          var y12_11 = seg1.y2 - seg1.y1;
          var y22_21 = seg2.y2 - seg2.y1;
          var x22_21 = seg2.x2 - seg2.x1;
          var d = y22_21 * x12_11 - x22_21 * y12_11;
          var n1 = x22_21 * y11_21 - y22_21 * x11_21;
          var n2 = x12_11 * y11_21 - y12_11 * x11_21;
          if (d == 0) {
            // parallel
            if (n1 == 0 && n2 == 0) {
              // coincident
              intersection = true;
            }
          } else {
            var along1 = n1 / d;
            var along2 = n2 / d;
            if (along1 >= 0 && along1 <= 1 && along2 >= 0 && along2 <= 1) {
              // intersect
              if (!point) {
                intersection = true;
              } else {
                // calculate the intersection point
                var x = seg1.x1 + along1 * x12_11;
                var y = seg1.y1 + along1 * y12_11;
                intersection = new Geometry.Point(x, y);
              }
            }
          }
          if (tolerance) {
            var dist;
            if (intersection) {
              if (point) {
                var segs = [seg1, seg2];
                var seg, x, y;
                // check segment endpoints for proximity to intersection
                // set intersection to first endpoint within the tolerance
                outer: for (var i = 0; i < 2; ++i) {
                  seg = segs[i];
                  for (var j = 1; j < 3; ++j) {
                    x = seg["x" + j];
                    y = seg["y" + j];
                    dist = Math.sqrt(Math.pow(x - intersection.x, 2) + Math.pow(y - intersection.y, 2));
                    if (dist < tolerance) {
                      intersection.x = x;
                      intersection.y = y;
                      break outer;
                    }
                  }
                }
              }
            } else {
              // no calculated intersection, but segments could be within
              // the tolerance of one another
              var segs = [seg1, seg2];
              var source, target, x, y, p, result;
              // check segment endpoints for proximity to intersection
              // set intersection to first endpoint within the tolerance
              outer: for (var i = 0; i < 2; ++i) {
                source = segs[i];
                target = segs[(i + 1) % 2];
                for (var j = 1; j < 3; ++j) {
                  p = { x: source["x" + j], y: source["y" + j] };
                  result = Geometry.distanceToSegment(p, target);
                  if (result.distance < tolerance) {
                    if (point) {
                      intersection = new Geometry.Point(p.x, p.y);
                    } else {
                      intersection = true;
                    }
                    break outer;
                  }
                }
              }
            }
          }
          return intersection;
        }

        /**
         * @function SuperMap.Geometry.distanceToSegment
         * @description 璁＄畻鐐瑰埌鐩寸嚎鐨勮窛绂汇€�
         * @param point - {Object} 涓€涓偣鍖呭惈x鍜寉鍧愭爣銆�
         * @param segment - {Object} 涓€涓璞″寘鍚� x1, y1, x2, and y2鍧愭爣銆�
         * @example
         *        var point={
         *         x:0,
         *          y:13
         *          } ,
         *            seg1={
         *             x1:6,
         *             y1:5,
         *            x2:6,
         *            y2:12
         *       } ;
         *       var geo=SuperMap.Geometry.distanceToSegment(point,seg1);
         * @returns {Object} 杩斿洖鐨勬槸鐐瑰埌鐩寸嚎鐨勬渶鐭窛绂伙紝浠ュ強鐐逛笌鐩寸嚎鏈€鐭窛绂荤浉浜ょ殑鐐瑰潗鏍囷紙x,y锛夈€�
         */

      }, {
        key: 'distanceToSegment',
        value: function distanceToSegment(point, segment) {
          var x0 = point.x;
          var y0 = point.y;
          var x1 = segment.x1;
          var y1 = segment.y1;
          var x2 = segment.x2;
          var y2 = segment.y2;
          var dx = x2 - x1;
          var dy = y2 - y1;
          var along = (dx * (x0 - x1) + dy * (y0 - y1)) / (Math.pow(dx, 2) + Math.pow(dy, 2));
          var x, y;
          if (along <= 0.0) {
            x = x1;
            y = y1;
          } else if (along >= 1.0) {
            x = x2;
            y = y2;
          } else {
            x = x1 + along * dx;
            y = y1 + along * dy;
          }
          return {
            distance: Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)),
            x: x, y: y
          };
        }
      }]);

      return Geometry;
    }();

    exports.default = Geometry;

    _SuperMap2.default.Geometry = Geometry;

    /***/ }),
  /* 13 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Collection2 = __webpack_require__(3);

    var _Collection3 = _interopRequireDefault(_Collection2);

    var _LineString = __webpack_require__(5);

    var _LineString2 = _interopRequireDefault(_LineString);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.MultiLineString
     * @classdesc 鍑犱綍瀵硅薄澶氱嚎绫汇€�
     * @extends {SuperMap.Geometry.Collection}
     * @param components - {Array<SuperMap.Geometry.LineString>} LineString鏁扮粍銆�
     * @example
     * var multi = new SuperMap.Geometry.MultiLineString([
     *      new SuperMap.Geometry.LineString([
     *          new SuperMap.Geometry.Point(1, 0),
     *          new SuperMap.Geometry.Point(0, 1)
     *      ])
     *  ]);
     */
    var MultiLineString = function (_Collection) {
      _inherits(MultiLineString, _Collection);

      function MultiLineString(components) {
        _classCallCheck(this, MultiLineString);

        var _this = _possibleConstructorReturn(this, (MultiLineString.__proto__ || Object.getPrototypeOf(MultiLineString)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.LineString"];
        _this.CLASS_NAME = "SuperMap.Geometry.MultiLineString";
        return _this;
      }

      /**
       * @function SuperMap.Geometry.MultiLineString.prototype.split
       * @description 鐢ㄥ嚑浣曞璞″幓鍒嗗壊鍙︿竴涓嚑浣曞璞°€�
       * @param geometry - {SuperMap.Geometry} 鐩爣鍑犱綍瀵硅薄銆�
       * @param options - {Object} 鍙€夊弬鏁般€�<br>
       *         mutual - {boolean} Split the source geometry in addition to the target
       *                   geometry.  Default is false.<br>
       *         edge - {boolean} 鏄惁鍙綋涓庤竟鐣岀浉浜ょ殑鏃跺€欐墠杩涜鍒嗗壊銆傞粯璁ゆ槸true銆傚鏋滀负false鍒欏湪瀹瑰樊鑼冨洿鍐呯浉浜よ鍒嗗壊銆�
       *         tolerance - {number} 瀹瑰樊銆�
       * @returns {Array} 琚垎鍓茬殑鍑犱綍瀵硅薄鏁扮粍銆�
       */


      /**
       * @member SuperMap.Geometry.MultiLineString.prototype.componentTypes - {Array<string>}
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @readonly
       * @default ["{@link SuperMap.Geometry.LineString}"]
       */


      _createClass(MultiLineString, [{
        key: 'split',
        value: function split(geometry, options) {
          var results = null;
          var mutual = options && options.mutual;
          var splits, sourceLine, sourceLines, sourceSplit, targetSplit;
          var sourceParts = [];
          var targetParts = [geometry];
          for (var i = 0, len = this.components.length; i < len; ++i) {
            sourceLine = this.components[i];
            sourceSplit = false;
            for (var j = 0; j < targetParts.length; ++j) {
              splits = sourceLine.split(targetParts[j], options);
              if (splits) {
                if (mutual) {
                  sourceLines = splits[0];
                  for (var k = 0, klen = sourceLines.length; k < klen; ++k) {
                    if (k === 0 && sourceParts.length) {
                      sourceParts[sourceParts.length - 1].addComponent(sourceLines[k]);
                    } else {
                      sourceParts.push(new MultiLineString([sourceLines[k]]));
                    }
                  }
                  sourceSplit = true;
                  splits = splits[1];
                }
                if (splits.length) {
                  // splice in new target parts
                  splits.unshift(j, 1);
                  Array.prototype.splice.apply(targetParts, splits);
                  break;
                }
              }
            }
            if (!sourceSplit) {
              // source line was not hit
              if (sourceParts.length) {
                // add line to existing multi
                sourceParts[sourceParts.length - 1].addComponent(sourceLine.clone());
              } else {
                // create a fresh multi
                sourceParts = [new MultiLineString(sourceLine.clone())];
              }
            }
          }
          if (sourceParts && sourceParts.length > 1) {
            sourceSplit = true;
          } else {
            sourceParts = [];
          }
          if (targetParts && targetParts.length > 1) {
            targetSplit = true;
          } else {
            targetParts = [];
          }
          if (sourceSplit || targetSplit) {
            if (mutual) {
              results = [sourceParts, targetParts];
            } else {
              results = targetParts;
            }
          }
          return results;
        }

        /**
         * @function SuperMap.Geometry.MultiLineString.prototype.splitWith
         * @description 鐢ㄥ嚑浣曞璞″幓鍒嗗壊鍙︿竴涓嚑浣曞璞°€�
         * @param geometry - {SuperMap.Geometry} 鐩爣鍑犱綍瀵硅薄銆�
         * @param options - {Object} 鍙€夊弬鏁般€�<br>
         *         mutual - {boolean} Split the source geometry in addition to the target
         *                   geometry.  Default is false.<br>
         *         edge - {boolean} 鏄惁鍙綋涓庤竟鐣岀浉浜ょ殑鏃跺€欐墠杩涜鍒嗗壊銆傞粯璁ゆ槸true銆傚鏋滀负false鍒欏湪瀹瑰樊鑼冨洿鍐呯浉浜よ鍒嗗壊銆�
         *         tolerance - {number} 瀹瑰樊銆�
         * @returns {Array} 琚垎鍓茬殑鍑犱綍瀵硅薄鏁扮粍銆�
         */

      }, {
        key: 'splitWith',
        value: function splitWith(geometry, options) {
          var results = null;
          var mutual = options && options.mutual;
          var splits, targetLine, sourceLines, sourceSplit, targetSplit, sourceParts, targetParts;
          if (geometry instanceof _LineString2.default) {
            targetParts = [];
            sourceParts = [geometry];
            for (var i = 0, len = this.components.length; i < len; ++i) {
              targetSplit = false;
              targetLine = this.components[i];
              for (var j = 0; j < sourceParts.length; ++j) {
                splits = sourceParts[j].split(targetLine, options);
                if (splits) {
                  if (mutual) {
                    sourceLines = splits[0];
                    if (sourceLines.length) {
                      // splice in new source parts
                      sourceLines.unshift(j, 1);
                      Array.prototype.splice.apply(sourceParts, sourceLines);
                      j += sourceLines.length - 2;
                    }
                    splits = splits[1];
                    if (splits.length === 0) {
                      splits = [targetLine.clone()];
                    }
                  }
                  for (var k = 0, klen = splits.length; k < klen; ++k) {
                    if (k === 0 && targetParts.length) {
                      targetParts[targetParts.length - 1].addComponent(splits[k]);
                    } else {
                      targetParts.push(new MultiLineString([splits[k]]));
                    }
                  }
                  targetSplit = true;
                }
              }
              if (!targetSplit) {
                // target component was not hit
                if (targetParts.length) {
                  // add it to any existing multi-line
                  targetParts[targetParts.length - 1].addComponent(targetLine.clone());
                } else {
                  // or start with a fresh multi-line
                  targetParts = [new MultiLineString([targetLine.clone()])];
                }
              }
            }
          } else {
            results = geometry.split(this);
          }
          if (sourceParts && sourceParts.length > 1) {
            sourceSplit = true;
          } else {
            sourceParts = [];
          }
          if (targetParts && targetParts.length > 1) {
            targetSplit = true;
          } else {
            targetParts = [];
          }
          if (sourceSplit || targetSplit) {
            if (mutual) {
              results = [sourceParts, targetParts];
            } else {
              results = targetParts;
            }
          }
          return results;
        }
      }]);

      return MultiLineString;
    }(_Collection3.default);

    exports.default = MultiLineString;

    _SuperMap2.default.Geometry.MultiLineString = MultiLineString;

    /***/ }),
  /* 14 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Collection2 = __webpack_require__(3);

    var _Collection3 = _interopRequireDefault(_Collection2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.MultiPolygon
     * @classdesc 鍑犱綍瀵硅薄澶氬杈瑰舰绫汇€�
     * @extends {SuperMap.Geometry.Collection}
     * @param  components - {Array<SuperMap.Geometry.Polygon>} 褰㈡垚 MultiPolygon 鐨勫杈瑰舰鏁扮粍銆�
     * @example
     * var points1 = [new SuperMap.Geometry.Point(10,10),new SuperMap.Geometry.Point(0,0)];
     * var points2 = [new SuperMap.Geometry.Point(10,10),new SuperMap.Geometry.Point(0,0),new SuperMap.Geometry.Point(3,3),new SuperMap.Geometry.Point(10,10)];
     *
     * var linearRing1 = new SuperMap.Geometry.LinearRing(points1);
     * var linearRing2 = new SuperMap.Geometry.LinearRing(points2);
     *
     * var polygon1 = new SuperMap.Geometry.Polygon([linearRing1]);
     * var polygon2 = new SuperMap.Geometry.Polygon([linearRing2]);
     *
     * var multiPolygon1 = new SuperMap.Geometry.MultiPolygon([polygon1,polygon2]);
     */
    var MultiPolygon = function (_Collection) {
      _inherits(MultiPolygon, _Collection);

      function MultiPolygon(components) {
        _classCallCheck(this, MultiPolygon);

        var _this = _possibleConstructorReturn(this, (MultiPolygon.__proto__ || Object.getPrototypeOf(MultiPolygon)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.Polygon"];
        _this.CLASS_NAME = "SuperMap.Geometry.MultiPolygon";
        return _this;
      }

      /**
       * @member SuperMap.Geometry.MultiPolygon.prototype.componentTypes -{Array<string>}
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @readonly
       * @default ["{@link SuperMap.Geometry.Polygon}"]
       */


      return MultiPolygon;
    }(_Collection3.default);

    exports.default = MultiPolygon;

    _SuperMap2.default.Geometry.MultiPolygon = MultiPolygon;

    /***/ }),
  /* 15 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.Format
     * @classdesc 璇诲啓鍚勭鏍煎紡鐨勬牸寮忕被鍩虹被銆傚叾瀛愮被搴旇鍖呭惈骞跺疄鐜皉ead鍜寃rite鏂规硶銆�
     * @param options - {Object} 鍙€夊弬鏁般€�<br>
     *        keepData - {boolean} 濡傛灉璁剧疆涓簍rue锛� data灞炴€т細鎸囧悜琚В鏋愮殑瀵硅薄锛堜緥濡俲son鎴杧ml鏁版嵁瀵硅薄锛夈€�
     */
    var Format = function () {

      /**
       * @member SuperMap.Format.prototype.data - {Object}
       * @description 褰� <keepData> 灞炴€ц缃负true锛岃繖鏄紶閫掔粰<read>鎿嶄綔鐨勮琚В鏋愮殑瀛楃涓层€�
       */
      function Format(options) {
        _classCallCheck(this, Format);

        this.options = null;
        this.data = null;
        this.keepData = false;
        this.CLASS_NAME = "SuperMap.Format";

        _SuperMap2.default.Util.extend(this, options);
        this.options = options;
      }

      /**
       * @function SuperMap.Format.prototype.destroy
       * @description 閿€姣佽鏍煎紡绫伙紝閲婃斁鐩稿叧璧勬簮銆�
       */


      /**
       * APIProperty: keepData
       * @member SuperMap.Format.prototype.keepData - {Object}
       * @description 淇濇寔鏈€杩戣鍒扮殑鏁版嵁鐨勫紩鐢紙閫氳繃 <data> 灞炴€э級銆傞粯璁ゅ€兼槸false銆�
       */


      /**
       * @member SuperMap.Format.prototype.options - {Object}
       * @description 鍙€夊弬鏁般€�
       */


      _createClass(Format, [{
        key: "destroy",
        value: function destroy() {}
        //鐢ㄦ潵閿€姣佽鏍煎紡绫伙紝閲婃斁鐩稿叧璧勬簮


        /**
         * @function SuperMap.Format.prototype.read
         * @description 鏉ヤ粠瀛楃涓蹭腑璇诲彇鏁版嵁銆�
         * @param data - {string} 璇诲彇鐨勬暟鎹€�
         */

      }, {
        key: "read",
        value: function read(data) {}
        //鐢ㄦ潵浠庡瓧绗︿覆涓鍙栨暟鎹�


        /**
         * @function SuperMap.Format.prototype.write
         * @description 灏嗗璞″啓鎴愬瓧绗︿覆銆�
         * @param object - {Object} 鍙簭鍒楀寲鐨勫璞°€�
         * @return {string} 瀵硅薄琚啓鎴愬瓧绗︿覆銆�
         */

      }, {
        key: "write",
        value: function write(object) {
          //鐢ㄦ潵鍐欏瓧绗︿覆
        }
      }]);

      return Format;
    }();

    exports.default = Format;

    _SuperMap2.default.Format = Format;

    /***/ }),
  /* 16 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Bounds = __webpack_require__(11);

    var _Bounds2 = _interopRequireDefault(_Bounds);

    var _Point = __webpack_require__(2);

    var _Point2 = _interopRequireDefault(_Point);

    var _MultiPoint = __webpack_require__(8);

    var _MultiPoint2 = _interopRequireDefault(_MultiPoint);

    var _LinearRing = __webpack_require__(6);

    var _LinearRing2 = _interopRequireDefault(_LinearRing);

    var _LineString = __webpack_require__(5);

    var _LineString2 = _interopRequireDefault(_LineString);

    var _MultiLineString = __webpack_require__(13);

    var _MultiLineString2 = _interopRequireDefault(_MultiLineString);

    var _Polygon = __webpack_require__(9);

    var _Polygon2 = _interopRequireDefault(_Polygon);

    var _MultiPolygon = __webpack_require__(14);

    var _MultiPolygon2 = _interopRequireDefault(_MultiPolygon);

    var _ServerStyle = __webpack_require__(41);

    var _ServerStyle2 = _interopRequireDefault(_ServerStyle);

    var _Route = __webpack_require__(39);

    var _Route2 = _interopRequireDefault(_Route);

    var _Util = __webpack_require__(1);

    var _REST = __webpack_require__(4);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @private
     * @class SuperMap.ServerGeometry
     * @description 鏈嶅姟绔嚑浣曞璞＄被銆�
     * 璇ョ被鎻忚堪鍑犱綍瀵硅薄锛堢煝閲忥級鐨勭壒寰佹暟鎹紙鍧愭爣鐐瑰銆佸嚑浣曞璞＄殑绫诲瀷绛夛級銆�
     * 鍩轰簬鏈嶅姟绔殑绌洪棿鍒嗘瀽銆佺┖闂村叧绯昏繍绠椼€佹煡璇㈢瓑 GIS 鏈嶅姟鍔熻兘浣跨敤鏈嶅姟绔嚑浣曞璞°€�
     */
    var ServerGeometry = function () {

      /*
     * Constructor: SuperMap.ServerGeometry
     * 鏈嶅姟绔嚑浣曞璞＄被鏋勯€犲嚱鏁般€�
     *
     * Parameters:
     * options - {Object} 鍙傛暟銆�
     *
     * Allowed options properties:
     * id - {String} 鏈嶅姟绔嚑浣曞璞″敮涓€鏍囪瘑绗︺€�
     * style - {<SuperMap.ServerStyle>}  鏈嶅姟绔嚑浣曞璞＄殑椋庢牸銆�
     * parts - {Array(Number)} 鏈嶅姟绔嚑浣曞璞′腑鍚勪釜瀛愬璞℃墍鍖呭惈鐨勮妭鐐逛釜鏁般€�
     * points - {Array(<Point>)} 缁勬垚鍑犱綍瀵硅薄鐨勮妭鐐圭殑鍧愭爣瀵规暟缁勩€�
     * type - {<SuperMap.GeometryType>} 鍑犱綍瀵硅薄鐨勭被鍨嬨€�
     */

      /*
     * APIProperty: type
     * {<SuperMap.GeometryType>} 鍑犱綍瀵硅薄鐨勭被鍨�(GeometryType)銆�
     */

      /*
     * APIProperty: parts
     * {Array(Number)} 鏈嶅姟绔嚑浣曞璞′腑鍚勪釜瀛愬璞℃墍鍖呭惈鐨勮妭鐐逛釜鏁般€�
     * 1.鍑犱綍瀵硅薄浠庣粨鏋勪笂鍙互鍒嗕负绠€鍗曞嚑浣曞璞″拰澶嶆潅鍑犱綍瀵硅薄銆�
     * 绠€鍗曞嚑浣曞璞′笌澶嶆潅鍑犱綍瀵硅薄鐨勫尯鍒細绠€鍗曠殑鍑犱綍瀵硅薄涓€鑸负鍗曚竴瀵硅薄锛�
     * 鑰屽鏉傜殑鍑犱綍瀵硅薄鐢卞涓畝鍗曞璞＄粍鎴愭垨缁忚繃涓€瀹氱殑绌洪棿杩愮畻涔嬪悗浜х敓锛�
     * 濡傦細鐭╁舰涓虹畝鍗曠殑鍖哄煙瀵硅薄锛岃€屼腑绌虹殑鐭╁舰涓哄鏉傜殑鍖哄煙瀵硅薄銆�
     * 2.閫氬父鎯呭喌锛屼竴涓畝鍗曞嚑浣曞璞＄殑瀛愬璞″氨鏄畠鏈韩锛�
     * 鍥犳瀵逛簬绠€鍗曞璞℃潵璇寸殑璇ュ瓧娈典负闀垮害涓�1鐨勬暣鍨嬫暟缁勶紝
     * 璇ュ瓧娈电殑鍊煎氨鏄繖涓畝鍗曞璞¤妭鐐圭殑涓暟銆�
     * 濡傛灉涓€涓嚑浣曞璞℃槸鐢卞嚑涓畝鍗曞璞＄粍鍚堣€屾垚鐨勶紝
     * 渚嬪锛屼竴涓矝鐘跺嚑浣曞璞＄敱3涓畝鍗曠殑澶氳竟褰㈢粍鎴愯€屾垚锛�
     * 閭ｄ箞杩欎釜宀涚姸鐨勫嚑浣曞璞＄殑 Parts 瀛楁鍊煎氨鏄竴涓暱搴︿负3鐨勬暣鍨嬫暟缁勶紝
     * 鏁扮粍涓瘡涓垚鍛樼殑鍊煎垎鍒唬琛ㄨ繖涓変釜澶氳竟褰㈡墍鍖呭惈鐨勮妭鐐逛釜鏁般€�
     */


      /*
     * APIProperty: id
     * {String} 鏈嶅姟绔嚑浣曞璞″敮涓€鏍囪瘑绗︺€�
     */
      function ServerGeometry(options) {
        _classCallCheck(this, ServerGeometry);

        this.id = 0;
        this.style = null;
        this.parts = null;
        this.points = null;
        this.type = null;
        this.prjCoordSys = null;
        this.CLASS_NAME = "SuperMap.ServerGeometry";

        if (options) {
          _Util.Util.extend(this, options);
        }
      }

      /*
     * APIMethod: destroy
     * 閲婃斁璧勬簮锛屽皢寮曠敤璧勬簮鐨勫睘鎬х疆绌恒€�
     */

      /*
     * APIProperty: prjCoordSys
     * {Object}鎶曞奖鍧愭爣鍙傛暟,鐜颁粎鍦ㄧ紦鍐插尯鍒嗘瀽涓湁鏁堛€�
     */

      /*
     * APIProperty: points
     * {Array(<Point>)} 缁勬垚鍑犱綍瀵硅薄鐨勮妭鐐圭殑鍧愭爣瀵规暟缁勩€�
     * 1.鎵€鏈夊嚑浣曞璞★紙鐐广€佺嚎銆侀潰锛夐兘鏄敱涓€浜涚畝鍗曠殑鐐瑰潗鏍囩粍鎴愮殑锛�
     * 璇ュ瓧娈靛瓨鏀句簡缁勬垚鍑犱綍瀵硅薄鐨勭偣鍧愭爣鐨勬暟缁勩€�
     * 瀵逛簬绠€鍗曠殑闈㈠璞★紝浠栫殑璧风偣鍜岀粓鐐圭殑鍧愭爣鐐圭浉鍚屻€�
     * 2.瀵逛簬澶嶆潅鐨勫嚑浣曞璞★紝鏍规嵁 Parts 灞炴€ф潵纭畾姣忎竴涓粍鎴愬鏉傚嚑浣曞璞＄殑绠€鍗曞璞℃墍瀵瑰簲鐨勮妭鐐圭殑涓暟锛�
     * 浠庤€岀‘瀹� Points 瀛楁涓潗鏍囧鐨勫垎閰嶅綊灞為棶棰樸€�
     */


      /*
     * APIProperty: style
     * {<SuperMap.ServerStyle>} 鏈嶅姟绔嚑浣曞璞＄殑椋庢牸(ServerStyle)銆�
     */


      _createClass(ServerGeometry, [{
        key: 'destroy',
        value: function destroy() {
          var me = this;
          me.id = null;
          me.style = null;
          me.parts = null;
          me.partTopo = null;
          me.points = null;
          me.type = null;
          me.prjCoordSys = null;
        }

        /*
     * APIMethod: toGeometry
     * 灏嗘湇鍔＄鍑犱綍瀵硅薄 ServerGeometry 杞崲涓哄鎴风鍑犱綍瀵硅薄 Geometry銆�
     *
     * Returns
     * {<SuperMap.Geometry>} 杞崲鍚庣殑瀹㈡埛绔嚑浣曞璞°€�
     */

      }, {
        key: 'toGeometry',
        value: function toGeometry() {
          var me = this,
              geoType = me.type;
          switch (geoType) {
            case _REST.GeometryType.POINT:
              return me.toGeoPoint();
            case _REST.GeometryType.LINE:
              return me.toGeoLine();
            case _REST.GeometryType.LINEM:
              return me.toGeoLinem();
            case _REST.GeometryType.REGION:
              return me.toGeoRegion();
            case _REST.GeometryType.POINTEPS:
              return me.toGeoPoint();
            case _REST.GeometryType.LINEEPS:
              return me.toGeoLineEPS();
            case _REST.GeometryType.REGIONEPS:
              return me.toGeoRegionEPS();
          }
        }

        /*
     * Method: toGeoPoint
     * 灏嗘湇鍔＄鐨勭偣鍑犱綍瀵硅薄杞崲涓哄鎴风鍑犱綍瀵硅薄銆�
     * 鍖呮嫭 Point 銆丮ultiPoint銆�
     *
     * Returns
     * {<SuperMap.Geometry>} 杞崲鍚庣殑瀹㈡埛绔嚑浣曞璞°€�
     */

      }, {
        key: 'toGeoPoint',
        value: function toGeoPoint() {
          var me = this,
              geoParts = me.parts || [],
              geoPoints = me.points || [],
              len = geoParts.length;
          if (len > 0) {
            if (len === 1) {
              return new _Point2.default(geoPoints[0].x, geoPoints[0].y);
            } else {
              for (var i = 0, pointList = []; i < len; i++) {
                pointList.push(new _Point2.default(geoPoints[i].x, geoPoints[i].y));
              }
              return new _MultiPoint2.default(pointList);
            }
          } else {
            return null;
          }
        }

        /*
     * Method: toGeoLine
     * 灏嗘湇鍔＄鐨勭嚎鍑犱綍瀵硅薄杞崲涓哄鎴风鍑犱綍瀵硅薄銆�
     * 鍖呮嫭LinearRing銆丩ineString銆丮ultiLineString銆�
     *
     * Returns
     * {<SuperMap.Geometry>} 杞崲鍚庣殑瀹㈡埛绔嚑浣曞璞°€�
     */

      }, {
        key: 'toGeoLine',
        value: function toGeoLine() {
          var me = this,
              geoParts = me.parts || [],
              geoPoints = me.points || [],
              len = geoParts.length;
          if (len > 0) {
            if (len === 1) {
              for (var i = 0, pointList = []; i < geoParts[0]; i++) {
                pointList.push(new _Point2.default(geoPoints[i].x, geoPoints[i].y));
              }
              //鍒ゆ柇绾挎槸鍚﹂棴鍚堬紝濡傛灉闂悎锛屽垯杩斿洖LinearRing锛屽惁鍒欒繑鍥濴ineString
              if (pointList[0].equals(pointList[geoParts[0] - 1])) {
                return new _LinearRing2.default(pointList);
              } else {
                return new _LineString2.default(pointList);
              }
            } else {
              for (var i = 0, lineList = []; i < len; i++) {
                for (var j = 0, pointList = []; j < geoParts[i]; j++) {
                  pointList.push(new _Point2.default(geoPoints[j].x, geoPoints[j].y));
                }
                lineList.push(new _LineString2.default(pointList));
                geoPoints.splice(0, geoParts[i]);
              }
              return new _MultiLineString2.default(lineList);
            }
          } else {
            return null;
          }
        }

        /*
     * Method: toGeoLineEPS
     * 灏嗘湇鍔＄鐨勭嚎鍑犱綍瀵硅薄杞崲涓哄鎴风鍑犱綍瀵硅薄銆�
     * 鍖呮嫭LinearRing銆丩ineString銆丮ultiLineString銆�
     *
     * Returns
     * {<SuperMap.Geometry>} 杞崲鍚庣殑瀹㈡埛绔嚑浣曞璞°€�
     */

      }, {
        key: 'toGeoLineEPS',
        value: function toGeoLineEPS() {
          var me = this,
              geoParts = me.parts || [],
              geoPoints = me.points || [],
              i,
              j,
              pointList,
              lineList,
              lineEPS,
              len = geoParts.length;
          if (len > 0) {
            if (len === 1) {
              for (i = 0, pointList = []; i < geoParts[0]; i++) {
                pointList.push(new _Point2.default(geoPoints[i].x, geoPoints[i].y, geoPoints[i].type));
              }
              //鍒ゆ柇绾挎槸鍚﹂棴鍚堬紝濡傛灉闂悎锛屽垯杩斿洖LinearRing锛屽惁鍒欒繑鍥濴ineString
              if (pointList[0].equals(pointList[geoParts[0] - 1])) {
                lineEPS = _LineString2.default.createLineEPS(pointList);
                return new _SuperMap2.default.Geometry.LineRing(lineEPS);
              } else {
                lineEPS = _LineString2.default.createLineEPS(pointList);
                return new _LineString2.default(lineEPS);
              }
            } else {
              for (i = 0, lineList = []; i < len; i++) {
                for (j = 0, pointList = []; j < geoParts[i]; j++) {
                  pointList.push(new _Point2.default(geoPoints[j].x, geoPoints[j].y));
                }
                lineEPS = _LineString2.default.createLineEPS(pointList);
                lineList.push(new _LineString2.default(lineEPS));
                geoPoints.splice(0, geoParts[i]);
              }
              return new _MultiLineString2.default(lineList);
            }
          } else {
            return null;
          }
        }

        /*
     * Method: toGeoLine
     * 灏嗘湇鍔＄鐨勮矾鐢辩嚎鍑犱綍瀵硅薄杞崲涓哄鎴风鍑犱綍瀵硅薄銆�
     * 鍖呮嫭LinearRing銆丩ineString銆丮ultiLineString銆�
     *
     * Returns
     * {<SuperMap.Geometry>} 杞崲鍚庣殑瀹㈡埛绔嚑浣曞璞°€�
     */

      }, {
        key: 'toGeoLinem',
        value: function toGeoLinem() {
          var me = this;
          return new _Route2.default.fromJson(me);
        }

        /*
     * Method: toGeoRegion
     * 灏嗘湇鍔＄鐨勯潰鍑犱綍瀵硅薄杞崲涓哄鎴风鍑犱綍瀵硅薄銆�
     * 绫诲瀷涓篜olygon銆�
     *
     * Returns
     * {<SuperMap.Geometry>} 杞崲鍚庣殑瀹㈡埛绔嚑浣曞璞°€�
     */

      }, {
        key: 'toGeoRegion',
        value: function toGeoRegion() {
          var me = this,
              geoParts = me.parts || [],
              geoTopo = me.partTopo || [],
              geoPoints = me.points || [],
              len = geoParts.length;
          if (len <= 0) {
            return null;
          }
          var polygonArray = [];
          var pointList = [];
          if (len == 1) {
            for (var i = 0; i < geoPoints.length; i++) {
              pointList.push(new _Point2.default(geoPoints[i].x, geoPoints[i].y));
            }
            polygonArray.push(new _Polygon2.default([new _LinearRing2.default(pointList)]));
            pointList = [];
            return new _MultiPolygon2.default(polygonArray);
          }
          //澶勭悊澶嶆潅闈�
          var CCWArray = [];
          var areaArray = [];
          var polygonArrayTemp = [];
          //polyon宀涙礊鏍囪瘑鏁扮粍锛屽垵濮嬮兘鏄矝銆�
          var CCWIdent = [];
          for (var i = 0, pointIndex = 0; i < len; i++) {
            for (var j = 0; j < geoParts[i]; j++) {
              pointList.push(new _Point2.default(geoPoints[pointIndex + j].x, geoPoints[pointIndex + j].y));
            }
            pointIndex += geoParts[i];
            var polygon = new _Polygon2.default([new _LinearRing2.default(pointList)]);
            pointList = [];
            polygonArrayTemp.push(polygon);
            CCWIdent.push(1);
            areaArray.push(polygon.getArea());
          }
          //鏍规嵁闈㈢Н鎺掑簭
          ServerGeometry.bubbleSort(areaArray, polygonArrayTemp, geoTopo);
          //iServer 9D鏂板瀛楁
          if (geoTopo.length === 0) {
            //宀涙礊搴曞眰鍒ゆ柇鍘熷垯锛氬皢鎵€鏈夌殑瀛愬璞℃寜鐓ч潰绉帓搴忥紝闈㈢Н鏈€澶х殑鐩存帴鍒ゅ畾涓哄矝锛�1锛夛紝浠庨潰绉澶х殑寮€濮嬪鐞嗭紝
            // 濡傛灉鍙戠幇璇ュ璞″湪鏌愪釜闈㈢Н澶т簬瀹冪殑瀵硅薄涔嬩腑锛堝嵆琚寘鍚級锛屽垯鏍规嵁鍖呭惈瀹冪殑瀵硅薄鐨勬爣璇嗭紙1 or -1锛夛紝鎸囧畾鍏舵爣璇嗭紙-1 or 1锛夛紝
            // 渚濇澶勭悊瀹屾墍鏈夊璞★紝灏卞緱鍒颁簡涓€涓爣璇嗘暟缁勶紝1琛ㄧず宀涳紝-1琛ㄧず娲�
            //鐩爣polygon绱㈠紩鍒楄〃 -1鏍囩ず娌℃湁琚换浣昿olygon鍖呭惈锛�
            var targetArray = [];
            for (var i = 1; i < polygonArrayTemp.length; i++) {
              for (var j = i - 1; j >= 0; j--) {
                targetArray[i] = -1;
                if (polygonArrayTemp[j].getBounds().containsBounds(polygonArrayTemp[i].getBounds())) {
                  CCWIdent[i] = CCWIdent[j] * -1;
                  if (CCWIdent[i] < 0) {
                    targetArray[i] = j;
                  }
                  break;
                }
              }
            }
            for (var i = 0; i < polygonArrayTemp.length; i++) {
              if (CCWIdent[i] > 0) {
                polygonArray.push(polygonArrayTemp[i]);
              } else {
                polygonArray[targetArray[i]].components = polygonArray[targetArray[i]].components.concat(polygonArrayTemp[i].components);
                //鍗犱綅
                polygonArray.push('');
              }
            }
          } else {
            //鏍规嵁闈㈢Н鎺掑簭
            //ServerGeometry.bubbleSort(areaArray, polygonArrayTemp,geoTopo);
            var polygonArray = new Array();
            for (var i = 0; i < polygonArrayTemp.length; i++) {
              if (geoTopo[i] && geoTopo[i] == -1) {
                CCWArray = CCWArray.concat(polygonArrayTemp[i].components);
              } else {
                if (CCWArray.length > 0 && polygonArray.length > 0) {
                  polygonArray[polygonArray.length - 1].components = polygonArray[polygonArray.length - 1].components.concat(CCWArray);
                  CCWArray = [];
                }
                polygonArray.push(polygonArrayTemp[i]);
              }
              if (i == len - 1) {
                var polyLength = polygonArray.length;
                if (!!polyLength) {
                  polygonArray[polyLength - 1].components = polygonArray[polyLength - 1].components.concat(CCWArray);
                } else {
                  for (var k = 0, length = CCWArray.length; k < length; k++) {
                    polygonArray.push(new _Polygon2.default(CCWArray));
                  }
                }
              }
            }
          }
          return new _MultiPolygon2.default(polygonArray);
        }

        /*
     * Method: toGeoRegionEPS
     * 灏嗘湇鍔＄鐨勯潰鍑犱綍瀵硅薄杞崲涓哄鎴风鍑犱綍瀵硅薄銆�
     * 绫诲瀷涓篜olygon銆�
     *
     * Returns
     * {<SuperMap.Geometry>} 杞崲鍚庣殑瀹㈡埛绔嚑浣曞璞°€�
     */

      }, {
        key: 'toGeoRegionEPS',
        value: function toGeoRegionEPS() {
          var me = this,
              geoParts = me.parts || [],
              geoTopo = me.partTopo || [],
              geoPoints = me.points || [],
              len = geoParts.length;

          if (len <= 0) {
            return null;
          }
          var polygonArray = [];
          var pointList = [];
          var lineEPS;
          if (len == 1) {
            for (var i = 0; i < geoPoints.length; i++) {
              pointList.push(new _Point2.default(geoPoints[i].x, geoPoints[i].y));
            }

            lineEPS = _LineString2.default.createLineEPS(pointList);
            polygonArray.push(new _Polygon2.default([new _LinearRing2.default(lineEPS)]));
            pointList = [];
            return new _MultiPolygon2.default(polygonArray);
          }
          //澶勭悊澶嶆潅闈�
          var CCWArray = [];
          var areaArray = [];
          var polygonArrayTemp = [];
          //polyon宀涙礊鏍囪瘑鏁扮粍锛屽垵濮嬮兘鏄矝銆�
          var CCWIdent = [];
          for (var i = 0, pointIndex = 0; i < len; i++) {
            for (var j = 0; j < geoParts[i]; j++) {
              pointList.push(new _Point2.default(geoPoints[pointIndex + j].x, geoPoints[pointIndex + j].y));
            }
            pointIndex += geoParts[i];

            lineEPS = _LineString2.default.createLineEPS(pointList);
            var polygon = new _Polygon2.default([new _LinearRing2.default(lineEPS)]);
            pointList = [];
            polygonArrayTemp.push(polygon);
            CCWIdent.push(1);
            areaArray.push(polygon.getArea());
          }
          //鏍规嵁闈㈢Н鎺掑簭
          ServerGeometry.bubbleSort(areaArray, polygonArrayTemp, geoTopo);
          //iServer 9D鏂板瀛楁
          if (geoTopo.length === 0) {
            //宀涙礊搴曞眰鍒ゆ柇鍘熷垯锛氬皢鎵€鏈夌殑瀛愬璞℃寜鐓ч潰绉帓搴忥紝闈㈢Н鏈€澶х殑鐩存帴鍒ゅ畾涓哄矝锛�1锛夛紝浠庨潰绉澶х殑寮€濮嬪鐞嗭紝
            // 濡傛灉鍙戠幇璇ュ璞″湪鏌愪釜闈㈢Н澶т簬瀹冪殑瀵硅薄涔嬩腑锛堝嵆琚寘鍚級锛屽垯鏍规嵁鍖呭惈瀹冪殑瀵硅薄鐨勬爣璇嗭紙1 or -1锛夛紝鎸囧畾鍏舵爣璇嗭紙-1 or 1锛夛紝
            // 渚濇澶勭悊瀹屾墍鏈夊璞★紝灏卞緱鍒颁簡涓€涓爣璇嗘暟缁勶紝1琛ㄧず宀涳紝-1琛ㄧず娲�
            //鐩爣polygon绱㈠紩鍒楄〃 -1鏍囩ず娌℃湁琚换浣昿olygon鍖呭惈锛�
            var targetArray = [];
            for (var i = 1; i < polygonArrayTemp.length; i++) {
              for (var j = i - 1; j >= 0; j--) {
                targetArray[i] = -1;
                if (polygonArrayTemp[j].getBounds().containsBounds(polygonArrayTemp[i].getBounds())) {
                  CCWIdent[i] = CCWIdent[j] * -1;
                  if (CCWIdent[i] < 0) {
                    targetArray[i] = j;
                  }
                  break;
                }
              }
            }
            for (var i = 0; i < polygonArrayTemp.length; i++) {
              if (CCWIdent[i] > 0) {
                polygonArray.push(polygonArrayTemp[i]);
              } else {
                polygonArray[targetArray[i]].components = polygonArray[targetArray[i]].components.concat(polygonArrayTemp[i].components);
                //鍗犱綅
                polygonArray.push('');
              }
            }
          } else {
            //鏍规嵁闈㈢Н鎺掑簭
            var polygonArray = new Array();
            for (var i = 0; i < polygonArrayTemp.length; i++) {
              if (geoTopo[i] && geoTopo[i] == -1) {
                CCWArray = CCWArray.concat(polygonArrayTemp[i].components);
              } else {
                if (CCWArray.length > 0 && polygonArray.length > 0) {
                  polygonArray[polygonArray.length - 1].components = polygonArray[polygonArray.length - 1].components.concat(CCWArray);
                  CCWArray = [];
                }
                polygonArray.push(polygonArrayTemp[i]);
              }
              if (i == len - 1) {
                var polyLength = polygonArray.length;
                if (!!polyLength) {
                  polygonArray[polyLength - 1].components = polygonArray[polyLength - 1].components.concat(CCWArray);
                } else {
                  for (var k = 0, length = CCWArray.length; k < length; k++) {
                    polygonArray.push(new _Polygon2.default(CCWArray));
                  }
                }
              }
            }
          }
          return new _MultiPolygon2.default(polygonArray);
        }

        /*
     * Function: ServerGeometry.fromJson
     * 灏� JSON 瀵硅薄琛ㄧず鏈嶅姟绔嚑浣曞璞¤浆鎹负 ServerGeometry銆�
     *
     * Parameters:
     * jsonObject - {Object} 瑕佽浆鎹㈢殑 JSON 瀵硅薄銆�
     *
     * Returns:
     * {<SuperMap.ServerGeometry>} 杞寲鍚庣殑 ServerGeometry 瀵硅薄銆�
     */

      }], [{
        key: 'fromJson',
        value: function fromJson(jsonObject) {
          if (!jsonObject) {
            return;
          }
          return new ServerGeometry({
            id: jsonObject.id,
            style: _ServerStyle2.default.fromJson(jsonObject.style),
            parts: jsonObject.parts,
            partTopo: jsonObject.partTopo,
            points: jsonObject.points,
            center: jsonObject.center,
            length: jsonObject.length,
            maxM: jsonObject.maxM,
            minM: jsonObject.minM,
            type: jsonObject.type
          });
        }
      }, {
        key: 'fromGeometry',


        /*
     * Function: ServerGeometry.fromGeometry
     * 灏嗗鎴风Geometry杞崲鎴愭湇鍔＄ServerGeometry銆�
     *
     * Parameters:
     * geometry - {<SuperMap.Geometry>} 瑕佽浆鎹㈢殑瀹㈡埛绔疓eometry瀵硅薄銆�

     *
     * Returns:
     * {<SuperMap.ServerGeometry>} 杞寲鍚庣殑 ServerGeometry 瀵硅薄銆�
     */
        value: function fromGeometry(geometry) {
          if (!geometry) {
            return;
          }
          var id = 0,
              parts = [],
              points = [],
              type = null,
              icomponents = geometry.components,
              className = geometry.CLASS_NAME,
              prjCoordSys = { "epsgCode": geometry.SRID };

          if (!isNaN(geometry.id)) {
            id = geometry.id;
          }
          //鍧戠埞鐨勬敼娉曪紝娌℃硶锛屼负浜嗘敮鎸佹€佸娍鏍囩粯锛屾湁鏃堕棿灏卞緱鍏ㄦ敼
          if (className != "SuperMap.Geometry.LinearRing" && className != "SuperMap.Geometry.LineString" && (geometry instanceof _MultiPoint2.default || geometry instanceof _MultiLineString2.default)) {
            var ilen = icomponents.length;
            for (var i = 0; i < ilen; i++) {
              var partPointsCount = icomponents[i].getVertices().length;
              parts.push(partPointsCount);
              for (var j = 0; j < partPointsCount; j++) {
                points.push(new _Point2.default(icomponents[i].getVertices()[j].x, icomponents[i].getVertices()[j].y));
              }
            }
            //杩欓噷className涓嶆槸澶氱偣灏卞叏閮ㄦ槸绠楃嚎
            type = className == "SuperMap.Geometry.MultiPoint" ? _REST.GeometryType.POINT : _REST.GeometryType.LINE;
          } else if (geometry instanceof _MultiPolygon2.default) {
            var ilen = icomponents.length;
            for (var i = 0; i < ilen; i++) {
              var polygon = icomponents[i],
                  linearRingOfPolygon = polygon.components,
                  linearRingOfPolygonLen = linearRingOfPolygon.length;
              for (var j = 0; j < linearRingOfPolygonLen; j++) {
                var partPointsCount = linearRingOfPolygon[j].getVertices().length + 1;
                parts.push(partPointsCount);
                for (var k = 0; k < partPointsCount - 1; k++) {
                  points.push(new _Point2.default(linearRingOfPolygon[j].getVertices()[k].x, linearRingOfPolygon[j].getVertices()[k].y));
                }
                points.push(new _Point2.default(linearRingOfPolygon[j].getVertices()[0].x, linearRingOfPolygon[j].getVertices()[0].y));
              }
            }
            type = _REST.GeometryType.REGION;
          } else if (geometry instanceof _Polygon2.default) {
            var ilen = icomponents.length;
            for (var i = 0; i < ilen; i++) {
              var partPointsCount = icomponents[i].getVertices().length + 1;
              parts.push(partPointsCount);
              for (var j = 0; j < partPointsCount - 1; j++) {
                points.push(new _Point2.default(icomponents[i].getVertices()[j].x, icomponents[i].getVertices()[j].y));
              }
              points.push(new _Point2.default(icomponents[i].getVertices()[0].x, icomponents[i].getVertices()[0].y));
            }
            type = _REST.GeometryType.REGION;
          } else {
            var geometryVerticesCount = geometry.getVertices().length;
            for (var j = 0; j < geometryVerticesCount; j++) {
              points.push(new _Point2.default(geometry.getVertices()[j].x, geometry.getVertices()[j].y));
            }
            if (geometry instanceof _LinearRing2.default) {
              points.push(new _Point2.default(geometry.getVertices()[0].x, geometry.getVertices()[0].y));
              geometryVerticesCount++;
            }
            parts.push(geometryVerticesCount);
            type = geometry instanceof _Point2.default ? _REST.GeometryType.POINT : _REST.GeometryType.LINE;
          }

          return new ServerGeometry({
            id: id,
            style: null,
            parts: parts,
            points: points,
            type: type,
            prjCoordSys: prjCoordSys
          });
        }
      }, {
        key: 'IsClockWise',


        /*
     * Function: SuperMap.Geometry.IsClockWise
     * 鍒ゆ柇linearRing涓殑鐐圭殑椤哄簭锛岄『鏃堕拡锛熼€嗘椂閽�
     * 杩斿洖鍊煎ぇ浜�0, 閫嗘椂閽�; 灏忎簬0, 椤烘椂閽�
     *
     * Parameters:
     * geometry - {<SuperMap.Geometry>} 瑕佽浆鎹㈢殑瀹㈡埛绔疓eometry瀵硅薄銆�

     *
     * Returns:
     * {<Number>}銆�
     */
        value: function IsClockWise(points) {
          var length = points.length;
          if (length < 3) {
            return 0.0;
          }
          var s = points[0].y * (points[length - 1].x - points[1].x);
          points.push(points[0]);
          for (var i = 1; i < length; i++) {
            s += points[i].y * (points[i - 1].x - points[i + 1].x);
          }
          return s * 0.5;
        }
      }, {
        key: 'bubbleSort',
        value: function bubbleSort(areaArray, pointList, geoTopo) {
          for (var i = 0; i < areaArray.length; i++) {
            for (var j = 0; j < areaArray.length; j++) {
              if (areaArray[i] > areaArray[j]) {
                var d = areaArray[j];
                areaArray[j] = areaArray[i];
                areaArray[i] = d;
                var b = pointList[j];
                pointList[j] = pointList[i];
                pointList[i] = b;
                if (geoTopo && geoTopo.length > 0) {
                  var c = geoTopo[j];
                  geoTopo[j] = geoTopo[i];
                  geoTopo[i] = c;
                }
              }
            }
          }
        }
      }]);

      return ServerGeometry;
    }();

    exports.default = ServerGeometry;

    _SuperMap2.default.ServerGeometry = ServerGeometry;

    /***/ }),
  /* 17 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _ServerInfo = __webpack_require__(43);

    var _ServerInfo2 = _interopRequireDefault(_ServerInfo);

    var _TokenServiceParameter = __webpack_require__(44);

    var _TokenServiceParameter2 = _interopRequireDefault(_TokenServiceParameter);

    var _KeyServiceParameter = __webpack_require__(42);

    var _KeyServiceParameter2 = _interopRequireDefault(_KeyServiceParameter);

    var _FetchRequest = __webpack_require__(45);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * @name SecurityManager
     * @memberOf SuperMap
     * @namespace
     * @description 瀹夊叏绠＄悊涓績锛屾彁渚沬Server,iPortal,Online缁熶竴鏉冮檺璁よ瘉绠＄悊
     *  > 浣跨敤璇存槑锛�
     *  > 鍒涘缓浠讳綍涓€涓湇鍔′箣鍓嶈皟鐢▄@link SuperMap.SecurityManager.registerToken}鎴�
     *  > {@link SuperMap.SecurityManager.registerKey}娉ㄥ唽鍑嵁銆�
     *  > 鍙戦€佽姹傛椂鏍规嵁url鎴栬€呮湇鍔d鑾峰彇鐩稿簲鐨刱ey鎴栬€卼oken骞惰嚜鍔ㄦ坊鍔犲埌鏈嶅姟鍦板潃涓�
     */
    _SuperMap2.default.SecurityManager = {

      INNER_WINDOW_WIDTH: 600,
      INNER_WINDOW_HEIGHT: 600,
      /**
       * @description 浠庢湇鍔″櫒鑾峰彇涓€涓猼oken,鍦ㄦ涔嬪墠瑕佹敞鍐屾湇鍔″櫒淇℃伅
       * @param url {string}-鏈嶅姟鍣ㄥ煙鍚�+绔彛锛屽锛歨ttp://localhost:8092
       * @param tokenParam -{SuperMap.TokenServiceParameter} token鐢宠鍙傛暟
       * @return {Promise}
       */
      generateToken: function generateToken(url, tokenParam) {
        var serverInfo = this.servers[url];
        if (!serverInfo) {
          return;
        }
        return _FetchRequest.FetchRequest.post(serverInfo.tokenServiceUrl, JSON.stringify(tokenParam.toJSON())).then(function (response) {
          return response.text();
        });
      },

      /**
       * @description 娉ㄥ唽瀹夊叏鏈嶅姟鍣ㄧ浉鍏充俊鎭�
       * @param serverInfos -{SuperMap.ServerInfo} 鏈嶅姟鍣ㄤ俊鎭�
       */
      registerServers: function registerServers(serverInfos) {
        this.servers = this.servers || {};
        if (!_SuperMap2.default.Util.isArray(serverInfos)) {
          serverInfos = [serverInfos];
        }
        for (var i = 0; i < serverInfos.length; i++) {
          var serverInfo = serverInfos[i];
          this.servers[serverInfo.server] = serverInfo;
        }
      },

      /**
       * @description 鏈嶅姟璇锋眰閮戒細鑷姩甯︿笂杩欎釜token
       * @param url {string} -鏈嶅姟鍣ㄥ煙鍚�+绔彛锛氬http://localhost:8090
       * @param token -{string} token
       */
      registerToken: function registerToken(url, token) {
        this.tokens = this.tokens || {};
        if (!url || !token) {
          return;
        }
        var domain = this._getTokenStorageKey(url);
        this.tokens[domain] = token;
      },

      /**
       * @description 娉ㄥ唽key,ids涓烘暟缁�(瀛樺湪涓€涓猭ey瀵瑰簲澶氫釜鏈嶅姟)
       * @param ids -{Array} 鍙互鏄湇鍔d鏁扮粍鎴栬€卽rl鍦板潃鏁扮粍鎴栬€厀ebAPI绫诲瀷鏁扮粍
       * @param key -{string} key
       */
      registerKey: function registerKey(ids, key) {
        this.keys = this.keys || {};
        if (!ids || ids.length < 1 || !key) {
          return;
        }

        ids = _SuperMap2.default.Util.isArray(ids) ? ids : [ids];
        for (var i = 0; i < ids.length; i++) {
          var id = this._getUrlRestString(ids[0]) || ids[0];
          this.keys[id] = key;
        }
      },

      /**
       * @description 鑾峰彇鏈嶅姟鍣ㄤ俊鎭�
       * @param url {string}-鏈嶅姟鍣ㄥ煙鍚�+绔彛锛屽锛歨ttp://localhost:8092
       * @returns {SuperMap.ServerInfo} 鏈嶅姟鍣ㄤ俊鎭�
       */
      getServerInfo: function getServerInfo(url) {
        this.servers = this.servers || {};
        return this.servers[url];
      },

      /**
       * @description 鏍规嵁Url鑾峰彇token
       * @param url -{string} 鏈嶅姟鍣ㄥ煙鍚�+绔彛锛屽锛歨ttp://localhost:8092
       * @returns {string} token
       */
      getToken: function getToken(url) {
        if (!url) {
          return;
        }
        this.tokens = this.tokens || {};
        var domain = this._getTokenStorageKey(url);
        return this.tokens[domain];
      },

      /**
       * @description 鏍规嵁Url鑾峰彇key
       * @param id -{string} id
       * @returns {string} key
       */
      getKey: function getKey(id) {
        this.keys = this.keys || {};
        var key = this._getUrlRestString(id) || id;
        return this.keys[key];
      },

      /**
       * @description Online鐧诲綍楠岃瘉
       * @param callbackLocation -{string} 璺宠浆浣嶇疆
       * @param newTab -{boolean}鏄惁鏂扮獥鍙ｆ墦寮€
       */
      loginOnline: function loginOnline(callbackLocation, newTab) {
        var loginUrl = _SuperMap2.default.SecurityManager.SSO + "/login?service=" + callbackLocation;
        this._open(loginUrl, newTab);
      },

      /**
       * @description iPortal鐧诲綍楠岃瘉
       * @param url -{string} iportal棣栭〉鍦板潃
       * @param username -{string} 鐢ㄦ埛鍚�
       * @param password -{string} 瀵嗙爜
       * @returns {Promise}
       */
      loginiPortal: function loginiPortal(url, username, password) {
        var end = url.substr(url.length - 1, 1);
        url += end === "/" ? "web/login.json" : "/web/login.json";
        var loginInfo = {
          username: username && username.toString(),
          password: password && password.toString()
        };
        loginInfo = JSON.stringify(loginInfo);
        var requestOptions = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          withCredentials: true
        };
        return _FetchRequest.FetchRequest.post(url, loginInfo, requestOptions).then(function (response) {
          return response.json();
        });
      },

      /**
       * @description iPortal鐧诲綍楠岃瘉
       * @param url -{string} iportal棣栭〉鍦板潃
       * @returns {Promise}
       */
      logoutiPortal: function logoutiPortal(url) {
        var end = url.substr(url.length - 1, 1);
        url += end === "/" ? "services/security/logout" : "/services/security/logout";

        var requestOptions = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          withCredentials: true,
          withoutFormatSuffix: true
        };
        return _FetchRequest.FetchRequest.get(url, "", requestOptions).then(function () {
          return true;
        }).catch(function () {
          return false;
        });
      },

      /**
       * @description iManager鐧诲綍楠岃瘉
       * @param url -{string} iManager鍦板潃銆�<br>
       *                      鍦板潃鍙傛暟涓篿Manager棣栭〉鍦板潃锛屽锛� http://localhost:8390/imanager<br>
       * @param loginInfoParams -{Object} iManager 鐧诲綍鍙傛暟<br>
       *        userName -{string} 鐢ㄦ埛鍚�<br>
       *        password-{string} 瀵嗙爜
       * @param options -{Object} <br>
       *        isNewTab -{boolean} 涓嶅悓鍩熸椂鏄惁鍦ㄦ柊绐楀彛鎵撳紑鐧诲綍椤甸潰
       * @return {Promise}
       */
      loginManager: function loginManager(url, loginInfoParams, options) {
        if (!_SuperMap2.default.Util.isInTheSameDomain(url)) {
          var isNewTab = options ? options.isNewTab : true;
          this._open(url, isNewTab);
          return;
        }
        var end = url.substr(url.length - 1, 1);
        var requestUrl = end === "/" ? url + "icloud/security/tokens.json" : url + "/icloud/security/tokens.json";
        var params = loginInfoParams || {};
        var loginInfo = {
          username: params.userName && params.userName.toString(),
          password: params.password && params.password.toString()
        };
        loginInfo = JSON.stringify(loginInfo);
        var requestOptions = {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          }
        };
        var me = this;
        return _FetchRequest.FetchRequest.post(requestUrl, loginInfo, requestOptions).then(function (response) {
          response.text().then(function (result) {
            me.imanagerToken = result;
            return result;
          });
        });
      },

      /**
       * @description 娓呯┖鍏ㄩ儴楠岃瘉淇℃伅
       */
      destroyAllCredentials: function destroyAllCredentials() {
        this.keys = null;
        this.tokens = null;
        this.servers = null;
      },
      /**
       * @description 娓呯┖浠ょ墝淇℃伅
       */
      destroyToken: function destroyToken(url) {
        if (!url) {
          return;
        }
        var domain = this._getTokenStorageKey(url);
        this.tokens = this.tokens || {};
        if (this.tokens[domain]) {
          delete this.tokens[domain];
        }
      },
      /**
       * @description 娓呯┖鏈嶅姟鎺堟潈鐮�
       */
      destroyKey: function destroyKey(id) {
        if (!id) {
          return;
        }
        this.keys = this.keys || {};
        var key = this._getUrlRestString(id) || id;
        if (this.keys[key]) {
          delete this.keys[key];
        }
      },

      _open: function _open(url, newTab) {
        newTab = newTab != null ? newTab : true;
        var offsetX = window.screen.availWidth / 2 - this.INNER_WINDOW_WIDTH / 2;
        var offsetY = window.screen.availHeight / 2 - this.INNER_WINDOW_HEIGHT / 2;
        var options = "height=" + this.INNER_WINDOW_HEIGHT + ", width=" + this.INNER_WINDOW_WIDTH + ",top=" + offsetY + ", left=" + offsetX + ",toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no";
        if (newTab) {
          window.open(url, 'login');
        } else {
          window.open(url, 'login', options);
        }
      },

      _getTokenStorageKey: function _getTokenStorageKey(url) {
        var patten = /(.*?):\/\/([^\/]+)/i;
        var result = url.match(patten);
        if (!result) {
          return url;
        }
        return result[0];
      },

      _getUrlRestString: function _getUrlRestString(url) {
        if (!url) {
          return url;
        }
        var patten = /http:\/\/(.*\/rest)/i;
        var result = url.match(patten);
        if (!result) {
          return url;
        }
        return result[0];
      }

    };
    _SuperMap2.default.SecurityManager.SSO = "https://sso.supermap.com";
    _SuperMap2.default.SecurityManager.ONLINE = "http://www.supermapol.com";

    /***/ }),
  /* 18 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _olDebug = __webpack_require__(7);

    var _olDebug2 = _interopRequireDefault(_olDebug);

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _GeoJSON = __webpack_require__(35);

    var _GeoJSON2 = _interopRequireDefault(_GeoJSON);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    _olDebug2.default.supermap = _olDebug2.default.supermap || {};

    /**
     * @class ol.supermap.Util
     * @classdesc 宸ュ叿绫�
     */

    var Util = function () {
      function Util() {
        _classCallCheck(this, Util);
      }

      /**
       * @function ol.supermap.Util.toGeoJSON
       * @description 灏嗕紶鍏ュ璞¤浆涓� GeoJSON 鏍煎紡
       * @param smObj - {Object} 寰呰浆鍙傛暟
       */


      _createClass(Util, null, [{
        key: 'toGeoJSON',
        value: function toGeoJSON(smObj) {
          if (smObj) {
            var format = new _GeoJSON2.default();
            return JSON.parse(format.write(smObj));
          }
        }

        /**
         * @function ol.supermap.Util.toSuperMapGeometry
         * @description 灏� geoJSON 瀵硅薄杞负SuperMap鍑犱綍鍥惧舰
         * @param geoJSON - {Object} geoJSON 瀵硅薄
         */

      }, {
        key: 'toSuperMapGeometry',
        value: function toSuperMapGeometry(geoJSON) {
          if (geoJSON && geoJSON.type) {
            var format = new _GeoJSON2.default();
            var result = format.read(geoJSON, "FeatureCollection");
            return result[0].geometry;
          }
        }

        /**
         * @function ol.supermap.Util.resolutionToScale
         * @description 閫氳繃鍒嗚鲸鐜囪绠楁瘮渚嬪昂
         * @param resolution - {number} 鍒嗚鲸鐜�
         * @param dpi - {number} 灞忓箷鍒嗚鲸鐜�
         * @param mapUnit - {string} 鍦板浘鍗曚綅
         * @return {number} 姣斾緥灏�
         */

      }, {
        key: 'resolutionToScale',
        value: function resolutionToScale(resolution, dpi, mapUnit) {
          var inchPerMeter = 1 / 0.0254;
          // 鍦扮悆鍗婂緞銆�
          var meterPerMapUnit = this.getMeterPerMapUnit(mapUnit);
          var scale = resolution * dpi * inchPerMeter * meterPerMapUnit;
          scale = 1 / scale;
          return scale;
        }

        /**
         * @function ol.supermap.Util.toSuperMapBounds
         * @description 杞负SuperMapBounds鏍煎紡
         * @param bounds {Array<number>} bounds鏁扮粍
         * @return {SuperMap.Bounds}
         */

      }, {
        key: 'toSuperMapBounds',
        value: function toSuperMapBounds(bounds) {
          return new _SuperMap2.default.Bounds(bounds[0], bounds[1], bounds[2], bounds[3]);
        }

        /**
         * @function ol.supermap.Util.scaleToResolution
         * @description 閫氳繃姣斾緥灏鸿绠楀垎杈ㄧ巼
         * @param scale - {number} 姣斾緥灏�
         * @param dpi - {number} 灞忓箷鍒嗚鲸鐜�
         * @param mapUnit - {string} 鍦板浘鍗曚綅
         * @return {number} 鍒嗚鲸鐜�
         */

      }, {
        key: 'scaleToResolution',
        value: function scaleToResolution(scale, dpi, mapUnit) {
          var inchPerMeter = 1 / 0.0254;
          var meterPerMapUnitValue = this.getMeterPerMapUnit(mapUnit);
          var resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue;
          resolution = 1 / resolution;
          return resolution;
        }

        /**
         * @private
         * @function ol.supermap.Util.getMeterPerMapUnit
         * @description 鑾峰彇姣忓湴鍥惧崟浣嶅灏戠背
         * @param mapUnit mapUnit - {string} 鍦板浘鍗曚綅
         * @return {number}
         */

      }, {
        key: 'getMeterPerMapUnit',
        value: function getMeterPerMapUnit(mapUnit) {
          var earchRadiusInMeters = 6378137;
          var meterPerMapUnit;
          if (mapUnit === _SuperMap2.default.Unit.METER) {
            meterPerMapUnit = 1;
          } else if (mapUnit === _SuperMap2.default.Unit.DEGREE) {
            // 姣忓害琛ㄧず澶氬皯绫炽€�
            meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
          } else if (mapUnit === _SuperMap2.default.Unit.KILOMETER) {
            meterPerMapUnit = 1.0E-3;
          } else if (mapUnit === _SuperMap2.default.Unit.INCH) {
            meterPerMapUnit = 1 / 2.5399999918E-2;
          } else if (mapUnit === _SuperMap2.default.Unit.FOOT) {
            meterPerMapUnit = 0.3048;
          } else {
            return meterPerMapUnit;
          }
          return meterPerMapUnit;
        }

        /**
         * @function ol.supermap.Util.isArray
         * @description 鍒ゆ柇鏄惁涓烘暟缁勬牸寮�
         * @param obj - {Object} 寰呭垽鏂璞�
         * @return {boolean}
         */

      }, {
        key: 'isArray',
        value: function isArray(obj) {
          return Object.prototype.toString.call(obj) == '[object Array]';
        }

        /**
         * @function ol.supermap.Util.Csv2GeoJSON
         * @description 灏� csv 鏍煎紡杞负 GeoJSON
         * @param csv - {Object} csv 瀵硅薄
         * @param options - {Object} 杞崲鍙傛暟
         */

      }, {
        key: 'Csv2GeoJSON',
        value: function Csv2GeoJSON(csv, options) {
          var defaultOptions = {
            titles: ['lon', 'lat'],
            latitudeTitle: 'lat',
            longitudeTitle: 'lon',
            fieldSeparator: ',',
            lineSeparator: '\n',
            deleteDoubleQuotes: true,
            firstLineTitles: false
          };
          options = options || defaultOptions;
          var _propertiesNames = [];
          if (typeof csv === 'string') {
            var titulos = options.titles;
            if (options.firstLineTitles) {
              csv = csv.split(options.lineSeparator);
              if (csv.length < 2) return;
              titulos = csv[0];
              csv.splice(0, 1);
              csv = csv.join(options.lineSeparator);
              titulos = titulos.trim().split(options.fieldSeparator);
              for (var i = 0; i < titulos.length; i++) {
                titulos[i] = _deleteDoubleQuotes(titulos[i]);
              }
              options.titles = titulos;
            }
            for (var i = 0; i < titulos.length; i++) {
              var prop = titulos[i].toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '_');
              if (prop == '' || prop == '_') prop = 'prop-' + i;
              _propertiesNames[i] = prop;
            }
            csv = _csv2json(csv);
          }
          return csv;

          function _deleteDoubleQuotes(cadena) {
            if (options.deleteDoubleQuotes) cadena = cadena.trim().replace(/^"/, "").replace(/"$/, "");
            return cadena;
          }

          function _csv2json(csv) {
            var json = {};
            json["type"] = "FeatureCollection";
            json["features"] = [];
            var titulos = options.titles;
            csv = csv.split(options.lineSeparator);
            for (var num_linea = 0; num_linea < csv.length; num_linea++) {
              var campos = csv[num_linea].trim().split(options.fieldSeparator),
                  lng = parseFloat(campos[titulos.indexOf(options.longitudeTitle)]),
                  lat = parseFloat(campos[titulos.indexOf(options.latitudeTitle)]);

              var isInRange = lng < 180 && lng > -180 && lat < 90 && lat > -90;
              if (!(campos.length == titulos.length && isInRange)) {
                continue;
              }

              var feature = {};
              feature["type"] = "Feature";
              feature["geometry"] = {};
              feature["properties"] = {};
              feature["geometry"]["type"] = "Point";
              feature["geometry"]["coordinates"] = [lng, lat];
              for (var i = 0; i < titulos.length; i++) {
                if (titulos[i] != options.latitudeTitle && titulos[i] != options.longitudeTitle) {
                  feature["properties"][_propertiesNames[i]] = _deleteDoubleQuotes(campos[i]);
                }
              }
              json["features"].push(feature);
            }
            return json;
          }
        }

        /**
         * @function ol.supermap.Util.createCanvasContext2D
         * @description 鍒涘缓2D鐢诲竷
         * @param opt_width - {number} 鐢诲竷瀹藉害
         * @param opt_height - {number} 鐢诲竷楂樺害
         */

      }, {
        key: 'createCanvasContext2D',
        value: function createCanvasContext2D(opt_width, opt_height) {
          var canvas = document.createElement('CANVAS');
          if (opt_width) {
            canvas.width = opt_width;
          }
          if (opt_height) {
            canvas.height = opt_height;
          }
          return canvas.getContext('2d');
        }
      }]);

      return Util;
    }();

    exports.default = Util;
    ;

    _olDebug2.default.supermap.Util = Util;

    /***/ }),
  /* 19 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _olDebug = __webpack_require__(7);

    var _olDebug2 = _interopRequireDefault(_olDebug);

    var _iClient = __webpack_require__(47);

    var _iClient2 = _interopRequireDefault(_iClient);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    _olDebug2.default.supermap = _olDebug2.default.supermap || {};
    _olDebug2.default.supermap.control = _olDebug2.default.supermap.control || {};

    /**
     * @class ol.supermap.control.Logo
     * @classdesc Logo鎺т欢銆傞粯璁や笉鏄剧ず锛岄渶鎵嬪姩娣诲姞鎺т欢銆�
     * @extends ol.control.Control{@linkdoc-openlayers/ol.control.Control}
     * @example
     *      var control = new ol.supermap.control.Logo();
     *      map.addControl(control);
     * @param options - {Object} logo鎺т欢閰嶇疆椤广€傞厤缃」鏈夊涓�:</br>
     *        imageUrl - {string} logo鍥剧墖鍦板潃銆�</br>
     *        width - {number} logo鍥剧墖瀹姐€�</br>
     *        height - {number} logo鍥剧墖楂樸€�</br>
     *        link - {string} 璺宠浆閾炬帴銆�</br>
     *        alt - {string} logo鍥剧墖澶辨晥鏃舵樉绀烘枃鏈€�
     */

    var Logo = function (_ol$control$Control) {
      _inherits(Logo, _ol$control$Control);

      function Logo(options) {
        _classCallCheck(this, Logo);

        options = options || {};
        options.imageUrl = options.imageUrl || null;
        options.width = options.width || null;
        options.height = options.height || null;
        options.link = options.link || "http://iclient.supermapol.com";
        options.alt = options.alt || "SuperMap iClient";

        var _this = _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, options));

        _this.options = options;
        _this.element = options.element = initLayerout.call(_this);
        /*
         * @function ol.supermap.control.Logo.prototype.initLayerout
         * @description 鍒濆鍖栧浘灞備俊鎭�
         */
        function initLayerout() {
          var className = 'ol-control-logo ol-unselectable ol-control';
          var div = document.createElement("div");
          div.className = className;

          setDivStyle.call(this, div);

          var imgSrc = _iClient2.default;
          if (this.options.imageUrl) {
            imgSrc = this.options.imageUrl;
          }
          var alt = this.options.alt;
          var link = this.options.link;

          var imageWidth = "94px";
          var imageHeight = "29px";
          var styleSize = "width:" + imageWidth + ";height:" + imageHeight + ";";
          if (this.options.imageUrl) {
            imageWidth = this.options.width;
            imageHeight = this.options.height;
            styleSize = "width:" + imageWidth + ";height:" + imageHeight + ";";
            if (!imageWidth || !imageHeight) {
              styleSize = "";
            }
          }

          div.innerHTML = "<a href='" + link + "' target='_blank' style='border: none;display: block;'>" + "<img src=" + imgSrc + " alt='" + alt + "'  style='border: none;" + styleSize + "white-space: nowrap;margin-bottom: 2px'></a>";
          return div;
        }
        /*
         * @function ol.supermap.control.Logo.prototype.setDivStyle
         * @div 鑾峰彇div瀵硅薄
         * @description 璁剧疆瀵硅薄style
         */
        function setDivStyle(div) {
          var attributionsElem = document.getElementsByClassName('ol-attribution');
          attributionsElem = attributionsElem && attributionsElem[0];
          var attrHeight = attributionsElem && attributionsElem.clientHeight || 29;
          div.style.bottom = parseInt(attrHeight) + 6 + "px";
          div.style.right = "4px";
          div.style.marginTop = 0;
          div.style.marginLeft = 0;
          div.style.marginBottom = 0;
          div.style.marginRight = 0;
          var logoStyle = document.createElement('style');
          logoStyle.type = 'text/css';
          logoStyle.innerHTML = '.ol-control-logo,.ol-control-logo:hover {' + 'background-color: rgba(255,255,255,0);' + '}';
          document.getElementsByTagName('head')[0].appendChild(logoStyle);
        }

        return _this;
      }

      return Logo;
    }(_olDebug2.default.control.Control);

    exports.default = Logo;

    _olDebug2.default.supermap.control.Logo = Logo;

    /***/ }),
  /* 20 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _olDebug = __webpack_require__(7);

    var _olDebug2 = _interopRequireDefault(_olDebug);

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _ServerGeometry = __webpack_require__(16);

    var _ServerGeometry2 = _interopRequireDefault(_ServerGeometry);

    __webpack_require__(17);

    var _Util = __webpack_require__(18);

    var _Util2 = _interopRequireDefault(_Util);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class ol.source.ImageSuperMapRest
     * @classdesc SuperMap iServer Image鍥惧眰婧愩€�
     * @param options - {Object} 鏈嶅姟鍙傛暟锛�<br>
     *        url - {string} 鏈嶅姟鍦板潃銆�<br>
     *        attributions - {string} 鐗堟潈鎻忚堪淇℃伅銆�<br>
     *        serverType {SuperMap.ServerType} 鏈嶅姟绫诲瀷銆�
     * @extends ol.source.TileImage{@linkdoc-openlayers/ol.source.TileImage}
     */
    var ImageSuperMapRest = function (_ol$source$TileImage) {
      _inherits(ImageSuperMapRest, _ol$source$TileImage);

      function ImageSuperMapRest(options) {
        _classCallCheck(this, ImageSuperMapRest);

        if (options.url === undefined) {
          return _possibleConstructorReturn(_this);
        }
        options.attributions = options.attributions || new _olDebug2.default.Attribution({
          html: "Map Data <span>漏 <a href='http://support.supermap.com.cn/product/iServer.aspx' target='_blank'>SuperMap iServer</a></span> with <a href='http://icltest.supermapol.com/'>漏 SuperMap iClient</a>"
        });
        var layerUrl = options.url + "/image.png?";
        options.serverType = options.serverType || _SuperMap2.default.ServerType.ISERVER;
        //涓簎rl娣诲姞瀹夊叏璁よ瘉淇℃伅鐗囨
        layerUrl = appendCredential(layerUrl, options.serverType);

        /*
         * @function ol.source.ImageSuperMapRest.prototype.appendCredential
         * @description 娣诲姞鍑嵁
         * @param url - {string} 鍦板潃
         * @param serverType - {Object} 鏈嶅姟绫诲瀷
         * @return {string} 娣诲姞鐢熸垚鍚庣殑鏂板湴鍧€
         */
        function appendCredential(url, serverType) {
          var newUrl = url,
              credential,
              value;
          switch (serverType) {
            case _SuperMap2.default.ServerType.ISERVER:
              value = _SuperMap2.default.SecurityManager.getToken(url);
              credential = value ? new _SuperMap2.default.Credential(value, "token") : null;
              break;
            case _SuperMap2.default.ServerType.IPORTAL:
              value = _SuperMap2.default.SecurityManager.getToken(url);
              credential = value ? new _SuperMap2.default.Credential(value, "token") : null;
              if (!credential) {
                value = _SuperMap2.default.SecurityManager.getKey(url);
                credential = value ? new _SuperMap2.default.Credential(value, "key") : null;
              }
              break;
            case _SuperMap2.default.ServerType.ONLINE:
              value = _SuperMap2.default.SecurityManager.getKey(url);
              credential = value ? new _SuperMap2.default.Credential(value, "key") : null;
              break;
            default:
              value = _SuperMap2.default.SecurityManager.getToken(url);
              credential = value ? new _SuperMap2.default.Credential(value, "token") : null;
              break;
          }
          if (credential) {
            newUrl += "&" + credential.getUrlParameters();
          }
          return newUrl;
        }

        //鍒囩墖鏄惁閫忔槑
        var transparent = true;
        if (options.opaque !== undefined) {
          transparent = options.opaque;
        }
        layerUrl += "&transparent=" + transparent;

        //鏄惁浣跨敤缂撳瓨
        var cacheEnabled = false;
        if (options.cacheEnabled !== undefined) {
          cacheEnabled = options.cacheEnabled;
        }
        layerUrl += "&cacheEnabled=" + cacheEnabled;

        //濡傛灉鏈塴ayersID锛屽垯鏄湪浣跨敤涓撻鍥�
        if (options.layersID !== undefined) {
          layerUrl += "&layersID=" + options.layersID;
        }
        //鏄惁閲嶅畾鍚�
        if (options.redirect !== undefined) {
          layerUrl += "&redirect=" + options.redirect;
        }
        if (options.cacheEnabled !== undefined) {
          layerUrl += "&cacheEnabled=" + options.cacheEnabled;
        }
        if (options.prjCoordSys) {
          layerUrl += "prjCoordSys=" + JSON.stringify(options.prjCoordSys);
        }
        if (options.clipRegion instanceof _olDebug2.default.geom.Geometry) {
          options.clipRegionEnabled = true;
          options.clipRegion = _Util2.default.toSuperMapGeometry(new _olDebug2.default.format.GeoJSON().writeGeometryObject(options.clipRegion));
          options.clipRegion = _SuperMap2.default.Util.toJSON(_ServerGeometry2.default.fromGeometry(options.clipRegion));
          layerUrl += "&clipRegionEnabled=" + options.clipRegionEnabled + "&clipRegion=" + JSON.stringify(options.clipRegion);
        }
        if (!!options.overlapDisplayed && options.overlapDisplayedOptions) {
          options.overlapDisplayedOptions = options.overlapDisplayedOptions;
          layerUrl += "&overlapDisplayed=" + options.overlapDisplayed + "&overlapDisplayedOptions=" + options.overlapDisplayedOptions.toString();
        }
        if (options.cacheEnabled === true && options.tileversion) {
          layerUrl += "tileversion=" + options.tileversion;
        }
        /*
         * @function ol.source.ImageSuperMapRest.prototype.tileUrlFunction
         * @param tileCoord - {Object} 鐡︾墖鍧愭爣绯�
         * @param pixelRatio - {Object} 鍍忕礌瀵嗗害
         * @param projection - {string} 鎶曞奖鍙傝€冪郴
         * @description 鐡︾墖鍦板潃鍙傛暟
         * @return {string} 杩斿洖鐡︾墖鍦板潃鍙傛暟
         */
        function tileUrlFunction(tileCoord, pixelRatio, projection) {
          if (!this.tileGrid) {
            this.tileGrid = this.getTileGridForProjection(projection);
          }
          var tileExtent = this.tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent_);
          var tileSize = _olDebug2.default.size.toSize(this.tileGrid.getTileSize(tileCoord[0]), this.tmpSize);
          return encodeURI(layerUrl + "&width=" + tileSize[0] + "&height=" + tileSize[1] + "&viewBounds=" + "{\"leftBottom\" : {\"x\":" + tileExtent[0] + ",\"y\":" + tileExtent[1] + "},\"rightTop\" : {\"x\":" + tileExtent[2] + ",\"y\":" + tileExtent[3] + "}}");
        }

        return _possibleConstructorReturn(this, (ImageSuperMapRest.__proto__ || Object.getPrototypeOf(ImageSuperMapRest)).call(this, {
          attributions: options.attributions,
          cacheSize: options.cacheSize,
          crossOrigin: options.crossOrigin,
          logo: options.logo,
          opaque: options.opaque,
          projection: options.projection,
          reprojectionErrorThreshold: options.reprojectionErrorThreshold,
          state: options.state,
          tileClass: options.tileClass,
          tileGrid: options.tileGrid,
          tileLoadFunction: options.tileLoadFunction,
          tilePixelRatio: options.tilePixelRatio,
          tileUrlFunction: tileUrlFunction,
          url: options.url,
          urls: options.urls,
          wrapX: options.wrapX !== undefined ? options.wrapX : false,
          cacheEnabled: options.cacheEnabled,
          layersID: options.layersID
        }));
      }

      /**
       * @function ol.source.ImageSuperMapRest.optionsFromMapJSON
       * @param url - {string} 鍦板潃
       * @param mapJSONObj - {Object} 鍦板浘JSON
       * @description 鑾峰彇鍦板浘JSON淇℃伅
       */


      _createClass(ImageSuperMapRest, null, [{
        key: 'optionsFromMapJSON',
        value: function optionsFromMapJSON(url, mapJSONObj) {
          var options = {};
          options.url = url;
          options.crossOrigin = 'anonymous';
          var extent = [mapJSONObj.bounds.left, mapJSONObj.bounds.bottom, mapJSONObj.bounds.right, mapJSONObj.bounds.top];
          var resolutions = getResolutions();

          function getResolutions() {
            var level = 17;
            var dpi = 96;
            var width = extent[2] - extent[0];
            var height = extent[3] - extent[1];
            var tileSize = width >= height ? width : height;
            var maxReolution;
            if (tileSize === width) {
              maxReolution = tileSize / mapJSONObj.viewer.width;
            } else {
              maxReolution = tileSize / mapJSONObj.viewer.height;
            }
            var resolutions = [];
            var unit = _SuperMap2.default.Unit.METER;
            if (mapJSONObj.coordUnit === _SuperMap2.default.Unit.DEGREE) {
              unit = _SuperMap2.default.Unit.DEGREE;
            }
            if (mapJSONObj.visibleScales&&mapJSONObj.visibleScales.length > 0) {
              for (var i = 0; i < mapJSONObj.visibleScales.length; i++) {
                resolutions.push(_Util2.default.scaleToResolution(mapJSONObj.visibleScales[i], dpi, unit));
              }
            } else {
              for (var i = 0; i < level; i++) {
                resolutions.push(maxReolution / Math.pow(2, i));
              }
            }
            return resolutions;
          }

          options.tileGrid = new _olDebug2.default.tilegrid.TileGrid({
            extent: extent,
            resolutions: resolutions
          });
          return options;
        }

        /**
         * @function ol.source.ImageSuperMapRest.createTileGrid
         * @param extent - {number} 闀垮害
         * @param maxZoom - {number} 鏈€澶х殑鏀惧ぇ绾у埆
         * @param minZoom - {number} 鏈€灏忕殑鏀惧ぇ绾у埆
         * @param tileSize - {number} 鐡︾墖鐨勫昂瀵�
         * @param origin - {number} 鍘熺偣
         * @description 鍒涘缓缃戞牸鍒囩墖
         * @return {ol.tilegrid.TileGrid} 鍒涘缓鐨勭綉鏍煎垏鐗�
         */

      }, {
        key: 'createTileGrid',
        value: function createTileGrid(extent, maxZoom, minZoom, tileSize, origin) {
          var tilegrid = _olDebug2.default.tilegrid.createXYZ({
            extent: extent,
            maxZoom: maxZoom,
            minZoom: minZoom,
            tileSize: tileSize
          });
          return new _olDebug2.default.tilegrid.TileGrid({
            extent: extent,
            minZoom: minZoom,
            origin: origin,
            resolutions: tilegrid.getResolutions(),
            tileSize: tilegrid.getTileSize()
          });
        }
      }]);

      return ImageSuperMapRest;
    }(_olDebug2.default.source.TileImage);

    exports.default = ImageSuperMapRest;

    _olDebug2.default.source.ImageSuperMapRest = ImageSuperMapRest;

    /***/ }),
  /* 21 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _olDebug = __webpack_require__(7);

    var _olDebug2 = _interopRequireDefault(_olDebug);

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _ServerGeometry = __webpack_require__(16);

    var _ServerGeometry2 = _interopRequireDefault(_ServerGeometry);

    __webpack_require__(17);

    var _Util = __webpack_require__(18);

    var _Util2 = _interopRequireDefault(_Util);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class ol.source.TileSuperMapRest
     * @classdesc SuperMap iServer TileImage鍥惧眰婧愩€�
     * @param options - {Object} 鍙€夊弬鏁般€傚锛�<br>
     *        url - {string} 鏈嶅姟鍦板潃銆�<br>
     *        attributions - {string} 鐗堟潈鎻忚堪淇℃伅銆�<br>
     *        cacheSize - {number} 缂撳啿澶у皬銆�<br>
     *        tileLoadFunction - {function} 鍒囩墖鍔犺浇瀹屾垚鍚庢墽琛屽嚱鏁般€�<br>
     *        maxZoom - {Object} 鏈€澶х缉鏀剧骇鍒€�<br>
     *        opaque - {boolean} 鏄惁閫忔槑銆�
     * @extends ol.source.TileImage{@linkdoc-openlayers/ol.source.TileImage}
     */
    var TileSuperMapRest = function (_ol$source$TileImage) {
      _inherits(TileSuperMapRest, _ol$source$TileImage);

      function TileSuperMapRest(options) {
        _classCallCheck(this, TileSuperMapRest);

        options = options || {};
        if (options.url === undefined) {
          return _possibleConstructorReturn(_this);
        }

        options.attributions = options.attributions || new _olDebug2.default.Attribution({
          html: "Map Data <span>漏 <a href='http://support.supermap.com.cn/product/iServer.aspx' target='_blank'>SuperMap iServer</a></span> with <span>漏 <a href='http://iclient.supermapol.com' target='_blank'>SuperMap iClient</a></span>"
        });

        var layerUrl = options.url + "/tileImage.png?";
        options.serverType = options.serverType || _SuperMap2.default.ServerType.ISERVER;
        //涓簎rl娣诲姞瀹夊叏璁よ瘉淇℃伅鐗囨
        layerUrl = appendCredential(layerUrl, options.serverType);

        var _this = _possibleConstructorReturn(this, (TileSuperMapRest.__proto__ || Object.getPrototypeOf(TileSuperMapRest)).call(this, {
          attributions: options.attributions,
          cacheSize: options.cacheSize,
          crossOrigin: options.crossOrigin,
          logo: options.logo,
          opaque: options.opaque,
          projection: options.projection,
          reprojectionErrorThreshold: options.reprojectionErrorThreshold,
          state: options.state,
          tileClass: options.tileClass,
          tileGrid: options.tileGrid,
          tileLoadFunction: options.tileLoadFunction,
          tilePixelRatio: options.tilePixelRatio,
          tileUrlFunction: tileUrlFunction,
          url: options.url,
          urls: options.urls,
          wrapX: options.wrapX !== undefined ? options.wrapX : false,
          cacheEnabled: options.cacheEnabled,
          layersID: options.layersID
        }));

        _this.options = options;
        _this._url = options.url;
        //褰撳墠鍒囩墖鍦ㄥ垏鐗囬泦涓殑index
        _this.tileSetsIndex = -1;
        _this.tempIndex = -1;
        function appendCredential(url, serverType) {
          var newUrl = url,
              credential,
              value;
          switch (serverType) {
            case _SuperMap2.default.ServerType.ISERVER:
              value = _SuperMap2.default.SecurityManager.getToken(url);
              credential = value ? new _SuperMap2.default.Credential(value, "token") : null;
              break;
            case _SuperMap2.default.ServerType.IPORTAL:
              value = _SuperMap2.default.SecurityManager.getToken(url);
              credential = value ? new _SuperMap2.default.Credential(value, "token") : null;
              if (!credential) {
                value = _SuperMap2.default.SecurityManager.getKey(url);
                credential = value ? new _SuperMap2.default.Credential(value, "key") : null;
              }
              break;
            case _SuperMap2.default.ServerType.ONLINE:
              value = _SuperMap2.default.SecurityManager.getKey(url);
              credential = value ? new _SuperMap2.default.Credential(value, "key") : null;
              break;
            default:
              value = _SuperMap2.default.SecurityManager.getToken(url);
              credential = value ? new _SuperMap2.default.Credential(value, "token") : null;
              break;
          }
          if (credential) {
            newUrl += "&" + credential.getUrlParameters();
          }
          return newUrl;
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.getAllRequestParams
         * @description 鑾峰彇鍏ㄩ儴璇锋眰鍙傛暟
         */
        function getAllRequestParams() {
          var me = this,
              params = {};

          params["redirect"] = options.redirect === true;
          //鍒囩墖鏄惁閫忔槑
          params["transparent"] = options.transparent === true;
          params["cacheEnabled"] = !(options.cacheEnabled === false);
          params["_cache"] = params["cacheEnabled"];

          //璁剧疆鍒囩墖鍘熺偣
          if (this.origin) {
            params["origin"] = JSON.stringify({ x: this.origin[0], y: this.origin[1] });
          }

          if (options.prjCoordSys) {
            params["prjCoordSys"] = JSON.stringify(options.prjCoordSys);
          }

          if (options.layersID) {
            params["layersID"] = options.layersID.toString();
          }

          if (options.clipRegion instanceof _olDebug2.default.geom.Geometry) {
            options.clipRegionEnabled = true;
            options.clipRegion = _Util2.default.toSuperMapGeometry(new _olDebug2.default.format.GeoJSON().writeGeometryObject(options.clipRegion));
            options.clipRegion = _SuperMap2.default.Util.toJSON(_ServerGeometry2.default.fromGeometry(options.clipRegion));
            params["clipRegionEnabled"] = options.clipRegionEnabled;
            params["clipRegion"] = JSON.stringify(options.clipRegion);
          }

          if (!options.overlapDisplayed) {
            params["overlapDisplayed"] = false;
            if (options.overlapDisplayedOptions) {
              params["overlapDisplayedOptions"] = me.overlapDisplayedOptions.toString();
            }
          } else {
            params["overlapDisplayed"] = true;
          }

          if (options.cacheEnabled && options.tileversion) {
            params["tileversion"] = options.tileversion.toString();
          }

          return params;
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.getFullRequestUrl
         * @description 鑾峰彇瀹屾暣鐨勮姹傚湴鍧€
         */
        function getFullRequestUrl() {
          if (this._paramsChanged) {
            this._layerUrl = createLayerUrl.call(this);
            this._paramsChanged = false;
          }
          return this._layerUrl || createLayerUrl.call(this);
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.createLayerUrl
         * @description 鑾峰彇鏂板缓鍥惧眰鍦板潃
         */
        function createLayerUrl() {
          this._layerUrl = layerUrl + getRequestParamString.call(this);
          return this._layerUrl;
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.getRequestParamString
         * @description 鑾峰彇璇锋眰鍙傛暟鐨勫瓧绗︿覆
         */
        function getRequestParamString() {
          this.requestParams = this.requestParams || getAllRequestParams.call(this);
          var params = [];
          for (var key in this.requestParams) {
            params.push(key + "=" + this.requestParams[key]);
          }
          return params.join('&');
        }

        var me = _this;

        function tileUrlFunction(tileCoord, pixelRatio, projection) {
          if (!me.tileGrid) {
            if (me.extent) {
              me.tileGrid = _olDebug2.default.source.TileSuperMapRest.createTileGrid(options.extent);
              if (me.resolutions) {
                me.tileGrid.resolutions = me.resolutions;
              }
            } else {
              if (projection.getCode() === "EPSG:3857") {
                me.tileGrid = _olDebug2.default.source.TileSuperMapRest.createTileGrid([-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892]);
                me.extent = [-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892];
              }
              if (projection.getCode() === "EPSG:4326") {
                me.tileGrid = _olDebug2.default.source.TileSuperMapRest.createTileGrid([-180, -90, 180, 90]);
                me.extent = [-180, -90, 180, 90];
              }
            }
          }
          me.origin = me.tileGrid.getOrigin(0);
          var z = tileCoord[0];
          var x = tileCoord[1];
          var y = -tileCoord[2] - 1;
          var resolution = me.tileGrid.getResolution(z);
          var dpi = 96;
          var unit = projection.getUnits();
          if (unit === 'degrees') {
            unit = _SuperMap2.default.Unit.DEGREE;
          }
          if (unit === 'm') {
            unit = _SuperMap2.default.Unit.METER;
          }
          var scale = _Util2.default.resolutionToScale(resolution, dpi, unit);
          var tileSize = _olDebug2.default.size.toSize(me.tileGrid.getTileSize(z, me.tmpSize));
          var layerUrl = getFullRequestUrl.call(me);
          return encodeURI(layerUrl + "&x=" + x + "&y=" + y + "&width=" + tileSize[0] + "&height=" + tileSize[1] + "&scale=" + scale);
        }

        return _this;
      }

      /**
       * @function  ol.source.TileSuperMapRest.prototype.setTileSetsInfo
       * @description 璁剧疆鐡︾墖闆嗕俊鎭�
       * @param tileSets - {Object} 鐡︾墖闆嗗悎
       */


      _createClass(TileSuperMapRest, [{
        key: 'setTileSetsInfo',
        value: function setTileSetsInfo(tileSets) {
          this.tileSets = tileSets;
          if (_Util2.default.isArray(this.tileSets)) {
            this.tileSets = tileSets[0];
          }
          if (!this.tileSets) {
            return;
          }
          this.dispatchEvent({ type: 'tilesetsinfoloaded', value: { tileVersions: this.tileSets.tileVersions } });
          this.changeTilesVersion();
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.lastTilesVersion
         * @description 璇锋眰涓婁竴涓増鏈垏鐗囷紝骞堕噸鏂扮粯鍒�
         */

      }, {
        key: 'lastTilesVersion',
        value: function lastTilesVersion() {
          this.tempIndex = this.tileSetsIndex - 1;
          this.changeTilesVersion();
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.nextTilesVersion
         * @description 璇锋眰涓嬩竴涓増鏈垏鐗囷紝骞堕噸鏂扮粯鍒躲€�
         */

      }, {
        key: 'nextTilesVersion',
        value: function nextTilesVersion() {
          this.tempIndex = this.tileSetsIndex + 1;
          this.changeTilesVersion();
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.changeTilesVersion
         * @description 鍒囨崲鍒版煇涓€鐗堟湰鐨勫垏鐗囷紝骞堕噸缁樸€傞€氳繃this.tempIndex淇濆瓨闇€瑕佸垏鎹㈢殑鐗堟湰绱㈠紩銆�
         */

      }, {
        key: 'changeTilesVersion',
        value: function changeTilesVersion() {
          var me = this;
          //鍒囩墖鐗堟湰闆嗕俊鎭槸鍚﹀瓨鍦�
          if (me.tileSets == null) {
            return;
          }
          if (me.tempIndex === me.tileSetsIndex || this.tempIndex < 0) {
            return;
          }
          //妫€娴媔ndex鏄惁鍙敤
          var tileVersions = me.tileSets.tileVersions;
          if (tileVersions && me.tempIndex < tileVersions.length && me.tempIndex >= 0) {
            var name = tileVersions[me.tempIndex].name;
            var result = me.mergeTileVersionParam(name);
            if (result) {
              me.tileSetsIndex = me.tempIndex;
              me.dispatchEvent({ type: 'tileversionschanged', value: { tileVersion: tileVersions[me.tempIndex] } });
            }
          }
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.updateCurrentTileSetsIndex
         * @description 鏇存柊褰撳墠鍒囩墖闆嗙储寮曪紝鐩墠涓昏鎻愪緵缁欐帶浠朵娇鐢ㄣ€�
         * @param index - {number} 绱㈠紩鍙�
         */

      }, {
        key: 'updateCurrentTileSetsIndex',
        value: function updateCurrentTileSetsIndex(index) {
          this.tempIndex = index;
        }

        /**
         * @function  ol.source.TileSuperMapRest.prototype.mergeTileVersionParam
         * @description 鏇存敼URL璇锋眰鍙傛暟涓殑鍒囩墖鐗堟湰鍙�,骞堕噸缁樸€�
         * @param version - {Object} 鐗堟湰淇℃伅
         * @return {boolean}
         */

      }, {
        key: 'mergeTileVersionParam',
        value: function mergeTileVersionParam(version) {
          if (version) {
            this.requestParams["tileversion"] = version;
            this._paramsChanged = true;
            this.refresh();
            return true;
          }
          return false;
        }

        /**
         * @function  ol.source.TileSuperMapRest.optionsFromMapJSON
         * @description 浠� MapJSON 涓幏鍙栧弬鏁板璞�
         * @param url - {string} 鍦板潃
         * @param mapJSONObj -{Object} 鍦板浘JSON瀵硅薄
         */

      }], [{
        key: 'optionsFromMapJSON',
        value: function optionsFromMapJSON(url, mapJSONObj) {
          var options = {};
          options.url = url;
          options.crossOrigin = 'anonymous';
          var extent = [mapJSONObj.bounds.left, mapJSONObj.bounds.bottom, mapJSONObj.bounds.right, mapJSONObj.bounds.top];
          var resolutions = getResolutions();

          function getResolutions() {
            var level = 17;
            var dpi = 96;
            var width = extent[2] - extent[0];
            var height = extent[3] - extent[1];
            var tileSize = width >= height ? width : height;
            var maxReolution;
            if (tileSize === width) {
              maxReolution = tileSize / mapJSONObj.viewer.width;
            } else {
              maxReolution = tileSize / mapJSONObj.viewer.height;
            }
            var resolutions = [];
            var unit = _SuperMap2.default.Unit.METER;
            if (mapJSONObj.coordUnit === _SuperMap2.default.Unit.DEGREE) {
              unit = _SuperMap2.default.Unit.DEGREE;
            }
            if (mapJSONObj.visibleScales.length > 0) {
              for (var i = 0; i < mapJSONObj.visibleScales.length; i++) {
                resolutions.push(_Util2.default.scaleToResolution(mapJSONObj.visibleScales[i], dpi, unit));
              }
            } else {
              for (var i = 0; i < level; i++) {
                resolutions.push(maxReolution / Math.pow(2, i));
              }
            }
            return resolutions;
          }

          options.tileGrid = new _olDebug2.default.tilegrid.TileGrid({
            extent: extent,
            resolutions: resolutions
          });
          return options;
        }

        /**
         * @function  ol.source.TileSuperMapRest.createTileGrid
         * @description 鍒涘缓鍒囩墖缃戞牸
         * @param extent - {number} 闀垮害
         * @param maxZoom - {number} 鏈€澶х殑鏀惧ぇ绾у埆
         * @param minZoom - {number} 鏈€灏忕殑鏀惧ぇ绾у埆
         * @param tileSize - {number} 鐡︾墖鐨勫昂瀵�
         * @param origin - {number} 鍘熺偣
         * */

      }, {
        key: 'createTileGrid',
        value: function createTileGrid(extent, maxZoom, minZoom, tileSize, origin) {
          var tilegrid = _olDebug2.default.tilegrid.createXYZ({
            extent: extent,
            maxZoom: maxZoom,
            minZoom: minZoom,
            tileSize: tileSize
          });
          return new _olDebug2.default.tilegrid.TileGrid({
            extent: extent,
            minZoom: minZoom,
            origin: origin,
            resolutions: tilegrid.getResolutions(),
            tileSize: tilegrid.getTileSize()
          });
        }
      }]);

      return TileSuperMapRest;
    }(_olDebug2.default.source.TileImage);

    exports.default = TileSuperMapRest;


    _olDebug2.default.source.TileSuperMapRest = TileSuperMapRest;

    /***/ }),
  /* 22 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, mod);
        global.fetchJsonp = mod.exports;
      }
    })(undefined, function (exports, module) {
      'use strict';

      var defaultOptions = {
        timeout: 5000,
        jsonpCallback: 'callback',
        jsonpCallbackFunction: null
      };

      function generateCallbackFunction() {
        return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
      }

      // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined'
      // error if request timeout
      function clearFunction(functionName) {
        // IE8 throws an exception when you try to delete a property on window
        // http://stackoverflow.com/a/1824228/751089
        try {
          delete window[functionName];
        } catch (e) {
          window[functionName] = undefined;
        }
      }

      function removeScript(scriptId) {
        var script = document.getElementById(scriptId);
        document.getElementsByTagName('head')[0].removeChild(script);
      }

      function fetchJsonp(_url) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // to avoid param reassign
        var url = _url;
        var timeout = options.timeout || defaultOptions.timeout;
        var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

        var timeoutId = undefined;

        return new Promise(function (resolve, reject) {
          var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
          var scriptId = jsonpCallback + '_' + callbackFunction;

          window[callbackFunction] = function (response) {
            resolve({
              ok: true,
              // keep consistent with fetch API
              json: function json() {
                return Promise.resolve(response);
              }
            });

            if (timeoutId) clearTimeout(timeoutId);

            removeScript(scriptId);

            clearFunction(callbackFunction);
          };

          // Check if the user set their own params, and if not add a ? to start a list of params
          url += url.indexOf('?') === -1 ? '?' : '&';

          var jsonpScript = document.createElement('script');
          jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
          jsonpScript.id = scriptId;
          document.getElementsByTagName('head')[0].appendChild(jsonpScript);

          timeoutId = setTimeout(function () {
            reject(new Error('JSONP request to ' + _url + ' timed out'));

            clearFunction(callbackFunction);
            removeScript(scriptId);
          }, timeout);
        });
      }

      // export as global function
      /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

      module.exports = fetchJsonp;
    });

    /***/ }),
  /* 23 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var apply = Function.prototype.apply;

// DOM APIs, for completeness

    exports.setTimeout = function () {
      return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
    };
    exports.setInterval = function () {
      return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
    };
    exports.clearTimeout = exports.clearInterval = function (timeout) {
      if (timeout) {
        timeout.close();
      }
    };

    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }
    Timeout.prototype.unref = Timeout.prototype.ref = function () {};
    Timeout.prototype.close = function () {
      this._clearFn.call(window, this._id);
    };

// Does not start the time, just sets up the members needed.
    exports.enroll = function (item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };

    exports.unenroll = function (item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };

    exports._unrefActive = exports.active = function (item) {
      clearTimeout(item._idleTimeoutId);

      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(function onTimeout() {
          if (item._onTimeout) item._onTimeout();
        }, msecs);
      }
    };

// setimmediate attaches itself to the global object
    __webpack_require__(26);
    exports.setImmediate = setImmediate;
    exports.clearImmediate = clearImmediate;

    /***/ }),
  /* 24 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


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
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
      return [];
    };

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

    /***/ }),
  /* 25 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function(setImmediate) {

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      (function (root) {

        // Store setTimeout reference so promise-polyfill will be unaffected by
        // other code modifying setTimeout (like sinon.useFakeTimers())
        var setTimeoutFunc = setTimeout;

        function noop() {}

        // Polyfill for Function.prototype.bind
        function bind(fn, thisArg) {
          return function () {
            fn.apply(thisArg, arguments);
          };
        }

        function Promise(fn) {
          if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
          if (typeof fn !== 'function') throw new TypeError('not a function');
          this._state = 0;
          this._handled = false;
          this._value = undefined;
          this._deferreds = [];

          doResolve(fn, this);
        }

        function handle(self, deferred) {
          while (self._state === 3) {
            self = self._value;
          }
          if (self._state === 0) {
            self._deferreds.push(deferred);
            return;
          }
          self._handled = true;
          Promise._immediateFn(function () {
            var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
              (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
              return;
            }
            var ret;
            try {
              ret = cb(self._value);
            } catch (e) {
              reject(deferred.promise, e);
              return;
            }
            resolve(deferred.promise, ret);
          });
        }

        function resolve(self, newValue) {
          try {
            // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
            if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
              var then = newValue.then;
              if (newValue instanceof Promise) {
                self._state = 3;
                self._value = newValue;
                finale(self);
                return;
              } else if (typeof then === 'function') {
                doResolve(bind(then, newValue), self);
                return;
              }
            }
            self._state = 1;
            self._value = newValue;
            finale(self);
          } catch (e) {
            reject(self, e);
          }
        }

        function reject(self, newValue) {
          self._state = 2;
          self._value = newValue;
          finale(self);
        }

        function finale(self) {
          if (self._state === 2 && self._deferreds.length === 0) {
            Promise._immediateFn(function () {
              if (!self._handled) {
                Promise._unhandledRejectionFn(self._value);
              }
            });
          }

          for (var i = 0, len = self._deferreds.length; i < len; i++) {
            handle(self, self._deferreds[i]);
          }
          self._deferreds = null;
        }

        function Handler(onFulfilled, onRejected, promise) {
          this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
          this.onRejected = typeof onRejected === 'function' ? onRejected : null;
          this.promise = promise;
        }

        /**
         * Take a potentially misbehaving resolver function and make sure
         * onFulfilled and onRejected are only called once.
         *
         * Makes no guarantees about asynchrony.
         */
        function doResolve(fn, self) {
          var done = false;
          try {
            fn(function (value) {
              if (done) return;
              done = true;
              resolve(self, value);
            }, function (reason) {
              if (done) return;
              done = true;
              reject(self, reason);
            });
          } catch (ex) {
            if (done) return;
            done = true;
            reject(self, ex);
          }
        }

        Promise.prototype['catch'] = function (onRejected) {
          return this.then(null, onRejected);
        };

        Promise.prototype.then = function (onFulfilled, onRejected) {
          var prom = new this.constructor(noop);

          handle(this, new Handler(onFulfilled, onRejected, prom));
          return prom;
        };

        Promise.all = function (arr) {
          var args = Array.prototype.slice.call(arr);

          return new Promise(function (resolve, reject) {
            if (args.length === 0) return resolve([]);
            var remaining = args.length;

            function res(i, val) {
              try {
                if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
                  var then = val.then;
                  if (typeof then === 'function') {
                    then.call(val, function (val) {
                      res(i, val);
                    }, reject);
                    return;
                  }
                }
                args[i] = val;
                if (--remaining === 0) {
                  resolve(args);
                }
              } catch (ex) {
                reject(ex);
              }
            }

            for (var i = 0; i < args.length; i++) {
              res(i, args[i]);
            }
          });
        };

        Promise.resolve = function (value) {
          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
            return value;
          }

          return new Promise(function (resolve) {
            resolve(value);
          });
        };

        Promise.reject = function (value) {
          return new Promise(function (resolve, reject) {
            reject(value);
          });
        };

        Promise.race = function (values) {
          return new Promise(function (resolve, reject) {
            for (var i = 0, len = values.length; i < len; i++) {
              values[i].then(resolve, reject);
            }
          });
        };

        // Use polyfill for setImmediate for performance gains
        Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
          setImmediate(fn);
        } || function (fn) {
          setTimeoutFunc(fn, 0);
        };

        Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
          if (typeof console !== 'undefined' && console) {
            console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
          }
        };

        /**
         * Set the immediate function to execute callbacks
         * @param fn {function} Function to execute
         * @deprecated
         */
        Promise._setImmediateFn = function _setImmediateFn(fn) {
          Promise._immediateFn = fn;
        };

        /**
         * Change the function to execute on unhandled rejection
         * @param {function} fn Function to execute on unhandled rejection
         * @deprecated
         */
        Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
          Promise._unhandledRejectionFn = fn;
        };

        if (typeof module !== 'undefined' && module.exports) {
          module.exports = Promise;
        } else if (!root.Promise) {
          root.Promise = Promise;
        }
      })(undefined);
      /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23).setImmediate))

    /***/ }),
  /* 26 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function(global, process) {

      (function (global, undefined) {
        "use strict";

        if (global.setImmediate) {
          return;
        }

        var nextHandle = 1; // Spec says greater than zero
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;

        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          // Copy function arguments
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
          }
          // Store and register the task
          var task = { callback: callback, args: args };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }

        function clearImmediate(handle) {
          delete tasksByHandle[handle];
        }

        function run(task) {
          var callback = task.callback;
          var args = task.args;
          switch (args.length) {
            case 0:
              callback();
              break;
            case 1:
              callback(args[0]);
              break;
            case 2:
              callback(args[0], args[1]);
              break;
            case 3:
              callback(args[0], args[1], args[2]);
              break;
            default:
              callback.apply(undefined, args);
              break;
          }
        }

        function runIfPresent(handle) {
          // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
          // So if we're currently running a task, we'll need to delay this invocation.
          if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
          } else {
            var task = tasksByHandle[handle];
            if (task) {
              currentlyRunningATask = true;
              try {
                run(task);
              } finally {
                clearImmediate(handle);
                currentlyRunningATask = false;
              }
            }
          }
        }

        function installNextTickImplementation() {
          registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
              runIfPresent(handle);
            });
          };
        }

        function canUsePostMessage() {
          // The test against `importScripts` prevents this implementation from being installed inside a web worker,
          // where `global.postMessage` means something completely different and can't be used for this purpose.
          if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
              postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
          }
        }

        function installPostMessageImplementation() {
          // Installs an event handler on `global` for the `message` event: see
          // * https://developer.mozilla.org/en/DOM/window.postMessage
          // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

          var messagePrefix = "setImmediate$" + Math.random() + "$";
          var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
              runIfPresent(+event.data.slice(messagePrefix.length));
            }
          };

          if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
          } else {
            global.attachEvent("onmessage", onGlobalMessage);
          }

          registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
          };
        }

        function installMessageChannelImplementation() {
          var channel = new MessageChannel();
          channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
          };

          registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
          };
        }

        function installReadyStateChangeImplementation() {
          var html = doc.documentElement;
          registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
              runIfPresent(handle);
              script.onreadystatechange = null;
              html.removeChild(script);
              script = null;
            };
            html.appendChild(script);
          };
        }

        function installSetTimeoutImplementation() {
          registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
          };
        }

        // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

        // Don't get fooled by e.g. browserify environments.
        if ({}.toString.call(global.process) === "[object process]") {
          // For Node.js before 0.9
          installNextTickImplementation();
        } else if (canUsePostMessage()) {
          // For non-IE10 modern browsers
          installPostMessageImplementation();
        } else if (global.MessageChannel) {
          // For web workers, where supported
          installMessageChannelImplementation();
        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
          // For IE 6鈥�8
          installReadyStateChangeImplementation();
        } else {
          // For older browsers
          installSetTimeoutImplementation();
        }

        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
      })(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
      /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27), __webpack_require__(24)))

    /***/ }),
  /* 27 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var g;

// This works in non-strict mode
    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      // This works if the window reference is available
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

    module.exports = g;

    /***/ }),
  /* 28 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var whatwgFetch = function (self) {
      'use strict';

      var support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob: 'FileReader' in self && 'Blob' in self && function () {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
      };

      function normalizeName(name) {
        if (typeof name !== 'string') {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
          throw new TypeError('Invalid character in header field name');
        }
        return name.toLowerCase();
      }

      function normalizeValue(value) {
        if (typeof value !== 'string') {
          value = String(value);
        }
        return value;
      }

      // Build a destructive iterator for the value list
      function iteratorFor(items) {
        var iterator = {
          next: function next() {
            var value = items.shift();
            return { done: value === undefined, value: value };
          }
        };

        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
            return iterator;
          };
        }

        return iterator;
      }

      function Headers(headers) {
        this.map = {};

        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
            this.append(name, value);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
            this.append(name, headers[name]);
          }, this);
        }
      }

      Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var list = this.map[name];
        if (!list) {
          list = [];
          this.map[name] = list;
        }
        list.push(value);
      };

      Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)];
      };

      Headers.prototype.get = function (name) {
        var values = this.map[normalizeName(name)];
        return values ? values[0] : null;
      };

      Headers.prototype.getAll = function (name) {
        return this.map[normalizeName(name)] || [];
      };

      Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };

      Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = [normalizeValue(value)];
      };

      Headers.prototype.forEach = function (callback, thisArg) {
        Object.getOwnPropertyNames(this.map).forEach(function (name) {
          this.map[name].forEach(function (value) {
            callback.call(thisArg, value, name, this);
          }, this);
        }, this);
      };

      Headers.prototype.keys = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };

      Headers.prototype.values = function () {
        var items = [];
        this.forEach(function (value) {
          items.push(value);
        });
        return iteratorFor(items);
      };

      Headers.prototype.entries = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };

      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }

      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
      }

      function fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
          reader.onload = function () {
            resolve(reader.result);
          };
          reader.onerror = function () {
            reject(reader.error);
          };
        });
      }

      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        return fileReaderReady(reader);
      }

      function readBlobAsText(blob) {
        var reader = new FileReader();
        reader.readAsText(blob);
        return fileReaderReady(reader);
      }

      function Body() {
        this.bodyUsed = false;

        this._initBody = function (body) {
          this._bodyInit = body;
          if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (!body) {
            this._bodyText = '';
          } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
            // Only support ArrayBuffers for POST method.
            // Receiving ArrayBuffers happens via Blobs, instead.
          } else {
            throw new Error('unsupported BodyInit type');
          }

          if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
              this.headers.set('content-type', 'text/plain;charset=UTF-8');
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set('content-type', this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
          }
        };

        if (support.blob) {
          this.blob = function () {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }

            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyFormData) {
              throw new Error('could not read FormData body as blob');
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };

          this.arrayBuffer = function () {
            return this.blob().then(readBlobAsArrayBuffer);
          };

          this.text = function () {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }

            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyFormData) {
              throw new Error('could not read FormData body as text');
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
        } else {
          this.text = function () {
            var rejected = consumed(this);
            return rejected ? rejected : Promise.resolve(this._bodyText);
          };
        }

        if (support.formData) {
          this.formData = function () {
            return this.text().then(decode);
          };
        }

        this.json = function () {
          return this.text().then(JSON.parse);
        };

        return this;
      }

      // HTTP methods whose capitalization should be normalized
      var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }

      function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (Request.prototype.isPrototypeOf(input)) {
          if (input.bodyUsed) {
            throw new TypeError('Already read');
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          if (!body) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = input;
        }

        this.credentials = options.credentials || this.credentials || 'omit';
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.referrer = null;

        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
          throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
      }

      Request.prototype.clone = function () {
        return new Request(this);
      };

      function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
          if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }

      function headers(xhr) {
        var head = new Headers();
        var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
        pairs.forEach(function (header) {
          var split = header.trim().split(':');
          var key = split.shift().trim();
          var value = split.join(':').trim();
          head.append(key, value);
        });
        return head;
      }

      Body.call(Request.prototype);

      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }

        this.type = 'default';
        this.status = options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText;
        this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
      }

      Body.call(Response.prototype);

      Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };

      Response.error = function () {
        var response = new Response(null, { status: 0, statusText: '' });
        response.type = 'error';
        return response;
      };

      var redirectStatuses = [301, 302, 303, 307, 308];

      Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError('Invalid status code');
        }

        return new Response(null, { status: status, headers: { location: url } });
      };

      // self.Headers = Headers
      // self.Request = Request
      // self.Response = Response

      var fetch = function fetch(input, init) {
        // console.log('whatwgFetchWidthTimeout--->'+input, init);
        init = init || { timeout: 30000 };
        return new Promise(function (resolve, reject) {
          var request;
          if (Request.prototype.isPrototypeOf(input) && !init) {
            request = input;
          } else {
            request = new Request(input, init);
          }

          var xhr = new XMLHttpRequest();

          function responseURL() {
            if ('responseURL' in xhr) {
              return xhr.responseURL;
            }

            // Avoid security warnings on getResponseHeader when not allowed by CORS
            if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
              return xhr.getResponseHeader('X-Request-URL');
            }

            return;
          }

          xhr.onload = function () {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: headers(xhr),
              url: responseURL()
            };
            var body = 'response' in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };

          xhr.onerror = function () {
            reject(new TypeError('Network request failed'));
          };

          xhr.ontimeout = function () {
            reject(new TypeError('Network request failed due to timeout'));
          };

          xhr.open(request.method, request.url, true);
          xhr.timeout = init.timeout || 30000;

          if (request.credentials === 'include') {
            xhr.withCredentials = true;
          }

          if ('responseType' in xhr && support.blob) {
            xhr.responseType = 'blob';
          }

          request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
          });

          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        });
      };
      return fetch;
    }(typeof self !== 'undefined' ? self : undefined);

    module.exports = whatwgFetch;

    /***/ }),
  /* 29 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.Feature
     * @classdesc 瑕佺礌绫荤粍鍚堜簡鍦扮悊鍜屽睘鎬э紝Feature 绫诲悓鏃跺叿鏈� marker 鍜� lonlat 灞炴€с€�
     * @param layer - {SuperMap.Layer} 鍥惧眰銆�
     * @param lonlat - {SuperMap.LonLat} 缁忕含搴︺€�
     * @param data - {Object} 鏁版嵁瀵硅薄銆�
     */
    var Feature = function () {

      /**
       * @member SuperMap.Feature.prototype.lonlat - {SuperMap.LonLat}
       * @description 缁忕含搴︺€�
       *
       */


      /**
       * @deprecated
       * @member SuperMap.Feature.prototype.layer - {SuperMap.Layer}
       * @description 鍥惧眰銆�
       */
      function Feature(layer, lonlat, data) {
        _classCallCheck(this, Feature);

        this.layer = null;
        this.id = null;
        this.lonlat = null;
        this.data = null;
        this.CLASS_NAME = "SuperMap.Feature";

        this.layer = layer;
        this.lonlat = lonlat;
        this.data = data != null ? data : {};
        this.id = _Util.Util.createUniqueID(this.CLASS_NAME + "_");
      }

      /**
       * @function SuperMap.Feature.prototype.destroy
       * @description 閲婃斁鐩稿叧璧勬簮銆�
       */


      /**
       * @member SuperMap.Feature.prototype.data - {Object}
       * @description 鏁版嵁瀵硅薄銆�
       */


      /**
       * @member SuperMap.Feature.prototype.id - {string}
       * @description 瑕佺礌id銆�
       */


      _createClass(Feature, [{
        key: 'destroy',
        value: function destroy() {
          this.id = null;
          this.lonlat = null;
          this.data = null;
        }
      }]);

      return Feature;
    }();

    exports.default = Feature;

    _SuperMap2.default.Feature = Feature;

    /***/ }),
  /* 30 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.LonLat
     * @classdesc  杩欎釜绫荤敤鏉ヨ〃绀虹粡搴﹀拰绾害瀵广€�
     * @param lon - {number} 鍦板浘鍗曚綅涓婄殑X杞村潗鏍囷紝濡傛灉鍦板浘鏄湴鐞嗘姇褰憋紝鍒欐鍊兼槸缁忓害锛屽惁鍒欙紝姝ゅ€兼槸鍦板浘鍦扮悊浣嶇疆鐨剎鍧愭爣銆�
     * @param lat - {number} 鍦板浘鍗曚綅涓婄殑Y杞村潗鏍囷紝濡傛灉鍦板浘鏄湴鐞嗘姇褰憋紝鍒欐鍊兼槸绾害锛屽惁鍒欙紝姝ゅ€兼槸鍦板浘鍦扮悊浣嶇疆鐨剏鍧愭爣銆�
     * @param location - {Array<float>} [lon, lat]  濡傛灉瑕佸悓鏃惰缃紝鍒欎娇鐢ㄤ紶鍏ユí绾靛潗鏍囩粍鎴愮殑鏁扮粍銆�
     * @example
     * var lonLat = new SuperMap.LonLat(30,45);
     */
    var LonLat = function () {

      /**
       * @member SuperMap.LonLat.prototype.lon  -{float}
       * @description 鍦板浘鐨勫崟浣嶇殑X杞达紙妯酱锛夊潗鏍囷紝榛樿涓�0.0銆�
       */
      function LonLat(lon, lat) {
        _classCallCheck(this, LonLat);

        this.lon = 0.0;
        this.lat = 0.0;
        this.CLASS_NAME = "SuperMap.LonLat";

        if (_Util.Util.isArray(lon)) {
          lat = lon[1];
          lon = lon[0];
        }
        this.lon = lon ? _Util.Util.toFloat(lon) : this.lon;
        this.lat = lat ? _Util.Util.toFloat(lat) : this.lat;
      }

      /**
       * @function SuperMap.LonLat.prototype.toString
       * @description 杩斿洖姝ゅ璞＄殑瀛楃涓插舰寮�
       * @example
       * var lonLat = new SuperMap.LonLat(100,50);
       * var str = lonLat.toString();
       * @returns {string} 渚嬪: "lon=100,lat=50"
       */


      /**
       * @member SuperMap.LonLat.prototype.lat  -{float}
       * @description 鍦板浘鐨勫崟浣嶇殑Y杞达紙绾佃酱锛夊潗鏍囷紝榛樿涓�0.0銆�
       */


      _createClass(LonLat, [{
        key: 'toString',
        value: function toString() {
          return "lon=" + this.lon + ",lat=" + this.lat;
        }

        /**
         * @function SuperMap.LonLat.prototype.toShortString
         * @description 灏嗙粡搴︾含搴﹁浆鎹㈡垚绠€鍗曞瓧绗︿覆銆�
         * @example
         * var lonLat = new SuperMap.LonLat(100,50);
         * var str = lonLat.toShortString();
         * @returns {string} 杩斿洖澶勭悊鍚庣殑缁忕含搴﹀瓧绗︿覆銆備緥濡傦細"100,50"
         */

      }, {
        key: 'toShortString',
        value: function toShortString() {
          return this.lon + "," + this.lat;
        }

        /**
         * @function SuperMap.LonLat.prototype.clone
         * @description 澶嶅埗鍧愭爣瀵硅薄锛屽苟杩斿洖澶嶅埗鍚庣殑鏂板璞°€�
         * @example
         * var lonLat1 = new SuperMap.LonLat(100,50);
         * var lonLat2 = lonLat1.clone();
         * @returns {SuperMap.LonLat}  杩斿洖鐩稿悓鍧愭爣鍊肩殑鏂扮殑鍧愭爣瀵硅薄銆�
         */

      }, {
        key: 'clone',
        value: function clone() {
          return new LonLat(this.lon, this.lat);
        }

        /**
         * @function SuperMap.LonLat.prototype.add
         * @description 鍦ㄥ凡鏈夊潗鏍囧璞＄殑缁忕含搴﹀熀纭€涓婂姞涓婃柊鐨勫潗鏍囩粡绾害锛屽苟杩斿洖鏂扮殑鍧愭爣瀵硅薄銆�
         * @example
         * var lonLat1 = new SuperMap.LonLat(100,50);
         * //lonLat2 鏄柊鐨勫璞�
         * var lonLat2 = lonLat1.add(100,50);
         *
         * @param lon - {float} 浼犲叆鐨勭簿搴﹀弬鏁般€�
         * @param lat - {float} 浼犲叆鐨勭含搴﹀弬鏁般€�
         * @returns {SuperMap.LonLat} 杩斿洖涓€涓柊鐨凩onLat瀵硅薄锛屾瀵硅薄鐨勭粡绾害鏄敱浼�
         *      鍏ョ殑缁忕含搴︿笌褰撳墠鐨勭粡绾害鐩稿姞鎵€寰椼€�
         */

      }, {
        key: 'add',
        value: function add(lon, lat) {
          if (lon == null || lat == null) {
            throw new TypeError('LonLat.add cannot receive null values');
          }
          return new LonLat(this.lon + _Util.Util.toFloat(lon), this.lat + _Util.Util.toFloat(lat));
        }

        /**
         * @function SuperMap.LonLat.prototype.equals
         * @description 鍒ゆ柇涓や釜鍧愭爣瀵硅薄鏄惁鐩哥瓑銆�
         * @example
         * var lonLat1 = new SuperMap.LonLat(100,50);
         * var lonLat2 = new SuperMap.LonLat(100,50);
         * var isEquals = lonLat1.equals(lonLat2);
         *
         * @param ll - {SuperMap.LonLat} 闇€瑕佽繘琛屾瘮杈冪殑鍧愭爣瀵硅薄銆�
         * @returns {boolean} 濡傛灉LonLat瀵硅薄鐨勭粡绾害鍜屼紶鍏ョ殑缁忕含搴︿竴鑷村垯杩斿洖true,涓嶄竴
         *      鑷存垨浼犲叆鐨刲l鍙傛暟涓篘ULL鍒欒繑鍥瀎alse銆�
         */

      }, {
        key: 'equals',
        value: function equals(ll) {
          var equals = false;
          if (ll != null) {
            equals = this.lon === ll.lon && this.lat === ll.lat || isNaN(this.lon) && isNaN(this.lat) && isNaN(ll.lon) && isNaN(ll.lat);
          }
          return equals;
        }

        /**
         * @function SuperMap.LonLat.prototype.wrapDateLine
         * @description 閫氳繃浼犲叆鐨勮寖鍥村璞″鍧愭爣瀵硅薄杞崲鍒拌鑼冨洿鍐呫€�
         * 濡傛灉缁忓害灏忎簬缁欏畾鑼冨洿鏈€灏忕簿搴︼紝鍒欏湪鍘熺粡搴﹀熀纭€涓婂姞涓婅寖鍥村搴︼紝
         * 鐩村埌绮惧害鍦ㄨ寖鍥村唴涓烘锛屽鏋滅粡搴﹀ぇ浜庣粰瀹氳寖鍥村垯鍦ㄥ師缁忓害鍩虹涓婂噺鍘昏寖鍥村搴︺€�
         * 鎹㈠彞璇濊灏辨槸灏嗕笉鍦ㄧ粡搴﹁寖鍥村唴鐨勫潗鏍囪浆鎹㈠埌鑼冨洿浠ュ唴銆�
         *  锛堝彧浼氳浆鎹on锛屼笉浼氳浆鎹at锛屼富瑕佺敤浜庤浆绉诲埌鏃ョ晫绾夸互鍐咃級
         * @example
         * var lonLat1 = new SuperMap.LonLat(420,50);
         * var lonLat2 = lonLat1.wrapDateLine(
         *      new SuperMap.Bounds(-180,-90,180,90)
         *  );
         *
         * @param maxExtent - {SuperMap.Bounds} 鏈€澶ц竟鐣岀殑鑼冨洿銆�
         * @returns {SuperMap.LonLat} 灏嗗潗鏍囪浆鎹㈠埌鑼冨洿瀵硅薄浠ュ唴锛屽苟杩斿洖鏂扮殑鍧愭爣銆�
         */

      }, {
        key: 'wrapDateLine',
        value: function wrapDateLine(maxExtent) {

          var newLonLat = this.clone();

          if (maxExtent) {
            //shift right?
            while (newLonLat.lon < maxExtent.left) {
              newLonLat.lon += maxExtent.getWidth();
            }

            //shift left?
            while (newLonLat.lon > maxExtent.right) {
              newLonLat.lon -= maxExtent.getWidth();
            }
          }

          return newLonLat;
        }

        /**
         *
         * @function SuperMap.LonLat.prototype.destroy
         * @description 閿€姣佹瀵硅薄銆�
         * 閿€姣佸悗姝ゅ璞＄殑鎵€鏈夊睘鎬т负null锛岃€屼笉鏄垵濮嬪€笺€�
         * @example
         * var lonLat = new SuperMap.LonLat(100,50);
         * lonLat.destroy();
         */

      }, {
        key: 'destroy',
        value: function destroy() {
          this.lon = null;
          this.lat = null;
        }

        /**
         * @function SuperMap.LonLat.fromString
         * @description 閫氳繃瀛楃涓茬敓鎴愪竴涓�<SuperMap.LonLat>瀵硅薄
         * @example
         * var str = "100,50";
         * var lonLat = SuperMap.LonLat.fromString(str);
         *
         * @param str - {string} 瀛楃涓茬殑鏍煎紡锛歀on+","+Lat銆傚锛�"100,50"
         * @returns {SuperMap.LonLat} 杩斿洖涓€涓� <SuperMap.LonLat> 瀵硅薄
         */

      }], [{
        key: 'fromString',
        value: function fromString(str) {
          var pair = str.split(",");
          return new LonLat(pair[0], pair[1]);
        }

        /**
         * @function SuperMap.LonLat.fromArray
         * @description 閫氳繃鏁扮粍鐢熸垚涓€涓�<SuperMap.LonLat>瀵硅薄
         * @param arr - {Array<float>} 鏁扮粍鐨勬牸寮忥紝闀垮害鍙兘涓�2,锛歔Lon,Lat]銆傚锛� [5,-42]
         * @returns {SuperMap.LonLat} 杩斿洖涓€涓� <SuperMap.LonLat> 瀵硅薄
         */

      }, {
        key: 'fromArray',
        value: function fromArray(arr) {
          var gotArr = _Util.Util.isArray(arr),
              lon = gotArr && arr[0],
              lat = gotArr && arr[1];
          return new LonLat(lon, lat);
        }
      }]);

      return LonLat;
    }();

    exports.default = LonLat;

    _SuperMap2.default.LonLat = LonLat;

    /***/ }),
  /* 31 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.Pixel
     * @classdesc 姝ょ被鐢▁,y鍧愭爣鎻忕粯灞忓箷鍧愭爣锛堝儚绱犵偣锛夈€�
     * @param x - {number} x鍧愭爣锛岄粯璁や负0.0
     * @param y - {number} y鍧愭爣锛岄粯璁や负0.0
     * @param mode - {string} 鍧愭爣妯″紡锛岄粯璁や负{@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
     *
     * @example
     * //鍗曠嫭鍒涘缓涓€涓璞�
     * var pixcel = new SuperMap.Pixel(100,50);
     *
     * //渚濇嵁size鍒涘缓
     *  var size = new SuperMap.Size(21,25);
     *  var offset = new SuperMap.Pixel(-(size.w/2), -size.h);
     */
    var Pixel = function () {

      /**
       * @member SuperMap.Pixel.prototype.y -{number}
       * @description y鍧愭爣锛岄粯璁や负0.0
       */
      function Pixel(x, y, mode) {
        _classCallCheck(this, Pixel);

        this.x = 0.0;
        this.y = 0.0;
        this.mode = null;
        this.CLASS_NAME = "SuperMap.Pixel";

        this.x = x ? parseFloat(x) : this.x;
        this.y = y ? parseFloat(y) : this.y;
        this.mode = mode;
      }

      /**
       * @function SuperMap.Pixel.prototype.toString
       * @description 杩斿洖姝ゅ璞＄殑瀛楃涓插舰寮�
       * @example
       *
       * var pixcel = new SuperMap.Pixel(100,50);
       * var str = pixcel.toString();
       *
       * @returns {string} 渚嬪: "x=200.4,y=242.2"
       */


      /**
       * @member SuperMap.Pixel.prototype.mode -{SuperMap.Pixel.Mode}
       * @description 鍧愭爣妯″紡锛屾湁宸︿笂銆佸彸涓娿€佸彸涓嬨€佸乏涓嬭繖鍑犵妯″紡锛屽垎鍒〃绀虹浉瀵逛簬宸︿笂瑙掋€佸彸涓婅銆佸彸涓嬭銆佸乏涓嬭鐨勫潗鏍囥€�<br>
       * 鍊兼湁<br>
       * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
       * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.RightTop}
       * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.RightBottom}
       * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftBottom}
       *
       * 杩欏洓绉� 榛樿鍊间负锛歿@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
       *
       * @default {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
       */


      /**
       * @member SuperMap.Pixel.prototype.x -{number}
       * @description x鍧愭爣锛岄粯璁や负0.0
       */


      _createClass(Pixel, [{
        key: "toString",
        value: function toString() {
          return "x=" + this.x + ",y=" + this.y;
        }

        /**
         * @function SuperMap.Pixel.prototype.clone
         * @description 鍏嬮殕褰撳墠鐨� pixel 瀵硅薄銆�
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = pixcel.clone();
         * @returns {SuperMap.Pixel} 杩斿洖涓€涓柊鐨勪笌褰撳墠 pixel 瀵硅薄鏈夌浉鍚寈銆亂鍧愭爣鐨� pixel 瀵硅薄銆�
         */

      }, {
        key: "clone",
        value: function clone() {
          return new Pixel(this.x, this.y, this.mode);
        }

        /**
         * @function SuperMap.Pixel.prototype.equals
         * @description 姣旇緝涓� pixel 鏄惁鐩哥瓑
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = new SuperMap.Pixel(100,50);
         * var isEquals = pixcel.equals(pixcel2);
         *
         * @param px - {SuperMap.Pixel} 鐢ㄤ簬姣旇緝鐩哥瓑鐨� pixel 瀵硅薄銆�
         * @returns {Boolean} 濡傛灉浼犲叆鐨勫儚绱犵偣鍜屽綋鍓嶅儚绱犵偣鐩稿悓杩斿洖true,濡傛灉涓嶅悓鎴栦紶鍏ュ弬鏁颁负NULL鍒欒繑鍥瀎alse
         */

      }, {
        key: "equals",
        value: function equals(px) {
          var equals = false;
          if (px != null) {
            equals = this.x == px.x && this.y == px.y || isNaN(this.x) && isNaN(this.y) && isNaN(px.x) && isNaN(px.y);
          }
          return equals;
        }

        /**
         * @function SuperMap.Pixel.prototype.distanceTo
         * @description 杩斿洖涓や釜 pixel 鐨勮窛绂汇€�
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = new SuperMap.Pixel(110,30);
         * var distance = pixcel.distanceTo(pixcel2);
         *
         * @param px - {SuperMap.Pixel} 鐢ㄤ簬璁＄畻鐨勪竴涓� pixel
         * @returns {float} 浣滀负鍙傛暟浼犲叆鐨勫儚绱犱笌褰撳墠鍍忕礌鐐圭殑璺濈銆�
         */

      }, {
        key: "distanceTo",
        value: function distanceTo(px) {
          return Math.sqrt(Math.pow(this.x - px.x, 2) + Math.pow(this.y - px.y, 2));
        }

        /**
         * @function SuperMap.Pixel.prototype.add
         * @description 鍦ㄥ師鏉ュ儚绱犲潗鏍囧熀纭€涓婏紝x鍊煎姞涓婁紶鍏ョ殑x鍙傛暟锛寉鍊煎姞涓婁紶鍏ョ殑y鍙傛暟銆�
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * //pixcel2鏄柊鐨勫璞�
         * var pixcel2 = pixcel.add(20,30);
         *
         * @param x - {number} 浼犲叆鐨剎鍊笺€�
         * @param y - {number} 浼犲叆鐨剏鍊笺€�
         * @returns {SuperMap.Pixel} 杩斿洖涓€涓柊鐨刾ixel瀵硅薄锛岃pixel鏄敱褰撳墠鐨刾ixel涓庝紶
         *      鍏ョ殑x,y鐩稿姞寰楀埌銆�
         */

      }, {
        key: "add",
        value: function add(x, y) {
          if (x == null || y == null) {
            throw new TypeError('Pixel.add cannot receive null values');
          }
          return new Pixel(this.x + x, this.y + y);
        }

        /**
         * @function SuperMap.Pixel.prototype.offset
         * @description 閫氳繃浼犲叆鐨� {@link SuperMap.Pixel} 鍙傛暟瀵瑰師灞忓箷鍧愭爣杩涜鍋忕Щ銆�
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = new SuperMap.Pixel(130,20);
         * //pixcel3 鏄柊鐨勫璞�
         * var pixcel3 = pixcel.offset(pixcel2);
         *
         * @param px - {SuperMap.Pixel}  浼犲叆鐨� <SuperMap.Pixel> 瀵硅薄銆�
         * @returns {SuperMap.Pixel} 杩斿洖涓€涓柊鐨刾ixel锛岃pixel鏄敱褰撳墠鐨刾ixel瀵硅薄鐨剎锛寉
         *      鍊间笌浼犲叆鐨凱ixel瀵硅薄鐨剎锛寉鍊肩浉鍔犲緱鍒般€�
         */

      }, {
        key: "offset",
        value: function offset(px) {
          var newPx = this.clone();
          if (px) {
            newPx = this.add(px.x, px.y);
          }
          return newPx;
        }

        /**
         *
         * @function SuperMap.Pixel.prototype.destroy
         * @description 閿€姣佹瀵硅薄銆�
         * 閿€姣佸悗姝ゅ璞＄殑鎵€鏈夊睘鎬т负null锛岃€屼笉鏄垵濮嬪€笺€�
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * pixcel.destroy();
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this.x = null;
          this.y = null;
          this.mode = null;
        }

        /**
         * @member SuperMap.Pixel.Mode
         * @enum {string}
         * @readonly
         * @description 妯″紡
         *
         * * SuperMap.Pixel.Mode.LeftTop 宸︿笂妯″紡
         * * SuperMap.Pixel.Mode.RightTop 鍙充笂妯″紡
         * * SuperMap.Pixel.Mode.RightBottom 鍙充笅妯″紡
         * * SuperMap.Pixel.Mode.LeftBottom 宸︿笅妯″紡
         */

      }]);

      return Pixel;
    }();

    Pixel.Mode = {
      LeftTop: "lefttop",
      RightTop: "righttop",
      RightBottom: "rightbottom",
      LeftBottom: "leftbottom"
    };
    exports.default = Pixel;

    _SuperMap2.default.Pixel = Pixel;

    /***/ }),
  /* 32 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class  SuperMap.Size
     * @classdesc 姝ょ被鎻忕粯涓€瀵归珮瀹藉€肩殑瀹炰緥銆�
     * @param  w -{number} 瀹藉害锛岄粯璁ゅ€间负0.0
     * @param  h -{number} 楂樺害 锛岄粯璁ゅ€间负0.0
     *
     * @example
     * var size = new SuperMap.Size(31,46);
     */
    var Size = function () {

      /**
       * @member SuperMap.Size.prototype.w -{number}
       * @description  瀹斤紝榛樿鍊间负0.0
       */
      function Size(w, h) {
        _classCallCheck(this, Size);

        this.w = 0.0;
        this.h = 0.0;
        this.CLASS_NAME = "SuperMap.Size";

        this.w = w ? parseFloat(w) : this.w;
        this.h = w ? parseFloat(h) : this.h;
      }

      /**
       * @function SuperMap.Size.prototype.toString
       * @description 杩斿洖姝ゅ璞＄殑瀛楃涓插舰寮�
       * @example
       * var size = new SuperMap.Size(10,5);
       * var str = size.toString();
       * @returns {string} 渚嬪锛�"w=10,h=5"
       */


      /**
       * @member SuperMap.Size.prototype.h -{number}
       * @description 楂橈紝榛樿鍊间负0.0
       */


      _createClass(Size, [{
        key: "toString",
        value: function toString() {
          return "w=" + this.w + ",h=" + this.h;
        }

        /**
         * @function SuperMap.Size.prototype.clone
         * @description 鍏嬮殕褰撳墠size瀵硅薄.
         * @example
         * var size = new SuperMap.Size(31,46);
         * var size2 = size.clone();
         *
         * @returns {SuperMap.Size}  杩斿洖涓€涓柊鐨勪笌褰撳墠size瀵硅薄鏈夌浉鍚屽銆侀珮鐨凷ize瀵硅薄銆�
         */

      }, {
        key: "clone",
        value: function clone() {
          return new Size(this.w, this.h);
        }

        /**
         *
         * @function SuperMap.Size.prototype.equals
         * @description 姣旇緝涓や釜size瀵硅薄鏄惁鐩哥瓑銆�
         * @example
         * var size = new SuperMap.Size(31,46);
         * var size2 = new SuperMap.Size(31,46);
         * var isEquals = size.equals(size2);
         *
         * @param sz -{SuperMap.Size} 鐢ㄤ簬姣旇緝鐩哥瓑鐨凷ize瀵硅薄銆�
         * @returns {Boolean} 浼犲叆鐨剆ize鍜屽綋鍓峴ize楂樺鐩哥瓑锛屾敞鎰忥細濡傛灉浼犲叆鐨剆ize涓虹┖鍒欒繑鍥瀎alse
         *
         */

      }, {
        key: "equals",
        value: function equals(sz) {
          var equals = false;
          if (sz != null) {
            equals = this.w === sz.w && this.h === sz.h || isNaN(this.w) && isNaN(this.h) && isNaN(sz.w) && isNaN(sz.h);
          }
          return equals;
        }

        /**
         *
         * @function SuperMap.Size.prototype.destroy
         * @description 閿€姣佹瀵硅薄銆傞攢姣佸悗姝ゅ璞＄殑鎵€鏈夊睘鎬т负null锛岃€屼笉鏄垵濮嬪€笺€�
         * @example
         * var size = new SuperMap.Size(31,46);
         * size.destroy();
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this.w = null;
          this.h = null;
        }
      }]);

      return Size;
    }();

    exports.default = Size;

    _SuperMap2.default.Size = Size;

    /***/ }),
  /* 33 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Feature2 = __webpack_require__(29);

    var _Feature3 = _interopRequireDefault(_Feature2);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TRASH THIS
    _SuperMap2.default.State = {
      /** states */
      UNKNOWN: 'Unknown',
      INSERT: 'Insert',
      UPDATE: 'Update',
      DELETE: 'Delete'
    };

    /**
     * @class SuperMap.Feature.Vector
     * @classdesc 鐭㈤噺瑕佺礌绫汇€傝绫诲叿鏈� Geometry 灞炴€у瓨鏀惧嚑浣曚俊鎭紝attributes 灞炴€у瓨鏀鹃潪鍑犱綍淇℃伅锛屽彟澶栬繕鍖呭惈浜� style 灞炴€э紝
     *             鐢ㄦ潵瀹氫箟鐭㈤噺瑕佺礌鐨勬牱寮忥紝鍏朵腑锛岄粯璁ょ殑鏍峰紡鍦� <SuperMap.Feature.Vector.style> 绫讳腑瀹氫箟锛屽鏋滄病鏈夌壒鍒殑鎸囧畾灏嗕娇鐢ㄩ粯璁ょ殑鏍峰紡銆�
     * @extends SuperMap.Feature
     * @param geometry - {SuperMap.Geometry} 浠ｈ〃瑕佺礌鐨勫嚑浣曞舰鐘躲€�
     * @param attributes - {Object} 鎻忚堪瑕佺礌鐨勪换鎰忕殑鍙簭鍒楀寲灞炴€э紝灏嗚鏄犲皠鍒� attributes 灞炴€т腑鐨勫彲閫夊璞°€�
     * @param style - {Object} 涓€涓彲閫夌殑鏍峰紡瀵硅薄銆�
     * @example
     * var geometry = new SuperMap.Geometry.Point(-115,10);
     *  var style = {
     *      strokeColor:"#339933",
     *      strokeOpacity:1,
     *      strokeWidth:3,
     *      pointRadius:6
     *  }
     *  var pointFeature = new SuperMap.Feature.Vector(geometry,null,style);
     *  vectorLayer.addFeatures(pointFeature);
     */

    var Vector = function (_Feature) {
      _inherits(Vector, _Feature);

      /**
       * @member SuperMap.Feature.Vector.prototype.renderIntent - {string}
       * @description Feature瑕佺礌鍗宠琚覆鏌撶殑鏍峰紡鐘舵€侊紝瀵瑰簲StyleMap涓殑鐘舵€佸畾涔夌殑鍙€夊€笺€�
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.style - {Object}
       * @description 瑕佺礌鐨勬牱寮忓睘鎬э紝鍦板浘鏌ヨ杩斿洖鐨刦eature鐨剆tyle锛�8C鍙樹负null銆�
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.bounds - {SuperMap.Bounds}
       * @description 瑕佺礌鐨凚ounds鑼冨洿銆�
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.geometry - {SuperMap.Geometry}
       * @description 璇ュ睘鎬х敤浜庡瓨鏀惧嚑浣曚俊鎭€�
       */
      function Vector(geometry, attributes, style) {
        _classCallCheck(this, Vector);

        var _this = _possibleConstructorReturn(this, (Vector.__proto__ || Object.getPrototypeOf(Vector)).call(this, null, null, attributes));

        _this.fid = null;
        _this.geometry = null;
        _this.attributes = null;
        _this.bounds = null;
        _this.state = null;
        _this.style = null;
        _this.url = null;
        _this.renderIntent = "default";
        _this.modified = null;
        _this.CLASS_NAME = "SuperMap.Feature.Vector";

        _this.lonlat = null;
        _this.geometry = geometry ? geometry : null;
        _this.state = null;
        _this.attributes = {};
        if (attributes) {
          _this.attributes = _Util.Util.extend(_this.attributes, attributes);
        }
        _this.style = style ? style : null;
        return _this;
      }

      /**
       * @function SuperMap.Feature.Vector.prototype.destroy
       * @description 閲婃斁鐩稿叧璧勬簮銆�
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.modified - {Object}
       * @description 涓€涓叿鏈夊彲浠ヨ鏀瑰彉鐨勫師濮嬪嚑浣曞舰鐘跺拰灞炴€э紝琚� <SuperMap.Control.ModifyFeature> 鍐欏叆銆�
       * 搴旂敤绋嬪簭鍙互鍦╝ttributes涓缃師濮嬬殑鑳借淇敼鐨勫睘鎬э紝闇€瑕佹敞鎰忕殑鏄紝搴旂敤绋嬪簭闇€瑕佸湪浣跨敤鏌愪釜瀵硅薄鍙婂叾灞�
       * 鎬у墠妫€娴嬭繖涓璞″強鍏� attributes 灞炴€ф槸鍚﹀垱寤猴紝鐢� ModifyFeature鏀瑰彉涔嬪悗锛岃繖涓璞″涓嬫墍绀猴細
       * @example
       * {
       *     geometry: Object
       * }
       *
       * 褰撳簲鐢ㄧ▼搴忛渶瑕佸瑕佺礌鐨� attributes 杩涜淇敼锛屽垯闇€瑕佸涓嬭缃� attributes锛�
       * @example
       * {
       *     attributes: {
       *         myAttribute: "original"
       *     }
       * }
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.url - {string}
       * @description 濡傛灉璁剧疆浜嗚繖涓睘鎬э紝鍦ㄦ洿鏂版垨鑰呭垹闄よ绱犳椂闇€瑕佽€冭檻 <SuperMap.HTTP> 銆�
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.state - {string}
       * @description state
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.attributes - {Object}
       * @description 鎻忚堪瑕佺礌鐨勪换鎰忕殑鍙簭鍒楀寲灞炴€с€�
       */


      /**
       * @member SuperMap.Feature.Vector.prototype.fid - {string}
       * @description fid
       */


      _createClass(Vector, [{
        key: 'destroy',
        value: function destroy() {
          if (this.layer) {
            this.layer.removeFeatures(this);
            this.layer = null;
          }

          this.geometry = null;
          this.modified = null;
          _get(Vector.prototype.__proto__ || Object.getPrototypeOf(Vector.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.clone
         * @description 鍏嬮殕瀵硅薄銆�
         * @returns {SuperMap.Feature.Vector} 鍏嬮殕鐨凷uperMap.Feature.Vector瀵硅薄銆�
         */

      }, {
        key: 'clone',
        value: function clone() {
          return new Vector(this.geometry ? this.geometry.clone() : null, this.attributes, this.style);
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.onScreen
         * @description 鍒ゆ柇瑕佺礌鏄惁鍦ㄥ湴鍥捐鍥捐寖鍥村唴銆�
         * @param boundsOnly - {boolean} 瑕佺礌鐨刡ounds鑼冨洿鏄惁涓庡湴鍥剧殑瑙嗗浘鑼冨洿鐩镐氦銆�
         * @returns {boolean} 瑕佺礌鏄惁鍦ㄥ湴鍥捐鍥捐寖鍥村唴銆�
         */

      }, {
        key: 'onScreen',
        value: function onScreen(boundsOnly) {
          var onScreen = false;
          if (this.layer && this.layer.map) {
            var screenBounds = this.layer.map.getExtent();
            if (boundsOnly) {
              var featureBounds = this.geometry.getBounds();
              onScreen = screenBounds.intersectsBounds(featureBounds);
            } else {
              var screenPoly = screenBounds.toGeometry();
              onScreen = screenPoly.intersects(this.geometry);
            }
          }
          return onScreen;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.getVisibility
         * @description 鍒ゆ柇瑕佺礌鏄惁鍙銆�
         * @returns {boolean} 瑕佺礌鏄惁鍙銆�
         */

      }, {
        key: 'getVisibility',
        value: function getVisibility() {
          return !(this.style && this.style.display === 'none' || !this.layer || this.layer && this.layer.styleMap && this.layer.styleMap.createSymbolizer(this, this.renderIntent).display === 'none' || this.layer && !this.layer.getVisibility());
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.createMarker
         * @description HACK - 闇€瑕佸垽鏂槸鍚︽墍鏈夌殑鐭㈤噺瑕佺礌鑳藉垱寤烘爣璁般€�
         * @returns {SuperMap.Marker} 褰撳墠杩斿洖null銆�
         */

      }, {
        key: 'createMarker',
        value: function createMarker() {
          return null;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.destroyMarker
         * @description HACK - 闇€瑕佸垽鏂槸鍚︽墍鏈夌殑鐭㈤噺瑕佺礌鑳介攢姣佹爣璁般€傚綋鍓嶄笉鍋氫换浣曟搷浣溿€�
         */

      }, {
        key: 'destroyMarker',
        value: function destroyMarker() {}
        // pass


        /**
         * @function SuperMap.Feature.Vector.prototype.createPopup
         * @description HACK - 闇€瑕佸垽鏂槸鍚︽墍鏈夌殑鐭㈤噺瑕佺礌鑳藉垱寤哄脊鍑虹獥鍙ｃ€�
         * @returns {SuperMap.Popup} 褰撳墠杩斿洖null銆�
         */

      }, {
        key: 'createPopup',
        value: function createPopup() {
          return null;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.atPoint
         * @description 鍒ゆ柇鏄惁瑕佺礌涓庡埗瀹氱殑浣嶇疆鐐圭浉浜ゃ€�
         * @param lonlat - {SuperMap.LonLat}
         * @param toleranceLon - {float} 缁忓害銆�
         * @param toleranceLat - {float} 缁村害銆�
         * @returns {boolean} 鏄惁瑕佺礌涓庡埗瀹氱殑浣嶇疆鐐圭浉浜ゃ€�
         */

      }, {
        key: 'atPoint',
        value: function atPoint(lonlat, toleranceLon, toleranceLat) {
          var atPoint = false;
          if (this.geometry) {
            atPoint = this.geometry.atPoint(lonlat, toleranceLon, toleranceLat);
          }
          return atPoint;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.destroyPopup
         * @description HACK - 闇€瑕佸垽鏂槸鍚︽墍鏈夌殑鐭㈤噺瑕佺礌鑳介攢姣佸脊鍑虹獥鍙ｃ€�
         */

      }, {
        key: 'destroyPopup',
        value: function destroyPopup() {}
        // pass


        /**
         * @function SuperMap.Feature.Vector.prototype.move
         * @description 绉诲姩瑕佺礌骞跺湪鏂颁綅缃噸缁樿绱犮€�
         * @param location - {SuperMap.LonLat|SuperMap.Pixel} 绉诲姩鍒扮殑鏂颁綅缃偣銆�
         */

      }, {
        key: 'move',
        value: function move(location) {

          if (!this.layer || !this.geometry.move) {
            //do nothing if no layer or immoveable geometry
            return undefined;
          }

          var pixel;
          if (location.CLASS_NAME === "SuperMap.LonLat") {
            pixel = this.layer.getViewPortPxFromLonLat(location);
          } else {
            pixel = location;
          }

          var lastPixel = this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());
          var res = this.layer.map.getResolution();
          this.geometry.move(res * (pixel.x - lastPixel.x), res * (lastPixel.y - pixel.y));
          this.layer.drawFeature(this);
          return lastPixel;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.toState
         * @description 璁剧疆鏂扮姸鎬併€�
         * @param state - {string} 鐘舵€併€�
         */

      }, {
        key: 'toState',
        value: function toState(state) {
          if (state === _SuperMap2.default.State.UPDATE) {
            switch (this.state) {
              case _SuperMap2.default.State.UNKNOWN:
              case _SuperMap2.default.State.DELETE:
                this.state = state;
                break;
              case _SuperMap2.default.State.UPDATE:
              case _SuperMap2.default.State.INSERT:
                break;
            }
          } else if (state === _SuperMap2.default.State.INSERT) {
            switch (this.state) {
              case _SuperMap2.default.State.UNKNOWN:
                break;
              default:
                this.state = state;
                break;
            }
          } else if (state === _SuperMap2.default.State.DELETE) {
            switch (this.state) {
              case _SuperMap2.default.State.INSERT:
                // the feature should be destroyed
                break;
              case _SuperMap2.default.State.DELETE:
                break;
              case _SuperMap2.default.State.UNKNOWN:
              case _SuperMap2.default.State.UPDATE:
                this.state = state;
                break;
            }
          } else if (state === _SuperMap2.default.State.UNKNOWN) {
            this.state = state;
          }
        }

        /**
         * @member SuperMap.Feature.Vector.style
         * @description SuperMap.features鏈夊ぇ閲忕殑鏍峰紡灞炴€э紝濡傛灉娌℃湁鐗瑰埆鐨勬寚瀹氬皢浣跨敤榛樿鐨勬牱寮忥紝澶ч儴鍒嗘牱寮忛€氳繃SVG鏍囧噯瀹氫箟灞炴€с€�
         * - fill properties璧勬枡浠嬬粛: {@link http://www.w3.org/TR/SVG/painting.html#FillProperties}
         * - stroke properties璧勬枡浠嬬粛: {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperties}
         *
         *  fill - {boolean} 涓嶉渶瑕佸～鍏呭垯璁剧疆涓篺alse銆�<br>
         *  fillColor - {string} 鍗佸叚杩涘埗濉厖棰滆壊锛岄粯璁や负"#ee9900"銆�<br>
         *  fillOpacity - {number} 濉厖涓嶉€忔槑搴︺€傞粯璁や负0.4銆�<br>
         *  stroke - {boolean} 涓嶉渶瑕佹弿杈瑰垯璁句负false銆�<br>
         *  strokeColor - {string} 鍗佸叚杩涘埗鎻忚竟棰滆壊銆�<br>
         *  strokeOpacity - {number} 鎻忚竟鐨勪笉閫忔槑搴�(0-1),榛樿涓�0.4銆�<br>
         *  strokeWidth - {number} 鍍忕礌鎻忚竟瀹藉害锛岄粯璁や负1銆�<br>
         *  strokeLinecap - {string} strokeLinecap鏈変笁绉嶇被鍨媌utt锛宺ound锛宻quare锛岄粯璁や负"round"銆�<br>
         *  strokeDashstyle - {string} 鏈塪ot,dash,dashot,longdash,longdashdot,solid鍑犵鏍峰紡锛岄粯璁や负"solid"銆�<br>
         *  graphic - {boolean} 涓嶉渶瑕佸垯璁剧疆涓篺alse銆�<br>
         *  pointRadius - {number} 鍍忕礌鐐瑰崐寰勶紝榛樿涓�6銆�<br>
         *  pointerEvents - {string}  榛樿涓�"visiblePainted"銆�<br>
         *  cursor - {string} 榛樿涓�""銆�<br>
         *  allowRotate -{string} 鏄惁鍏佽鍥炬爣闅忕潃杩愯鏂瑰悜鏃嬭浆锛岄粯璁や负false銆傜敤浜庢椂绌烘暟鎹浘灞傘€�<br>
         *  externalGraphic - {string} 杩炴帴鍒扮敤鏉ユ覆鏌撶偣鐨勫閮ㄧ殑鍥惧舰銆�<br>
         *  graphicWidth - {number} 澶栭儴鍥捐〃鐨勫儚绱犲搴︺€�<br>
         *  graphicHeight - {number} 澶栭儴鍥捐〃鐨勯珮瀹藉害銆�<br>
         *  graphicOpacity - {number} 澶栭儴鍥捐〃鐨勪笉閫忔槑搴�(0-1)銆�<br>
         *  graphicXOffset - {number} 澶栭儴鍥捐〃娌跨潃x鏂瑰悜鐨勫亸绉婚噺銆�<br>
         *  graphicYOffset - {number} 澶栭儴鍥捐〃娌跨潃y鏂瑰悜鐨勫亸绉婚噺Pixel銆�<br>
         *  rotation - {number} 涓€涓浘琛ㄦ部鐫€鍏朵腑蹇冪偣锛堟垨鑰呭亸绉讳腑蹇冩寚瀹氱偣锛夊湪椤烘椂閽堟柟鍚戞棆杞€�<br>
         *  graphicZIndex - {number} 娓叉煋鏃朵娇鐢ㄧ殑绱㈠紩鍊笺€俆he integer z-index value to use in rendering銆�<br>
         *  graphicName - {string} 娓叉煋鐐规椂鍥炬爣浣跨敤鐨勫悕瀛椼€傛敮鎸�"circle" , "square", "star", "x", "cross", "triangle"銆傞粯璁や负"circle"銆�<br>
         *  graphicTitle - {string} 澶栭儴鍥捐〃鐨勬彁绀烘銆�<br>
         *  backgroundGraphic - {string} 澶栭儴鍥捐〃鐨勮儗鏅€�<br>
         *  backgroundGraphicZIndex - {number} 鑳屾櫙鍥炬覆鏌撴椂浣跨敤鐨勭储寮曞€笺€�<br>
         *  backgroundXOffset - {number} 鑳屾櫙鍥惧湪x杞寸殑鍋忕Щ閲忋€�<br>
         *  backgroundYOffset - {number} 鑳屾櫙鍥惧湪x杞寸殑鍋忕Щ閲忋€�<br>
         *  backgroundHeight - {number} 鑳屾櫙鍥剧殑楂樺害銆傚鏋滄病鏈夎缃紝灏嗙敤graphicHeight銆�<br>
         *  backgroundWidth - {number} 鑳屾櫙鍥剧殑瀹藉害銆傚鏋滄病鏈夎缃紝灏嗙敤graphicWidth銆�<br>
         *  isUnicode - {boolean} 杩欎釜灞炴€ц閰嶅悎label灞炴€ф潵鐢紝褰撲负true鏃讹紝label灏卞彲浠ヤ娇鐢╱nicode缂栫爜锛屾瘮濡�"a"鐨剈nicode鍗佸叚杩涘埗缂栫爜涓�61锛屽垯label灞炴€у彲浠ヤ负"&#x61;",鍏朵腑"&#"涓哄墠缂€锛屾爣蹇楄繖涓负unicode缂栫爜锛�
         *  "x"鏄寚16杩涘埗,杩欐椂椤甸潰鏄剧ず鐨勬槸"a"锛涘綋姝ゅ€间负false鐨勬椂鍊欙紝label鐨勫唴瀹逛細琚洿鎺ヨ緭鍑猴紝姣斿锛宭abel涓�"&#x61;"锛岃繖鏃堕〉闈㈡樉绀虹殑涔熸槸"&#x61;"銆傞粯璁や负false銆�<br>
         *  label - {string} 鍙€夌殑鏍囩鏂囨湰銆�<br>
         *  labelAlign - {string} 鏍囩瀵归綈锛屾槸鐢变袱涓瓧绗︾粍鎴愮殑瀛楃涓诧紝濡傦細"lt", "cm", "rb"锛屽叾涓涓€涓瓧绗︿唬琛ㄦ按骞虫柟鍚戜笂鐨勫榻愶紝"l"=left, "c"=center, "r"=right锛涚浜屼釜瀛楃浠ｈ〃鍨傜洿鏂瑰悜涓婄殑瀵归綈锛�"t"=top, "m"=middle, "b"=bottom銆�<br>
         *  labelXOffset - {number} 鏍囩鍦▁杞存柟鍚戠殑鍋忕Щ閲忋€�<br>
         *  labelYOffset - {number} 鏍囩鍦▂杞存柟鍚戠殑鍋忕Щ閲忋€�<br>
         *  labelSelect - {boolean} 濡傛灉璁句负true锛屾爣绛惧彲浠ラ€夌敤SelectFeature鎴栬€卻imilar鎺т欢锛岄粯璁や负false銆�<br>
         *  fontColor - {string} 鏍囩瀛椾綋棰滆壊銆�<br>
         *  fontOpacity - {number} 鏍囩閫忔槑搴� (0-1)銆�<br>
         *  fontFamily - {string} 鏍囩鐨勫瓧浣撶被鍨嬨€�<br>
         *  fontSize - {string} 鏍囩鐨勫瓧浣撳ぇ灏忋€�<br>
         *  fontStyle - {string} 鏍囩鐨勫瓧浣撴牱寮忋€�<br>
         *  fontWeight - {string} 鏍囩鐨勫瓧浣撶矖缁嗐€�<br>
         *  display - {string} 濡傛灉display灞炴€ц缃负"none"锛岀鍙峰皢娌℃湁浠讳綍鏁堟灉銆�
         * @example
         *  // label鐨勭敤娉曞涓嬶細
         *  function addGeoTest(){
         *  var geometry = new SuperMap.Geometry.Point(105, 35);
         *  var pointFeature = new SuperMap.Feature.Vector(geometry);
         *  var styleTest = {
         *        label:"supermap",
         *        fontColor:"#0000ff",
         *        fontOpacity:"0.5",
         *        fontFamily:"闅朵功",
         *        fontSize:"8em",
         *        fontWeight:"bold",
         *        fontStyle:"italic",
         *        labelSelect:"true",
         *     }
         *           pointFeature.style = styleTest;
         *          vectorLayer.addFeatures([pointFeature]);
         * }
         */

      }]);

      return Vector;
    }(_Feature3.default);

    Vector.style = {
      'default': {
        fillColor: "#ee9900",
        fillOpacity: 0.4,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "#ee9900",
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        cursor: "inherit",
        fontColor: "#000000",
        labelAlign: "cm",
        labelOutlineColor: "white",
        labelOutlineWidth: 3
      },
      'select': {
        fillColor: "blue",
        fillOpacity: 0.4,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "blue",
        strokeOpacity: 1,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        cursor: "pointer",
        fontColor: "#000000",
        labelAlign: "cm",
        labelOutlineColor: "white",
        labelOutlineWidth: 3

      },
      'temporary': {
        fillColor: "#66cccc",
        fillOpacity: 0.2,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "#66cccc",
        strokeOpacity: 1,
        strokeLinecap: "round",
        strokeWidth: 2,
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        //cursor:"inherit",
        cursor: "default",
        fontColor: "#000000",
        labelAlign: "cm",
        labelOutlineColor: "white",
        labelOutlineWidth: 3

      },
      'delete': {
        display: "none"
      }
    };
    exports.default = Vector;

    _SuperMap2.default.Feature.Vector = Vector;

    /***/ }),
  /* 34 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _MultiPoint2 = __webpack_require__(8);

    var _MultiPoint3 = _interopRequireDefault(_MultiPoint2);

    var _Util = __webpack_require__(1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Geometry.Curve
     * @classdesc 鍑犱綍瀵硅薄鏇茬嚎绫汇€�
     * @extends SuperMap.Geometry.MultiPoint
     * @param components - {Array<SuperMap.Geometry.Point>} 鍑犱綍瀵硅薄鏁扮粍銆�
     * @example
     * var point1 = new SuperMap.Geometry.Point(10,20);
     * var point2 = new SuperMap.Geometry.Point(30,40);
     * var curve = new SuperMap.Geometry.Curve([point1,point2]);
     */
    var Curve = function (_MultiPoint) {
      _inherits(Curve, _MultiPoint);

      function Curve(points) {
        _classCallCheck(this, Curve);

        var _this = _possibleConstructorReturn(this, (Curve.__proto__ || Object.getPrototypeOf(Curve)).call(this, points));

        _this.componentTypes = ["SuperMap.Geometry.Point", "SuperMap.PointWithMeasure"];
        _this.CLASS_NAME = "SuperMap.Geometry.Curve";
        return _this;
      }

      /**
       * @member SuperMap.Geometry.Curve.prototype.componentTypes - {Array<string>}
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @readonly
       * @default ["{@link SuperMap.Geometry.Point}", "{@link SuperMap.PointWithMeasure}"]
       */


      return Curve;
    }(_MultiPoint3.default);

    exports.default = Curve;

    _SuperMap2.default.Geometry.Curve = Curve;

    /***/ }),
  /* 35 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _JSON = __webpack_require__(36);

    var _JSON2 = _interopRequireDefault(_JSON);

    var _Point = __webpack_require__(2);

    var _Point2 = _interopRequireDefault(_Point);

    var _MultiPoint = __webpack_require__(8);

    var _MultiPoint2 = _interopRequireDefault(_MultiPoint);

    var _LineString = __webpack_require__(5);

    var _LineString2 = _interopRequireDefault(_LineString);

    var _MultiLineString = __webpack_require__(13);

    var _MultiLineString2 = _interopRequireDefault(_MultiLineString);

    var _LinearRing = __webpack_require__(6);

    var _LinearRing2 = _interopRequireDefault(_LinearRing);

    var _Polygon = __webpack_require__(9);

    var _Polygon2 = _interopRequireDefault(_Polygon);

    var _MultiPolygon = __webpack_require__(14);

    var _MultiPolygon2 = _interopRequireDefault(_MultiPolygon);

    var _REST = __webpack_require__(4);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Format.GeoJSON
     * @classdesc  GeoJSON 鐨勮鍜屽啓銆備娇鐢� <SuperMap.Format.GeoJSON> 鏋勯€犲櫒鍒涘缓涓€涓狦eoJSON瑙ｆ瀽鍣ㄣ€�
     * @extends SuperMap.Format.JSON銆�
     */
    var GeoJSON = function (_JSONFormat) {
      _inherits(GeoJSON, _JSONFormat);

      function GeoJSON() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GeoJSON);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GeoJSON.__proto__ || Object.getPrototypeOf(GeoJSON)).call.apply(_ref, [this].concat(args))), _this), _this.ignoreExtraDims = false, _this.parseCoords = {
          /**
           * @function SuperMap.Format.GeoJSON.parseCoords.point
           * @description 灏嗕竴缁勫潗鏍囨垚涓€涓�<SuperMap.Geometry>瀵硅薄銆�
           * @param array - {Object} GeoJSON鐗囨涓殑涓€缁勫潗鏍囥€�
           * @return {SuperMap.Geometry} 涓€涓嚑浣曞璞°€�
           */
          "point": function point(array) {
            if (this.ignoreExtraDims == false && array.length != 2) {
              throw "Only 2D points are supported: " + array;
            }
            return new _Point2.default(array[0], array[1]);
          },

          /**
           * @function SuperMap.Format.GeoJSON.parseCoords.multipoint
           * @description 灏嗗潗鏍囩粍鏁扮粍杞寲鎴愪负涓€涓�<SuperMap.Geometry>瀵硅薄銆�
           * @param array - {Object} GeoJSON鐗囨涓殑鍧愭爣缁勬暟缁勩€�
           * @return {SuperMap.Geometry} 涓€涓嚑浣曞璞°€�
           */
          "multipoint": function multipoint(array) {
            var points = [];
            var p = null;
            for (var i = 0, len = array.length; i < len; ++i) {
              try {
                p = this.parseCoords["point"].apply(this, [array[i]]);
              } catch (err) {
                throw err;
              }
              points.push(p);
            }
            return new _MultiPoint2.default(points);
          },

          /**
           * @function SuperMap.Format.GeoJSON.parseCoords.linestring
           * @description 灏嗗潗鏍囩粍鏁扮粍杞寲鎴愪负涓€涓�<SuperMap.Geometry>瀵硅薄銆�
           * @param array - {Object} GeoJSON鐗囨涓殑鍧愭爣缁勬暟缁勩€�
           * @return {SuperMap.Geometry} 涓€涓嚑浣曞璞°€�
           */
          "linestring": function linestring(array) {
            var points = [];
            var p = null;
            for (var i = 0, len = array.length; i < len; ++i) {
              try {
                p = this.parseCoords["point"].apply(this, [array[i]]);
              } catch (err) {
                throw err;
              }
              points.push(p);
            }
            return new _LineString2.default(points);
          },

          /**
           * @function SuperMap.Format.GeoJSON.parseCoords.multilinestring
           * @description 灏嗗潗鏍囩粍鏁扮粍杞寲鎴愪负涓€涓�<SuperMap.Geometry>瀵硅薄銆�
           * @param array - {Object} GeoJSON鐗囨涓殑鍧愭爣缁勬暟缁勩€�
           * @return {SuperMap.Geometry} 涓€涓嚑浣曞璞°€�
           */
          "multilinestring": function multilinestring(array) {
            var lines = [];
            var l = null;
            for (var i = 0, len = array.length; i < len; ++i) {
              try {
                l = this.parseCoords["linestring"].apply(this, [array[i]]);
              } catch (err) {
                throw err;
              }
              lines.push(l);
            }
            return new _MultiLineString2.default(lines);
          },

          /**
           * @function SuperMap.Format.GeoJSON.parseCoords.polygon
           * @description 灏嗗潗鏍囩粍鏁扮粍杞寲鎴愪负涓€涓�<SuperMap.Geometry>瀵硅薄銆�
           * @return {SuperMap.Geometry} 涓€涓嚑浣曞璞°€�
           */
          "polygon": function polygon(array) {
            var rings = [];
            var r, l;
            for (var i = 0, len = array.length; i < len; ++i) {
              try {
                l = this.parseCoords["linestring"].apply(this, [array[i]]);
              } catch (err) {
                throw err;
              }
              r = new _LinearRing2.default(l.components);
              rings.push(r);
            }
            return new _Polygon2.default(rings);
          },

          /**
           * @function SuperMap.Format.GeoJSON.parseCoords.multipolygon
           * @description 灏嗗潗鏍囩粍鏁扮粍杞寲鎴愪负涓€涓�<SuperMap.Geometry>瀵硅薄銆�
           * @param array - {Object} GeoJSON鐗囨涓殑鍧愭爣缁勬暟缁勩€�
           * @return {SuperMap.Geometry} 涓€涓嚑浣曞璞°€�
           */
          "multipolygon": function multipolygon(array) {
            var polys = [];
            var p = null;
            for (var i = 0, len = array.length; i < len; ++i) {
              try {
                p = this.parseCoords["polygon"].apply(this, [array[i]]);
              } catch (err) {
                throw err;
              }
              polys.push(p);
            }
            return new _MultiPolygon2.default(polys);
          },

          /**
           * @function SuperMap.Format.GeoJSON.parseCoords.box
           * @description 灏嗗潗鏍囩粍鏁扮粍杞寲鎴愪负涓€涓�<SuperMap.Geometry>瀵硅薄銆�
           * @param array - {Object} GeoJSON鐗囨涓殑鍧愭爣缁勬暟缁勩€�
           * @return {SuperMap.Geometry} 涓€涓嚑浣曞璞°€�
           */
          "box": function box(array) {
            if (array.length != 2) {
              throw "GeoJSON box coordinates must have 2 elements";
            }
            return new _Polygon2.default([new _LinearRing2.default([new _Point2.default(array[0][0], array[0][1]), new _Point2.default(array[1][0], array[0][1]), new _Point2.default(array[1][0], array[1][1]), new _Point2.default(array[0][0], array[1][1]), new _Point2.default(array[0][0], array[0][1])])]);
          }

        }, _this.extract = {
          /**
           * @function SuperMap.Format.GeoJSON.extract.feature
           * @description 杩斿洖涓€涓〃绀哄崟涓绱犲璞＄殑GeoJSON鐨勪竴閮ㄥ垎銆�
           * @param feature - iServer瑕佺礌瀵硅薄
           * @return {Object} 涓€涓〃绀虹偣鐨勫璞°€�
           */
          'feature': function feature(_feature) {
            var geom = this.extract.geometry.apply(this, [_feature.geometry]);
            var json = {
              "type": "Feature",
              "properties": this.createAttributes(_feature),
              "geometry": geom
            };

            if (_feature.geometry && _feature.geometry.type === 'TEXT') {
              json.properties.texts = _feature.geometry.texts;
              json.properties.textStyle = _feature.geometry.textStyle;
            }
            if (_feature.fid !== null) {
              json.id = _feature.fid;
            }
            if (_feature.ID !== null) {
              json.id = _feature.ID;
            }
            return json;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.geometry
           * @description 杩斿洖涓€涓〃绀哄崟涓嚑浣曞璞＄殑GeoJSON鐨勪竴閮ㄥ垎銆�
           * @param geometry -iServer 鍑犱綍瀵硅薄
           * @return {Object} 涓€涓〃绀哄嚑浣曚綋鐨勫璞°€�
           */
          'geometry': function geometry(_geometry) {
            if (_geometry == null) {
              return null;
            }
            var geo = this.toGeometry(_geometry);
            var geometryType = geo.type;
            var data = this.extract[geometryType.toLowerCase()].apply(this, [geo]);
            geometryType = geometryType === 'TEXT' ? 'Point' : geometryType;
            var json;
            if (geometryType === "Collection") {
              json = {
                "type": "GeometryCollection",
                "geometries": data
              };
            } else {
              json = {
                "type": geometryType,
                "coordinates": data
              };
            }
            return json;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.point
           * @description 浠庝竴涓偣瀵硅薄涓繑鍥炰竴涓潗鏍囩粍銆�
           * @param point - {SuperMap.Geometry.Point} 涓€涓偣瀵硅薄銆�
           * @return {Array} 涓€涓〃绀轰竴涓偣鐨勫潗鏍囩粍銆�
           */
          'point': function point(_point) {
            var p = [_point.x, _point.y];
            for (var name in _point) {
              if (name !== "x" && name !== "y" && !isNaN(_point[name])) {
                p.push(_point[name]);
              }
            }
            return p;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.point
           * @description 浠庝竴涓枃鏈璞′腑杩斿洖涓€涓潗鏍囩粍銆�
           * @param geo 涓€涓枃鏈璞°€�
           * @return {Array} 涓€涓〃绀轰竴涓偣鐨勫潗鏍囩粍銆�
           */
          'text': function text(geo) {
            return [geo.points[0].x, geo.points[0].y];
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.multipoint
           * @description 浠庝竴涓鐐瑰璞′腑杩斾竴涓潗鏍囩粍鏁扮粍銆�
           * @param multipoint - {SuperMap.Geometry.MultiPoint} 澶氱偣瀵硅薄銆�
           * @return {Array} 涓€涓〃绀哄鐐圭殑鍧愭爣缁勬暟缁勩€�
           */
          'multipoint': function multipoint(_multipoint) {
            var array = [];
            for (var i = 0, len = _multipoint.components.length; i < len; ++i) {
              array.push(this.extract.point.apply(this, [_multipoint.components[i]]));
            }
            return array;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.linestring
           * @description 浠庝竴涓嚎瀵硅薄涓繑鍥炰竴涓潗鏍囩粍鏁扮粍銆�
           * @param linestring - {SuperMap.Geometry.Linestring} 绾垮璞°€�
           * @return {Array} 涓€涓〃绀虹嚎瀵硅薄鐨勫潗鏍囩粍鏁扮粍銆�
           */
          'linestring': function linestring(_linestring) {
            var array = [];
            for (var i = 0, len = _linestring.components.length; i < len; ++i) {
              array.push(this.extract.point.apply(this, [_linestring.components[i]]));
            }
            return array;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.multilinestring
           * @description 浠庝竴涓绾垮璞′腑杩斿洖涓€涓嚎鏁扮粍銆�
           * @param multilinestring - {SuperMap.Geometry.MultiLinestring} 澶氱嚎瀵硅薄
           *
           * @return {Array} 涓€涓〃绀哄绾跨殑绾挎暟缁勩€�
           */
          'multilinestring': function multilinestring(_multilinestring) {
            var array = [];
            for (var i = 0, len = _multilinestring.components.length; i < len; ++i) {
              array.push(this.extract.linestring.apply(this, [{ components: _multilinestring.components[i] }]));
            }
            return array;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.polygon
           * @description 浠庝竴涓潰瀵硅薄涓繑鍥炰竴缁勭嚎鐜€�
           * @polygon - {SuperMap.Geometry.Polygon} 闈㈠璞°€�
           * @return {Array} 涓€缁勮〃绀洪潰鐨勭嚎鐜€�
           */
          'polygon': function polygon(_polygon) {
            var array = [];
            for (var i = 0, len = _polygon.components.length; i < len; ++i) {
              array.push(this.extract.linestring.apply(this, [{ components: _polygon.components[i] }]));
            }
            return array;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.multipolygon
           * @description 浠庝竴涓闈㈠璞′腑杩斿洖涓€缁勯潰銆�
           * @param multipolygon - {SuperMap.Geometry.MultiPolygon} 澶氶潰瀵硅薄銆�
           * @return {Array} 涓€缁勮〃绀哄闈㈢殑闈€�
           */
          'multipolygon': function multipolygon(_multipolygon) {
            var array = [];
            for (var i = 0, len = _multipolygon.components.length; i < len; ++i) {
              array.push(this.extract.polygon.apply(this, [{ components: _multipolygon.components[i] }]));
            }
            return array;
          },

          /**
           * @function SuperMap.Format.GeoJSON.extract.collection
           * @description 浠庝竴涓嚑浣曡绱犻泦鍚堜腑涓€缁勫嚑浣曡绱犳暟缁勩€�
           * @param collection - {SuperMap.Geometry.Collection} 鍑犱綍瑕佺礌闆嗗悎銆�
           * @return {Array} 涓€缁勮〃绀哄嚑浣曡绱犻泦鍚堢殑鍑犱綍瑕佺礌鏁扮粍銆�
           */
          'collection': function collection(_collection) {
            var len = _collection.components.length;
            var array = new Array(len);
            for (var i = 0; i < len; ++i) {
              array[i] = this.extract.geometry.apply(this, [{
                type: "Collection",
                components: _collection.components[i]
              }]);
            }
            return array;
          }
        }, _this.CLASS_NAME = "SuperMap.Format.GeoJSON", _temp), _possibleConstructorReturn(_this, _ret);
      }

      /**
       * @member SuperMap.Format.GeoJSON.prototype.ignoreExtraDims - {boolean}
       * @description 蹇界暐缁村害瓒呰繃2鐨勫嚑浣曡绱犮€�
       */


      _createClass(GeoJSON, [{
        key: 'read',


        /**
         * @function SuperMap.Format.GeoJSON.prototype.read
         * @description 鍙嶅簭鍒楀寲涓€涓� GeoJSON 瀛楃涓层€�
         * @param json - {string}  GeoJSON 瀛楃涓�
         * @param type - {string} 鍙€夌殑瀛楃涓诧紝瀹冨喅瀹氫簡杈撳嚭鐨勬牸寮忋€�
         *     鏀寔鐨勫€兼湁锛�"Geometry","Feature",鍜�"FeatureCollection",
         *     濡傛灉姝ゅ€间负null锛屽垯浼氫娇鐢ㄩ粯璁ゅ€�"FeaureCollection"銆�
         * @param filter - {function} 瀵硅薄涓瘡涓眰娆℃瘡涓敭鍊煎閮戒細璋冪敤姝ゅ嚱鏁板緱鍑轰竴涓粨鏋溿€�
         *     姣忎釜鍊奸兘浼氳filter鍑芥暟鐨勭粨鏋滄墍鏇挎崲鎺夈€傝繖涓嚱鏁板彲琚敤鏉ュ皢鏌愪簺瀵硅薄杞寲鎴�
         *     鏌愪釜绫荤浉搴旂殑瀵硅薄锛屾垨鑰呭皢鏃ユ湡瀛楃涓茶浆鍖栨垚Date瀵硅薄銆�
         *
         * @return {Object}
         *    杩斿洖鍊间緷璧栦簬type鍙傛暟鐨勫€笺€傚鏋渢ype绛変簬"FeatureCollection"锛堥粯璁ゅ€硷級锛�
         *     杩斿洖鍊煎皢浼氭槸 <SuperMap.Feature.Vector> 鏁扮粍銆傚鏋渢ype涓�"Geometry",
         *     杈撳叆鐨刯son瀵硅薄蹇呴』琛ㄧず涓€涓敮涓€鐨勫嚑浣曚綋锛岀劧鍚庤繑鍥炲€煎氨浼氭槸 <SuperMap.Feature.Geometry>
         *     濡傛灉type涓�"Feature"锛岃緭鍏ョ殑json瀵硅薄涔熷繀椤昏〃绀虹殑涓€涓绱狅紝杩欐牱杩斿洖鍊兼墠浼氭槸<SuperMap.Feature.Vector> 銆�
         */
        value: function read(json, type, filter) {
          type = type ? type : "FeatureCollection";
          var results = null;
          var obj = null;
          if (typeof json == "string") {
            obj = _get(GeoJSON.prototype.__proto__ || Object.getPrototypeOf(GeoJSON.prototype), 'read', this).call(this, json, filter);
          } else {
            obj = json;
          }
          if (!obj) {
            //SuperMap.Console.error("Bad JSON: " + json);
          } else if (typeof obj.type != "string") {
            //SuperMap.Console.error("Bad GeoJSON - no type: " + json);
          } else if (this.isValidType(obj, type)) {
            switch (type) {
              case "Geometry":
                try {
                  results = this.parseGeometry(obj);
                } catch (err) {
                  //SuperMap.Console.error(err);
                }
                break;
              case "Feature":
                try {
                  results = this.parseFeature(obj);
                  results.type = "Feature";
                } catch (err) {
                  //SuperMap.Console.error(err);
                }
                break;
              case "FeatureCollection":
                // for type FeatureCollection, we allow input to be any type
                results = [];
                switch (obj.type) {
                  case "Feature":
                    try {
                      results.push(this.parseFeature(obj));
                    } catch (err) {
                      results = null;
                      //SuperMap.Console.error(err);
                    }
                    break;
                  case "FeatureCollection":
                    for (var i = 0, len = obj.features.length; i < len; ++i) {
                      try {
                        results.push(this.parseFeature(obj.features[i]));
                      } catch (err) {
                        results = null;
                        // SuperMap.Console.error(err);
                      }
                    }
                    break;
                  default:
                    try {
                      var geom = this.parseGeometry(obj);
                      results.push(new _SuperMap2.default.Feature.Vector(geom));
                    } catch (err) {
                      results = null;
                      //SuperMap.Console.error(err);
                    }
                }
                break;
              default:
                break;
            }
          }
          return results;
        }

        /**
         *  @function SuperMap.Format.GeoJSON.prototype.isValidType
         *  @description 妫€鏌ヤ竴涓狦eoJSON瀵硅薄鏄惁鍜岀粰瀹氱殑绫诲瀷鐩哥鐨勫悎娉曠殑瀵硅薄銆�
         *  @return {boolean} GeoJSON鏄惁鏄粰瀹氱被鍨嬬殑鍚堟硶瀵硅薄銆�
         */

      }, {
        key: 'isValidType',
        value: function isValidType(obj, type) {
          var valid = false;
          switch (type) {
            case "Geometry":
              if (_SuperMap2.default.Util.indexOf(["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", "Box", "GeometryCollection"], obj.type) == -1) {
                // unsupported geometry type
                //SuperMap.Console.error("Unsupported geometry type: " +
                // obj.type);
              } else {
                valid = true;
              }
              break;
            case "FeatureCollection":
              // allow for any type to be converted to a feature collection
              valid = true;
              break;
            default:
              // for Feature types must match
              if (obj.type == type) {
                valid = true;
              } else {
                //SuperMap.Console.error("Cannot convert types from " +
                //obj.type + " to " + type);
              }
          }
          return valid;
        }

        /**
         * @function SuperMap.Format.GeoJSON.prototype.parseFeature
         * @description 灏嗕竴涓狦eoJSON涓殑feature杞寲鎴�<SuperMap.Feature.Vector>瀵硅薄銆�
         * @param obj - {Object} 浠嶨eoJSON瀵硅薄涓垱寤轰竴涓璞°€�
         * @return {SuperMap.Feature.Vector} 涓€涓绱犮€�
         */

      }, {
        key: 'parseFeature',
        value: function parseFeature(obj) {
          var feature, geometry, attributes, bbox;
          attributes = obj.properties ? obj.properties : {};
          bbox = obj.geometry && obj.geometry.bbox || obj.bbox;
          try {
            geometry = this.parseGeometry(obj.geometry);
          } catch (err) {
            // deal with bad geometries
            throw err;
          }
          feature = new _SuperMap2.default.Feature.Vector(geometry, attributes);
          if (bbox) {
            feature.bounds = _SuperMap2.default.Bounds.fromArray(bbox);
          }
          if (obj.id) {
            feature.fid = obj.id;
          }
          return feature;
        }

        /**
         * @function SuperMap.Format.GeoJSON.prototype.parseGeometry
         * @description 灏嗕竴涓狦eoJSON涓殑鍑犱綍瑕佺礌杞寲鎴�<SuperMap.Geometry>瀵硅薄銆�
         * @param obj - {Object} 浠嶨eoJSON瀵硅薄涓垱寤轰竴涓璞°€�
         * @return {SuperMap.Geometry} 涓€涓嚑浣曡绱犮€�
         */

      }, {
        key: 'parseGeometry',
        value: function parseGeometry(obj) {
          if (obj == null) {
            return null;
          }
          var geometry,
              collection = false;
          if (obj.type == "GeometryCollection") {
            if (!_SuperMap2.default.Util.isArray(obj.geometries)) {
              throw "GeometryCollection must have geometries array: " + obj;
            }
            var numGeom = obj.geometries.length;
            var components = new Array(numGeom);
            for (var i = 0; i < numGeom; ++i) {
              components[i] = this.parseGeometry.apply(this, [obj.geometries[i]]);
            }
            geometry = new _SuperMap2.default.Geometry.Collection(components);
            collection = true;
          } else {
            if (!_SuperMap2.default.Util.isArray(obj.coordinates)) {
              throw "Geometry must have coordinates array: " + obj;
            }
            if (!this.parseCoords[obj.type.toLowerCase()]) {
              throw "Unsupported geometry type: " + obj.type;
            }
            try {
              geometry = this.parseCoords[obj.type.toLowerCase()].apply(this, [obj.coordinates]);
            } catch (err) {
              // deal with bad coordinates
              throw err;
            }
          }
          return geometry;
        }

        /**
         * @member SuperMap.Format.GeoJSON.prototype.parseCoords - {Object}
         * @description 涓€涓睘鎬у悕瀵瑰簲鐫€GeoJSON瀵硅薄鐨勫嚑浣曠被鍨嬬殑瀵硅薄銆傛瘡涓睘鎬у叾瀹為兘鏄竴涓疄闄呬笂鍋氳В鏋愮敤鐨勬柟娉曘€�
         */

      }, {
        key: 'write',


        /**
         * @function SuperMap.Format.GeoJSON.write
         * @description 搴忓垪鍖栦竴涓绱犲璞★紝鍑犱綍瀵硅薄锛岃绱犲璞℃暟缁勪负涓€涓狦eoJSON瀛楃涓层€�
         * @param obj - {Object} 涓€涓� <SuperMap.Feature.Vector> 瀵硅薄锛屼竴涓� <SuperMap.Geometry> 瀵硅薄鎴栬€呬竴涓绱犲璞℃暟缁勩€�
         * @param pretty - {boolean} 鏄惁浣跨敤鎹㈣鍜岀缉杩涙潵鎺у埗杈撳嚭銆傞粯璁ゅ€间负false銆�
         * @return {string} 涓€涓狦eoJSON瀛楃涓诧紝瀹冭〃绀轰簡杈撳叆鐨勫嚑浣曞璞★紝瑕佺礌瀵硅薄锛屾垨鑰呰绱犲璞℃暟缁勩€�
         */
        value: function write(obj, pretty) {
          var geojson = {
            "type": null
          };
          if (_SuperMap2.default.Util.isArray(obj)) {
            geojson.type = "FeatureCollection";
            var numFeatures = obj.length;
            geojson.features = new Array(numFeatures);
            for (var i = 0; i < numFeatures; ++i) {
              var element = obj[i];
              if (isGeometry(element)) {
                var feature = {};
                feature.geometry = element;
                geojson.features[i] = this.extract.feature.apply(this, [feature]);
              } else {
                geojson.features[i] = this.extract.feature.apply(this, [element]);
              }
            }
          } else if (isGeometry(obj)) {
            var feature = {};
            feature.geometry = obj;
            geojson = this.extract.feature.apply(this, [feature]);
          }

          function isGeometry(input) {
            return input.hasOwnProperty("parts") && input.hasOwnProperty("points");
          }

          return _get(GeoJSON.prototype.__proto__ || Object.getPrototypeOf(GeoJSON.prototype), 'write', this).call(this, geojson, pretty);
        }

        /**
         * @function SuperMap.Format.GeoJSON.createCRSObject
         * @description 浠庝竴涓绱犲璞′腑鍒涘缓涓€涓潗鏍囧弬鑰冪郴瀵硅薄銆�
         * @param object - {SuperMap.Feature.Vector} 瑕佺礌瀵硅薄
         * @return {Object} 涓€涓彲浣滀负GeoJSON瀵硅薄鐨刢rs灞炴€т娇鐢ㄧ殑瀵硅薄銆�
         */

      }, {
        key: 'createCRSObject',
        value: function createCRSObject(object) {
          var proj = object.layer.projection.toString();
          var crs = {};
          if (proj.match(/epsg:/i)) {
            var code = parseInt(proj.substring(proj.indexOf(":") + 1));
            if (code == 4326) {
              crs = {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                }
              };
            } else {
              crs = {
                "type": "name",
                "properties": {
                  "name": "EPSG:" + code
                }
              };
            }
          }
          return crs;
        }

        /**
         * Property: extract
         * 涓€涓睘鎬у悕瀵瑰簲鐫€GeoJSON绫诲瀷鐨勫璞°€傚叾鍊间负鐩稿簲鐨勫疄闄呯殑瑙ｆ瀽鏂规硶銆�
         */

      }, {
        key: 'createAttributes',
        value: function createAttributes(feature) {
          if (!feature) {
            return null;
          }
          var attr = {};
          processFieldsAttributes(feature, attr);
          var exceptKeys = ["fieldNames", "fieldValues", "geometry"];
          for (var key in feature) {
            if (exceptKeys.indexOf(key) > -1) {
              continue;
            }
            attr[key] = feature[key];
          }

          function processFieldsAttributes(feature, attributes) {
            if (!(feature.hasOwnProperty("fieldNames") && feature.hasOwnProperty("fieldValues"))) {
              return;
            }
            var names = feature.fieldNames,
                values = feature.fieldValues;
            for (var i in names) {
              attributes[names[i]] = values[i];
            }
          }

          return attr;
        }
      }, {
        key: 'toGeometry',
        value: function toGeometry(geometry) {
          var me = this,
              geoType = geometry.type;
          if (geoType === 'polygon') {
            geoType = _REST.GeometryType.REGION;
          }
          switch (geoType.toUpperCase()) {
            case _REST.GeometryType.POINT:
              return me.toGeoPoint(geometry);
            case _REST.GeometryType.LINE:
              return me.toGeoLine(geometry);
            case _REST.GeometryType.LINEM:
              return me.toGeoLinem(geometry);
            case _REST.GeometryType.REGION:
              return me.toGeoRegion(geometry);
            case _REST.GeometryType.POINTEPS:
              return me.toGeoPoint(geometry);
              // case GeometryType.LINEEPS:
              //     return me.toGeoLineEPS();
              // case GeometryType.REGIONEPS:
              //     return me.toGeoRegionEPS();
            default:
              return geometry;
          }
        }

        /**
         * @function SuperMap.Format.GeoJSON.toGeoPoint
         * @description 灏嗘湇鍔＄鐨勭偣鍑犱綍瀵硅薄杞崲涓哄嚑浣曞璞�
         */

      }, {
        key: 'toGeoPoint',
        value: function toGeoPoint(geometry) {
          var geoPoints = geometry.points || [],
              geoParts = geometry.parts || [geoPoints.length],
              len = geoParts.length;
          if (len < 1) {
            return null;
          }
          if (len === 1) {
            return { type: "Point", x: parseFloat(geoPoints[0].x), y: parseFloat(geoPoints[0].y) };
          } else {
            for (var i = 0, pointList = []; i < len; i++) {
              pointList.push({ x: parseFloat(geoPoints[i].x), y: parseFloat(geoPoints[i].y) });
            }
            return { type: "MultiPoint", components: pointList };
          }
        }

        /**
         *
         * @function SuperMap.Format.GeoJSON.toGeoPoint
         * @description 灏嗘湇鍔＄鐨勭嚎鍑犱綍瀵硅薄杞崲涓哄嚑浣曞璞°€�
         */

      }, {
        key: 'toGeoLine',
        value: function toGeoLine(geometry) {
          var me = this,
              geoPoints = geometry.points || [],
              geoParts = geometry.parts || [geoPoints.length],
              len = geoParts.length;
          if (len < 1) {
            return null;
          }
          if (len === 1) {
            for (var i = 0, pointList = []; i < geoParts[0]; i++) {
              pointList.push({ x: parseFloat(geoPoints[i].x), y: parseFloat(geoPoints[i].y) });
            }
            //鍒ゆ柇绾挎槸鍚﹂棴鍚堬紝濡傛灉闂悎锛屽垯杩斿洖LinearRing锛屽惁鍒欒繑鍥濴ineString
            if (me.isPointsEquals(pointList[0], pointList[geoParts[0] - 1])) {
              pointList.pop();
              pointList.push(pointList[0]);
            }
            return { type: "LineString", components: pointList };
          } else {
            for (var k = 0, lineList = []; k < len; k++) {
              for (var j = 0, pointArr = []; j < geoParts[k]; j++) {
                pointArr.push({ x: parseFloat(geoPoints[j].x), y: parseFloat(geoPoints[j].y) });
              }
              lineList.push(pointArr);
              geoPoints.splice(0, geoParts[k]);
            }
            return { type: "MultiLineString", components: lineList };
          }
        }

        /**
         *
         * @function SuperMap.Format.GeoJSON.toGeoLinem
         * @description 灏嗘湇鍔＄鐨勮矾鐢辩嚎鍑犱綍瀵硅薄杞崲涓哄嚑浣曞璞°€�
         */

      }, {
        key: 'toGeoLinem',
        value: function toGeoLinem(geometry) {
          var me = this,
              geoPoints = geometry.points || [],
              geoParts = geometry.parts || [geoPoints.length],
              len = geoParts.length,
              lineList = [],
              type;
          if (len < 1) {
            return null;
          }
          for (var i = 0, pointIndex = 0, pointList = []; i < len; i++) {
            for (var j = 0; j < geoParts[i]; j++) {
              pointList.push({
                x: parseFloat(geoPoints[pointIndex + j].x),
                y: parseFloat(geoPoints[pointIndex + j].y),
                measure: parseFloat(geoPoints[pointIndex + j].measure)
              });
            }
            pointIndex += geoParts[i];
            //鍒ゆ柇绾挎槸鍚﹂棴鍚堬紝濡傛灉闂悎锛屽垯杩斿洖LinearRing锛屽惁鍒欒繑鍥濴ineString
            if (me.isPointsEquals(pointList[0], pointList[geoParts[0] - 1])) {
              pointList.pop();
              pointList.push(pointList[0]);
            }
            lineList.push(pointList);
            pointList = [];
          }
          return { type: "MultiLineString", components: lineList };
        }

        /**
         *
         * @function SuperMap.Format.GeoJSON.toGeoRegion
         * @description 灏嗘湇鍔＄鐨勯潰鍑犱綍瀵硅薄杞崲涓哄嚑浣曞璞°€�
         */

      }, {
        key: 'toGeoRegion',
        value: function toGeoRegion(geometry) {
          var CCWArray = [],
              geoPoints = geometry.points || [],
              geoParts = geometry.parts || [geoPoints.length],
              len = geoParts.length;
          if (len < 1) {
            return null;
          }
          var polygonArray = new Array();
          for (var i = 0, pointIndex = 0, pointList = []; i < len; i++) {
            for (var j = 0; j < geoParts[i]; j++) {
              pointList.push({
                x: parseFloat(geoPoints[pointIndex + j].x),
                y: parseFloat(geoPoints[pointIndex + j].y)
              });
            }

            pointIndex += geoParts[i];
            var linearRing = pointList.concat();
            linearRing.pop();
            linearRing.push(linearRing[0]);

            if (this.isClockWise(linearRing) > 0) {
              CCWArray.push(linearRing);
            } else {
              polygonArray.push([linearRing]);
            }

            if (i === len - 1) {
              var polyLength = polygonArray.length;
              if (!!polyLength) {
                polygonArray[polyLength - 1] = polygonArray[polyLength - 1].concat(CCWArray);
              } else {
                for (var k = 0, length = CCWArray.length; k < length; k++) {
                  polygonArray.push([CCWArray[k]].concat());
                }
              }
            }
            pointList = [];
          }
          return { type: "MultiPolygon", components: polygonArray };
        }
      }, {
        key: 'isClockWise',
        value: function isClockWise(points) {
          var length = points.length;
          if (length < 3) {
            return 0.0;
          }
          var s = points[0].y * (points[length - 1].x - points[1].x);
          points.push(points[0]);
          for (var i = 1; i < length; i++) {
            s += points[i].y * (points[i - 1].x - points[i + 1].x);
          }
          return s * 0.5;
        }
      }, {
        key: 'isPointsEquals',
        value: function isPointsEquals(point1, point2) {
          return point1.x === point2.x && point1.y === point2.y;
        }
      }]);

      return GeoJSON;
    }(_JSON2.default);

    exports.default = GeoJSON;

    _SuperMap2.default.Format.GeoJSON = GeoJSON;

    /***/ }),
  /* 36 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Format2 = __webpack_require__(15);

    var _Format3 = _interopRequireDefault(_Format2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Format.JSON
     * @classdesc 瀹夊叏鐨勮鍐橨SON鐨勮В鏋愮被銆備娇鐢�<SuperMap.Format.JSON> 鏋勯€犲嚱鏁板垱寤烘柊瀹炰緥銆�
     * @extends SuperMap.Format
     */
    var JSONFormat = function (_Format) {
      _inherits(JSONFormat, _Format);

      function JSONFormat() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, JSONFormat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JSONFormat.__proto__ || Object.getPrototypeOf(JSONFormat)).call.apply(_ref, [this].concat(args))), _this), _this.indent = "    ", _this.space = " ", _this.newline = "\n", _this.level = 0, _this.pretty = false, _this.nativeJSON = function () {
          return !!(window.JSON && typeof JSON.parse === "function" && typeof JSON.stringify === "function");
        }(), _this.serialize = {
          /**
           * @function SuperMap.Format.JSON.serialize.object
           * @description 鎶婂璞¤浆鎹负JSON瀛楃涓层€�
           * @param object - {Object} 鍙簭鍒楀寲鐨勫璞°€�
           * @return {string} JSON瀛楃涓层€�
           */
          'object': function object(_object) {
            // three special objects that we want to treat differently
            if (_object == null) {
              return "null";
            }
            if (_object.constructor === Date) {
              return this.serialize.date.apply(this, [_object]);
            }
            if (_object.constructor === Array) {
              return this.serialize.array.apply(this, [_object]);
            }
            var pieces = ['{'];
            this.level += 1;
            var key, keyJSON, valueJSON;

            var addComma = false;
            for (key in _object) {
              if (_object.hasOwnProperty(key)) {
                // recursive calls need to allow for sub-classing
                keyJSON = _SuperMap2.default.Format.JSON.prototype.write.apply(this, [key, this.pretty]);
                valueJSON = _SuperMap2.default.Format.JSON.prototype.write.apply(this, [_object[key], this.pretty]);
                if (keyJSON != null && valueJSON != null) {
                  if (addComma) {
                    pieces.push(',');
                  }
                  pieces.push(this.writeNewline(), this.writeIndent(), keyJSON, ':', this.writeSpace(), valueJSON);
                  addComma = true;
                }
              }
            }

            this.level -= 1;
            pieces.push(this.writeNewline(), this.writeIndent(), '}');
            return pieces.join('');
          },

          /**
           * @function SuperMap.Format.JSON.serialize.array
           * @description 鎶婃暟缁勮浆鎹㈡垚JSON瀛楃涓层€�
           * @param array - {Array} 鍙簭鍒楀寲鐨勬暟缁勩€�
           * @return {string} JSON瀛楃涓层€�
           */
          'array': function array(_array) {
            var json;
            var pieces = ['['];
            this.level += 1;

            for (var i = 0, len = _array.length; i < len; ++i) {
              // recursive calls need to allow for sub-classing
              json = _SuperMap2.default.Format.JSON.prototype.write.apply(this, [_array[i], this.pretty]);
              if (json != null) {
                if (i > 0) {
                  pieces.push(',');
                }
                pieces.push(this.writeNewline(), this.writeIndent(), json);
              }
            }

            this.level -= 1;
            pieces.push(this.writeNewline(), this.writeIndent(), ']');
            return pieces.join('');
          },

          /**
           * @function SuperMap.Format.JSON.serialize.string
           * @description 鎶婂瓧绗︿覆杞崲鎴怞SON瀛楃涓层€�
           * @param string - {string} 鍙簭鍒楀寲鐨勫瓧绗︿覆銆�
           * @return {string} JSON瀛楃涓层€�
           */
          'string': function string(_string) {
            // If the string contains no control characters, no quote characters, and no
            // backslash characters, then we can simply slap some quotes around it.
            // Otherwise we must also replace the offending characters with safe
            // sequences.
            var m = {
              '\b': '\\b',
              '\t': '\\t',
              '\n': '\\n',
              '\f': '\\f',
              '\r': '\\r',
              '"': '\\"',
              '\\': '\\\\'
            };
            if (/["\\\x00-\x1f]/.test(_string)) {
              return '"' + _string.replace(/([\x00-\x1f\\"])/g, function (a, b) {
                var c = m[b];
                if (c) {
                  return c;
                }
                c = b.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
              }) + '"';
            }
            return '"' + _string + '"';
          },

          /**
           * @function SuperMap.Format.JSON.serialize.number
           * @description 鎶婃暟瀛楄浆鎹㈡垚JSON瀛楃涓层€�
           * @param number - {number} 鍙簭鍒楀寲鐨勬暟瀛椼€�
           * @return {string} JSON瀛楃涓层€�
           */
          'number': function number(_number) {
            return isFinite(_number) ? String(_number) : "null";
          },

          /**
           * @function SuperMap.Format.JSON.serialize.boolean
           * @description Transform a boolean into a JSON string.
           * @param bool - {boolean} The boolean to be serialized.
           * @return {string} A JSON string representing the boolean.
           */
          'boolean': function boolean(bool) {
            return String(bool);
          },

          /**
           * @function SuperMap.Format.JSON.serialize.object
           * @description 灏嗘棩鏈熷璞¤浆鎹㈡垚JSON瀛楃涓层€�
           * @param date - {Date} 鍙簭鍒楀寲鐨勬棩鏈熷璞°€�
           * @return {string} JSON瀛楃涓层€�
           */
          'date': function date(_date) {
            function format(number) {
              // Format integers to have at least two digits.
              return number < 10 ? '0' + number : number;
            }

            return '"' + _date.getFullYear() + '-' + format(_date.getMonth() + 1) + '-' + format(_date.getDate()) + 'T' + format(_date.getHours()) + ':' + format(_date.getMinutes()) + ':' + format(_date.getSeconds()) + '"';
          }
        }, _this.CLASS_NAME = "SuperMap.Format.JSON", _temp), _possibleConstructorReturn(_this, _ret);
      }

      /**
       * @member SuperMap.Format.JSON.prototype.indent - {string}
       * @description 鐢ㄤ簬鏍煎紡鍖栬緭鍑猴紝indent瀛楃涓蹭細鍦ㄦ瘡娆＄缉杩涚殑鏃跺€欎娇鐢ㄤ竴娆°€�
       */


      /**
       * @member SuperMap.Format.JSON.prototype.space -{string}
       * @description 鐢ㄤ簬鏍煎紡鍖栬緭鍑猴紝space瀛楃涓蹭細鍦ㄥ悕鍊煎鐨�":"鍚庤竟娣诲姞銆�
       */


      /**
       * @member SuperMap.Format.JSON.prototype.newline - {string}
       * @description 鐢ㄤ簬鏍煎紡鍖栬緭鍑�, newline瀛楃涓蹭細鐢ㄥ湪姣忎竴涓悕鍊煎鎴栨暟缁勯」鏈熬銆�
       */


      /**
       * @member SuperMap.Format.JSON.prototype.level - {integer}
       * @description 鐢ㄤ簬鏍煎紡鍖栬緭鍑�, 琛ㄧず鐨勬槸缂╄繘绾у埆銆�
       */


      /**
       * @member SuperMap.Format.JSON.prototype.pretty - {boolean}
       * @description 鏄惁鍦ㄥ簭鍒楀寲鐨勬椂鍊欎娇鐢ㄩ澶栫殑绌烘牸鎺у埗缁撴瀯銆傚湪write鏂规硶涓娇鐢紝榛樿鍊间负false銆�
       */


      /**
       * @member SuperMap.Format.JSON.prototype.nativeJSON - {boolean}
       * @description 鍒ゆ柇娴忚鍣ㄦ槸鍚﹀師鐢熸敮鎸丣SON鏍煎紡鏁版嵁銆�
       */


      _createClass(JSONFormat, [{
        key: 'read',


        /**
         * @function SuperMap.Format.JSON.prototype.read
         * @description 灏嗕竴涓鍚坖son缁撴瀯鐨勫瓧绗︿覆杩涜瑙ｆ瀽銆�
         * @param json - {string} 绗﹀悎json缁撴瀯鐨勫瓧绗︿覆銆�
         * @param filter - {function} 杩囨护鏂规硶锛屾渶缁堢粨鏋滅殑姣忎竴涓敭鍊煎閮戒細璋冪敤璇ヨ繃婊ゆ柟娉曪紝骞跺湪瀵瑰簲鐨勫€肩殑浣嶇疆鏇挎崲鎴愯鏂规硶杩斿洖鐨勫€笺€�
         * @return {Object} 瀵硅薄锛屾暟缁勶紝瀛楃涓叉垨鏁板瓧銆�
         */
        value: function read(json, filter) {
          var object;
          if (this.nativeJSON) {
            try {
              object = JSON.parse(json, filter);
            } catch (e) {
              // Fall through if the regexp test fails.
            }
          }

          if (this.keepData) {
            this.data = object;
          }

          return object;
        }

        /**
         * @function SuperMap.Format.JSON.prototype.write
         * @description 搴忓垪鍖栦竴涓璞″埌涓€涓鍚圝SON鏍煎紡鐨勫瓧绗︿覆銆�
         * @param value - {object}|{string}|<Array>|{number}|{boolean} 闇€瑕佽搴忓垪鍖栫殑瀵硅薄锛屾暟缁勶紝瀛楃涓诧紝鏁板瓧锛屽竷灏斿€笺€�
         * @param pretty - {boolean}
         * @return {string} 绗﹀悎JSON鏍煎紡鐨勫瓧绗︿覆銆�
         *
         */

      }, {
        key: 'write',
        value: function write(value, pretty) {
          this.pretty = !!pretty;
          var json = null;
          var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
          if (this.serialize[type]) {
            try {
              json = !this.pretty && this.nativeJSON ? JSON.stringify(value) : this.serialize[type].apply(this, [value]);
            } catch (err) {
              //SuperMap.Console.error("Trouble serializing: " + err);
            }
          }
          return json;
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeIndent
         * @description 鏍规嵁缂╄繘绾у埆杈撳嚭涓€涓缉杩涘瓧绗︿覆銆�
         * @return {string} 涓€涓€傚綋鐨勭缉杩涘瓧绗︿覆銆�
         */

      }, {
        key: 'writeIndent',
        value: function writeIndent() {
          var pieces = [];
          if (this.pretty) {
            for (var i = 0; i < this.level; ++i) {
              pieces.push(this.indent);
            }
          }
          return pieces.join('');
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeNewline
         * @description 鍦ㄦ牸寮忓寲杈撳嚭妯″紡鎯呭喌涓嬭緭鍑轰唬琛ㄦ柊涓€琛岀殑瀛楃涓层€�
         * @return {string} 浠ｈ〃鏂扮殑涓€琛岀殑瀛楃涓层€�
         */

      }, {
        key: 'writeNewline',
        value: function writeNewline() {
          return this.pretty ? this.newline : '';
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeSpace
         * @description 鍦ㄦ牸寮忓寲杈撳嚭妯″紡鎯呭喌涓嬭緭鍑轰竴涓唬琛ㄧ┖鏍肩殑瀛楃涓层€�
         * @return {string} A space.
         */

      }, {
        key: 'writeSpace',
        value: function writeSpace() {
          return this.pretty ? this.space : '';
        }

        /**
         * @member SuperMap.Format.JSON.prototype.serialize
         * @description 鎻愪緵涓€浜涚被鍨嬪璞¤浆JSON瀛楃涓茬殑鏂规硶銆�
         */

      }]);

      return JSONFormat;
    }(_Format3.default);

    exports.default = JSONFormat;


    _SuperMap2.default.Format.JSON = JSONFormat;

    /***/ }),
  /* 37 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Format2 = __webpack_require__(15);

    var _Format3 = _interopRequireDefault(_Format2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Format.WKT
     * @classdesc 鐢ㄤ簬璇诲啓甯歌鏂囨湰鐨勭被銆傞€氳繃 <SuperMap.Format.WKT> 鏋勯€犲櫒鏉ュ垱寤轰竴涓柊
     *      鐨勫疄渚嬨€�
     * @extends SuperMap.Format
     * @param options - {Object} 鍙€夌殑閫夐」瀵硅薄锛屽叾灞炴€у皢琚缃埌瀹炰緥銆俹ption鍏蜂綋閰嶇疆椤圭户鎵胯嚜{@link SuperMap.Format}
     */
    var WKT = function (_Format) {
      _inherits(WKT, _Format);

      function WKT(options) {
        _classCallCheck(this, WKT);

        var _this = _possibleConstructorReturn(this, (WKT.__proto__ || Object.getPrototypeOf(WKT)).call(this, options));

        _this.extract = {
          /*
             * @description Return a space delimited string of point coordinates.
             * @param {SuperMap.Geometry.Point} point
             * @returns  {String} A string of coordinates representing the point
             */
          'point': function point(_point) {
            return _point.x + ' ' + _point.y;
          },

          /*
             * @description  Return a comma delimited string of point coordinates from a multipoint.
             * @param {SuperMap.Geometry.MultiPoint} multipoint
             * @returns  {String} A string of point coordinate strings representing
             *                  the multipoint
             */
          'multipoint': function multipoint(_multipoint) {
            var array = [];
            for (var i = 0, len = _multipoint.components.length; i < len; ++i) {
              array.push('(' + this.extract.point.apply(this, [_multipoint.components[i]]) + ')');
            }
            return array.join(',');
          },


          /*
             * @description  Return a comma delimited string of point coordinates from a line.
             * @param {SuperMap.Geometry.LineString} linestring
             * @returns  {String} A string of point coordinate strings representing
             *                  the linestring
             */
          'linestring': function linestring(_linestring) {
            var array = [];
            for (var i = 0, len = _linestring.components.length; i < len; ++i) {
              array.push(this.extract.point.apply(this, [_linestring.components[i]]));
            }
            return array.join(',');
          },


          /*
             * @description  Return a comma delimited string of linestring strings from a multilinestring.
             * @param {SuperMap.Geometry.MultiLineString} multilinestring
             * @returns  {String} A string of of linestring strings representing
             *                  the multilinestring
             */
          'multilinestring': function multilinestring(_multilinestring) {
            var array = [];
            for (var i = 0, len = _multilinestring.components.length; i < len; ++i) {
              array.push('(' + this.extract.linestring.apply(this, [_multilinestring.components[i]]) + ')');
            }
            return array.join(',');
          },


          /*
             * @description  Return a comma delimited string of linear ring arrays from a polygon.
             * @param {SuperMap.Geometry.Polygon} polygon
             * @returns  {String} An array of linear ring arrays representing the polygon
             */
          'polygon': function polygon(_polygon) {
            var array = [];
            for (var i = 0, len = _polygon.components.length; i < len; ++i) {
              array.push('(' + this.extract.linestring.apply(this, [_polygon.components[i]]) + ')');
            }
            return array.join(',');
          },


          /*
             * @description  Return an array of polygon arrays from a multipolygon.
             * @param {SuperMap.Geometry.MultiPolygon} multipolygon
             * @returns  {String} An array of polygon arrays representing
             *                  the multipolygon
             */
          'multipolygon': function multipolygon(_multipolygon) {
            var array = [];
            for (var i = 0, len = _multipolygon.components.length; i < len; ++i) {
              array.push('(' + this.extract.polygon.apply(this, [_multipolygon.components[i]]) + ')');
            }
            return array.join(',');
          },


          /*
             * @description  Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an <SuperMap.Geometry.Collection>
             * @param {SuperMap.Geometry.Collection} collection
             * @returns  {String} internal WKT representation of the collection
             */
          'collection': function collection(_collection) {
            var array = [];
            for (var i = 0, len = _collection.components.length; i < len; ++i) {
              array.push(this.extractGeometry.apply(this, [_collection.components[i]]));
            }
            return array.join(',');
          }
        };
        _this.parse = {
          /*
             * @private
             * @description  Return point feature given a point WKT fragment.
             * @param {String} str A WKT fragment representing the point
             * @returns  {SuperMap.Feature.Vector} A point feature
             *
             */
          'point': function point(str) {
            var coords = _SuperMap2.default.String.trim(str).split(this.regExes.spaces);
            return new _SuperMap2.default.Feature.Vector(new Supermap.Point(coords[0], coords[1]));
          },

          /*
             * @description  Return a multipoint feature given a multipoint WKT fragment.
             * @param {String} A WKT fragment representing the multipoint
             * @returns  {SuperMap.Feature.Vector} A multipoint feature
             * @private
             */
          'multipoint': function multipoint(str) {
            var point;
            var points = _SuperMap2.default.String.trim(str).split(',');
            var components = [];
            for (var i = 0, len = points.length; i < len; ++i) {
              point = points[i].replace(this.regExes.trimParens, '$1');
              components.push(this.parse.point.apply(this, [point]).geometry);
            }
            return new _SuperMap2.default.Feature.Vector(new Supermap.MultiPoint(components));
          },

          /*
             * @description  Return a linestring feature given a linestring WKT fragment.
             * @param {String} A WKT fragment representing the linestring
             * @returns  {SuperMap.Feature.Vector} A linestring feature
             * @private
             */
          'linestring': function linestring(str) {
            var points = _SuperMap2.default.String.trim(str).split(',');
            var components = [];
            for (var i = 0, len = points.length; i < len; ++i) {
              components.push(this.parse.point.apply(this, [points[i]]).geometry);
            }
            return new _SuperMap2.default.Feature.Vector(new Supermap.LineString(components));
          },

          /*
             * @description  Return a multilinestring feature given a multilinestring WKT fragment.
             * @param {String} A WKT fragment representing the multilinestring
             * @returns  {SuperMap.Feature.Vector} A multilinestring feature
             * @private
             */
          'multilinestring': function multilinestring(str) {
            var line;
            var lines = _SuperMap2.default.String.trim(str).split(this.regExes.parenComma);
            var components = [];
            for (var i = 0, len = lines.length; i < len; ++i) {
              line = lines[i].replace(this.regExes.trimParens, '$1');
              components.push(this.parse.linestring.apply(this, [line]).geometry);
            }
            return new _SuperMap2.default.Feature.Vector(new Supermap.MultiLineString(components));
          },

          /*
             * @description  Return a polygon feature given a polygon WKT fragment.
             * @param {String} A WKT fragment representing the polygon
             * @returns  {SuperMap.Feature.Vector} A polygon feature
             * @private
             */
          'polygon': function polygon(str) {
            var ring, linestring, linearring;
            var rings = _SuperMap2.default.String.trim(str).split(this.regExes.parenComma);
            var components = [];
            for (var i = 0, len = rings.length; i < len; ++i) {
              ring = rings[i].replace(this.regExes.trimParens, '$1');
              linestring = this.parse.linestring.apply(this, [ring]).geometry;
              linearring = new Supermap.LinearRing(linestring.components);
              components.push(linearring);
            }
            return new _SuperMap2.default.Feature.Vector(new Supermap.Polygon(components));
          },

          /*
             * @private
             * @description  Return a multipolygon feature given a multipolygon WKT fragment.
             * @param {String} A WKT fragment representing the multipolygon
             * @returns  {SuperMap.Feature.Vector} A multipolygon feature
             *
             */
          'multipolygon': function multipolygon(str) {
            var polygon;
            var polygons = _SuperMap2.default.String.trim(str).split(this.regExes.doubleParenComma);
            var components = [];
            for (var i = 0, len = polygons.length; i < len; ++i) {
              polygon = polygons[i].replace(this.regExes.trimParens, '$1');
              components.push(this.parse.polygon.apply(this, [polygon]).geometry);
            }
            return new _SuperMap2.default.Feature.Vector(new Supermap.MultiPolygon(components));
          },

          /*
             * @description  Return an array of features given a geometrycollection WKT fragment.
             * @param {String} A WKT fragment representing the geometrycollection
             * @returns  {Array} An array of SuperMap.Feature.Vector
             * @private
             */
          'geometrycollection': function geometrycollection(str) {
            // separate components of the collection with |
            str = str.replace(/,\s*([A-Za-z])/g, '|$1');
            var wktArray = _SuperMap2.default.String.trim(str).split('|');
            var components = [];
            for (var i = 0, len = wktArray.length; i < len; ++i) {
              components.push(WKT.read(wktArray[i]));
            }
            return components;
          }

        };
        _this.CLASS_NAME = "SuperMap.Format.WKT";

        _this.regExes = {
          'typeStr': /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
          'spaces': /\s+/,
          'parenComma': /\)\s*,\s*\(/,
          'doubleParenComma': /\)\s*\)\s*,\s*\(\s*\(/, // can't use {2} here
          'trimParens': /^\s*\(?(.*?)\)?\s*$/
        };
        return _this;
      }

      /**
       * @function SuperMap.Format.WKT.prototype.read
       * @description Deserialize a WKT string and return a vector feature or an
       * array of vector features.  Supports WKT for POINT, MULTIPOINT,
       * LINESTRING, MULTILINESTRING, POLYGON, MULTIPOLYGON, and
       * GEOMETRYCOLLECTION.
       * @param wkt - {string} A WKT string
       * @returns {SuperMap.Feature.Vector|Array} A feature or array of features for
       * GEOMETRYCOLLECTION WKT.
       */


      _createClass(WKT, [{
        key: 'read',
        value: function read(wkt) {
          var features, type, str;
          wkt = wkt.replace(/[\n\r]/g, " ");
          var matches = this.regExes.typeStr.exec(wkt);
          if (matches) {
            type = matches[1].toLowerCase();
            str = matches[2];
            if (this.parse[type]) {
              features = this.parse[type].apply(this, [str]);
            }
          }
          return features;
        }

        /**
         * @function SuperMap.Format.WKT.prototype.write
         * @description Serialize a feature or array of features into a WKT string.
         * @param features - {SuperMap.Feature.Vector|Array} A feature or array of features
         * @returns {string} The WKT string representation of the input geometries
         */

      }, {
        key: 'write',
        value: function write(features) {
          var collection, geometry, type, data, isCollection;
          if (features.constructor === Array) {
            collection = features;
            isCollection = true;
          } else {
            collection = [features];
            isCollection = false;
          }
          var pieces = [];
          if (isCollection) {
            pieces.push('GEOMETRYCOLLECTION(');
          }
          for (var i = 0, len = collection.length; i < len; ++i) {
            if (isCollection && i > 0) {
              pieces.push(',');
            }
            geometry = collection[i].geometry;
            pieces.push(this.extractGeometry(geometry));
          }
          if (isCollection) {
            pieces.push(')');
          }
          return pieces.join('');
        }

        /**
         * @function SuperMap.Format.WKT.prototype.extractGeometry
         * @description Entry point to construct the WKT for a single Geometry object.
         * @param geometry - {SuperMap.Geometry}
         * @returns {string} A WKT string of representing the geometry
         */

      }, {
        key: 'extractGeometry',
        value: function extractGeometry(geometry) {
          var type = geometry.CLASS_NAME.split('.')[2].toLowerCase();
          if (!this.extract[type]) {
            return null;
          }
          var wktType = type === 'collection' ? 'GEOMETRYCOLLECTION' : type.toUpperCase();
          var data = wktType + '(' + this.extract[type].apply(this, [geometry]) + ')';
          return data;
        }

        /**
         * @private
         * @description Object with properties corresponding to the geometry types.
         * Property values are functions that do the actual data extraction.
         */


        /*
         * @private
         * @description Object with properties corresponding to the geometry types.
         * Property values are functions that do the actual parsing.
         */

      }]);

      return WKT;
    }(_Format3.default);

    exports.default = WKT;

    _SuperMap2.default.Format.WKT = WKT;

    /***/ }),
  /* 38 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _Point2 = __webpack_require__(2);

    var _Point3 = _interopRequireDefault(_Point2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.PointWithMeasure
     * @classdesc 璺敱鐐圭被銆傝矾鐢辩偣鏄寚鍏锋湁绾挎€у害閲忓€�(Measure)鐨勪簩缁村湴鐞嗗潗鏍囩偣銆�
     * @param options - {Object} 鍙€夊弬鏁般€傚:</br>
     *        measure - {number}搴﹂噺鍊硷紝鍗宠矾鐢卞璞″睘鎬у€� M銆�</br>
     *        x - {number}鑾峰彇褰撳墠鐐瑰璞″湪鍦扮悊鍧愭爣绯讳笅鐨� X 鍧愭爣鍊笺€�</br>
     *        y - {number}鑾峰彇褰撳墠鐐瑰璞″湪鍦扮悊鍧愭爣绯讳笅鐨� Y 鍧愭爣鍊笺€�</br>
     * @extends SuperMap.Geometry.Point
     */
    var PointWithMeasure = function (_Point) {
      _inherits(PointWithMeasure, _Point);

      function PointWithMeasure(options) {
        _classCallCheck(this, PointWithMeasure);

        var _this = _possibleConstructorReturn(this, (PointWithMeasure.__proto__ || Object.getPrototypeOf(PointWithMeasure)).call(this, options));

        _this.measure = null;
        _this.CLASS_NAME = "SuperMap.PointWithMeasure";

        if (options) {
          _SuperMap2.default.Util.extend(_this, options);
        }
        return _this;
      }

      /**
       * @function SuperMap.PointWithMeasure.prototype.equals
       * @description 鍒ゆ柇涓や釜璺敱鐐瑰璞℃槸鍚︾浉绛夈€傚鏋滀袱涓矾鐢辩偣瀵硅薄鍏锋湁鐩稿悓鐨勫潗鏍囦互鍙婂害閲忓€硷紝鍒欒涓烘槸鐩哥瓑鐨勩€�
       * @param geom - {SuperMap.PointWithMeasure} 闇€瑕佸垽鏂殑璺敱鐐瑰璞°€�
       * @return {boolean} 涓や釜璺敱鐐瑰璞℃槸鍚︾浉绛夛紙true涓虹浉绛夛紝false涓轰笉绛夛級銆�
       */


      /**
       * @member SuperMap.PointWithMeasure.prototype.measure -{number}
       * @description 搴﹂噺鍊硷紝鍗宠矾鐢卞璞″睘鎬у€� M銆�
       */


      _createClass(PointWithMeasure, [{
        key: 'equals',
        value: function equals(geom) {
          var equals = false;
          if (geom != null) {
            var isValueEquals = this.x === geom.x && this.y === geom.y && this.measure === geom.measure;
            var isNaNValue = isNaN(this.x) && isNaN(this.y) && isNaN(this.measure);
            var isNaNGeometry = isNaN(geom.x) && isNaN(geom.y) && isNaN(geom.measure);
            equals = isValueEquals || isNaNValue && isNaNGeometry;
          }
          return equals;
        }

        /**
         * @function SuperMap.PointWithMeasure.prototype.toJson
         * @description 杞崲涓簀son瀵硅薄銆�
         toJson() {
            var result = "{";
            if (this.measure != null && this.measure != undefined) {
                result += "\"measure\":" + this.measure + ",";
            }
            result += "\"x\":" + this.x + ",";
            result += "\"y\":" + this.y;
            result += "}";
            return result;
        }
         /**
         * @function SuperMap.PointWithMeasure.prototype.destroy
         * @description 閲婃斁璧勬簮锛屽皢寮曠敤璧勬簮鐨勫睘鎬х疆绌恒€�
         */

      }, {
        key: 'destroy',
        value: function destroy() {
          var me = this;
          me.measure = null;
          me.x = null;
          me.y = null;
        }

        /**
         * @function SuperMap.PointWithMeasure.fromJson
         * @description 灏� JSON 瀵硅薄杞崲涓簕@link SuperMap.PointWithMeasure} 瀵硅薄銆�
         * @param jsonObject - {Object} JSON 瀵硅薄琛ㄧず鐨勮矾鐢辩偣銆�
         * @return {SuperMap.PointWithMeasure} 杞寲鍚庣殑 PointWithMeasure 瀵硅薄銆�
         */

      }], [{
        key: 'fromJson',
        value: function fromJson(jsonObject) {
          if (!jsonObject) {
            return;
          }
          return new _SuperMap2.default.PointWithMeasure({
            x: jsonObject.x,
            y: jsonObject.y,
            measure: jsonObject.measure
          });
        }
      }]);

      return PointWithMeasure;
    }(_Point3.default);

    exports.default = PointWithMeasure;


    _SuperMap2.default.PointWithMeasure = PointWithMeasure;

    /***/ }),
  /* 39 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _PointWithMeasure = __webpack_require__(38);

    var _PointWithMeasure2 = _interopRequireDefault(_PointWithMeasure);

    var _Collection2 = __webpack_require__(3);

    var _Collection3 = _interopRequireDefault(_Collection2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * @class SuperMap.Route
     * @classdesc
     * 璺敱瀵硅薄绫汇€傝矾鐢卞璞′负涓€绯诲垪鏈夊簭鐨勫甫鏈夊睘鎬у€� M 鐨� x锛寉 鍧愭爣瀵癸紝鍏朵腑 M 鍊间负璇ョ粨鐐圭殑璺濈灞炴€э紙鍒板凡鐭ョ偣鐨勮窛绂伙級銆�
     * @param points - {{Array<SuperMap.Geometry>}} 褰㈡垚璺敱瀵硅薄鐨勭嚎鏁扮粍銆�
     * @param  options - {Object} 鍙€夊弬鏁般€傚:</br>
     *         id - {number}璺敱瀵硅薄鍦ㄦ暟鎹簱涓殑id銆�</br>
     *         length - {number}璺敱瀵硅薄鐨勯暱搴︺€�</br>
     *         maxM - {number}鏈€澶х嚎鎬у害閲忓€硷紝鍗虫墍鏈夌粨鐐瑰埌璧峰鐐圭殑閲忕畻璺濈涓渶澶у€笺€�</br>
     *         minM - {number}鏈€灏忕嚎鎬у害閲忓€硷紝鍗虫墍鏈夌粨鐐瑰埌璧峰鐐圭殑閲忕畻璺濈涓渶灏忓€笺€�</br>
     *         type - {string} 鏁版嵁绫诲瀷锛屽锛�"LINEM"</br>
     * @extends SuperMap.Geometry.Collection
     */
    var Route = function (_Collection) {
      _inherits(Route, _Collection);

      /**
       * @member SuperMap.Route.prototype.type -{string}
       * @description 鏈嶅姟绔嚑浣曞璞＄被鍨嬨€�
       */


      /**
       * @member SuperMap.Route.prototype.parts -{Array<number>}
       * @description 鏈嶅姟绔嚑浣曞璞′腑鍚勪釜瀛愬璞℃墍鍖呭惈鐨勮妭鐐逛釜鏁般€�
       */


      /**
       *  @member SuperMap.Route.prototype.maxM -{number}
       *  @description 鏈€澶х嚎鎬у害閲忓€硷紝鍗虫墍鏈夌粨鐐瑰埌璧峰鐐圭殑閲忕畻璺濈涓渶澶у€笺€�
       */


      /**
       * @member SuperMap.Route.prototype.style -{string}
       * @description 璺敱瀵硅薄鐨勬牱寮�
       */


      /**
       * @member SuperMap.Route.prototype.id -{number}
       * @description 璺敱瀵硅薄鍦ㄦ暟鎹簱涓殑id銆�
       */
      function Route(points, options) {
        _classCallCheck(this, Route);

        var _this = _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).call(this, points, options));

        _this.id = null;
        _this.center = null;
        _this.style = null;
        _this.length = null;
        _this.maxM = null;
        _this.minM = null;
        _this.parts = null;
        _this.points = null;
        _this.type = null;
        _this.componentTypes = ["SuperMap.Geometry.LinearRing", "SuperMap.Geometry.LineString"];
        _this.CLASS_NAME = "SuperMap.Route";

        if (options) {
          _SuperMap2.default.Util.extend(_this, options);
        }
        return _this;
      }

      /**
       *
       * @function SuperMap.Route.prototype.toJson
       * @description 杞崲涓簀son瀵硅薄銆�
       * @return{Object} json瀵硅薄
       */


      /**
       * @member SuperMap.Route.prototype.componentTypes -{Array<string>}
       * @description components瀛樺偍鐨勭殑鍑犱綍瀵硅薄鎵€鏀寔鐨勫嚑浣曠被鍨嬫暟缁�,涓虹┖琛ㄧず绫诲瀷涓嶅彈闄愬埗銆�
       * @default ["{@link SuperMap.Geometry.LinearRing}", "{@link SuperMap.Geometry.LineString}"];
       */


      /**
       * @member SuperMap.Route.prototype.points -{Array<Object>}
       * @description 璺敱瀵硅薄鐨勬墍鏈夎矾鐢辩偣銆�
       * @example
       * (start code)
       * [
       *  {
       *      "measure": 0,
       *      "y": -4377.027184298267,
       *      "x": 4020.0045221720466
       *  },
       *  {
       *      "measure": 37.33288381391519,
       *      "y": -4381.569363260499,
       *      "x": 4057.0600591960642
       *  }
       * ]
       * (end)
       */


      /**
       * @member SuperMap.Route.prototype.minM -{number}
       * @description 鏈€灏忕嚎鎬у害閲忓€硷紝鍗虫墍鏈夌粨鐐瑰埌璧峰鐐圭殑閲忕畻璺濈涓渶灏忓€笺€�
       */


      /**
       * @member SuperMap.Route.prototype.length -{number}
       * @description 璺敱瀵硅薄鐨勯暱搴︺€傚崟浣嶄笌鏁版嵁闆嗙殑鍗曚綅鐩稿悓銆�
       */


      /**
       * @member SuperMap.Route.prototype.center -{number}
       * @description 璺敱瀵硅薄鐨勪腑蹇冪偣
       */


      _createClass(Route, [{
        key: 'toJson',
        value: function toJson() {
          var result = "{";
          if (this.id != null && this.id != undefined) {
            result += "\"id\":" + this.id + ",";
          }
          if (this.center != null && this.center != undefined) {
            result += "\"center\":" + this.center + ",";
          }
          if (this.style != null && this.style != undefined) {
            result += "\"style\":" + this.style + ",";
          }
          if (this.length != null && this.length != undefined) {
            result += "\"length\":" + this.length + ",";
          }
          if (this.maxM != null && this.maxM != undefined) {
            result += "\"maxM\":" + this.maxM + ",";
          }
          if (this.minM != null && this.minM != undefined) {
            result += "\"minM\":" + this.minM + ",";
          }
          if (this.type != null && this.type != undefined) {
            result += "\"type\":\"" + this.type + "\",";
          }
          if (this.parts != null && this.parts != undefined) {
            result += "\"parts\":[" + this.parts[0];

            for (var i = 1; i < this.parts.length; i++) {
              result += "," + this.parts[i];
            }
            result += "],";
          }
          if (this.components != null && this.components.length > 0) {
            result += "\"points\":[";
            for (var j = 0, len = this.components.length; j < len; j++) {
              for (var k = 0, len2 = this.components[j].components.length; k < len2; k++) {
                result += this.components[j].components[k].toJson() + ",";
              }
            }
            result = result.replace(/,$/g, '');
            result += "]";
          }
          result = result.replace(/,$/g, '');
          result += "}";
          return result;
        }

        /**
         * @function SuperMap.Route.prototype.destroy
         * @override
         */

      }, {
        key: 'destroy',
        value: function destroy() {
          var me = this;
          me.id = null;
          me.center = null;
          me.style = null;
          me.length = null;
          me.maxM = null;
          me.minM = null;
          me.type = null;
          me.parts = null;
          me.components.length = 0;
          me.components = null;
          me.componentTypes = null;
        }

        /**
         * @function SuperMap.Route.fromJson
         * @description  灏� JSON 瀵硅薄杞崲涓� SuperMap.Route 瀵硅薄銆�
         * @param jsonObject - {Object} JSON 瀵硅薄琛ㄧず鐨勮矾鐢卞璞°€�
         * @return{SuperMap.Route} 杞寲鍚庣殑 Route 瀵硅薄銆�
         */

      }], [{
        key: 'fromJson',
        value: function fromJson(jsonObject) {
          if (!jsonObject) {
            return;
          }

          var geoParts = jsonObject.parts || [],
              geoPoints = jsonObject.points || [],
              len = geoParts.length,
              lineList = [];
          if (len > 0) {
            for (var i = 0, pointIndex = 0, pointList = []; i < len; i++) {
              for (var j = 0; j < geoParts[i]; j++) {
                pointList.push(_PointWithMeasure2.default.fromJson(geoPoints[pointIndex + j]));
              }
              pointIndex += geoParts[i];
              //鍒ゆ柇绾挎槸鍚﹂棴鍚堬紝濡傛灉闂悎锛屽垯杩斿洖LinearRing锛屽惁鍒欒繑鍥濴ineString
              if (pointList[0].equals(pointList[geoParts[i] - 1])) {
                lineList.push(new _SuperMap2.default.Geometry.LinearRing(pointList));
              } else {
                lineList.push(new _SuperMap2.default.Geometry.LineString(pointList));
              }
              pointList = [];
            }
          } else {
            return null;
          }

          return new Route(lineList, {
            id: jsonObject.id,
            center: jsonObject.center,
            style: jsonObject.style,
            length: jsonObject.length,
            maxM: jsonObject.maxM,
            minM: jsonObject.minM,
            type: jsonObject.type,
            parts: jsonObject.parts
          });
        }
      }]);

      return Route;
    }(_Collection3.default);

    exports.default = Route;


    _SuperMap2.default.Route = Route;

    /***/ }),
  /* 40 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.ServerColor
     * @classdesc 棰滆壊绫汇€傝绫讳娇鐢ㄤ笁鍘熻壊锛� RGB 锛夋潵琛ㄨ揪棰滆壊銆�
     * @param options - {Object} 鍙€夊弬鏁般€傚锛�<br>
     *        red - {number}鑾峰彇鎴栬缃孩鑹插€�,榛樿鍊间负255銆�<br>
     *        green - {number}鑾峰彇鎴栬缃豢鑹插€�,榛樿鍊间负0銆�<br>
     *        blue - {number}鑾峰彇鎴栬缃摑鑹插€�,榛樿鍊间负0銆�
     */
    var ServerColor = function () {

      /**
       * @member SuperMap.ServerColor.prototype.green -{number}
       * @description 鑾峰彇鎴栬缃豢鑹插€�,榛樿鍊间负0銆�
       * @default 0
       */
      function ServerColor(red, green, blue) {
        _classCallCheck(this, ServerColor);

        this.red = 255;
        this.green = 0;
        this.blue = 0;
        this.CLASS_NAME = "SuperMap.ServerColor";

        if (!red && red != 0) {
          this.red = 255;
        } else {
          this.red = red;
        }

        if (!green && green != 0) {
          this.green = 0;
        } else {
          this.green = green;
        }

        if (!blue && blue != 0) {
          this.blue = 0;
        } else {
          this.blue = blue;
        }
      }

      /**
       * @function SuperMap.ServerColor.prototype.destroy
       * @description 閲婃斁璧勬簮锛屽皢寮曠敤璧勬簮鐨勫睘鎬х疆绌恒€�
       */


      /**
       * @member SuperMap.ServerColor.prototype.blue -{number}
       * @description 鑾峰彇鎴栬缃摑鑹插€�,榛樿鍊间负0銆�
       * @default 0
       */


      /**
       * @member SuperMap.ServerColor.prototype.red -{number}
       * @description 鑾峰彇鎴栬缃孩鑹插€�,榛樿鍊间负255銆�
       * @default 255
       */


      _createClass(ServerColor, [{
        key: "destroy",
        value: function destroy() {
          var me = this;
          me.red = null;
          me.green = null;
          me.blue = null;
        }

        /**
         * @function SuperMap.ServerColor.formJson
         * @description 灏咼SON瀵硅薄杞寲涓篠erverColor瀵硅薄銆�
         * @param jsonObject - {Object} 瑕佽浆鎹㈢殑JSON瀵硅薄
         * @return{SuperMap.ServerColor} 杞寲鍚庣殑ServerColor瀵硅薄銆�
         */

      }], [{
        key: "fromJson",
        value: function fromJson(jsonObject) {
          if (!jsonObject) {
            return;
          }
          var color = new ServerColor();
          var red = 255;
          if (jsonObject.red !== null) {
            red = Number(jsonObject.red);
          }
          color.red = red;

          var green = 0;
          if (jsonObject.green !== null) {
            green = Number(jsonObject.green);
          }
          color.green = green;

          var blue = 0;
          if (jsonObject.blue !== null) {
            blue = Number(jsonObject.blue);
          }
          color.blue = blue;
          return color;
        }
      }]);

      return ServerColor;
    }();

    exports.default = ServerColor;


    _SuperMap2.default.ServerColor = ServerColor;

    /***/ }),
  /* 41 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _ServerColor = __webpack_require__(40);

    var _ServerColor2 = _interopRequireDefault(_ServerColor);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.ServerStyle
     * @classdesc 鏈嶅姟绔煝閲忚绱犻鏍肩被銆�
     * @description 璇ョ被鐢ㄤ簬瀹氫箟鐐圭姸绗﹀彿銆佺嚎鐘剁鍙枫€佸～鍏呯鍙烽鏍煎強鍏剁浉鍏冲睘鎬с€�
     * @param options - {Object} 鍙€夊弬鏁般€傚锛�<br>
     *        fillBackColor - {{@link SuperMap.ServerColor}} 濉厖鑳屾櫙棰滆壊銆�<br>
     *        fillBackOpaque - {boolean} 鑳屾櫙鏄惁涓嶉€忔槑銆�<br>
     *        fillForeColor - {{@link SuperMap.ServerColor}} 濉厖棰滆壊銆�<br>
     *        fillGradientMode - {{@link SuperMap.FillGradientMode}} 娓愬彉濉厖椋庢牸鐨勬笎鍙樼被鍨嬨€�<br>
     *        fillGradientAngle - {number}娓愬彉濉厖鐨勬棆杞搴︺€�<br>
     *        fillGradientOffsetRatioX - {number}娓愬彉濉厖涓績鐐圭浉瀵逛簬濉厖鍖哄煙鑼冨洿涓績鐐圭殑姘村钩鍋忕Щ鐧惧垎姣斻€�<br>
     *        fillGradientOffsetRatioY - {number}濉厖涓績鐐圭浉瀵逛簬濉厖鍖哄煙鑼冨洿涓績鐐圭殑鍨傜洿鍋忕Щ鐧惧垎姣斻€�<br>
     *        fillOpaqueRate - {number}濉厖涓嶉€忔槑搴︺€�<br>
     *        fillSymbolID - {integer} 濉厖绗﹀彿鐨勭紪鐮併€�<br>
     *        lineColor - {{@link SuperMap.ServerColor}} 鐭㈤噺瑕佺礌鐨勮竟绾块鑹层€�<br>
     *        lineSymbolID - {integer} 绾跨姸绗﹀彿鐨勭紪鐮併€�<br>
     *        lineWidth - {number}杈圭嚎鐨勫搴︺€�<br>
     *        markerAngle - {number}鐐圭姸绗﹀彿鐨勬棆杞搴︺€�<br>
     *        markerSize - {number}鐐圭姸绗﹀彿鐨勫ぇ灏忋€�<br>
     *        markerSymbolID - {integer} 鐐圭姸绗﹀彿鐨勭紪鐮併€�
     */
    var ServerStyle = function () {

      /**
       * @member SuperMap.ServerStyle.prototype.markerSize -{number}
       * @description 鐐圭姸绗﹀彿鐨勫ぇ灏忋€傚崟浣嶄负姣背锛岀簿搴︿负0.1锛岄粯璁ゅ€间负1.0銆傚綋璇ュ睘鎬ц缃负0鏃讹紝閲囩敤绗﹀彿榛樿澶у皬1.0鏄剧ず銆�
       *              褰撹灞炴€ц缃负闈炴硶鍊兼椂锛屼氦鐢辨湇鍔″櫒榛樿澶勭悊銆�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.lineWidth -{number}
       * @description 杈圭嚎鐨勫搴︺€傚崟浣嶄负姣背锛岀簿搴﹀埌0.1锛岄粯璁ゅ€间负1.0銆�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.lineColor -{SuperMap.ServerColor}
       * @description 鐭㈤噺瑕佺礌鐨勮竟绾块鑹层€傞粯璁や负榛戣壊銆傚鏋滅瓑绾х鍙锋槸鐐圭鍙凤紝鐐圭鍙风殑棰滆壊鐢眑ineColor鎺у埗
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillOpaqueRate -{number}
       * @description 濉厖涓嶉€忔槑搴︺€傚悎娉曞€间负0--100鐨勬暟鍊笺€傚叾涓负0琛ㄧず瀹屽叏閫忔槑锛�
       *              100琛ㄧず瀹屽叏涓嶉€忔槑銆傝祴鍊煎皬浜�0鏃舵寜鐓�0澶勭悊锛屽ぇ浜�100鏃舵寜鐓�100澶勭悊銆傞粯璁ゅ€间负 100銆�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillGradientOffsetRatioX -{number}
       * @description 娓愬彉濉厖涓績鐐圭浉瀵逛簬濉厖鍖哄煙鑼冨洿涓績鐐圭殑姘村钩鍋忕Щ鐧惧垎姣斻€傚畠浠殑鍏崇郴濡備笅锛氳濉厖鍖哄煙鑼冨洿涓績鐐圭殑鍧愭爣涓猴紙x0, y0锛夛紝
       *              濉厖涓績鐐圭殑鍧愭爣涓猴紙x, y锛夛紝濉厖鍖哄煙鑼冨洿鐨勫搴︿负 a锛屾按骞冲亸绉荤櫨鍒嗘瘮涓� dx锛屽垯 x=x0 + a*dx/100銆�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillGradientMode -{SuperMap.FillGradientMode}
       * @description 娓愬彉濉厖椋庢牸鐨勬笎鍙樼被鍨嬨€�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillBackOpaque -{boolean}
       * @description 鑳屾櫙鏄惁涓嶉€忔槑銆俧alse 琛ㄧず閫忔槑銆傞粯璁ゅ€间负 false銆�
       */
      function ServerStyle(options) {
        _classCallCheck(this, ServerStyle);

        this.fillBackColor = null;
        this.fillBackOpaque = false;
        this.fillForeColor = null;
        this.fillGradientMode = null;
        this.fillGradientAngle = 0;
        this.fillGradientOffsetRatioX = 0;
        this.fillGradientOffsetRatioY = 0;
        this.fillOpaqueRate = 100;
        this.fillSymbolID = 0;
        this.lineColor = null;
        this.lineSymbolID = 0;
        this.lineWidth = 1;
        this.markerAngle = 0;
        this.markerSize = 1;
        this.markerSymbolID = -1;
        this.CLASS_NAME = "SuperMap.ServerStyle";

        var me = this;
        me.fillBackColor = new _ServerColor2.default(255, 255, 255);
        me.fillForeColor = new _ServerColor2.default(255, 0, 0);
        me.lineColor = new _ServerColor2.default(0, 0, 0);
        if (options) {
          _SuperMap2.default.Util.extend(this, options);
        }
      }

      /**
       * @function SuperMap.ServerStyle.prototype.destroy
       * @description 閲婃斁璧勬簮锛屽皢寮曠敤璧勬簮鐨勫睘鎬х疆绌恒€�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.markerSymbolID -{integer}
       * @description 鐐圭姸绗﹀彿鐨勭紪鐮併€傛缂栫爜鐢ㄤ簬鍞竴鏍囪瘑鍚勭偣鐘剁鍙枫€傞粯璁や负 -1銆�
       *              鍏充簬绾跨姸绗﹀彿鐨勬牱寮忎笌瀵瑰簲鐨� ID 鍙疯鍦� SuperMap 妗岄潰杞欢涓煡鎵俱€�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.markerAngle -{number}
       * @description 鐐圭姸绗﹀彿鐨勬棆杞搴︺€備互搴︿负鍗曚綅锛岀簿纭埌0.1搴︼紝閫嗘椂閽堟柟鍚戜负姝ｆ柟鍚戯紝榛樿鍊间负0銆�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.lineSymbolID -{integer}
       * @description 绾跨姸绗﹀彿鐨勭紪鐮併€傛缂栫爜鐢ㄤ簬鍞竴鏍囪瘑鍚勬櫘閫氬～鍏呴鏍肩殑濉厖绗﹀彿锛岄粯璁ゅ€间负0銆�
       *              鍏充簬绾跨姸绗﹀彿鐨勬牱寮忎笌瀵瑰簲鐨� ID 鍙疯鍦� SuperMap 妗岄潰杞欢涓煡鎵俱€�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillSymbolID -{integer}
       * @description 濉厖绗﹀彿鐨勭紪鐮併€傛缂栫爜鐢ㄤ簬鍞竴鏍囪瘑鍚勬櫘閫氬～鍏呴鏍肩殑濉厖绗﹀彿銆�
       *              鍏充簬濉厖绗﹀彿鐨勬牱寮忎笌瀵瑰簲鐨� ID 鍙疯鍦� SuperMap 妗岄潰杞欢涓煡鎵俱€�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillGradientOffsetRatioY -{number}
       * @description 濉厖涓績鐐圭浉瀵逛簬濉厖鍖哄煙鑼冨洿涓績鐐圭殑鍨傜洿鍋忕Щ鐧惧垎姣斻€傚畠浠殑鍏崇郴濡備笅锛�<br>
       *           璁惧～鍏呭尯鍩熻寖鍥翠腑蹇冪偣鐨勫潗鏍囦负锛坸0, y0锛夛紝濉厖涓績鐐圭殑鍧愭爣涓猴紙x, y锛夛紝濉厖鍖哄煙鑼冨洿鐨勯珮搴︿负 b锛屽瀭鐩村亸绉荤櫨鍒嗘瘮涓� dy锛屽垯 y=y0 + b*dx/100銆�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillGradientAngle -{number}
       * @description 娓愬彉濉厖鐨勬棆杞搴︺€傚崟浣嶄负搴︼紝绮剧‘鍒�0.1搴︼紝閫嗘椂閽堟柟鍚戜负姝ｆ柟鍚戙€�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillForeColor -{SuperMap.ServerColor}
       * @description 濉厖棰滆壊銆傚綋濉厖妯″紡涓烘笎鍙樺～鍏呮椂锛岃棰滆壊涓哄～鍏呰捣濮嬮鑹层€傞粯璁や负绾㈣壊銆�
       */


      /**
       * @member SuperMap.ServerStyle.prototype.fillBackColor -{SuperMap.ServerColor}
       * @description 濉厖鑳屾櫙棰滆壊銆傚綋濉厖妯″紡涓烘笎鍙樺～鍏呮椂锛岃棰滆壊涓哄～鍏呯粓姝㈣壊銆傞粯璁や负鐧借壊銆�
       */


      _createClass(ServerStyle, [{
        key: 'destroy',
        value: function destroy() {
          var me = this;
          if (me.fillBackColor) {
            me.fillBackColor.destroy();
            me.fillBackColor = null;
          }
          me.fillBackOpaque = null;

          if (me.fillForeColor) {
            me.fillForeColor.destroy();
            me.fillForeColor = null;
          }
          me.fillGradientMode = null;
          me.fillGradientAngle = null;
          me.fillGradientOffsetRatioX = null;
          me.fillGradientOffsetRatioY = null;
          me.fillOpaqueRate = null;
          me.fillSymbolID = null;
          if (me.lineColor) {
            me.lineColor.destroy();
            me.lineColor = null;
          }
          me.lineSymbolID = null;
          me.lineWidth = null;
          me.markerAngle = null;
          me.markerSize = null;
          me.markerSymbolID = null;
        }

        /**
         * @function SuperMap.ServerStyle.prototype.toServerJSONObject
         * @description 杞崲鎴愬搴旂殑 JSON 鏍煎紡瀵硅薄銆�
         * @return{Object } 瀵瑰簲鐨� JSON 鏍煎紡瀵硅薄
         */

      }, {
        key: 'toServerJSONObject',
        value: function toServerJSONObject() {
          var styleObj = {};
          styleObj = _SuperMap2.default.Util.copyAttributes(styleObj, this);
          //鏆傛椂鍏堝拷鐣erverColor寰€Json鐨勮浆鎹�
          return styleObj;
        }

        /**
         * @function SuperMap.ServerStyle.fromJson
         * @description 灏咼SON瀵硅薄杞崲涓� SuperMap.ServerStyle 瀵硅薄銆�
         * @param jsonObject - {Object} 瑕佽浆鎹㈢殑 JSON 瀵硅薄銆�
         * @return{SuperMap.ServerStyle} 杞寲鍚庣殑 SuperMap.ServerStyle 瀵硅薄銆�
         */

      }], [{
        key: 'fromJson',
        value: function fromJson(jsonObject) {
          if (!jsonObject) {
            return;
          }
          return new _SuperMap2.default.ServerStyle({
            fillBackColor: _ServerColor2.default.fromJson(jsonObject.fillBackColor),
            fillBackOpaque: jsonObject.fillBackOpaque,
            fillForeColor: _ServerColor2.default.fromJson(jsonObject.fillForeColor),
            fillGradientMode: jsonObject.fillGradientMode,
            fillGradientAngle: jsonObject.fillGradientAngle,
            fillGradientOffsetRatioX: jsonObject.fillGradientOffsetRatioX,
            fillGradientOffsetRatioY: jsonObject.fillGradientOffsetRatioY,
            fillOpaqueRate: jsonObject.fillOpaqueRate,
            fillSymbolID: jsonObject.fillSymbolID,
            lineColor: _ServerColor2.default.fromJson(jsonObject.lineColor),
            lineSymbolID: jsonObject.lineSymbolID,
            lineWidth: jsonObject.lineWidth,
            markerAngle: jsonObject.markerAngle,
            markerSize: jsonObject.markerSize,
            markerSymbolID: jsonObject.markerSymbolID
          });
        }
      }]);

      return ServerStyle;
    }();

    exports.default = ServerStyle;


    _SuperMap2.default.ServerStyle = ServerStyle;

    /***/ }),
  /* 42 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _REST = __webpack_require__(4);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.KeyServiceParameter
     * @classdesc key鐢宠鍙傛暟
     * @param options - {Object} 鍙傛暟銆傚锛�<br>
     *        name - {string} 鐢宠鏈嶅姟鍚嶇О銆�<br>
     *        serviceIds - {number}鏈嶅姟ID銆�<br>
     *        clientType - {{@link SuperMap.ClientType}} 鏈嶅姟绔被鍨嬨€�<br>
     *        limitation - {number}鏈夋晥鏈�
     */
    var KeyServiceParameter = function () {
      function KeyServiceParameter(options) {
        _classCallCheck(this, KeyServiceParameter);

        this.name = null;
        this.serviceIds = null;
        this.clientType = _REST.ClientType.SERVER;
        this.limitation = null;
        this.CLASS_NAME = "SuperMap.KeyServiceParameter";

        _SuperMap2.default.Util.extend(this, options);
      }

      /**
       * @function SuperMap.KeyServiceParameter.prototype.toJSON
       * @description 杞崲鎴怞SON瀵硅薄
       * @return {Object} 鍙傛暟鐨凧SON瀵硅薄
       */


      _createClass(KeyServiceParameter, [{
        key: 'toJSON',
        value: function toJSON() {
          return {
            name: this.name,
            serviceIds: this.serviceIds,
            clientType: this.clientType,
            limitation: this.limitation
          };
        }
      }]);

      return KeyServiceParameter;
    }();

    exports.default = KeyServiceParameter;


    _SuperMap2.default.KeyServiceParameter = KeyServiceParameter;

    /***/ }),
  /* 43 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _REST = __webpack_require__(4);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.ServerInfo
     * @classdesc 鏈嶅姟鍣ㄤ俊鎭�(瀹夊叏鐩稿叧)锛屽寘鍚湇鍔″櫒绫诲瀷锛屾湇鍔″湴鍧€锛宼oken鏈嶅姟鍦板潃绛�
     * @param type - {string} 鏈嶅姟鍣ㄧ被鍨�
     * @param options - {Object} 鏈嶅姟鍣ㄤ俊鎭浉鍏冲彲閫夊弬鏁般€傚锛�<br>
     *        server - {string} 鏈嶅姟鍣ㄥ湴鍧€,濡傦細http://supermapiserver:8090/iserver<br>
     *        tokenServiceUrl - {string} 闈炲繀濉紝濡傦細http://supermapiserver:8090/iserver/services/security/tokens.json<br>
     *        keyServiceUrl - {string} 闈炲繀濉紝濡傦細http://supermapiserver:8092/web/mycontent/keys/register.json
     */
    var ServerInfo =

            /**
             * @member SuperMap.ServerInfo.prototype.tokenServiceUrl -{string}
             * @description 闈炲繀濉紝濡傦細http://supermapiserver:8090/iserver/services/security/tokens.json
             */

            /**
             * @member SuperMap.ServerInfo.prototype.type -{ServerType}
             * @description 鏈嶅姟鍣ㄧ被鍨�
             */
            function ServerInfo(type, options) {
              _classCallCheck(this, ServerInfo);

              this.type = null;
              this.server = null;
              this.tokenServiceUrl = null;
              this.keyServiceUrl = null;
              this.CLASS_NAME = "SuperMap.ServerInfo";

              this.type = type || _REST.ServerType.ISERVER;
              _SuperMap2.default.Util.extend(this, options);
              if (!this.server) {
                console.error('server url require is not  undefined');
              }
              // var patten = /http:\/\/([^\/]+)/i;
              //this.server = this.server.match(patten)[0];

              var tokenServiceSuffix = "/services/security/tokens.json";
              if (this.type === _REST.ServerType.ISERVER && this.server.indexOf("iserver") < 0) {
                tokenServiceSuffix = "/iserver" + tokenServiceSuffix;
              }

              if (!this.tokenServiceUrl) {
                this.tokenServiceUrl = this.server + tokenServiceSuffix;
              }

              if (!this.keyServiceUrl) {
                if (this.type === _REST.ServerType.IPORTAL) {
                  this.keyServiceUrl = this.server + "/web/mycontent/keys/register.json";
                } else if (this.type === _REST.ServerType.ONLINE) {
                  this.keyServiceUrl = this.server + "/web/mycontent/keys.json";
                }
              }
            }

        /**
         * @member SuperMap.ServerInfo.prototype.keyServiceUrl -{string}
         * @description 闈炲繀濉€傚锛歨ttp://supermapiserver:8092/web/mycontent/keys/register.json
         */


        /**
         * @member SuperMap.ServerInfo.prototype.server -{string}
         * @description 蹇呭～锛屾湇鍔″櫒鍦板潃
         */
    ;

    exports.default = ServerInfo;


    _SuperMap2.default.ServerInfo = ServerInfo;

    /***/ }),
  /* 44 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    var _REST = __webpack_require__(4);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class SuperMap.TokenServiceParameter
     * @classdesc token鐢宠鍙傛暟
     * @param options - {Object} token鐢宠鍙傛暟銆�
     */
    var TokenServiceParameter = function () {
      /**
       * @member SuperMap.TokenServiceParameter.prototype.referer -{string}
       * @description clientType=Referer 鏃讹紝蹇呴€夈€傚鏋滄寜鐓ф寚瀹� URL 鐨勬柟寮忕敵璇蜂护鐗岋紝鍒欎紶閫掔浉搴旂殑 URL銆�
       */


      /**
       * @member SuperMap.TokenServiceParameter.prototype.clientType -{string}
       * @description token鐢宠鐨勫鎴风鏍囪瘑绫诲瀷銆�
       */

      /**
       * @member SuperMap.TokenServiceParameter.prototype.userName -{string}
       * @description 鐢ㄦ埛鍚嶃€�
       */
      function TokenServiceParameter(options) {
        _classCallCheck(this, TokenServiceParameter);

        this.userName = null;
        this.password = null;
        this.clientType = _REST.ClientType.NONE;
        this.ip = null;
        this.referer = null;
        this.expiration = 60;
        this.CLASS_NAME = "SuperMap.TokenServiceParameter";

        _SuperMap2.default.Util.extend(this, options);
      }

      /**
       * @function SuperMap.TokenServiceParameter.prototype.toJSON
       * @description 灏嗘墍鏈変俊鎭浆鎴怞SON瀛楃涓�
       * @return {string} 鍙傛暟鐨凧SON瀛楃涓�
       */


      /**
       * @member SuperMap.TokenServiceParameter.prototype.expiration -{number}
       * @description 鐢宠浠ょ墝鐨勬湁鏁堟湡锛屼粠鍙戝竷浠ょ墝鐨勬椂闂村紑濮嬭绠楋紝鍗曚綅涓哄垎閽熴€�
       */


      /**
       * @member SuperMap.TokenServiceParameter.prototype.ip -{string}
       * @description clientType=Referer 鏃讹紝蹇呴€夈€傚鏋滄寜鐓ф寚瀹� URL 鐨勬柟寮忕敵璇蜂护鐗岋紝鍒欎紶閫掔浉搴旂殑 URL銆�
       */

      /**
       * @member SuperMap.TokenServiceParameter.prototype.password -{string}
       * @description 瀵嗙爜銆�
       */


      _createClass(TokenServiceParameter, [{
        key: 'toJSON',
        value: function toJSON() {
          return {
            userName: this.userName,
            password: this.password,
            clientType: this.clientType,
            ip: this.ip,
            referer: this.referer,
            expiration: this.expiration
          };
        }
      }]);

      return TokenServiceParameter;
    }();

    exports.default = TokenServiceParameter;


    _SuperMap2.default.TokenServiceParameter = TokenServiceParameter;

    /***/ }),
  /* 45 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FetchRequest = exports.Support = undefined;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    __webpack_require__(46);

    var _whatwgFetchImportable = __webpack_require__(28);

    var _whatwgFetchImportable2 = _interopRequireDefault(_whatwgFetchImportable);

    var _fetchJsonp2 = __webpack_require__(22);

    var _fetchJsonp3 = _interopRequireDefault(_fetchJsonp2);

    var _SuperMap = __webpack_require__(0);

    var _SuperMap2 = _interopRequireDefault(_SuperMap);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var Support = exports.Support = _SuperMap2.default.Support = _SuperMap2.default.Support || {
      cors: window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest()
    };
    var FetchRequest = exports.FetchRequest = _SuperMap2.default.FetchRequest = {
      commit: function commit(method, url, params, options) {
        method = method ? method.toUpperCase() : method;
        switch (method) {
          case 'GET':
            return this.get(url, params, options);
          case 'POST':
            return this.post(url, params, options);
          case 'PUT':
            return this.put(url, params, options);
          case 'DELETE':
            return this.delete(url, params, options);
          default:
            return this.get(url, params, options);
        }
      },

      get: function get(url, params, options) {
        options = options || {};
        var type = 'GET';
        url = this._processUrl(url, options);
        url = _SuperMap2.default.Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.urlIsLong(url)) {
          if (_SuperMap2.default.Util.isInTheSameDomain(url) || Support.cors || options.proxy) {
            return this._fetch(url, params, options, type);
          }
          if (!_SuperMap2.default.Util.isInTheSameDomain(url)) {
            url = url.replace('.json', '.jsonp');
            return this._fetchJsonp(url, options);
          }
        }
        return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
      },

      delete: function _delete(url, params, options) {
        options = options || {};
        var type = 'DELETE';
        url = this._processUrl(url, options);
        url = _SuperMap2.default.Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.urlIsLong(url) && Support.cors) {
          return this._fetch(url, params, options, type);
        }
        return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
      },

      post: function post(url, params, options) {
        options = options || {};
        return this._fetch(this._processUrl(url, options), params, options, 'POST');
      },

      put: function put(url, params, options) {
        options = options || {};
        return this._fetch(this._processUrl(url, options), params, options, 'PUT');
      },
      urlIsLong: function urlIsLong(url) {
        //褰撳墠url鐨勫瓧鑺傞暱搴︺€�
        var totalLength = 0,
            charCode = null;
        for (var i = 0, len = url.length; i < len; i++) {
          //杞寲涓篣nicode缂栫爜
          charCode = url.charCodeAt(i);
          if (charCode < 0x007f) {
            totalLength++;
          } else if (0x0080 <= charCode && charCode <= 0x07ff) {
            totalLength += 2;
          } else if (0x0800 <= charCode && charCode <= 0xffff) {
            totalLength += 3;
          }
        }
        return totalLength < 2000 ? false : true;
      },
      _postSimulatie: function _postSimulatie(type, url, params, options) {
        var separator = url.indexOf("?") > -1 ? "&" : "?";
        url += separator + '_method= ' + type;
        return this.post(url, params, options);
      },

      _processUrl: function _processUrl(url, options) {
        if (this._isMVTRequest(url)) {
          return url;
        }

        if (url.indexOf('.json') === -1 && !options.withoutFormatSuffix) {
          if (url.indexOf("?") < 0) {
            url += '.json';
          } else {
            var urlArrays = url.split("?");
            if (urlArrays.length === 2) {
              url = urlArrays[0] + ".json?" + urlArrays[1];
            }
          }
        }
        if (options && options.proxy) {
          if (typeof options.proxy === "function") {
            url = options.proxy(url);
          } else {
            url = decodeURIComponent(url);
            url = options.proxy + encodeURIComponent(url);
          }
        }
        return url;
      },

      _fetch: function _fetch(url, params, options, type) {
        options = options || {};
        options.headers = options.headers || {};
        if (!options.headers['Content-Type']) {
          options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        if (options.timeout) {
          return this._timeout(options.timeout, (0, _whatwgFetchImportable2.default)(url, {
            method: type,
            headers: options.headers,
            body: type === 'PUT' || type === 'POST' ? params : undefined,
            credentials: options.withCredentials ? 'include' : 'omit',
            mode: 'cors'
          }).then(function (response) {
            return response;
          }));
        }
        return (0, _whatwgFetchImportable2.default)(url, {
          method: type,
          body: type === 'PUT' || type === 'POST' ? params : undefined,
          headers: options.headers,
          credentials: options.withCredentials ? 'include' : 'omit',
          mode: 'cors'
        }).then(function (response) {
          return response;
        }).catch(function (e) {
          return e;
        });
      },

      _fetchJsonp: function _fetchJsonp(url, options) {
        options = options || {};
        return (0, _fetchJsonp3.default)(url, { method: 'GET', timeout: options.timeout }).then(function (response) {
          return response;
        });
      },

      _timeout: function _timeout(seconds, promise) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            reject(new Error("timeout"));
          }, seconds);
          promise.then(resolve, reject);
        });
      },

      _getParameterString: function _getParameterString(params) {
        var paramsArray = [];
        for (var key in params) {
          var value = params[key];
          if (value != null && typeof value !== 'function') {
            var encodedValue;
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Array) {
              var encodedItemArray = [];
              var item;
              for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
                item = value[itemIndex];
                encodedItemArray.push(encodeURIComponent(item === null || item === undefined ? "" : item));
              }
              encodedValue = '[' + encodedItemArray.join(",") + ']';
            } else {
              encodedValue = encodeURIComponent(value);
            }
            paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
          }
        }
        return paramsArray.join("&");
      },

      _isMVTRequest: function _isMVTRequest(url) {
        return url.indexOf('.mvt') > -1 || url.indexOf('.pbf') > -1;
      }
    };

    /***/ }),
  /* 46 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var _promisePolyfill = __webpack_require__(25);

    var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    window.Promise = _promisePolyfill2.default;

    /***/ }),
  /* 47 */
  /***/ (function(module, exports) {

    module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAdCAYAAAAjHtusAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYWZlOGIwMi01MWE3LTRiZjYtYWVkYS05MGQ2ZTQ4YjZiMmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODg0NkFBQUE3RjEzMTFFNzhFRjJFQkY4RjcxQjc1NjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODg0NkFBQTk3RjEzMTFFNzhFRjJFQkY4RjcxQjc1NjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MWI3NzdhNC1lZmEyLTQ1MzUtOGQzNi03MmRjNDkyODMzN2UiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYTYzODVjMi1jNDQ1LTExN2EtYTc0ZC1lM2I5MzJlMGE4Y2QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5q1HM0AAAF/ElEQVR42tSabYhUVRjHZ7W01C1uaCRW4F3oi9SXCUnwQ9gsGUFvOEtQH1bLu5VS9sbYh5KicjYt29qiGQwVg2xWWKgocob91AvC+CWsoJqB3qHMSdTMpZyeU/+Df07n3pk7997Z6cBv99z7nHvOvf/z/pxJNZvNVI/jCKXmv6EquAmVkxPSlvtp2GItr0/96fFQForChJAWDiVYTkMYMu4XBFcYjLOwWS3sNwmn8NGzZ0h4Flv/zwIdchAnh/slCGmmKUNIBzYPaXOUr0vPuEjD71JAPh7l61embzinhV3V8nnCGmGT8LwlzSL8/yUh4Tfjo9T/CgnCIYNKycA2Qq21AcHU/VHE80Idoo3Qs0W6p0UtUnkZvEMDeVcCyqxEafF7hL8Qf0oYsIj+lfC9cH1CwhchWAGCtZO+AooQOkdC1Km1VtCb63StW73uFSzgKFUkNwBbmZGGmqowhvg8ZNpH9oXChcIcYRdeNomgxLkaH+S1SGubAxyIpFv+Zp+0DYjrAS00j/dem2VGEl6FJ4Qa4quEu8j2hTCJ+GJhe4JjfQMf6JCYPPbysMPxBlp0BUKOogEF9Rg9/heNvNKYfM0KsZUZaYxX4STGrzJa+zbhPeFH2DcK10KItcI+pI0rVElwXl1ULaKnIJhDw0oRQpTQc1zcbwRU8ATy4DR6yMlTzwkqMziEWHvubJ4Nk4ZtHdnqwvwY17xq3Z4FjrG+z2Kdrdf2ZSGD+xlLPh6t1R0jP9fI22ZzKI92yvQl7EbmBxI4S7Y+vIAOL87QZqsc5uNnssxZIcfYjXT9snCR7jjobidp+FkxA2v+Cq1QervMDmp4P7Xs3YZtE9kOC3P/By6JGaETl8ElwueYTNTDq4UDsKnd7YfCNbT239LF1udS72xYJt1UWxNfN4IIP4bWuTpEja01JtMFZFsm/AHbtHBlDE6yasA4moYTrUbvdBTXHqUrAH4uSadbyzF+vbBM2IsNkS3MNa5305JxqfA02T4TnkX8XOH1mPw8ruVejpxbI9hZD2Cz1U7LdrrUvjP/WfZinNZhr6V27hP+FPZh9aLvLxVO4DllX0G2OcKnlO/DCblxaz6uXBtmi+8mBaP3/SP8IuEIiTRoPPQm2TaEmEyXo0JU+F0YiPFD0hhOsiE/vqeEVwyTgF8L51OilcIZ2I4Ll5NttvAJPfukUeB2sk0ZPSbKIUUJpCII7+DasWy08uhNNazT0wGHI7mAtB7KqMKm38HhDdAUibTVKGicbB8YAqrJ9DRsp43JdB4qUof1HQrPE6XTQWu3Ce/inVzjXhXpMiTwUYugNVQ+p80jrUsV5EH0POKeuXO9QjhFq5GryNYvfEMCDhsftYVsB9ETtG0V9ZjfhCURhbcJFpfwVZ9jvhxsLHwTYtp2svlWQw3vXL8UnqHVSIG8l8ex+tHhBXgjddgqHEZ8ufAA2aaEnYgrF/KrPXrEmMUqZ9THLW06xhoBaVueQpkug+ewOUphE3Qv2Q5gGamXYa+QbVq4O+DQ5FHyZqrjxNt7UHh9uuRa0F7HjCF8o9PCTOGnscM7g2u1Hl9C9oeEnxC/1ajZg8JLiM9Hj9GHJseMShwL2DO0G5yEWn3Zh1QUods5CPkIoqlwAZxhXMsb6HrcEPBxchhdJ6wj29vCW4hfLOzo8J3rltYX50nXQAATSf/K4DEaGlTLvplsk/QCpoD60EQ7gLYZc8H9wq+I3yncEOEcNhuz6HWf3XEiwU/4Y8YEqVp2P10rt+8REvBGw026i4aDcbL9jF8r8Blmf4fCOzhViiscskygXRdehf3CO4hfigmTBXyQrl8TFtD1IzQX3CbcQrY3hPcRv4z8OmHPXwchVNln2MmE7BX6VwIFi/he6uxvb6JM3m0fdqvx/ATidxg2JeC7VDErAw5NzGfvwRJVheEIQ8Mg/pdwIM+UOmi9Q8ivCsrIy0tF+wVbEcLrd3Pb2XisEb4Tdlhsi4WP4RBbaLGrHfC3PrvMIezy9rTpGm5lz9LOMG15xvFxD/j5gjzjjDbMOzk+9zzt3v5bgAEAibzFeFHVgYkAAAAASUVORK5CYII="

    /***/ }),
  /* 48 */
  /***/ (function(module, exports, __webpack_require__) {

    __webpack_require__(21);
    __webpack_require__(20);
    module.exports = __webpack_require__(19);


    /***/ })
  /******/ ]);
