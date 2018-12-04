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
    //selectedLang = this._locSvc.getLangCode();
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


