#!/usr/bin/env npx ts-node
const program = require("commander");
import { greeting } from "./lib/greeting";
program.option("--name");

program.parse();

const options = program.opts();
const name: string = options.name || "World";

console.log(greeting(name));

export {};
