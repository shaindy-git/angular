import { Component } from "@angular/core";

@Component({
    templateUrl: "./app.component.html",
    selector: "my-app-root"
})
export class AppComponent {
    x: number = 5;

    title: string = "Hello My - App";

    calc() {
        return 0;
    }

    constructor() {
        //this.x = "sdfs";
    }

}