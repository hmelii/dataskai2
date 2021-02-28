import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeInterface } from '../../interfaces/theme/theme.interface';
import { ThemesEnum } from '../../enums/themes/themes.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private themeStageMessage = new BehaviorSubject(
    ThemesEnum.Dark as ThemeInterface
  );
  currentThemeStageMessage = this.themeStageMessage.asObservable();

  constructor() {}

  updateThemeMessage(message: ThemeInterface) {
    this.themeStageMessage.next(message);
  }
}
