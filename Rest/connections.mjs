import mongoose from "mongoose";

function makeNewConnection(uri) {
    const db = mongoose.createConnection(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    console.log('New Connection')

    return db;
}

const ideaConnection = makeNewConnection("mongodb://localhost:27017/idea_db")
const userConnection = makeNewConnection("mongodb://localhost:27017/user_db")

export { ideaConnection, userConnection }