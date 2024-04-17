// let age: number | string | boolean = 20;

// age = "20"
// age = true;


// let ageArr:(string| number | boolean)[] = [23, 12, "42", "83", true]
// let ageArr2:string[] | number[] = [23, 12]
// let ageArr3:string[] | number[] = ["42", "83"]


// let day:"Saturday" | "Sunday" | "Monday" = "Saturday";

// day = "Sunday"
// day= "Monday"



// ========= Type narrowing ========


function sayDetails(name:string, age :string | number):void {
   let currentAge

   if(typeof age === "string") {
    currentAge = Number(age) - 2;
   }else {
    currentAge = age -2;
   }
   
    console.log(`Your name is: ${name}, your age is: ${currentAge}`)
}

sayDetails("Rafi", 10)