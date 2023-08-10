// B1:

// class Circle {
//   private radius: number;
//   private color: string;

//   constructor(radius: number, color: string) {
//     this.radius = radius;
//     this.color = color;
//   }

//   // Getter and setter for radius
//   getRadius(): number {
//     return this.radius;
//   }
//   setRadius(radius: number): void {
//     this.radius = radius;
//   }

//   // Getter and setter for color
//   getColor(): string {
//     return this.color;
//   }
//   setColor(color: string): void {
//     this.color = color;
//   }

//   // Method to calculate the circumference
//   chuVi(): number {
//     return 2 * Math.PI * this.radius;
//   }

//   // Method to calculate the area
//   dienTich(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   // Method to input data from user
//   inputData(radius: number, color: string): void {
//     this.radius = radius;
//     this.color = color;
//   }

//   // Method to display data
//   displayData(): void {
//     console.log(`Radius: ${this.radius}`);
//     console.log(`Color: ${this.color}`);
//   }
// }
// const circle = new Circle(5, "red");
// console.log(`Circumference: ${circle.chuVi()}`);
// console.log(`Area: ${circle.dienTich()}`);

// circle.setRadius(7);
// circle.setColor("blue");

// console.log(`New radius: ${circle.getRadius()}`);
// console.log(`New color: ${circle.getColor()}`);

// circle.displayData();
// console.log(circle.displayData(), 'hihi');

// B3:
// class Fan {
//   private static SLOW = 1;
//   private static MEDIUM = 2;
//    static FAST = 3;

//   private speed: number;
//   private on: boolean;
//   private radius: number;
//   private color: string;

//   constructor() {
//     this.speed = Fan.SLOW;
//     this.on = false;
//     this.radius = 5;
//     this.color = "blue";
//   }

//   // Getter and setter for speed
//   getSpeed(): number {
//     return this.speed;
//   }
//   setSpeed(speed: number): void {
//     this.speed = speed;
//   }

//   // Getter and setter for on
//   isOn(): boolean {
//     return this.on;
//   }
//   setOn(on: boolean): void {
//     this.on = on;
//   }

//   // Getter and setter for radius
//   getRadius(): number {
//     return this.radius;
//   }
//   setRadius(radius: number): void {
//     this.radius = radius;
//   }

//   // Getter and setter for color
//   getColor(): string {
//     return this.color;
//   }
//   setColor(color: string): void {
//     this.color = color;
//   }

//   // Method to return the string representation of the fan
//   toString(): string {
//     if (this.on) {
//       return `Fan is on\nSpeed: ${this.speed}\nColor: ${this.color}\nRadius: ${this.radius}`;
//     } else {
//       return `Fan is off\nColor: ${this.color}\nRadius: ${this.radius}`;
//     }
//   }
// }
// const fan = new Fan();

// console.log(fan.toString()); // Fan is off, Color: blue, Radius: 5

// fan.setOn(true);
// fan.setSpeed(Fan.FAST);
// fan.setColor("red");
// fan.setRadius(10);

// console.log(fan.toString()); // Fan is on, Speed: 3, Color: red, Radius: 10

// =====================
// class Student {
//   private code: string;
//   private name: string;
//   private age: number;
//   private gender: string;
//   private address: string;
//   private phoneNumber: string;

//   constructor(code: string, name: string, age: number, gender: string, address: string, phoneNumber: string) {
//     this.code = code;
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.address = address;
//     this.phoneNumber = phoneNumber;
//   }

//   // Method to input data from user
//   inputData(): void {
//     this.code = prompt("Enter student code");
//     this.name = prompt("Enter student name");
//     this.age = parseInt(prompt("Enter student age"));
//     this.gender = prompt("Enter student gender");
//     this.address = prompt("Enter student address");
//     this.phoneNumber = prompt("Enter student phone number");
//   }

//   // Method to display data
//   displayData(): void {
//     console.log(`Code: ${this.code}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Gender: ${this.gender}`);
//     console.log(`Address: ${this.address}`);
//     console.log(`Phone Number: ${this.phoneNumber}`);
//   }
// }

// class Main {
//   private students: Student[];
//   private count: number;

//   constructor() {
//     this.students = new Array(100);
//     this.count = 0;
//   }

//   run(): void {
//     let choice: string;
//     do {
//       console.log("========== MENU ==========");
//       console.log("1. Display all students");
//       console.log("2. Add new student");
//       console.log("3. Update student information");
//       console.log("4. Delete student");
//       console.log("5. Exit");
//     choice = prompt("Enter your choice");

//       switch (choice) {
//         case "1":
//           this.displayAllStudents();
//           break;
//         case "2":
//           this.addNewStudent();
//           break;
//         case "3":
//           this.updateStudent();
//           break;
//         case "4":
//           this.deleteStudent();
//           break;
//         case "5":
//           console.log("Exiting...");
//           break;
//         default:
//           console.log("Invalid choice");
//           break;
//       }
//     } while (choice !== "5");
//   }

//   displayAllStudents(): void {
//     console.log("========== STUDENT LIST ==========");
//     for (let i = 0; i < this.count; i++) {
//       console.log(`Student ${i + 1}:`);
//       this.students[i].displayData();
//       console.log("==============================");
//     }
//   }

//   addNewStudent(): void {
//     if (this.count < this.students.length) {
//       const student = new Student("", "", 0, "", "", "");
//       student.inputData();
//       this.students[this.count] = student;
//       this.count++;
//       console.log("New student added successfully!");
//     } else {
//       console.log("Cannot add more students. Student list is full.");
//     }
//   }

//   updateStudent(): void {
//     const code = prompt("Enter student code to update");
//     let found = false;
//     for (let i = 0; i < this.count; i++) {
//       if (this.students[i].code === code) {
//         this.students[i].inputData();
//         console.log("Student information updated successfully!");
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       console.log("Student not found.");
//     }
//   }
// }

// class Circle {
//   private a: number;
//   private b: number;
//   private c: number;

//   constructor(a: number, b: number, c: number) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   getDiscriminant(a: number, b: number, c: number): number {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     const delta = b ** 2 - 4 * a * c;
//     return delta;
//   }
//   getRoot1(a: number, b: number, c: number): number {
//     const delta = this.getDiscriminant(a, b, c);
//     if (delta < 0) {
//       return 0;
//     }
//     const root1 = (-b + Math.sqrt(delta)) / (2 * a);
//     return root1;
//   }

//   getRoot2(a: number, b: number, c: number): number {
//     const delta = this.getDiscriminant(a, b, c);
//     if (delta < 0) {
//       return 0;
//     }
//     const root2 = (-b - Math.sqrt(delta)) / (2 * a);
//     return root2;
//   }
// }

// const circle = new Circle(3, 4, 5);
// console.log(circle.getRoot1(3, 4, 5));
// const stusdents = new Array(100);
// console.log(stusdents.length, "hahaaa");

// Bai 4:

class Student {
   code: string | null;
   name: string | null;
   age: number | null;
   gender: string | null;
   address: string | null;
   phoneNumber: string | null;

  constructor(
    code: string,
    name: string,
    age: number,
    gender: string,
    address: string,
    phoneNumber: string
  ) {
    this.code = code;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  inputData(): void {
    this.code = prompt("Enter student code");
    this.name = prompt("Enter student name");
    this.age = Number(prompt("Enter student age"));
    this.gender = prompt("Enter student gender");
    this.address = prompt("Enter student address");
    this.phoneNumber = prompt("Enter student phone number");
  }


  displayData(): void {
    console.log(`Code: ${this.code}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Address: ${this.address}`);
    console.log(`Phone Number: ${this.phoneNumber}`);
  }
}
class Main {
   students: Student[];
   count: number;

  constructor() {
    this.students = new Array(5);
    this.count = 0;
  }

  main(): void {

    // const stusdens = new Student()
    console.log(this.students, 'students');

    let choice: string | null;
    do {
      choice = prompt("Enter your choice");
      switch (choice) {
        case "R":
          this.displayAllStudents();
          break;
        case "C":
          this.createStudent();
          break;
        case "U":
          this.updateStudent();
          break;
        case "D":
          break;
        case "E":
          console.log("Exiting...");
          break;
        default:
          console.log("Invalid choice");
          break;
      }
     
    } while (choice !== "E");
  }

  displayAllStudents(): void {
    console.log("========== STUDENT LIST ==========");
    for (let i = 0; i < this.count; i++) {
      console.log(`Student ${i + 1}:`);
      this.students[i].displayData();
      console.log("==============================");
    }
  }

  createStudent(): void {
    if (this.count < this.students.length) {
      const student = new Student("", "", 0, "", "", "");
      student.inputData();
      this.students[this.count] = student;
      this.count++;
      console.log("New student added successfully!");
    } else {
      console.log("Cannot add more students. Student list is full.");
    }
  }

  updateStudent(): void {
    const code = prompt("Enter student code to update");
    let found = false;
    for (let i = 0; i < this.count; i++) {
      if (this.students[i].code === code) {
        this.students[i].inputData();
        console.log("Student information updated successfully!");
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("Student not found.");
    }
  }
}

const main = new Main();
console.log(main.main());

// class Animal {
//  private type: string;

//   constructor(type: string) {
//     this.type = type;
//   }

//   get getType(): string {
//     return this.type;
      
//   }

//   set getType(type: string) {
//       this.type = type;
//     }

//   sound() {
//     console.log("Hellooo");
//   }
// }

// class Dog extends Animal {
//     name: string;
//     gender: string;
//     constructor(name: string, gender: string) {
//         const a = super("động vật thông minh");
//         console.log(a);
        
//         this.name = name;
//         this.gender = gender;
//         this.sound();
//     }
//   override sound() {
//     return ("Hi");
// }
// }

// const child = new Dog('Dog', 'male');

// // console.log(child);
// function mains(): void {
// var a = 10;
// }

// console.log(a);


// const a: type = value 
// const number: number = 10;

