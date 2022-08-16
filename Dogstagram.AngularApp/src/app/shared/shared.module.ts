import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CreatePostComponent } from './layout/create-post/create-post.component';
import { MaterialModule } from '../material.module';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent, CreatePostComponent],
  imports: [CommonModule, MaterialModule, SharedRoutingModule],
  exports: [NavbarComponent, CreatePostComponent],
})
export class SharedModule {}
