export class Student{
    id:number
    firstName:string
    lastName?:string
    address?:string
    phone:string
    active?:boolean
    avg?:number
    departureDate?:string
    professionId?:number
    year?:Years

    constructor( firstName:string, lastName:string,address:string, phone:string, avg:number) {
        
        this.id=0
        this.firstName=firstName
        this.lastName=lastName
        this.address=address
        this.phone=phone
        this.active=true
        this.avg=avg
        this.year=Years.A
    }
}

// export enum Professions{
//     Teaching, Programming, Architecture
// }

export enum Years{
    A, B, C
}

