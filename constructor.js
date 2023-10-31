//constructor function
function Student(firstName, lastName, age, studentClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.studentClass = studentClass;
  }
  
  const student1 = new Student("yeasir", "arafat", 24, "Mathematics");
  const student2 = new Student("kalam", "islam", 25, "Science");
  
  console.log(student1); 
  console.log(student2); 
  