/*************************************************
@@Zoo
日期:2022.12.04
[rewrite_local]
^https?:\/\/.*.*.hupu.com url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/hupu.js
hostname = *.*.hupu.com
*********************************************/
var hupuad = $request.headers;
hupuad['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';hupuad['Host'] = 'bbs.mobileapi.hupu.com';
  $done({
    headers: hupuad
});
