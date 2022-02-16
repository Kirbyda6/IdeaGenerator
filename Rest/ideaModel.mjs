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
    name: { type: String, required: true },
    ideaCollection: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Idea = ideaConnection.model("Idea", ideaSchema);
const User = userConnection.model("User", userSchema);

const createIdea = async (idea, votes, creator, details) => {
    const newIdea = new Idea({ idea: idea, votes: votes, creator: creator, details: details });
    return newIdea.save();
}

const createUser = async (name, ideaCollection) => {
    const user = new User({ name: name, ideaCollection: ideaCollection });
    return user.save();
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

const findUser = async (filter, projection, limit) => {
    const query = User.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const updateIdea = async (_id, update) => {
    const result = await Idea.findOneAndUpdate(_id , update, {useFindAndModify: false});
    return result;
}

const updateUser = async (_id, update) => {
    const result = await User.findOneAndUpdate(_id , update, {useFindAndModify: false});
    return result;
}

const deleteIdeas = async (conditions) => {
    const result = await Idea.deleteMany(conditions);
    return result.deletedCount;
}

const deleteUsers = async (conditions) => {
    const result = await User.deleteMany(conditions);
    return result.deletedCount;
}

export { createIdea, findIdea, updateIdea, deleteIdeas, createUser, findUser, updateUser, deleteUsers, findRandIdea };