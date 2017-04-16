/*
let read=require('./read')
let write=require('./write');
let async=require('async');
let url='http://top.baidu.com/buzz?b=26';
var debug = require('debug')('crawler:main');

async.waterfall([
    function (callback) {
        read(url,callback)
    },
    function (data,callback) {
        write(data,callback)
    }
],function (err,result) {
    console.log('完成')
})*/
/**
 * 主入口模块
 */
let read = require('./read');
let write = require('./write');
let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26';
let Movie = require('../model').Movie;
let debug = require('debug')('crawl:main');
async.waterfall([
    function (callback) {
        Movie.remove({},callback);
    },
    function (data,callback) {
        read(url,callback);
    },
    function (data,callback) {
        write(data,callback);
    }
],function (err,result) {
    debug('任务全部执行完毕!');
});
