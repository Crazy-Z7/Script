/**********************************************
@Zoo
小程序火柴人大侠破解
日期:2023.04.20
[rewrite_local]
^https？:\/\/hcrdxgame\.dcatgame\.com\/data-manager\/login url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Hcrdx.js
hostname = hcrdxgame.dcatgame.com
**********************************************/
var obj = JSON.parse($response.body);
obj.data.currentEnergy = 555555555555555555665;
obj.data.timeSandCount = "4444444444444444444";
obj.data.redDiamondCount = “11111111111111111”;
obj.data.mysticalRockCount = “222222222222222”;
obj.data.summonEAdCount = “333333333333333333”;
$done({body : JSON.stringify(obj)});
