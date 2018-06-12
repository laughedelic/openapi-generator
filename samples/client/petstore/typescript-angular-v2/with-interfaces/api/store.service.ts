/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';
import { CustomQueryEncoderHelper }                          from '../encoder';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Order } from '../model/order';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { StoreServiceInterface }                            from './store.serviceInterface';


@Injectable()
export class StoreService implements StoreServiceInterface {

    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders = new Headers();
    public configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * @summary Delete purchase order by ID
     * @param orderId ID of the order that needs to be deleted
     */
    public deleteOrder(orderId: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.deleteOrderWithHttpInfo(orderId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Returns a map of status codes to quantities
     * @summary Returns pet inventories by status
     */
    public getInventory(extraHttpRequestParams?: RequestOptionsArgs): Observable<{ [key: string]: number; }> {
        return this.getInventoryWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * @summary Find purchase order by ID
     * @param orderId ID of pet that needs to be fetched
     */
    public getOrderById(orderId: number, extraHttpRequestParams?: RequestOptionsArgs): Observable<Order> {
        return this.getOrderByIdWithHttpInfo(orderId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Place an order for a pet
     * @param order order placed for purchasing the pet
     */
    public placeOrder(order: Order, extraHttpRequestParams?: RequestOptionsArgs): Observable<Order> {
        return this.placeOrderWithHttpInfo(order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param orderId ID of the order that needs to be deleted
     
     */
    public deleteOrderWithHttpInfo(orderId: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling deleteOrder.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/store/order/${encodeURIComponent(String(orderId))}`, requestOptions);
    }

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     
     */
    public getInventoryWithHttpInfo(extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (api_key) required
        if (this.configuration.apiKeys["api_key"]) {
            headers.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/store/inventory`, requestOptions);
    }

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generated exceptions
     * @param orderId ID of pet that needs to be fetched
     
     */
    public getOrderByIdWithHttpInfo(orderId: number, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getOrderById.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/store/order/${encodeURIComponent(String(orderId))}`, requestOptions);
    }

    /**
     * Place an order for a pet
     * 
     * @param order order placed for purchasing the pet
     
     */
    public placeOrderWithHttpInfo(order: Order, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (order === null || order === undefined) {
            throw new Error('Required parameter order was null or undefined when calling placeOrder.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: order == null ? '' : JSON.stringify(order), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // issues#4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/store/order`, requestOptions);
    }

}
