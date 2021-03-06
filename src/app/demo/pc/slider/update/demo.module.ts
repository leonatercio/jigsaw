import {NgModule} from '@angular/core';
import {JigsawSliderModule} from "jigsaw/pc-components/slider/index";
import {JigsawSwitchModule} from "jigsaw/pc-components/switch/index";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {SliderUpdateDemoComponent} from './demo.component';

@NgModule({
    imports: [JigsawSwitchModule, JigsawSliderModule, JigsawDemoDescriptionModule],
    declarations: [SliderUpdateDemoComponent],
    exports: [SliderUpdateDemoComponent]
})
export class SliderUpdateDemoModule {
}
