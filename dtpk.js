/*************************************
@@Zoo
地铁跑酷解锁钥匙，滑板，金币，(没效果app卸载重装)
日期:2022.09.17
[rewrite_local]
^https:\/\/(.*.subway.uu.cc)\/backup\/readBasicData url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/dtpk.js
hostname = game.subway.uu.cc
**************************************/
var body = $response.body.replace(/coins":"\d+/g, 'coins":"987654321').replace(/keys":"\d+/g, 'keys":"123456').replace(/skids":"\d+/g, 'skids":"78910'); $done({body});
