//Array innehållandes flera objekt
let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
console.log("Uppgift 1");
let fruits = ["apple", "mango", "orange", "kiwi", "pear"];
console.log(fruits);

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
console.log("Uppgift 2");
let mixedList = ["red", 777, true];
console.log(mixedList);

/* 3 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log("Uppgift 3");
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
console.log(animals.length);

/* 4 */
/* I arrayen ovan, hämta cat. */
console.log("Uppgift 4");
console.log(animals[0]);

/* 5 */
/* I arrayen ovan, hämta funky chihuahua. */
console.log("Uppgift 5");
console.log(animals[3]);

/* 6 */
/* I arrayen ovan, byt ut hamster mot tiger. */
console.log("Uppgift 6");
animals[1] = "tiger";
console.log(animals[1]);

/* 7 */
/* let a = [1,2,3]; */
/* let b = [4,5,6]; */
/* Sätt ihop ovanstående arrayer. */
console.log("Uppgift 7");
let a = [1, 2, 3];
let b = [4, 5, 6];
a.push(...b);
console.log(a);

/* 8 */
/* let a = [1,2,3,7,8,9]; */
/* let b = [4,5,6]; */
/* Merga in array b på index 3 i array a.. */
console.log("Uppgift 8");
a = [1, 2, 3, 7, 8, 9];
b = [4, 5, 6];
a.splice(3, 0, ...b);
console.log(a);

/* 9 */
/* let arr = ['a', 'b', 'c']; */
/* Klona ovanstående array. */
console.log("Uppgift 9");
let arr = ["a", "b", "c"];
arrClone = [...arr]; // works well with simple data types
console.log(arr, arrClone);

/* 10 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i slutet av arrayen ovan. */
console.log("Uppgift 10");
fruits = ["kiwi", "apple", "pear"];
fruits.push("lemon");
console.log(fruits);

/* 11 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i början av arrayen ovan. */
console.log("Uppgift 11");
fruits = ["kiwi", "apple", "pear"];
fruits.unshift("lemon");
console.log(fruits);

/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. */
console.log("Uppgift 12");
fruits = ["kiwi", "apple", "pear"];
fruits.pop();
console.log(fruits);

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. */
console.log("Uppgift 13");
fruits = ["kiwi", "apple", "pear"];
fruits.shift();
console.log(fruits);

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. */
console.log("Uppgift 14");
fruits = ["kiwi", "apple", "pear"];
fruits.splice(1, 0, "lemon");
console.log(fruits);

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in, tre frukter i arrayen ovan på index 2. */
console.log("Uppgift 15");
fruits = ["kiwi", "apple", "pear"];
fruits.splice(2, 0, "lemon", "melon", "mango");
console.log(fruits);

/* 16 */
/* let names = ['David', 'Christoffer', 'Johan', 'Maja'] */
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log("Uppgift 16");
let names = ["David", "Christoffer", "Johan", "Maja"];
names.splice(1, 2);
console.log(names);

/* 17 */
/* let nums = [1,2,3,4,5,6,7,8,9]; */
/* Spegelvänd på arrayen ovan. */
console.log("Uppgift 17");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.reverse();
console.log(nums);

/* 18 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven n. */
console.log("Uppgift 18");
let str = "Supercalifragilisticexpialidocious";
console.log(str.includes("n"));

/* 19 */
/* Kika om strängen ovan innehåller bokstaven x. */
console.log("Uppgift 19");
console.log(str.includes("x"));

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log("Uppgift 20");
console.log(str.indexOf("p"));

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log("Uppgift 21");
console.log(str.substring(0, 5));

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log("Uppgift 22");
console.log(str.substring(str.length - 7));

/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log("Uppgift 23");
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
let over5 = numArray.filter((number) => number > 5);
console.log(over5);

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log("Uppgift 24");
let under5 = numArray.filter((number) => number < 5);
console.log(under5);

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
console.log("Uppgift 25");
let over18 = persons.filter((person) => person.age >= 18);
for (let i = 0; i < over18.length; i++) {
  console.log(over18[i].name);
}

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
console.log("Uppgift 26");
let under18 = persons.filter((person) => person.age < 18);
for (let i = 0; i < under18.length; i++) {
  console.log(under18[i].name);
}

/* 27 */
/* let arr = ['beta', 'alfa', 'gamma']; */
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log("Uppgift 27");
arr = ["beta", "alfa", "gamma"];
arr.sort();
console.log(arr);

/* 28 */
/* let nums = [1,5,7,9,3,4,2,6,8]; */
/* Sortera ovanstående array numeriskt. */
console.log("Uppgift 28");
nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
nums.sort();
console.log(nums);

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log("Uppgift 29");
persons.sort((a, b) => a.age - b.age);
console.log(persons);

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log("Uppgift 30");
persons.sort((a, b) => b.age - a.age);
console.log(persons);

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log("Uppgift 31");
// persons.sort((a, b) => a.name.localeCompare(b.name)); // nice
persons.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

console.log(persons);

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
console.log("Uppgift 32");
let uppercaseNames = persons.map((person) => person.name.toUpperCase());
console.log(uppercaseNames);

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
console.log("Uppgift 33");
let reverseNames = persons.map((person) => person.name.split("").reverse().join(""));
console.log(reverseNames);

/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log("Uppgift 34");
fruits = ["apelsin", "päron", "äpple", "kiwi"];
fruits.forEach((fruit) => console.log(fruit));

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log("Uppgift 35");
fruits = ["apelsin", "päron", "äpple", "kiwi"];
for (let fruit of fruits) {
  console.log(fruit);
}

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log("Uppgift 36");
fruits = ["apelsin", "päron", "äpple", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log("Uppgift 37");
fruits = ["apelsin", "päron", "äpple", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} - ${fruits[i]}`);
}
