import "./backend.js";

class Dog {
  #name;
  #color;
  #type;

  constructor(name) {
    this.#name = name;
  }

  look() {
    if (this.#name === "Golden") {
      return "funny";
    }
    if (this.#name === "Husky") {
      return "dumb";
    } else {
      return "normal";
    }
  }
}

let dog = new Dog("Golden");
console.log(`This dog look ${dog.look()}`);
