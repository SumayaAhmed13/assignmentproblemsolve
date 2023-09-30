
//1.Create a new collection.
use('course');
db.createCollection("assignment");


//2.Removes a collection from the database.
use('course');
db.assignment.drop();

//3.Inserts a single document into a collection.
use('course');
db.assignment.insertOne({
    title: "MongoDb Tutorial",
    body: "MongoDb Basic Query.",
    likes: 1,
    date: Date()
  })