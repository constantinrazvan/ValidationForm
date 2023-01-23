import Account from "../model/modelAccount.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const saltRounds = 10;
        const exists = await Account.find({ email: req.body.emailRegister });
        if (exists[0]) res.json({ error: "Email address is already in use!" });
        else
            bcrypt.hash(req.body.passwordRegister, saltRounds, async (err, hash) => {
                if (err) console.log(err);
                else {
                    const account = new Account({
                        email: req.body.emailRegister,
                        password: hash,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        location: req.body.location,
                        position: req.body.position
                    });
                    const saved = await account.save();
                    res.status(200).json(saved);
                }
            });
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

export const login = async (req, res) => {
    try {
        const exists = await Account.find({ email: req.body.email });
        if (!exists[0]) res.json({ error: "Email address or password is invalid"});
        else {
            const user = await Account.findOne({ email: req.body.email });
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) console.log(err);
                else if (result) res.status(200).json(user);
                else res.json({ error: "Invalid email or password." });
            });
        }
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};