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


import ApiClient from "../ApiClient";
import TleDecodeReq from '../model/TleDecodeReq';
import TleDecodeRes from '../model/TleDecodeRes';
import TleToOrbitReq from '../model/TleToOrbitReq';
import TleToOrbitRes from '../model/TleToOrbitRes';

/**
* Tle service.
* @module api/TleApi
* @version 0.0.1
*/
export default class TleApi {

    /**
    * Constructs a new TleApi. 
    * @alias module:api/TleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the tleDecode operation.
     * @callback module:api/TleApi~tleDecodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TleDecodeRes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/TleDecodeReq} tleDecodeReq 
     * @param {module:api/TleApi~tleDecodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TleDecodeRes}
     */
    tleDecode(tleDecodeReq, callback) {
      let postBody = tleDecodeReq;
      // verify the required parameter 'tleDecodeReq' is set
      if (tleDecodeReq === undefined || tleDecodeReq === null) {
        throw new Error("Missing the required parameter 'tleDecodeReq' when calling tleDecode");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TleDecodeRes;
      return this.apiClient.callApi(
        '/space/v1/tle/decode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tleToOrbit operation.
     * @callback module:api/TleApi~tleToOrbitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TleToOrbitRes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/TleToOrbitReq} tleToOrbitReq 
     * @param {module:api/TleApi~tleToOrbitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TleToOrbitRes}
     */
    tleToOrbit(tleToOrbitReq, callback) {
      let postBody = tleToOrbitReq;
      // verify the required parameter 'tleToOrbitReq' is set
      if (tleToOrbitReq === undefined || tleToOrbitReq === null) {
        throw new Error("Missing the required parameter 'tleToOrbitReq' when calling tleToOrbit");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TleToOrbitRes;
      return this.apiClient.callApi(
        '/space/v1/tle/orbit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
