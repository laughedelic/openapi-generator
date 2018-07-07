/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.0.2-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.Animal = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Animal model module.
   * @module model/Animal
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Animal</code>.
   * @alias module:model/Animal
   * @class
   * @param className {String} 
   */
  var exports = function(className) {
    var _this = this;

    _this['className'] = className;

  };

  /**
   * Constructs a <code>Animal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Animal} obj Optional instance to populate.
   * @return {module:model/Animal} The populated <code>Animal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('className')) {
        obj['className'] = ApiClient.convertToType(data['className'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} className
   */
  exports.prototype['className'] = undefined;
  /**
   * @member {String} color
   * @default 'red'
   */
  exports.prototype['color'] = 'red';



  return exports;
}));


