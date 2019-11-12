# 用户
* [用户登录](#用户登录)

## 用户登录
/api/user/login

Content-Type : application/json; charset=utf-8;

### Request

```json
{
    "account": "admin",
    "password": "123456"
}
```

### Response
正确返回
```json
{
    "code": 1,
    "msg": "登录成功",
    "time": "1573457626",
    "data": {
        "userinfo": {
            "id": 1,
            "username": "admin",
            "nickname": "admin",
            "mobile": "13888888888",
            "avatar": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigxNjAsMTkwLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5BPC90ZXh0Pjwvc3ZnPg==",
            "score": 0,
            "token": "149ed13b-da6f-45f8-ad57-7c77a2a7d63e",
            "user_id": 1,
            "createtime": 1573457627,
            "expiretime": 1576049627,
            "expires_in": 2592000
        }
    }
}
```
错误返回
```json
{
    "code": 0,
    "msg": "密码不正确",
    "time": "1573460173",
    "data": null
}
```
