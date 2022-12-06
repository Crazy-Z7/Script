/*************************************
@@Zoo
睡眠催眠曲解锁订阅
日期:2022.12.06
[rewrite_local]
^https?:\/\/api\.verv\.com\/v4\/pup url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/smcmq.js
hostname = api.verv.com
**************************************/
var ojbk = JSON.parse($response.body);

    ojbk = {
  "is_premium" : true,
  "is_web_purchase" : true,
  "is_subscription_gifted" : true,
  "groups_statuses" : {
    "20504180" : {
      "was_trial" : true
    }
  },
  "is_family_subscription_gifted" : true,
  "purchase_scenario" : "intro.intro.auto_renew_off",
  "purchase_state" : "INTRO"
}

$done({body : JSON.stringify(ojbk)});
