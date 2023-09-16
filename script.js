const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "emmy", age: 23, profession: "UI designer" },
  { name: "james", age: 29, profession: "admin" },
  { name: "akash", age: 25, profession: "developer" },
  { name: "ayush", age: 22, profession: "developer" },
];

// 1. Print Developers
function printDeveloper() {
  const Dev = data.filter((obj) => obj.profession === "developer");
  console.log("Developers: ", Dev);
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name: ');
  const age = parseInt(prompt('Enter age: '));
  const profession = prompt('Enter profession: ');
  const newdata = {name , age, profession};
  data.push(newdata);
  console.log("Data Added: ", data);
}

// 3. Remove Admins
function removeAdmin() {
  const remove = data.filter((obj) => obj.profession !== 'admin');

  console.log("Admins removed", remove);
}

// 4. Concatenate Array
function concatenateArray() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = array1.concat(array2);

  console.log("Array 1", array1);
  console.log("Array 2", array2);
  console.log("Concatenated Array", concatenatedArray);
}

// 5. Average Age
function averageAge() {
  let sumOfAges = 0;

  for (let i = 0; i < data.length; i++) {
    sumOfAges += data[i].age;
  }

  const averageAge = sumOfAges / data.length;

  console.log(`Average Age: ${averageAge}`);
}

// 6. Age Check
function checkAgeAbove25() {
  let isOlderThan25 = false;

  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 25) {
      isOlderThan25 = true;
      break; // No need to continue checking once we find one person older than 25
  }
}

if (isOlderThan25) {
  console.log('Yes there is person older than 25.');
} else {
  console.log('No one is older than 25.');
}
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);

  console.log("Sorted: ", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const target_name = 'john';
  
  data.forEach((obj) => {
    if(obj.name === target_name){
      obj.profession = 'manager';
    }
  });
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {

  let developerCount = 0;
  let adminCount = 0;

data.forEach((obj) => {
  if (obj.profession === 'developer') {
    developerCount++;
  } else if (obj.profession === 'admin') {
    adminCount++;
  }
});

console.log(`Total Developers: ${developerCount}`);
console.log(`Total Admins: ${adminCount}`);
}
