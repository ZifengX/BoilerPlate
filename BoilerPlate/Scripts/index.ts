class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    moves(meters: number) {
        alert(this.name + "moves" + meters + "m");
    }
}

class Teacher extends Person {
    course: string;
    constructor(name: string, age: number, course: string) {
        super(name, age);
        this.course = course;
    }

    teachers() {
        alert(this.name + "teaches" + this.course);
    }
}

var tom = new Teacher("Tom", 30, "COMPSCI");
tom.moves(5);
tom.teachers();