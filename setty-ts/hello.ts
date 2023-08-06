#!/usr/bin/env npx ts-node
import { program } from "commander";
program.option("--name");

program.parse();

const options = program.opts();
const name: string = options.name || "World";

console.log(`Hello, ${name}`);