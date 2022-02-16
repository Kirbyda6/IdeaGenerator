import mongoose from "mongoose";

function makeNewConnection(uri) {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    // The open event is called when the database connection successfully opens
    db.once("open", () => {
        console.log("Successfully connected to MongoDB using Mongoose!");
    });

    return db;
}

const ideaConnection = makeNewConnection("mongodb://localhost:27017/idea_db")
const userConnection = makeNewConnection("mongodb://localhost:27017/user_db")

export { ideaConnection, userConnection }