import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RetailComponent } from './content/retail/retail.component';
import { ThreeDimComponent } from './content/three-dim/three-dim.component';
import { PaintingComponent } from './content/painting/painting.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { SocialLinksComponent } from './content/social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { ColItemComponent } from './content/col-item/col-item.component';
import { ToggleMenuOpenDirective } from './directives/toggle-menu-open.directive';
import { MenuClassActiveDirective } from './directives/menu-class-active.directive';
import { LJData } from './services/lj_data';
import { SplitArrayService } from './services/splitArray.service';
import { GalleryComponent } from './content/gallery/gallery.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    RetailComponent,
    ThreeDimComponent,
    PaintingComponent,
    AboutComponent,
    ContactComponent,
    SocialLinksComponent,
    FooterComponent,
    ColItemComponent,
    ToggleMenuOpenDirective,
    MenuClassActiveDirective,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    Ng2Bs3ModalModule
  ],
  providers: [LJData, SplitArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
