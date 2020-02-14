const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string!", "Asa");

// Styled
// console.log(
//   "%c I am some great text",
//   "font-size: 50px; background:red; text-shadow: 10px 10px blue;"
// );

// warning!
console.warn("Oh No!");

// Error :|
console.error("Oops!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");

// Will log if it is false only.
console.assert(p.classList.contains("ouch"), "that is Wrong!");
console.assert(1 === 1, "That is wrong");
console.assert(1 === 2, "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
// View all props and methods on that element
console.dir(p);

console.clear();
// Grouping together
// Groups the console.logs between start and finished Group. console.group or console.groupCollapsed
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  //   console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`this is ${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
// Counts how many times something has been logged
console.count("Rob");
console.count("Rob");
console.count("Steve");
console.count("Rob");
console.count("Rob");
console.count("Rob");
console.count("Steve");
console.count("Steve");

// timing
// console.time('name) & console.timeEnd('name') must be the same 'name'
console.time("fetching data");
fetch("https://api.github.com/users/rkrause4")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//   Console.table
console.table(dogs);
