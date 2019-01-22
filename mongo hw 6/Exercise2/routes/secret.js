const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto')
var express = require('express');
var router = express.Router();
            
const decipher = crypto.createDecipher('aes256', process.env.PRIVATE_KEY);

const url = process.env.DB_HOST;
/* GET home page. */
router.get('/', function (req, res, next) {
    MongoClient.connect(url,{useNewUrlParser:true}, function (err,client) {
        if (err) {
            console.error('An error occurred connecting to MongoDB: ', err);
        }
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(process.env.DB_COLLECTION);

        collection.findOne({}, function (err, doc) {
            const decrypted = decipher.update(doc.message, 'hex', 'utf8') + decipher.final('utf8');
            console.dir(decrypted);
            res.send(decrypted);
            decipher.end();
            client.close();
        });
        console.dir("Done");
    });
});

module.exports = router;


