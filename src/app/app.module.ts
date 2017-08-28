import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RetailComponent } from './content/retail/retail.component';
import { PaintingComponent } from './content/painting/painting.component';
import { ContactComponent } from './content/contact/contact.component';
import { SocialLinksComponent } from './content/social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { ColItemComponent } from './content/col-item/col-item.component';
import { ToggleMenuOpenDirective } from './directives/toggle-menu-open.directive';
import { MenuClassActiveDirective } from './directives/menu-class-active.directive';
import { LJData } from './services/lj_data';
import { SplitArrayService } from './services/splitArray.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { RenderingComponent } from './content/rendering/rendering.component';

const appRoutes: Routes = [
  { path: "", component: RetailComponent },
  { path: "rendering", component: RenderingComponent },
  { path: "painting", component: PaintingComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    RetailComponent,
    PaintingComponent,
    ContactComponent,
    SocialLinksComponent,
    FooterComponent,
    ColItemComponent,
    ToggleMenuOpenDirective,
    MenuClassActiveDirective,
    RenderingComponent
  ],
  imports: [
    BrowserModule,
    Ng2Bs3ModalModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LJData, SplitArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
