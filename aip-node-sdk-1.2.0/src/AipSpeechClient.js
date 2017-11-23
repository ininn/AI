var AipSpeechClient = require("baidu-aip-sdk").speech;
var fs = require("fs");

// 设置APPID/AK/SK
var APP_ID = "10412081";
var API_KEY = "8EUosto0KmRzG1Nuwm8NR4qY";
var SECRET_KEY = "9hzBL66oVYbxsxxenL7G4uSsFUv9EkLc";

var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

let voice = fs.readFileSync('E:/aip-node-sdk-1.2.0/public/16k.pcm');

let voiceBuffer = new Buffer(voice);

// 识别本地文件
/*client.recognize(voiceBuffer, 'pcm', 16000).then(function (result) {
    console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
    console.log(err);
});*/

// 识别本地文件，附带参数
client.recognize(voiceBuffer, 'pcm', 16000, {lan:'zh', cuid:'lhqxxxxx'+Math.random(),ptc:1}).then(function (result) {
    console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
    console.log(err);
});

 // 识别远程语音文件，结果回调到指定服务器
/*client.recognizeByUrl('http://127.0.0.1/res/16k_test.pcm', 'http://xxx.com/dump', 'pcm', 16000).then(function(result) {
    console.log('<recognizeByUrl>: ' + JSON.stringify(result));
}, function(err) {
    console.log(err);
});
*/