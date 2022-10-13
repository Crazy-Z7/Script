/*************************************
@@Zoo
ihour解锁订阅
日期:2022.10.13
[rewrite_local]
^https?:\/\/firebaseinstallations\.googleapis\.com\/v1/projects/clover-ihour\/installations\/ url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/ihour.js
hostname = firebaseinstallations.googleapis.com
**************************************/
var body = $response.body.replace(/.+/g, '"{\n  \"refreshToken\" : \"3_AS3qfwLoa98UmDINr8DjLdS47UAPyYMPD_S-iL8_Ga-taR7c2HRLqxM_8V_v_tdYtsJ_yrobiWLQzoZaochwyIRN7FQIbyT0b5iDEHEESgAS-zk\",\n  \"fid\" : \"fZ5fOp9mIUpkpnOOSGtZDb\",\n  \"name\" : \"projects\/777979943304\/installations\/fZ5fOp9mIUpkpnOOSGtZDb\",\n  \"authToken\" : {\n    \"token\" : \"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE6Nzc3OTc5OTQzMzA0OmlvczoyMGUzMGI5MGExZDUxNmViNGYwMjNkIiwiZXhwIjoxNjY2MjY2NzMxLCJmaWQiOiJmWjVmT3A5bUlVcGtwbk9PU0d0WkRiIiwicHJvamVjdE51bWJlciI6Nzc3OTc5OTQzMzA0fQ.AB2LPV8wRQIgQx3aAARdoOBfXhROJdmFvvKEyqVpc0_nRtVFyJBCiQ0CIQCeekTUTg5mxeZ9APW7InRcDQdbnSUhWzJFyj9tnFDXkw\",\n    \"expiresIn\" : \"9999999999999s\"\n  }\n}\n"'); $done({body});
