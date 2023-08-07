// import {greeting} from "./lib/greeting";
// import {greeting2} from "./lib/greeting2";
const imports = require(".");

const greeting = imports.greeting;
const greeting2 = imports.greeting2;
describe("greetings", () => {
  test("...", () => {
    console.log(imports);
  });
  test("greeting A", () => {
    expect(greeting("A")).toEqual("Hello, A");
  });
  test("greeting B", () => {
    expect(greeting("B")).toEqual("Hello, B");
  });
  test("greeting2 A", () => {
    expect(greeting2("A")).toEqual("Hi, A");
  });
  test("greeting2 B", () => {
    expect(greeting2("B")).toEqual("Hi, B");
  });
});
export {};
