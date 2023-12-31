const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
    // useUnifiedTopology: true,
  }).then((data) => {
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  }).catch((err) => {
    console.error(err);
  });
};

module.exports = connectDatabase;
