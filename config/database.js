const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(' mongodb+srv://abdullahidev:Github2035@cluster0.rasf3io.mongodb.net/checkIn?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
