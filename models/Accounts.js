const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountsSchema = new Schema({
    email: { type: String },
    password: { type: String },
    firstname: {type: String},
    lastname: {type: String}
})

const Accounts = mongoose.model("Accounts", AccountsSchema);

module.exports = Accounts;