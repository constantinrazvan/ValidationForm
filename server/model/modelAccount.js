import mongoose from "mongoose";

const accountSchema = mongoose.Schema ({
    email: String,
    password: String,
    repeatPassword: String,
    firstName: String,
    secondName: String,
    position: String,
    location: String
});

const Account = mongoose.model("Account", accountSchema);

export default Account;