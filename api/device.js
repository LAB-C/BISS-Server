const express  = require('express')
const router   = express.Router()
const util     = require('../util')
const connection = require('../db')

// create
router.post('/',
    function(req,res,next){
        console.log(req.body);
        connection.query(`INSERT INTO device_book (name, address) VALUES ('${req.body.uuid}', '${req.body.key}')`, function (err, result) {
            if (err) throw err;
            res.json(err||!result? util.successFalse(err): util.successTrue(null));
        });
    }
);
// get list iot 
router.get('/iot',
    function(req,res,next) {
        console.log("sdfsd")
        connection.query(`SELECT * FROM address_book ORDER BY _id DESC`, function (err, result) {
            if (err) throw err;
            res.json(err||!result? util.successFalse(err): util.successTrue(result));
        });
    }
);
// show
router.get('/:uuid',
    function(req,res,next) {
        connection.query(`SELECT * FROM device_book WHERE name = '${req.params.uuid}' ORDER BY _id DESC LIMIT 1 `, function (err, result) {
            if (err) throw err;
            res.json(err||!result? util.successFalse(err): util.successTrue(result));
        });
    }
);


module.exports = router;



