import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CreatePostService } from './services/create-post.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../core/interceptorServices/jwt-interceptor.service';
import { DeactivateAccountComponent } from './profile/deactivate-account-modal/deactivate-account.component';
import { ProfileService } from './services/profile.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ProfileComponent, DeactivateAccountComponent, HomeComponent],
  imports: [CommonModule, MaterialModule, FeaturesRoutingModule],
  providers: [
    CreatePostService,
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
