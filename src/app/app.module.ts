import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/client/home/home.component';
// import { SkillsComponent } from "./components/client/skills/skills.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SkillsModule } from './modules/skills/skills.module';
import { ContextComponent } from './components/context/context.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './shared/carousel-holder/carousel-holder.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ContactComponent } from './components/client/home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ContextComponent,
    CarouselHolderComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        SkillsModule,
        CarouselModule, BrowserAnimationsModule, NoopAnimationsModule
        // import Skills Module Here
    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
