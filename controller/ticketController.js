const mongoose = require('mongoose');
// const Ticket = require('../model/ticketModel');
const Ticket = require('../model/ticketModel');

async function addticket(req,res){
    try {
        const ticket = new Ticket(req.body);
        result = await ticket.save();
        res.status(201).send({message: "Ticket added successfully", result});
    } catch (err) {
        res.status(500).send(err);
    }
}

async function getticket(req,res) {
    try {
        const result = await Ticket.find();
        return res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function updateticket(req,res){
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(200).send(ticket);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function deleteticket(req,res){
    // console.log("ticket",req.params);   
    try {
        const result = await Ticket.findByIdAndDelete(req.params.id);
        return res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {addticket,getticket,updateticket,deleteticket};