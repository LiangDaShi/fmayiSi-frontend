# Token
* [验证](#验证)

## 验证
GET　/api/token/check

### Request

#### Headers
token : cd5320b4-f7d8-4698-8c7f-973a98509fc8

### Response

#### Success

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

#### Error

```json
{
    "code": 401,
    "msg": "请登录后操作",
    "time": "1573521822",
    "data": null
}
```
