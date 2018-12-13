//this method will output all 22 bond films
module.exports.getATwoRandomFilms = function (db) {
    return db.aggregate([{ $sample: { size: 2 } }]).toArray()
}