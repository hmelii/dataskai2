import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectNameComponent } from './components/project-name/project-name.component';
import { ThemesSwitcherComponent } from './components/themes-switcher/themes-switcher.component';
import { MainTabsComponent } from './components/main-tabs/main-tabs.component';
import { ProjectPageModule } from "./pages/project-page/project-page.module";
import { IconSpriteModule } from "ng-svg-icon-sprite";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LogoComponent,
    HeaderComponent,
    ProjectNameComponent,
    ThemesSwitcherComponent,
    MainTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectPageModule,
    IconSpriteModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
