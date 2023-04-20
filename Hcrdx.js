/**********************************************
@Zoo
小程序火柴人大侠破解
日期:2023.04.20
[rewrite_local]
^https？:\/\/hcrdxgame\.dcatgame\.com\/data-manager\/login url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Hcrdx.js
hostname = hcrdxgame.dcatgame.com
**********************************************/
var obj = JSON.parse($response.body);
obj.data.rankScore = 88888888888888;
obj.data.redDiamondCount = 4092599349000;
obj.data.timeSandCount = “888888888888888”;
obj.data.mysticalRockCount = “77777777778888”;
obj.data.summonEAdCount = “9999999999999999”;
$done({body : JSON.stringify(obj)});
