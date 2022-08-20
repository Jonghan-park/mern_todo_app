const mongoose = require("mongoose");
module.exports = () => {
  const connectionParameter = {
    // useNewUrlParser allows users to fall back to the old parser if they find a bug in the new parser.
    useNewUrlParser: true,
    //useUnifiedTopology(default: false)
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGO_URI, connectionParameter);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
