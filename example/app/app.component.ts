import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	fileInputOpts: any = {
		uploadUrl: '/App/Goods/UploadImges'
	};

	constructor() {
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

	fileclear($event: any) {
		console.log($event);
	}

	filereset($event: any) {
		console.log($event);
	}

	filepreupload($event: any) {
		console.log($event);
	}
}
