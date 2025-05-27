import { Injectable } from "@angular/core";
import { Student } from "./Student.model";

@Injectable()
export class studentService {
    getStudents(): Student[] {
        return [{
            id: 1, firstName: "aaa", lastName: "aaa", address: "aaa", phone: "0548412052", active: true, avg: 80, testsList: [
                { id: 1, date: "20/02/2025", description: "test1", mark: 5 }]
        },
        { id: 2, firstName: "bbb", lastName: "bbb", address: "bbb", phone: "0548412052", active: true, avg: 98 },
        { id: 3, firstName: "ccc", lastName: "ccc", address: "ccc", phone: "0548412052", active: false, avg: 98, departureDate: "20-02-2025" },
        ]
    }
}