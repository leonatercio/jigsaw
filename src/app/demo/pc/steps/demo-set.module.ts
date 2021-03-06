import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {StepsHorizontalBasicModule} from "./basic/demo.module";
import {StepsClickChangeStatusModule} from "./step-interactive/demo.module";
import {StepsVerticalModule} from "./vertical/demo.module";
import {StepsHorizontalBasicComponent} from "./basic/demo.component";
import {StepsVerticalFullComponent} from "./vertical/demo.component";
import {StepsClickChangeStatusComponent} from "./step-interactive/demo.component";
import {StepsCustomIconsModule} from "./custom-icons/demo.module";
import {StepsCustomIconsComponent} from "./custom-icons/demo.component";
import {StepsMultilineComponent} from "./steps-multiline/demo.component";
import {StepsMultilineModule} from "./steps-multiline/demo.module";

export const routerConfig = [
    {
        path: 'basic', component: StepsHorizontalBasicComponent,
    },
    {
        path: 'vertical', component: StepsVerticalFullComponent,
    },
    {
        path: 'step-interactive', component: StepsClickChangeStatusComponent
    },
    {
        path:'custom-icons',component:StepsCustomIconsComponent
    },
    {
        path:'steps-multiline',component:StepsMultilineComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig),
        StepsHorizontalBasicModule,
        StepsClickChangeStatusModule,
        StepsCustomIconsModule,
        StepsVerticalModule,
        StepsMultilineModule
    ]
})
export class StepsDemoModule {

}
