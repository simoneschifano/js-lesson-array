let listChars = ["a", "b", "e", "c", "d"];
// console.log(listChars);

// aggiungiamo un elemento in coda
// listChars.push("e");
// console.log(listChars);

// estraiamo un elemento dalla coda
// listChars.pop();
// console.log(listChars);

// estraiamo un elemento dalla testa
// listChars.shift();
// console.log(listChars);

// splice aggiunge e rimuove elementi ovunque
// listChars.splice(3, 1, "k");
// console.log(listChars);

//slice crea un nuovo elemento che include altri valori di altri array, o elementi aggiuntiv
// let newArray = listChars.slice(0, 2);
// console.log(newArray);

// concat crea un nuovo array che include valori di altri array;
// let array1 = [0, 1, 2, 3];
// let array2 = ["e", "f", "....", "---"];
// let newArray = array1.concat(array2);
// console.log(newArray);

// console.log(array1[0][1]);

// length ritorna la lunghezza dell'array
// let lengthOfArray = listChars.length;
// console.log(listChars.length);

// indexOf cerca un elemento e ritorna la posizione in cui è stato trovato
// console.log("d è presente alla posizione: ", +listChars.indexOf("d"));
// let index = listChars.indexOf("d");
// if (index > -1) {
//   console.log("l'elemento è stato trovato alla index", +index);
//   console.log(listChars[index]);
// }

// lastIndexOf cerca un elemento e ritorna la posizione in cui è stato trovato guardando l'array a partire dall'ultimo
// console.log("d è presente alla posizione: ", +listChars.lastIndexOf("a"));
// let index = listChars.lastIndexOf("a");
// console.log(index);
// if (index > -1) {
//   console.log("l'elemento è stato trovato alla index", +index);
//   console.log(listChars[index]);
// }

// console.log(listChars.includes("m"));
// let isIncluded = listChars.includes("a");
// console.log(isIncluded);
// if (isIncluded) {
//   console.log("L'elemento è incluso nell'array");
// }

// reverse inverte l'ordine dell'array
// let reverseListChars = listChars.reverse();
// console.log(reverseListChars);

// join() crea una string con gli elementi dell'array separati da un separatore
// console.log(listChars.join());

// add class to body
// console.log(listChars.indexOf("red"));
// if (listChars.includes("red")) {
//   document.body.classList.add("bodyGreen");
//   document.body.classList.add("bodyRed");
//   document.body.style.backgroundColor = "yellow";
//   console.log(document.querySelector(".mainTitle"));
//   document.querySelector(".mainTitle").style.color = "red";
// }

// sort ordina gli elementi di un array
// console.log(listChars.sort());

// array multidimensionali
// let array2 = [
//   ["a", "b", "c"],
//   [1, true, "k", ["pippo", "topolino"]],
// ];

// console.log(array2[1][3][0]);
// let arr = [];
// console.log("posizione1 " + listChars[1]);
// console.log(listChars.length);
// for (let i = 0; i < listChars.length; i++) {
//   console.log("i " + i);
//   //   arr.push(i);
//   console.log(listChars[i]);
// }
// console.log(arr);

// for esempio 1
// let animals = [
//   ["c", "d", "m"],
//   ["a", "b", "c"],
// ];

let animals = ["cat", "dog", "monkey"];

// console.log("eccomi");
// console.log(animals[1][1]);
console.log("length " + animals.length);
console.log("\n\n\n");
// console.log(animals[0].length);
// console.log(animals[1]);
for (let i = 0; i < animals.length; i++) {
  console.log("i " + i);
  console.log(animals[i]);
}

console.log("\n\n\n");
// for esempio 2
// for (let animal of animals) {
//   console.log(animal);
//   if (animal === true) {
//     document.body.classList.add("bodyRed");
//   }
// }

// let animal = "animal cat";
// console.log(animal);

// for esempio 3
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);

for (let key in animals) {
  console.log("key " + key);
  console.log("value " + animals[key]);
}

// let arrayOfNumbers = [100, 2, 3333, 2392929];
