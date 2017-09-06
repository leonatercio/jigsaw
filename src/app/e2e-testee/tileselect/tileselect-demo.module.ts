import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {TileselectBasicDemoComponent} from "../../live-demo/tile/app.component";
import {TileSelectBasicDemoModule} from "../../live-demo/tile/app.module";

import {TileselectLabelFieldComponent} from "./labelField/app.component";
import {TileSelectLabelFieldDemoModule} from "./labelField/app.module";

import {TileselectMultipleSelectDemoComponent} from "./multipleSelect/app.component";
import {TileSelectMultiSelectDemoModule} from "./multipleSelect/app.module";

import {TileselectSelectedItemsComponent} from "./selectedItems/app.component";
import {TileSelectSelectedItemsDemoModule} from "./selectedItems/app.module";


import {TileselecItemsChangeComponent} from "./selectedItemsChange/app.component";
import {TileSelectItemsChangeDemoModule} from "./selectedItemsChange/app.module";

import {TileselectOptionWidthComponent} from "./tileOptionWidth/app.component";
import {TileSelectOptionWidthDemoModule} from "./tileOptionWidth/app.module";

import {TileselectTrackItemByDemoComponent} from "./trackitemby/app.component"
import {TileSelectTrackItemByDemoModule} from "./trackitemby/app.module"

const inputDemoRoutes=[
    {
        path:'',
        redirectTo:'basic',
        pathMatch:'full'
    },
    {
        path:'live-demo', component: TileselectBasicDemoComponent
    },
    {
        path:'trackitemby', component: TileselectTrackItemByDemoComponent
    },
    {
        path:'selectedItems', component: TileselectSelectedItemsComponent
    },
    {
        path:'multipleSelect', component: TileselectMultipleSelectDemoComponent
    },
    {
        path:'tileOptionWidth', component: TileselectOptionWidthComponent
    },
    {
        path:'labelField', component: TileselectLabelFieldComponent
    },
    {
        path:'selectedItemsChange', component: TileselecItemsChangeComponent
    },
    {
        path:'**', //fallback router must in the last
        component: TileselectBasicDemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(inputDemoRoutes),
        TileSelectBasicDemoModule, TileSelectLabelFieldDemoModule, TileSelectMultiSelectDemoModule,
        TileSelectSelectedItemsDemoModule, TileSelectItemsChangeDemoModule,
        TileSelectOptionWidthDemoModule, TileSelectTrackItemByDemoModule
    ]
})
export class TileSelectDemoModule { }