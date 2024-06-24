const mongoose = require('mongoose');
// const User = require('../model/userModel');
const User = require('../model/userModel');

async function adduser(req,res) {
    try {
        const user = new User(req.body);
        result = await user.save();
        res.status(201).send({message: "User added successfully", result});
    } catch (err) {
        res.status(500).send(err);
    }
}

async function getuser(req,res) {
    try {
        const result = await User.find();
        return res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function updateuser(req,res){
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function deleteuser(req,res){
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {adduser, getuser, updateuser, deleteuser};