// type NameType = {
//     firstName: string,
//     lastName: string
// }

// type ChannelType = {
//     channelName: string,
//     playlist: number,
//     instructorDetails: NameType
// }


// let instructorDetails:NameType = {
//     firstName: "Shahjalal",
//     lastName: "Rafi"
// }
// let instructorDetails2:NameType = {
//     firstName: "Hm",
//     lastName: "Nayem"
// }


// let channelDetails:ChannelType  = {
//     channelName: "Code ABC",
//     playlist: 10,
//     instructorDetails: {
//         firstName: "Shahjalal",
//         lastName: "Rafi"
//     }
// }
// let channelDetails2:ChannelType  = {
//     channelName: "Stack Learner",
//     playlist: 10,
//     instructorDetails: {
//         firstName: "HM",
//         lastName: "Nayeem"
//     }
// }





type NameType = {
    firstName: string,
    lastName: string,
}
type AgeType = {
    age: number
}



type DetailsType = NameType & AgeType










function sayDetails(obj:DetailsType):string {
    let {firstName, lastName, age} = obj;
    return `Full name: ${firstName} ${lastName}, age: ${age}`
}

let instructorDetails:DetailsType  = {
    firstName: "Shahjala",
    lastName: "Rafi",
    age: 10
}

console.log(sayDetails(instructorDetails))