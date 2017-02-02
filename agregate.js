var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+ 'learnyoumongo'
var sizeInput = process.argv[2]

mongo.connect(url, function (err, db){
    if (err) throw err;
    var prices = db.collection('prices');
    prices.aggregate([
        { $match: 
            { size: sizeInput }
        },
        { $group: 
            {  
                _id: "$size",
                total: { $avg: '$price' }
            }
        }
        ]).toArray(function(err, results){
            if (err) throw err;
            var value = results[0].total;
            console.log(Number(value).toFixed(2));
        })
        db.close();
    });