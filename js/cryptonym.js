"use strict";

let messager = require("./messager");
let td = require("./td");
let backgroundColor = require("./backgroundcolor");
let fontSize = require("./fontsize");
let clearMessage = require("./clearbutton");
let defaultMsgs = require("./defaultMsgs");
let resetMsgs = require("./reset");

let Cryptonym = {
    messager,
    td,
    backgroundColor,
    fontSize,
    clearMessage,
    defaultMsgs,
    resetMsgs
};

module.exports = Cryptonym; 