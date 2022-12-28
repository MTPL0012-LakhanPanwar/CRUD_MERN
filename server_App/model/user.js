import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

userSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


const PostUser = mongoose.model('user', userSchema);

export default PostUser;