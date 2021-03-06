const mongoose = require("mongoose");
// const config = require("config");

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://kalai41:kalai41@cluster0.jeyul.mongodb.net/ammanagencies?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			}
		);
		console.log("DB connected");
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
module.exports = connectDB;
