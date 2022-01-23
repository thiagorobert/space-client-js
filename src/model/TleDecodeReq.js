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
import TleData from './TleData';

/**
 * The TleDecodeReq model module.
 * @module model/TleDecodeReq
 * @version 0.0.1
 */
class TleDecodeReq {
    /**
     * Constructs a new <code>TleDecodeReq</code>.
     * @alias module:model/TleDecodeReq
     */
    constructor() { 
        
        TleDecodeReq.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TleDecodeReq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TleDecodeReq} obj Optional instance to populate.
     * @return {module:model/TleDecodeReq} The populated <code>TleDecodeReq</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TleDecodeReq();

            if (data.hasOwnProperty('tleData')) {
                obj['tleData'] = TleData.constructFromObject(data['tleData']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TleData} tleData
 */
TleDecodeReq.prototype['tleData'] = undefined;






export default TleDecodeReq;
