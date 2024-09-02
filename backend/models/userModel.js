const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        isAdmin: {
            type: Boolean,
            default: false,
        },

        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        profile: {
            bio: String,
            image: String,
            location: String,
            hobby: [String],
        },
    },
    {
        virtuals: {
            fullName: {
                get() {
                    return this.first_name + " " + this.last_name;
                },
            },
        },
    }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
