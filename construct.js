//constructor function
function Student(firstName, lastName, age, studentClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.studentClass = studentClass;
  }
  
  const student1 = new Student("John", "Doe", 20, "Mathematics");
  const student2 = new Student("Jane", "Smith", 19, "Science");
  
  console.log(student1); 
  console.log(student2); 
  