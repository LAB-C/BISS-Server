# API서버임 #
## db 세팅 ##
var mysql      = require('mysql');

module.exports = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    port     : '',
    database : ''
  });
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
