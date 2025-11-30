const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://BharatMajji9949:Chandra4398@cluster0.fkgmcsn.mongodb.net/?appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
