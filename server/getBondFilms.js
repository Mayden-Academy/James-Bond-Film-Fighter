//this method will output all 22 bond films
module.exports.getAllFilms = function (db) {
    // let collection = db.collection('films')
    return db.aggregate([{ $sample: { size: 2 } }]).toArray()
}
