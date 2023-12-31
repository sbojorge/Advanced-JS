let students = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "maths", "english", "art"],
    teacher: { science: "Iris", maths: "Harry", english: "Joan", art: "Simon" },
    results: { science: 93, maths: 95, english: 80, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 63, maths: 79, art: 95 },
  },
];

// my solution below works
const averagePoints = (arr, subject) => {
  let total = 0;
  let count = 0;
  for (let i of arr) {
    if (i.results[subject]) {
      total += i.results[subject];
      count++;
    }
  }
  return total / count;
};

let averageMark = averagePoints(students, "english");
console.log(averageMark);

// CI solution
const averagePoints1 = (arr, subject) => {
  let allPoints = 0;
  let sum = 0;
  for(let itm of arr) {
    if(subject in itm.results) {
      allPoints += itm.results[subject];
      sum+=1;
    }
  }
  return allPoints / sum;
};

let averageMarks = averagePoints1(students, 'english');
console.log(averageMarks);