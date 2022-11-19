/**********************************************
@@Zoo
樊登读书解锁会员权限
日期:2022.11.19
[rewrite_local]
^https?:\/\/(.*.dushu365.com) url script-request-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/fdds.js
hostname = *.dushu365.com
**********************************************/
var body = $response.body.replace(/"token":".*?"/g, '"token":"20221119qbmqdUt8vptKBeZn7ox"'); $done({body});
