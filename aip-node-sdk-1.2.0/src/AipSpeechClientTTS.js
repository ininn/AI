var AipSpeechClient = require("baidu-aip-sdk").speech;
var fs = require("fs");

// 设置APPID/AK/SK
var APP_ID = "10412081";
var API_KEY = "8EUosto0KmRzG1Nuwm8NR4qY";
var SECRET_KEY = "9hzBL66oVYbxsxxenL7G4uSsFUv9EkLc";

var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

// 语音合成
/*client.text2audio('大家好，我叫陆卜凡，我来自新吴区实验幼儿园大四班，今年六岁了。我的算术还不错， 因为我有位当数学老师的妈妈，我爸爸是个程序员，在他的帮助下我有了自己的个人主页。同时爸爸也是我的英语老师。平时我喜欢画画，游泳，下围棋，弹吉他，还喜欢玩。爸爸告诉我聪明的小朋友都会玩').then(function(result) {
    console.log('<text2audio>: ' + JSON.stringify(result));
    // 把data数据写入到文件
    fs.writeFileSync('E:/tts.mpVoice1.mp3', result.data);
});
*/

client.text2audio('蔚蓝的天空上飘着朵朵白云，Oh, my god!').then(function(result) {
    console.log('<text2audio>: ' + JSON.stringify(result));
    // 把data数据写入到文件
    fs.writeFileSync('E:/tts.mpVoice.mp3', result.data);
});

/*// 语音合成, 附带合成参数
client.text2audio('百度语音合成测试', {spd: 0, per: 4}).then(function(result) {
    console.log('<text2audio>: ' + JSON.stringify(result));
    // 把data数据写入到文件
    fs.writeFileSync('E:/tts.mpVoice.mp3', result.data);
});
*/