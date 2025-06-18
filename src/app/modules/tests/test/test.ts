import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[TestComponent],
    imports:[BrowserModule,HttpClientModule],
    exports:[TestComponent]
})

export class TestModule{

}