import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemesService } from '../../../services/themes/themes.service';
import { ThemeInterface } from '../../../interfaces/theme/theme.interface';
import { ThemesEnum } from '../../../enums/themes/themes.enum';

@Component({
  selector: 'app-themes-switcher',
  templateUrl: './themes-switcher.component.html',
  styleUrls: ['./themes-switcher.component.scss'],
})
export class ThemesSwitcherComponent implements OnInit {
  currentTheme: ThemeInterface;

  constructor(
    private themesService: ThemesService,
    private renderer: Renderer2
  ) {
    this.themesService.currentThemeStageMessage.subscribe(
      (theme: ThemeInterface) => {
        if (this.currentTheme) {
          this.renderer.removeClass(
            document.body,
            `theme--${this.currentTheme}`
          );
        }
        this.renderer.addClass(document.body, `theme--${theme}`);
        return (this.currentTheme = theme);
      }
    );
  }

  ngOnInit(): void {}

  switchTheme() {
    this.themesService.updateThemeMessage(
      this.currentTheme === ThemesEnum.Dark ? ThemesEnum.Light : ThemesEnum.Dark
    );
  }
}
