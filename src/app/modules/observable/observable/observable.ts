import { NgModule } from "@angular/core";
import { ObservableComponent } from "./observable.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[ObservableComponent],
    imports:[HttpClientModule],
    exports:[ObservableComponent]
})

export class ObservableModule{

}