import {NgModule} from "@angular/core";
import {JigsawMobileButtonModule} from "jigsaw/mobile-components/button/button";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {ButtonWidthHeightDemoComponent} from "./demo.component";

@NgModule({
    declarations: [ButtonWidthHeightDemoComponent],
    exports: [ButtonWidthHeightDemoComponent],
    imports: [JigsawMobileButtonModule, JigsawDemoDescriptionModule]
})
export class ButtonWidthHeightDemoModule {

}
