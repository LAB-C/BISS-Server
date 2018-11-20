var express  = require('express');
var router   = express.Router();
var util     = require('../util');
const connection = require('../db')

// create
router.post('/',
  function(req,res,next){
    console.log(req.body);
    connection.query(`INSERT INTO address (iot_address) VALUES ('${req.body.iot}')`, function (err, result) {
      if (err) throw err;
      res.json(err||!result? util.successFalse(err): util.successTrue(null));
    });
  }
);
// show
router.get('/:iot_address',
  function(req,res,next) {
    connection.query(`SELECT * FROM address WHERE iot_address = '${req.params.iot_address}' ORDER BY _id DESC LIMIT 1 `, function (err, result) {
      if (err) throw err;
      res.json(err||!result? util.successFalse(err): util.successTrue(result));
    });
  }
);


// iot regist
router.post('/regist',
  function(req,res,next){
    console.log(req.body);
        connection.query(`INSERT INTO device_book (name, address,iot_name,iot_desc) VALUES ('${req.body.uuid}', '${req.body.key}', '${req.body.name}', '${req.body.desc}')`, function (err, result) {
      if (err) throw err;
      res.json(err||!result? util.successFalse(err): util.successTrue(null));
    });
  }
);

router.post('/add',
  function(req,res,next){
    console.log("add");
    console.log(req.body);
    connection.query(`UPDATE address SET hash = '${req.body.transaction}' WHERE iot_address = '${req.body.iot}'`, function (err, result) {
      if (err) throw err;
      console.log("added");
      console.log(result);
      res.json(err||!result? util.successFalse(err): util.successTrue(null));
    });
  }
);


module.exports = router;



