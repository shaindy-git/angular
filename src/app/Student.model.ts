import { Test } from "./models/test.model"
import { DaysOfAbsence } from "./models/daysOfAbsence.model";

export class Student {
    id: number
    firstName: string
    lastName?: string
    address?: string
    phone: string
    active?: boolean
    avg?: number
    departureDate?: string
    professionId?: number
    year?: Years
    testsList?: Test[]=[ 
            new Test(1, "20/02/2025", "test1", 5),
            new Test(2, "21/02/2025", "test2", 90),
            new Test(3, "22/02/2025", "test3", 75)
        ]
    daysOfAbsence?:DaysOfAbsence[]=[new DaysOfAbsence("20/20/2025", 2)]

    constructor(firstName: string, lastName: string, address: string, phone: string, avg: number) {

        this.id = 0
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.phone = phone
        this.active = true
        this.avg = avg
        this.year = Years.A
        // this.testsList= 
    }
    
    
}

// export enum Professions{
//     Teaching, Programming, Architecture
// }

export enum Years {
    A, B, C
}

