const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

const userSchema = mongoose.Schema(
    {
        username: String,
        password:String,
        profileImage: {
            type: String,
            // default:"/image/link"
        },
        socketId:String
    }
)

userSchema.plugin(plm)

module.exports = mongoose.model("user", userSchema)