import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterOnlyLayoutComponent} from './footer-only-layout/footer-only-layout.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AnnouncementComponent} from './announcement/announcement.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ToasterComponent} from './toaster/toaster.component';
import {ToasterModule} from 'angular2-toaster';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    FooterComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterOnlyLayoutComponent,
    NavigationComponent,
    AnnouncementComponent,
    NotFoundComponent,
    ToasterComponent,
    PaginatorComponent,
  ],
  exports: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ToasterModule,
  ]
})
export class LayoutModule { }
