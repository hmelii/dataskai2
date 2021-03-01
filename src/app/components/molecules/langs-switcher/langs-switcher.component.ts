import { Component, OnInit } from '@angular/core';
import { LangInterface } from '../../../interfaces/langs/lang.interface';
import { LangsEnum } from '../../../enums/langs/langs.enum';
import { LangService } from '../../../services/lang/lang.service';
import { ThemeInterface } from '../../../interfaces/theme/theme.interface';
import { log } from 'util';

@Component({
  selector: 'app-langs-switcher',
  templateUrl: './langs-switcher.component.html',
  styleUrls: ['./langs-switcher.component.scss'],
})
export class LangsSwitcherComponent implements OnInit {
  currentLang: LangInterface;
  langs: LangInterface[] = Object.keys(LangsEnum).map((key) => ({
    id: key,
    title: LangsEnum[key],
  }));

  constructor(private langService: LangService) {
    this.langService.currentLangStageMessage.subscribe(
      (lang: LangInterface) => {
        return (this.currentLang = lang);
      }
    );
  }

  ngOnInit(): void {}

  handleChangeLang(id: string) {
    this.langService.updateLangMessage(
      this.langs.find((lang) => lang.id === id)
    );
  }
}
