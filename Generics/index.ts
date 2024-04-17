// function age(something:string):string {
//     return something;
// }

// function age1(something:number):number {
//     return something;
// }

// function age2(something:boolean):boolean {
//     return something;
// }


// age("Ten")
// age1(10)
// age2(false)



// function age<T>(something:T):T {
//     return something
// }


// age<string>("Ten")
// age<number>(10)
// age<boolean>(true)



function combineObj<T extends object, U extends object>(obj1:T, obj2:U) {
    return {...obj1, ...obj2}
}

combineObj({name: "Rafi", age: 10}, {channel: "code ABC"})