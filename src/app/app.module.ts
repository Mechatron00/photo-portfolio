import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PhotosService } from './service/photos.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GallaryComponent } from './gallary/gallary.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, GallaryComponent, GalleryLightboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatRippleModule,
    MatButtonModule,
    
  ],
  providers: [PhotosService],

  bootstrap: [AppComponent],
})
export class AppModule {}
