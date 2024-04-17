type People1 = {
    firstName: string,
    lastName: string,
    age: number
}

interface People {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    fullName(): string;
}

interface Family {
    isWife: boolean
}

interface Employee extends People,Family  {
    designation: string,
    yearsOfExperience: number
}


let rafi:Employee = {
    firstName: "Shahjalal",
    lastName: "rafi",
    age: 88,
    email: "rafi@gmail.com",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    designation: "Frontend Developer",
    yearsOfExperience: 10,
    isWife: false
}

console.log(rafi.fullName())
