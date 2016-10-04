/*
 * author : agung.julisman@yahoo.com
 *
 * */
'use strict';

const Promise = require('bluebird')
const request = require("request")

module.exports = {
    version: '1.0.0',

    postService: (url,data,callback) => {
        return new Promise(function (resolve,reject) {
            request({
                url: url,
                method: 'POST',
                json: data
            },(error, response, body ) =>{
                if (error) { return reject(error); }
                resolve({status: response.statusCode, body : body});
            });
        }).nodeify(callback);
    },

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
                if (error) { return reject(error); }
            resolve({status: response.statusCode, body : body});
            });
        }).nodeify(callback);
    }
}


