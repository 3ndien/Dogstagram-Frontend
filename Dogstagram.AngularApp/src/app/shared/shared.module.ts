import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CreatePostComponent } from './layout/create-post.modal/create-post.component';
import { MaterialModule } from '../material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { CreatePostService } from '../shared/services/create-post.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavbarComponent, CreatePostComponent, PageNotFoundComponent],
  imports: [CommonModule, MaterialModule, SharedRoutingModule],
  providers: [CreatePostService],
  exports: [NavbarComponent, CreatePostComponent, PageNotFoundComponent],
})
export class SharedModule {}
