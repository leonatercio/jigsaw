import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawTileSelectModule} from "jigsaw/component/list-and-tile/tile";
import {JigsawComboSelectModule} from "jigsaw/component/combo-select";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {ComboSelectChangeDemo} from "./app.component";

@NgModule({
    declarations: [ComboSelectChangeDemo],
    bootstrap: [ComboSelectChangeDemo],
    imports: [
        JigsawComboSelectModule, JigsawTileSelectModule, CommonModule, JigsawDemoDescriptionModule
    ]
})
export class ComboSelectChangeDemoModule {

}
