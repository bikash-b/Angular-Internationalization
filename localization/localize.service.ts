import { Injectable } from '@angular/core';

@Injectable()
export class LocalizeService {

  localizeMessages: any = {};
  selectedLangCode: string;

  constructor() { }

  getMessages(): any{
    return this.localizeMessages;
  }

  setMessages(messages: any){
    this.localizeMessages = messages;
  }

  getLangCode(): string{
    return this.selectedLangCode;
  }

  setLangCode(langCode: string){
    this.selectedLangCode = langCode;
  }
}