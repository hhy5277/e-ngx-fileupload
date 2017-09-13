# essence-ng2-fileupload

essence-ng2-fileupload is a fileUpload Directive for Angular.

依赖的第三方插件：[bootstrap-fileinput](http://plugins.krajee.com/file-input)

## Usage

1. Install

	```shell
	npm install --save essence-ng2-fileupload@latest
	```
	
2. Set in the .angular-cli.json（@angular/cli）

	```json
    "styles": [
        "../node_modules/font-awesome/css/font-awesome.min.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/bootstrap-fileinput/css/fileinput.min.css"
    ],
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/bootstrap-fileinput/js/plugins/piexif.min.js",
        "../node_modules/bootstrap-fileinput/js/plugins/sortable.min.js",
        "../node_modules/bootstrap-fileinput/js/plugins/purify.min.js",
        "../node_modules/bootstrap-fileinput/js/fileinput.min.js",
        "../node_modules/bootstrap-fileinput/themes/fa/theme.min.js",
        "../node_modules/bootstrap-fileinput/js/locales/zh.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
	```

3. Add the EssenceNg2FileInputModule

	```typescript
	import {EssenceNg2FileUploadModule} from "essence-ng2-fileupload";
	@NgModule({
	    imports: [
	        EssenceNg2FileUploadModule
	    ]
	})
	```

4. Use in the template

	```html
	<input id="pic_file" type="file" class="file" name="file" multiple
           [essence-ng2-fileupload]="fileInputOpts"
           (ready)="ready($event)"
           (filebatchuploadcomplete)="filebatchuploadcomplete($event)"
           (filebatchuploaderror)="filebatchuploaderror($event)"
           (fileuploaded)="fileuploaded($event)"
           (fileuploaderror)="fileuploaderror($event)">
	```

5. Use in the component

	```typescript
	fileInputOpts: any = {
        uploadUrl: "/App/Goods/UploadImges"
    };

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
	```

## API

### Inputs

- `ssence-ng2-fileupload`（`Object`） - 与[bootstrap-fileinput配置属性](http://plugins.krajee.com/file-input#options)一致，默认配置如下：
```typescript
defaultOpts: any = {
    language: "zh",
    showCaption: false,
    resizeImage: true,
    allowedPreviewTypes: ['image', 'html', 'video', 'audio', 'flash'],
    previewFileIconSettings: {
        'doc': '<i class="fa fa-file-word-o text-primary"></i>',
        'xls': '<i class="fa fa-file-excel-o text-success"></i>',
        'ppt': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
        'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
        'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
        'htm': '<i class="fa fa-file-code-o text-info"></i>',
        'mov': '<i class="fa fa-file-movie-o text-warning"></i>',
        'mp3': '<i class="fa fa-file-audio-o text-warning"></i>',
        'txt': '<i class="fa fa-file-text text-info"></i>',
    },
    previewFileExtSettings: {
        'doc': function (ext) {
            return ext.match(/(doc|docx)$/i);
        },
        'xls': function (ext) {
            return ext.match(/(xls|xlsx)$/i);
        },
        'ppt': function (ext) {
            return ext.match(/(ppt|pptx)$/i);
        },
        'zip': function (ext) {
            return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
        },
        'htm': function (ext) {
            return ext.match(/(php|js|css|htm|html)$/i);
        },
        'txt': function (ext) {
            return ext.match(/(txt|ini|md)$/i);
        },
        'mov': function (ext) {
            return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
        },
        'mp3': function (ext) {
            return ext.match(/(mp3|wav)$/i);
        },
    }
};
```

### Outputs

- `ready` - fileinput初始化完成的事件，$event为当前EssenceNg2FileInputDirective实例

- `fileuploaded` - 单个文件上传成功的事件，$event = {event: event, data: data, previewId: previewId, index: index}

- `fileuploaderror` - 单个文件上传失败的事件 $event = {event: event, data: data, msg: msg}

- `filebatchuploadcomplete` - 批量文件上传完成的事件，$event = {event: event, data: data, previewId: previewId, index: index}

- `filebatchuploadsuccess` - 批量文件上传成功的事件，$event = {event: event, data: data, previewId: previewId, index: index}

- `filebatchuploaderror` - 批量文件上传失败的事件 $event = {event: event, data: data, msg: msg}

- `change` - 当通过文件浏览按钮在文件浏览窗中选择单个文件或多个文件时，将触发此事件 $event = event

### Instance Method

- `disable(): void` - 禁用上传控件
- `enable(): void` - 启用上传控件
- `reset(): void` - 重置上传控件
- `destroy(): void` - 销毁上传控件
- `refresh(): void` - 刷新上传控件
- `clear(): void` - 清空上传控件
- `upload(): void` - 上传
- `cancel(): void` - 取消上传

## Develop

	```shell
	npm install // 安装依赖包
	
	npm start // 启动项目
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
