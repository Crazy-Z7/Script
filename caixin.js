/******************************************
@@Zoo
财新解锁会员阅读
日期:2022.09.05 
[rewrite_local]
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/caixin.js
hostname = gateway.caixin.com
*******************************************/
var caixin = $request.headers;
caixin['Cookie'] = 'ADVC=3b302c11d77ccc';
caixin['authentication'] = 'UJB3Br1qRJEWZQpswrS1zoi4mv5kmAfgh9HjyDaDjGecIP3ZVpCUOWL%2FYwzY0Sv8rS1agmBudDA%3D';
caixin['User-Agent'] = 'Caixin/7.9.7 (iPhone; iOS 15.1.1; Scale/3.00)';
caixin['appinfo'] = '75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98LEUtLgtseUYvCTBaWVg8%2Fj2n6SeH%2FUGQiruwzYypv3wwbdaXakQVxgDazGHZI9zJH06ydDC95HRQEc6qzEc7vNYrqB7jnu2zc0%2FZg2X5hO1g8s0%2B%2FRTxzEQBOi7YvEvF1ZC%2FZKo%2BARPWg6WKA9rr2VvXGI5i6MQdat1gd1NQJwPDHXMWIqoT1Vx7k7vkaRp7rVdzSUSO5SaMvFbYOY1VWCwDEJ7Pybks6aEhhtVr05BK2rrQfL7lZR8%2F3wfYcNgsaJymB3SV9G0o4AEWjl0utiEx9Cybi4jeILaimY%2BcSmfEiZ8%2B%2FqFxKTnANL3wzWrxGGgNfYJ%2BL3dqF6S%2Fr5%2BvFwhgQQVQFtx7wXciHFako1eG3cjcI37GGDERqcvtCasSeh6vYhbS6SyEn7Jt%2BJgnm6dssmqHA7rDiSljnUllGvZjHwla%2BUZzMz5ECRD654y4XgdKXAM4RC2';
$done({headers : caixin});
