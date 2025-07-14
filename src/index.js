const employee1 = {
  fullName: ["Justin", "Mahwibila"],
  age: 25,
  department: "ICT",
  skills: ["HTML", "Java", "Coding"],
  isActive: true,
};

const employee2 = {
  fullName: ["Khumo", "Mokoena"],
  age: 19,
  department: "Education",
  skills: ["listening", "Math", "Teaching"],
  isActive: false,
};

const logEmployee = (employee) => {
  console.log('---Employee Details---');
  Object.entries(employee).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      console.log(`${key} : ${value.join(" ")}`);
    } else if (typeof value === "boolean") {
      console.log(`${key} : ${value ? "Yes" : "No"}`);
    } else {
      console.log(`${key} : ${value}`);
    }
  });
  console.log('----------------------');
};

logEmployee(employee1);
logEmployee(employee2);
