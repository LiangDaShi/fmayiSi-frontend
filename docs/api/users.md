# 用户
* [登录](#登录)
* [修改信息](#修改信息)
* [登出](#登出)

## 登录
POST　/api/user/login

### Request

#### Body
Row　json

```json
{
    "account": "admin",
    "password": "123456"
}
```

### Response

#### Success

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

#### Error

```json
{
    "code": 0,
    "msg": "密码不正确",
    "time": "1573460173",
    "data": null
}
```

## 修改信息
POST　/api/user/profile

### Request

#### Headers
token : cd5320b4-f7d8-4698-8c7f-973a98509fc8

#### Body
Row　json

```json
{
    "nickname": "demo",
    "bio":"do my best"
}
```
### Response

#### Success

```json
{
    "code": 1,
    "msg": "",
    "time": "1573524890",
    "data": null
}
```

#### Error

```json
{
    "code": 401,
    "msg": "请登录后操作",
    "time": "1573525334",
    "data": null
}
```

## 登出
GET　/api/user/logout

### Request

#### Headers
token : cd5320b4-f7d8-4698-8c7f-973a98509fc8

### Response

#### Success

```json
{
    "code": 1,
    "msg": "注销成功",
    "time": "1573526194",
    "data": null
}
```

#### Error

```json
{
    "code": 401,
    "msg": "请登录后操作",
    "time": "1573525998",
    "data": null
}
```
