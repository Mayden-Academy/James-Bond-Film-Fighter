//this method will output all 22 bond films
module.exports.getAllFilms = function (db) {
    let collection = db.collection('films')
    asd = collection.aggregate([{ $sample: { size: 2 } }]).toArray((err, docs) => {
        // console.log("Found the following records")
        console.log(docs)
        return docs
        // return docs
    })
    console.log(asd)
}

