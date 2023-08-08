#!/usr/bin/env npx ts-node
// export { greeting } from "./lib/greeting";
const greeting = require( "./lib/greeting");
const greeting2 = require( "./lib/greeting2");
module.exports = { greeting, greeting2 };

