var mongo = require('mongodb').MongoClient;
var age = parseInt(process.argv[2]);

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db){
    if (err){
        console.log(err);
    }
    
    var collection = db.collection('parrots');
    
    collection.find({
        age: {
            $gt: +age
        }
      }).toArray(function(err, documents) {
        if (err){
        console.log(err);
        }
        console.log(documents);
        db.close();
    });
})