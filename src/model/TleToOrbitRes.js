/**
 * Tle API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TleToOrbitRes model module.
 * @module model/TleToOrbitRes
 * @version 0.0.1
 */
class TleToOrbitRes {
    /**
     * Constructs a new <code>TleToOrbitRes</code>.
     * @alias module:model/TleToOrbitRes
     */
    constructor() { 
        
        TleToOrbitRes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TleToOrbitRes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TleToOrbitRes} obj Optional instance to populate.
     * @return {module:model/TleToOrbitRes} The populated <code>TleToOrbitRes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TleToOrbitRes();

            if (data.hasOwnProperty('orbit')) {
                obj['orbit'] = ApiClient.convertToType(data['orbit'], 'String');
            }
            if (data.hasOwnProperty('visualization')) {
                obj['visualization'] = ApiClient.convertToType(data['visualization'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} orbit
 */
TleToOrbitRes.prototype['orbit'] = undefined;

/**
 * @member {String} visualization
 */
TleToOrbitRes.prototype['visualization'] = undefined;






export default TleToOrbitRes;

