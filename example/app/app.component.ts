import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    fileInputOpts: any = {
        uploadUrl: "/App/Goods/UploadImges"
    };

    constructor() {
    }

    ngOnInit() {
    }

    ready($event: any) {
        console.log($event);
    }

    filebatchuploadcomplete($event: any) {
        console.log($event);
    }

    filebatchuploaderror($event: any) {
        console.log($event);
    }

    fileuploaded($event: any) {
        console.log($event);
    }

    fileuploaderror($event: any) {
        console.log($event);
    }
}
