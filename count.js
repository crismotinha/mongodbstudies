var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+ 'learnyoumongo'
var ageInput = parseInt(process.argv[2])

mongo.connect(url, function (err, db){
    if (err) throw err;
    var parrots = db.collection('parrots');
    parrots.count({age:{
            $gt: +ageInput
        }}, function(err, data){
        if (err) throw err;
        console.log(data);
        db.close();
    });
})