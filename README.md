API서버임
========

This is "Blockchain based IoT Security Service" what I made in 2018 Jeju Blockchain Hackathon.
LAB-C팀이 2018 제주블록체인해커톤에서 만든 "Blockchain-based IoT Security Service"입니다

## db 세팅 ##
```javascript
var mysql      = require('mysql');

const connection = mysql.createPool({
    host     : '',
    user     : '',
    password : '',
    port     : '',
    database : ''
});
module.exports = connection;
```
# transaction address #
## 지갑 등록 ##
url : hack.cielsoft.me/api/iot (PUSH)
### request ###

```
{
    "iot": "지갑 값",
    "end": "엔드 디바이스 지갑 값"
}
```

### response ###
```
{
    "success" : true,
    "message" : null, //있는경우 오류 메세지
    "errors" : null, //있으면 오류
    "data" : data //반응값
}
```
## 지갑 주소 확인 ##
url : hack.cielsoft.me/api/iot/{iot 지갑주소} (GET)

### response ###
```
{
    "success" : true,
    "message" : null, //있는경우 오류 메세지
    "errors" : null, //있으면 오류
    "data" : data //고유아이디, iot지갑주소, end지갑주소
}
```
## 트랙잭션 아이디 등록 ##
url : hack.cielsoft.me/api/iot/add (PUSH)

###  request ###
```
{
    "iot" : "iot지갑주소",
    "transaction" : "트랙잭션 아이디"
}
```

### respoonse ###
```
{
    "success" : true,
    "message" : null, //있는경우 오류 메세지
    "errors" : null, //있으면 오류
    "data" : data //반응값
}
```
# device addressbook #
* uuid와 지갑정보를 함께 저장!
* uuid 조회후 지갑이 없을 시 지갑 생성 ( 엔드디바이스 )
## 지갑 등록 ##
url : hack.cielsoft.me/api/device (PUSH)
### request ###

```
{
    "uuid": "uuid값",
    "key": "엔드 디바이스 지갑 값"
}
```

### response ###
```
{
    "success" : true,
    "message" : null, //있는경우 오류 메세지
    "errors" : null, //있으면 오류
    "data" : data //반응값
}
```
## 지갑 주소 확인 ##
url : hack.cielsoft.me/api/device/{device uuid} (GET)

### response ###
```
{
    "success" : true,
    "message" : null, //있는경우 오류 메세지
    "errors" : null, //있으면 오류
    "data" : data //고유아이디, iot지갑주소, end지갑주소
}
```
