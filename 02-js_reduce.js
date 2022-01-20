// Class code examples

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const callback = (acc, ele) => {
  acc += ele;
  return acc; //MUST ALWAYS RETURN ACC
};

const sum = numbers.reduce(
  callback,
  0 // Starting value of the accumulator is the second parameter
);

const students = [
  { firstName: "John", lastName: "Carr", age: 34 },
  { firstName: "Leonardo", lastName: "Di Vittorio", age: 21 },
  { firstName: "Jessy", lastName: "Mc Scrudge", age: 99 },
  { firstName: "Lisa", lastName: "Parker", age: 22 },
  { firstName: "Marco", lastName: "Santo", age: 48 },
];

// I would like to create an obj with reduce that has properties that summarize the content of students array
const countOlderThan30 = students.reduce((count, student) => {
  if (student.age > 30) return (count += 1);
  else return count;
}, 0);

console.log(countOlderThan30);

const classRoster = students.reduce((roster, student) => {
  roster.push(`${student.firstName} ${student.lastName}`);
  return roster;
}, []);

console.log("roster: ", classRoster);
