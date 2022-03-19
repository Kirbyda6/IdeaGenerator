import mongoose from 'mongoose';
import { ideaConnection, userConnection } from './connections.mjs'

/**
 * Define the schema
 */
const ideaSchema = mongoose.Schema({
    idea: { type: String, required: true },
    votes: { type: Number, required: true },
    creator: { type: String, required: true },
    details: { type: String, required: true }
});

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    ideaCollection: { type: [{idea: String, creator: String}], required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Idea = ideaConnection.model("Idea", ideaSchema);

const createIdea = async (idea, votes, creator, details) => {
    const newIdea = new Idea({ idea: idea, votes: votes, creator: creator, details: details });
    return newIdea.save();
}

const findIdea = async (filter, projection, limit) => {
    const query = Idea.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const findRandIdea = async () => {
    const query = Idea.aggregate([{ $sample: { size: 1 } }]);
    return query.exec();
}

const updateIdea = async (idea, update) => {
    const result = await Idea.findOneAndUpdate(idea , update);
    return result;
}

const deleteIdeas = async (conditions) => {
    const result = await Idea.deleteMany(conditions);
    return result.deletedCount;
}

const User = userConnection.model("User", userSchema);

const createUser = async (username, password) => {
    const user = new User({ username: username, password: password, ideaCollection: [] });
    return user.save();
}

const findUser = async (filter) => {
    const query = User.findOne(filter).select("-password")
    return query.exec();
}

const updateUser = async (user, update) => {
    const result = await User.findOneAndUpdate(user , {$push: {ideaCollection: update}});
    return result;
}

const deleteUsers = async (conditions) => {
    const result = await User.deleteMany(conditions);
    return result.deletedCount;
}

export { createIdea, findIdea, updateIdea, deleteIdeas, createUser, findUser, updateUser, deleteUsers, findRandIdea };