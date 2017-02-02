var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+ process.argv[2];
var col = process.argv[3];
var givenId = process.argv[4];

mongo.connect(url, function (err, db){
    if (err) throw err;
    var colect = db.collection(col);
    colect.remove({_id: givenId}, function(err, data){
        if (err) throw err;

        db.close();
    });
})