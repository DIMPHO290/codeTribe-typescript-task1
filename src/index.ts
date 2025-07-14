

type Employee = {
  fullName: [firstName: string, lastName: string];
  age: number;
  department: string;
  skills: string[];
  isActive: boolean;
};

const employee1: Employee = {
  fullName: ["Justin", "Mahwibila"],
  age: 25,
  department: "ICT",
  skills: ["HTML", "Java", "Coding"],
  isActive: true
};

const employee2: Employee = {
  fullName: ["Khumo", "Mokoena"],
  age: 19,
  department: "Education",
  skills: ["listening", "Math", "Teaching"],
  isActive: false
};

const logEmployee = (employee: Employee) => {
  console.log('---Employee Details---');
  
  // Handle fullName separately
  const [firstName, lastName] = employee.fullName;
  console.log(`fullName : ${firstName} ${lastName}`);
  
  // Handle other properties with proper typing
  const { fullName, ...rest } = employee;
  
  (Object.keys(rest) as Array<keyof typeof rest>).forEach((key) => {
    const value = rest[key];
    
    if (key === 'skills') {
      console.log(`${key} : ${(value as string[]).join(" ")}`);
    } else if (key === 'isActive') {
      console.log(`${key} : ${value ? "Yes" : "No"}`);
    } else {
      console.log(`${key} : ${value}`);
    }
  });
};

logEmployee(employee1);
logEmployee(employee2);