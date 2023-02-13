// Method 1 : Object Literal

const obj1 = {
  name: "shivani",
  age: "24",
  course: {
    name: "fsjs2.0",
  },
};

obj1.lasName = "Bhalodiya";
obj1["year"] = 2022;

//Method 2 : Constructor

const obj2 = new Object();
(obj2.name = "shivani"), (obj2.age = 10);

//Method 3 :

// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes

// Method 4

const obj4 = Object.create({});
Object.defineProperty(obj4, "book", {
  //icon: "heyy",
  get: () => "heyy",
});

console.log(obj4.book);
console.log(Object.getPrototypeOf(obj4));

const obj5 = {
  comic: "marvel",
  pen: "",
  printComic: function () {
    this.pen += "hi";
    console.log(this);
  },
  printaComic: () => {
    this.pen += "hi"; // arrow function dont have this
    console.log(this);
  },
};

console.log(obj5.printComic());
console.log(obj5.printaComic());
