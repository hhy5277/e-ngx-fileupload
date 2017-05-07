import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	fileInputOpts: any = {
		uploadUrl: "/App/Goods/UploadImges",
		uploadAsync: true,
		language: "zh",
		showCaption: false,
		showRemove: false,
		showPreview: true,
		previewFileType: "image",
		browseLabel: "选择图片",
		browseIcon: "<i class=\"glyphicon glyphicon-picture\"></i>",
		uploadClass: "btn btn-success",
		uploadIcon: "<i class=\"glyphicon glyphicon-upload\"></i>"
	};

	constructor () {
	}

	ngOnInit () {
	}

	ready ($event: any) {
		console.log($event);
	}

	filebatchuploadcomplete ($event: any) {
		console.log($event);
	}

	filebatchuploaderror ($event: any) {
		console.log($event);
	}

	fileuploaded ($event: any) {
		console.log($event);
	}

	fileuploaderror ($event: any) {
		console.log($event);
	}
}
