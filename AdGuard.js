/**********************************************
@Zoo
美区AdGuard解锁永久订阅，规则只需开一次
日期:2023.05.18
[rewrite_local]
^https?:\/\/mobile-api\.adguard\.org\/api\/2\.0\/ios_validate_receipt\/ADG_EXT url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Script/main/AdGuard.js
hostname = mobile-api.adguard.org
**********************************************/





var OwnerReadGuard = JSON.parse($response.body);

OwnerReadGuard = {
    "products": [{
        "premium_status": "ACTIVE",
        "product_id": "com.adguard.lifetimePurchase"
    }]
}


$done({
    body: JSON.stringify(OwnerReadGuard)});