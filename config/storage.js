const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./sessions");

module.exports = localStorage