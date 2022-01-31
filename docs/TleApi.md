# TleApi.TleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tleDecode**](TleApi.md#tleDecode) | **POST** /space/v1/tle/decode | 
[**tleToCorridor**](TleApi.md#tleToCorridor) | **POST** /space/v1/tle/corridor | 
[**tleToOrbit**](TleApi.md#tleToOrbit) | **POST** /space/v1/tle/orbit | 



## tleDecode

> TleDecodeRes tleDecode(tleDecodeReq)



### Example

```javascript
import TleApi from 'space-client-js';

let apiInstance = new TleApi.TleApi();
let tleDecodeReq = new TleApi.TleDecodeReq(); // TleDecodeReq | 
apiInstance.tleDecode(tleDecodeReq, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tleDecodeReq** | [**TleDecodeReq**](TleDecodeReq.md)|  | 

### Return type

[**TleDecodeRes**](TleDecodeRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tleToCorridor

> TleToCorridorRes tleToCorridor(tleToCorridorReq)



### Example

```javascript
import TleApi from 'space-client-js';

let apiInstance = new TleApi.TleApi();
let tleToCorridorReq = new TleApi.TleToCorridorReq(); // TleToCorridorReq | 
apiInstance.tleToCorridor(tleToCorridorReq, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tleToCorridorReq** | [**TleToCorridorReq**](TleToCorridorReq.md)|  | 

### Return type

[**TleToCorridorRes**](TleToCorridorRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tleToOrbit

> TleToOrbitRes tleToOrbit(tleToOrbitReq)



### Example

```javascript
import TleApi from 'space-client-js';

let apiInstance = new TleApi.TleApi();
let tleToOrbitReq = new TleApi.TleToOrbitReq(); // TleToOrbitReq | 
apiInstance.tleToOrbit(tleToOrbitReq, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tleToOrbitReq** | [**TleToOrbitReq**](TleToOrbitReq.md)|  | 

### Return type

[**TleToOrbitRes**](TleToOrbitRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

