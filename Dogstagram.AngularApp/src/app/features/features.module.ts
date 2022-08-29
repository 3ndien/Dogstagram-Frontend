import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../core/interceptorServices/jwt-interceptor.service';
import { DeactivateAccountComponent } from './profile/deactivate-account-modal/deactivate-account.component';
import { ProfileService } from './services/profile.service';
import { HomeComponent } from './home/home.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePictureComponent } from './profile/edit-profile/change-picture.modal/change-picture.component';
import { ProfileGalleryComponent } from './profile/profile-gallery/profile-gallery.component';
import { NgxsModule } from '@ngxs/store';
import { PostsState } from './store/states/posts.state';

@NgModule({
  declarations: [
    ProfileComponent,
    DeactivateAccountComponent,
    HomeComponent,
    ProfileInfoComponent,
    ProfileInfoComponent,
    EditProfileComponent,
    ChangePictureComponent,
    ProfileGalleryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FeaturesRoutingModule,
    NgxsModule.forFeature([PostsState]),
  ],
  providers: [
    ProfileService,
    ProfileComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    },
  ],
  exports: [],
})
export class FeaturesModule {}
