/******************************************
# 改自By StimeKe (https://github.com/StimeKe)
京东比价内置版
[rewrite_local]
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
hostname = api.m.jd.com
*******************************************/
