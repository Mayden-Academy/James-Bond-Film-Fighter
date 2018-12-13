module.exports.updateScores = function(db, json) {
    var collection = db.collection('films');
    collection.updateOne({name: json.won.name}
        , { $inc: { "winCount" : 1} }, function(err, result) {
            console.log("Win counter incremented");
        });
    json.played.forEach(function (film) {
        collection.updateOne({name: film.name},
            {$inc: {"playedCount": 1} }, function (err, result) {
                console.log("Play counter incremented")
            })
    })
}