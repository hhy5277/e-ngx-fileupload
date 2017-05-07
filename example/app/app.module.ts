import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EssenceNg2FileUploadModule} from "../../src/essence-ng2-fileupload.module";

@NgModule({
    imports: [
        BrowserModule,
		EssenceNg2FileUploadModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
