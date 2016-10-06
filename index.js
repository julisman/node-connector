/*
 * author : agung.julisman@yahoo.com
 *
 * */
'use strict'

const Promise = require('bluebird')
const request = require("request")

/**
 * Module exports.
 * @public
 */

module.exports = {
    version: '1.0.3',

    /**
     * Service fot method POST.
     *
     * @param  {String} url
     * @param  {Json} data
     * @return {Object} Callback status 'statusCode' and body 'response'
     */
    postService: (url,data,callback) => {
        return new Promise(function (resolve,reject) {
            request({
                url: url,
                method: 'POST',
                json: data
            },(error, response, body ) =>{
                if (error) {
                    return reject(error)
                    throw error
                }
                resolve({status: response.statusCode, body : body})
            })
        }).nodeify(callback)
    },

    /**
     * Service fot method GET.
     *
     * @param  {String} url
     * @param  {Object} query
     * @param  {String} auth
     * @return {Object} Callback status 'statusCode' and body 'response'
     */
    getService:(url,query,auth,callback) => {
        return new Promise(function (resolve,reject) {
            request({
                url: url,
                method: 'GET',
                qs:query,
                headers: {
                    'Authorization': auth
                }
            },(error, response, body ) =>{
                if (error) {
                    return reject(error)
                    throw error
                }
            resolve({status: response.statusCode, body : body})
            })
        }).nodeify(callback)
    }
}


