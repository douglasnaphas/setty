#!/usr/bin/env npx ts-node
const program = require("commander");
const greeting = require(".").greeting;
program.option("--name <name>", "who to greet", "World");

program.parse();

const options = program.opts();
const name: string = options.name;

console.log(greeting(name));

export {};
