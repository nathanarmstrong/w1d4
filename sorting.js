var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (a, b) {
  return a.age - b.age;
})
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  // console.log(nameA, nameB)
  if (nameA < nameB) {
    return -1;
  }else if(nameA > nameB) {
    return 1
  }else{
    return 0
  }
  return a - b

})
console.log(students)