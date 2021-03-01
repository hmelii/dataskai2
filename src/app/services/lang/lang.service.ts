import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LangInterface } from '../../interfaces/langs/lang.interface';
import { LangsEnum } from '../../enums/langs/langs.enum';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private langStageMessage = new BehaviorSubject({
    id: 'en',
    title: LangsEnum.en,
  } as LangInterface);
  currentLangStageMessage = this.langStageMessage.asObservable();

  constructor() {}

  updateLangMessage(message: LangInterface) {
    this.langStageMessage.next(message);
  }
}
