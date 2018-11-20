var express  = require('express');
var router   = express.Router();
var util     = require('../util');
const connection = require('../db')
// create
router.post('/',
  function(req,res,next){
    console.log("hello");
    console.log(req.body);
    connection.query(`INSERT INTO address (iot_address, end_address) VALUES ('${req.body.iot}', '${req.body.end}')`, function (err, result) {
      if (err) throw err;
      console.log("Inserted");
      res.json(err||!result? util.successFalse(err): util.successTrue(null));
    });
  }
);
// show
router.get('/:iot_address',
  function(req,res,next) {
    connection.query(`SELECT * FROM address WHERE iot_address = '${req.params.iot_address}' ORDER BY _id DESC LIMIT 1 `, function (err, result) {
      if (err) throw err;
      console.log("Inserted");
      res.json(err||!result? util.successFalse(err): util.successTrue(result));
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



