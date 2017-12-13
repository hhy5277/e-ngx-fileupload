import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ENgxFileUploadModule } from '../../src/e-ngx-fileupload.module';

@NgModule({
    imports: [
        BrowserModule,
        ENgxFileUploadModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
