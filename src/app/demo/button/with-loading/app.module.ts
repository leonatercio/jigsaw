import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawButtonModule} from "jigsaw/component/button/button";
import {JigsawLoadingModule} from "jigsaw/component/loading/loading";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {ButtonWithLoadingComponent} from "./app.component";

@NgModule({
    declarations: [ButtonWithLoadingComponent],
    bootstrap: [ButtonWithLoadingComponent],
    imports: [CommonModule, JigsawButtonModule, JigsawLoadingModule, JigsawDemoDescriptionModule]
})
export class ButtonWithLoadingModule {

}
