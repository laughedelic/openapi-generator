/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ClassModel model module.
 * @module model/ClassModel
 * @version 1.0.0
 */
class ClassModel {
    /**
     * Constructs a new <code>ClassModel</code>.
     * Model for testing model with \&quot;_class\&quot; property
     * @alias module:model/ClassModel
     */
    constructor() { 
        
        ClassModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClassModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassModel} obj Optional instance to populate.
     * @return {module:model/ClassModel} The populated <code>ClassModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClassModel();

            if (data.hasOwnProperty('_class')) {
                obj['_class'] = ApiClient.convertToType(data['_class'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _class
 */
ClassModel.prototype['_class'] = undefined;






export default ClassModel;

