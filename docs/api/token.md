# Token
* [协议须知](#协议须知)
* [数据约束](#数据约束)
* [Token验证](#Token验证)
* [提交数据](#提交数据)

## 协议须知

|规则|描述|
|:-|:-|
|传输方式|HTTP|
|请求方法|GET或POST|
|字符编码|统一采用UTF-8编码|
|响应格式|统一采用JSON格式|

## Token验证
/api/token/check

Content-Type : application/json; charset=utf-8;

### Request
#### Headers
token : cd5320b4-f7d8-4698-8c7f-973a98509fc8

### Response
正确返回
```json
{
    "code": 1,
    "msg": "",
    "time": "1573521629",
    "data": {
        "token": "cd5320b4-f7d8-4698-8c7f-973a98509fc8",
        "expires_in": 2591098
    }
}
```
错误返回
```json
{
    "code": 401,
    "msg": "请登录后操作",
    "time": "1573521822",
    "data": null
}
```
