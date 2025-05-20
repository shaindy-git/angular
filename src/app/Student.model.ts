export class Student{
    id:number
    firstName:string
    lastName:string
    address:string
    phone:string
    active:boolean
    avg:number
    departureDate?:string
    professions?:Professions

    constructor(id:number, firstName:string, lastName:string,address:string, phone:string,active:boolean,avg:number) {
        
        this.id=id
        this.firstName=firstName
        this.lastName=lastName
        this.address=address
        this.phone=phone
        this.active=active
        this.avg=avg
    }
}

export enum Professions{
    Teaching, Programming, Architecture
}