//require 函数用于加载需要的模块
var express = require('express');
var bodyParser = require('body-parser');
var resultJson = require('./resultJson');
var fs = require('fs');
var url = require('url');

var path = require('path');




var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/Get/getString', function (req, res) {
    //请求的参数
    var query = req.query;
    for (var key in query) {
        console.log("参数 key is: ", key, " , value is: ", query[key]);
    }
    //请求头
    var headers = req.headers;
    for (var key in headers) {
        console.log("头部信息 key is: ", key, " , value is: ", headers[key]);
    }
    //链接
    console.log("Url：", req.url);

    //如果该次访问带有key值为“userName”的请求头，如果value不是“leavesC”，则认为请求的参数错误
    //如果不带有key值为“userName”的请求头，则不受影响
    //要注意，请求头的key值会被置为小写
    if(headers.hasOwnProperty('username')){
        console.log("userName： hasssssss");
    }

    if(headers.hasOwnProperty('host')){
        console.log("userName： hostttttttt");
    }

    var userName= headers['userName'];
    if (userName && userName !== 'leavesC') {
        return resultJson.onParamsError(res);
    }
    var data = {};
    data.item1 = 'leavesC';
    data.item2 = 123456;
    resultJson.onSuccess(res, data);
});






app.get('/uploads', function (req, res) {

    console.log("/Get/getString/:id");
    //请求的参数
    var query = req.query;
    for (var key in query) {
        console.log("参数 key is: ", key, " , value is: ", query[key]);
    }
    //请求头
    var headers = req.headers;
    for (var key in headers) {
        console.log("头部信息 key is: ", key, " , value is: ", headers[key]);
    }
    //链接
    console.log("Url：", req.url);
    var filename=""+query["name"];

    console.log("filename", filename);
    var userName= headers['userName'];
    if (userName && userName !== 'leavesC') {
        return resultJson.onParamsError(res);
    }
    var data = {};
    data.item1 = 'leavesC';
    data.item2 = 123456;
    // data.item3 = filename;




    fs.readFile("./uploads/" + filename,function(err,data1){
        if(err){
            fs.readFile("./uploads/err.jpg",function(err,data2){
                data.item3 = data2.length;
            })

            resultJson.onSuccess(res, data);
            return;
        };
        data.item3 = data1.length;
        resultJson.onSuccess(res, data);
    });
});



















app.get('/uploadss', function (req, res) {

    console.log("/Get/getString/:id");
    //请求的参数
    var query = req.query;
    for (var key in query) {
        console.log("参数 key is: ", key, " , value is: ", query[key]);
    }
    //请求头
    var headers = req.headers;
    for (var key in headers) {
        console.log("头部信息 key is: ", key, " , value is: ", headers[key]);
    }
    //链接
    console.log("Url：", req.url);
    var filename=""+query["name"];

    console.log("filename：", filename);



    fs.readFile("./uploads/" + filename,function(err,data1){
        if(err){
            console.log("不存在");
            fs.readFile("./uploads/err.jpg",function(err,data2){
                if(err){
                    res.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
                    res.end("no such page");
                    return;
                };
                res.writeHead(200,{"Content-type":"image/jpg"});
                res.end(data2);
            })
            return;
        };
        console.log("存在");
        res.writeHead(200,{"Content-type":"image/jpg"});
        res.end(data1);
    });


});


app.post('/Post/postUser', function (req, res) {
    var body = req.body;
    for (var key in body) {
        console.log("body 参数 key is: ", key, " , value is: ", body[key]);
    }
    //请求头
    var headers = req.headers;
    for (var key in headers) {
        console.log("headers 头部信息 key is: ", key, " , value is: ", headers[key]);
    }
    //链接
    console.log("Url：", req.url);

    var data = {};
    data.name = 'leavesC';
    data.mobile = 123456;
    resultJson.onSuccess(res, data);
});







function getMime(extname){
    switch(extname){
        case ".html" :
            return "text/html";
            break;
        case ".jpg" :
            return "image/jpg";
            break;
        case ".css":
            return "text/css";

        case ".mp4":
            return "video/mp4";
            break;
        default :
            return "text/html";
    }
}



var oss = require('ali-oss');

const client  = new oss({
  accessKeyId: 'LTAI4GEBqghJsjehciQKfSzu',
  accessKeySecret: 'KoP7tPbfjNYZ2cjNaIOiyx3f1tsUhA',
  bucket: 'backupzcg',
  endpoint: 'https://oss-cn-hongkong-internal.aliyuncs.com'
});




app.get('/Get/OSS', function (req, res) {
    //请求的参数
    var query = req.query;
    for (var key in query) {
        console.log("参数 key is: ", key, " , value is: ", query[key]);
    }
    //请求头
    var headers = req.headers;
    for (var key in headers) {
        console.log("头部信息 key is: ", key, " , value is: ", headers[key]);
    }
    //链接
    console.log("Url：", req.url);

    //如果该次访问带有key值为“userName”的请求头，如果value不是“leavesC”，则认为请求的参数错误
    //如果不带有key值为“userName”的请求头，则不受影响
    //要注意，请求头的key值会被置为小写
    if(headers.hasOwnProperty('username')){
        console.log("userName： hasssssss");
    }

    if(headers.hasOwnProperty('host')){
        console.log("userName： hostttttttt");
    }

    var userName= headers['userName'];
    if (userName && userName !== 'leavesC') {
        return resultJson.onParamsError(res);
    }
    //var data = {};
    //data.item1 = 'leavesC';
    //data.item2 = 123456;
    //resultJson.onSuccess(res, data);
    
    try {
        let result = client.list({
            'max-keys': 5
        })
        console.log(result)
        var data = {};
        data.item1 = 'leavesC';
        data.result = result.length;
        resultJson.onSuccess(res, data);
        //resultJson.onSuccess(res, result);
    } catch (err) {
        console.log (err)
    }
    
});






app.listen(1223);
