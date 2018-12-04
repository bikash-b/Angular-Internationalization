# Angular-Internationalization
Features to support internationalization for Angular applications

## How to use

First download or clone the `localization` folder to your project's app directory which consists of `LocalizeService` and `TranslatePipe` and include them in your `App Module` or any shared module as a part of providers and descriptions respectively.

Now you have to set the language code to the `LocalizeService` and provide the label json ( which consists list of key and value pair of the labels which you want to translate ). Follow the below code which needs to be mantain while loading your application.

<pre>
import { Component, OnInit } from '@angular/core';
import { LocalizeService } from './localization/localize.service';
import { messages_en_us } from './i18n/en-us';
import { messages_fr } from './i18n/fr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  sLang: string;
  languages: any[] = [{code: 'en-US', lang: 'English'},{code: 'fr', lang: 'French'}];

  constructor(private _locSvc: LocalizeService){}

  ngOnInit(){
    let messages;
    let selectedLang: string = this.sLang ? this.sLang : 'en-US';
    this._locSvc.setLangCode(selectedLang);
    if(selectedLang === 'en-US'){
      messages = messages_en_us;
    }else if(selectedLang === 'fr'){
      messages = messages_fr;
    }
    this._locSvc.setMessages(messages);
  }

  onLangChange(event){
    if(event){
      this.sLang = event;
      this.ngOnInit();
    }
  }
}
</pre>

Note that you can find your approach to set language code and the messages by using `navigator.language` and XHR service respectively.

Find the code for the HTML template,

<pre>
&lt;p&gt;
  {{ "Select language" | translate }} : 
  &lt;select (change)="onLangChange($event.target.value)"&gt;
    &lt;optiongt;{{ "Select" | translate }}&lt;/option&gt;
    &lt;option *ngFor="let lang of languages;" [value]="lang.code"%gt; {{lang.lang}} &lt;/option&gt;
  &lt;/select&gt;
&lt;/p&gt;
&lt;hello name="{{ name }}"&gt;&lt;/hello&gt;
&lt;p&gt;
  Start editing to see some magic happen :)
&lt;/p&gt;
&lt;p&gt; {{"helloAngular" | translate}} &lt;/p&gt;
</pre>

Note that `translate` is the pipe which transform your labels.

FInally include the i18n folder to your `app` folder for the above approach but you can mantain this in your `assets` folder or even out side of your application context as well but in this case you have to make the XHR request for getting the labels/messages.

## Demo

Please find the below link as the demo.

https://angular-localization-urh5tq.stackblitz.io/

## Author

learning.bikash@gmail.com
