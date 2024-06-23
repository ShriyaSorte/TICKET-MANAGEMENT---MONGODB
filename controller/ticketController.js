const mongoose = require('mongoose');
const Ticket = require('../model/ticketModel');
const ticketModel = require('../model/ticketModel');

async function addticket(req,res){
    try {
        const ticket = new Ticket(req.body);
        result = await ticket.save();
        res.status(201).send({message: "Ticket added successfully", result});
    } catch (error) {
        res.status(500).send(err);
    }
}


module.exports = {addticket};