// class Computer {
//     private _ssd:number = 512;
    
//     constructor(public name:string, public ram:number) {
//         this.name= name;
//         this.ram = ram;
//     }

//     private getDetails():void {
//         console.log(`Computer Name: ${this.name}`)
//     }

//     get ssdDetails():number {
//         return this._ssd;
//     }
// }


// const computer1 = new Computer("Hp", 16)


interface ComputerInterface {
    name: string,
    ram: number
}

interface DetailsInterface {
    aboutComputer():void;
}

class Computer implements ComputerInterface, DetailsInterface {
    constructor(public name:string, public ram: number) {}

    aboutComputer(): void {
        console.log(`Computer name: ${this.name}, and ram: ${this.ram}`)
    }
}

let computer10 = new Computer("Dell", 16)