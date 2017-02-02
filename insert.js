var mongo = require('mongodb').MongoClient;
var documentToInsert = {
    firstName: process.argv[2],
    lastName: process.argv[3]
}
mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db){
    if (err) throw err;
    var docs = db.collection('docs');
    docs.insert(documentToInsert, function(err, data){
        if (err) throw err;
        console.log(JSON.stringify(documentToInsert))
        db.close();
    });
})