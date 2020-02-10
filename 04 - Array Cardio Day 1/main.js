// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let inv1 = inventors.filter(
  person => person.year >= 1500 && person.year <= 1599
);
console.log(inv1);

// Wes Bos Solution(s)
const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let inv2 = inventors.map(person => `${person.first} ${person.last}`);
console.log(inv2);

// Wes Bos Solution(s)
const fullNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);

console.log(fullNames);

// Check back
//
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

function compare(a, b) {
  const yearA = a.year;
  const yearB = b.year;

  let comparison = 0;
  if (yearA > yearB) {
    comparison = 1;
  } else {
    comparison = -1;
  }

  return comparison;
}

console.table(inventors.sort(compare));

// Wes Bos Solution(s)
// const ordered = inventors.sort(function(a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

let ages = inventors.map(person => person.passed - person.year);
console.log(ages);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let inv4 = ages.reduce(reducer);
console.log(inv4);

// Wes Bos Solution(s)
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
function compare2(a, b) {
  const ageA = a.passed - a.year;
  const ageB = b.passed - b.year;

  let comparison = 0;
  if (ageA > ageB) {
    comparison = 1;
  } else if (ageA < ageB) {
    comparison = -1;
  }

  return comparison;
}

console.table(inventors.sort(compare2));

// Wes Bos Solution(s)

const oldest = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;

  return lastGuy > nextGuy ? 1 : -1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Wes Bos Solution(s)
// const category = document.querySelector(".mw-category");
// =======Need to convert links into an Array from Node List (DOM Elements)
// =======Can use spread operator [...] or Array.from()
// const links = [...category.querySelectorAll("a")];
// const de = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name

// Wes Bos Solution(s)
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

// Wes Bos Solution(s)

const transportation = data.reduce(function(obj, item) {
  // See if obj[item] is set to 0, if not set to 0. else add one to the total
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
