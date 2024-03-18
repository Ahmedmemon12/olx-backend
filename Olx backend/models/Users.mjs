import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import jwtSecret from "../config/jwt.mjs";


const { Schema } = mongoose

const UsersSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength : 6
    },
    ProfileImg: {
        type: String,
        default: 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
    },
    contactNo : {
        type: Number,
    },
    tokens: {
        default: [],
        type: []
    }
})

UsersSchema.pre('save', function (next) {
    const user = this

    if (user.isModified('password')) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);

        user.password = hash
    }
    next()
})

UsersSchema.methods.comparePassword = function (password) {
    const user = this

    return bcrypt.compareSync(password, user.password)
}


const Users = mongoose.model('users', UsersSchema)

export default Users