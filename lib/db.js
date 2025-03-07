const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://empirepayvtu:empirevtu1@empirepayvtu.mygpq.mongodb.net/?retryWrites=true&w=majority&appName=empirepayvtu";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Connection error:", err));

module.exports = mongoose;
