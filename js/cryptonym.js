"use strict";

let messenger = require("./messager");
let td = require("./td");
let checkbox = require("./checkbox");
let messages = require("./messages");

let Cryptonym = {
    messager,
    td,
    checkbox,
    messages
};

module.exports = Cryptonym;